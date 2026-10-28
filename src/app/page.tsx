import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";

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

function DiaryMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="rounded-[2rem] border border-border bg-card p-5 shadow-[0_30px_60px_-30px_rgba(20,32,26,.35)]">
        <div className="flex items-center justify-between text-xs text-muted">
          <span>Hoje</span>
          <span className="rounded-full bg-lime px-2 py-0.5 font-semibold text-accent-strong">semana 9</span>
        </div>
        <p className="mt-3 text-sm text-muted">Próxima aplicação</p>
        <p className="text-2xl font-semibold leading-tight">quarta-feira, 4 de novembro</p>
        <p className="text-sm text-muted">Mounjaro · 5 mg · 09:00</p>
        <div className="mt-4 inline-flex rounded-full bg-accent px-4 py-2 text-sm font-medium text-white">Registrar aplicação agora</div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
          <div className="rounded-2xl bg-accent-soft p-3">
            <p className="text-muted">Local sugerido</p>
            <p className="mt-1 font-semibold">Coxa (dir.)</p>
          </div>
          <div className="rounded-2xl bg-accent-soft p-3">
            <p className="text-muted">Caixa fora da geladeira</p>
            <p className="mt-1 font-semibold">16 dias restantes</p>
          </div>
        </div>
        <div className="mt-5">
          <div className="flex items-end justify-between text-xs text-muted"><span>Peso</span><span className="font-semibold text-accent">−5,5 kg</span></div>
          <svg viewBox="0 0 300 80" className="mt-1 w-full">
            <polyline fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" points="10,20 70,30 130,36 190,52 250,60 290,66" />
            <line x1="150" x2="150" y1="8" y2="74" stroke="var(--accent)" strokeDasharray="4 4" opacity=".6" />
          </svg>
        </div>
      </div>
      <div className="absolute -left-6 top-24 hidden rounded-2xl border border-border bg-card px-3 py-2 text-xs shadow md:block">
        <span className="eyebrow">Fonte</span>
        <p className="mt-1 font-medium">Bula ANVISA · reg. 1.1260.0202</p>
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="grid items-center gap-10 py-14 md:grid-cols-2 md:py-24">
        <div>
          <span className="eyebrow">Diário de tratamento GLP-1</span>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.05] md:text-6xl">
            Cada dose no lugar certo.
            <span className="block text-muted">Cada semana, mais leve.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/app" className="btn btn-primary">{t.hero.cta}</Link>
            <Link href="/medicamentos" className="btn btn-ghost">Ver as respostas da bula</Link>
          </div>
          <p className="mt-4 text-sm text-muted">{t.hero.privacy}</p>
        </div>
        <DiaryMock />
      </section>

      <section className="grid gap-3 md:grid-cols-3">
        <div className="tile bg-accent text-white">
          <p className="text-4xl font-semibold">3</p>
          <p className="mt-1 text-sm opacity-80">bulas oficiais citadas trecho a trecho</p>
        </div>
        <div className="tile bg-accent-soft">
          <p className="text-4xl font-semibold">20</p>
          <p className="mt-1 text-sm text-muted">respostas às perguntas mais buscadas</p>
        </div>
        <div className="tile bg-accent-soft">
          <p className="text-4xl font-semibold">0</p>
          <p className="mt-1 text-sm text-muted">anúncios, comissões ou venda de medicamentos</p>
        </div>
      </section>

      <section className="mt-20">
        <span className="eyebrow">O que o diário faz</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
          Tudo o que você precisa lembrar, <span className="text-muted">em um só lugar.</span>
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {t.features.map((f, i) => (
            <div key={f.title} className={`tile border border-border ${i === 0 ? "bg-accent-soft" : "bg-card"}`}>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <span className="eyebrow">Respondido pela bula</span>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold leading-tight">
          As perguntas mais buscadas, <span className="text-muted">com a fonte ao lado.</span>
        </h2>
        <ul className="mt-8 grid gap-3 md:grid-cols-2">
          {topQuestions.map((item) => {
            const a = allArticles.find((x) => x.medicationSlug === item.slug && x.intent === item.intent);
            if (!a) return null;
            return (
              <li key={item.q} className="tile border border-border bg-card transition hover:border-accent">
                <Link href={`/medicamentos/${item.slug}/${item.intent}`} className="font-semibold">
                  {item.q}
                </Link>
                <p className="mt-2 text-sm text-muted line-clamp-2">{a.answer}</p>
              </li>
            );
          })}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {medications.map((m) => (
            <Link key={m.slug} href={`/medicamentos/${m.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-accent">
              {m.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-20 grid gap-4 md:grid-cols-2">
        <div className="tile bg-accent text-white">
          <span className="eyebrow !text-white/70">Como funciona</span>
          <ol className="mt-4 space-y-3 text-sm">
            <li><strong>1.</strong> Informe seu medicamento e a dose da sua receita.</li>
            <li><strong>2.</strong> Registre cada aplicação em um toque; o diário sugere o local do rodízio.</li>
            <li><strong>3.</strong> Acompanhe peso, efeitos e a validade da caneta. Leve o relatório ao médico.</li>
          </ol>
          <Link href="/app" className="btn mt-6 bg-lime text-accent-strong">{t.hero.cta}</Link>
        </div>
        <div className="tile border border-border bg-card text-sm">
          <span className="eyebrow">Compromisso</span>
          <p className="mt-4">{t.disclaimer}</p>
          <Link href="/pro" className="mt-4 inline-block underline">Conheça o CadaDose Pro</Link>
        </div>
      </section>
    </div>
  );
}
