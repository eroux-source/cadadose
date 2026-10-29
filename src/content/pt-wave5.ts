import type { Article, Section } from "./types";

/**
 * Wave 5: the topics the international trackers (Shotsy, GlucoPal) cover in English,
 * answered for Brazil strictly from the ANVISA-approved patient leaflets. Each sentence
 * maps to a leaflet section; when a leaflet is silent, the page says so instead of guessing.
 */
const mj = {
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
  url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
};
const oz = {
  label: "Bula do paciente Ozempic® 1 mg (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
};
const wg = {
  label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
};
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";

const silent = (nome: string, tema: string): Section => ({
  heading: "O que a bula não diz",
  paragraphs: [
    `A bula do paciente do ${nome} não traz orientação específica sobre ${tema}. Quando a bula é omissa, este site não completa com opinião: a referência é o seu médico, que conhece o seu caso.`,
  ],
});
const diario: Section = {
  heading: "Como registrar no diário",
  paragraphs: [
    "No CadaDose você anota o que sentiu, a intensidade e a dose da semana. Na consulta, o relatório mostra tudo em uma página, para o médico decidir com dados e não com memória.",
  ],
};

const A = (
  medicationSlug: string,
  intent: Article["intent"],
  title: string,
  answer: string,
  description: string,
  sections: Section[],
  faq: { q: string; a: string }[],
  sources: { label: string; url: string }[],
): Article => ({ medicationSlug, intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources });

export const ptWave5: Article[] = [
  // ───────── REAÇÃO NO LOCAL ─────────
  A("mounjaro", "reacao-no-local",
    "Mounjaro: reação no local da aplicação, vermelhidão e caroço — o que a bula diz",
    "A bula do Mounjaro lista “reação no local da injeção” como reação comum. A bula também descreve reações de hipersensibilidade na pele, como urticária (vergões avermelhados) e eczema, e orienta: se ocorrer uma reação de hipersensibilidade, interrompa o uso e informe o seu médico. Alterne o local de injeção a cada dose.",
    "O que a bula brasileira do Mounjaro diz sobre reações no local da injeção, urticária e eczema, e quando interromper.",
    [
      { heading: "O que a bula lista", bullets: [
        "Reação comum (seção 8): “reação no local da injeção”.",
        "Reações de hipersensibilidade (seção 4): “urticária (vergões avermelhados na pele) e eczema (inflamação na pele)”.",
        "Orientação da bula: “Caso ocorra uma reação de hipersensibilidade, interrompa o uso de MOUNJARO e informe ao seu médico.”",
      ] },
      { heading: "Rodízio reduz repetição no mesmo ponto", paragraphs: ["A bula orienta: “Alterne o local de injeção de cada dose.” Os locais são abdome, coxa ou braço (seção 6)."] },
      silent("Mounjaro", "hematoma, sangramento ou caroço (nódulo) no local da aplicação"),
      diario,
    ],
    [
      { q: "Vermelhidão leve no local da aplicação do Mounjaro é normal?", a: "A bula lista “reação no local da injeção” como reação comum. Se houver urticária ou eczema, a bula orienta interromper e informar o médico." },
      { q: "Posso aplicar no mesmo lugar da semana passada?", a: "A bula orienta alternar o local de injeção a cada dose." },
    ], [mj, bulario]),
  A("wegovy", "reacao-no-local",
    "Wegovy: reação no local da aplicação e distância de 5 cm — o que a bula diz",
    "A bula do Wegovy lista “reações no local da injeção” como efeito comum (até 1 em 10 pessoas). Para reduzir repetição no mesmo ponto, a bula orienta aplicar a pelo menos 5 cm da aplicação anterior e a 5 cm do umbigo, sem injetar na veia ou no músculo.",
    "Reações no local da injeção de Wegovy segundo a bula brasileira, e as regras de distância entre aplicações.",
    [
      { heading: "Frequência na bula", bullets: ["Comum (até 1 em 10 pessoas): “reações no local da injeção” (seção 8).", "A bula não detalha hematoma, dor ou vermelhidão separadamente."] },
      { heading: "Regras de distância (seção 6 e instruções de uso)", bullets: [
        "“As aplicações podem ser feitas na mesma área do corpo, mas devem ter uma distância de pelo menos 5 cm uma da outra.”",
        "“Escolha a parte superior dos braços, a parte da frente das coxas ou o abdome (mantenha uma distância de 5 cm do seu umbigo).”",
        "“Não deve ser injetado na veia ou no músculo.”",
      ] },
      { heading: "Sinais de reação alérgica grave (seção 8, raro)", paragraphs: ["A bula cita reações anafiláticas e angioedema, com sinais como dificuldade respiratória, inchaço, tontura, batimento cardíaco acelerado, sudorese e perda de consciência. Nesses casos, procure atendimento imediato."] },
      diario,
    ],
    [
      { q: "Qual a distância mínima entre duas aplicações de Wegovy?", a: "Pelo menos 5 cm uma da outra, e 5 cm do umbigo, segundo a bula." },
      { q: "Reação no local é comum com Wegovy?", a: "Sim: a bula classifica como comum (até 1 em 10 pessoas)." },
    ], [wg, bulario]),
  A("ozempic", "reacao-no-local",
    "Ozempic: onde aplicar e o que fazer se derrubar a caneta — o que a bula diz",
    "A bula do Ozempic indica como melhores locais a parte anterior das coxas, o abdome e a parte superior do braço. Use sempre uma agulha nova a cada injeção. Se derrubar a caneta ou suspeitar de um problema, encaixe uma agulha nova e verifique o fluxo antes de injetar. Não use se a solução não estiver límpida e incolor.",
    "Locais de aplicação do Ozempic, agulha nova e o que fazer se a caneta cair, segundo a bula brasileira.",
    [
      { heading: "Locais (seção 6)", paragraphs: ["“Os melhores locais para aplicar a injeção são a parte anterior das coxas, a parte anterior da cintura (abdome) e a parte superior do braço.”"] },
      { heading: "Caneta e agulha (instruções de uso)", bullets: ["“Sempre use uma nova agulha para cada injeção.”", "“Se derrubar ou suspeitar de um problema, encaixe uma agulha nova e verifique o fluxo antes de injetar.”", "“Não utilize este medicamento se a solução não estiver límpida e incolor.” (seção 5)"] },
      silent("Ozempic", "distância do umbigo ou rodízio entre pontos (a bula do Wegovy, da mesma fabricante, traz a regra de 5 cm)"),
      diario,
    ],
    [
      { q: "Posso reutilizar a agulha do Ozempic?", a: "Não. A bula orienta usar sempre uma agulha nova para cada injeção." },
      { q: "Derrubei a caneta de Ozempic. E agora?", a: "Encaixe uma agulha nova e verifique o fluxo antes de injetar, segundo as instruções de uso." },
    ], [oz, bulario]),

  // ───────── DESIDRATAÇÃO E RINS ─────────
  A("mounjaro", "desidratacao-e-rins",
    "Mounjaro, desidratação e rins: por que a bula manda beber mais líquido",
    "A bula do Mounjaro avisa que náusea, vômito e diarreia “podem levar à desidratação (perda de líquidos), o que pode diminuir a função renal”, e orienta: “É importante aumentar a ingestão de líquidos para evitar a desidratação.” Esses efeitos foram mais frequentes durante o aumento de dose e diminuíram com o tempo.",
    "O aviso da bula do Mounjaro sobre desidratação e função renal, e a orientação de aumentar líquidos.",
    [
      { heading: "O que a bula diz (seção 4, efeitos gastrointestinais)", bullets: ["“Esses eventos podem levar à desidratação (perda de líquidos), o que pode diminuir a função renal.”", "“É importante aumentar a ingestão de líquidos para evitar a desidratação.”"] },
      { heading: "Quando é mais frequente (seção 8)", paragraphs: ["“A incidência de náusea, vômito e diarreia foi maior durante o período de aumento de dose e diminuiu com o tempo.”"] },
      silent("Mounjaro", "quantidade de água por dia"),
      diario,
    ],
    [
      { q: "Mounjaro faz mal para os rins?", a: "A bula não diz isso. Ela avisa que vômito e diarreia podem causar desidratação, e que a desidratação pode diminuir a função renal." },
      { q: "Quanto de água devo beber com Mounjaro?", a: "A bula orienta aumentar a ingestão de líquidos, sem definir uma quantidade. Pergunte ao seu médico." },
    ], [mj, bulario]),
  A("ozempic", "desidratacao-e-rins",
    "Ozempic, desidratação e rins: o aviso da bula",
    "A bula do Ozempic avisa que os efeitos no estômago e intestino “podem causar desidratação (perda de líquidos)” e que “isso é especialmente importante se você tem problema nos rins”. A orientação é beber bastante líquido.",
    "O aviso da bula brasileira do Ozempic sobre desidratação e rins.",
    [
      { heading: "O que a bula diz (seção 4, “Problemas no estômago e intestino e desidratação”)", bullets: ["“Esses efeitos colaterais podem causar desidratação (perda de líquidos)”.", "“Isso é especialmente importante se você tem problema nos rins.”", "Orientação: beber bastante líquido."] },
      { heading: "Náusea tende a passar", paragraphs: ["Seção 8: “Sensação de enjoo (náusea) – isso geralmente desaparece ao longo do tempo.”"] },
      diario,
    ],
    [
      { q: "Quem tem problema nos rins pode usar Ozempic?", a: "A bula pede atenção especial à desidratação nesse caso. A decisão é do médico." },
    ], [oz, bulario]),
  A("wegovy", "desidratacao-e-rins",
    "Wegovy, desidratação e rins: o que a bula diz e quem não deve usar",
    "A bula do Wegovy avisa que os efeitos colaterais gastrointestinais “podem causar desidratação (perda de líquidos)”, “especialmente importante se você tem problemas nos rins”. O uso de Wegovy não é recomendado se você “tem a função dos rins gravemente reduzida”.",
    "Desidratação, rins e a contraindicação de função renal gravemente reduzida na bula do Wegovy.",
    [
      { heading: "O que a bula diz (seção 4)", bullets: ["“Esses efeitos colaterais podem causar desidratação (perda de líquidos).”", "“Isso é especialmente importante se você tem problemas nos rins.”", "Uso não recomendado se você “tem a função dos rins gravemente reduzida”."] },
      { heading: "Náusea e vômito são muito comuns (seção 8)", paragraphs: ["Mais de 1 em 10 pessoas. “Estes efeitos geralmente ocorrem durante o escalonamento da dose e desaparecem com o tempo.”"] },
      diario,
    ],
    [
      { q: "Wegovy é contraindicado para quem tem doença renal?", a: "A bula diz que o uso não é recomendado com a função dos rins gravemente reduzida. Converse com seu médico." },
    ], [wg, bulario]),

  // ───────── VESÍCULA E PANCREATITE ─────────
  A("mounjaro", "vesicula-e-pancreatite",
    "Mounjaro, vesícula e pancreatite: sinais que a bula manda observar",
    "A bula do Mounjaro cita doenças agudas da vesícula biliar, como colelitíase (pedras na vesícula), e pede: “Informe ao seu médico caso tenha alguma doença da vesícula biliar.” Sobre pancreatite, a bula orienta interromper o uso e informar o médico em caso de suspeita; se confirmada, o medicamento não deve ser reiniciado.",
    "Vesícula biliar e pancreatite na bula brasileira do Mounjaro: o que informar ao médico e quando interromper.",
    [
      { heading: "Vesícula (seção 4)", bullets: ["“doenças agudas da vesícula biliar, como colelitíase (presença de pedras no interior da vesícula biliar)”.", "“Informe ao seu médico caso tenha alguma doença da vesícula biliar.”"] },
      { heading: "Pancreatite (seção 4)", paragraphs: ["Em caso de suspeita de pancreatite, a bula orienta interromper o uso e informar o médico; se confirmada, Mounjaro não deve ser reiniciado."] },
      diario,
    ],
    [
      { q: "Tenho pedra na vesícula, posso usar Mounjaro?", a: "A bula pede que você informe o médico sobre qualquer doença da vesícula. A decisão é dele." },
    ], [mj, bulario]),
  A("wegovy", "vesicula-e-pancreatite",
    "Wegovy, cálculos biliares e pancreatite: o que a bula diz",
    "A bula do Wegovy lista “cálculos biliares” como efeito comum (até 1 em 10 pessoas). Pancreatite é incomum, e a bula descreve os sinais: “dor intensa e prolongada no estômago, que pode ir para as costas”. Nesse caso, procure atendimento.",
    "Cálculos biliares e sinais de pancreatite na bula brasileira do Wegovy.",
    [
      { heading: "Frequências (seção 8)", bullets: ["Comum: “cálculos biliares”.", "Incomum (efeito grave): inflamação do pâncreas. “Os sinais de inflamação do pâncreas podem incluir dor intensa e prolongada no estômago, que pode ir para as costas.”"] },
      diario,
    ],
    [
      { q: "Qual o sinal de pancreatite com Wegovy?", a: "Dor intensa e prolongada no estômago, que pode ir para as costas, segundo a bula." },
    ], [wg, bulario]),
  A("ozempic", "vesicula-e-pancreatite",
    "Ozempic, cálculo biliar e pancreatite: o que a bula diz",
    "A bula do Ozempic lista “cálculo biliar” como reação comum (até 1 em 10 pessoas). Entre os efeitos graves, cita “pâncreas inflamado (pancreatite aguda) que pode causar dor intensa no estômago e nas costas, que não vai embora”, com orientação de procurar o médico imediatamente.",
    "Cálculo biliar e pancreatite aguda na bula brasileira do Ozempic.",
    [
      { heading: "Frequências (seção 8)", bullets: ["Comum: “cálculo biliar”.", "Grave: “Pâncreas inflamado (pancreatite aguda) que pode causar dor intensa no estômago e nas costas, que não vai embora.” Procure o médico imediatamente."] },
      diario,
    ],
    [
      { q: "Dor forte na barriga com Ozempic: o que fazer?", a: "A bula descreve dor intensa no estômago e nas costas que não passa como sinal de pancreatite e orienta procurar o médico imediatamente." },
    ], [oz, bulario]),

  // ───────── TIREOIDE ─────────
  A("mounjaro", "tireoide",
    "Mounjaro e tireoide: o que a bula brasileira diz sobre tumores de células C",
    "A bula do Mounjaro (versão 05/2026) contraindica o uso em quem tem “histórico pessoal ou familiar de carcinoma medular de tireoide” ou neoplasia endócrina múltipla tipo 2 (NEM2). Na seção de advertências, orienta: “Informe ao seu médico caso tenha nódulos na tireoide.” Aumento de calcitonina aparece entre as reações comuns ou incomuns, conforme o estudo.",
    "Tireoide na bula do Mounjaro: contraindicação por carcinoma medular/NEM2, nódulos e calcitonina.",
    [
      { heading: "Contraindicação (seção 3)", bullets: ["“histórico pessoal ou familiar de carcinoma medular de tireoide”.", "Neoplasia endócrina múltipla tipo 2 (NEM2)."] },
      { heading: "Advertência (seção 4, “Risco de tumores de células C da tireoide”)", bullets: ["“Informe ao seu médico caso tenha nódulos na tireoide.”", "Reações listadas (seção 8): aumento de calcitonina, comum nos estudos de controle do peso e incomum no diabetes tipo 2."] },
      silent("Mounjaro", "hipotireoidismo ou uso de levotiroxina"),
    ],
    [
      { q: "Quem tem nódulo na tireoide pode usar Mounjaro?", a: "A bula pede que você informe o médico. A decisão é dele." },
    ], [mj, bulario]),
  A("wegovy", "tireoide",
    "Wegovy e tireoide: carcinoma medular e NEM 2 na bula",
    "A bula do Wegovy pede que você converse com o médico “se você ou alguém da sua família já teve um tipo de câncer de tireoide chamado carcinoma medular de tireoide (CMT)” ou a síndrome NEM 2.",
    "Aviso da bula brasileira do Wegovy sobre carcinoma medular de tireoide e NEM 2.",
    [
      { heading: "Texto da bula (seção 4)", paragraphs: ["“Se você ou alguém da sua família já teve um tipo de câncer de tireoide chamado carcinoma medular de tireoide (CMT)” — ou NEM 2 — consulte o médico antes de usar."] },
      silent("Wegovy", "hipotireoidismo comum ou levotiroxina"),
    ],
    [{ q: "Histórico familiar de câncer de tireoide impede o Wegovy?", a: "A bula cita especificamente o carcinoma medular de tireoide e a NEM 2 como situações a discutir com o médico." }],
    [wg, bulario]),
  A("ozempic", "tireoide",
    "Ozempic e tireoide: o que a bula diz",
    "A bula do Ozempic pede que você consulte o médico “se você ou alguém da sua família já teve um tipo de câncer de tireoide chamado carcinoma medular de tireoide (CMT)”.",
    "Aviso da bula brasileira do Ozempic sobre carcinoma medular de tireoide.",
    [
      { heading: "Texto da bula (seção 4)", paragraphs: ["“Se você ou alguém da sua família já teve um tipo de câncer de tireoide chamado carcinoma medular de tireoide (CMT)” — consulte o médico."] },
      silent("Ozempic", "hipotireoidismo comum ou levotiroxina"),
    ],
    [{ q: "Ozempic causa câncer de tireoide?", a: "A bula não afirma isso. Ela pede atenção a histórico pessoal ou familiar de carcinoma medular de tireoide." }],
    [oz, bulario]),

  // ───────── PARAR O TRATAMENTO ─────────
  A("mounjaro", "parar-o-tratamento",
    "Parar o Mounjaro: o que a bula diz sobre interromper o tratamento",
    "A bula do Mounjaro é direta: “Não interrompa o tratamento sem o conhecimento do seu médico.” A bula não descreve o que acontece com o peso ou a glicemia depois de parar; essa conversa é com quem prescreveu.",
    "A orientação da bula brasileira do Mounjaro sobre interrupção do tratamento.",
    [
      { heading: "Texto da bula (seção 6)", paragraphs: ["“Não interrompa o tratamento sem o conhecimento do seu médico.”"] },
      silent("Mounjaro", "efeito rebote, reganho de peso ou desmame gradual"),
      diario,
    ],
    [{ q: "Posso parar o Mounjaro de uma vez?", a: "A bula orienta não interromper sem o conhecimento do médico." }],
    [mj, bulario]),
  A("wegovy", "parar-o-tratamento",
    "Parar o Wegovy e dose de manutenção: o que a bula diz",
    "A bula do Wegovy orienta: “Não pare de usar este medicamento sem falar com seu médico.” Sobre manutenção, a bula chama 2,4 mg de dose de manutenção e, depois de atingida a dose recomendada de 2,4 mg, diz para não aumentar mais.",
    "Interrupção e dose de manutenção na bula brasileira do Wegovy.",
    [
      { heading: "Texto da bula (seção 6)", bullets: ["“Não pare de usar este medicamento sem falar com seu médico.”", "“A dose deve ser aumentada até atingir 2,4 mg (dose de manutenção) ou a dose máxima tolerada.”", "“Depois de atingir a dose recomendada de 2,4 mg, não aumente mais esta dose.”"] },
      silent("Wegovy", "reganho de peso após parar"),
      diario,
    ],
    [{ q: "Qual é a dose de manutenção do Wegovy?", a: "2,4 mg uma vez por semana, ou a dose máxima tolerada, segundo a bula." }],
    [wg, bulario]),
  A("ozempic", "parar-o-tratamento",
    "Parar o Ozempic: o que a bula diz",
    "A bula do Ozempic orienta: “Não pare de utilizar Ozempic® sem conversar com seu médico.”",
    "A orientação da bula brasileira do Ozempic sobre interrupção do tratamento.",
    [
      { heading: "Texto da bula (seção 6, “Se você parar de utilizar Ozempic®”)", paragraphs: ["“Não pare de utilizar Ozempic® sem conversar com seu médico.”"] },
      silent("Ozempic", "reganho de peso ou desmame"),
      diario,
    ],
    [{ q: "Posso pular semanas de Ozempic por conta própria?", a: "A bula orienta não parar sem conversar com o médico." }],
    [oz, bulario]),

  // ───────── QUEDA DE CABELO ─────────
  A("wegovy", "queda-de-cabelo",
    "Wegovy causa queda de cabelo? O que a bula diz",
    "Sim, a bula do Wegovy lista “queda de cabelo” como efeito comum (até 1 em 10 pessoas) e acrescenta que “pode ocorrer com maior frequência com Wegovy® 7,2 mg”.",
    "Queda de cabelo na bula brasileira do Wegovy: frequência e relação com a dose de 7,2 mg.",
    [
      { heading: "Texto da bula (seção 8, comum)", paragraphs: ["“queda de cabelo – pode ocorrer com maior frequência com Wegovy® 7,2 mg”."] },
      silent("Wegovy", "causa da queda, duração ou suplementos"),
      diario,
    ],
    [{ q: "A queda de cabelo com Wegovy é permanente?", a: "A bula não informa duração. Registre no diário e leve ao médico." }],
    [wg, bulario]),
  A("mounjaro", "queda-de-cabelo",
    "Mounjaro causa queda de cabelo? O que a bula diz (e não diz)",
    "Sim, consta na bula. A versão 05/2026 da bula do Mounjaro lista queda de cabelo como reação comum (1% a 10%) nos estudos de controle do peso, apneia do sono e insuficiência cardíaca; não aparece na lista dos estudos de diabetes tipo 2. A bula anterior (21/11/2024) não trazia esse item.",
    "Queda de cabelo na bula do Mounjaro versão 05/2026: frequência e em quais estudos aparece.",
    [
      { heading: "Texto da bula (seção 8)", bullets: ["Comum (1% a 10%): queda de cabelo, nos estudos de controle crônico do peso, apneia obstrutiva do sono e insuficiência cardíaca.", "Não listada nos estudos de diabetes tipo 2."] },
      { heading: "O que mudou", paragraphs: ["A bula de 21/11/2024 não mencionava queda de cabelo; o item entrou com a ampliação de uso aprovada em 22/04/2026. Este site acompanha a versão mais recente."] },
      silent("Mounjaro", "duração da queda, causa ou suplementos"),
      diario,
    ],
    [{ q: "Mounjaro causa queda de cabelo?", a: "A bula versão 05/2026 lista como reação comum nos estudos de controle do peso. Registre e informe o médico." }],
    [mj, wg, bulario]),

  // ───────── VIAGEM ─────────
  A("wegovy", "viagem-e-transporte",
    "Viajar com Wegovy: avião, mala e temperatura — o que a bula diz",
    "A bula do Wegovy orienta: “No caso de viagens aéreas, não despachar o produto dentro das malas”, porque “o compartimento de bagagem dos aviões atinge temperaturas muito baixas, podendo congelar o medicamento”. Leve na bagagem de mão, em embalagem com proteção térmica, e não use Wegovy que tenha congelado.",
    "Como transportar Wegovy em viagem segundo a bula: bagagem de mão, proteção térmica e congelamento.",
    [
      { heading: "Transporte (seção 5)", bullets: ["“O transporte do medicamento deverá ser realizado através de uma embalagem que proporcione proteção térmica”.", "“evite alteração brusca de temperatura, incidência de luz direta e vibração excessiva.”", "“No caso de viagens aéreas, não despachar o produto dentro das malas.”", "“O compartimento de bagagem dos aviões atinge temperaturas muito baixas, podendo congelar o medicamento.”"] },
      { heading: "Fora da geladeira", bullets: ["“Você pode manter o sistema de aplicação por 6 semanas quando armazenado abaixo de 30 ºC ou em geladeira”.", "“Não congelar e não utilizar Wegovy® se tiver sido congelado.”", "“mantenha-o tampado para protegê-lo da luz.”"] },
      silent("Wegovy", "regras da ANAC ou documentos exigidos no aeroporto"),
    ],
    [
      { q: "Posso despachar o Wegovy na mala?", a: "Não. A bula orienta não despachar, pelo risco de congelar." },
      { q: "Quantos dias o Wegovy aguenta fora da geladeira?", a: "6 semanas abaixo de 30 °C, segundo a bula." },
    ], [wg, bulario]),
  A("ozempic", "viagem-e-transporte",
    "Viajar com Ozempic: avião e temperatura — o que a bula diz",
    "A bula do Ozempic orienta: “No caso de viagens aéreas, não despachar o produto dentro das malas.” Leve na bagagem de mão. A caneta em uso pode ficar até 6 semanas fora da geladeira, abaixo de 30 °C.",
    "Transporte do Ozempic em viagem segundo a bula brasileira.",
    [
      { heading: "Transporte (seção 5)", paragraphs: ["“No caso de viagens aéreas, não despachar o produto dentro das malas.”"] },
      { heading: "Conservação após o primeiro uso", paragraphs: ["Até 6 semanas abaixo de 30 °C ou em geladeira; não congelar. Não utilize se a solução não estiver límpida e incolor."] },
      silent("Ozempic", "regras da ANAC ou documentos exigidos"),
    ],
    [{ q: "Preciso de isopor para viajar com Ozempic?", a: "A bula pede embalagem com proteção térmica no transporte e bagagem de mão em avião." }],
    [oz, bulario]),
  A("mounjaro", "viagem-e-transporte",
    "Viajar com Mounjaro: quantos dias fora da geladeira — o que a bula diz",
    "A bula do Mounjaro permite guardar as canetas fora da geladeira, abaixo de 30 °C, por até 21 dias, e manda não congelar. A bula do Mounjaro não traz regra específica para viagens aéreas (a bula do Wegovy e do Ozempic orienta não despachar nas malas pelo risco de congelar).",
    "Transporte do Mounjaro em viagem: o limite de 21 dias fora da geladeira segundo a bula.",
    [
      { heading: "Conservação (seção 5)", bullets: ["“Armazenar em geladeira de 2°C a 8°C.”", "“MOUNJARO pode ser armazenado fora de refrigeração a temperaturas abaixo de 30°C por até 21 dias.”", "Não congelar."] },
      silent("Mounjaro", "viagem de avião ou bagagem despachada"),
      { heading: "Dica do diário", paragraphs: ["Anote no CadaDose a data em que a caixa saiu da geladeira: o diário conta os 21 dias para você."] },
    ],
    [{ q: "Mounjaro pode ir na mala despachada?", a: "A bula do Mounjaro não trata disso. As bulas do Wegovy e do Ozempic orientam não despachar, pelo risco de congelamento no porão do avião." }],
    [mj, wg, oz, bulario]),

  // ───────── HIPOGLICEMIA ─────────
  A("ozempic", "hipoglicemia",
    "Ozempic e hipoglicemia: sintomas e quando o risco aumenta, segundo a bula",
    "A bula do Ozempic diz que “a combinação de uma sulfonilureia ou insulina com este medicamento pode aumentar o risco” de hipoglicemia. Entre os sintomas listados: suor frio, pele fria e pálida, dor de cabeça e batimentos cardíacos rápidos.",
    "Hipoglicemia com Ozempic: combinação com insulina ou sulfonilureia e sintomas, pela bula.",
    [
      { heading: "Quando o risco aumenta (seção 4)", paragraphs: ["“A combinação de uma sulfonilureia ou insulina com este medicamento pode aumentar o risco” de açúcar baixo no sangue."] },
      { heading: "Sintomas (seção 8)", bullets: ["suor frio", "pele fria e pálida", "dor de cabeça", "batimentos cardíacos rápidos"] },
      diario,
    ],
    [{ q: "Ozempic sozinho causa hipoglicemia?", a: "A bula destaca o risco maior em combinação com insulina ou sulfonilureia." }],
    [oz, bulario]),
  A("wegovy", "hipoglicemia",
    "Wegovy e hipoglicemia: o aviso da bula para quem tem diabetes",
    "A bula do Wegovy avisa: “Utilizar uma sulfonilureia ou insulina com Wegovy® pode aumentar o risco de apresentar níveis baixos de açúcar no sangue” e pede: “Informe o seu médico se você tem diabetes tipo 2.”",
    "Hipoglicemia com Wegovy: o aviso da bula para uso com insulina ou sulfonilureia.",
    [
      { heading: "Texto da bula (seções 4 e 6)", bullets: ["“Utilizar uma sulfonilureia ou insulina com Wegovy® pode aumentar o risco de apresentar níveis baixos de açúcar no sangue”.", "“Informe o seu médico se você tem diabetes tipo 2.”", "“Não use Wegovy® em combinação com outros medicamentos que contenham agonistas do receptor GLP-1”."] },
      diario,
    ],
    [{ q: "Posso usar Wegovy junto com Ozempic?", a: "Não. A bula diz para não usar Wegovy em combinação com outros agonistas do receptor GLP-1." }],
    [wg, bulario]),

  // ───────── NÁUSEA ─────────
  A("wegovy", "nausea-o-que-fazer",
    "Náusea com Wegovy: o que a bula orienta fazer",
    "A bula do Wegovy traz uma orientação concreta: “Caso você esteja se sentindo muito incomodado por conta do enjoo (náuseas) ou vômitos, converse com seu médico sobre adiar o aumento da dose ou diminuir para a dose anterior até que os sintomas melhorem.” Náusea e vômito são muito comuns e “geralmente ocorrem durante o escalonamento da dose e desaparecem com o tempo”.",
    "O que a bula brasileira do Wegovy orienta para náusea e vômito: adiar o aumento ou voltar à dose anterior, com o médico.",
    [
      { heading: "Orientação da bula (seção 6, “Quanto utilizar”)", paragraphs: ["“Caso você esteja se sentindo muito incomodado por conta do enjoo (náuseas) ou vômitos, converse com seu médico sobre adiar o aumento da dose ou diminuir para a dose anterior até que os sintomas melhorem.”"] },
      { heading: "Frequência (seção 8)", bullets: ["Muito comum: náusea, vômito, diarreia, constipação, sensação de fraqueza ou cansaço.", "“Estes efeitos geralmente ocorrem durante o escalonamento da dose e desaparecem com o tempo.”"] },
      { heading: "Hidratação (seção 4)", paragraphs: ["Vômito e diarreia podem causar desidratação; a bula pede atenção especial para quem tem problemas nos rins."] },
      diario,
    ],
    [
      { q: "Posso voltar para a dose anterior do Wegovy se enjoar muito?", a: "A bula orienta conversar com o médico sobre adiar o aumento ou diminuir para a dose anterior. A decisão é dele." },
      { q: "A náusea do Wegovy passa?", a: "Segundo a bula, geralmente ocorre no escalonamento e desaparece com o tempo." },
    ], [wg, bulario]),
  A("mounjaro", "nausea-o-que-fazer",
    "Náusea com Mounjaro: o que a bula diz",
    "A bula do Mounjaro informa que náusea, vômito e diarreia foram mais frequentes “durante o período de aumento de dose” e diminuíram com o tempo, e orienta aumentar a ingestão de líquidos para evitar desidratação. A bula do Mounjaro não traz orientação de voltar à dose anterior; qualquer ajuste é decisão do médico.",
    "Náusea com Mounjaro segundo a bula brasileira: quando é mais comum e o que a bula orienta.",
    [
      { heading: "Texto da bula", bullets: ["Seção 8: “A incidência de náusea, vômito e diarreia foi maior durante o período de aumento de dose e diminuiu com o tempo.”", "Seção 4: “É importante aumentar a ingestão de líquidos para evitar a desidratação.”"] },
      silent("Mounjaro", "remédios para enjoo, alimentos a evitar ou redução de dose por conta própria"),
      diario,
    ],
    [{ q: "Posso diminuir a dose do Mounjaro se enjoar?", a: "A bula do Mounjaro não traz essa orientação. Fale com seu médico antes de mudar qualquer dose." }],
    [mj, bulario]),
  A("ozempic", "nausea-o-que-fazer",
    "Náusea com Ozempic: o que a bula diz",
    "A bula do Ozempic classifica a náusea como reação muito comum (mais de 1 em 10 pessoas) e diz que “isso geralmente desaparece ao longo do tempo”. Ela pede para beber bastante líquido, porque vômito e diarreia podem causar desidratação.",
    "Náusea com Ozempic segundo a bula brasileira.",
    [
      { heading: "Texto da bula (seção 8)", paragraphs: ["“Sensação de enjoo (náusea) – isso geralmente desaparece ao longo do tempo.”"] },
      { heading: "Hidratação (seção 4)", paragraphs: ["“Esses efeitos colaterais podem causar desidratação (perda de líquidos)”; beba bastante líquido."] },
      silent("Ozempic", "redução de dose por conta própria ou remédios para enjoo"),
      diario,
    ],
    [{ q: "A náusea do Ozempic dura quanto tempo?", a: "A bula diz que geralmente desaparece ao longo do tempo, sem fixar prazo." }],
    [oz, bulario]),

  // ───────── PRISÃO DE VENTRE ─────────
  A("ozempic", "prisao-de-ventre",
    "Ozempic e prisão de ventre: frequência e sinal de alerta na bula",
    "A bula do Ozempic lista “constipação (prisão de ventre)” como reação comum (até 1 em 10 pessoas). Entre os efeitos de frequência desconhecida, cita “obstrução intestinal”.",
    "Prisão de ventre com Ozempic segundo a bula brasileira, e o alerta de obstrução intestinal.",
    [
      { heading: "Frequência (seção 8)", bullets: ["Comum: “Constipação (prisão de ventre)”.", "Desconhecido: “Obstrução intestinal.”"] },
      silent("Ozempic", "laxantes, fibras ou quantidade de água"),
      diario,
    ],
    [{ q: "Prisão de ventre com Ozempic é normal?", a: "A bula lista como reação comum. Dor forte ou parada total de evacuação merecem atendimento." }],
    [oz, bulario]),
  A("wegovy", "prisao-de-ventre",
    "Wegovy e prisão de ventre: o que a bula diz",
    "A bula do Wegovy lista “constipação” como efeito muito comum (mais de 1 em 10 pessoas), junto com náusea, vômito, diarreia e cansaço, e diz que esses efeitos geralmente ocorrem no escalonamento da dose e desaparecem com o tempo.",
    "Prisão de ventre com Wegovy segundo a bula brasileira.",
    [
      { heading: "Frequência (seção 8)", paragraphs: ["Muito comum: constipação. “Estes efeitos geralmente ocorrem durante o escalonamento da dose e desaparecem com o tempo.”"] },
      silent("Wegovy", "laxantes, fibras ou quantidade de água"),
      diario,
    ],
    [{ q: "Constipação é um dos efeitos mais comuns do Wegovy?", a: "Sim: a bula classifica como muito comum (mais de 1 em 10 pessoas)." }],
    [wg, bulario]),

  // ───────── AGULHA E CANETA ─────────
  A("wegovy", "agulha-e-caneta",
    "Agulha do Wegovy: pode reutilizar? O que a bula diz",
    "Não. A bula do Wegovy orienta: “Sempre use uma agulha nova em cada injeção” e “Nunca reutilize suas agulhas, pois isso pode resultar em agulhas entupidas, contaminação, infecção e dosagem imprecisa.” Mantenha a caneta tampada para proteger da luz e não use se tiver congelado.",
    "Reutilização de agulhas, tampa e cuidados com a caneta de Wegovy segundo a bula.",
    [
      { heading: "Texto da bula (instruções de uso)", bullets: ["“Sempre use uma agulha nova em cada injeção.”", "“Nunca reutilize suas agulhas, pois isso pode resultar em agulhas entupidas, contaminação, infecção e dosagem imprecisa.”"] },
      { heading: "Cuidados com a caneta (seção 5)", bullets: ["“mantenha-o tampado para protegê-lo da luz.”", "“Não congelar e não utilizar Wegovy® se tiver sido congelado.”"] },
      { heading: "Dose maior que a indicada (seção 9)", paragraphs: ["“Se você utilizar Wegovy® em uma quantidade maior do que deveria, fale imediatamente com o seu médico.”"] },
    ],
    [{ q: "Apliquei Wegovy duas vezes sem querer. O que faço?", a: "A bula orienta falar imediatamente com o seu médico." }],
    [wg, bulario]),

  // ───────── RETINOPATIA ─────────
  A("ozempic", "retinopatia",
    "Ozempic e retinopatia diabética: o aviso da bula",
    "A bula do Ozempic avisa que, em quem tem doença do olho diabético (retinopatia), “Ozempic® pode levar a um agravamento da sua visão, e isto pode exigir tratamento”. Informe o médico se tem retinopatia.",
    "Retinopatia diabética e Ozempic segundo a bula brasileira.",
    [
      { heading: "Texto da bula (seção 4, “Doença do olho diabético (retinopatia)”)", paragraphs: ["“Ozempic® pode levar a um agravamento da sua visão, e isto pode exigir tratamento.”"] },
      diario,
    ],
    [{ q: "Tenho retinopatia, posso usar Ozempic?", a: "A bula pede atenção e acompanhamento. A decisão é do seu médico." }],
    [oz, bulario]),
  A("wegovy", "retinopatia",
    "Wegovy e retinopatia diabética: quem não deve usar, segundo a bula",
    "A bula do Wegovy diz que o uso não é recomendado se você “tem doença ocular diabética (retinopatia)” e que, em quem usa insulina, “este medicamento pode levar a um agravamento da sua visão”. “Complicações da doença ocular diabética (retinopatia diabética)” aparecem como efeito grave comum.",
    "Retinopatia diabética na bula brasileira do Wegovy: contraindicação e frequência.",
    [
      { heading: "Texto da bula (seções 4 e 8)", bullets: ["Uso não recomendado se você “tem doença ocular diabética (retinopatia)”.", "“Se você tem doença ocular diabética e está usando insulina, este medicamento pode levar a um agravamento da sua visão”.", "Efeito grave comum: “Complicações da doença ocular diabética (retinopatia diabética).”"] },
      diario,
    ],
    [{ q: "Retinopatia impede o uso de Wegovy?", a: "A bula diz que o uso não é recomendado nesse caso. Converse com o médico." }],
    [wg, bulario]),

  // ───────── MEIA-VIDA ─────────
  A("mounjaro", "quanto-tempo-fica-no-corpo",
    "Quanto tempo o Mounjaro fica no corpo? A meia-vida segundo a bula",
    "A bula do Mounjaro cita uma meia-vida de aproximadamente 5 dias. Isso significa que, a cada 5 dias, a quantidade no sangue cai pela metade; é por isso que a aplicação é semanal. O CadaDose não calcula nem mostra “nível do medicamento”: a bula não traz curva para o paciente, e estimativa não é medição.",
    "Meia-vida do Mounjaro segundo a bula brasileira e por que o diário não estima nível no sangue.",
    [
      { heading: "Texto da bula (seção 9)", paragraphs: ["“levando em conta a meia-vida de MOUNJARO (aproximadamente 5 dias)”."] },
      { heading: "Por que não mostramos “nível do medicamento”", paragraphs: ["Alguns apps exibem uma curva estimada de concentração. A bula do paciente não traz esse dado para uso individual, e uma estimativa pode dar falsa segurança em decisões de dose, que são do seu médico."] },
    ],
    [{ q: "Depois de quantos dias o Mounjaro sai do corpo?", a: "A bula informa meia-vida de cerca de 5 dias; não informa quando a eliminação é completa." }],
    [mj, bulario]),

  // ───────── ALERGIA ─────────
  A("ozempic", "alergia",
    "Reação alérgica ao Ozempic: sinais que a bula manda tratar como emergência",
    "A bula do Ozempic lista reações alérgicas graves (reações anafiláticas, angioedema) e os sinais: problemas respiratórios, inchaço do rosto, lábios, língua e/ou garganta com dificuldade para engolir. A orientação é procurar ajuda médica imediatamente.",
    "Sinais de reação alérgica grave ao Ozempic segundo a bula brasileira.",
    [
      { heading: "Texto da bula (seção 8, efeitos graves)", bullets: ["“Reações alérgicas graves (reações anafiláticas, angioedema)”.", "“problemas respiratórios, inchaço do rosto, lábios, língua e/ou garganta com dificuldade para engolir”.", "Procure ajuda médica imediatamente."] },
    ],
    [{ q: "Inchaço no rosto depois do Ozempic: o que fazer?", a: "A bula lista como sinal de reação alérgica grave: procure ajuda médica imediatamente." }],
    [oz, bulario]),
  A("mounjaro", "alergia",
    "Reação alérgica ao Mounjaro: urticária, eczema e quando interromper",
    "A bula do Mounjaro lista reação de hipersensibilidade como comum (1% a 10%), com urticária (vergões avermelhados na pele) e eczema como exemplos, e orienta: “interrompa o uso de MOUNJARO e informe ao seu médico.” Reação anafilática e angioedema são raras (0,01% a 0,1%). Alergia à tirzepatida ou a qualquer componente é contraindicação.",
    "Reações de hipersensibilidade ao Mounjaro segundo a bula versão 05/2026: frequência, sinais e o que fazer.",
    [
      { heading: "Texto da bula (seções 3, 4 e 8)", bullets: ["Contraindicação: “Não utilize MOUNJARO caso seja alérgico à tirzepatida” ou a qualquer excipiente.", "Hipersensibilidade: reação comum; exemplos na bula: urticária e eczema. “interrompa o uso de MOUNJARO e informe ao seu médico.”", "Raras: “reação anafilática” e angioedema (dados pós-comercialização)."] },
    ],
    [{ q: "Urticária depois do Mounjaro: continuo aplicando?", a: "A bula orienta interromper o uso e informar o médico." }],
    [mj, bulario]),
];
