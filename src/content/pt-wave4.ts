import type { Article } from "./types";

/**
 * Wave 4: the questions people actually type (Semrush BR, Oct 2026), answered strictly
 * from the patient leaflets. When a leaflet is silent on a question, the page says so.
 */
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
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";

const alcoolSection = (nome: string) => ({
  heading: "O que a bula diz, e o que não diz",
  paragraphs: [
    `A bula do paciente do ${nome} não traz nenhuma orientação sobre álcool: a palavra não aparece no texto. Isso não significa que seja liberado ou proibido; significa que a decisão é do seu médico, que conhece seu caso.`,
  ],
});

export const ptWave4: Article[] = [
  // ───────────── MOUNJARO ─────────────
  {
    medicationSlug: "mounjaro",
    intent: "para-que-serve",
    title: "Para que serve Mounjaro (tirzepatida): a indicação da bula brasileira",
    answer:
      "Segundo a bula brasileira aprovada em 21/11/2024, Mounjaro é indicado para melhorar o controle glicêmico de adultos com diabetes mellitus tipo 2, junto com dieta e exercícios. A bula explica que ele aumenta a liberação de insulina, melhora a sensibilidade à insulina, reduz o glucagon e retarda o esvaziamento do estômago. Confira no Bulário da ANVISA se há versão mais recente com outras indicações.",
    description: "Indicação oficial do Mounjaro no Brasil segundo a bula do paciente, e como o medicamento age no corpo.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "A indicação na bula", paragraphs: ["\"Melhorar o controle glicêmico de adultos com diabetes mellitus tipo 2\", em conjunto com dieta e exercícios. É isso que consta na bula do paciente aprovada em 21/11/2024."] },
      {
        heading: "Como o Mounjaro age, segundo a bula",
        bullets: ["Aumenta a liberação de insulina.", "Melhora a sensibilidade à insulina.", "Reduz a concentração de glucagon.", "Retarda o esvaziamento gástrico.", "Resultado descrito: redução da glicose em jejum e após as refeições."],
      },
      { heading: "O que a bula do paciente não traz", paragraphs: ["Números de perda de peso ou de redução de hemoglobina glicada não constam na bula do paciente. Se você usa Mounjaro para emagrecer, siga a prescrição do seu médico e consulte a versão mais recente da bula no Bulário Eletrônico da ANVISA."] },
    ],
    faq: [
      { q: "Mounjaro é para emagrecer?", a: "A bula do paciente aprovada em 21/11/2024 lista como indicação o controle glicêmico no diabetes tipo 2. O uso é definido pelo médico; verifique no Bulário da ANVISA se há versão mais recente." },
      { q: "Mounjaro é insulina?", a: "Não. Segundo a bula, ele aumenta a liberação da sua própria insulina e melhora a sensibilidade a ela, entre outros efeitos." },
      { q: "Mounjaro serve para menores de 18 anos?", a: "A bula diz que segurança e eficácia não foram estabelecidas em menores de 18 anos." },
    ],
    sources: [mounjaroBula, bulario],
  },
  {
    medicationSlug: "mounjaro",
    intent: "quem-nao-pode-tomar",
    title: "Quem não pode tomar Mounjaro: as contraindicações da bula",
    answer:
      "Segundo a bula, Mounjaro não deve ser usado por quem tem alergia à tirzepatida ou a qualquer componente da fórmula, nem por quem tem histórico pessoal ou familiar de carcinoma medular de tireoide ou de neoplasia endócrina múltipla tipo 2 (NEM2). Pessoas com doença gastrointestinal grave não foram estudadas, e menores de 18 anos não têm segurança e eficácia estabelecidas.",
    description: "Contraindicações do Mounjaro segundo a bula brasileira, e os grupos para os quais a bula pede cautela.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Contraindicações listadas", bullets: ["Alergia à tirzepatida ou a componentes da fórmula.", "Histórico pessoal ou familiar de carcinoma medular de tireoide ou de NEM2."] },
      {
        heading: "Situações em que a bula pede atenção",
        bullets: [
          "Doença gastrointestinal grave: o medicamento \"não foi estudado em pacientes com doença gastrointestinal grave\".",
          "Pancreatite: diante de suspeita, interromper e informar o médico; se confirmada, \"MOUNJARO não deverá ser reiniciado\".",
          "Uso com insulina ou sulfonilureia: maior risco de hipoglicemia; o médico pode ajustar as doses.",
          "Doença da vesícula biliar e retinopatia diabética: informe seu médico.",
          "Menores de 18 anos: segurança e eficácia não estabelecidas.",
        ],
      },
    ],
    faq: [
      { q: "Quem tem problema de tireoide pode tomar Mounjaro?", a: "A bula contraindica apenas quem tem histórico pessoal ou familiar de carcinoma medular de tireoide ou NEM2. Outras condições da tireoide devem ser avaliadas pelo médico." },
      { q: "Quem tem gastrite pode tomar Mounjaro?", a: "A bula diz que o medicamento não foi estudado em doença gastrointestinal grave e lista efeitos como refluxo e dispepsia. Converse com seu médico." },
      { q: "Quem tem doença renal pode tomar?", a: "Segundo a bula, não é necessário ajustar a dose na insuficiência renal, mas vômito e diarreia podem desidratar e prejudicar os rins; hidrate-se e informe seu médico." },
    ],
    sources: [mounjaroBula],
  },
  {
    medicationSlug: "mounjaro",
    intent: "gravidez-e-amamentacao",
    title: "Quem amamenta pode tomar Mounjaro? E na gravidez? O que diz a bula",
    answer:
      "Na gravidez, a bula diz que \"MOUNJARO somente deve ser utilizado em gestantes se o benefício potencial para a mãe justificar o risco para o bebê\". Na amamentação, a bula informa que a quantidade no leite materno é \"considerada indetectável a muito baixa\", e que o uso depende de avaliação médica. Em qualquer dos casos, a decisão é do médico.",
    description: "O que a bula brasileira do Mounjaro diz sobre gravidez, amamentação e contraceptivos.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Gravidez", paragraphs: ["\"MOUNJARO somente deve ser utilizado em gestantes se o benefício potencial para a mãe justificar o risco para o bebê.\" Se você está grávida ou planeja engravidar, fale com seu médico antes de usar ou continuar."] },
      { heading: "Amamentação", paragraphs: ["A bula informa que a quantidade de tirzepatida no leite materno é \"considerada indetectável a muito baixa\". O uso durante a amamentação deve ser avaliado pelo médico."] },
      { heading: "Contraceptivos orais", paragraphs: ["A bula não menciona redução da eficácia de contraceptivos orais; ela lista etinilestradiol e norelgestromina entre os medicamentos cuja absorção não é significativamente afetada."] },
    ],
    faq: [
      { q: "Posso usar Mounjaro amamentando?", a: "Só com avaliação do seu médico. A bula descreve a quantidade no leite como indetectável a muito baixa, mas não libera o uso por conta própria." },
      { q: "Mounjaro corta o efeito do anticoncepcional?", a: "A bula não descreve redução da eficácia e cita etinilestradiol e norelgestromina entre os medicamentos não afetados de forma significativa." },
    ],
    sources: [mounjaroBula],
  },
  {
    medicationSlug: "mounjaro",
    intent: "melhor-horario",
    title: "Qual o melhor horário para tomar Mounjaro? O que diz a bula",
    answer:
      "Não existe horário obrigatório. A bula orienta \"administrar MOUNJARO em qualquer horário do dia, independente das refeições\", uma vez por semana. O que importa é manter o mesmo dia da semana; se quiser mudar o dia, respeite pelo menos 3 dias (72 horas) entre as doses.",
    description: "Horário de aplicação do Mounjaro segundo a bula: qualquer hora, com ou sem alimentos, uma vez por semana.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "A regra da bula", bullets: ["Qualquer horário do dia.", "Com ou sem alimentos.", "Uma vez por semana, sempre no mesmo dia.", "Mudança de dia: intervalo mínimo de 72 horas entre as doses."] },
      { heading: "Na prática", paragraphs: ["Escolha um dia e um horário que você consiga manter. O diário CadaDose lembra você no dia e na hora escolhidos e registra cada aplicação."] },
    ],
    faq: [
      { q: "Mounjaro é melhor de manhã ou à noite?", a: "A bula não faz diferença: qualquer horário do dia, independente das refeições." },
      { q: "Preciso aplicar em jejum?", a: "Não. A bula diz que a aplicação independe das refeições." },
    ],
    sources: [mounjaroBula],
  },
  {
    medicationSlug: "mounjaro",
    intent: "pode-beber-alcool",
    title: "Quem toma Mounjaro pode beber álcool? O que a bula diz (e o que não diz)",
    answer:
      "A bula do paciente do Mounjaro não menciona álcool: não há proibição nem liberação no texto. O que a bula traz são avisos que podem pesar nessa decisão: maior risco de hipoglicemia em quem usa insulina ou sulfonilureia, e risco de desidratação com náusea, vômito e diarreia. Pergunte ao seu médico, que conhece seu caso.",
    description: "Mounjaro e álcool: o que consta e o que não consta na bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      alcoolSection("Mounjaro"),
      {
        heading: "Avisos da bula que se relacionam com a pergunta",
        bullets: [
          "Hipoglicemia: muito comum quando Mounjaro é usado com insulina basal ou sulfonilureia.",
          "Desidratação: \"É importante aumentar a ingestão de líquidos para evitar a desidratação\" diante de náusea, vômito ou diarreia.",
          "Pancreatite: dor abdominal intensa e persistente deve levar à interrupção e à consulta médica.",
        ],
      },
    ],
    faq: [
      { q: "Posso tomar cerveja usando Mounjaro?", a: "A bula não trata de álcool. A orientação só pode vir do seu médico, considerando seus outros medicamentos e sua condição." },
      { q: "Álcool corta o efeito do Mounjaro?", a: "A bula não traz essa informação." },
    ],
    sources: [mounjaroBula],
  },
  {
    medicationSlug: "mounjaro",
    intent: "pressao-alta",
    title: "Quem tem pressão alta pode tomar Mounjaro? O que diz a bula",
    answer:
      "Pressão alta não aparece entre as contraindicações da bula do Mounjaro. A bula relata que o tratamento \"resultou em redução na pressão arterial e em aumento na frequência cardíaca\". Quem usa remédios para pressão deve informar o médico, que avalia o conjunto do tratamento.",
    description: "Mounjaro e pressão alta segundo a bula brasileira: contraindicações, efeito na pressão e na frequência cardíaca.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "O que a bula registra", bullets: ["Contraindicações: apenas alergia e histórico de carcinoma medular de tireoide / NEM2.", "Efeito observado: \"redução na pressão arterial e aumento na frequência cardíaca\".", "Entre as reações relatadas: redução da pressão arterial e aumento da frequência cardíaca."] },
      { heading: "Na prática", paragraphs: ["Se você toma anti-hipertensivos, informe seu médico: a bula indica que o Mounjaro pode reduzir a pressão, e o ajuste dos outros remédios é decisão médica. Registre tonturas ou palpitações no diário para mostrar na consulta."] },
    ],
    faq: [
      { q: "Mounjaro aumenta a pressão?", a: "Não segundo a bula, que relata redução da pressão arterial, acompanhada de aumento da frequência cardíaca." },
      { q: "Mounjaro acelera o coração?", a: "A bula relata aumento da frequência cardíaca. Palpitações devem ser informadas ao médico." },
    ],
    sources: [mounjaroBula],
  },
  {
    medicationSlug: "mounjaro",
    intent: "interacoes-com-remedios",
    title: "Mounjaro e outros remédios: as interações descritas na bula",
    answer:
      "Segundo a bula, Mounjaro atrasa o esvaziamento do estômago e pode afetar a absorção de medicamentos orais tomados ao mesmo tempo, mas a bula afirma não esperar impacto significativo sobre atorvastatina, digoxina, metformina, paracetamol, varfarina e outros listados, sem necessidade de ajuste. Com insulina ou sulfonilureia, o risco de hipoglicemia aumenta.",
    description: "Interações medicamentosas do Mounjaro conforme a bula brasileira: medicamentos orais, insulina, sulfonilureia.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "O mecanismo", paragraphs: ["O medicamento retarda o esvaziamento gástrico, o que pode alterar a absorção de remédios tomados por via oral ao mesmo tempo."] },
      { heading: "O que a bula diz não ser afetado de forma significativa", paragraphs: ["Atorvastatina, digoxina, metformina, paracetamol, varfarina, etinilestradiol e norelgestromina, entre outros listados na bula, sem necessidade de ajuste de dose."] },
      { heading: "Atenção com insulina e sulfonilureia", paragraphs: ["Risco aumentado de hipoglicemia. \"Informe ao seu médico se fizer uso de sulfonilureia ou insulina.\" Com insulina, as injeções devem ser separadas e nunca misturadas."] },
    ],
    faq: [
      { q: "Posso tomar Mounjaro com metformina?", a: "A bula lista a metformina entre os medicamentos sem impacto significativo esperado, e descreve a combinação em seus dados de hipoglicemia (menos frequente do que com insulina ou sulfonilureia)." },
      { q: "Mounjaro interfere no anticoagulante?", a: "A bula cita a varfarina entre os medicamentos sem impacto significativo esperado. Siga o acompanhamento do seu médico." },
    ],
    sources: [mounjaroBula],
  },

  // ───────────── OZEMPIC ─────────────
  {
    medicationSlug: "ozempic",
    intent: "para-que-serve",
    title: "Para que serve Ozempic (semaglutida): a indicação da bula brasileira",
    answer:
      "Segundo a bula, Ozempic é indicado \"para tratar pacientes adultos com diabetes tipo 2 não satisfatoriamente controlada\", com dieta e exercícios, e para reduzir o risco de piora dos rins e de morte cardiovascular em adultos com diabetes tipo 2 e doença renal crônica. Perda de peso não é uma indicação na bula: aparece apenas como efeito colateral.",
    description: "Indicação oficial do Ozempic no Brasil, como age, e o que a bula diz (e não diz) sobre emagrecimento.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "As indicações na bula", bullets: ["Diabetes tipo 2 em adultos, com dieta e exercícios.", "Redução do risco de piora da função renal e de morte cardiovascular em adultos com diabetes tipo 2 e doença renal crônica."] },
      { heading: "Como age", paragraphs: ["\"Estimula a secreção de insulina e diminui a secreção de glucagon, somente quando a glicose sanguínea estiver elevada.\""] },
      { heading: "E para emagrecer?", paragraphs: ["Na bula do Ozempic, perda de peso está listada entre os efeitos comuns, não entre as indicações. O medicamento da mesma substância aprovado para controle de peso é o Wegovy. Siga o que seu médico prescreveu."] },
    ],
    faq: [
      { q: "Ozempic é para emagrecer?", a: "Não segundo a bula: a indicação é o diabetes tipo 2. Perda de peso aparece como efeito colateral comum. Wegovy é o produto com semaglutida aprovado para controle de peso." },
      { q: "Ozempic serve para menores de 18 anos?", a: "A bula diz que não é recomendado em crianças e adolescentes com menos de 18 anos." },
    ],
    sources: [ozempicBula1, bulario],
  },
  {
    medicationSlug: "ozempic",
    intent: "quem-nao-pode-tomar",
    title: "Quem não pode tomar Ozempic: as contraindicações da bula",
    answer:
      "A bula contraindica Ozempic para quem é alérgico à semaglutida ou a qualquer componente: \"Não use Ozempic® se você for alérgico à semaglutida ou a qualquer outro componente deste medicamento\". Não deve ser usado na gravidez nem na amamentação, e não é recomendado para menores de 18 anos. Quem tem doença ocular diabética e usa insulina precisa de atenção à visão.",
    description: "Contraindicações e grupos de atenção do Ozempic segundo a bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Contraindicação listada", bullets: ["Alergia à semaglutida ou a qualquer componente do medicamento."] },
      {
        heading: "Situações em que a bula pede atenção ou desaconselha",
        bullets: [
          "Gravidez: não usar; parar pelo menos 2 meses antes de uma gravidez planejada.",
          "Amamentação: \"Não utilize este medicamento se estiver amamentando\".",
          "Menores de 18 anos: não recomendado.",
          "Retinopatia diabética com uso de insulina: \"pode levar a um agravamento da sua visão\".",
          "Problemas renais: vômito e diarreia podem desidratar; nenhum ajuste de dose é necessário, mas hidrate-se e informe o médico.",
          "Uso com sulfonilureia ou insulina: risco maior de hipoglicemia.",
        ],
      },
    ],
    faq: [
      { q: "Quem tem problema nos rins pode tomar Ozempic?", a: "Segundo a bula, \"nenhum ajuste é necessário para pacientes com comprometimento renal leve, moderado ou grave\", mas a desidratação por vômito e diarreia merece atenção especial." },
      { q: "Idoso pode tomar Ozempic?", a: "A bula diz que nenhum ajuste de dose é necessário com base na idade." },
    ],
    sources: [ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "gravidez-e-amamentacao",
    title: "Ozempic na gravidez e na amamentação: o que diz a bula",
    answer:
      "A bula orienta não usar Ozempic na gravidez e \"parar de utilizar este medicamento pelo menos 2 meses antes de uma gravidez planejada\". Durante o tratamento, \"o uso de contraceptivos é recomendado\". Na amamentação, a bula é direta: \"Não utilize este medicamento se estiver amamentando\".",
    description: "O que a bula brasileira do Ozempic diz sobre gravidez, planejamento de gravidez, contraceptivos e amamentação.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Gravidez", bullets: ["Não usar durante a gravidez.", "Parar pelo menos 2 meses antes de uma gravidez planejada.", "Contraceptivos recomendados durante o tratamento."] },
      { heading: "Amamentação", paragraphs: ["\"Não utilize este medicamento se estiver amamentando.\""] },
    ],
    faq: [
      { q: "Descobri que estou grávida usando Ozempic, o que faço?", a: "A bula orienta não usar na gravidez. Procure seu médico imediatamente para orientação." },
      { q: "Quanto tempo antes de engravidar devo parar o Ozempic?", a: "Pelo menos 2 meses antes de uma gravidez planejada, segundo a bula." },
    ],
    sources: [ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "melhor-horario",
    title: "Qual o melhor horário para aplicar Ozempic? O que diz a bula",
    answer:
      "Não há horário obrigatório: a bula permite aplicar Ozempic a qualquer hora do dia, com ou sem alimentos, uma vez por semana. Mantenha o mesmo dia da semana; para mudar o dia, espere pelo menos 3 dias desde a última aplicação.",
    description: "Horário de aplicação do Ozempic segundo a bula: qualquer hora, independente das refeições.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "A regra da bula", bullets: ["Qualquer hora do dia, independentemente das refeições.", "Uma vez por semana, no mesmo dia.", "Mudança de dia: pelo menos 3 dias desde a última aplicação."] },
      { heading: "Na prática", paragraphs: ["Escolha um dia fácil de lembrar. O diário CadaDose avisa no dia e na hora que você definir."] },
    ],
    faq: [
      { q: "Ozempic de manhã ou à noite?", a: "A bula não distingue: qualquer hora do dia." },
      { q: "Preciso estar em jejum?", a: "Não. A aplicação independe das refeições." },
    ],
    sources: [ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "pode-beber-alcool",
    title: "Quem toma Ozempic pode beber álcool? O que a bula diz (e o que não diz)",
    answer:
      "A bula do paciente do Ozempic não menciona álcool. O que ela traz são avisos relacionados: risco de hipoglicemia aumentado com sulfonilureia ou insulina, e risco de desidratação por náusea, vômito e diarreia. A orientação sobre bebida é do seu médico.",
    description: "Ozempic e álcool: o que consta e o que não consta na bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      alcoolSection("Ozempic"),
      { heading: "Avisos da bula que se relacionam com a pergunta", bullets: ["Hipoglicemia: a combinação com sulfonilureia ou insulina \"pode aumentar o risco\".", "Desidratação: náusea, vômito e diarreia \"podem causar desidratação\"; beba bastante líquido.", "Pancreatite: dor abdominal grave e contínua exige atendimento imediato."] },
    ],
    faq: [{ q: "Álcool corta o efeito do Ozempic?", a: "A bula não traz essa informação. Pergunte ao seu médico." }],
    sources: [ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "interacoes-com-remedios",
    title: "Ozempic e outros remédios: as interações descritas na bula",
    answer:
      "Segundo a bula, quem usa varfarina ou outro anticoagulante oral pode precisar de exames de sangue frequentes para checar a coagulação. Com sulfonilureia ou insulina, o risco de hipoglicemia aumenta. A bula também lista hipoglicemia como efeito comum com outros antidiabéticos orais.",
    description: "Interações medicamentosas do Ozempic conforme a bula brasileira: varfarina, insulina, sulfonilureia, outros antidiabéticos.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "O que a bula destaca", bullets: ["Varfarina e anticoagulantes orais: \"Pode ser necessário fazer exames de sangue frequentes\".", "Sulfonilureia ou insulina: risco maior de hipoglicemia; sinais: suor frio, tremor, confusão.", "Outros antidiabéticos orais: hipoglicemia listada como efeito comum."] },
      { heading: "Na prática", paragraphs: ["Leve ao médico a lista de tudo o que você toma. O relatório do CadaDose ajuda a organizar as datas e os sintomas."] },
    ],
    faq: [{ q: "Posso tomar Ozempic com metformina?", a: "A bula trata da combinação ao listar hipoglicemia como efeito comum com antidiabéticos orais que não sejam sulfonilureia ou insulina. A decisão é do médico." }],
    sources: [ozempicBula1],
  },

  // ───────────── WEGOVY ─────────────
  {
    medicationSlug: "wegovy",
    intent: "para-que-serve",
    title: "Para que serve Wegovy (semaglutida): a indicação da bula brasileira",
    answer:
      "Segundo a bula, Wegovy é indicado para controle de peso em adultos com IMC igual ou maior que 30, ou IMC entre 27 e 30 com alguma condição relacionada ao peso (como diabetes ou hipertensão); em adolescentes a partir de 12 anos com obesidade e peso acima de 60 kg; para tratar MASH (doença hepática) com fibrose moderada a avançada sem cirrose; e para reduzir risco cardiovascular em adultos com doença cardíaca estabelecida e IMC igual ou maior que 27.",
    description: "Indicações oficiais do Wegovy no Brasil segundo a bula do paciente, e como o medicamento age.",
    updated: U,
    reviewed: false,
    sections: [
      {
        heading: "As indicações na bula",
        bullets: [
          "Controle de peso: adultos com IMC ≥ 30 kg/m², ou IMC de 27 a menos de 30 com condição relacionada ao peso.",
          "Adolescentes a partir de 12 anos com obesidade e peso acima de 60 kg.",
          "MASH (doença hepática esteatótica associada a disfunção metabólica) com fibrose moderada a avançada, sem cirrose, em adultos.",
          "Redução de risco cardiovascular em adultos com doença cardíaca estabelecida e IMC ≥ 27.",
        ],
      },
      { heading: "Como age", paragraphs: ["A bula descreve o Wegovy como semelhante a \"um hormônio natural denominado peptídeo semelhante ao glucagon-1 (GLP-1)\", que reduz o apetite. No fígado, reduz gordura, inflamação e cicatrização."] },
      { heading: "Resultados numéricos", paragraphs: ["A bula do paciente não traz percentuais médios de perda de peso. Esses dados estão nos estudos clínicos e na bula do profissional de saúde; pergunte ao seu médico o que esperar no seu caso."] },
    ],
    faq: [
      { q: "Wegovy e Ozempic são iguais?", a: "Têm a mesma substância (semaglutida), mas indicações e doses diferentes: Wegovy é aprovado para controle de peso (até 2,4 mg); Ozempic, para diabetes tipo 2 (até 1 mg na bula brasileira)." },
      { q: "Adolescente pode usar Wegovy?", a: "A partir de 12 anos, com obesidade e peso acima de 60 kg, segundo a bula. Abaixo de 12 anos, não é recomendado." },
    ],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "quem-nao-pode-tomar",
    title: "Quem não pode tomar Wegovy: as contraindicações da bula",
    answer:
      "A bula contraindica Wegovy para quem é alérgico à semaglutida ou a qualquer componente. Não deve ser usado na gravidez nem na amamentação, não é recomendado para quem \"tem a função dos rins gravemente reduzida\", nem para menores de 12 anos, e não deve ser combinado com outros agonistas de GLP-1, como Ozempic ou Rybelsus.",
    description: "Contraindicações e grupos de atenção do Wegovy segundo a bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Contraindicação listada", bullets: ["\"Não use Wegovy® se você for alérgico à semaglutida ou a qualquer outro componente deste medicamento.\""] },
      {
        heading: "Uso não recomendado ou com atenção, segundo a bula",
        bullets: [
          "Gravidez: \"Wegovy® não deve ser usado durante a gravidez\"; parar pelo menos dois meses antes de engravidar.",
          "Amamentação: não usar.",
          "Função dos rins gravemente reduzida: uso não recomendado.",
          "Menores de 12 anos: segurança e eficácia \"não foram estudadas e não é recomendado para uso nesta população\".",
          "Outros agonistas de GLP-1 (Ozempic®, Rybelsus®): não combinar, pelo risco de superdose e reações adversas.",
          "Sulfonilureia ou insulina: maior risco de hipoglicemia.",
        ],
      },
    ],
    faq: [
      { q: "Posso usar Wegovy e Ozempic juntos?", a: "Não. A bula orienta não combinar Wegovy com outros agonistas de GLP-1, como Ozempic ou Rybelsus." },
      { q: "Quem tem problema nos rins pode tomar Wegovy?", a: "A bula não recomenda o uso em quem tem a função dos rins gravemente reduzida e alerta para a desidratação por vômito e diarreia." },
    ],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "gravidez-e-amamentacao",
    title: "Wegovy na gravidez e na amamentação: o que diz a bula",
    answer:
      "\"Wegovy® não deve ser usado durante a gravidez.\" Quem planeja engravidar \"deve interromper o uso de Wegovy® pelo menos dois meses antes\", e a bula recomenda contraceptivos durante o tratamento. Na amamentação, não deve ser usado, porque não se sabe se passa para o leite materno.",
    description: "O que a bula brasileira do Wegovy diz sobre gravidez, planejamento, contraceptivos e amamentação.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "Gravidez", bullets: ["Não usar durante a gravidez.", "Interromper pelo menos dois meses antes de uma gravidez planejada.", "Contraceptivos recomendados durante o tratamento."] },
      { heading: "Amamentação", paragraphs: ["Não usar: a bula informa que não se sabe se o medicamento passa para o leite materno."] },
    ],
    faq: [{ q: "Quanto tempo antes de engravidar devo parar o Wegovy?", a: "Pelo menos dois meses antes, segundo a bula." }],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "melhor-horario",
    title: "Qual o melhor horário para aplicar Wegovy? O que diz a bula",
    answer:
      "Não há horário obrigatório: \"Você pode aplicar o medicamento a qualquer hora do dia - independentemente das refeições\". Uma vez por semana, sempre no mesmo dia; para mudar o dia, \"desde que tenham se passado pelo menos 3 dias desde a última injeção\".",
    description: "Horário de aplicação do Wegovy segundo a bula: qualquer hora, com ou sem refeições.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "A regra da bula", bullets: ["Qualquer hora do dia, independentemente das refeições.", "Uma vez por semana, no mesmo dia.", "Mudança de dia: pelo menos 3 dias desde a última injeção."] },
      { heading: "Na prática", paragraphs: ["Escolha um dia fixo. O diário CadaDose lembra você e registra cada aplicação."] },
    ],
    faq: [{ q: "Wegovy de manhã ou à noite?", a: "A bula não distingue: qualquer hora do dia." }],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "pode-beber-alcool",
    title: "Quem toma Wegovy pode beber álcool? O que a bula diz (e o que não diz)",
    answer:
      "A bula do paciente do Wegovy não menciona álcool. Os avisos relacionados são o risco de hipoglicemia com sulfonilureia ou insulina e o risco de desidratação por náusea, vômito e diarreia, especialmente em quem tem problemas nos rins. A orientação sobre bebida é do seu médico.",
    description: "Wegovy e álcool: o que consta e o que não consta na bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      alcoolSection("Wegovy"),
      { heading: "Avisos da bula que se relacionam com a pergunta", bullets: ["Hipoglicemia com sulfonilureia ou insulina.", "Desidratação por náusea, vômito ou diarreia, \"especialmente importante se você tem problemas nos rins\".", "Pancreatite: dor intensa e contínua no abdome exige consulta imediata."] },
    ],
    faq: [{ q: "Álcool atrapalha o Wegovy?", a: "A bula não traz essa informação. Pergunte ao seu médico." }],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "interacoes-com-remedios",
    title: "Wegovy e outros remédios: as interações descritas na bula",
    answer:
      "Segundo a bula, quem usa varfarina ou anticoagulantes orais pode precisar de exames de sangue frequentes; com sulfonilureia ou insulina, o risco de hipoglicemia aumenta; e Wegovy não deve ser combinado com outros agonistas de GLP-1, como Ozempic ou Rybelsus, pelo risco de superdose e reações adversas.",
    description: "Interações medicamentosas do Wegovy conforme a bula brasileira.",
    updated: U,
    reviewed: false,
    sections: [
      { heading: "O que a bula destaca", bullets: ["Varfarina e anticoagulantes orais: exames de sangue frequentes podem ser necessários.", "Sulfonilureia ou insulina: maior risco de hipoglicemia.", "Outros agonistas de GLP-1 (Ozempic®, Rybelsus®): não combinar."] },
      { heading: "Na prática", paragraphs: ["Informe ao médico todos os seus medicamentos, inclusive os de uso contínuo. O relatório do CadaDose ajuda a organizar as datas e os sintomas."] },
    ],
    faq: [{ q: "Posso trocar de Ozempic para Wegovy?", a: "Só com orientação médica. A bula do Wegovy proíbe o uso simultâneo com outros agonistas de GLP-1." }],
    sources: [wegovyBula],
  },
];
