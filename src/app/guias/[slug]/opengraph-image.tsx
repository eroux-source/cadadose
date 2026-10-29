import { ImageResponse } from "next/og";
import { guias } from "@/content/guias";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CadaDose";

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = guias.find((g) => g.slug === slug)?.title ?? "CadaDose";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#111a17", color: "#fff", padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ fontSize: 28, opacity: 0.85 }}>CadaDose · Guia</div>
        <div style={{ fontSize: title.length > 70 ? 46 : 56, fontWeight: 400, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 26, opacity: 0.85 }}>Comparado pelas bulas e documentos da ANVISA</div>
      </div>
    ),
    size,
  );
}
