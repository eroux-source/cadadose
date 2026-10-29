import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteName, siteUrl } from "@/lib/locales";
import { dictionary as t } from "@/i18n/dictionaries";
import { guias, getGuide } from "@/content/guias";
import ArticleBody from "@/components/ArticleBody";
import { guideImage } from "@/lib/images";
import { guiasApps } from "@/content/guias-apps";
import { guiasMarcas, guiasMarcasExtra, guiaCaneta } from "@/content/guias-marcas";

export function generateStaticParams() {
  return guias.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};
  return { title: g.title, description: g.description, alternates: { canonical: `/guias/${slug}` }, openGraph: { title: g.title, description: g.description, type: "article", modifiedTime: g.updated } };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();
  const url = `${siteUrl}/guias/${slug}`;
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "MedicalWebPage", name: g.title, description: g.description, url, inLanguage: "pt-BR", dateModified: g.updated, publisher: { "@type": "Organization", name: siteName, url: siteUrl } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-muted"><Link href="/medicamentos" className="hover:text-accent">{t.nav.meds}</Link> › Comparações</nav>
      <span className="eyebrow mt-4">{guiasApps.some((x) => x.slug === slug) ? "Comparação de apps" : [...guiasMarcas, ...guiasMarcasExtra, ...guiaCaneta].some((x) => x.slug === slug) ? "Mercado brasileiro" : "Comparação pelas bulas"}</span>
      <h1 className="mt-2 text-3xl leading-tight md:text-5xl">{g.title}</h1>
      <div className="mt-8 aspect-[3/2] overflow-hidden rounded-md"><img src={guideImage(slug)} alt="" className="photo" /></div>
      <ArticleBody a={g} path={`/guias/${slug}`} title={g.title} note={guiasApps.some((x) => x.slug === slug) ? "Baseado nas fichas oficiais das lojas de apps, citadas em cada trecho." : [...guiasMarcas, ...guiasMarcasExtra, ...guiaCaneta].some((x) => x.slug === slug) ? "Baseado em comunicados da ANVISA e reportagens que os citam, indicados em cada trecho." : undefined} />
    </article>
  );
}
