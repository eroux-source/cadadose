import type { Article, Section } from "./types";

/** Wave 6: per-dose pages (the biggest search clusters: "mounjaro 5 mg" 135k/mo) and "precisa de receita". */
const mj = {
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
  url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
};
const oz = {
  label: "Bula do paciente Ozempic® 1 mg (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
};
const oz025 = {
  label: "Bula do paciente Ozempic® 0,25 mg/0,5 mg, Novo Nordisk — registro ANVISA 1.1766.0036",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_1-5mL_0-25mg_0-5mg_Bula_Paciente.pdf",
};
const wg = {
  label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
};
const cff = {
  label: "CFF — Anvisa estabelece novas regras para prescrição e dispensação de agonistas de GLP-1 (RDC 973/2025 e IN 360/2025), 16/01/2026",
  url: "https://site.cff.org.br/noticia/Noticias-gerais/16/01/2026/anvisa-estabelece-novas-regras-para-prescricao-e-dispensacao-de-medicamentos-agonistas-de-glp-1",
};
const sx = { label: "Bula do paciente Saxenda® (liraglutida), Novo Nordisk — registro ANVISA 1.1766.0032, aprovada em 17/04/2026", url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf" };
const rb = { label: "Bula do paciente Rybelsus® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0037, aprovada em 08/09/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Rybelsus_Bula_PACIENTE.pdf" };
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";

const A = (medicationSlug: string, intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[], sources: { label: string; url: string }[]): Article =>
  ({ medicationSlug, intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources });

const noDose: Section = {
  heading: "O que este site não faz",
  paragraphs: ["Não calculamos nem sugerimos a sua dose. A página reproduz o que a bula diz sobre este passo; quem decide se e quando você muda de dose é o seu médico."],
};
const diario: Section = { heading: "No diário", paragraphs: ["No CadaDose você registra a dose exatamente como está na receita. A curva de peso marca cada mudança de dose, para você e o médico verem o que aconteceu depois."] };

// ───────── MOUNJARO per dose ─────────
const mjSteps: [Article["intent"], string, string, string][] = [
  ["dose-2-5-mg", "2,5 mg", "A dose inicial. “A dose inicial de MOUNJARO é 2,5 mg uma vez por semana.” “Após 4 semanas, a dose deve ser aumentada para 5 mg uma vez por semana.” A bula trata 2,5 mg como dose de início, não de manutenção.", "Dose inicial por 4 semanas; depois a bula indica passar a 5 mg."],
  ["dose-5-mg", "5 mg", "A primeira dose de manutenção. A bula diz que, após 4 semanas em 2,5 mg, “a dose deve ser aumentada para 5 mg uma vez por semana”, e lista 5 mg entre “as doses de manutenção recomendadas” (5, 10 e 15 mg).", "Primeira dose de manutenção segundo a bula; aumentos seguintes de 2,5 mg a cada 4 semanas no mínimo, por decisão médica."],
  ["dose-7-5-mg", "7,5 mg", "Um passo intermediário. A bula permite “aumentos de dose em acréscimos de 2,5 mg após o mínimo de 4 semanas na dose atual”; 7,5 mg é o passo entre 5 e 10 mg. A bula não lista 7,5 mg entre as doses de manutenção recomendadas (5, 10 e 15 mg).", "Passo intermediário de 2,5 mg entre 5 e 10 mg; não está entre as doses de manutenção listadas."],
  ["dose-10-mg", "10 mg", "Dose de manutenção. A bula lista 10 mg entre “as doses de manutenção recomendadas” (5, 10 e 15 mg). Para apneia obstrutiva do sono, a bula cita manutenção em 10 ou 15 mg. Em adolescentes com diabetes tipo 2, 10 mg é a dose máxima.", "Dose de manutenção listada na bula; máxima em adolescentes com diabetes tipo 2."],
  ["dose-12-5-mg", "12,5 mg", "Um passo intermediário entre 10 e 15 mg, permitido pela regra de “acréscimos de 2,5 mg após o mínimo de 4 semanas na dose atual”. Não está entre as doses de manutenção recomendadas listadas na bula (5, 10 e 15 mg).", "Passo intermediário entre 10 e 15 mg."],
  ["dose-15-mg", "15 mg", "A dose máxima. “A dose máxima de MOUNJARO é 15 mg uma vez por semana.” Também é uma das doses de manutenção recomendadas. Em adolescentes com diabetes tipo 2, o máximo é 10 mg.", "Dose máxima em adultos segundo a bula."],
];
const mjDose = mjSteps.map(([intent, mg, answer, short]) =>
  A("mounjaro", intent, `Mounjaro ${mg}: o que a bula diz sobre essa dose`,
    `${answer} Cada caneta de uso único de 0,5 mL contém uma dose; a caixa tem 4 canetas (4 semanas).`,
    `Mounjaro ${mg} segundo a bula brasileira: ${short}`,
    [
      { heading: "A escada de doses na bula (seção 6)", table: { head: ["Dose", "Papel na bula"], rows: [["2,5 mg", "Dose inicial, 4 semanas"], ["5 mg", "Manutenção (após 4 semanas em 2,5 mg)"], ["7,5 mg", "Passo intermediário"], ["10 mg", "Manutenção"], ["12,5 mg", "Passo intermediário"], ["15 mg", "Manutenção e dose máxima"]] } },
      { heading: "Regras de aumento", bullets: ["“Se necessário, aumentos de dose podem ser feitos em acréscimos de 2,5 mg após o mínimo de 4 semanas na dose atual.”", "“A dose máxima de MOUNJARO é 15 mg uma vez por semana.”", "Controle do peso: se não houver perda de pelo menos 5% do peso inicial em 6 meses na maior dose tolerada, o médico decide se continua (bula versão 05/2026)."] },
      { heading: "Apresentação", paragraphs: ["“Cada embalagem contém 4 canetas aplicadoras de 0,5 mL.” A bula versão 05/2026 também registra o frasco-ampola de dose única, para uso com seringa e agulha novas; não fracionar nem guardar o frasco aberto."] },
      { heading: "Esqueci a dose", paragraphs: ["“Se uma dose for esquecida, ela deverá ser administrada assim que possível dentro de 4 dias (96 horas)”; depois disso, pule e aplique a próxima no dia usual."] },
      noDose, diario,
    ],
    [
      { q: `Quanto tempo fico em Mounjaro ${mg}?`, a: "A bula só fixa o tempo da dose inicial (2,5 mg por 4 semanas) e o mínimo de 4 semanas em cada dose antes de aumentar. O tempo em cada dose é decisão do médico." },
      { q: `Mounjaro ${mg} emagrece quanto?`, a: "A bula do paciente não traz número de quilos por dose. Ela cita um marco: pelo menos 5% do peso em 6 meses na maior dose tolerada." },
      { q: "A caneta de Mounjaro tem mais de uma dose?", a: "Não. No Brasil cada caneta de 0,5 mL é uma dose; a caixa traz 4." },
    ], [mj, bulario]));

// ───────── WEGOVY per dose ─────────
const wgSteps: [Article["intent"], string, string][] = [
  ["dose-0-25-mg", "0,25 mg", "Dose de início, semanas 1 a 4."],
  ["dose-0-5-mg", "0,5 mg", "Semanas 5 a 8."],
  ["dose-1-mg", "1 mg", "Semanas 9 a 12."],
  ["dose-1-7-mg", "1,7 mg", "Semanas 13 a 16."],
  ["dose-2-4-mg", "2,4 mg", "Dose de manutenção a partir da semana 17; “depois de atingir a dose recomendada de 2,4 mg, não aumente mais esta dose”."],
];
const wgDose = wgSteps.map(([intent, mg, role]) =>
  A("wegovy", intent, `Wegovy ${mg}: o que a bula diz sobre essa dose`,
    `${role} A bula do Wegovy aumenta a dose a cada 4 semanas até 2,4 mg (dose de manutenção) ou a dose máxima tolerada. Se o enjoo incomodar muito, a bula orienta conversar com o médico sobre adiar o aumento ou voltar à dose anterior. Cada caneta tem 4 doses da mesma concentração.`,
    `Wegovy ${mg} segundo a bula brasileira: ${role}`,
    [
      { heading: "A escada de doses na bula (seção 6)", table: { head: ["Semanas", "Dose semanal"], rows: [["1–4", "0,25 mg"], ["5–8", "0,5 mg"], ["9–12", "1 mg"], ["13–16", "1,7 mg"], ["17 em diante", "2,4 mg (manutenção)"]] } },
      { heading: "O que a bula diz sobre tolerância", bullets: ["“Caso você esteja se sentindo muito incomodado por conta do enjoo (náuseas) ou vômitos, converse com seu médico sobre adiar o aumento da dose ou diminuir para a dose anterior até que os sintomas melhorem.”", "“A dose deve ser aumentada até atingir 2,4 mg (dose de manutenção) ou a dose máxima tolerada.”"] },
      { heading: "Caneta", paragraphs: ["Caneta multidose com 4 doses; a caneta em uso dura 6 semanas abaixo de 30 °C ou em geladeira. Agulha nova a cada aplicação."] },
      noDose, diario,
    ],
    [
      { q: `Posso pular de ${mg} direto para 2,4 mg?`, a: "A bula descreve aumentos a cada 4 semanas, passo a passo. Qualquer mudança é decisão do médico." },
      { q: "Esqueci uma dose do Wegovy, e agora?", a: "A bula orienta aplicar em até 5 dias (120 horas); passado isso, pule e siga o calendário." },
    ], [wg, bulario]));

// ───────── OZEMPIC per dose ─────────
const ozSteps: [Article["intent"], string, string, { label: string; url: string }][] = [
  ["dose-0-25-mg", "0,25 mg", "Dose inicial por 4 semanas; a bula a descreve como dose de adaptação, não de tratamento.", oz025],
  ["dose-0-5-mg", "0,5 mg", "Dose de tratamento a partir da semana 5.", oz025],
  ["dose-1-mg", "1 mg", "Dose máxima na bula brasileira do paciente: após pelo menos 4 semanas em 0,5 mg, o médico pode aumentar para 1 mg.", oz],
];
const ozDose = ozSteps.map(([intent, mg, role, src]) =>
  A("ozempic", intent, `Ozempic ${mg}: o que a bula diz sobre essa dose`,
    `${role} A escada na bula é 0,25 mg (4 semanas) → 0,5 mg → 1 mg, sempre uma vez por semana, por decisão médica. Cada caneta tem 4 doses; a caneta em uso dura 6 semanas.`,
    `Ozempic ${mg} segundo a bula brasileira: ${role}`,
    [
      { heading: "A escada de doses na bula", table: { head: ["Período", "Dose semanal"], rows: [["Semanas 1–4", "0,25 mg (início)"], ["A partir da semana 5", "0,5 mg"], ["Após ≥ 4 semanas em 0,5 mg, se o médico decidir", "1 mg"]] } },
      { heading: "Canetas", paragraphs: ["A caneta de 0,25/0,5 mg (1,5 mL) e a caneta de 1 mg (3 mL) são apresentações diferentes; cada uma entrega 4 doses. Agulha nova a cada aplicação; caneta em uso por até 6 semanas."] },
      noDose, diario,
    ],
    [
      { q: "Ozempic vai além de 1 mg no Brasil?", a: "Na bula brasileira do paciente, 1 mg é a dose máxima descrita." },
      { q: "Esqueci o Ozempic, e agora?", a: "A bula orienta aplicar em até 5 dias; passado isso, pule e siga o calendário." },
    ], [src, oz, bulario]));

// ───────── PRECISA DE RECEITA ─────────
const receita = (slug: string, nome: string, bula: { label: string; url: string }) =>
  A(slug, "precisa-de-receita", `${nome} precisa de receita? O que a regra da ANVISA exige`,
    `Sim. Desde a RDC 973/2025 (com a IN 360/2025), medicamentos à base de semaglutida, liraglutida, dulaglutida, tirzepatida e lixisenatida só são vendidos com receita, e a farmácia retém uma via: “A retenção da receita é obrigatória”. A receita vale 90 dias e a venda é registrada no SNGPC. Isso vale para ${nome}.`,
    `${nome} exige receita médica retida (RDC 973/2025). Validade da receita, via retida e receita digital.`,
    [
      { heading: "O que mudou (RDC 973/2025 e IN 360/2025)", bullets: ["Receita obrigatória em duas vias; a farmácia fica com uma (“A retenção da receita é obrigatória”).", "A receita vale por 90 dias a partir da emissão.", "Compra e venda registradas no SNGPC.", "Receita digital só vale se emitida por sistema integrado ao SNCR.", "A regra alcança semaglutida, liraglutida, dulaglutida, tirzepatida e lixisenatida, isoladas ou em associação."] },
      { heading: "O que a bula diz", paragraphs: [`A bula do ${nome} traz a tarja “Venda sob prescrição médica”. A decisão de iniciar, manter ou mudar a dose é do médico.`] },
      { heading: "O que este site não faz", paragraphs: ["Não vendemos, não indicamos onde comprar e não emitimos receita. Se alguém oferece o medicamento sem receita, é sinal de produto irregular."] },
    ],
    [
      { q: `Dá para comprar ${nome} sem receita?`, a: "Não. Desde a RDC 973/2025 a receita é obrigatória e retida na farmácia." },
      { q: "A receita vale quanto tempo?", a: "90 dias a partir da emissão, segundo a regra citada pelo CFF." },
      { q: "Receita digital serve?", a: "Sim, se emitida por sistema integrado ao SNCR." },
    ], [cff, bula, bulario]);

export const ptWave6: Article[] = [
  ...mjDose, ...wgDose, ...ozDose,
  receita("mounjaro", "Mounjaro", mj), receita("ozempic", "Ozempic", oz), receita("wegovy", "Wegovy", wg), receita("saxenda", "Saxenda", sx), receita("rybelsus", "Rybelsus", rb),
];
