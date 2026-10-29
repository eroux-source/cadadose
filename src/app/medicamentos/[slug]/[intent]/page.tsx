import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteName, siteUrl } from "@/lib/locales";
import { dictionary as t } from "@/i18n/dictionaries";
import { getMedication } from "@/lib/medications";
import { allArticles, getArticle } from "@/content";
import { intentLabels } from "@/content/types";
import ArticleBody from "@/components/ArticleBody";
import Related from "@/components/Related";
import { themeImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

export function generateStaticParams() {
  return allArticles.map((a) => ({ slug: a.medicationSlug, intent: a.intent }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; intent: string }> }): Promise<Metadata> {
  const { slug, intent } = await params;
  const a = getArticle(slug, intent);
  if (!a) return {};
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: `/medicamentos/${slug}/${intent}` },
    openGraph: { title: a.title, description: a.description, type: "article", modifiedTime: a.updated },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string; intent: string }> }) {
  const { slug, intent } = await params;
  const a = getArticle(slug, intent);
  const med = getMedication(slug);
  if (!a || !med) notFound();
  const url = `${siteUrl}/medicamentos/${slug}/${intent}`;
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      name: a.title,
      description: a.description,
      url,
      inLanguage: "pt-BR",
      dateModified: a.updated,
      about: { "@type": "Drug", name: med.name, activeIngredient: med.activeIngredient },
      publisher: { "@type": "Organization", name: siteName, url: siteUrl },
    },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Perguntas", item: `${siteUrl}/perguntas` }, { "@type": "ListItem", position: 2, name: med.name, item: `${siteUrl}/medicamentos/${slug}` }, { "@type": "ListItem", position: 3, name: intentLabels[a.intent], item: url }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero eyebrow={intentLabels[a.intent]} title={a.title} lede={a.description} tall crumbs={[{ label: "Perguntas", href: "/perguntas" }, { label: med.name, href: `/medicamentos/${slug}` }, { label: intentLabels[a.intent] }]} />
      <article>
        <ArticleBody a={a} path={`/medicamentos/${slug}/${intent}`} title={a.title} image={themeImage(intent, slug)} />
      </article>
      <Related slug={slug} intent={intent} />
    </>
  );
}
