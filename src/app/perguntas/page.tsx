import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications } from "@/lib/medications";
import { intentLabels } from "@/content/types";
import { themeImage, guideImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Perguntas sobre Mounjaro, Ozempic e Wegovy respondidas pela bula",
  description: "Todas as perguntas mais buscadas sobre GLP-1 no Brasil, respondidas com a bula do paciente aprovada pela ANVISA, citada em cada resposta.",
  alternates: { canonical: "/perguntas" },
};

export default function PerguntasHub() {
  return (
    <>
    <PageHero eyebrow="Respondido pela bula" title={`${allArticles.length} perguntas sobre GLP-1, com a fonte ao lado.`} lede="Cada resposta cita a bula do paciente aprovada pela ANVISA (registro e data na página). Quando a bula não responde, a página diz isso." image="/img/t-para-que-serve.jpg" />
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">

      <section>
        <h2 className="text-2xl md:text-3xl">Por tema</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[...new Set(allArticles.map((a) => a.intent))].map((i) => (
            <Link key={i} href={`/temas/${i}`} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm hover:border-accent">{intentLabels[i]}</Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl md:text-3xl">Comparações e mercado</h2>
        <ul className="mt-5 grid gap-6 md:grid-cols-2">
          {guias.map((g) => (
            <li key={g.slug}>
              <Link href={`/guias/${g.slug}`} className="group flex gap-4">
                <div className="h-24 w-36 shrink-0 overflow-hidden rounded-md"><img src={guideImage(g.slug)} alt="" className="photo" loading="lazy" /></div>
                <div><p className="text-lg leading-snug group-hover:text-accent">{g.title}</p><p className="mt-1 text-sm text-muted line-clamp-2">{g.answer}</p></div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {medications.map((m) => {
        const arts = allArticles.filter((a) => a.medicationSlug === m.slug);
        if (!arts.length) return null;
        return (
          <section key={m.slug} className="mt-12">
            <h2 className="text-2xl md:text-3xl"><Link href={`/medicamentos/${m.slug}`} className="hover:text-accent">{m.name}</Link></h2>
            <ul className="mt-5 grid gap-6 md:grid-cols-2">
              {arts.map((a) => (
                <li key={a.intent}>
                  <Link href={`/medicamentos/${m.slug}/${a.intent}`} className="group flex gap-4">
                    <div className="h-24 w-36 shrink-0 overflow-hidden rounded-md"><img src={themeImage(a.intent, m.slug)} alt="" className="photo" loading="lazy" /></div>
                    <div><span className="eyebrow">{intentLabels[a.intent]}</span><p className="mt-1 text-lg leading-snug group-hover:text-accent">{a.title}</p></div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
    </>
  );
}
