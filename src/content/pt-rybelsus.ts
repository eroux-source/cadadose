import type { Article, Section } from "./types";

/** Rybelsus (semaglutida oral). Every sentence from the patient bula approved 08/09/2026. */
const rb = {
  label: "Bula do paciente Rybelsus® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0037, aprovada em 08/09/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Rybelsus_Bula_PACIENTE.pdf",
};
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";
const A = (intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[]): Article =>
  ({ medicationSlug: "rybelsus", intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources: [rb, bulario] });
const silent = (tema: string): Section => ({ heading: "O que a bula não diz", paragraphs: [`A bula do paciente do Rybelsus não trata de ${tema}. A referência é o seu médico.`] });
const diario: Section = { heading: "No diário", paragraphs: ["Rybelsus é um comprimido por dia, em jejum. No CadaDose você marca a tomada diária e os efeitos; não há caneta nem validade após abrir, só o blíster original."] };

export const ptRybelsus: Article[] = [
  A("para-que-serve", "Para que serve Rybelsus (semaglutida em comprimido): a indicação da bula",
    "Segundo a bula aprovada em 08/09/2026, Rybelsus é indicado para adultos com diabetes tipo 2 quando dieta e exercício não bastam: sozinho, quando a metformina não pode ser usada, ou junto com outros antidiabéticos. Também reduz o risco de eventos cardiovasculares maiores em adultos de alto risco. Perda de peso não é indicação; aparece na bula só como efeito incomum.",
    "Indicação oficial do Rybelsus no Brasil segundo a bula do paciente.",
    [
      { heading: "Texto da bula (seção 1)", bullets: ["Adultos com diabetes tipo 2 quando dieta e exercício não são suficientes.", "Em monoterapia quando a metformina não pode ser usada, ou em combinação com outros antidiabéticos.", "Redução do risco de eventos cardiovasculares maiores em adultos com diabetes tipo 2 e alto risco cardiovascular."] },
      { heading: "O que não é indicação", paragraphs: ["Emagrecimento. A bula lista perda de peso apenas entre os efeitos incomuns. O uso para outra finalidade é decisão exclusiva do médico."] },
      diario,
    ],
    [{ q: "Rybelsus é o Ozempic em comprimido?", a: "É a mesma substância (semaglutida), em comprimido oral diário, com bula e indicação próprias (diabetes tipo 2)." }, { q: "Rybelsus emagrece?", a: "Não é indicação da bula; perda de peso consta como efeito incomum." }]),
  A("como-aplicar", "Como tomar Rybelsus: jejum, água e os 30 minutos da bula",
    "A bula do Rybelsus manda tomar um comprimido por dia com o estômago vazio, em jejum de pelo menos 8 horas, engolido inteiro com até 120 mL de água, e esperar pelo menos 30 minutos antes de comer, beber ou tomar outros remédios por via oral. Não parta, não esmague, não mastigue.",
    "Regras da bula para tomar Rybelsus: jejum, quantidade de água, espera de 30 minutos.",
    [
      { heading: "Texto da bula (seção 6)", bullets: ["“Tome o comprimido de Rybelsus® com estômago vazio”, em jejum de pelo menos 8 horas.", "Engula inteiro, com até 120 mL de água.", "Espere pelo menos 30 minutos antes de comer, beber ou tomar outros medicamentos orais.", "Não parta, esmague nem mastigue o comprimido."] },
      { heading: "Por que a quantidade de água importa", paragraphs: ["A bula fixa o limite de 120 mL e a espera de 30 minutos; são condições de absorção do comprimido. Siga como está escrito."] },
      diario,
    ],
    [{ q: "Posso tomar Rybelsus com café?", a: "A bula pede estômago vazio e só água (até 120 mL); café e outros líquidos, depois dos 30 minutos." }, { q: "Posso tomar Rybelsus à noite?", a: "A bula pede jejum de pelo menos 8 horas e 30 minutos sem comer depois; o horário habitual descrito é a manhã. Combine com o médico." }]),
  A("tabela-de-dose", "Tabela de doses do Rybelsus: 3 mg, 7 mg e 14 mg, segundo a bula",
    "A bula do Rybelsus começa com 3 mg por um mês; depois o médico pode aumentar para 7 mg, mantida por pelo menos um mês; se necessário, 14 mg. “Não tome dois comprimidos para obter uma dose maior.” Caixas com 30 comprimidos de 3, 7 ou 14 mg.",
    "Escada de doses do Rybelsus pela bula brasileira e apresentações.",
    [
      { heading: "A escada (seção 6)", table: { head: ["Período", "Dose diária"], rows: [["Primeiro mês", "3 mg (dose de início)"], ["Depois, por decisão médica", "7 mg, por pelo menos um mês"], ["Se necessário", "14 mg"]] } },
      { heading: "Regra importante", paragraphs: ["“Não tome dois comprimidos para obter uma dose maior.” Cada dose tem o seu comprimido."] },
      { heading: "O que este site não faz", paragraphs: ["Não calculamos nem sugerimos a sua dose. A escada acima é a da bula; a decisão é do médico."] },
    ],
    [{ q: "Posso tomar dois de 7 mg em vez de um de 14 mg?", a: "Não. A bula proíbe tomar dois comprimidos para obter uma dose maior." }]),
  A("esqueci-de-aplicar", "Esqueci de tomar Rybelsus: o que a bula diz",
    "A bula do Rybelsus orienta pular a dose perdida e tomar apenas um comprimido na manhã seguinte, no horário habitual. Não tome dois comprimidos para compensar.",
    "Dose esquecida de Rybelsus segundo a bula.",
    [{ heading: "Texto da bula (seção 6)", bullets: ["Pule a dose perdida.", "Tome apenas um comprimido na manhã seguinte.", "“Não tome dois comprimidos para obter uma dose maior.”"] }, diario],
    [{ q: "Lembrei à tarde que não tomei o Rybelsus. Tomo agora?", a: "A bula orienta pular e tomar um comprimido na manhã seguinte, em jejum." }]),
  A("validade-depois-de-aberta", "Como guardar Rybelsus: temperatura, blíster e umidade, pela bula",
    "Rybelsus fica em temperatura ambiente, entre 15 °C e 30 °C, no blíster original, protegido da luz e da umidade. A bula orienta retirar o comprimido do blíster só na hora de tomar. Não precisa de geladeira.",
    "Conservação do Rybelsus segundo a bula: sem geladeira, no blíster.",
    [{ heading: "Texto da bula (seção 5)", bullets: ["Entre 15 °C e 30 °C.", "No blíster original, protegido da luz e da umidade.", "Retire o comprimido do blíster apenas quando for tomá-lo."] }],
    [{ q: "Rybelsus precisa de geladeira?", a: "Não. A bula indica temperatura ambiente, entre 15 °C e 30 °C." }, { q: "Posso colocar o Rybelsus em um porta-comprimidos?", a: "A bula orienta manter no blíster original até a hora de tomar, por causa da umidade." }]),
  A("efeitos-colaterais", "Efeitos colaterais do Rybelsus: frequências listadas na bula",
    "Muito comuns na bula do Rybelsus: hipoglicemia quando usado com sulfonilureia ou insulina, náusea e diarreia. Comuns: menos apetite, tontura, vômito, dor de estômago, prisão de ventre, refluxo, cansaço, dor de cabeça e complicações da retinopatia diabética. Raros: reações alérgicas graves e pancreatite aguda. Muito raro: neuropatia óptica isquêmica (NOIA), que pode causar perda de visão.",
    "Lista de efeitos colaterais do Rybelsus por frequência, conforme a bula do paciente.",
    [
      { heading: "Frequências (seção 8)", table: { head: ["Frequência", "Efeitos listados"], rows: [["Muito comum", "hipoglicemia (com sulfonilureia ou insulina), náusea, diarreia"], ["Comum", "menos apetite, tontura, vômito, dor de estômago, prisão de ventre, refluxo, cansaço, dor de cabeça, complicações da retinopatia diabética"], ["Raro", "reações alérgicas graves, pancreatite aguda"], ["Muito raro", "neuropatia óptica isquêmica anterior não arterítica (NOIA)"]] } },
      { heading: "Sinais de pancreatite", paragraphs: ["“Dor intensa e contínua na região abdominal”: a bula orienta procurar um médico imediatamente."] },
      { heading: "Tireoide e levotiroxina", bullets: ["Histórico pessoal ou familiar de carcinoma medular de tireoide ou NEM 2: consulte o médico antes de usar.", "Quem usa levotiroxina: o médico pode precisar verificar os níveis dos hormônios da tireoide (interação citada na bula)."] },
      diario,
    ],
    [{ q: "Rybelsus afeta a visão?", a: "A bula lista complicações da retinopatia diabética como efeito comum e a NOIA como muito rara. Alterações de visão: procure o médico." }]),
  A("gravidez-e-amamentacao", "Rybelsus na gravidez e amamentação: o que a bula diz",
    "A bula do Rybelsus diz que não deve ser usado na gravidez e recomenda contracepção durante o tratamento; para engravidar, o medicamento deve ser suspenso “pelo menos dois meses de antecedência”. Sobre amamentação, a bula orienta não usar, porque o medicamento passa para o leite, e remete a decisão ao médico.",
    "Gravidez, contracepção e amamentação na bula brasileira do Rybelsus.",
    [{ heading: "Texto da bula (seção 4)", bullets: ["Não deve ser usado na gravidez; use contracepção durante o tratamento.", "Para engravidar, suspenda “pelo menos dois meses de antecedência”.", "Amamentação: a bula orienta não usar, pois o medicamento passa para o leite, e indica avaliação do médico."] }],
    [{ q: "Quanto tempo antes de engravidar devo parar o Rybelsus?", a: "Pelo menos dois meses, segundo a bula." }]),
  A("pode-beber-alcool", "Rybelsus e álcool: o que a bula diz (e não diz)",
    "A bula do paciente do Rybelsus não menciona álcool. A decisão é do seu médico. O que consta: hipoglicemia é muito comum com sulfonilureia ou insulina; náusea e diarreia são muito comuns.",
    "Rybelsus e bebida alcoólica: o que consta e o que não consta na bula.",
    [silent("álcool"), { heading: "O que consta e pode importar", bullets: ["Hipoglicemia muito comum em combinação com sulfonilureia ou insulina.", "Náusea e diarreia muito comuns."] }],
    [{ q: "Posso beber tomando Rybelsus?", a: "A bula não trata de álcool. Pergunte ao médico." }]),

  A("melhor-horario", "Qual o melhor horário para tomar Rybelsus? O que a bula diz",
    "A bula do Rybelsus exige estômago vazio: jejum de pelo menos 8 horas, o comprimido com até 120 mL de água, e 30 minutos sem comer, beber ou tomar outros remédios orais. Na prática a bula descreve a tomada pela manhã, antes do café. Se esquecer, pule e tome um comprimido na manhã seguinte.",
    "Horário do Rybelsus segundo a bula: em jejum, pela manhã, 30 minutos antes de qualquer coisa.",
    [{ heading: "Texto da bula (seção 6)", bullets: ["Estômago vazio, jejum de pelo menos 8 horas.", "Até 120 mL de água; comprimido inteiro.", "Pelo menos 30 minutos antes de comer, beber ou tomar outros medicamentos orais.", "Dose esquecida: pule e tome um comprimido na manhã seguinte."] }, diario],
    [{ q: "Posso tomar Rybelsus com outros remédios da manhã?", a: "A bula pede 30 minutos de intervalo antes de outros medicamentos orais." }]),
  A("interacoes-com-remedios", "Rybelsus e outros remédios: levotiroxina, insulina e o intervalo de 30 minutos",
    "A bula do Rybelsus pede 30 minutos entre o comprimido e qualquer outro medicamento oral. Cita a levotiroxina: o médico pode precisar verificar os níveis dos hormônios da tireoide. Com sulfonilureia ou insulina, hipoglicemia é muito comum; o médico pode ajustar essas doses.",
    "Interações do Rybelsus segundo a bula: intervalo de 30 minutos, levotiroxina, insulina e sulfonilureia.",
    [{ heading: "Texto da bula (seções 4 e 6)", bullets: ["Espere pelo menos 30 minutos antes de tomar outros medicamentos orais.", "Levotiroxina: o médico pode precisar verificar os níveis dos hormônios da tireoide.", "Sulfonilureia ou insulina: hipoglicemia muito comum; informe o médico."] }, silent("medicamentos específicos além dos citados")],
    [{ q: "Tomo levotiroxina. Posso usar Rybelsus?", a: "A bula cita a interação e pede acompanhamento dos hormônios da tireoide pelo médico." }]),
  A("quem-nao-pode-tomar", "Quem não pode tomar Rybelsus: contraindicações e cautelas da bula",
    "A bula do Rybelsus contraindica o uso em quem é alérgico à semaglutida ou a qualquer componente. Não deve ser usado na gravidez (suspender pelo menos dois meses antes de engravidar) e a bula orienta não usar na amamentação. Histórico pessoal ou familiar de carcinoma medular de tireoide ou NEM 2: consulte o médico. Retinopatia diabética e pancreatite são advertências da bula.",
    "Contraindicações e advertências do Rybelsus segundo a bula brasileira.",
    [{ heading: "Contraindicações e restrições", bullets: ["Alergia à semaglutida ou componentes.", "Gravidez: não usar; suspender pelo menos dois meses antes de engravidar.", "Amamentação: a bula orienta não usar, com avaliação do médico."] }, { heading: "Advertências", bullets: ["Carcinoma medular de tireoide ou NEM 2 (histórico pessoal ou familiar): consulte o médico.", "Complicações da retinopatia diabética: efeito comum.", "Pancreatite aguda: rara; dor intensa e contínua no abdome exige médico imediatamente."] }],
    [{ q: "Rybelsus é contraindicado para quem tem tireoide?", a: "A bula pede consulta ao médico em caso de carcinoma medular de tireoide ou NEM 2; não é contraindicação absoluta no texto." }]),
];
