import type { Article, Section } from "./types";

/**
 * Ozivy (semaglutida sintética, EMS). Every sentence from the patient bula approved by ANVISA on 26/05/2026
 * (bula-pac-813190-EMS, registro 1.0235.1473). Indication: type 2 diabetes only.
 */
const oz = {
  label: "Bula do paciente OZIVY® (semaglutida 1,34 mg/mL), EMS S/A — registro ANVISA 1.0235.1473, aprovada pela Anvisa em 26/05/2026 (bula-pac-813190-EMS)",
  url: "https://bulas-ecommerce.s3.sa-east-1.amazonaws.com/ozivy.bula_46739bbe-50f9-47dc-b126-4c1de23c1699.pdf",
};
const anvisa = { label: "ANVISA — Anvisa approves the first synthetic semaglutide pen for diabetes (Ozivy), notícia oficial de 27/05/2026", url: "https://www.gov.br/anvisa/en/updates/anvisa-approves-the-first-synthetic-semaglutide-pen-for-diabetes-an-analog-product-of-ozempic" };
const bulario = { label: "Bulário Eletrônico — ANVISA (confira a versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const U = "2026-11-07";
const A = (intent: Article["intent"], title: string, answer: string, description: string, sections: Section[], faq: { q: string; a: string }[], extra: { label: string; url: string }[] = []): Article =>
  ({ medicationSlug: "ozivy", intent, title, answer, description, updated: U, reviewed: false, sections, faq, sources: [oz, ...extra, anvisa, bulario] });
const ozempic1 = { label: "Bula do paciente Ozempic® 1 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026 (para a comparação)", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf" };
const diario: Section = { heading: "No diário", paragraphs: ["No CadaDose você registra a dose da sua receita, o dia da aplicação e a data em que abriu a caneta de Ozivy: o diário conta as 8 semanas (56 dias) da bula. Nada é calculado nem sugerido."] };
const guia: Section = { heading: "Sobre o Ozivy", paragraphs: ["Ozivy é a semaglutida sintética da EMS, registrada pela ANVISA em 26/05/2026 para diabetes tipo 2. Tem bula própria: não use regras de outra semaglutida no lugar das do Ozivy."], links: [
  { label: "Ozivy: o que a ANVISA aprovou", href: "/guias/ozivy-semaglutida-ems" },
  { label: "Validade do Ozivy depois de aberto", href: "/medicamentos/ozivy/validade-depois-de-aberta" },
  { label: "Efeitos colaterais do Ozivy", href: "/medicamentos/ozivy/efeitos-colaterais" },
] };

export const ptOzivy: Article[] = [
  A("para-que-serve", "Ozivy: o que é, para que serve e o que diz a bula (semaglutida da EMS)",
    "Segundo a bula aprovada pela ANVISA em 26/05/2026, “OZIVY® contém o princípio ativo semaglutida” e é usado, “em conjunto com dieta e exercícios, para tratar pacientes adultos com diabetes tipo 2 não satisfatoriamente controlada”: sozinho, quando a metformina não pode ser usada, ou junto com outros remédios para diabetes. Emagrecimento não é indicação da bula do Ozivy; perda de peso aparece só na lista de reações comuns.",
    "Indicação do Ozivy (semaglutida, EMS) segundo a bula brasileira: diabetes tipo 2 em adultos, composição e o que não é indicação.",
    [
      { heading: "Texto da bula (seção 1)", bullets: [
        "“OZIVY® é usado, em conjunto com dieta e exercícios, para tratar pacientes adultos com diabetes tipo 2 não satisfatoriamente controlada (nível de açúcar no sangue permanece muito alto).”",
        "“sozinho – se sua glicemia (nível de açúcar no sangue) não for bem controlada somente com dieta e exercícios, e você não puder usar metformina”",
        "“com outros medicamentos para diabetes – quando eles não são suficientes para controlar seus níveis glicêmicos”",
      ] },
      { heading: "Composição (seção “Composição”)", bullets: [
        "Cada mL contém 1,34 mg de semaglutida.",
        "Veículo: “fosfato de sódio dibásico di-hidratado, propilenoglicol, fenol, ácido clorídrico (ajuste de pH), hidróxido de sódio (ajuste de pH) e água para injetáveis.”",
        "“A semaglutida é um agonista do receptor de GLP-1 (peptídeo símile ao glucagon 1 humano) produzido sinteticamente.”",
      ] },
      { heading: "O que não é indicação", paragraphs: ["Emagrecimento. A bula do Ozivy trata só do diabetes tipo 2; “perda de peso” aparece entre as reações comuns da seção 8. A bula também diz que Ozivy “não é uma insulina” e não deve ser usado em diabetes tipo 1. Qualquer uso fora da indicação é decisão exclusiva do médico."] },
      guia,
    ],
    [
      { q: "Ozivy serve para emagrecer?", a: "Não é indicação da bula. O Ozivy foi aprovado para diabetes tipo 2 em adultos; perda de peso consta apenas como reação comum." },
      { q: "Qual o princípio ativo do Ozivy?", a: "Semaglutida, 1,34 mg por mL, produzida sinteticamente (bula, seção “Composição”)." },
      { q: "Ozivy é o mesmo que Ozempic?", a: "Mesma substância e mesma concentração declarada (1,34 mg/mL), mas registro e bula próprios. Algumas regras são diferentes: a validade depois de aberto, por exemplo, é de 8 semanas na geladeira no Ozivy e de 6 semanas na bula do Ozempic." },
    ], [ozempic1]),
  A("tabela-de-dose", "Tabela de doses do Ozivy: 0,25 mg, 0,5 mg e 1 mg, segundo a bula",
    "A bula do Ozivy diz: “a dose inicial é 0,25 mg, uma vez por semana, por quatro semanas”. “Após quatro semanas, seu médico vai aumentar sua dose para 0,5 mg, uma vez por semana.” O médico “pode aumentar sua dose para 1 mg, uma vez por semana”, se a glicemia não estiver bem controlada com 0,5 mg. “Não altere sua dose, a menos que o médico tenha orientado.”",
    "Escada de doses do Ozivy (semaglutida, EMS) pela bula brasileira: 0,25 mg, 0,5 mg e 1 mg por semana, e as canetas de cada dose.",
    [
      { heading: "A escada (seção 6, “Quanto utilizar”)", table: { head: ["Período", "Dose semanal (bula)"], rows: [
        ["Semanas 1 a 4", "0,25 mg (dose inicial)"],
        ["Depois de 4 semanas", "0,5 mg"],
        ["Se a glicemia não estiver bem controlada com 0,5 mg", "1 mg, por decisão do médico"],
      ] } },
      { heading: "As canetas", bullets: [
        "Caneta de 1,5 mL: “libera doses de 0,25 mg e 0,5 mg”.",
        "Caneta de 3 mL: “libera doses de 1 mg”; “Uma caneta aplicadora não utilizada contém: 4 doses de 1 mg”.",
        "A bula avisa: “Não conte os cliques da caneta aplicadora para selecionar sua dose.” Use o contador de dose.",
      ] },
      { heading: "O que este site não faz", paragraphs: ["Não calculamos nem sugerimos a sua dose, nem datas de aumento. A escada acima é a da bula; quem decide cada mudança é o médico. No diário você registra a dose da receita."] },
      guia,
    ],
    [
      { q: "Qual a dose inicial do Ozivy?", a: "0,25 mg uma vez por semana, por quatro semanas (bula, seção 6)." },
      { q: "Qual a dose máxima do Ozivy?", a: "A bula descreve doses até 1 mg uma vez por semana." },
      { q: "Posso contar os cliques para fazer outra dose?", a: "Não. A bula diz: “Não conte os cliques da caneta aplicadora para selecionar sua dose.”" },
    ]),
  A("validade-depois-de-aberta", "Validade do Ozivy depois de aberto: 8 semanas (56 dias) na geladeira, segundo a bula",
    "Depois do primeiro uso, a bula do Ozivy diz: “Você pode manter a caneta aplicadora por 8 semanas (56 dias)”, armazenada em geladeira (2 °C a 8 °C), longe do congelador, sem congelar, na embalagem original e tampada. “Após este período, OZIVY® deve ser descartado mesmo que ainda tenha produto na embalagem.” Antes do primeiro uso, também na geladeira.",
    "Conservação do Ozivy pela bula: 8 semanas (56 dias) depois de aberto, sempre na geladeira, nunca congelado; transporte e viagem de avião.",
    [
      { heading: "Antes de abrir (seção 5)", bullets: ["“Armazenar em geladeira (de 2 °C a 8 °C).”", "“Manter o medicamento distante do compartimento do congelador.”", "“Não congelar.”"] },
      { heading: "Durante o uso", bullets: [
        "“Você pode manter a caneta aplicadora por 8 semanas (56 dias)”, em geladeira (2 °C a 8 °C).",
        "“Não congelar e não utilizar se tiver sido congelado.”",
        "“Manter na embalagem original para proteger da luz.” Tampe a caneta quando não estiver em uso.",
        "“Após aberto, válido por 8 semanas (56 dias).”",
      ] },
      { heading: "Diferente do Ozempic", paragraphs: ["A bula do Ozempic permite manter a caneta em uso por 6 semanas, abaixo de 30 °C ou na geladeira. A bula do Ozivy fala em 8 semanas e manda manter na geladeira também durante o uso; a bula do Ozivy não traz uma regra de temperatura ambiente. Siga a bula do produto que está na sua mão."] },
      { heading: "Transporte e avião", paragraphs: ["A bula pede embalagem com proteção térmica, sem alteração brusca de temperatura, luz direta ou vibração excessiva, e: “No caso de viagens aéreas, não despachar o produto dentro das malas.” O motivo dado é o risco de congelar no compartimento de bagagem."] },
      diario,
    ],
    [
      { q: "Ozivy pode ficar fora da geladeira?", a: "A bula do Ozivy orienta geladeira (2 °C a 8 °C) antes e durante o uso e não traz prazo de temperatura ambiente. A bula também pede para não deixar a caneta no carro ou em local muito quente ou muito frio." },
      { q: "Quanto tempo dura o Ozivy depois de aberto?", a: "8 semanas (56 dias) após o primeiro uso; depois, descarte mesmo que sobre produto." },
      { q: "O Ozivy congelou, posso usar?", a: "Não. A bula diz: “Não congelar e não utilizar se tiver sido congelado.”" },
    ], [ozempic1]),
  A("esqueci-de-aplicar", "Esqueci de aplicar o Ozivy: a regra dos 5 dias da bula",
    "Se você esqueceu uma dose de Ozivy e “não se passaram mais de 5 dias” do dia previsto, “use assim que se lembrar” e injete a próxima dose no dia planejado. Se “se passaram mais de 5 dias”, “pule a dose esquecida” e injete a próxima no dia planejado. “Não tome uma dose extra ou aumente a dose para compensar uma dose esquecida.”",
    "O que fazer quando esquecer uma dose de Ozivy, segundo a bula: até 5 dias, aplicar; mais de 5 dias, pular.",
    [
      { heading: "Texto da bula (seção 7)", bullets: [
        "“não se passaram mais de 5 dias que você deveria ter utilizado OZIVY®, use assim que se lembrar. Injete a próxima dose no dia planejado.”",
        "“se passaram mais de 5 dias que você deveria ter utilizado OZIVY®, pule a dose esquecida. Injete a próxima dose no dia planejado.”",
        "“Não tome uma dose extra ou aumente a dose para compensar uma dose esquecida.”",
      ] },
      { heading: "Trocar o dia da semana", paragraphs: ["A bula permite mudar o dia da injeção semanal “contanto que tenha se passado pelo menos 3 dias desde sua última injeção”. Depois, continue uma vez por semana no novo dia."] },
      diario,
    ],
    [
      { q: "Esqueci o Ozivy há 4 dias, aplico?", a: "Pela bula, se não passaram mais de 5 dias do dia previsto, aplique assim que lembrar e mantenha a próxima no dia planejado." },
      { q: "Posso aplicar duas doses para compensar?", a: "Não. A bula proíbe dose extra ou dose maior para compensar." },
    ]),
  A("efeitos-colaterais", "Efeitos colaterais do Ozivy (semaglutida EMS) segundo a bula",
    "Na bula do Ozivy, as reações muito comuns (mais de 1 em 10 pessoas) são náusea e diarreia (para cada uma, a bula diz: “isso geralmente desaparece ao longo do tempo”) e hipoglicemia quando usado com sulfonilureia ou insulina. Entre as comuns: vômito, indigestão, gastrite, refluxo, dor e inchaço no estômago, prisão de ventre, arrotos, cálculo biliar, tontura, cansaço, perda de peso, perda de apetite, gases e dor de cabeça. Entre as graves: complicações da retinopatia diabética (comum) e pancreatite aguda (incomum).",
    "Lista de efeitos colaterais do Ozivy pela bula brasileira, por frequência, e os sinais que pedem médico.",
    [
      { heading: "Muito comuns (mais de 1 em 10)", bullets: ["Náusea, “isso geralmente desaparece ao longo do tempo”.", "Diarreia, “isso geralmente desaparece ao longo do tempo”.", "Hipoglicemia quando usado com sulfonilureia ou insulina."] },
      { heading: "Comuns (até 1 em 10)", bullets: ["Vômito; indigestão; gastrite; refluxo ou azia; dor e inchaço no estômago; prisão de ventre; arrotos; gases.", "Cálculo biliar.", "Tontura, cansaço, dor de cabeça.", "Perda de peso e perda de apetite.", "Aumento de enzimas pancreáticas (lipase e amilase).", "Hipoglicemia com outros remédios orais para diabetes."] },
      { heading: "Incomuns e raras", bullets: ["Incomuns (até 1 em 100): alteração do gosto, pulso rápido, reações no local da injeção, reações alérgicas na pele, atraso no esvaziamento do estômago.", "Rara (até 1 em 1.000): reação alérgica grave (anafilaxia, angioedema).", "Muito rara (até 1 em 10.000): NOIA não arterítica, que pode causar perda de visão em um olho sem dor.", "Frequência desconhecida: alteração na sensibilidade da pele; obstrução intestinal."] },
      { heading: "Efeitos graves: quando procurar o médico", bullets: [
        "Complicações da retinopatia diabética (comum): “você deve conversar com o seu médico se tiver problemas oculares, como alterações na visão”.",
        "Pancreatite aguda (incomum): dor intensa no estômago e nas costas “que não vai embora”; “procurar um médico imediatamente”.",
        "Reação alérgica grave (rara): dificuldade para respirar, inchaço do rosto, lábios, língua ou garganta: ajuda médica imediata.",
      ] },
      guia,
    ],
    [
      { q: "A náusea do Ozivy passa?", a: "A bula diz que náusea e diarreia “geralmente” desaparecem ao longo do tempo." },
      { q: "Ozivy dá queda de cabelo?", a: "A bula do paciente do Ozivy não lista queda de cabelo entre as reações." },
    ]),
  A("nausea-o-que-fazer", "Náusea com Ozivy: passa com o tempo? Desidratação: o que a bula diz",
    "A bula do Ozivy lista náusea e diarreia como reações muito comuns e diz que “isso geralmente desaparece ao longo do tempo”. Sobre desidratação: “Esses efeitos colaterais podem causar desidratação (perda de líquidos), portanto, é importante que você beba muito líquido para evitá-la. Isso é especialmente importante se você tem problema nos rins.” A bula não traz orientação de voltar à dose anterior.",
    "O que a bula do Ozivy diz sobre náusea, vômito, diarreia e desidratação, e quando procurar o médico.",
    [
      { heading: "Texto da bula (seção 4, “Efeitos no sistema digestivo”)", bullets: [
        "“Durante o tratamento com OZIVY®, você pode apresentar enjoo (náusea) ou vômito e diarreia.”",
        "“Esses efeitos colaterais podem causar desidratação (perda de líquidos), portanto, é importante que você beba muito líquido para evitá-la.”",
        "“Isso é especialmente importante se você tem problema nos rins.”",
      ] },
      { heading: "Quando não é só náusea", paragraphs: ["A bula manda procurar um médico imediatamente se houver dor grave ou contínua no abdômen, que “pode ser um sinal de pancreatite aguda”. Quem tem gastroparesia (estômago que demora a esvaziar) deve conversar com o médico antes de usar: a bula avisa de eventos gastrointestinais graves nesse caso."] },
      { heading: "O que a bula não diz", paragraphs: ["A bula do Ozivy não indica remédio para enjoo nem orienta reduzir a dose por conta própria. Qualquer ajuste é decisão do médico."] },
      diario,
    ],
    [
      { q: "Náusea e diarreia com Ozivy podem levar à desidratação?", a: "Sim, segundo a bula: “podem causar desidratação”; beba muito líquido, especialmente se tiver problema nos rins." },
      { q: "A náusea do Ozivy costuma desaparecer?", a: "A bula diz que náusea e diarreia geralmente desaparecem ao longo do tempo." },
    ]),
  A("retinopatia", "Ozivy e retinopatia diabética: o que a bula diz sobre os olhos",
    "A bula do Ozivy avisa: “Se você tem doença do olho diabético e está usando insulina, OZIVY® pode levar a um agravamento da sua visão, e isto pode exigir tratamento.” Complicações da retinopatia diabética aparecem como efeito grave comum (até 1 em 10). Se a visão piorar de repente, fale imediatamente com o médico: pode ser NOIA não arterítica, efeito muito raro.",
    "Ozivy pode agravar a retinopatia diabética? O que a bula diz sobre visão, insulina e NOIA.",
    [
      { heading: "Texto da bula (seção 4)", bullets: [
        "“Se você tem doença do olho diabético e está usando insulina, OZIVY® pode levar a um agravamento da sua visão, e isto pode exigir tratamento.”",
        "“Você deve informar seu médico em caso de doença do olho diabético (retinopatia) ou se você apresentar problemas oculares durante o tratamento”.",
      ] },
      { heading: "Perda súbita de visão (NOIA)", paragraphs: ["“Se você notar uma deterioração repentina ou rápida da sua visão durante o tratamento com OZIVY®, fale imediatamente com seu médico.” A bula explica que pode ser a neuropatia óptica isquêmica anterior não arterítica, efeito muito raro (até 1 em 10.000), e que o médico pode pedir exame oftalmológico e interromper o tratamento."] },
      guia,
    ],
    [
      { q: "O Ozivy pode agravar a retinopatia diabética?", a: "Sim, segundo a bula, especialmente em quem tem doença do olho diabético e usa insulina. Informe o médico antes e durante o tratamento." },
    ]),
  A("gravidez-e-amamentacao", "Ozivy na gravidez e amamentação: a regra dos 2 meses da bula",
    "A bula do Ozivy diz que ele “não deve ser utilizado durante a gravidez, porque não se sabe se o medicamento pode afetar o feto”, e recomenda contraceptivos durante o tratamento. Quem planeja engravidar “deve parar de utilizar este medicamento pelo menos 2 meses antes de uma gravidez planejada”. Na amamentação: “Não utilize este medicamento se estiver amamentando, pois não se sabe se OZIVY® é excretado no leite.”",
    "Ozivy na gravidez, no planejamento de gravidez e na amamentação, segundo a bula: contraceptivo, parar 2 meses antes, não usar amamentando.",
    [
      { heading: "Texto da bula (seção 4, “Gravidez e Amamentação”)", bullets: [
        "“OZIVY® não deve ser utilizado durante a gravidez, porque não se sabe se o medicamento pode afetar o feto. Portanto, o uso de contraceptivos é recomendado durante o tratamento com OZIVY®.”",
        "“você deve parar de utilizar este medicamento pelo menos 2 meses antes de uma gravidez planejada.”",
        "“Se você engravidar enquanto estiver utilizando OZIVY®, converse com seu médico imediatamente”.",
        "“Não utilize este medicamento se estiver amamentando, pois não se sabe se OZIVY® é excretado no leite.”",
      ] },
      { heading: "Quem decide", paragraphs: ["A troca de tratamento antes de engravidar é feita com o médico. A bula diz ainda que o uso na lactação “depende da avaliação e acompanhamento do seu médico”."] },
      guia,
    ],
    [
      { q: "Quem amamenta pode usar Ozivy?", a: "A bula diz para não utilizar amamentando, porque não se sabe se passa para o leite." },
      { q: "Quanto tempo antes de engravidar devo parar o Ozivy?", a: "Pelo menos 2 meses antes de uma gravidez planejada, conversando com o médico (bula)." },
    ]),
];
