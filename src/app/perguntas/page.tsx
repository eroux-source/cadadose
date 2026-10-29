import type { Metadata } from "next";
import { social } from "@/lib/seo";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications, getMedication } from "@/lib/medications";
import PerguntasFilter from "@/components/PerguntasFilter";
import { intentLabels } from "@/content/types";
import { themeImage, guideImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Perguntas sobre Mounjaro, Ozempic e Wegovy respondidas pela bula",
  description: "Todas as perguntas mais buscadas sobre GLP-1 no Brasil, respondidas com a bula do paciente aprovada pela ANVISA, citada em cada resposta.",
  alternates: { canonical: "/perguntas" },
  ...social("perguntas", "Perguntas sobre Mounjaro, Ozempic e Wegovy respondidas pela bula", "Todas as perguntas mais buscadas sobre GLP-1 no Brasil, respondidas com a bula do paciente aprovada pela ANVISA.", { path: "/perguntas" }),
};

/** Theme groups for the filter bar; the dose pages all sit under one group. */
const cats = [
  { id: "aplicacao", label: "Aplicação", intents: ["como-aplicar", "onde-aplicar", "melhor-horario", "agulha-e-caneta", "frasco-ampola", "esqueci-de-aplicar"] },
  { id: "doses", label: "Doses", intents: ["tabela-de-dose", "dose-0-25-mg", "dose-0-5-mg", "dose-1-mg", "dose-1-7-mg", "dose-2-4-mg", "dose-2-5-mg", "dose-5-mg", "dose-7-5-mg", "dose-10-mg", "dose-12-5-mg", "dose-15-mg"] },
  { id: "conservacao", label: "Conservação e viagem", intents: ["validade-depois-de-aberta", "viagem-e-transporte", "quanto-tempo-fica-no-corpo"] },
  { id: "efeitos", label: "Efeitos colaterais", intents: ["efeitos-colaterais", "nausea-o-que-fazer", "prisao-de-ventre", "reacao-no-local", "queda-de-cabelo", "alergia", "hipoglicemia", "desidratacao-e-rins", "menstruacao"] },
  { id: "saude", label: "Condições de saúde", intents: ["quem-nao-pode-tomar", "gravidez-e-amamentacao", "anticoncepcional", "tireoide", "vesicula-e-pancreatite", "pressao-alta", "retinopatia", "interacoes-com-remedios"] },
  { id: "rotina", label: "Rotina e resultados", intents: ["para-que-serve", "quantos-quilos", "o-que-comer", "pode-beber-alcool", "parar-o-tratamento"] },
  { id: "regras", label: "Receita e ANVISA", intents: ["precisa-de-receita", "regras-anvisa"] },
];

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

        {/* Guides */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4"><h2>Comparações e mercado</h2><span className="text-sm text-muted">{guias.length} guias</span></div>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {guias.map((g) => <Card key={g.slug} href={`/guias/${g.slug}`} img={guideImage(g.slug)} meta={[fmt(g.updated), "Guia"]} title={g.title} />)}
          </div>
        </section>

        {/* Filterable list */}
        <section className="mt-20">
          <div className="flex items-end justify-between gap-4"><h2>Todas as perguntas</h2><span className="text-sm text-muted">{allArticles.length} páginas</span></div>
          <div className="mt-8">
            <PerguntasFilter
              items={allArticles.map((a) => ({ href: `/medicamentos/${a.medicationSlug}/${a.intent}`, img: themeImage(a.intent, a.medicationSlug), title: a.title, date: a.updated, intent: a.intent, intentLabel: intentLabels[a.intent], med: a.medicationSlug, medLabel: getMedication(a.medicationSlug)?.name.split(" (")[0] ?? a.medicationSlug, answer: a.answer }))}
              cats={cats}
              meds={medications.filter((m) => allArticles.some((a) => a.medicationSlug === m.slug)).map((m) => ({ slug: m.slug, label: m.name.split(" (")[0] }))}
            />
          </div>
        </section>
      </div>
    </>
  );
}
