import type { Metadata } from "next";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications } from "@/lib/medications";
import { intentLabels } from "@/content/types";

export const metadata: Metadata = {
  title: "Perguntas sobre Mounjaro, Ozempic e Wegovy respondidas pela bula",
  description: "Todas as perguntas mais buscadas sobre GLP-1 no Brasil, respondidas com a bula do paciente aprovada pela ANVISA, citada em cada resposta.",
  alternates: { canonical: "/perguntas" },
};

export default function PerguntasHub() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <span className="eyebrow">Respondido pela bula</span>
      <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-4xl">Perguntas sobre GLP-1, <span className="text-muted">com a fonte ao lado.</span></h1>
      <p className="mt-3 max-w-2xl text-muted">Cada resposta cita a bula do paciente aprovada pela ANVISA (registro e data na página). Quando a bula não responde, a página diz isso.</p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Comparações</h2>
        <ul className="mt-3 grid gap-3 md:grid-cols-2">
          {guias.map((g) => (
            <li key={g.slug} className="tile border border-border bg-card hover:border-accent">
              <Link href={`/guias/${g.slug}`} className="font-semibold">{g.title}</Link>
              <p className="mt-2 text-sm text-muted line-clamp-2">{g.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      {medications.map((m) => {
        const arts = allArticles.filter((a) => a.medicationSlug === m.slug);
        if (!arts.length) return null;
        return (
          <section key={m.slug} className="mt-12">
            <h2 className="text-xl font-semibold"><Link href={`/medicamentos/${m.slug}`} className="hover:text-accent">{m.name}</Link></h2>
            <ul className="mt-3 grid gap-3 md:grid-cols-2">
              {arts.map((a) => (
                <li key={a.intent} className="tile border border-border bg-card hover:border-accent">
                  <span className="eyebrow">{intentLabels[a.intent]}</span>
                  <Link href={`/medicamentos/${m.slug}/${a.intent}`} className="mt-1 block font-semibold">{a.title}</Link>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{a.answer}</p>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
