import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { siteUrl, siteName } from "@/lib/locales";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
export function GET() {
  const items = [
    ...allArticles.map((a) => ({ title: a.title, url: `${siteUrl}/medicamentos/${a.medicationSlug}/${a.intent}`, desc: a.answer, date: a.updated })),
    ...guias.map((g) => ({ title: g.title, url: `${siteUrl}/guias/${g.slug}`, desc: g.answer, date: g.updated })),
  ].sort((x, y) => y.date.localeCompare(x.date));
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>${siteName}</title><link>${siteUrl}</link><description>Respostas sobre Mounjaro, Ozempic e Wegovy baseadas nas bulas aprovadas pela ANVISA.</description><language>pt-BR</language>\n${items.map((i) => `<item><title>${esc(i.title)}</title><link>${i.url}</link><guid>${i.url}</guid><pubDate>${new Date(i.date + "T12:00:00Z").toUTCString()}</pubDate><description>${esc(i.desc)}</description></item>`).join("\n")}\n</channel></rss>`;
  return new Response(xml, { headers: { "content-type": "application/rss+xml; charset=utf-8" } });
}
