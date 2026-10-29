import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications } from "@/lib/medications";
import { intentLabels } from "@/content/types";
import { themeImage, guideImage, medImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Perguntas sobre Mounjaro, Ozempic e Wegovy respondidas pela bula",
  description: "Todas as perguntas mais buscadas sobre GLP-1 no Brasil, respondidas com a bula do paciente aprovada pela ANVISA, citada em cada resposta.",
  alternates: { canonical: "/perguntas" },
};

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

function Card({ href, img, meta, title }: { href: string; img: string; meta: string[]; title: string }) {
  return (
    <Link href={href} className="group">
      <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={img} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
      <p className="mt-3 flex flex-wrap gap-2 text-xs text-muted">{meta.map((m, i) => <span key={i}>{i > 0 && <span className="mr-2 text-border">|</span>}{m}</span>)}</p>
      <h3 className="mt-1 text-xl leading-snug">{title}</h3>
      <p className="mt-2 text-sm font-medium">Ler mais <span aria-hidden>↗</span></p>
    </Link>
  );
}

export default function PerguntasHub() {
  const featured = allArticles.find((a) => a.medicationSlug === "mounjaro" && a.intent === "anticoncepcional") ?? allArticles[0];
  const themes = [...new Set(allArticles.map((a) => a.intent))];
  return (
    <>
      <PageHero eyebrow="Respondido pela bula" title={`${allArticles.length} perguntas, com a fonte ao lado.`} lede="Cada resposta cita a bula do paciente aprovada pela ANVISA (registro e data na página). Quando a bula não responde, a página diz isso." crumbs={[{ label: "Início", href: "/" }, { label: "Perguntas" }]} />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        {/* Featured */}
        <Link href={`/medicamentos/${featured.medicationSlug}/${featured.intent}`} className="grid overflow-hidden rounded-[4px] bg-ink text-white md:grid-cols-2">
          <div className="aspect-[4/3] md:aspect-auto"><img src={themeImage(featured.intent, featured.medicationSlug)} alt="" className="photo" /></div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="flex gap-3 text-xs text-white/60"><span>{fmt(featured.updated)}</span><span>|</span><span>{intentLabels[featured.intent]}</span></p>
            <h2 className="mt-3">{featured.title}</h2>
            <p className="mt-4 max-w-md text-sm font-light text-white/75">{featured.answer}</p>
            <span className="btn btn-primary mt-6 w-fit">Ler a resposta</span>
          </div>
        </Link>

        {/* Themes */}
        <section className="mt-16">
          <span className="eyebrow dark">Por tema</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {themes.map((i) => <Link key={i} href={`/temas/${i}`} className="chip hover:border-forest hover:text-forest">{intentLabels[i]}</Link>)}
          </div>
        </section>

        {/* Guides */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4"><h2>Comparações e mercado</h2><span className="text-sm text-muted">{guias.length} guias</span></div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {guias.map((g) => <Card key={g.slug} href={`/guias/${g.slug}`} img={guideImage(g.slug)} meta={[fmt(g.updated), "Guia"]} title={g.title} />)}
          </div>
        </section>

        {/* Per medication */}
        {medications.map((m) => {
          const arts = allArticles.filter((a) => a.medicationSlug === m.slug);
          if (!arts.length) return null;
          return (
            <section key={m.slug} className="mt-20">
              <div className="grid items-center gap-6 rounded-[4px] bg-card p-4 md:grid-cols-[160px_1fr_auto] md:p-5">
                <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={medImage(m.slug)} alt="" className="photo" loading="lazy" /></div>
                <div><h2 className="text-3xl">{m.name}</h2><p className="mt-1 text-sm text-muted">{arts.length} perguntas respondidas pela bula · {m.activeIngredient}</p></div>
                <Link href={`/medicamentos/${m.slug}`} className="btn btn-dark">Ver o medicamento</Link>
              </div>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
                {arts.map((a) => <Card key={a.intent} href={`/medicamentos/${m.slug}/${a.intent}`} img={themeImage(a.intent, m.slug)} meta={[fmt(a.updated), intentLabels[a.intent]]} title={a.title} />)}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
