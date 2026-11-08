import type { Guide } from "./guias";

/**
 * Brazilian-market guides: ANVISA approvals of 2026 and the unregistered "canetas do Paraguai".
 * Primary sources where available (gov.br); press articles that quote ANVISA are labelled as such.
 */
const anvisaOzivy = { label: "ANVISA — Anvisa approves the first synthetic semaglutide pen for diabetes (Ozivy), notícia oficial de 27/05/2026", url: "https://www.gov.br/anvisa/en/updates/anvisa-approves-the-first-synthetic-semaglutide-pen-for-diabetes-an-analog-product-of-ozempic" };
const ictq = { label: "ICTQ — EMS recebe aprovação para vender primeira caneta de semaglutida nacional, 26/05/2026 (cita o registro publicado pela ANVISA)", url: "https://ictq.com.br/farmacia-clinica/5190-ems-recebe-aprovacao-para-vender-primeira-caneta-de-semaglutida-nacional" };
const diarioRO = { label: "Diário RO — Anvisa aprova 14 novas canetas para diabetes e obesidade em 2026, 15/09/2026 (notícia; confira cada registro no portal da ANVISA)", url: "https://www.diarioro.com.br/2026/09/15/anvisa-aprova-14-novas-canetas-para-diabetes-e-obesidade-em-2026/" };
const istoe = { label: "IstoÉ — Anvisa proíbe comercialização das canetas Gluconex e Tirzedral (Resolução RE nº 1.519, DOU 15/04/2026), 15/04/2026", url: "https://istoe.com.br/anvisa-proibe-comercializacao-das-canetas-gluconex-e-tirzedral-no-brasil" };
const tnh1 = { label: "TNH1 — Saiba quais são as canetas emagrecedoras sem aval da Anvisa vendidas no Brasil, 22/01/2026 (notícia que cita resoluções da ANVISA)", url: "https://www.tnh1.com.br/noticia/nid/saiba-quais-sao-as-canetas-emagrecedoras-sem-aval-da-anvisa-vendidas-no-brasil-e-seus-riscos-a-saude/" };
const nt200 = { label: "ANVISA — Nota Técnica 200/2025 sobre manipulação de canetas de GLP-1", url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2025/anvisa-esclarece-e-determina-regras-para-manipulacao-de-canetas-de-glp-1/SEI_3775484_Nota_Tecnica_2002.pdf/@@display-file/file" };
const bulario = { label: "Bulário Eletrônico — ANVISA (confira registro e bula)", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const mj = { label: "Bula do paciente Mounjaro® — versão 05/2026 (ampliação de uso aprovada em 22/04/2026)", url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf" };
const anvisaWegovyOral = { label: "ANVISA — Anvisa aprova primeiro medicamento de GLP-1 oral para obesidade (Wegovy em comprimido; Resolução 4.249/2026 no DOU), notícia oficial de 04/11/2026", url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2026/anvisa-aprova-primeiro-medicamento-de-glp-1-oral-para-obesidade" };
const ozivyBula = { label: "Bula do paciente OZIVY® (semaglutida 1,34 mg/mL), EMS S/A — registro ANVISA 1.0235.1473, aprovada pela Anvisa em 26/05/2026 (bula-pac-813190-EMS)", url: "https://bulas-ecommerce.s3.sa-east-1.amazonaws.com/ozivy.bula_46739bbe-50f9-47dc-b126-4c1de23c1699.pdf" };
const rybelsusBula = { label: "Bula do paciente Rybelsus® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0037, aprovada em 08/09/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Rybelsus_Bula_PACIENTE.pdf" };
const cffRdc973 = {
  label: "CFF — Anvisa estabelece novas regras para prescrição e dispensação de agonistas de GLP-1 (RDC 973/2025 e IN 360/2025), 16/01/2026",
  url: "https://site.cff.org.br/noticia/Noticias-gerais/16/01/2026/anvisa-estabelece-novas-regras-para-prescricao-e-dispensacao-de-medicamentos-agonistas-de-glp-1",
};
const U = "2026-10-28";
const U2 = "2026-11-07";

export const guiasMarcas: Guide[] = [
  {
    slug: "ozivy-semaglutida-ems",
    title: "Ozivy (semaglutida da EMS): registro ANVISA, indicação e o que diz a bula",
    answer:
      "Ozivy é a primeira caneta de semaglutida sintética registrada no Brasil, da EMS. A ANVISA publicou o registro em 26/05/2026 (resolução de 25/05/2026) para adultos com diabetes tipo 2 não controlado, junto com dieta e exercícios. Apresentações: solução de 1,34 mg/mL em caneta multidose descartável, de 1,5 mL (doses de 0,25 e 0,5 mg) ou 3 mL (doses de 1 mg), com agulhas. A ANVISA não aprovou o uso para emagrecimento. A bula do paciente (registro 1.0235.1473, aprovada em 26/05/2026) traz regras próprias: 8 semanas na geladeira depois de aberto e 5 dias para a dose esquecida.",
    description: "Ozivy, a semaglutida nacional da EMS: registro ANVISA, indicação aprovada, apresentações e as regras da bula do paciente.",
    updated: U2,
    sections: [
      { heading: "O que a ANVISA publicou", bullets: [
        "Registro publicado em 26/05/2026; a resolução é de 25/05/2026 (notícia oficial da ANVISA).",
        "Indicação: adultos com diabetes mellitus tipo 2 não controlado, com dieta e exercícios; em monoterapia quando a metformina não é adequada, ou junto com outros antidiabéticos.",
        "Apresentações: semaglutida 1,34 mg/mL, sistema de aplicação preenchido, multidose e descartável: 1,5 mL com 1 caneta e 6 agulhas; 3 mL com 2 canetas e 10 agulhas; 1,5 mL com 1 caneta e 4 agulhas; 3 mL com 2 canetas e 8 agulhas.",
        "A ANVISA informou que outros pedidos de semaglutida sintética e um biológico seguiam em análise.",
      ] },
      { heading: "O que não está aprovado", paragraphs: ["A indicação registrada é o diabetes tipo 2. Emagrecimento não consta no registro publicado. A EMS declarou à imprensa que pretende pedir ampliação; até lá, qualquer uso fora da indicação é decisão exclusiva do médico."] },
      { heading: "O que a bula do paciente diz", bullets: [
        "Doses: “a dose inicial é 0,25 mg, uma vez por semana, por quatro semanas”; depois 0,5 mg; o médico pode passar a 1 mg.",
        "Depois de aberto: “Você pode manter a caneta aplicadora por 8 semanas (56 dias)”, na geladeira (2 °C a 8 °C).",
        "Dose esquecida: até 5 dias, aplicar assim que lembrar; mais de 5 dias, pular.",
        "Gravidez: parar “pelo menos 2 meses antes de uma gravidez planejada”; não usar amamentando.",
        "“VENDA SOB PRESCRIÇÃO COM RETENÇÃO DA RECEITA”.",
      ], links: [
        { label: "Para que serve o Ozivy", href: "/medicamentos/ozivy/para-que-serve" },
        { label: "Tabela de doses do Ozivy", href: "/medicamentos/ozivy/tabela-de-dose" },
        { label: "Validade do Ozivy depois de aberto", href: "/medicamentos/ozivy/validade-depois-de-aberta" },
        { label: "Esqueci de aplicar o Ozivy", href: "/medicamentos/ozivy/esqueci-de-aplicar" },
        { label: "Efeitos colaterais do Ozivy", href: "/medicamentos/ozivy/efeitos-colaterais" },
        { label: "Náusea e desidratação com Ozivy", href: "/medicamentos/ozivy/nausea-o-que-fazer" },
        { label: "Ozivy e retinopatia", href: "/medicamentos/ozivy/retinopatia" },
        { label: "Ozivy na gravidez e amamentação", href: "/medicamentos/ozivy/gravidez-e-amamentacao" },
      ] },
      { heading: "Ozivy é o mesmo que Ozempic?", paragraphs: ["Mesma substância (semaglutida) e mesma concentração declarada (1,34 mg/mL), com registro próprio como medicamento novo sintético. Dispositivo e bula são do fabricante, e as regras mudam: a bula do Ozivy fala em 8 semanas na geladeira depois de aberto; a do Ozempic, em 6 semanas. Compare pela bula de cada um, não pela marca."] },
    ],
    faq: [
      { q: "Ozivy serve para emagrecer?", a: "A ANVISA aprovou o Ozivy para diabetes tipo 2 em adultos. Emagrecimento não está no registro publicado em 26/05/2026." },
      { q: "Ozivy precisa de receita?", a: "Sim. Medicamentos à base de semaglutida exigem receita retida (RDC 973/2025)." },
      { q: "Quanto tempo o Ozivy dura depois de aberto?", a: "8 semanas (56 dias), sempre na geladeira, segundo a bula do paciente." },
    ],
    sources: [ozivyBula, anvisaOzivy, ictq, bulario],
  },
  {
    slug: "wegovy-comprimido-semaglutida-oral",
    title: "Wegovy em comprimido: o que a ANVISA aprovou em 04/11/2026 (semaglutida oral para obesidade)",
    answer:
      "Em 04/11/2026 a ANVISA aprovou “o registro da via oral de administração para o medicamento Wegovy (semaglutida)”, o primeiro GLP-1 em comprimido aprovado no Brasil para obesidade (IMC ≥ 30) e sobrepeso (IMC ≥ 27 e < 30 com pelo menos uma comorbidade) em adultos, junto com dieta de baixa caloria e atividade física. Segundo a ANVISA, é um comprimido por dia, “em jejum, com pequena quantidade de água”, esperando pelo menos 30 minutos antes de comer, beber ou tomar outros remédios. A bula do paciente do comprimido ainda não foi publicada: este site não publica, por enquanto, regra de dose esquecida nem de conservação.",
    description: "Wegovy em comprimido no Brasil: data do registro ANVISA (Resolução 4.249/2026), indicação, como tomar segundo a ANVISA e o que ainda falta saber pela bula.",
    updated: U2,
    sections: [
      { heading: "O que a ANVISA publicou (04/11/2026)", bullets: [
        "“A Agência Nacional de Vigilância Sanitária (Anvisa) aprovou, nesta quarta-feira (4/11), o registro da via oral de administração para o medicamento Wegovy (semaglutida).”",
        "Indicação: obesidade (IMC ≥ 30 kg/m²) e sobrepeso (IMC ≥ 27 kg/m² a < 30 kg/m² e pelo menos uma comorbidade relacionada ao peso) em adultos, “como adjuvante a uma dieta de baixa caloria e à prática de atividade física”.",
        "“O medicamento é o primeiro agonista do hormônio glucagon tipo 1 (GLP-1) em formato oral aprovado para uso no país.”",
        "O ato de registro é a Resolução 4.249/2026, publicada no Diário Oficial da União.",
      ] },
      { heading: "Como tomar, segundo a ANVISA", bullets: [
        "“A nova apresentação prevê a administração de comprimidos uma vez ao dia.”",
        "“O medicamento deve ser administrado em jejum, com pequena quantidade de água, aguardando-se pelo menos 30 minutos antes da ingestão de alimentos, bebidas ou outros medicamentos.”",
        "A ANVISA descreve um escalonamento “iniciando com 1,5 mg e avançando para 4 mg e 9 mg, até atingir a dose diária de manutenção recomendada, fixada em 25 mg”. Quem define cada mudança é o médico; este site não calcula nem sugere dose.",
      ] },
      { heading: "Posso tomar o Wegovy em comprimido à noite?", paragraphs: ["A ANVISA fala em tomar “em jejum” e esperar pelo menos 30 minutos antes de comer ou beber; não cita horário. A bula do paciente do comprimido, que ainda não foi publicada, é que dirá. Para comparação, a bula do Rybelsus (outra semaglutida oral, para diabetes) pede jejum de pelo menos 8 horas, até 120 mL de água e 30 minutos de espera. Não troque uma regra pela outra: são produtos com bulas diferentes."], links: [{ label: "Como tomar Rybelsus (bula)", href: "/medicamentos/rybelsus/como-aplicar" }] },
      { heading: "E se eu esquecer um comprimido?", paragraphs: ["A notícia da ANVISA não trata de dose esquecida e a bula do paciente do Wegovy em comprimido ainda não foi publicada. Aqui, a bula não diz ainda: pergunte ao médico ou ao farmacêutico. A regra de 5 dias da bula do Wegovy injetável vale só para a caneta."] },
      { heading: "Wegovy em comprimido, Wegovy injetável e Rybelsus", table: { head: ["", "Wegovy comprimido", "Wegovy injetável", "Rybelsus"], rows: [
        ["Substância", "semaglutida", "semaglutida", "semaglutida"],
        ["Via e frequência", "oral, 1 vez ao dia (ANVISA)", "subcutânea, 1 vez por semana (bula)", "oral, 1 vez ao dia (bula)"],
        ["Indicação", "obesidade e sobrepeso com comorbidade (ANVISA)", "controle do peso e outras (bula)", "diabetes tipo 2 (bula)"],
        ["Doses citadas", "1,5 mg → 4 mg → 9 mg → 25 mg (ANVISA)", "0,25 mg a 2,4 mg (bula)", "3 mg, 7 mg, 14 mg (bula)"],
      ] } },
      { heading: "O que ainda não se sabe", bullets: [
        "Registro não é venda: a data de chegada às farmácias é decisão da empresa. Este site não publica preços nem onde comprar.",
        "Regras de conservação, dose esquecida e efeitos colaterais do comprimido serão publicadas aqui quando a bula do paciente estiver disponível, citada trecho a trecho.",
        "A ANVISA menciona a possibilidade de transição entre as formas oral e injetável “quando clinicamente apropriado, de acordo com as orientações aprovadas em bula”: decisão do médico.",
      ] },
    ],
    faq: [
      { q: "O Wegovy em comprimido foi aprovado no Brasil?", a: "Sim. A ANVISA aprovou a via oral do Wegovy em 04/11/2026 (Resolução 4.249/2026), para obesidade e sobrepeso com comorbidade em adultos." },
      { q: "Wegovy em comprimido precisa de receita?", a: "A notícia da ANVISA não trata do tipo de receita, e a bula do comprimido ainda não foi publicada. A RDC 973/2025 exige receita retida para medicamentos à base de semaglutida, e a ANVISA ainda não detalhou como isso se aplica ao comprimido." },
      { q: "Existem interações do Wegovy em comprimido com outros remédios?", a: "A ANVISA informa que o comprimido deve ser tomado em jejum, “aguardando-se pelo menos 30 minutos antes da ingestão de alimentos, bebidas ou outros medicamentos”. A lista de interações estará na bula do paciente, que ainda não foi publicada; até lá, a bula não diz. Informe ao médico todos os remédios que você usa." },
      { q: "Esqueci de tomar o Wegovy em comprimido. E agora?", a: "A notícia da ANVISA não trata de dose esquecida e a bula do comprimido ainda não foi publicada: a bula não diz ainda. Pergunte ao médico ou ao farmacêutico." },
      { q: "Wegovy em comprimido é o mesmo que Rybelsus?", a: "Mesma substância (semaglutida), mas produtos, doses e indicações diferentes: Rybelsus é para diabetes tipo 2 (3, 7 e 14 mg); o Wegovy em comprimido foi aprovado para obesidade, com dose de manutenção de 25 mg, segundo a ANVISA." },
      { q: "Quanto se perde de peso com o Wegovy em comprimido?", a: "A ANVISA cita o estudo OASIS 4: em 64 semanas, perda média de peso corporal “superior a 13%” com 25 mg. Resultado médio de estudo não é previsão individual." },
    ],
    sources: [anvisaWegovyOral, rybelsusBula, cffRdc973, { label: "Bula do paciente Wegovy® — Novo Nordisk, registro ANVISA 1.1766.0039, aprovada em 04/05/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf" }, bulario],
  },
  {
    slug: "canetas-aprovadas-anvisa-2026",
    title: "Caneta emagrecedora brasileira: as canetas de GLP-1 aprovadas pela ANVISA em 2026 e o que cada registro diz",
    answer:
      "Em 2026 a ANVISA registrou novas canetas de semaglutida, liraglutida e tirzepatida no Brasil: Ozivy (EMS, 26/05), Semavy (Cosmed), Owozy (Ávita Care), Zempneo (Brainfarma), Seemasun (Sun), Orsema (Ranbaxy) em 29/07; semaglutida genérica e Semaclique (Germed) e Yluméc (EMS) em agosto; liraglutida genérica da EMS em 08/09; e a versão multidose do Mounjaro (Lilly) em 18/03. Registro não é venda: cada produto ainda precisa de preço aprovado pela CMED. Esta lista vem de uma reportagem que compila os registros; confira cada um no portal da ANVISA.",
    description: "Lista das canetas de semaglutida, liraglutida e tirzepatida registradas pela ANVISA em 2026, com empresa, indicação e data.",
    updated: U2,
    sections: [
      { heading: "Semaglutida", table: { head: ["Produto", "Empresa", "Indicação informada", "Registro"], rows: [
        ["Ozivy", "EMS", "Diabetes tipo 2 em adultos", "26/05/2026 (ANVISA)"],
        ["Semavy", "Cosmed", "Diabetes tipo 2 em adultos", "29/07/2026"],
        ["Owozy", "Ávita Care", "Diabetes tipo 2 em adultos", "29/07/2026"],
        ["Zempneo", "Brainfarma", "Diabetes tipo 2 em adultos", "29/07/2026"],
        ["Seemasun", "Sun Farmacêutica", "Diabetes tipo 2 em adultos", "29/07/2026"],
        ["Orsema", "Ranbaxy", "Diabetes tipo 2 em adultos", "29/07/2026"],
        ["Semaglutida (genérico)", "EMS", "não informada na reportagem", "17/08/2026"],
        ["Semaclique (similar)", "Germed", "não informada na reportagem", "17/08/2026"],
        ["Semaglutida (genérico)", "Germed", "não informada na reportagem", "24/08/2026"],
        ["Yluméc (similar)", "EMS", "não informada na reportagem", "31/08/2026"],
      ] } },
      { heading: "Liraglutida e tirzepatida", table: { head: ["Produto", "Empresa", "Indicação informada", "Registro"], rows: [
        ["Liraglutida genérica (referência Olire)", "EMS", "Obesidade", "08/09/2026"],
        ["Liraglutida genérica (referência Lirux)", "EMS", "Diabetes tipo 2", "08/09/2026"],
        ["Mounjaro, caneta multidose", "Eli Lilly", "Conforme indicações autorizadas", "18/03/2026"],
      ] } },
      { heading: "O que “registro” significa, e o que não significa", bullets: [
        "Registro na ANVISA permite a comercialização depois que a CMED define o preço máximo; a data de chegada às farmácias é decisão da empresa.",
        "A indicação aprovada é a que consta no registro; para a maioria dos novos produtos, diabetes tipo 2. Emagrecimento só quando o registro disser.",
        "A bula de cada produto é a única fonte para dose, conservação e dose esquecida. Este site só publica essas regras quando tem a bula.",
      ] },
      { heading: "E o Wegovy em comprimido?", paragraphs: ["Não é caneta, mas é o registro de GLP-1 mais recente: em 04/11/2026 a ANVISA aprovou a via oral do Wegovy (semaglutida em comprimido diário) para obesidade e sobrepeso com comorbidade em adultos, pela Resolução 4.249/2026."], links: [{ label: "Wegovy em comprimido: o que a ANVISA aprovou", href: "/guias/wegovy-comprimido-semaglutida-oral" }] },
      { heading: "Sobre a caneta multidose do Mounjaro", paragraphs: ["A reportagem cita a aprovação da versão multidose (caneta reutilizável) em 18/03/2026. A bula do paciente que consultamos (versão 05/2026) descreve a caneta de uso único de 0,5 mL (4 por caixa) e o frasco-ampola de dose única. Confirme pela embalagem e pela bula que acompanha o seu produto."] },
    ],
    faq: [
      { q: "Já existe genérico do Ozempic no Brasil?", a: "A ANVISA registrou semaglutidas genéricas e similares em 2026 (EMS, Germed), segundo a reportagem. A venda depende do preço aprovado pela CMED." },
      { q: "Alguma dessas canetas é aprovada para emagrecer?", a: "Na lista, a indicação de obesidade aparece na liraglutida genérica com referência Olire. As semaglutidas novas foram registradas para diabetes tipo 2." },
      { q: "Como confiro se um produto tem registro?", a: "No portal de consultas da ANVISA, pelo nome do produto ou da empresa." },
    ],
    sources: [diarioRO, anvisaOzivy, anvisaWegovyOral, mj, bulario],
  },
  {
    slug: "tirzec-lipoless-gluconex-canetas-do-paraguai",
    title: "Tirzec, Lipoless, Gluconex, Tirzedral, T36: o que a ANVISA diz sobre as “canetas do Paraguai”",
    answer:
      "Nenhuma delas tem registro na ANVISA. Gluconex e Tirzedral foram proibidas pela Resolução RE nº 1.519, publicada no Diário Oficial em 15/04/2026: fica vedada a fabricação, importação, comercialização, distribuição, propaganda e o uso, com apreensão de qualquer lote. Lipoless (Éticos, Paraguai), Synedica, TG/TG Indufar, Tirzazep e a retatrutida de qualquer fabricante já constavam em proibições anteriores citadas pela imprensa. A ANVISA explica o motivo: produtos sem registro não têm garantia sobre conteúdo, qualidade ou eficácia.",
    description: "Situação regulatória de Tirzec, Lipoless, Gluconex, Tirzedral, T36 e outras canetas sem registro: resoluções da ANVISA, o que é proibido e por quê.",
    updated: U,
    sections: [
      { heading: "Gluconex e Tirzedral (RE nº 1.519, DOU 15/04/2026)", bullets: [
        "“A apreensão, comercialização e distribuição de qualquer lote;”",
        "“A fabricação, importação e o uso dos produtos;”",
        "“Toda e qualquer propaganda ou publicidade em meios físicos ou virtuais.”",
        "Motivo citado: produtos sem registro, de origem não identificada; “não há garantias sobre o conteúdo, a qualidade ou a eficácia das substâncias”.",
      ] },
      { heading: "Lipoless, Synedica, TG, Tirzazep, retatrutida", paragraphs: ["Reportagem de 22/01/2026 lista como proibidas pela ANVISA a fabricação, distribuição, importação, comercialização, propaganda e uso de Lipoless (incluindo a ampola do laboratório paraguaio Éticos), Synedica, TG, TG 5, TG Indufar, Tirzazep (Royal Pharmaceuticals) e retatrutida “de todos os fabricantes”, com apreensão de lotes de Synedica e TG determinada em 21/01/2026. Os números das resoluções não constam na reportagem; confira no portal da ANVISA."] },
      { heading: "Tirzec e T36", paragraphs: ["Tirzec (Quimfa) e T36 são marcas paraguaias de tirzepatida citadas pela imprensa entre as proibidas pela ANVISA em 2026. Não localizamos o texto oficial com o número da resolução; por isso esta página não reproduz detalhes além do fato de não terem registro no Brasil, verificável no portal de consultas da ANVISA."] },
      { heading: "O que isso significa na prática", bullets: [
        "Sem registro, não há bula aprovada: este site não publica dose, conservação ou efeitos desses produtos, porque não existe fonte oficial.",
        "A importação para uso pessoal, mesmo com receita, fica vedada quando há proibição específica.",
        "Quem já usa um desses produtos deve falar com o médico; a ANVISA orienta não usar e comunicar à vigilância sanitária.",
        "As alternativas com registro no Brasil são Mounjaro (tirzepatida) e, para semaglutida, Ozempic, Wegovy e as canetas registradas em 2026.",
      ] },
      { heading: "E as versões manipuladas?", paragraphs: ["Diferente das canetas paraguaias, a manipulação em farmácia é regulada: a Nota Técnica 200/2025 da ANVISA a admite só em caráter excepcional, com justificativa e insumo rastreável. Veja as páginas de tirzepatida e semaglutida manipuladas."] },
    ],
    faq: [
      { q: "Tirzec é aprovado pela ANVISA?", a: "Não. Tirzec não tem registro no Brasil; a imprensa o cita entre as marcas paraguaias proibidas em 2026. Confira no portal da ANVISA." },
      { q: "Lipoless é o mesmo que Mounjaro?", a: "Não. Lipoless é uma marca paraguaia de tirzepatida sem registro na ANVISA; Mounjaro é o produto registrado da Eli Lilly, com bula aprovada." },
      { q: "Posso trazer Gluconex do Paraguai para uso próprio?", a: "A RE 1.519 veda importação e uso. A reportagem da IstoÉ reproduz a lista de vedações." },
    ],
    sources: [istoe, tnh1, nt200, bulario],
  },
];

const mjBula = { label: "Bula do paciente Mounjaro® — versão 05/2026", url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf" };
export const guiasMarcasExtra: Guide[] = [
  {
    slug: "mounjaro-natural-ou-de-pobre-existe",
    title: "“Mounjaro natural” ou “Mounjaro de pobre” existe? O que tem registro na ANVISA",
    answer:
      "Não existe produto registrado na ANVISA com esse nome, e nenhum chá, cápsula ou suplemento tem bula que o equipare à tirzepatida. O que existe com registro: Mounjaro (tirzepatida, Lilly), Ozempic, Wegovy e as semaglutidas nacionais registradas em 2026, Saxenda e as liraglutidas genéricas, Rybelsus em comprimido e, desde 04/11/2026, Wegovy em comprimido (registro aprovado pela ANVISA para obesidade). Tudo isso exige receita retida. As “canetas do Paraguai” vendidas como alternativa barata (Tirzec, Lipoless, Gluconex, Tirzedral) não têm registro e foram proibidas pela ANVISA. Se o seu problema é preço, a conversa é com o médico sobre as opções registradas, não com um produto sem bula.",
    description: "O que está por trás das buscas “Mounjaro natural” e “Mounjaro de pobre”: o que tem registro na ANVISA, o que foi proibido, e o que não existe.",
    updated: U2,
    sections: [
      { heading: "O que tem registro na ANVISA (e bula)", table: { head: ["Produto", "Substância", "Via", "Indicação na bula"], rows: [
        ["Mounjaro (Lilly)", "tirzepatida", "injeção semanal", "diabetes tipo 2; controle do peso; apneia do sono (versão 05/2026)"],
        ["Ozempic (Novo Nordisk)", "semaglutida", "injeção semanal", "diabetes tipo 2"],
        ["Wegovy (Novo Nordisk)", "semaglutida", "injeção semanal", "controle do peso; MASH; risco cardiovascular"],
        ["Ozivy (EMS) e outras semaglutidas registradas em 2026", "semaglutida", "injeção semanal", "diabetes tipo 2 (registro)"],
        ["Saxenda (Novo Nordisk)", "liraglutida", "injeção diária", "controle do peso"],
        ["Rybelsus (Novo Nordisk)", "semaglutida", "comprimido diário", "diabetes tipo 2"],
        ["Wegovy em comprimido (Novo Nordisk)", "semaglutida", "comprimido diário", "obesidade e sobrepeso com comorbidade (registro ANVISA de 04/11/2026)"],
      ] } },
      { heading: "O que não existe", bullets: [
        "Não há “tirzepatida natural”: tirzepatida é uma molécula sintética produzida por laboratório, com registro de medicamento. Chás, cápsulas de berberina, canela ou “GLP-1 natural” não têm bula que os equipare e não são regulados como medicamento.",
        "Não há “Mounjaro de pobre” registrado: o termo circula para canetas contrabandeadas do Paraguai (Tirzec, Lipoless, Gluconex, Tirzedral, T36), proibidas pela ANVISA, ou para manipulados, que a ANVISA só admite em caráter excepcional (Nota Técnica 200/2025).",
      ] },
      { heading: "Perguntas que chegam junto com “Mounjaro de pobre”", paragraphs: ["Quem amamenta, quem está grávida ou quem usa anticoncepcional pergunta se as regras da bula do Mounjaro valem para o manipulado. Não valem: a ANVISA não reconhece equivalência. As páginas abaixo mostram o que a bula do Mounjaro diz e por que isso não se transfere."], links: [
        { label: "Quem amamenta pode tomar “Mounjaro de pobre”?", href: "/medicamentos/tirzepatida-manipulada/gravidez-e-amamentacao" },
        { label: "Mounjaro na gravidez e na amamentação", href: "/medicamentos/mounjaro/gravidez-e-amamentacao" },
        { label: "Tirzepatida manipulada: regras da ANVISA", href: "/medicamentos/tirzepatida-manipulada/regras-anvisa" },
      ] },
      { heading: "Se a questão é preço", paragraphs: ["Este site não publica preços nem indica onde comprar. O que a regulação permite: medicamentos registrados, com receita retida (RDC 973/2025). Em 2026 a ANVISA registrou semaglutidas nacionais e liraglutidas genéricas, que dependem de preço da CMED para chegar às farmácias. Converse com o médico sobre o que está disponível e registrado."] },
    ],
    faq: [
      { q: "Berberina é o Mounjaro natural?", a: "Não. Berberina é um suplemento; não tem registro como medicamento nem bula que a equipare à tirzepatida. Este site só trata de produtos com bula." },
      { q: "Tirzepatida manipulada é o Mounjaro de pobre?", a: "É um preparado de farmácia, sem bula aprovada. A ANVISA só admite manipulação em caráter excepcional (NT 200/2025). Veja a página sobre tirzepatida manipulada." },
      { q: "Existe genérico do Mounjaro?", a: "Não localizamos registro de tirzepatida genérica na ANVISA até 28/10/2026. As canetas de tirzepatida vendidas como genérico vêm do Paraguai e foram proibidas." },
    ],
    sources: [mjBula, anvisaOzivy, anvisaWegovyOral, diarioRO, istoe, tnh1, nt200, bulario],
  },
];

export const guiaCaneta: Guide[] = [
  {
    slug: "caneta-emagrecedora-quais-tem-registro",
    title: "Caneta emagrecedora: quais têm registro na ANVISA e o que a bula de cada uma diz",
    answer:
      "“Caneta emagrecedora” não é um produto: é o apelido das canetas injetáveis de GLP-1. No Brasil, as que têm registro na ANVISA e bula aprovada para controle do peso são Wegovy (semaglutida, semanal), Mounjaro (tirzepatida, semanal, indicação de peso desde 22/04/2026) e Saxenda (liraglutida, diária). Em 04/11/2026 a ANVISA aprovou também o Wegovy em comprimido para obesidade, que não é caneta. Ozempic, Rybelsus e as semaglutidas nacionais registradas em 2026 têm bula para diabetes tipo 2. Tirzec, Lipoless, Gluconex, Tirzedral e T36 não têm registro e foram proibidas. Todas as registradas exigem receita retida.",
    description: "O que é a “caneta emagrecedora”, quais produtos têm registro ANVISA e indicação de peso na bula, e quais são proibidos.",
    updated: U2,
    sections: [
      { heading: "Com registro e indicação de controle do peso na bula", table: { head: ["Produto", "Substância", "Como se usa", "Fora da geladeira (bula)"], rows: [
        ["Wegovy", "semaglutida 0,25 a 2,4 mg", "1 vez por semana, caneta de 4 doses", "6 semanas após o primeiro uso"],
        ["Mounjaro", "tirzepatida 2,5 a 15 mg", "1 vez por semana, caneta de uso único (4 por caixa)", "até 21 dias, abaixo de 30 °C"],
        ["Saxenda", "liraglutida 0,6 a 3,0 mg", "1 vez por dia, caneta de 18 mg", "4 semanas após o primeiro uso"],
      ] } },
      { heading: "Com registro, mas bula para diabetes tipo 2", bullets: ["Ozempic (semaglutida, injeção semanal).", "Rybelsus (semaglutida em comprimido, diabetes tipo 2; o Wegovy em comprimido, aprovado em 04/11/2026, é o oral com indicação de obesidade).", "Ozivy, Semavy, Owozy, Zempneo, Seemasun, Orsema e genéricos registrados em 2026 (semaglutida)."] },
      { heading: "Sem registro (proibidas pela ANVISA)", paragraphs: ["Tirzec, Lipoless, Lipoland, Gluconex, Tirzedral, T36, Synedica, TG: canetas de origem paraguaia ou desconhecida. Resolução RE 1.519 (DOU 15/04/2026) para Gluconex e Tirzedral; as demais em proibições citadas pela imprensa. Sem bula aprovada, não há regra de dose, conservação ou efeitos que este site possa publicar."] },
      { heading: "Regras comuns a todas as registradas", bullets: ["Receita retida obrigatória (RDC 973/2025).", "A escolha e a dose são do médico; nenhuma bula diz qual “emagrece mais”.", "Náusea, vômito, diarreia e constipação aparecem como efeitos frequentes em todas as bulas."] },
    ],
    faq: [
      { q: "Qual é a melhor caneta emagrecedora?", a: "As bulas não comparam eficácia. Com registro e indicação de peso: Wegovy, Mounjaro e Saxenda. A escolha é médica." },
      { q: "Caneta emagrecedora precisa de receita?", a: "Sim, com retenção na farmácia (RDC 973/2025)." },
      { q: "Caneta emagrecedora brasileira existe?", a: "As semaglutidas nacionais registradas em 2026 têm bula para diabetes tipo 2, não para peso. A liraglutida genérica da EMS com referência Olire foi registrada para obesidade (reportagem de 15/09/2026)." },
    ],
    sources: [mjBula, { label: "Bula do paciente Wegovy® — Novo Nordisk, registro ANVISA 1.1766.0039, aprovada em 04/05/2026", url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf" }, { label: "Bula do paciente Saxenda® — Novo Nordisk, registro ANVISA 1.1766.0032, aprovada em 17/04/2026", url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf" }, istoe, tnh1, diarioRO, anvisaOzivy, anvisaWegovyOral, bulario],
  },
];
