import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/locales";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2026-10-28"); // bump on each content release
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/medicamentos`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/pro`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/perguntas`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...guias.map((g) => ({ url: `${siteUrl}/guias/${g.slug}`, lastModified: new Date(g.updated), changeFrequency: "monthly" as const, priority: 0.9 })),
    ...medications.map((m) => ({ url: `${siteUrl}/medicamentos/${m.slug}`, lastModified: now, changeFrequency: "weekly" as const, priority: 0.8 })),
    ...allArticles.map((a) => ({
      url: `${siteUrl}/medicamentos/${a.medicationSlug}/${a.intent}`,
      lastModified: new Date(a.updated),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
