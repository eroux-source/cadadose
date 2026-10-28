import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteName, siteUrl } from "@/lib/locales";
import { dictionary as t } from "@/i18n/dictionaries";
import { getMedication } from "@/lib/medications";
import { allArticles, getArticle } from "@/content";
import { intentLabels } from "@/content/types";

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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: a.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="text-sm text-muted">
        <Link href="/medicamentos" className="hover:text-accent">{t.nav.meds}</Link> ›{" "}
        <Link href={`/medicamentos/${slug}`} className="hover:text-accent">{med.name}</Link> › {intentLabels[a.intent]}
      </nav>
      <h1 className="mt-4 text-3xl font-semibold leading-tight">{a.title}</h1>
      <p className="mt-2 text-sm text-muted">
        {t.content.updated} {new Date(a.updated + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}
        {!a.reviewed && <> · {t.content.reviewPending}</>}
      </p>

      <div className="mt-6 rounded-2xl bg-accent-soft p-5">
        <p className="text-lg leading-relaxed">{a.answer}</p>
        <p className="mt-3 text-xs text-muted">
          Fonte: {a.sources.map((s, i) => (
            <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>
          ))}
        </p>
      </div>

      {a.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-xl font-semibold">{s.heading}</h2>
          {s.paragraphs?.map((p) => (
            <p key={p} className="mt-3 leading-relaxed">{p}</p>
          ))}
          {s.steps && (
            <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed">
              {s.steps.map((x) => <li key={x}>{x}</li>)}
            </ol>
          )}
          {s.bullets && (
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">
              {s.bullets.map((x) => <li key={x}>{x}</li>)}
            </ul>
          )}
          {s.table && (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>{s.table.head.map((h) => <th key={h} className="border-b border-border py-2 pr-4 text-left font-semibold">{h}</th>)}</tr>
                </thead>
                <tbody>
                  {s.table.rows.map((r, i) => (
                    <tr key={i}>{r.map((c, j) => <td key={j} className="border-b border-border py-2 pr-4 align-top">{c}</td>)}</tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="mt-2 text-xs text-muted">Fonte: <a href={a.sources[0].url} rel="noopener" className="underline">{a.sources[0].label}</a></p>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-xl font-semibold">{t.content.faq}</h2>
        <dl className="mt-3 space-y-4">
          {a.faq.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-muted leading-relaxed">{f.a} <a href={a.sources[0].url} rel="noopener" className="underline text-xs">[fonte]</a></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 text-sm text-muted">
        <h2 className="font-semibold text-foreground">{t.content.sources}</h2>
        <ul className="mt-2 list-disc pl-6">
          {a.sources.map((s) => (
            <li key={s.url}><a href={s.url} rel="noopener" className="underline">{s.label}</a></li>
          ))}
        </ul>
        <p className="mt-4">{t.content.disclaimerShort}</p>
      </section>

      <Link href="/app" className="mt-10 inline-block rounded-full bg-accent px-5 py-2.5 text-white font-medium">
        {t.content.openApp}
      </Link>
    </article>
  );
}
