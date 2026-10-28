import type { Article } from "./types";

const ozempicBula1 = {
  label: "Bula do paciente Ozempic® 1 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
};
const ozempicBula025 = {
  label: "Bula do paciente Ozempic® 0,25 mg / 0,5 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_1-5mL_0-25mg_0-5mg_Bula_Paciente.pdf",
};
const wegovyBula = {
  label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
};

export const ptWave3: Article[] = [
  // ───────────── OZEMPIC ─────────────
  {
    medicationSlug: "ozempic",
    intent: "efeitos-colaterais",
    title: "Efeitos colaterais do Ozempic (semaglutida) segundo a bula brasileira",
    answer:
      "Os efeitos muito comuns do Ozempic (mais de 1 em 10 pessoas) são náusea, diarreia e hipoglicemia quando usado com sulfonilureia ou insulina. Os comuns (até 1 em 10) incluem vômito, indigestão, gastrite, refluxo, dor e inchaço no estômago, constipação, arrotos, cálculo biliar, tontura, cansaço, perda de apetite, gases, aumento de enzimas pancreáticas e dor de cabeça. Dor abdominal grave e contínua exige procurar um médico imediatamente.",
    description: "Efeitos colaterais do Ozempic por frequência, como listados na bula brasileira, e os sinais que exigem atendimento médico.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Por frequência, como na bula",
        table: {
          head: ["Frequência", "Reações listadas"],
          rows: [
            ["Muito comum (> 1 em 10)", "Náusea; diarreia; hipoglicemia com sulfonilureia ou insulina"],
            ["Comum (até 1 em 10)", "Vômito; hipoglicemia com outros antidiabéticos orais; indigestão; gastrite; refluxo (DRGE); dor no estômago; inchaço no estômago; constipação; arrotos; cálculo biliar; tontura; cansaço; perda de peso; perda de apetite; gases; aumento de lipase e amilase; dor de cabeça"],
            ["Incomum (até 1 em 100)", "Alteração no paladar; pulso rápido; reações no local da injeção (hematoma, dor, irritação, coceira, erupção); reações alérgicas (erupção, coceira, urticária); atraso no esvaziamento do estômago; pancreatite aguda (efeito grave)"],
            ["Rara (até 1 em 1.000)", "Reações alérgicas graves (anafiláticas) e angioedema (efeito grave)"],
            ["Muito rara (até 1 em 10.000)", "Neuropatia óptica isquêmica anterior não arterítica (NOIA), efeito grave"],
            ["Desconhecida", "Alteração na sensibilidade da pele; obstrução intestinal (efeito grave)"],
          ],
        },
      },
      {
        heading: "Sinais de alerta descritos na bula",
        bullets: [
          "Pancreatite: procure um médico imediatamente diante de \"dor abdominal grave e contínua que pode ser em razão da pancreatite aguda\".",
          "Hipoglicemia: \"A combinação de uma sulfonilureia ou insulina com este medicamento pode aumentar o risco\". Sinais: suor frio, tremor, confusão.",
          "Desidratação: náusea, vômito e diarreia \"podem causar desidratação (perda de líquidos)\"; beba bastante líquido, sobretudo se tiver problemas renais.",
          "Visão: \"Se você tem doença do olho diabético e está usando insulina, Ozempic® pode levar a um agravamento da sua visão\"; mudanças súbitas na visão também devem ser avaliadas.",
          "Alergia grave: problemas para respirar ou inchaço de face, lábios, língua ou garganta exigem ajuda médica imediata.",
        ],
      },
      {
        heading: "O que anotar para a consulta",
        paragraphs: ["Dia, intensidade e relação com a aplicação e com a dose. O diário CadaDose registra isso para você mostrar ao médico."],
      },
    ],
    faq: [
      { q: "Quais são os efeitos colaterais mais comuns do Ozempic?", a: "Náusea e diarreia, listados como muito comuns (mais de 1 em 10 pessoas) na bula, além de hipoglicemia quando usado com sulfonilureia ou insulina." },
      { q: "Ozempic causa pancreatite?", a: "A bula lista pancreatite aguda como efeito incomum (até 1 em 100 pessoas) e grave. Dor abdominal grave e contínua pede atendimento imediato." },
      { q: "Ozempic causa queda de cabelo?", a: "Queda de cabelo não aparece na lista de reações da bula do Ozempic. Converse com seu médico se notar." },
    ],
    sources: [ozempicBula1, ozempicBula025],
  },
  {
    medicationSlug: "ozempic",
    intent: "tabela-de-dose",
    title: "Tabela de doses do Ozempic (semaglutida) segundo a bula brasileira",
    answer:
      "Segundo a bula, Ozempic começa com 0,25 mg uma vez por semana durante 4 semanas e passa para 0,5 mg por semana. Se o controle glicêmico ainda for insuficiente com 0,5 mg, o médico pode aumentar para 1 mg uma vez por semana, a dose mais alta listada na bula brasileira. A dose de 0,25 mg é de adaptação, não de manutenção.",
    description: "Esquema de doses do Ozempic no Brasil (0,25 mg, 0,5 mg e 1 mg) conforme a bula, e quantas doses tem cada caneta.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Esquema da bula",
        table: {
          head: ["Dose semanal", "Regra da bula"],
          rows: [
            ["0,25 mg", "Dose inicial, por 4 semanas"],
            ["0,5 mg", "Após as 4 semanas iniciais"],
            ["1 mg", "\"Seu médico pode aumentar sua dose para 1 mg, uma vez por semana\", se o controle com 0,5 mg for insuficiente"],
          ],
        },
      },
      {
        heading: "Canetas e doses",
        bullets: [
          "Caneta de 0,25 mg / 0,5 mg: 1,5 mL com 2 mg de semaglutida; libera doses de 0,25 mg ou 0,5 mg.",
          "Caneta de 1 mg: \"Um sistema de aplicação não utilizado contém 4 doses de 1 mg.\"",
        ],
      },
      {
        heading: "O que a tabela não decide",
        paragraphs: ["O esquema é o da bula, não a sua prescrição. Quem decide manter ou aumentar a dose é o médico. Não altere a dose por conta própria."],
      },
    ],
    faq: [
      { q: "Qual é a dose inicial do Ozempic?", a: "0,25 mg uma vez por semana, por 4 semanas, segundo a bula." },
      { q: "Qual é a dose máxima do Ozempic no Brasil?", a: "1 mg uma vez por semana é a dose mais alta listada na bula brasileira do paciente." },
      { q: "Posso mudar o dia da aplicação?", a: "Sim, se tiverem passado pelo menos 3 dias desde a última aplicação." },
    ],
    sources: [ozempicBula025, ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "onde-aplicar",
    title: "Onde aplicar Ozempic: os locais indicados na bula",
    answer:
      "A bula brasileira do Ozempic indica a aplicação subcutânea na parte da frente das coxas, no abdome ou na parte superior do braço: \"Os melhores locais para aplicar a injeção são a parte anterior das coxas\", além do abdome e do braço. Nunca em veia ou músculo.",
    description: "Locais de aplicação do Ozempic conforme a bula brasileira.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Os locais da bula",
        bullets: ["Parte anterior (da frente) das coxas", "Abdome", "Parte superior do braço"],
        paragraphs: ["A aplicação é subcutânea: a bula orienta não injetar em veia ou músculo. A bula do Ozempic não traz uma regra de rodízio; alternar os pontos é uma prática a combinar com o seu médico, e o diário CadaDose ajuda a registrar onde foi cada aplicação."],
      },
    ],
    faq: [
      { q: "Posso aplicar Ozempic na barriga?", a: "Sim, o abdome é um dos locais indicados na bula." },
      { q: "Ozempic pode ser aplicado no braço?", a: "Sim, na parte superior do braço, segundo a bula." },
    ],
    sources: [ozempicBula1],
  },

  // ───────────── WEGOVY ─────────────
  {
    medicationSlug: "wegovy",
    intent: "efeitos-colaterais",
    title: "Efeitos colaterais do Wegovy (semaglutida) segundo a bula brasileira",
    answer:
      "Os efeitos muito comuns do Wegovy (mais de 1 em 10 pessoas) são dor de cabeça, náusea, vômito, diarreia, constipação, dor no estômago e sensação de fraqueza ou cansaço. Entre os comuns (até 1 em 10) estão tontura, indigestão, arrotos, gases, gastrite, refluxo, cálculos biliares, queda de cabelo, reações no local da injeção e hipoglicemia em pessoas com diabetes tipo 2. Dor intensa e contínua no abdome que irradia para as costas exige consulta médica imediata.",
    description: "Efeitos colaterais do Wegovy por frequência, como listados na bula brasileira, e os sinais que exigem atendimento médico.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Por frequência, como na bula",
        table: {
          head: ["Frequência", "Reações listadas"],
          rows: [
            ["Muito comum (> 1 em 10)", "Dor de cabeça; náusea; vômito; diarreia; constipação; dor no estômago; sensação de fraqueza ou cansaço"],
            ["Comum (até 1 em 10)", "Tontura; desconforto no estômago ou indigestão; arrotos; gases; inchaço do estômago; gastrite; refluxo ou azia; cálculos biliares; queda de cabelo; reações no local da injeção; alteração no gosto; sensibilidade da pele alterada; hipoglicemia em pacientes com diabetes tipo 2; complicações da retinopatia diabética (efeito grave)"],
            ["Incomum (até 1 em 100)", "Pancreatite aguda (efeito grave); pressão arterial baixa; aumento do batimento cardíaco; aumento de lipase e amilase; atraso no esvaziamento do estômago; tontura ou vertigem ao levantar-se"],
            ["Raro (até 1 em 1.000)", "Reações alérgicas graves (anafiláticas, angioedema)"],
            ["Muito raro (até 1 em 10.000)", "Neuropatia óptica isquêmica anterior não arterítica (NOIA)"],
            ["Desconhecido", "Obstrução intestinal"],
          ],
        },
      },
      {
        heading: "Sinais de alerta descritos na bula",
        bullets: [
          "Pancreatite: \"Se você apresentar dor intensa e contínua na área do estômago/abdome (que irradia para as costas)\", consulte um médico imediatamente.",
          "Hipoglicemia: o uso com sulfonilureia ou insulina \"pode aumentar o risco de apresentar níveis baixos de açúcar no sangue (hipoglicemia)\".",
          "Desidratação: náusea, vômito ou diarreia podem desidratar; a bula diz que isso \"é especialmente importante se você tem problemas nos rins\".",
          "Visão: em pessoas com doença ocular diabética que usam insulina, \"este medicamento pode levar a um agravamento da sua visão\".",
          "Alergia: \"Reações de hipersensibilidade foram relatadas com o uso de Wegovy®\"; se ocorrerem, \"pare de usar Wegovy® e procure ajuda médica\".",
        ],
      },
      {
        heading: "O que anotar para a consulta",
        paragraphs: ["Dia, intensidade e relação com a aplicação e com a dose. O diário CadaDose registra isso para você mostrar ao médico."],
      },
    ],
    faq: [
      { q: "Wegovy causa queda de cabelo?", a: "Sim, a bula lista queda de cabelo entre os efeitos comuns (até 1 em 10 pessoas)." },
      { q: "Quais são os efeitos mais comuns do Wegovy?", a: "Dor de cabeça, náusea, vômito, diarreia, constipação, dor no estômago e cansaço, listados como muito comuns na bula." },
      { q: "Wegovy causa pancreatite?", a: "A bula lista pancreatite aguda como efeito incomum (até 1 em 100 pessoas) e grave. Dor intensa e contínua no abdome exige consulta imediata." },
    ],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "tabela-de-dose",
    title: "Tabela de doses do Wegovy (semaglutida) segundo a bula brasileira",
    answer:
      "Segundo a bula, Wegovy sobe em etapas de 4 semanas: 0,25 mg (semanas 1 a 4), 0,5 mg (5 a 8), 1 mg (9 a 12), 1,7 mg (13 a 16) e 2,4 mg a partir da semana 17, que é a dose de manutenção. A partir da semana 21, em condições específicas, o médico pode considerar 7,2 mg por semana (três aplicações de 2,4 mg).",
    description: "Esquema de doses do Wegovy no Brasil, de 0,25 mg a 2,4 mg, conforme a bula, com a opção de 7,2 mg em condições específicas.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Esquema da bula (controle de peso, adultos)",
        table: {
          head: ["Semanas", "Dose semanal"],
          rows: [
            ["1 a 4", "0,25 mg"],
            ["5 a 8", "0,5 mg"],
            ["9 a 12", "1 mg"],
            ["13 a 16", "1,7 mg"],
            ["A partir da 17", "2,4 mg (manutenção)"],
            ["A partir da 21", "2,4 mg, ou 7,2 mg em condições específicas definidas na bula e avaliadas pelo médico"],
          ],
        },
      },
      {
        heading: "Canetas e doses",
        paragraphs: ["Cada caneta libera 4 doses de uma mesma concentração (0,25, 0,5, 1, 1,7 ou 2,4 mg). A dose de 7,2 mg não é uma caneta separada: é dada como três aplicações de 2,4 mg na semana, apenas quando o médico indicar."],
      },
      {
        heading: "O que a tabela não decide",
        paragraphs: ["O médico pode manter uma etapa por mais tempo. Não acelere nem altere a dose por conta própria."],
      },
    ],
    faq: [
      { q: "Qual é a dose de manutenção do Wegovy?", a: "2,4 mg uma vez por semana, a partir da semana 17, segundo a bula." },
      { q: "Quanto tempo fica em cada dose?", a: "4 semanas em cada etapa (0,25, 0,5, 1 e 1,7 mg) antes de chegar a 2,4 mg." },
      { q: "O que é a dose de 7,2 mg?", a: "Três aplicações de 2,4 mg em uma semana, possível a partir da semana 21 em condições específicas da bula, por decisão médica." },
    ],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "onde-aplicar",
    title: "Onde aplicar Wegovy: locais da bula e distância do umbigo",
    answer:
      "A bula brasileira do Wegovy indica três locais de aplicação subcutânea: parte superior do braço, parte da frente das coxas ou abdome, mantendo 5 cm de distância do umbigo (\"mantenha uma distância de 5 cm do seu umbigo\"). Evite o mesmo ponto da última aplicação; a mesma região pode ser usada de novo.",
    description: "Locais de aplicação do Wegovy conforme a bula brasileira, distância do umbigo e troca de ponto.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Os locais da bula",
        bullets: ["Parte superior do braço", "Parte da frente das coxas", "Abdome, a 5 cm do umbigo"],
        paragraphs: ["\"Evite o mesmo ponto da última aplicação\": a mesma região pode ser reutilizada, mudando o ponto. O diário CadaDose registra o local de cada aplicação e sugere o próximo."],
      },
    ],
    faq: [
      { q: "Posso aplicar Wegovy sempre na barriga?", a: "Pode usar a mesma região, mas a bula orienta evitar o mesmo ponto da última aplicação e manter 5 cm do umbigo." },
      { q: "Wegovy pode ser aplicado no braço?", a: "Sim, na parte superior do braço, segundo a bula." },
    ],
    sources: [wegovyBula],
  },
];
