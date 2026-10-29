import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { intentLabels } from "@/content/types";
import { medImage, themeImage } from "@/lib/images";
import InfoNotice from "@/components/InfoNotice";

const ribbon = ["Como aplicar", "Esqueci de aplicar", "Fora da geladeira", "Efeitos colaterais", "Precisa de receita?", "Gravidez e amamentação", "Tabela de doses", "Anticoncepcional", "Viagem", "Náusea: o que fazer"];

const principles = [
  { img: "/img/principles.jpg", title: "A bula antes da opinião", text: "Cada frase aponta para uma frase da bula do paciente, com a seção." },
  { img: "/img/t-regras-anvisa.jpg", title: "Silêncio quando a bula cala", text: "Se a bula não trata do assunto, a página diz isso e para por aí." },
  { img: "/img/t-tabela-de-dose.jpg", title: "Nenhuma calculadora", text: "Você informa a dose da receita. Nada de UI de seringa nem nível no sangue." },
  { img: "/img/t-quem-nao-pode-tomar.jpg", title: "Verificado todo mês", text: "Em 05/2026 a bula do Mounjaro mudou; o site mudou com ela, com data." },
];

const reading = [
  ["mounjaro", "validade-depois-de-aberta"], ["wegovy", "nausea-o-que-fazer"], ["mounjaro", "anticoncepcional"], ["ozempic", "precisa-de-receita"],
];

const faq = [
  ["O site calcula ou recomenda a minha dose?", "Não. Você informa a dose exatamente como está na sua receita e o diário só registra. As tabelas publicadas reproduzem a bula aprovada pela ANVISA, com a fonte ao lado."],
  ["De onde vêm as respostas?", "Da bula do paciente de cada medicamento, citada entre aspas com a seção. Quando a bula não trata do assunto, a página diz isso."],
  ["Preciso criar conta ou pagar?", "Não. Tudo é gratuito. O diário funciona no navegador do celular, sem cadastro, e os dados ficam no seu aparelho."],
  ["Vocês vendem ou indicam onde comprar?", "Não. Sem venda, sem comissão de farmácia, sem anúncios."],
  ["Isso substitui o meu médico?", "Não. Apenas para informação, não é orientação médica. Fale com quem prescreveu o seu tratamento antes de mudar qualquer coisa."],
];

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

export default function Landing() {
  const count = allArticles.length;
  const meds = medications.filter((m) => ["mounjaro", "ozempic", "wegovy", "saxenda", "rybelsus"].includes(m.slug));
  return (
    <div>
      {/* HERO */}
      <section className="blobs text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
          <div>
            <h1>
              <span className="dot block">Aplicar</span>
              <span className="dot block">Lembrar</span>
              <span className="dot block">Entender</span>
            </h1>
            <p className="mt-8 max-w-md text-base font-light text-white/75 md:text-lg">{count} perguntas sobre Mounjaro, Ozempic, Wegovy, Saxenda e Rybelsus, respondidas com a bula aprovada pela ANVISA, frase por frase. E um diário gratuito para a semana da dose.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/perguntas" className="btn btn-primary">Ver as respostas</Link>
              <Link href="/app" className="text-sm font-light text-white/80 underline underline-offset-4 hover:text-accent">Abrir meu diário</Link>
            </div>
          </div>
          <div className="frame"><div className="aspect-[4/3] overflow-hidden rounded-[3px]"><img src="/img/hero.jpg" alt="" className="photo" /></div></div>
        </div>
      </section>

      {/* STAT + INTRO */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="display text-[7rem] leading-none text-forest md:text-[11rem]">{count}</p>
          <p className="mt-2 text-sm text-muted">+ respostas, cada uma com a fonte ao lado</p>
        </div>
        <div>
          <h2>Respostas pela bula, feitas para o Brasil</h2>
          <p className="mt-5 max-w-lg text-muted">Os apps internacionais traduzem textos escritos para os Estados Unidos. Aqui, cada orientação vem da bula do paciente registrada na ANVISA, com registro, versão e data. Se a bula não diz, a página diz que não diz.</p>
          <Link href="/sobre" className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-forest">Saiba mais <span aria-hidden>›</span></Link>
        </div>
      </section>

      {/* RIBBON */}
      <div className="ribbon -rotate-1">
        <div className="ribbon-track">{[...ribbon, ...ribbon].map((r, i) => <span key={i}>{r}</span>)}</div>
      </div>

      {/* COMMITMENT */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="mx-auto max-w-3xl text-center">Compromisso com o que está escrito</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-[1fr_2fr_1fr]">
          <div className="grid gap-4">
            <div className="tile bg-accent-soft"><p className="display text-5xl">5</p><p className="mt-2 text-sm text-muted">bulas do paciente citadas, verificadas todo mês</p></div>
            <div className="tile bg-accent-soft"><p className="display text-5xl">0</p><p className="mt-2 text-sm text-muted">calculadoras de dose, anúncios ou comissões</p></div>
          </div>
          <div className="overflow-hidden rounded-[4px]"><img src="/img/t-para-que-serve.jpg" alt="" className="photo min-h-[320px]" loading="lazy" /></div>
          <Link href="/politica-editorial" className="tile flex items-end bg-forest text-white hover:bg-[#28632f]">
            <p className="display text-4xl leading-tight">Nove regras editoriais, sem exceção</p>
          </Link>
        </div>
      </section>

      {/* MEDICATIONS, dark */}
      <section id="medicamentos" className="blobs scroll-mt-20 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="mx-auto max-w-2xl text-center">Cada medicamento, pela sua própria bula</h2>
          <div className="mt-12 rounded-[4px] bg-[#f5f3ec] p-4 text-foreground md:p-8">
            <ul className="divide-y divide-border">
              {meds.map((m) => {
                const n = allArticles.filter((a) => a.medicationSlug === m.slug).length;
                return (
                  <li key={m.slug} className="grid items-center gap-6 py-6 md:grid-cols-[1fr_280px]">
                    <div>
                      <h3>{m.name.split(" (")[0]}</h3>
                      <p className="mt-2 max-w-lg text-sm text-muted">{m.activeIngredient} · {m.frequency === "daily" ? "uso diário" : "aplicação semanal"} · {m.storageDays ? `${m.storageDays} dias ${m.storageLabel}` : m.storageLabel}. {n} perguntas respondidas pela bula.</p>
                      <Link href={`/medicamentos/${m.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-medium hover:text-forest">Ver as respostas <span aria-hidden>›</span></Link>
                    </div>
                    <div className="aspect-[3/2] overflow-hidden rounded-[4px]"><img src={medImage(m.slug)} alt="" className="photo" loading="lazy" /></div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <h2 className="max-w-2xl">Por que confiar no CadaDose</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {principles.map((p) => (
            <div key={p.title}>
              <div className="aspect-[4/5] overflow-hidden rounded-[4px]"><img src={p.img} alt="" className="photo" loading="lazy" /></div>
              <h3 className="mt-4 text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DARK: what the bula says, 3 cards */}
      <section className="bg-ink-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <p className="eyebrow text-center">O que mudou em 2026</p>
          <h2 className="mt-3 text-center">Três coisas que só quem lê a bula sabe</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Mounjaro, bula 05/2026", "“recomenda-se o uso de outro método que não seja oral ou acrescentar um método de barreira (como preservativo) no início do tratamento com MOUNJARO (por 4 semanas) e por 4 semanas após cada aumento de dose.”", "/medicamentos/mounjaro/anticoncepcional"],
              ["Wegovy, bula 04/05/2026", "“Caso você esteja se sentindo muito incomodado por conta do enjoo (náuseas) ou vômitos, converse com seu médico sobre adiar o aumento da dose ou diminuir para a dose anterior até que os sintomas melhorem.”", "/medicamentos/wegovy/nausea-o-que-fazer"],
              ["Ozempic e Wegovy, seção 5", "“No caso de viagens aéreas, não despachar o produto dentro das malas.” O compartimento de bagagem pode congelar o medicamento.", "/medicamentos/wegovy/viagem-e-transporte"],
            ].map(([src, quote, href]) => (
              <Link key={href} href={href} className="tile bg-[#15201f] transition hover:bg-[#1b2b2b]">
                <p className="display text-5xl text-accent">”</p>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/85">{quote}</p>
                <p className="mt-5 text-xs text-white/55">{src} · ler a página ›</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* READING */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <span className="eyebrow dark">Perguntas</span>
        <div className="mt-3 flex items-end justify-between gap-4">
          <h2 className="max-w-xl">Coisas que valem a leitura</h2>
          <Link href="/perguntas" className="text-sm font-medium underline underline-offset-4">Ver todas</Link>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {reading.map(([slug, intent]) => {
            const a = allArticles.find((x) => x.medicationSlug === slug && x.intent === intent);
            if (!a) return null;
            return (
              <Link key={slug + intent} href={`/medicamentos/${slug}/${intent}`} className="group">
                <div className="aspect-[4/5] overflow-hidden rounded-[4px]"><img src={themeImage(intent, slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                <p className="mt-4 flex items-center gap-3 text-xs text-muted"><span>{fmt(a.updated)}</span><span className="text-border">|</span><span>{intentLabels[a.intent]}</span></p>
                <h3 className="mt-2 text-xl leading-snug">{a.title}</h3>
                <p className="mt-3 text-sm font-medium">Ler mais <span aria-hidden>↗</span></p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div className="grid gap-4">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src="/img/faq-portrait.jpg" alt="" className="photo" loading="lazy" /></div>
            <div className="tile bg-ink text-white">
              <h3 className="text-3xl">Ainda com dúvidas?</h3>
              <p className="mt-2 text-sm font-light text-white/70">Veja as {count} perguntas respondidas pela bula, organizadas por medicamento e por tema.</p>
              <Link href="/perguntas" className="btn btn-primary mt-5">Todas as perguntas</Link>
            </div>
          </div>
          <div>
            <h2>O que as pessoas perguntam primeiro</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {faq.map(([q, a], i) => (
                <details key={q} className="faq">
                  <summary><span className="w-8 shrink-0 text-xs text-muted">Q{i + 1}</span><span className="text-base md:text-lg">{q}</span></summary>
                  <p className="pb-5 pl-12 text-sm text-muted">{a}</p>
                </details>
              ))}
            </div>
            <InfoNotice className="mt-4" />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center justify-between gap-8 border-t border-border py-16 md:flex-row">
          <h2 className="max-w-2xl">Pronto para a próxima aplicação?</h2>
          <Link href="/app" className="btn btn-dark">Abrir meu diário</Link>
        </div>
        <p className="pb-4 text-center text-xs text-muted">{t.hero.privacy} · {guias.length} guias também disponíveis.</p>
      </section>
    </div>
  );
}
