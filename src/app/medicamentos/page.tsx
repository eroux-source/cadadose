import type { Metadata } from "next";
import InfoNotice from "@/components/InfoNotice";
import Link from "next/link";
import { dictionary } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { getArticlesForMedication } from "@/content";
import { intentLabels } from "@/content/types";
import { medImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Medicamentos GLP-1 no Brasil: Mounjaro, Ozempic, Wegovy, Saxenda, Rybelsus", description: "Cada medicamento GLP-1 vendido no Brasil com a tabela da bula, conservação, dose esquecida e todas as perguntas respondidas pela bula.", alternates: { canonical: "/medicamentos" } };

export default async function MedsIndex() {
  const t = dictionary;
  return (
    <>
      <PageHero eyebrow="Medicamentos" title="Os GLP-1 vendidos no Brasil, cada um pela sua bula." lede={t.content.disclaimerShort} image="/img/g-compare.jpg" crumbs={[{ label: "Início", href: "/" }, { label: "Medicamentos" }]} />
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="rounded-[4px] bg-card p-4 md:p-8">
          <ul className="divide-y divide-border">
            {medications.map((m, i) => {
              const articles = getArticlesForMedication(m.slug);
              return (
                <li key={m.slug} className="grid items-center gap-6 py-8 md:grid-cols-[48px_1fr_300px]">
                  <span className="hidden text-sm text-label md:block">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="eyebrow dark">{m.activeIngredient} · {m.frequency === "daily" ? "uso diário" : "aplicação semanal"}</p>
                    <h2 className="mt-2 text-3xl"><Link href={`/medicamentos/${m.slug}`} className="hover:text-forest">{m.name.split(" (")[0]}</Link></h2>
                    <p className="mt-2 text-sm text-muted">{articles.length} perguntas respondidas pela bula{m.storageDays && m.storageLabel ? ` · ${m.storageDays} dias ${m.storageLabel}` : ""}.</p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {articles.slice(0, 6).map((a) => <Link key={a.intent} href={`/medicamentos/${m.slug}/${a.intent}`} className="chip hover:border-forest hover:text-forest">{intentLabels[a.intent]}</Link>)}
                    </div>
                    <Link href={`/medicamentos/${m.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-forest">Ver as respostas <span aria-hidden>›</span></Link>
                  </div>
                  <Link href={`/medicamentos/${m.slug}`} className="aspect-[3/2] overflow-hidden rounded-[4px]"><img src={medImage(m.slug)} alt="" className="photo" loading="lazy" /></Link>
                </li>
              );
            })}
          </ul>
        </div>
        <InfoNotice className="mt-4" />
      </div>
    </>
  );
}
