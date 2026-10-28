import type { Metadata } from "next";
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import InfoNotice from "@/components/InfoNotice";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";

export const metadata: Metadata = {
  title: "CadaDose: o app que estamos criando",
  description: "Um diário de GLP-1 feito para o Brasil: só o que está na bula, sem calculadora de dose, sem conta, com relatório para o médico. Deixe seu contato para saber primeiro.",
  alternates: { canonical: "/em-breve" },
  robots: { index: false },
};

const diffs = [
  {
    t: "Cada frase tem a bula ao lado",
    p: "Os apps internacionais traduzem textos escritos para os EUA: falam de Zepbound, Foundayo e regras da TSA. Aqui, cada orientação vem da bula do paciente aprovada pela ANVISA, com o link e a seção citados. Se a bula não diz, a página diz que não diz.",
  },
  {
    t: "Nenhuma calculadora de dose, nenhum “nível no sangue”",
    p: "Você registra a dose exatamente como está na sua receita. Não calculamos UI de seringa nem estimamos concentração no corpo: a ANVISA trata esse tipo de função como software médico, e a decisão de dose é do seu médico, não de um gráfico.",
  },
  {
    t: "As regras do Brasil, não as dos EUA",
    p: "A caneta de Mounjaro vendida aqui é de uso único (4 por caixa) e aguenta 21 dias fora da geladeira; Ozempic e Wegovy, 6 semanas depois do primeiro uso. Manipulados seguem a Nota Técnica 200/2025 da ANVISA. O diário conta esses prazos para você.",
  },
  {
    t: "Sem conta, sem instalar, seus dados no seu aparelho",
    p: "Funciona no navegador de qualquer celular, Android ou iPhone, e pode ir para a tela inicial. Nada vai para um servidor para você começar. Exportar ou apagar tudo leva um toque.",
  },
  {
    t: "Relatório de uma página para a consulta",
    p: "Aplicações, doses, peso e efeitos das últimas semanas, com a frase da bula correspondente quando existe. O médico decide com dados, não com memória.",
  },
  {
    t: "Sem anúncios, sem comissão de farmácia",
    p: "Não vendemos medicamentos nem indicamos onde comprar. O que vai pagar o app é um plano Pro opcional, em reais, via PIX. O diário básico continua grátis.",
  },
];

export default function EmBreve() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="mt-4 rounded-[2.5rem] bg-accent px-6 py-14 text-white md:px-14 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-white/70">Estamos criando o app</p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.02] md:text-6xl">Um diário de GLP-1 que só repete o que a bula diz.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80">
            Para quem usa Mounjaro, Ozempic, Wegovy ou versões manipuladas no Brasil. Enquanto o app não sai, as {allArticles.length + guias.length} respostas já estão no ar, com a fonte ao lado de cada uma.
          </p>
          <a href="#avise" className="btn mt-8 bg-warm text-warm-ink">Quero ser avisado</a>
        </div>
      </section>

      <section className="py-16">
        <h2 className="text-center text-3xl font-semibold leading-tight md:text-4xl">O que muda em relação aos outros apps</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {diffs.map((d, i) => (
            <div key={d.t} className={`tile border border-border ${i === 0 ? "bg-accent text-white" : "bg-card"}`}>
              <h3 className="text-lg font-semibold">{d.t}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${i === 0 ? "text-white/85" : "text-muted"}`}>{d.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Comparamos os apps disponíveis no Brasil, pelo que cada ficha declara: <Link href="/guias/melhores-apps-glp-1-brasil" className="underline hover:text-accent">ver o comparativo</Link>.
        </p>
      </section>

      <section id="avise" className="scroll-mt-20 py-8">
        <div className="mx-auto grid max-w-4xl items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold leading-tight">Avisamos você no lançamento.</h2>
            <p className="mt-3 text-muted">Diga o que mais faria diferença para você. É isso que vai decidir o que construímos primeiro.</p>
            <InfoNotice className="mt-6" />
          </div>
          <LeadForm source="em-breve" />
        </div>
      </section>
    </div>
  );
}
