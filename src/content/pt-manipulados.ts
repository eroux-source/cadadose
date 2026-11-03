import type { Article } from "./types";

/** Regulatory pages: facts come from ANVISA's Nota Técnica and from the Conselho Federal de Farmácia (CFF) coverage of ANVISA rules. */
const nt200 = {
  label: "ANVISA — Nota Técnica nº 200/2025/SEI/GIMED/GGFIS/DIRE4 (21/08/2025) sobre manipulação de GLP-1",
  url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/anvisa-esclarece-e-determina-regras-para-manipulacao-de-canetas-de-glp-1/SEI_3775484_Nota_Tecnica_2002.pdf/@@display-file/file",
};
const cffRdc973 = {
  label: "CFF — Anvisa estabelece novas regras para prescrição e dispensação de agonistas de GLP-1 (RDC 973/2025 e IN 360/2025), 16/01/2026",
  url: "https://site.cff.org.br/noticia/Noticias-gerais/16/01/2026/anvisa-estabelece-novas-regras-para-prescricao-e-dispensacao-de-medicamentos-agonistas-de-glp-1",
};
const cffNorma2026 = {
  label: "CFF — Anvisa prepara nova norma com regras para manipulação de canetas emagrecedoras, 14/04/2026",
  url: "https://site.cff.org.br/noticia/Noticias-gerais/14/04/2026/anvisa-prepara-nova-norma-com-regras-para-manipulacao-de-canetas-emagrecedoras",
};

const mounjaroBula = {
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
  url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
};

const sharedSections = [
  {
    heading: "Receita obrigatória e retida (RDC 973/2025)",
    bullets: [
      "A retenção da receita é obrigatória: \"A retenção da receita é obrigatória\". A prescrição é emitida em duas vias e a farmácia fica com uma.",
      "A receita vale por 90 dias a partir da emissão.",
      "Compra e venda são registradas no SNGPC (sistema nacional de controle de produtos controlados).",
      "A IN 360/2025 aplica essas regras aos medicamentos à base de semaglutida, liraglutida, dulaglutida, tirzepatida e lixisenatida, isolados ou em associação.",
      "Receita digital vale apenas se emitida por sistema integrado ao SNCR.",
    ],
  },
  {
    heading: "O que a ANVISA diz sobre manipular GLP-1 (Nota Técnica 200/2025)",
    bullets: [
      "A manipulação só é admitida em caráter excepcional, segundo o item 5.10 da RDC 67/2007, com justificativa técnica e quando forem \"comprovadamente inexistentes no mercado produtos equivalentes\".",
      "\"A manipulação rotineira dessas substâncias em farmácias não se mostra viável do ponto de vista sanitário.\"",
      "O insumo (IFA) precisa ter qualidade, pureza e identidade documentadas, com rastreabilidade por lote; é \"vedado o uso de IFAs\" sem origem e boas práticas comprovadas.",
      "A ANVISA classifica esses injetáveis manipulados como de alto risco \"sem comprovação de estabilidade, esterilidade e equivalência terapêutica\".",
    ],
  },
  {
    heading: "Situação em mudança",
    paragraphs: [
      "Em abril de 2026 a ANVISA anunciou que apresentaria a minuta de uma nova nota técnica que \"revisará as regras atuais para a manipulação de medicamentos injetáveis de GLP-1\", com rastreabilidade, qualificação de fornecedores e \"testes mínimos de controle de qualidade\". Esta página será atualizada quando a norma for publicada. Confira sempre a fonte oficial.",
    ],
  },
];

const sharedFaq = [
  { q: "Preciso de receita para comprar GLP-1 manipulado?", a: "Sim. A receita é obrigatória e fica retida na farmácia, em duas vias, válida por 90 dias (RDC 973/2025)." },
  { q: "Qualquer farmácia de manipulação pode preparar semaglutida ou tirzepatida?", a: "Segundo a Nota Técnica 200/2025 da ANVISA, a manipulação só é admitida em caráter excepcional, com justificativa técnica e insumo de origem comprovada; a manipulação rotineira \"não se mostra viável do ponto de vista sanitário\"." },
  { q: "Como registro um produto manipulado no CadaDose?", a: "Escolha a opção \"frasco manipulado\", informe a dose exatamente como está na sua receita e a validade conforme o rótulo da sua farmácia. O diário não calcula doses." },
];

export const ptManipulados: Article[] = [
  {
    medicationSlug: "semaglutida-manipulada",
    intent: "regras-anvisa",
    title: "Semaglutida manipulada: o que a ANVISA determina (receita, manipulação, riscos)",
    answer:
      "No Brasil, medicamentos à base de semaglutida exigem receita retida em duas vias, válida por 90 dias (RDC 973/2025). Sobre a manipulação, a Nota Técnica 200/2025 da ANVISA admite apenas casos excepcionais com justificativa técnica e insumo de origem comprovada, e afirma que \"a manipulação rotineira dessas substâncias em farmácias não se mostra viável do ponto de vista sanitário\". Para a semaglutida de origem sintética, a nota registra que \"nenhum dos pedidos de registro contendo a molécula de origem sintética teve sua avaliação concluída\".",
    description: "Regras da ANVISA para semaglutida manipulada no Brasil: receita retida (RDC 973/2025), limites à manipulação (Nota Técnica 200/2025) e a norma em preparação em 2026.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      ...sharedSections,
      {
        heading: "Específico da semaglutida",
        paragraphs: [
          "A Nota Técnica 200/2025 registra que, para a semaglutida sintética, \"nenhum dos pedidos de registro contendo a molécula de origem sintética teve sua avaliação concluída\", e condiciona a importação para manipulação à existência de produto registrado com a mesma molécula. O CFF relata que a ANVISA, pela Nota Técnica 200/2025 e pelo Despacho 97/2025, proibiu a manipulação de semaglutida.",
        ],
      },
    ],
    faq: sharedFaq,
    sources: [nt200, cffRdc973, cffNorma2026],
  },
  {
    medicationSlug: "tirzepatida-manipulada",
    intent: "regras-anvisa",
    title: "Tirzepatida manipulada: o que a ANVISA determina (receita, manipulação, riscos)",
    answer:
      "No Brasil, medicamentos à base de tirzepatida exigem receita retida em duas vias, válida por 90 dias (RDC 973/2025). Sobre a manipulação, a Nota Técnica 200/2025 da ANVISA admite apenas casos excepcionais com justificativa técnica e insumo de origem comprovada. Segundo o CFF, a manipulação de tirzepatida não foi proibida de forma absoluta, mas está \"sob monitoramento rigoroso\", com novas restrições em 2025 e uma nova norma em preparação em 2026.",
    description: "Regras da ANVISA para tirzepatida manipulada no Brasil: receita retida (RDC 973/2025), condições da Nota Técnica 200/2025 e a norma em preparação em 2026.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      ...sharedSections,
      {
        heading: "Específico da tirzepatida",
        paragraphs: [
          "A Nota Técnica 200/2025 cita a análise anterior (NT 92/2024) segundo a qual a rota sintética da tirzepatida permite a manipulação, desde que cumpridos os requisitos da RDC 67/2007 e as exigências de qualidade do insumo (Anexo I: identidade, teor de 90% a 110%, impurezas, esterilidade e endotoxinas). O CFF descreve a manipulação de tirzepatida como \"sob monitoramento rigoroso\".",
        ],
      },
    ],
    faq: sharedFaq,
    sources: [nt200, cffRdc973, cffNorma2026],
  },
  {
    medicationSlug: "tirzepatida-manipulada",
    intent: "gravidez-e-amamentacao",
    title: "Quem amamenta pode tomar “Mounjaro de pobre” (tirzepatida manipulada)? O que dizem a bula e a ANVISA",
    answer:
      "Não existe bula para “Mounjaro de pobre”: o nome é usado para a tirzepatida manipulada, que não tem registro nem bula na ANVISA. A única bula de tirzepatida no Brasil é a do Mounjaro, e ela diz que a quantidade no leite materno é “considerada indetectável a muito baixa”, com uso na amamentação sujeito a avaliação médica. Para o manipulado, a ANVISA afirma que esses injetáveis não têm “comprovação de estabilidade, esterilidade e equivalência terapêutica”, ou seja, o que vale para o Mounjaro não pode ser estendido a ele. A decisão é do médico.",
    description: "“Mounjaro de pobre” é a tirzepatida manipulada, sem bula. O que a bula do Mounjaro diz sobre amamentação e por que a ANVISA não considera o manipulado equivalente.",
    updated: "2026-11-03",
    reviewed: false,
    sections: [
      {
        heading: "O que é chamado de “Mounjaro de pobre”",
        paragraphs: [
          "A expressão aparece nas buscas para a tirzepatida manipulada em farmácia (frasco com seringa) e, às vezes, para outras canetas sem registro. Nenhum desses produtos tem bula aprovada pela ANVISA. O único medicamento com tirzepatida registrado no Brasil é o Mounjaro (registro 1.1260.0202).",
        ],
        links: [
          { label: "“Mounjaro natural” ou “de pobre” existe?", href: "/guias/mounjaro-natural-ou-de-pobre-existe" },
          { label: "Tirzepatida manipulada: regras da ANVISA", href: "/medicamentos/tirzepatida-manipulada/regras-anvisa" },
        ],
      },
      {
        heading: "O que a bula do Mounjaro diz sobre amamentação",
        paragraphs: [
          "A bula do paciente informa que a quantidade de tirzepatida no leite materno é “considerada indetectável a muito baixa”, e que o uso durante a amamentação deve ser avaliado pelo médico. A bula não libera o uso por conta própria.",
        ],
        links: [{ label: "Mounjaro na gravidez e na amamentação (bula)", href: "/medicamentos/mounjaro/gravidez-e-amamentacao" }],
      },
      {
        heading: "Por que isso não se transfere ao manipulado (Nota Técnica 200/2025)",
        bullets: [
          "A ANVISA classifica os injetáveis de GLP-1 manipulados como de alto risco “sem comprovação de estabilidade, esterilidade e equivalência terapêutica”.",
          "“A manipulação rotineira dessas substâncias em farmácias não se mostra viável do ponto de vista sanitário.”",
          "O insumo precisa ter identidade, pureza e rastreabilidade documentadas; é “vedado o uso de IFAs” sem origem e boas práticas comprovadas.",
          "Sem equivalência comprovada, não há como afirmar que a quantidade que passa ao leite seja a mesma descrita na bula do Mounjaro.",
        ],
      },
      {
        heading: "Receita obrigatória (RDC 973/2025)",
        paragraphs: ["Tirzepatida, manipulada ou não, só é dispensada com receita retida em duas vias, válida por 90 dias, com registro no SNGPC (IN 360/2025)."],
      },
    ],
    faq: [
      { q: "Quem amamenta pode tomar Mounjaro de pobre?", a: "Não há bula nem avaliação da ANVISA para a tirzepatida manipulada, então não existe orientação oficial de uso na amamentação. A bula do Mounjaro descreve a quantidade no leite como indetectável a muito baixa, com uso sujeito ao médico; a ANVISA diz que o manipulado não tem equivalência comprovada. Fale com quem prescreveu." },
      { q: "A bula do Mounjaro vale para o manipulado?", a: "Não. A bula se refere ao produto registrado; a Nota Técnica 200/2025 afirma que os manipulados não têm comprovação de estabilidade, esterilidade e equivalência terapêutica." },
      { q: "E na gravidez?", a: "A bula do Mounjaro diz que, para controle do peso, o medicamento não deve ser usado na gravidez, e que deve ser interrompido pelo menos 1 mês antes de uma gravidez planejada. Para o manipulado, não há bula." },
    ],
    sources: [mounjaroBula, nt200, cffRdc973],
  },
];
