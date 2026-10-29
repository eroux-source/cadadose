import { ImageResponse } from "next/og";
import { getArticle } from "@/content";
import { getMedication } from "@/lib/medications";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "CadaDose";

export default async function Image({ params }: { params: Promise<{ slug: string; intent: string }> }) {
  const { slug, intent } = await params;
  const a = getArticle(slug, intent);
  const med = getMedication(slug);
  const title = a?.title ?? "CadaDose";
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#1e5bd6", color: "#fff", padding: 64, fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, opacity: 0.85 }}>
          <span>CadaDose · {med?.name.split(" (")[0] ?? ""}</span>
          <span>pela bula ANVISA</span>
        </div>
        <div style={{ fontSize: title.length > 70 ? 48 : 58, fontWeight: 700, lineHeight: 1.1, letterSpacing: -1 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26 }}>
          <span style={{ background: "#ff8a5b", color: "#3a1a0e", padding: "8px 18px", borderRadius: 999, fontWeight: 700 }}>Baseado na bula</span>
          <span style={{ opacity: 0.85 }}>Apenas para informação, não é orientação médica</span>
        </div>
      </div>
    ),
    size,
  );
}
