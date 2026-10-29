import type { Article, Section } from "./types";

/** Saxenda (liraglutida): daily pen. Every sentence from the patient bula approved 17/04/2026. */
const sx = {
  label: "Bula do paciente Saxenda® (liraglutida), Novo Nordisk — registro ANVISA 1.1766.0032, aprovada em 17/04/2026",
  url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf",
};
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";
const A = (intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[]): Article =>
  ({ medicationSlug: "saxenda", intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources: [sx, bulario] });
const diario: Section = { heading: "No diário", paragraphs: ["Saxenda é diário, não semanal. No CadaDose você marca a aplicação de cada dia, o local (a bula pede para mudar todos os dias) e a data em que a caneta foi aberta: o diário conta as 4 semanas."] };
const silent = (tema: string): Section => ({ heading: "O que a bula não diz", paragraphs: [`A bula do paciente do Saxenda não trata de ${tema}. Quando a bula é omissa, este site não completa com opinião: a referência é o seu médico.`] });

export const ptSaxenda: Article[] = [
  A("para-que-serve", "Para que serve Saxenda (liraglutida): a indicação da bula brasileira",
    "Segundo a bula aprovada em 17/04/2026, Saxenda “é indicado em associação a uma dieta hipocalórica e aumento do exercício físico” para adultos com IMC de 30 kg/m² ou maior (obesidade), ou IMC de 27 kg/m² ou maior com problemas de saúde relacionados ao peso. Adolescentes de 12 a 18 anos com obesidade e mais de 60 kg podem usar conforme prescrição; não deve ser usado em menores de 12 anos.",
    "Indicação oficial do Saxenda no Brasil segundo a bula do paciente, incluindo adolescentes.",
    [
      { heading: "Texto da bula (seção 1)", bullets: ["“é indicado em associação a uma dieta hipocalórica e aumento do exercício físico”", "“IMC de 30 kg/m2 ou maior (obesidade – muito acima do peso)”", "“IMC de 27 kg/m2 ou maior (sobrepeso – acima do peso) e problemas de saúde relacionados ao peso”", "“Saxenda® não deve ser utilizado em crianças com menos de 12 anos de idade”"] },
      { heading: "Quando a bula manda parar", paragraphs: ["Após 12 semanas na dose de 3,0 mg/dia, se não houver perda de pelo menos 5% do peso inicial, a bula orienta descontinuar; a decisão é do médico."] },
      diario,
    ],
    [{ q: "Saxenda é para diabetes?", a: "A bula do Saxenda indica o controle de peso. A liraglutida para diabetes é outro produto (Victoza), com bula própria." }, { q: "Adolescente pode usar Saxenda?", a: "A bula admite de 12 a 18 anos com obesidade e mais de 60 kg, conforme prescrição médica." }]),
  A("tabela-de-dose", "Tabela de doses do Saxenda: a escada semanal da bula, de 0,6 mg a 3,0 mg por dia",
    "A bula do Saxenda aumenta a dose a cada semana: semana 1, 0,6 mg uma vez ao dia; semana 2, 1,2 mg; semana 3, 1,8 mg; semana 4, 2,4 mg; da semana 5 em diante, 3,0 mg por dia. A caneta de 3 mL tem 18 mg e libera 0,6, 1,2, 1,8, 2,4 ou 3,0 mg; a caixa traz 3 canetas. Mudar de dose é decisão do médico.",
    "Escada de doses do Saxenda segundo a bula brasileira, e o que há em cada caneta.",
    [
      { heading: "A escada (seção 6)", table: { head: ["Semana", "Dose diária"], rows: [["1", "0,6 mg"], ["2", "1,2 mg"], ["3", "1,8 mg"], ["4", "2,4 mg"], ["5 em diante", "3,0 mg"]] } },
      { heading: "Quantas doses tem a caneta", paragraphs: ["Cada caneta contém 18 mg (6 mg/mL × 3 mL). O número de dias depende da dose: 30 dias a 0,6 mg, 15 dias a 1,2 mg, 10 dias a 1,8 mg, 7 dias a 2,4 mg, 6 dias a 3,0 mg (conta aritmética sobre os 18 mg da bula). A caneta em uso vale 4 semanas após o primeiro uso."] },
      { heading: "O que este site não faz", paragraphs: ["Não calculamos nem sugerimos a sua dose. Você registra a dose da receita; a escada acima é a da bula."] },
      diario,
    ],
    [{ q: "Posso ficar em 1,8 mg?", a: "A bula descreve a escada até 3,0 mg. Qualquer dose de manutenção diferente é decisão do médico." }, { q: "Quantas canetas por mês a 3,0 mg?", a: "A 3,0 mg/dia cada caneta dura 6 dias (18 mg); a caixa de 3 canetas cobre 18 dias. Confira com o médico e a farmácia." }]),
  A("como-aplicar", "Como aplicar Saxenda: locais, horário e rodízio diário, segundo a bula",
    "Saxenda é aplicado uma vez ao dia, por via subcutânea, “a parte da frente das coxas, a frente da cintura (abdome), ou a parte superior do braço”. A bula orienta: “Mude o local da injeção todos os dias para diminuir o risco de desenvolvimento de caroços.” “Não injete em uma veia ou músculo.” Use agulha nova a cada aplicação.",
    "Locais de aplicação, rodízio diário e horário do Saxenda segundo a bula brasileira.",
    [
      { heading: "Texto da bula (seção 6 e instruções de uso)", bullets: ["“a parte da frente das coxas, a frente da cintura (abdome), ou a parte superior do braço”", "“Mude o local da injeção todos os dias para diminuir o risco de desenvolvimento de caroços.”", "“Não injete em uma veia ou músculo.”"] },
      { heading: "Horário", paragraphs: ["Uma vez ao dia, em qualquer horário, de preferência sempre no mesmo; independentemente das refeições (bula)."] },
      diario,
    ],
    [{ q: "Saxenda é diário ou semanal?", a: "Diário: uma aplicação por dia, segundo a bula." }, { q: "Posso aplicar Saxenda na barriga todo dia?", a: "A bula pede para mudar o local da injeção todos os dias." }]),
  A("esqueci-de-aplicar", "Esqueci de aplicar Saxenda: a regra das 12 horas da bula",
    "A bula do Saxenda diz: “se lembrar dentro de 12 horas de quando você geralmente aplica sua dose”, aplique assim que lembrar; “se houver passado mais de 12 horas”, “não aplique a dose esquecida” e siga com a próxima no horário habitual. “Não aplique uma dose duplicada ou aumentada no dia seguinte.”",
    "O que fazer se esquecer o Saxenda, segundo a bula: janela de 12 horas, sem dose dobrada.",
    [
      { heading: "Texto da bula (seção 6)", bullets: ["“se lembrar dentro de 12 horas de quando você geralmente aplica sua dose” — aplique.", "“se houver passado mais de 12 horas” — “não aplique a dose esquecida”.", "“Não aplique uma dose duplicada ou aumentada no dia seguinte.”"] },
      { heading: "Se ficou vários dias sem aplicar", paragraphs: ["A bula não descreve o reinício após vários dias. Fale com o médico antes de retomar; ele pode querer reiniciar a escada."] },
      diario,
    ],
    [{ q: "Esqueci o Saxenda ontem, aplico duas hoje?", a: "Não. A bula proíbe dose duplicada ou aumentada no dia seguinte." }]),
  A("validade-depois-de-aberta", "Saxenda depois de aberta: 4 semanas, segundo a bula",
    "“Após o primeiro uso, Saxenda® é válido por 4 semanas”, guardado entre 15 °C e 30 °C ou em geladeira (2 °C a 8 °C), sem congelar. Antes do primeiro uso, a caneta fica na geladeira. Não use se tiver congelado.",
    "Validade da caneta de Saxenda em uso e conservação antes do primeiro uso, pela bula.",
    [
      { heading: "Texto da bula (seção 5)", bullets: ["Antes do primeiro uso: “Armazenar em geladeira (de 2 °C a 8 °C).” “Não congelar.”", "“Após o primeiro uso, Saxenda® é válido por 4 semanas”, entre 15 °C e 30 °C ou entre 2 °C e 8 °C."] },
      { heading: "Na prática", paragraphs: ["Anote a data em que abriu a caneta; o diário conta os 28 dias. Uma caneta de 18 mg dura menos de 4 semanas em qualquer dose acima de 0,6 mg, então o limite que costuma valer é o número de doses, não a validade."] },
      diario,
    ],
    [{ q: "Saxenda precisa ficar na geladeira depois de aberto?", a: "Pode ficar entre 15 °C e 30 °C ou na geladeira, por 4 semanas, segundo a bula." }]),
  A("efeitos-colaterais", "Efeitos colaterais do Saxenda: frequências listadas na bula brasileira",
    "Muito comuns na bula do Saxenda: náusea (enjoo), vômito, diarreia, constipação e dor de cabeça. Comuns: hipoglicemia, tontura, insônia, cálculo biliar e aumento de enzimas pancreáticas. Incomuns: desidratação, atraso no esvaziamento do estômago, inflamação da vesícula, pulso acelerado e pancreatite. Raros: função renal reduzida e insuficiência renal aguda. Anafilaxia foi relatada raramente.",
    "Lista de efeitos colaterais do Saxenda por frequência, conforme a bula do paciente.",
    [
      { heading: "Frequências (seção 8)", table: { head: ["Frequência", "Efeitos listados"], rows: [["Muito comum", "náusea, vômito, diarreia, constipação, dor de cabeça"], ["Comum", "hipoglicemia, tontura, insônia, cálculo biliar, aumento de enzimas pancreáticas"], ["Incomum", "desidratação, atraso no esvaziamento gástrico, inflamação da vesícula, pulso acelerado, pancreatite"], ["Raro", "função renal reduzida, insuficiência renal aguda"], ["Desconhecida", "obstrução intestinal, amiloidose cutânea"]] } },
      { heading: "Sinais de pancreatite (seção 4)", paragraphs: ["“dor abdominal (parte superior) intensa e persistente, que pode chegar até as costas”, com náuseas e vômitos: a bula orienta interromper o tratamento e procurar o médico imediatamente."] },
      { heading: "Tireoide", paragraphs: ["“Se você tem doença da tireoide, incluindo nódulos e aumento da glândula tireoide, consulte o seu médico.”"] },
      diario,
    ],
    [{ q: "Saxenda causa queda de cabelo?", a: "A bula do Saxenda não lista queda de cabelo entre os efeitos." }, { q: "Saxenda causa hipoglicemia?", a: "A bula lista hipoglicemia como efeito comum." }]),
  A("gravidez-e-amamentacao", "Saxenda na gravidez e amamentação: o que a bula diz",
    "A bula do Saxenda é direta: “é contraindicado em caso de gravidez” e deve ser descontinuado se houver planejamento de gravidez. Sobre amamentação: “Não amamente se estiver utilizando Saxenda®.”",
    "Gravidez e amamentação na bula brasileira do Saxenda: contraindicação e orientação.",
    [
      { heading: "Texto da bula (seções 3 e 4)", bullets: ["“é contraindicado em caso de gravidez”", "Deve ser descontinuado se houver planejamento de gravidez.", "“Não amamente se estiver utilizando Saxenda®.”"] },
    ],
    [{ q: "Descobri que estou grávida usando Saxenda. E agora?", a: "A bula contraindica o uso na gravidez. Fale com o médico imediatamente." }]),
  A("pode-beber-alcool", "Saxenda e álcool: o que a bula diz (e não diz)",
    "A bula do paciente do Saxenda não menciona álcool. Isso não significa liberado nem proibido: a decisão é do seu médico. O que a bula traz é a lista de efeitos (náusea, vômito, tontura, hipoglicemia) e o alerta de desidratação.",
    "Saxenda e bebida alcoólica: o que consta e o que não consta na bula.",
    [silent("álcool ou bebidas alcoólicas"), { heading: "O que consta e pode importar", bullets: ["Hipoglicemia é efeito comum na bula.", "Desidratação é efeito incomum; náusea e vômito, muito comuns."] }],
    [{ q: "Posso beber cerveja tomando Saxenda?", a: "A bula não trata de álcool. Pergunte ao médico." }]),

  A("melhor-horario", "Qual o melhor horário para aplicar Saxenda? O que a bula diz",
    "A bula do Saxenda pede uma aplicação por dia, em qualquer horário, de preferência sempre no mesmo, independentemente das refeições. Escolha um horário que você consiga manter todos os dias; a bula não indica manhã ou noite.",
    "Horário do Saxenda segundo a bula: uma vez ao dia, sempre no mesmo horário, com ou sem alimentos.",
    [{ heading: "Texto da bula (seção 6)", bullets: ["Uma vez ao dia.", "Em qualquer horário, de preferência sempre no mesmo.", "Independentemente das refeições."] }, { heading: "Se passar do horário", paragraphs: ["Até 12 horas de atraso, aplique; depois disso, pule e não dobre a dose (regra da bula)."] }, diario],
    [{ q: "Saxenda de manhã ou à noite?", a: "A bula não escolhe; pede regularidade no mesmo horário." }]),
  A("quem-nao-pode-tomar", "Quem não pode tomar Saxenda: o que a bula contraindica e onde pede cautela",
    "A bula do Saxenda contraindica o uso na gravidez e orienta não amamentar durante o tratamento. Não deve ser usado em crianças com menos de 12 anos. Quem tem doença da tireoide, incluindo nódulos e aumento da glândula, deve consultar o médico. A bula também lista pancreatite, cálculo biliar, desidratação e insuficiência renal aguda entre os efeitos a observar.",
    "Contraindicações e cautelas do Saxenda segundo a bula brasileira.",
    [{ heading: "Contraindicações e restrições (seções 3 e 4)", bullets: ["“é contraindicado em caso de gravidez”.", "“Não amamente se estiver utilizando Saxenda®.”", "“Saxenda® não deve ser utilizado em crianças com menos de 12 anos de idade”."] }, { heading: "Onde a bula pede cautela", bullets: ["“Se você tem doença da tireoide, incluindo nódulos e aumento da glândula tireoide, consulte o seu médico.”", "Pancreatite: dor abdominal intensa e persistente, que pode ir às costas: interromper e procurar o médico.", "Hipoglicemia é efeito comum; informe o médico se usa outros antidiabéticos."] }],
    [{ q: "Quem tem hipotireoidismo pode usar Saxenda?", a: "A bula pede consulta ao médico para qualquer doença da tireoide." }]),
];
