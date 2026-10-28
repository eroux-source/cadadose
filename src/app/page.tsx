import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";

/** Questions people type as-is into Google and AI assistants, in the order of search demand. */
const topQuestions: { q: string; slug: string; intent: string }[] = [
  { q: "Como aplicar Mounjaro?", slug: "mounjaro", intent: "como-aplicar" },
  { q: "Quais são os efeitos colaterais do Mounjaro?", slug: "mounjaro", intent: "efeitos-colaterais" },
  { q: "Esqueci de aplicar Mounjaro, e agora?", slug: "mounjaro", intent: "esqueci-de-aplicar" },
  { q: "Mounjaro pode ficar fora da geladeira?", slug: "mounjaro", intent: "validade-depois-de-aberta" },
  { q: "Quantas doses tem a caneta de Wegovy?", slug: "wegovy", intent: "como-aplicar" },
  { q: "Ozempic aberto vale por quanto tempo?", slug: "ozempic", intent: "validade-depois-de-aberta" },
  { q: "Qual é a tabela de doses do Wegovy?", slug: "wegovy", intent: "tabela-de-dose" },
  { q: "Tirzepatida manipulada: o que a ANVISA permite?", slug: "tirzepatida-manipulada", intent: "regras-anvisa" },
];

export default function Landing() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">{t.hero.title}</h1>
        <p className="mt-6 text-lg text-muted">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="/app" className="rounded-full bg-accent text-white px-6 py-3 font-medium">
            {t.hero.cta}
          </Link>
          <span className="text-sm text-muted">{t.hero.privacy}</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {t.features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">As perguntas mais buscadas, respondidas pela bula</h2>
        <p className="mt-1 text-sm text-muted">Cada resposta cita a bula do paciente aprovada pela ANVISA.</p>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {topQuestions.map((item) => {
            const a = allArticles.find((x) => x.medicationSlug === item.slug && x.intent === item.intent);
            if (!a) return null;
            return (
              <li key={item.q} className="rounded-2xl border border-border bg-card p-4">
                <Link href={`/medicamentos/${item.slug}/${item.intent}`} className="font-medium hover:text-accent">
                  {item.q}
                </Link>
                <p className="mt-1 text-sm text-muted line-clamp-2">{a.answer}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">{t.nav.meds}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {medications.map((m) => (
            <li key={m.slug}>
              <Link href={`/medicamentos/${m.slug}`} className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-accent">
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-accent-soft p-6 text-sm">
          <p className="font-semibold">Como funciona</p>
          <ol className="mt-2 list-decimal pl-5 space-y-1">
            <li>Informe seu medicamento e a dose da sua receita.</li>
            <li>Registre cada aplicação em um toque; o diário sugere o local do rodízio.</li>
            <li>Acompanhe peso, efeitos e a validade da caneta. Leve o relatório ao médico.</li>
          </ol>
        </div>
        <div className="rounded-2xl bg-accent-soft p-6 text-sm">
          <p>{t.disclaimer}</p>
          <Link href="/pro" className="mt-3 inline-block underline">Conheça o CadaDose Pro</Link>
        </div>
      </section>
    </div>
  );
}
