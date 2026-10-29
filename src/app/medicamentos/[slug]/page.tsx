import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionary as t } from "@/i18n/dictionaries";
import { getMedication, medications } from "@/lib/medications";
import { getArticlesForMedication } from "@/content";
import InfoNotice from "@/components/InfoNotice";
import { medImage, themeImage } from "@/lib/images";
import PageHero from "@/components/PageHero";
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
    <>
    <PageHero eyebrow={`${med.activeIngredient} · ${med.frequency === "daily" ? "uso diário" : "aplicação semanal"}`} title={`${med.name.split(" (")[0]}: ${articles.length} perguntas respondidas pela bula`} lede={t.content.disclaimerShort} image={medImage(slug)} crumbs={[{ label: "Medicamentos", href: "/medicamentos" }, { label: med.name.split(" (")[0] }]} />
    <div className="mx-auto max-w-5xl px-6 py-12 md:py-16">
      <InfoNotice />

      {med.doseStepsMg.length > 0 && (
        <div className="mt-10 rounded-md border border-border bg-card p-5 text-sm">
          <h2 className="text-lg">{intentLabels["tabela-de-dose"]}</h2>
          <p className="mt-2">{med.doseStepsMg.map((d) => `${d.toLocaleString("pt-BR")} mg`).join(" → ")}</p>
          {med.dosesPerPen && <p className="mt-1 text-muted">{med.form === "single-use-pen" ? "Caneta de uso único (1 dose)" : med.form === "tablet" ? `Caixa com ${med.dosesPerPen} comprimidos` : `Caneta com ${med.dosesPerPen} doses`}</p>}
          {med.storageDays && <p className="text-muted">Conservação: {med.storageDays} dias {med.storageLabel}</p>}
          {!med.reviewed && <p className="mt-2 text-xs text-muted">{t.content.reviewPending}</p>}
          <p className="mt-2 text-xs text-muted">
            Fonte: {med.sources.map((s, i) => (
              <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>
            ))}
          </p>
        </div>
      )}

      <h2 className="mt-14 text-2xl md:text-3xl">{t.content.allAbout} {med.activeIngredient}</h2>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {articles.map((a) => (
          <li key={a.intent}>
            <Link href={`/medicamentos/${slug}/${a.intent}`} className="group block">
              <div className="aspect-[3/2] overflow-hidden rounded-md"><img src={themeImage(a.intent, slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
              <p className="eyebrow mt-3">{intentLabels[a.intent]}</p>
              <p className="mt-1 text-lg leading-snug">{a.title}</p>
            </Link>
          </li>
        ))}
        {articles.length === 0 && <li className="text-sm text-muted">Em breve.</li>}
      </ul>

      <Link href="/app" className="btn btn-primary mt-12">
        {t.content.openApp}
      </Link>
    </div>
    </>
  );
}
