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
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-muted">
        <Link href="/perguntas" className="hover:text-accent">Perguntas</Link> ›{" "}
        <Link href={`/medicamentos/${slug}`} className="hover:text-accent">{med.name}</Link> › {intentLabels[a.intent]}
      </nav>
      <span className="eyebrow mt-4">{intentLabels[a.intent]}</span>
      <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">{a.title}</h1>
      <ArticleBody a={a} path={`/medicamentos/${slug}/${intent}`} title={a.title} />
      <Related slug={slug} intent={intent} />
    </article>
  );
}
