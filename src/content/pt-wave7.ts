import type { Article, Section } from "./types";

/** Wave 7: high-volume questions where the honest answer is mostly "the bula says X and nothing more". */
const mj = { label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)", url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf" };
const oz = { label: "Bula do paciente Ozempic® 1 mg (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf" };
const wg = { label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf" };
const sx = { label: "Bula do paciente Saxenda® (liraglutida), Novo Nordisk — registro ANVISA 1.1766.0032, aprovada em 17/04/2026", url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf" };
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-10-28";
const A = (medicationSlug: string, intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[], sources: { label: string; url: string }[]): Article =>
  ({ medicationSlug, intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources });
const silent = (nome: string, tema: string): Section => ({ heading: "O que a bula não diz", paragraphs: [`A bula do paciente do ${nome} não trata de ${tema}. Quando a bula é omissa, este site não completa com opinião nem com estudos soltos: a referência é o seu médico, que conhece o seu caso.`] });
const diario: Section = { heading: "Como registrar no diário", paragraphs: ["No CadaDose você anota o que observou, com data e dose da semana. Na consulta, o relatório mostra o padrão; o médico decide com dados."] };

const menstr = (slug: string, nome: string, src: { label: string; url: string }) =>
  A(slug, "menstruacao", `${nome} atrasa a menstruação? O que a bula diz (e não diz)`,
    `A bula do paciente do ${nome} não menciona menstruação, ciclo menstrual ou atraso menstrual, nem entre os efeitos listados nem nas advertências. Isso não prova que não aconteça; significa que não consta na bula aprovada. Se o seu ciclo mudou, registre e informe o médico, que pode investigar outras causas, incluindo gravidez (a bula contraindica o uso na gravidez).`,
    `${nome} e menstruação: o que consta e o que não consta na bula brasileira.`,
    [silent(nome, "menstruação, ciclo menstrual ou atraso menstrual"), { heading: "O que consta e pode importar", bullets: ["A bula não recomenda o uso na gravidez: um atraso menstrual merece teste de gravidez e conversa com o médico.", "A bula lista efeitos como náusea, vômito e cansaço; nenhum deles é descrito como relacionado ao ciclo."] }, diario],
    [{ q: `${nome} corta a menstruação?`, a: "A bula não trata do assunto. Informe o médico." }, { q: "Atrasou e estou usando. O que faço?", a: "Faça um teste de gravidez e fale com o médico: a bula não recomenda o uso na gravidez." }], [src, bulario]);

const comer = (slug: string, nome: string, src: { label: string; url: string }, horario: string) =>
  A(slug, "o-que-comer", `O que comer tomando ${nome}: o que a bula diz (quase nada) e o que ela diz sobre refeições`,
    `A bula do ${nome} não traz dieta, cardápio nem lista de alimentos. O que ela diz sobre comida: ${horario} A bula também orienta aumentar a ingestão de líquidos se houver vômito ou diarreia, por causa do risco de desidratação. Plano alimentar é com o médico ou nutricionista.`,
    `${nome} e alimentação: o que consta na bula sobre refeições, e o que fica para o nutricionista.`,
    [{ heading: "O que a bula diz sobre refeições", paragraphs: [horario] }, silent(nome, "dieta, cardápio, alimentos a evitar ou proteína"), { heading: "Hidratação (bula)", paragraphs: ["Náusea, vômito e diarreia podem causar desidratação; a bula pede atenção à ingestão de líquidos, especialmente para quem tem problemas nos rins."] }, diario],
    [{ q: `Preciso aplicar ${nome} em jejum?`, a: "Não. A bula diz que a aplicação independe das refeições." }, { q: `Tem lista de alimentos proibidos com ${nome}?`, a: "Não na bula. Converse com nutricionista ou médico." }], [src, bulario]);

export const ptWave7: Article[] = [
  menstr("mounjaro", "Mounjaro", mj), menstr("ozempic", "Ozempic", oz), menstr("wegovy", "Wegovy", wg),
  comer("mounjaro", "Mounjaro", mj, "“Administrar MOUNJARO em qualquer horário do dia, independente das refeições.”"),
  comer("ozempic", "Ozempic", oz, "“Você pode aplicar a injeção a qualquer hora do dia – independentemente das refeições.”"),
  comer("wegovy", "Wegovy", wg, "“Você pode aplicar o medicamento a qualquer hora do dia - independentemente das refeições.”"),

  A("mounjaro", "anticoncepcional", "Mounjaro corta o efeito do anticoncepcional? A regra das 4 semanas da bula",
    "A bula brasileira do Mounjaro (versão 05/2026) diz que não se sabe ao certo como a tirzepatida afeta a eficácia dos anticoncepcionais orais em mulheres com obesidade ou sobrepeso e, por isso, “recomenda-se o uso de outro método que não seja oral ou acrescentar um método de barreira (como preservativo) no início do tratamento com MOUNJARO (por 4 semanas) e por 4 semanas após cada aumento de dose”. “Contraceptivos hormonais que não são administrados por via oral não devem ser afetados.” Em mulheres com IMC normal, “não é necessário ajuste de dose de contraceptivos orais”.",
    "Mounjaro e anticoncepcional oral: a orientação de 4 semanas da bula brasileira, e o que vale para métodos não orais.",
    [
      { heading: "Texto da bula (seção 4, interações)", bullets: [
        "“Não se sabe ao certo como a tirzepatida pode afetar a eficácia dos anticoncepcionais orais em mulheres com obesidade ou sobrepeso.”",
        "“Como existe a possibilidade da redução da eficácia desses anticoncepcionais, recomenda-se o uso de outro método que não seja oral ou acrescentar um método de barreira (como preservativo) no início do tratamento com MOUNJARO (por 4 semanas) e por 4 semanas após cada aumento de dose.”",
        "“Contraceptivos hormonais que não são administrados por via oral não devem ser afetados.”",
        "“Não é necessário ajuste de dose de contraceptivos orais em mulheres com IMC normal.”",
      ] },
      { heading: "Por que isso acontece, segundo a bula", paragraphs: ["“MOUNJARO atrasa o esvaziamento do estômago e, por isso, tem o potencial de afetar a absorção de medicamentos orais administrados ao mesmo tempo.” A bula pede cautela com medicamentos orais em geral e monitoramento para os de margem estreita (varfarina, digoxina)."] },
      { heading: "Se quiser engravidar", paragraphs: ["“Se você deseja engravidar, MOUNJARO deve ser descontinuado pelo menos 1 mês antes de uma gravidez planejada.” Para controle do peso e apneia, a bula diz que Mounjaro não deve ser utilizado para redução do peso durante a gravidez."] },
      { heading: "Mudança em relação à bula anterior", paragraphs: ["A versão de 21/11/2024 não trazia a regra das 4 semanas; ela entrou com a alteração das seções 4 e 8 (histórico da bula, 24/03/2026). Este site acompanha a versão mais recente."] },
    ],
    [
      { q: "Uso pílula e vou começar Mounjaro. O que a bula orienta?", a: "Método não oral ou barreira (preservativo) nas 4 primeiras semanas e por 4 semanas após cada aumento de dose." },
      { q: "DIU hormonal ou injeção são afetados?", a: "A bula diz que contraceptivos hormonais não orais não devem ser afetados." },
      { q: "Quero engravidar. Quando parar?", a: "Pelo menos 1 mês antes de uma gravidez planejada, segundo a bula; converse com o médico." },
    ],
    [mj, bulario]),

  A("mounjaro", "quantos-quilos", "Mounjaro emagrece quantos quilos? O único número que a bula traz",
    "A bula do paciente do Mounjaro não traz quilos por semana nem por mês. O único marco numérico é este: se não houver perda de pelo menos 5% do peso inicial em 6 meses na maior dose tolerada, o médico decide se continua. Resultados individuais variam; promessas de quilos não vêm da bula.",
    "Quanto se perde com Mounjaro segundo a bula: o marco de 5% em 6 meses, e nada mais.",
    [{ heading: "O que a bula diz (seção 6, controle do peso)", paragraphs: ["Reavaliação após 6 meses na maior dose tolerada: continuar só se houver perda de pelo menos 5% do peso inicial."] }, silent("Mounjaro", "quilos por semana, por mês ou por dose"), { heading: "Por que o diário ajuda", paragraphs: ["Pesar-se sempre no mesmo dia e horário e marcar cada mudança de dose mostra a sua curva real, que é o que o médico usa para decidir."] }],
    [{ q: "Mounjaro 5 mg emagrece quanto?", a: "A bula não traz esse número." }, { q: "Com quanto tempo o Mounjaro começa a fazer efeito?", a: "A bula não fixa prazo; o marco que ela usa é 6 meses na maior dose tolerada." }],
    [mj, bulario]),
  A("saxenda", "quantos-quilos", "Saxenda emagrece quantos quilos? O único número que a bula traz",
    "A bula do Saxenda não traz quilos por semana. O marco é: após 12 semanas na dose de 3,0 mg/dia, se não houver perda de pelo menos 5% do peso inicial, a bula orienta descontinuar o tratamento, por decisão médica.",
    "Quanto se perde com Saxenda segundo a bula: o marco de 5% em 12 semanas a 3,0 mg.",
    [{ heading: "O que a bula diz (seção 6)", paragraphs: ["Descontinuar “após 12 semanas de tratamento na dose de 3,0 mg/dia” se a perda for menor que 5% do peso inicial."] }, silent("Saxenda", "quilos por semana ou por mês")],
    [{ q: "Saxenda emagrece em quanto tempo?", a: "A bula usa o marco de 12 semanas a 3,0 mg/dia para avaliar 5% de perda." }],
    [sx, bulario]),

  A("mounjaro", "frasco-ampola", "Mounjaro em frasco-ampola: o que a bula orienta sobre seringa e conservação",
    "A bula versão 05/2026 registra o Mounjaro em frasco-ampola de dose única (0,5 mL), além da caneta. Orientações da bula: use seringa e agulha estéreis novas a cada aplicação; “Não fracionar (dividir) a dose nem armazenar o frasco após aberto”; o frasco “é preenchido para permitir a administração de uma dose única de 0,5 mL”. Conservação igual à da caneta: geladeira, ou até 21 dias abaixo de 30 °C.",
    "Mounjaro frasco-ampola segundo a bula: dose única, seringa nova, sem fracionar, conservação.",
    [
      { heading: "Texto da bula (apresentação em frasco-ampola)", bullets: ["“O frasco é preenchido para permitir a administração de uma dose única de 0,5 mL de MOUNJARO.”", "“Não fracionar (dividir) a dose nem armazenar o frasco após aberto.”", "“Sempre use uma seringa e agulha estéril nova para cada aplicação”, conforme orientação do profissional de saúde."] },
      { heading: "Conservação (seção 5)", bullets: ["“Armazenar em geladeira de 2°C a 8°C.”", "“MOUNJARO pode ser armazenado fora de refrigeração a temperaturas abaixo de 30°C por até 21 dias.”"] },
      { heading: "O que este site não faz", paragraphs: ["Não convertemos mg em unidades de seringa nem explicamos como aspirar o frasco: isso é orientação do profissional que prescreveu, e envolve a seringa específica que você recebeu."] },
    ],
    [{ q: "Posso dividir o frasco de Mounjaro em duas doses?", a: "Não. A bula diz para não fracionar a dose nem guardar o frasco aberto." }, { q: "O frasco é o mesmo que o manipulado?", a: "Não. O frasco-ampola do Mounjaro é produto registrado da Lilly, com bula; o manipulado é preparado em farmácia, sem bula aprovada." }],
    [mj, bulario]),
];
