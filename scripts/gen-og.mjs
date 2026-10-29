// Generates static social cards (1200x630 JPEG, < 200 KB) in public/og for the landing, every article and every guide.
// Run after adding content: node scripts/gen-og.mjs  (needs the Instrument Serif + Inter fonts installed for fontconfig).
import sharp from "sharp";
import { readFileSync, mkdirSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";

const list = JSON.parse(execSync("npx tsx scripts/og-list.ts", { encoding: "utf8" }));
mkdirSync("public/og", { recursive: true });

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
// Rough serif width table: ~0.44em per character for Instrument Serif at display sizes.
function wrap(text, size, maxWidth, maxLines) {
  const per = size * 0.44;
  const max = Math.floor(maxWidth / per);
  const words = text.split(" ");
  const lines = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) { lines.push(cur); cur = w; } else cur = (cur + " " + w).trim();
  }
  if (cur) lines.push(cur);
  if (lines.length > maxLines) { lines.length = maxLines; lines[maxLines - 1] = lines[maxLines - 1].replace(/\s+\S*$/, "") + "…"; }
  return lines;
}

async function card({ key, title, eyebrow, photo }) {
  const out = `public/og/${key}.jpg`;
  const W = 1200, H = 630, PW = 460, X = PW + 48, TW = W - X - 64;
  const size = title.length > 90 ? 50 : title.length > 60 ? 58 : 68;
  const lines = wrap(title, size, TW, 5);
  const lh = size * 1.06;
  const startY = H / 2 - ((lines.length - 1) * lh) / 2 + size * 0.35;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
    <defs><linearGradient id="g" x1="0" x2="1"><stop offset="0.7" stop-color="#1b2b2b" stop-opacity="0"/><stop offset="1" stop-color="#1b2b2b"/></linearGradient></defs>
    <rect x="0" y="0" width="${PW}" height="${H}" fill="url(#g)"/>
    <text x="${X}" y="76" font-family="Inter" font-size="20" letter-spacing="3" fill="#7cea99">${esc(eyebrow.toUpperCase())}</text>
    <text x="${W - 64}" y="82" text-anchor="end" font-family="Instrument Serif" font-size="38" fill="#ffffff">Cada<tspan fill="#7cea99">Dose</tspan></text>
    ${lines.map((l, i) => `<text x="${X}" y="${startY + i * lh}" font-family="Instrument Serif" font-size="${size}" fill="#ffffff">${esc(l)}</text>`).join("")}
    <rect x="${X}" y="${H - 92}" width="206" height="42" rx="4" fill="#7cea99"/>
    <text x="${X + 103}" y="${H - 64}" text-anchor="middle" font-family="Inter" font-size="20" fill="#1b2b2b">pela bula ANVISA</text>
    <text x="${X + 226}" y="${H - 64}" font-family="Inter" font-size="20" fill="#ffffff" fill-opacity="0.75">Informação, não orientação médica</text>
  </svg>`;
  const photoBuf = await sharp(`public/${photo}`).resize(PW, H, { fit: "cover" }).toBuffer();
  await sharp({ create: { width: W, height: H, channels: 3, background: "#1b2b2b" } })
    .composite([{ input: photoBuf, left: 0, top: 0 }, { input: Buffer.from(svg), left: 0, top: 0 }])
    .jpeg({ quality: 78, mozjpeg: true })
    .toFile(out);
  return out;
}

let n = 0;
for (const item of list) { await card(item); n++; }
console.log(`${n} social cards written to public/og`);
