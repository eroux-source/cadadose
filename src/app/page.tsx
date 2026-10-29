import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { MockToday, MockWeight, MockSymptoms, MockReport, MockStock } from "@/components/landing/Mocks";
import InfoNotice from "@/components/InfoNotice";
import PenTabs from "@/components/landing/PenTabs";

/* FAQ: every answer is a verbatim FAQ answer from a sourced article (linked). */
const faq: { q: string; slug: string; intent: string; idx: number }[] = [
  { q: "O diário calcula ou recomenda a minha dose?", slug: "", intent: "", idx: -1 },
  { q: "Preciso criar conta ou pagar para usar?", slug: "", intent: "", idx: -1 },
  { q: "Mounjaro pode ficar fora da geladeira?", slug: "mounjaro", intent: "validade-depois-de-aberta", idx: 0 },
  { q: "Esqueci o Mounjaro por 2 dias, posso aplicar?", slug: "mounjaro", intent: "esqueci-de-aplicar", idx: 0 },
  { q: "A caneta do Mounjaro no Brasil tem várias doses?", slug: "mounjaro", intent: "como-aplicar", idx: 1 },
  { q: "Posso mudar o dia da aplicação?", slug: "mounjaro", intent: "como-aplicar", idx: 3 },
];
const ownAnswers: Record<string, string> = {
  "O diário calcula ou recomenda a minha dose?":
    "Não. Você informa a dose exatamente como está na sua receita e o diário só registra. Mudanças de dose são decisão do seu médico; as tabelas que publicamos reproduzem a bula aprovada pela ANVISA, com a fonte ao lado.",
  "Preciso criar conta ou pagar para usar?":
    "Não. O diário funciona no navegador do celular, sem cadastro, e os dados ficam no seu aparelho. O CadaDose Pro é opcional e adiciona o relatório em PDF e o backup.",
};

const also = [
  { title: "Rodízio de locais", text: "Abdômen, coxa ou braço: o diário sugere o próximo ponto para não repetir o mesmo lugar." },
  { title: "Canetas e frascos", text: "Caneta de uso único, caneta multidose ou frasco manipulado com seringa, cada um com suas regras." },
  { title: "Lembrete semanal", text: "Escolha o dia e a hora. O diário avisa quando chega a vez, mesmo com o celular no bolso." },
  { title: "Exportar e apagar", text: "Seus dados em um arquivo, quando quiser. Apagar tudo leva um toque." },
  { title: "Curva de peso", text: "Cada mudança de dose fica marcada no gráfico, para ver o que aconteceu depois." },
  { title: "Relatório para o médico", text: "Aplicações, peso e efeitos em uma página, pronta para imprimir ou mandar por WhatsApp." },
];

const groups = [
  { label: "Aplicação semanal (caneta)", slugs: ["mounjaro", "ozempic", "wegovy"] },
  { label: "Uso diário", slugs: ["saxenda", "rybelsus"] },
  { label: "Manipulados (frasco e seringa)", slugs: ["semaglutida-manipulada", "tirzepatida-manipulada"] },
];

function Row({ eyebrow, title, bullets, children, flip }: { eyebrow: string; title: string; bullets: string[]; children: React.ReactNode; flip?: boolean }) {
  return (
    <div className={`grid items-center gap-10 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h3 className="mt-3 text-2xl font-semibold leading-tight md:text-3xl">{title}</h3>
        <ul className="mt-5 space-y-2 text-muted">
          {bullets.map((b) => (
            <li key={b} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{b}</li>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-6">{children}</div>
    </div>
  );
}

export default function Landing() {
  const trust = ["Grátis para começar", "Sem cadastro", "Primeira aplicação registrada em 30 segundos"];
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO: one cobalt slab, everything else on the page stays quiet */}
      <section className="mt-4 rounded-[2.5rem] bg-accent px-6 pb-0 pt-14 text-white md:px-14 md:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-white/70">Diário de tratamento GLP-1, feito para o Brasil</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.02] md:text-6xl">
            Seu diário de GLP-1, da primeira aplicação até a meta.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/em-breve" className="btn bg-warm text-warm-ink hover:brightness-105">Quero o app</Link>
            <Link href="/perguntas" className="btn border border-white/40 text-white hover:border-white">Ver as respostas da bula</Link>
          </div>
          <ul className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-white/75">
            {trust.map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3 sm:items-end">
          <MockSymptoms />
          <div className="sm:-mt-8"><MockToday /></div>
          <MockWeight />
        </div>
      </section>

      {/* INSIDE THE DIARY */}
      <section id="recursos" className="scroll-mt-20 py-16">
        <div className="text-center">
          <span className="eyebrow">Dentro do diário</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">Tudo o que a sua rotina com GLP-1 precisa.</h2>
        </div>
        <div className="mt-14 space-y-20">
          <Row
            eyebrow="Efeitos colaterais"
            title="Veja como você se sentiu em cada dose, não só hoje."
            bullets={[
              "Registre náusea, enjoo, prisão de ventre e o que mais sentir, com intensidade.",
              "Cada registro fica ligado à dose da semana: dá para ver se o aumento mudou algo.",
              "Sintomas fortes ou persistentes: o diário lembra de falar com o médico.",
            ]}
          >
            <MockSymptoms />
            <MockWeight />
          </Row>
          <Row
            flip
            eyebrow="Estoque e validade"
            title="Saiba até quando a caneta aberta pode ser usada."
            bullets={[
              "Mounjaro: até 21 dias fora da geladeira, abaixo de 30 °C (bula).",
              "Ozempic e Wegovy: 6 semanas após o primeiro uso (bula).",
              "Doses restantes na caneta multidose e quantas canetas há em casa.",
            ]}
          >
            <MockStock />
            <MockToday />
          </Row>
          <Row
            eyebrow="Relatório para o médico"
            title="Chegue na consulta com a história completa."
            bullets={[
              "Aplicações, doses, peso e efeitos das últimas semanas em uma página.",
              "Imprima, salve em PDF ou mande por WhatsApp antes da consulta.",
              "Relatório em PDF faz parte do CadaDose Pro.",
            ]}
          >
            <MockReport />
            <MockSymptoms />
          </Row>
        </div>
      </section>

      {/* PEN VALIDITY TABS (replaces the drug-level estimator: that would be unsourced) */}
      <section id="validade" className="scroll-mt-20 py-16">
        <div className="text-center">
          <span className="eyebrow">Regra da bula</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">Quanto tempo a caneta aberta dura, segundo a bula.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">O diário conta os dias a partir da data em que você abriu a caneta ou tirou a caixa da geladeira. Nenhuma estimativa: só o que está escrito na bula aprovada pela ANVISA.</p>
        </div>
        <PenTabs meds={medications.filter((m) => m.storageDays !== null).map((m) => ({ slug: m.slug, name: m.name, storageDays: m.storageDays!, storageLabel: m.storageLabel ?? "", dosesPerPen: m.dosesPerPen, source: m.sources[0] }))} />
      </section>

      {/* ALSO IN THE DIARY */}
      <section className="py-16">
        <div className="text-center">
          <span className="eyebrow">Também no diário</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">O diário de GLP-1 para o tratamento inteiro, em um só lugar.</h2>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {also.map((f, i) => (
            <div key={f.title} className={`tile border border-border ${i === 0 ? "bg-accent text-white" : "bg-card"}`}>
              <h3 className="font-semibold">{f.title}</h3>
              <p className={`mt-2 text-sm ${i === 0 ? "text-white/80" : "text-muted"}`}>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section id="medicamentos" className="scroll-mt-20 py-16">
        <div className="text-center">
          <span className="eyebrow">Medicamentos</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">Funciona com os GLP-1 vendidos no Brasil.</h2>
        </div>
        <div className="mt-10 space-y-8">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="text-sm font-semibold text-muted">{g.label}</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {g.slugs.map((s) => {
                  const m = medications.find((x) => x.slug === s)!;
                  const [brand, generic] = m.name.split(" (");
                  return (
                    <Link key={s} href={`/medicamentos/${s}`} className="tile border border-border bg-card transition hover:border-accent">
                      <p className="font-semibold">{brand}</p>
                      <p className="text-sm text-muted">{generic ? generic.replace(")", "") : m.activeIngredient}</p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRIVACY */}
      <section className="py-16">
        <div className="tile bg-accent px-6 py-12 text-center text-white md:py-16">
          <span className="eyebrow !text-white/70">Privacidade</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">Sem conta. Sem anúncios. Sem vender seus dados de saúde.</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">Seus registros ficam no seu aparelho. Nada é enviado a servidores para começar a usar, e você pode exportar ou apagar tudo quando quiser. Sem comissão de farmácia, sem venda de medicamentos.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="perguntas" className="scroll-mt-20 py-16">
        <div className="text-center">
          <span className="eyebrow">Boas perguntas</span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">O que as pessoas perguntam antes de começar.</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-2">
          {faq.map((f) => {
            const a = f.slug ? allArticles.find((x) => x.medicationSlug === f.slug && x.intent === f.intent) : null;
            const answer = a ? a.faq[f.idx]?.a : ownAnswers[f.q];
            if (!answer) return null;
            return (
              <div key={f.q} className="tile border border-border bg-card">
                <h3 className="font-semibold">{f.q}</h3>
                <p className="mt-2 text-sm text-muted">{answer}</p>
                {a && (
                  <p className="mt-3 text-xs text-muted">
                    Fonte: <a href={a.sources[0].url} target="_blank" rel="noopener" className="underline hover:text-accent">{a.sources[0].label}</a> ·{" "}
                    <Link href={`/medicamentos/${f.slug}/${f.intent}`} className="underline hover:text-accent">ler a resposta completa</Link>
                  </p>
                )}
              </div>
            );
          })}
        </div>
        <InfoNotice className="mx-auto mt-6 max-w-4xl" />
        <p className="mt-6 text-center text-sm text-muted">
          Mais {allArticles.length + guias.length} respostas, cada uma com a fonte ao lado: <Link href="/perguntas" className="underline hover:text-accent">ver todas as perguntas</Link>
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="py-16">
        <div className="grid items-center gap-10 rounded-[2rem] bg-accent-soft px-6 py-12 md:grid-cols-2 md:px-12">
          <div>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl">Você cuida do tratamento. <span className="text-muted">O diário cuida do resto.</span></h2>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/em-breve" className="btn btn-primary">Quero o app</Link>
              <Link href="/perguntas" className="btn btn-ghost">Ler as respostas</Link>
            </div>
            <p className="mt-4 text-sm text-muted">{t.hero.privacy}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <MockStock />
            <MockToday />
          </div>
        </div>
      </section>
    </div>
  );
}
