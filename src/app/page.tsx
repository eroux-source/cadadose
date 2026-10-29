import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { intentLabels } from "@/content/types";
import { medImage, themeImage } from "@/lib/images";
import InfoNotice from "@/components/InfoNotice";
import MedTabs from "@/components/landing/MedTabs";

const familiar = [
  { img: "/img/card-1.jpg", title: "A caneta ficou fora da geladeira. Ainda vale?", href: "/temas/validade-depois-de-aberta" },
  { img: "/img/card-2.jpg", title: "Passou o dia da dose. E agora?", href: "/temas/esqueci-de-aplicar" },
  { img: "/img/card-3.jpg", title: "Enjoo na semana do aumento. É normal?", href: "/temas/nausea-o-que-fazer" },
  { img: "/img/t-precisa-de-receita.jpg", title: "A farmácia pediu a receita retida. Por quê?", href: "/temas/precisa-de-receita" },
];

const reading = [
  { slug: "mounjaro", intent: "validade-depois-de-aberta" },
  { slug: "wegovy", intent: "nausea-o-que-fazer" },
  { slug: "mounjaro", intent: "anticoncepcional" },
];

const faq = [
  ["O site calcula ou recomenda a minha dose?", "Não. Você informa a dose exatamente como está na sua receita e o diário só registra. As tabelas publicadas reproduzem a bula aprovada pela ANVISA, com a fonte ao lado."],
  ["De onde vêm as respostas?", "Da bula do paciente de cada medicamento, citada entre aspas com a seção. Quando a bula não trata do assunto, a página diz isso e para por aí."],
  ["Preciso criar conta ou pagar?", "Não. Tudo é gratuito. O diário funciona no navegador do celular, sem cadastro, e os dados ficam no seu aparelho."],
  ["Vocês vendem ou indicam onde comprar?", "Não. Sem venda, sem comissão de farmácia, sem anúncios."],
  ["Com que frequência as bulas são verificadas?", "Todo mês. Em maio de 2026 a bula do Mounjaro mudou de indicações e de regras de contracepção; o site mudou com ela, e cada página mostra a data da revisão."],
  ["Isso substitui o meu médico?", "Não. Cada página traz a mesma frase: apenas para informação, não é orientação médica. Fale com quem prescreveu o seu tratamento antes de mudar qualquer coisa."],
];

export default function Landing() {
  const count = allArticles.length;
  return (
    <div>
      {/* HERO: ink background, photo right */}
      <section className="bg-ink text-[#f7f6f1]">
        <div className="mx-auto grid max-w-7xl items-stretch md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
            <div className="flex flex-wrap gap-2">
              <span className="chip !border-white/20 !text-white/70">Grátis, sem conta</span>
              <span className="chip !border-white/20 !text-white/70">Baseado nas bulas da ANVISA</span>
            </div>
            <h1 className="mt-8 text-5xl leading-[1.02] md:text-6xl lg:text-7xl">Mounjaro, Ozempic e Wegovy, respondidos pela bula.</h1>
            <p className="mt-6 max-w-md text-lg text-white/75">{count} perguntas que as pessoas fazem de verdade, respondidas com a bula do paciente, frase por frase. E um diário para a semana da dose.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/perguntas" className="btn btn-light">Ver as respostas</Link>
              <Link href="/app" className="text-sm text-white/80 underline underline-offset-4 hover:text-white">Abrir meu diário</Link>
            </div>
            <ul className="mt-8 space-y-1 text-sm text-white/70">
              <li>· Nenhuma calculadora de dose, nenhum “nível no sangue”</li>
              <li>· Nenhuma venda, comissão ou anúncio</li>
            </ul>
          </div>
          <div className="relative min-h-[360px] md:min-h-[640px]">
            <img src="/img/hero.jpg" alt="" className="photo absolute inset-0" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <span className="eyebrow">O que fazemos</span>
        <h2 className="mt-5 max-w-4xl text-3xl leading-[1.15] md:text-5xl">
          Sem reels, sem opinião de blog, sem “depende”. Só o que está escrito na bula
          <img src="/img/t-tabela-de-dose.jpg" alt="" className="mx-2 inline-block h-9 w-16 rounded-sm object-cover align-middle md:h-12 md:w-20" />
          e a seção onde está.
          <img src="/img/principles.jpg" alt="" className="mx-2 inline-block h-9 w-16 rounded-sm object-cover align-middle md:h-12 md:w-20" />
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/sobre" className="btn btn-primary">Como fazemos</Link>
          <Link href="/politica-editorial" className="btn btn-ghost">Política editorial</Link>
        </div>
      </section>

      {/* FAMILIAR */}
      <section className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl">Alguma dessas situações soa familiar?</h2>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {familiar.map((c) => (
            <Link key={c.href} href={c.href} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-md bg-accent-soft">
                <img src={c.img} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" />
              </div>
              <h3 className="mt-3 text-lg leading-snug">{c.title}</h3>
              <p className="mt-1 text-sm text-muted">A resposta da bula →</p>
            </Link>
          ))}
        </div>
      </section>

      {/* MEDICATION TABS */}
      <section id="medicamentos" className="mx-auto max-w-7xl scroll-mt-20 px-6 py-20 md:px-12 md:py-28">
        <h2 className="max-w-3xl text-3xl md:text-5xl">Respostas organizadas pelo que você usa.</h2>
        <MedTabs
          meds={medications.filter((m) => ["mounjaro", "ozempic", "wegovy", "saxenda", "rybelsus"].includes(m.slug)).map((m) => ({
            slug: m.slug,
            name: m.name.split(" (")[0],
            generic: m.activeIngredient,
            img: medImage(m.slug),
            count: allArticles.filter((a) => a.medicationSlug === m.slug).length,
            frequency: m.frequency === "daily" ? "Uso diário" : "Aplicação semanal",
            storage: m.storageDays ? `${m.storageDays} dias ${m.storageLabel}` : m.storageLabel ?? "",
            themes: allArticles.filter((a) => a.medicationSlug === m.slug && !a.intent.startsWith("dose-")).slice(0, 6).map((a) => intentLabels[a.intent]),
          }))}
        />
        <p className="mt-6 text-sm text-muted">Também: <Link href="/medicamentos/tirzepatida-manipulada" className="underline">tirzepatida manipulada</Link> e <Link href="/medicamentos/semaglutida-manipulada" className="underline">semaglutida manipulada</Link>, pelas regras da ANVISA.</p>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-accent-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
          <h2 className="max-w-3xl text-3xl md:text-5xl">Os princípios em que tudo o resto se apoia.</h2>
          <p className="mt-3 text-muted">Fonte. Silêncio. Limite. Atualização.</p>
          <div className="mt-10 grid gap-8 md:grid-cols-[1.1fr_1fr]">
            <div className="aspect-[3/2] overflow-hidden rounded-md"><img src="/img/principles.jpg" alt="" className="photo" loading="lazy" /></div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl">A bula antes da opinião.</h3>
              <p className="mt-4 text-muted">Cada frase do site aponta para uma frase da bula do paciente aprovada pela ANVISA, com a seção. Quando a bula é omissa, a página diz “a bula não diz” e para por aí. Nenhuma calculadora de dose, nenhuma estimativa de nível no sangue, nenhuma promessa de quilos.</p>
              <Link href="/fontes" className="btn btn-primary mt-6 w-fit">Ver todas as fontes</Link>
            </div>
          </div>
          <div className="mt-12 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
            <div><p className="text-5xl">{count}</p><p className="mt-1 text-sm text-muted">respostas, cada uma com a fonte ao lado</p></div>
            <div><p className="text-5xl">5</p><p className="mt-1 text-sm text-muted">bulas do paciente citadas, verificadas todo mês</p></div>
            <div><p className="text-5xl">0</p><p className="mt-1 text-sm text-muted">calculadoras de dose, anúncios ou comissões</p></div>
          </div>
        </div>
      </section>

      {/* READING */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl md:text-5xl">Coisas que valem a leitura.</h2>
          <Link href="/perguntas" className="text-sm underline underline-offset-4">Ver todas</Link>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {reading.map((r) => {
            const a = allArticles.find((x) => x.medicationSlug === r.slug && x.intent === r.intent);
            if (!a) return null;
            return (
              <Link key={r.slug + r.intent} href={`/medicamentos/${r.slug}/${r.intent}`} className="group">
                <div className="aspect-[3/2] overflow-hidden rounded-md"><img src={themeImage(r.intent, r.slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                <p className="eyebrow mt-4">{intentLabels[a.intent]}</p>
                <h3 className="mt-2 text-xl leading-snug">{a.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{a.answer}</p>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {guias.slice(0, 3).map((g) => (
            <Link key={g.slug} href={`/guias/${g.slug}`} className="group border-t border-border pt-4">
              <p className="eyebrow">Guia</p>
              <h3 className="mt-2 text-lg leading-snug">{g.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-12 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div>
            <div className="aspect-[3/4] overflow-hidden rounded-md"><img src="/img/faq-portrait.jpg" alt="" className="photo" loading="lazy" /></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl">O que as pessoas perguntam primeiro.</h2>
            <dl className="mt-8 divide-y divide-border">
              {faq.map(([q, a]) => (
                <div key={q} className="py-5">
                  <dt className="text-lg">{q}</dt>
                  <dd className="mt-2 text-muted">{a}</dd>
                </div>
              ))}
            </dl>
            <InfoNotice className="mt-4" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-[#f7f6f1]">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-16 md:px-12 md:py-24">
            <h2 className="text-4xl leading-[1.05] md:text-6xl">Você cuida do tratamento. O diário cuida de lembrar.</h2>
            <p className="mt-6 max-w-md text-white/75">Aplicações, rodízio, peso, efeitos, validade da caneta e um relatório de uma página para a consulta. Grátis, sem conta, no seu aparelho.</p>
            <div className="mt-8"><Link href="/app" className="btn btn-light">Abrir meu diário</Link></div>
            <p className="mt-4 text-sm text-white/60">{t.hero.privacy}</p>
          </div>
          <div className="relative min-h-[360px] md:min-h-[560px]"><img src="/img/cta-portrait.jpg" alt="" className="photo absolute inset-0" loading="lazy" /></div>
        </div>
      </section>
    </div>
  );
}
