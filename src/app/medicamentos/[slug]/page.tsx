import type { Metadata } from "next";
import { social } from "@/lib/seo";
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
    ...social(`med-${slug}`, `${med.name} — ${t.content.allAbout.toLowerCase()} ${med.activeIngredient}`, t.content.disclaimerShort, { path: `/medicamentos/${slug}` }),
  };
}

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

export default async function MedicationHub({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const med = getMedication(slug);
  if (!med) notFound();
  const articles = getArticlesForMedication(slug);
  const short = med.name.split(" (")[0];
  const facts: [string, string][] = [];
  if (med.doseStepsMg.length) facts.push(["Doses na bula", med.doseStepsMg.map((d) => `${d.toLocaleString("pt-BR")} mg`).join(" · ")]);
  if (med.dosesPerPen) facts.push([med.form === "tablet" ? "Comprimidos por caixa" : "Doses por caneta", med.form === "single-use-pen" ? "Caneta de uso único (1 dose)" : String(med.dosesPerPen)]);
  if (med.storageDays && med.storageLabel) facts.push(["Conservação", `${med.storageDays} dias ${med.storageLabel}`]);
  if (med.maxTempC) facts.push(["Temperatura máxima", `${med.maxTempC} °C`]);
  if (med.missedDoseWindowHours) facts.push(["Janela da dose esquecida", `${med.missedDoseWindowHours} h`]);

  return (
    <>
      <PageHero eyebrow={`${med.activeIngredient} · ${med.frequency === "daily" ? "uso diário" : "aplicação semanal"}`} title={`${short}: ${articles.length} perguntas respondidas pela bula`} lede={t.content.disclaimerShort} image={medImage(slug)} crumbs={[{ label: "Medicamentos", href: "/medicamentos" }, { label: short }]} />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        {facts.length > 0 && (
          <section className="grid gap-4 md:grid-cols-[1fr_2fr]">
            <div className="tile flex flex-col justify-between bg-forest text-white">
              <p className="eyebrow">O que a bula fixa</p>
              <h2 className="mt-6 text-4xl">Números da bula, sem interpretação</h2>
              <p className="mt-4 text-xs text-white/70">Fonte: {med.sources.map((s, i) => <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>)}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {facts.map(([k, v]) => (
                <div key={k} className="tile bg-card"><p className="text-xs text-label">{k}</p><p className="display mt-2 text-3xl">{v}</p></div>
              ))}
              {!med.reviewed && <p className="text-xs text-muted sm:col-span-2">{t.content.reviewPending}</p>}
            </div>
          </section>
        )}
        <InfoNotice className="mt-4" />

        <section className="mt-16">
          <div className="flex items-end justify-between gap-4"><h2>{t.content.allAbout} {med.activeIngredient}</h2><span className="text-sm text-muted">{articles.length} páginas</span></div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {articles.map((a) => (
              <Link key={a.intent} href={`/medicamentos/${slug}/${a.intent}`} className="group">
                <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={themeImage(a.intent, slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                <p className="mt-3 flex gap-3 text-xs text-muted"><span>{fmt(a.updated)}</span><span className="text-border">|</span><span>{intentLabels[a.intent]}</span></p>
                <h3 className="mt-1 text-xl leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm font-medium">Ler mais <span aria-hidden>↗</span></p>
              </Link>
            ))}
            {articles.length === 0 && <p className="text-sm text-muted">Em breve.</p>}
          </div>
        </section>

        <section className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-border pt-14 md:flex-row">
          <h2 className="max-w-xl">Registre a semana da dose de {short}</h2>
          <div className="flex gap-3"><Link href="/app" className="btn btn-dark">{t.content.openApp}</Link><Link href="/calendario" className="btn btn-ghost">Calendário</Link></div>
        </section>
      </div>
    </>
  );
}
