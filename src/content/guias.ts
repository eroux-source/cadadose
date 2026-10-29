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
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
  url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
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
      "Ozempic tem semaglutida; Mounjaro tem tirzepatida. Os dois são injeções semanais; nas bulas brasileiras, Ozempic é indicado para o diabetes tipo 2 e Mounjaro, desde a ampliação de uso de 22/04/2026, para diabetes tipo 2, controle crônico do peso e apneia obstrutiva do sono. As doses são diferentes: Ozempic vai de 0,25 mg a 1 mg; Mounjaro, de 2,5 mg a 15 mg. Ozempic vem em caneta multidose (4 doses); Mounjaro, no Brasil, em 4 canetas de uso único por caixa. Qual é melhor para você, só o médico pode dizer.",
    description: "Ozempic vs Mounjaro: substância, indicação, doses, caneta, conservação e dose esquecida, lado a lado, segundo as bulas brasileiras.",
    updated: "2026-10-28",
    sections: [
      {
        heading: "Lado a lado, segundo as bulas",
        table: {
          head: ["", "Ozempic®", "Mounjaro®"],
          rows: [
            ["Substância", "Semaglutida", "Tirzepatida"],
            ["Indicação (bula do paciente)", "Diabetes tipo 2 em adultos; redução de risco renal e cardiovascular em DM2 com doença renal crônica", "Diabetes tipo 2; controle crônico do peso (IMC ≥ 30, ou ≥ 27 com comorbidade); apneia obstrutiva do sono moderada a grave com obesidade (versão 05/2026)"],
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
      { q: "Os dois são para emagrecer?", a: "Na bula brasileira, Mounjaro tem indicação de controle crônico do peso desde 22/04/2026; Ozempic é indicado para o diabetes tipo 2. O uso é definido pelo médico." },
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
import { guiasMarcas, guiasMarcasExtra } from "./guias-marcas";

const saxendaBula = { label: "Bula do paciente Saxenda® (liraglutida), Novo Nordisk — registro ANVISA 1.1766.0032, aprovada em 17/04/2026", url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf" };
const rybelsusBula = { label: "Bula do paciente Rybelsus® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0037, aprovada em 08/09/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Rybelsus_Bula_PACIENTE.pdf" };
const U2 = "2026-10-28";
export const guiasExtra: Guide[] = [
  {
    slug: "mounjaro-vs-wegovy",
    title: "Mounjaro ou Wegovy: qual a diferença? Comparação pelas bulas brasileiras",
    answer: "Mounjaro é tirzepatida (Lilly); Wegovy é semaglutida (Novo Nordisk). Os dois são injeções semanais e, desde 22/04/2026, os dois têm indicação de controle crônico do peso na bula (IMC ≥ 30, ou ≥ 27 com comorbidade). Mounjaro também é indicado para diabetes tipo 2 e apneia do sono; Wegovy, para MASH e redução de risco cardiovascular. Doses: Mounjaro 2,5 a 15 mg, caneta de uso único (4 por caixa), 21 dias fora da geladeira; Wegovy 0,25 a 2,4 mg, caneta multidose (4 doses), 6 semanas após o primeiro uso. “Qual emagrece mais” não está nas bulas.",
    description: "Mounjaro e Wegovy lado a lado: substância, indicações, escada de doses, caneta, conservação e dose esquecida, só com o que as bulas dizem.",
    updated: U2,
    sections: [
      { heading: "Lado a lado (bulas do paciente)", table: { head: ["", "Mounjaro", "Wegovy"], rows: [
        ["Substância", "tirzepatida", "semaglutida"],
        ["Indicações", "diabetes tipo 2; controle crônico do peso; apneia obstrutiva do sono (versão 05/2026)", "controle de peso (adultos e adolescentes ≥ 12 anos); MASH; redução de risco cardiovascular"],
        ["Escada de doses", "2,5 → 5 → 7,5 → 10 → 12,5 → 15 mg (passos de ≥ 4 semanas)", "0,25 → 0,5 → 1 → 1,7 → 2,4 mg (4 semanas cada)"],
        ["Caneta", "uso único, 0,5 mL, 4 por caixa (também frasco-ampola)", "multidose, 4 doses"],
        ["Fora da geladeira", "até 21 dias, abaixo de 30 °C", "6 semanas após o primeiro uso, abaixo de 30 °C"],
        ["Dose esquecida", "até 96 horas (4 dias)", "até 120 horas (5 dias)"],
        ["Marco de reavaliação", "5% do peso em 6 meses na maior dose tolerada", "adolescentes: 5% do IMC após 12 semanas"],
        ["Contracepção e gravidez", "método não oral ou barreira por 4 semanas no início e após cada aumento; parar 1 mês antes de engravidar", "recomenda contraceptivos durante o uso; parar pelo menos dois meses antes de engravidar"],
      ] } },
      { heading: "O que as bulas não comparam", paragraphs: ["Nenhuma das duas bulas diz qual emagrece mais nem qual tem menos efeitos. Ambas listam náusea, vômito, diarreia e constipação entre os efeitos mais frequentes. A escolha é do médico, pelo seu caso."] },
    ],
    faq: [
      { q: "Posso trocar de Wegovy para Mounjaro?", a: "A troca é decisão médica; as escadas de dose são diferentes e nenhuma bula descreve a conversão." },
      { q: "Qual aguenta mais tempo fora da geladeira?", a: "Wegovy: 6 semanas após o primeiro uso. Mounjaro: 21 dias." },
    ],
    sources: [mounjaroBula, wegovyBula],
  },
  {
    slug: "saxenda-vs-wegovy",
    title: "Saxenda ou Wegovy: qual a diferença? Comparação pelas bulas brasileiras",
    answer: "Os dois são da Novo Nordisk e indicados para controle de peso (IMC ≥ 30, ou ≥ 27 com comorbidade; adolescentes ≥ 12 anos). A diferença central: Saxenda é liraglutida, aplicação diária, escada semanal de 0,6 a 3,0 mg, caneta válida por 4 semanas após aberta, dose esquecida em até 12 horas. Wegovy é semaglutida, aplicação semanal, escada de 0,25 a 2,4 mg a cada 4 semanas, caneta válida por 6 semanas, dose esquecida em até 5 dias. Saxenda é contraindicado na gravidez; a bula do Wegovy diz para não usar na gravidez.",
    description: "Saxenda e Wegovy lado a lado: frequência, doses, canetas, conservação, dose esquecida, só com o que as bulas dizem.",
    updated: U2,
    sections: [
      { heading: "Lado a lado (bulas do paciente)", table: { head: ["", "Saxenda", "Wegovy"], rows: [
        ["Substância", "liraglutida", "semaglutida"],
        ["Frequência", "uma vez ao dia", "uma vez por semana"],
        ["Escada", "0,6 → 1,2 → 1,8 → 2,4 → 3,0 mg (uma semana cada)", "0,25 → 0,5 → 1 → 1,7 → 2,4 mg (4 semanas cada)"],
        ["Caneta", "18 mg (3 mL), 3 por caixa", "multidose, 4 doses"],
        ["Após o primeiro uso", "4 semanas (15 a 30 °C ou geladeira)", "6 semanas (abaixo de 30 °C ou geladeira)"],
        ["Dose esquecida", "até 12 horas; depois pule", "até 5 dias; depois pule"],
        ["Marco de reavaliação", "5% do peso após 12 semanas a 3,0 mg", "adolescentes: 5% do IMC após 12 semanas"],
        ["Queda de cabelo na bula", "não listada", "comum"],
      ] } },
      { heading: "O que as bulas não comparam", paragraphs: ["Nenhuma diz qual emagrece mais. As duas listam náusea, vômito, diarreia e constipação como muito comuns."] },
    ],
    faq: [{ q: "Saxenda é mais fraco que Wegovy?", a: "As bulas não comparam eficácia. São substâncias e esquemas diferentes; a escolha é médica." }],
    sources: [saxendaBula, wegovyBula],
  },
  {
    slug: "rybelsus-vs-ozempic",
    title: "Rybelsus ou Ozempic: qual a diferença? Comparação pelas bulas brasileiras",
    answer: "Mesma substância (semaglutida), mesma indicação de bula (diabetes tipo 2 em adultos) e mesmo fabricante. A diferença é a via: Rybelsus é comprimido diário (3, 7 e 14 mg), tomado em jejum com até 120 mL de água e 30 minutos sem comer; Ozempic é injeção semanal (0,25, 0,5 e 1 mg), caneta de 4 doses, 6 semanas após o primeiro uso. Rybelsus fica em temperatura ambiente; Ozempic, na geladeira até o primeiro uso.",
    description: "Rybelsus e Ozempic lado a lado: via, doses, regras de uso, conservação e dose esquecida, pelas bulas.",
    updated: U2,
    sections: [
      { heading: "Lado a lado (bulas do paciente)", table: { head: ["", "Rybelsus", "Ozempic"], rows: [
        ["Via e frequência", "comprimido, uma vez ao dia", "injeção, uma vez por semana"],
        ["Doses", "3 mg (1º mês) → 7 mg → 14 mg", "0,25 mg (4 semanas) → 0,5 mg → 1 mg"],
        ["Regra de uso", "jejum ≥ 8 h, até 120 mL de água, 30 min sem comer, não partir", "qualquer hora, independentemente das refeições; agulha nova"],
        ["Conservação", "15 a 30 °C, no blíster", "geladeira; em uso, 6 semanas abaixo de 30 °C"],
        ["Dose esquecida", "pule e tome um comprimido na manhã seguinte", "até 5 dias; depois pule"],
        ["Gravidez", "suspender pelo menos dois meses antes", "informe o médico; a bula não recomenda o uso"],
      ] } },
      { heading: "O que as bulas não comparam", paragraphs: ["Nenhuma das duas tem indicação de emagrecimento. A escolha entre comprimido e injeção é do médico."] },
    ],
    faq: [{ q: "Rybelsus emagrece como o Ozempic?", a: "Nenhum dos dois tem emagrecimento como indicação na bula; na do Rybelsus, perda de peso aparece como efeito incomum." }],
    sources: [rybelsusBula, ozempicBula1],
  },
];

export const guias: Guide[] = [...guiasBulas, ...guiasExtra, ...guiasApps, ...guiasMarcas, ...guiasMarcasExtra];
