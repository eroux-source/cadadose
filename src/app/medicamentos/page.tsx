import type { Metadata } from "next";
import InfoNotice from "@/components/InfoNotice";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <PageHero eyebrow="Medicamentos" title="Os GLP-1 vendidos no Brasil, cada um pela sua bula." lede={t.content.disclaimerShort} image="/img/g-compare.jpg" />
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
      <InfoNotice />
      <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {medications.map((m) => {
          const articles = getArticlesForMedication(m.slug);
          return (
            <div key={m.slug}>
              <Link href={`/medicamentos/${m.slug}`} className="group block">
                <div className="aspect-[3/2] overflow-hidden rounded-md"><img src={medImage(m.slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                <p className="eyebrow mt-3">{m.activeIngredient} · {m.frequency === "daily" ? "uso diário" : "semanal"}</p>
                <h2 className="mt-1 text-2xl group-hover:text-accent">{m.name.split(" (")[0]}</h2>
              </Link>
              <p className="mt-1 text-sm text-muted">{articles.length} perguntas respondidas</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {articles.slice(0, 5).map((a) => (
                  <Link key={a.intent} href={`/medicamentos/${m.slug}/${a.intent}`} className="chip hover:border-foreground">{intentLabels[a.intent]}</Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </>
  );
}
