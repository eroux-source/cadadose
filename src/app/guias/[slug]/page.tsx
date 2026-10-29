import type { Metadata } from "next";
import { social } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteName, siteUrl } from "@/lib/locales";
import { dictionary as t } from "@/i18n/dictionaries";
import { guias, getGuide } from "@/content/guias";
import ArticleBody from "@/components/ArticleBody";
import { guideImage } from "@/lib/images";
import PageHero from "@/components/PageHero";
import { guiasApps } from "@/content/guias-apps";
import { guiasMarcas, guiasMarcasExtra, guiaCaneta } from "@/content/guias-marcas";

export function generateStaticParams() {
  return guias.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return { title: g.title, description: g.description, alternates: { canonical: `/guias/${slug}` }, ...social(`g-${slug}`, g.title, g.description, { type: "article", modified: g.updated, path: `/guias/${slug}` }) };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${siteUrl}/guias/${slug}`;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "MedicalWebPage", name: g.title, description: g.description, url, inLanguage: "pt-BR", dateModified: g.updated, image: `${siteUrl}/og/g-${slug}.jpg`, author: { "@type": "Organization", name: siteName, url: `${siteUrl}/sobre` }, publisher: { "@id": `${siteUrl}/#org` }, citation: g.sources.map((s) => s.url), mainEntityOfPage: url, speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "article p.text-lg"] } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={guiasApps.some((x) => x.slug === slug) ? "Comparação de apps" : [...guiasMarcas, ...guiasMarcasExtra, ...guiaCaneta].some((x) => x.slug === slug) ? "Mercado brasileiro" : "Comparação pelas bulas"} title={g.title} lede={g.description} tall crumbs={[{ label: "Perguntas", href: "/perguntas" }, { label: "Guias" }]} />
    <article>
      <ArticleBody a={g} path={`/guias/${slug}`} title={g.title} image={guideImage(slug)} note={guiasApps.some((x) => x.slug === slug) ? "Baseado nas fichas oficiais das lojas de apps, citadas em cada trecho." : [...guiasMarcas, ...guiasMarcasExtra, ...guiaCaneta].some((x) => x.slug === slug) ? "Baseado em comunicados da ANVISA e reportagens que os citam, indicados em cada trecho." : undefined} />
    </article>
    </>
  );
}
