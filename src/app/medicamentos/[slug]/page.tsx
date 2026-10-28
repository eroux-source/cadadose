import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionary as t } from "@/i18n/dictionaries";
import { getMedication, medications } from "@/lib/medications";
import { getArticlesForMedication } from "@/content";
import { intentLabels } from "@/content/types";

export function generateStaticParams() {
  return medications.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) return {};
  return {
    title: `${med.name} — ${t.content.allAbout.toLowerCase()} ${med.activeIngredient}`,
    description: t.content.disclaimerShort,
    alternates: { canonical: `/medicamentos/${slug}` },
  };
}

export default async function MedicationHub({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();
  const articles = getArticlesForMedication(slug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{med.name}</h1>
      <p className="mt-2 text-muted">{t.content.disclaimerShort}</p>

      {med.doseStepsMg.length > 0 && (
        <div className="mt-6 rounded-2xl border border-border bg-card p-5 text-sm">
          <h2 className="font-semibold">{intentLabels["tabela-de-dose"]}</h2>
          <p className="mt-2">{med.doseStepsMg.map((d) => `${d.toLocaleString("pt-BR")} mg`).join(" → ")}</p>
          {med.dosesPerPen && <p className="mt-1 text-muted">{med.form === "single-use-pen" ? "Caneta de uso único (1 dose)" : `Caneta com ${med.dosesPerPen} doses`}</p>}
          {med.storageDays && <p className="text-muted">Conservação: {med.storageDays} dias {med.storageLabel}</p>}
          {!med.reviewed && <p className="mt-2 text-xs text-muted">{t.content.reviewPending}</p>}
          <p className="mt-2 text-xs text-muted">
            Fonte: {med.sources.map((s, i) => (
              <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>
            ))}
          </p>
        </div>
      )}

      <h2 className="mt-10 text-xl font-semibold">{t.content.allAbout} {med.activeIngredient}</h2>
      <ul className="mt-4 space-y-3">
        {articles.map((a) => (
          <li key={a.intent} className="rounded-2xl border border-border bg-card p-4">
            <Link href={`/medicamentos/${slug}/${a.intent}`} className="font-medium hover:text-accent">
              {a.title}
            </Link>
            <p className="mt-1 text-sm text-muted">{a.answer}</p>
          </li>
        ))}
        {articles.length === 0 && <li className="text-sm text-muted">Em breve.</li>}
      </ul>

      <Link href="/app" className="mt-10 inline-block rounded-full bg-accent px-5 py-2.5 text-white font-medium">
        {t.content.openApp}
      </Link>
    </div>
  );
}
