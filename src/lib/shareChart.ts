"use client";

/**
 * Turns the on-screen weight chart (an inline SVG) into a branded PNG and hands it to the
 * Web Share API (WhatsApp, Instagram, Facebook groups) or downloads it. No data leaves the
 * device except the image the user chooses to share.
 */
export async function shareWeightChart(opts: { svg: SVGSVGElement; headline: string; subline: string; filename: string }) {
  const { svg, headline, subline, filename } = opts;
  const W = 1080;
  const H = 1080;
  const chartH = 520;

  // Resolve CSS variables so the exported image doesn't depend on the page theme.
  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue("--accent").trim() || "#0f766e";

  const inner = svg.cloneNode(true) as SVGSVGElement;
  inner.setAttribute("x", "60");
  inner.setAttribute("y", "300");
  inner.setAttribute("width", String(W - 120));
  inner.setAttribute("height", String(chartH));
  inner.removeAttribute("class");
  inner.querySelectorAll("[stroke='var(--accent)'],[fill='var(--accent)']").forEach((el) => {
    if (el.getAttribute("stroke") === "var(--accent)") el.setAttribute("stroke", accent);
    if (el.getAttribute("fill") === "var(--accent)") el.setAttribute("fill", accent);
  });
  inner.querySelectorAll("[stroke='currentColor'],[fill='currentColor']").forEach((el) => {
    if (el.getAttribute("stroke") === "currentColor") el.setAttribute("stroke", "#1c1b18");
    if (el.getAttribute("fill") === "currentColor") el.setAttribute("fill", "#1c1b18");
  });

  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const outer = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#fbfaf7"/>
  <text x="60" y="120" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="64" font-weight="700" fill="${accent}">${esc(headline)}</text>
  <text x="60" y="190" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="34" fill="#6b6a66">${esc(subline)}</text>
  ${new XMLSerializer().serializeToString(inner)}
  <text x="60" y="${H - 80}" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="30" fill="#6b6a66">Meu diário de tratamento · cadadose.com</text>
  <text x="${W - 60}" y="${H - 80}" text-anchor="end" font-family="system-ui, -apple-system, Segoe UI, Roboto, sans-serif" font-size="36" font-weight="700" fill="${accent}">CadaDose</text>
</svg>`;

  const blob = await new Promise<Blob>((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(new Blob([outer], { type: "image/svg+xml;charset=utf-8" }));
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = W;
      canvas.height = H;
      canvas.getContext("2d")!.drawImage(img, 0, 0);
      URL.revokeObjectURL(url);
      canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png");
    };
    img.onerror = () => reject(new Error("svg render failed"));
    img.src = url;
  });

  const file = new File([blob], filename, { type: "image/png" });
  if (navigator.canShare?.({ files: [file] })) {
    try {
      await navigator.share({ files: [file], text: `${headline} · cadadose.com` });
      return "shared";
    } catch {
      /* user cancelled */
    }
  }
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  return "downloaded";
}
