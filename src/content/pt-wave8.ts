import type { Article, Section } from "./types";

/** Wave 8: fill the medication × question matrix where the bula gives something to quote. */
const mj = { label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)", url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf" };
const oz = { label: "Bula do paciente Ozempic® 1 mg (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf" };
const wg = { label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf" };
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";
const A = (medicationSlug: string, intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[], sources: { label: string; url: string }[]): Article =>
  ({ medicationSlug, intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources });
const silent = (nome: string, tema: string): Section => ({ heading: "O que a bula não diz", paragraphs: [`A bula do paciente do ${nome} não trata de ${tema}. A referência é o seu médico.`] });
const diario: Section = { heading: "No diário", paragraphs: ["Registre o que sentiu, a intensidade e a dose da semana no CadaDose; o relatório mostra o padrão ao médico."] };

export const ptWave8: Article[] = [
  // Mounjaro
  A("mounjaro", "hipoglicemia", "Mounjaro e hipoglicemia: quando o risco aumenta, segundo a bula",
    "A bula do Mounjaro classifica a hipoglicemia como muito comum (mais de 10%) em pacientes com diabetes tipo 2 que usam insulina basal ou sulfonilureia junto com Mounjaro; comum com metformina + inibidor de SGLT-2; incomum com metformina isolada. A bula orienta informar o médico se você usa secretagogo (como sulfonilureia) ou insulina, para que ele possa ajustar a dose desses medicamentos.",
    "Hipoglicemia com Mounjaro pela bula: frequência por combinação e a orientação de ajuste pelo médico.",
    [
      { heading: "Frequência por combinação (seção 8)", table: { head: ["Com o que", "Frequência na bula"], rows: [["Insulina basal ou sulfonilureia (com ou sem metformina/SGLT-2)", "Muito comum (> 10%)"], ["Metformina + inibidor de SGLT-2", "Comum (1% a 10%)"], ["Metformina isolada", "Incomum (0,1% a 1%)"]] } },
      { heading: "Advertência (seção 4)", paragraphs: ["O risco é maior com secretagogo (por exemplo, sulfonilureia) ou insulina. A bula orienta informar o médico sobre esses medicamentos, para que a dose deles possa ser ajustada."] },
      silent("Mounjaro", "lista de sintomas de hipoglicemia (consulte a bula do seu antidiabético)"),
      diario,
    ],
    [{ q: "Mounjaro sozinho dá hipoglicemia?", a: "A bula lista a hipoglicemia por combinação; o risco alto aparece com insulina ou sulfonilureia." }],
    [mj, bulario]),
  A("mounjaro", "prisao-de-ventre", "Mounjaro e prisão de ventre: frequência na bula",
    "A bula do Mounjaro lista constipação (prisão de ventre) como reação comum (1% a 10%) nos estudos de diabetes tipo 2 e muito comum (mais de 10%) nos estudos de controle do peso, apneia do sono e insuficiência cardíaca (versão 05/2026). Dor abdominal, distensão e flatulência também aparecem como comuns.",
    "Prisão de ventre com Mounjaro segundo a bula brasileira, por tipo de estudo.",
    [{ heading: "Frequência (seção 8)", bullets: ["Diabetes tipo 2: constipação comum (1% a 10%).", "Controle do peso, apneia e insuficiência cardíaca: constipação muito comum (> 10%).", "Também comuns: dispepsia, distensão abdominal, arrotos, flatulência, refluxo."] }, silent("Mounjaro", "laxantes, fibras ou quantidade de água"), diario],
    [{ q: "Prisão de ventre com Mounjaro passa?", a: "A bula diz que náusea, vômito e diarreia foram maiores no aumento de dose e diminuíram com o tempo; não fixa prazo para a constipação. Fale com o médico se persistir." }],
    [mj, bulario]),
  A("mounjaro", "retinopatia", "Mounjaro e retinopatia diabética: o aviso da bula",
    "A bula do Mounjaro alerta para piora temporária da retinopatia diabética com o controle rápido da glicose. Quem tem retinopatia deve informar o médico e manter o acompanhamento oftalmológico.",
    "Retinopatia diabética e Mounjaro segundo a bula brasileira.",
    [{ heading: "Texto da bula (seção 4)", paragraphs: ["A bula registra que o controle rápido da glicose pode causar piora temporária da retinopatia diabética. Informe o médico se tem retinopatia."] }, diario],
    [{ q: "Tenho retinopatia, posso usar Mounjaro?", a: "A bula pede atenção e acompanhamento; a decisão é do médico." }],
    [mj, bulario]),
  A("mounjaro", "agulha-e-caneta", "Caneta de Mounjaro: uso único, descarte e o que a bula orienta",
    "No Brasil a caneta de Mounjaro é de uso único: cada caneta tem uma dose de 0,5 mL e é descartada após a aplicação, em coletor de perfurocortantes. Não existe troca de agulha nem reutilização. Para o frasco-ampola, a bula pede seringa e agulha novas a cada aplicação e proíbe fracionar ou guardar o frasco aberto.",
    "Caneta de uso único e frasco-ampola do Mounjaro: regras de uso e descarte segundo a bula.",
    [{ heading: "Caneta (instruções de uso)", bullets: ["“Cada embalagem contém 4 canetas aplicadoras de 0,5 mL.”", "Cada caneta é uma dose; após a injeção, descarte a caneta inteira em recipiente para perfurocortantes."] }, { heading: "Frasco-ampola", bullets: ["“Sempre use uma seringa e agulha estéril nova para cada aplicação”.", "“Não fracionar (dividir) a dose nem armazenar o frasco após aberto.”"] }, silent("Mounjaro", "caneta que caiu, travou ou vazou (procure o fabricante ou o farmacêutico)")],
    [{ q: "Posso usar a caneta de Mounjaro duas vezes?", a: "Não. No Brasil a caneta é de uso único; cada caneta é uma dose." }],
    [mj, bulario]),

  // Ozempic
  A("ozempic", "queda-de-cabelo", "Ozempic causa queda de cabelo? O que a bula diz (e não diz)",
    "A bula brasileira do Ozempic não menciona queda de cabelo nem alopecia. Para comparar: a bula do Wegovy, com a mesma substância e doses maiores, lista queda de cabelo como efeito comum. Se notar queda, registre e informe o médico.",
    "Queda de cabelo e Ozempic: o que consta e o que não consta na bula.",
    [silent("Ozempic", "queda de cabelo ou alopecia"), { heading: "Para comparar", paragraphs: ["A bula do Wegovy (semaglutida até 2,4 mg) lista queda de cabelo como efeito comum, mais frequente com 7,2 mg. Cada bula vale para o seu produto."] }, diario],
    [{ q: "Ozempic faz cair cabelo?", a: "A bula do Ozempic não lista. A do Wegovy, sim (comum)." }],
    [oz, wg, bulario]),
  A("ozempic", "agulha-e-caneta", "Agulha e caneta do Ozempic: regras da bula (agulha nova, queda, solução turva)",
    "A bula do Ozempic orienta: “Sempre use uma nova agulha para cada injeção.” Se a caneta cair ou houver suspeita de problema, “encaixe uma agulha nova e verifique o fluxo antes de injetar”. “Não utilize este medicamento se a solução não estiver límpida e incolor.” A caneta em uso vale 6 semanas.",
    "Cuidados com a caneta de Ozempic segundo as instruções de uso da bula.",
    [{ heading: "Texto da bula (instruções de uso e seção 5)", bullets: ["“Sempre use uma nova agulha para cada injeção.”", "“Se derrubar ou suspeitar de um problema, encaixe uma agulha nova e verifique o fluxo antes de injetar.”", "“Não utilize este medicamento se a solução não estiver límpida e incolor.”", "Caneta em uso: 6 semanas abaixo de 30 °C ou em geladeira; não congelar."] }],
    [{ q: "A agulha do Ozempic pode ser reutilizada?", a: "Não. A bula orienta agulha nova a cada injeção." }],
    [oz, bulario]),
  A("ozempic", "quantos-quilos", "Ozempic emagrece quantos quilos? O que a bula diz (e não diz)",
    "A bula do Ozempic é de um medicamento para diabetes tipo 2 e não traz quilos nem percentual de perda de peso. Emagrecimento não é a indicação registrada. Para controle de peso com semaglutida, o produto com bula para isso é o Wegovy.",
    "Ozempic e perda de peso: o que consta na bula (indicação) e o que não consta (quilos).",
    [silent("Ozempic", "quilos ou percentual de perda de peso"), { heading: "Indicação (seção 1)", paragraphs: ["Diabetes tipo 2 em adultos, com dieta e exercício. O uso para outra finalidade é decisão exclusiva do médico."] }, diario],
    [{ q: "1 caneta de Ozempic emagrece quantos quilos?", a: "A bula não traz esse número e a indicação registrada é o diabetes tipo 2." }],
    [oz, wg, bulario]),

  // Wegovy
  A("wegovy", "alergia", "Reação alérgica ao Wegovy: sinais que a bula manda tratar como emergência",
    "A bula do Wegovy lista reações alérgicas graves (reações anafiláticas, angioedema) como raras, com sinais como dificuldade respiratória, inchaço, tontura, batimento cardíaco acelerado, sudorese e perda de consciência. A única contraindicação da bula é alergia à semaglutida ou a qualquer componente.",
    "Sinais de reação alérgica grave ao Wegovy segundo a bula, e a contraindicação por alergia.",
    [{ heading: "Texto da bula (seções 3 e 8)", bullets: ["“Não use Wegovy® se você for alérgico à semaglutida ou a qualquer outro componente deste medicamento”.", "Raras: “Reações alérgicas graves (reações anafiláticas, angioedema)”.", "Sinais: dificuldade respiratória, inchaço, tontura, batimento cardíaco acelerado, sudorese, perda de consciência. Procure atendimento imediato."] }],
    [{ q: "Inchaço no rosto depois do Wegovy: o que fazer?", a: "A bula lista como sinal de reação alérgica grave: procure ajuda imediatamente." }],
    [wg, bulario]),
  A("wegovy", "quantos-quilos", "Wegovy emagrece quantos quilos? O único número que a bula traz",
    "A bula do Wegovy não traz quilos nem percentual de perda esperada para adultos. O único marco numérico é para adolescentes: “você só deve continuar usando Wegovy® se tiver perdido pelo menos 5% do seu IMC após 12 semanas” (na dose de manutenção). Promessas de quilos não vêm da bula.",
    "Quanto se perde com Wegovy segundo a bula: o marco de 5% do IMC em adolescentes, e nada mais.",
    [{ heading: "O que a bula diz (seção 6, adolescentes)", paragraphs: ["“você só deve continuar usando Wegovy® se tiver perdido pelo menos 5% do seu IMC após 12 semanas”."] }, silent("Wegovy", "quilos por semana ou por mês em adultos"), diario],
    [{ q: "Wegovy 2,4 mg emagrece quanto por mês?", a: "A bula não traz esse número." }],
    [wg, bulario]),
  A("wegovy", "quanto-tempo-fica-no-corpo", "Quanto tempo o Wegovy fica no corpo? O que a bula diz (e não diz)",
    "A bula do paciente do Wegovy não informa meia-vida nem tempo de eliminação. O que ela diz de prazo: a aplicação é semanal; uma dose esquecida pode ser aplicada em até 5 dias. O CadaDose não estima “nível no sangue”.",
    "Meia-vida do Wegovy: o que consta na bula do paciente e por que o site não estima nível no sangue.",
    [silent("Wegovy", "meia-vida ou tempo até a eliminação completa"), { heading: "Prazos que a bula traz", bullets: ["Aplicação uma vez por semana.", "Dose esquecida: até 5 dias (120 horas) depois do dia programado."] }, { heading: "Por que não mostramos “nível do medicamento”", paragraphs: ["Alguns apps exibem uma curva estimada. A bula do paciente não traz esse dado; uma estimativa pode dar falsa segurança em decisões que são do médico."] }],
    [{ q: "Quanto tempo depois de parar o Wegovy ele sai do corpo?", a: "A bula do paciente não informa. Pergunte ao médico." }],
    [wg, bulario]),
  A("wegovy", "pressao-alta", "Quem tem pressão alta pode tomar Wegovy? O que a bula diz",
    "Pressão alta não é contraindicação na bula do Wegovy; ao contrário, hipertensão aparece na seção de indicação como uma das condições relacionadas ao peso que justificam o uso com IMC a partir de 27. Entre os efeitos, a bula lista “pressão arterial baixa” como incomum e “aumento do batimento cardíaco” como incomum.",
    "Wegovy e pressão alta pela bula: indicação, hipotensão e frequência cardíaca.",
    [{ heading: "Texto da bula", bullets: ["Seção 1: IMC ≥ 27 com condição relacionada ao peso, como “diabetes, hipertensão, níveis anormais de gordura no sangue”.", "Seção 3: a única contraindicação é alergia à semaglutida ou componentes.", "Seção 8: “pressão arterial baixa” (incomum); “aumento do batimento cardíaco” (incomum)."] }, { heading: "Na prática", paragraphs: ["Se você usa remédio para pressão, informe o médico; tonturas e palpitações vão para o diário."] }],
    [{ q: "Wegovy aumenta a pressão?", a: "A bula lista pressão baixa como efeito incomum, não aumento." }],
    [wg, bulario]),
];
