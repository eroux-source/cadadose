import type { Section } from "./types";

export interface Guide {
  slug: string;
  title: string;
  answer: string;
  description: string;
  updated: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
}

const mounjaroBula = {
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, aprovada em 21/11/2024",
  url: "https://static.poder360.com.br/2025/03/bula-mounjaro.pdf",
};
const ozempicBula1 = {
  label: "Bula do paciente Ozempic® 1 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
};
const wegovyBula = {
  label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
};

const guiasBulas: Guide[] = [
  {
    slug: "ozempic-vs-mounjaro",
    title: "Qual a diferença entre Ozempic e Mounjaro? Comparação pelas bulas",
    answer:
      "Ozempic tem semaglutida; Mounjaro tem tirzepatida. Os dois são injeções semanais indicadas, nas bulas brasileiras, para o diabetes tipo 2 em adultos. As doses são diferentes: Ozempic vai de 0,25 mg a 1 mg; Mounjaro, de 2,5 mg a 15 mg. Ozempic vem em caneta multidose (4 doses); Mounjaro, no Brasil, em 4 canetas de uso único por caixa. Qual é melhor para você, só o médico pode dizer.",
    description: "Ozempic vs Mounjaro: substância, indicação, doses, caneta, conservação e dose esquecida, lado a lado, segundo as bulas brasileiras.",
    updated: "2026-10-28",
    sections: [
      {
        heading: "Lado a lado, segundo as bulas",
        table: {
          head: ["", "Ozempic®", "Mounjaro®"],
          rows: [
            ["Substância", "Semaglutida", "Tirzepatida"],
            ["Indicação (bula do paciente)", "Diabetes tipo 2 em adultos; redução de risco renal e cardiovascular em DM2 com doença renal crônica", "Controle glicêmico no diabetes tipo 2 em adultos"],
            ["Frequência", "1 vez por semana", "1 vez por semana"],
            ["Doses", "0,25 mg (4 semanas) → 0,5 mg → até 1 mg", "2,5 mg (4 semanas) → 5 mg → +2,5 mg a cada ≥4 semanas → até 15 mg"],
            ["Apresentação", "Caneta multidose: a de 1 mg tem 4 doses", "4 canetas de uso único (0,5 mL) por caixa"],
            ["Conservação em uso", "6 semanas após o primeiro uso, abaixo de 30 °C ou na geladeira", "Caneta de uso único; fora da geladeira até 21 dias, abaixo de 30 °C"],
            ["Dose esquecida", "Até 5 dias: aplicar; depois: pular", "Até 4 dias (96 h): aplicar; depois: pular"],
            ["Mudar o dia", "≥ 3 dias desde a última dose", "≥ 72 h entre as doses"],
            ["Contraindicações", "Alergia à semaglutida", "Alergia à tirzepatida; histórico pessoal/familiar de carcinoma medular de tireoide ou NEM2"],
            ["Gravidez", "Não usar; parar ≥ 2 meses antes", "Só se o benefício justificar o risco"],
            ["Amamentação", "Não usar", "Avaliação médica (quantidade no leite indetectável a muito baixa)"],
          ],
        },
      },
      {
        heading: "O que as bulas não comparam",
        paragraphs: [
          "Nenhuma das duas bulas do paciente traz números de perda de peso ou de redução de glicada. Dizer \"qual emagrece mais\" exige dados de estudos clínicos que não estão nessas bulas; essa comparação é conversa para a consulta.",
        ],
      },
    ],
    faq: [
      { q: "Posso trocar Ozempic por Mounjaro?", a: "Só com orientação médica. São substâncias e esquemas de dose diferentes." },
      { q: "Ozempic e Mounjaro podem ser usados juntos?", a: "A bula do Wegovy (semaglutida) proíbe combinar agonistas de GLP-1; a decisão sobre qualquer combinação é exclusivamente médica." },
      { q: "Os dois são para emagrecer?", a: "Nas bulas brasileiras do paciente, os dois são indicados para o diabetes tipo 2. O uso é definido pelo médico." },
    ],
    sources: [ozempicBula1, mounjaroBula],
  },
  {
    slug: "ozempic-vs-wegovy",
    title: "Ozempic ou Wegovy: qual a diferença? Comparação pelas bulas",
    answer:
      "Os dois têm a mesma substância, a semaglutida, mas são produtos diferentes: Ozempic é indicado para o diabetes tipo 2, com doses de 0,25 mg a 1 mg; Wegovy é indicado para controle de peso (IMC ≥ 30, ou ≥ 27 com condição relacionada), com doses de 0,25 mg a 2,4 mg. A bula do Wegovy proíbe usar os dois ao mesmo tempo. \"Qual emagrece mais\" não está nas bulas do paciente.",
    description: "Ozempic vs Wegovy: mesma substância, indicações e doses diferentes, segundo as bulas brasileiras.",
    updated: "2026-10-28",
    sections: [
      {
        heading: "Lado a lado, segundo as bulas",
        table: {
          head: ["", "Ozempic®", "Wegovy®"],
          rows: [
            ["Substância", "Semaglutida", "Semaglutida"],
            ["Indicação (bula do paciente)", "Diabetes tipo 2 em adultos; proteção renal/cardiovascular em DM2 com doença renal crônica", "Controle de peso (adultos IMC ≥ 30, ou 27–30 com comorbidade; adolescentes ≥ 12 anos com obesidade e > 60 kg); MASH; redução de risco cardiovascular com IMC ≥ 27"],
            ["Doses", "0,25 → 0,5 → 1 mg", "0,25 → 0,5 → 1 → 1,7 → 2,4 mg (etapas de 4 semanas)"],
            ["Apresentação", "Caneta multidose (1 mg: 4 doses)", "Caneta multidose, 4 doses de uma concentração"],
            ["Conservação em uso", "6 semanas", "6 semanas"],
            ["Dose esquecida", "Até 5 dias: aplicar; depois: pular", "Até 5 dias: aplicar; depois: pular; várias doses esquecidas: procurar o médico"],
            ["Uso conjunto", "—", "Não combinar com outros agonistas de GLP-1 (Ozempic®, Rybelsus®)"],
            ["Perda de peso na bula", "Listada como efeito colateral comum", "É a indicação"],
          ],
        },
      },
      { heading: "O que as bulas não comparam", paragraphs: ["Percentuais de perda de peso não constam nas bulas do paciente. A escolha entre os dois depende da indicação e é do médico."] },
    ],
    faq: [
      { q: "Wegovy é Ozempic com dose maior?", a: "Mesma substância, mas produtos distintos, com indicações, esquemas de dose e canetas próprios, cada um com sua bula." },
      { q: "Posso usar Ozempic para emagrecer no lugar do Wegovy?", a: "Na bula do Ozempic, perda de peso é efeito colateral, não indicação. Siga a prescrição do seu médico." },
    ],
    sources: [ozempicBula1, wegovyBula],
  },
];

export const getGuide = (slug: string) => guias.find((g) => g.slug === slug);

import { guiasApps } from "./guias-apps";
export const guias: Guide[] = [...guiasBulas, ...guiasApps];
