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
const U = "2026-10-28";

export const guiasMarcas: Guide[] = [
  {
    slug: "ozivy-semaglutida-ems",
    title: "Ozivy (semaglutida da EMS): o que a ANVISA aprovou e o que ainda não se sabe",
    answer:
      "Ozivy é a primeira caneta de semaglutida sintética registrada no Brasil, da EMS. A ANVISA publicou o registro em 26/05/2026 (resolução de 25/05/2026) para adultos com diabetes tipo 2 não controlado, junto com dieta e exercícios. Apresentações: solução de 1,34 mg/mL em caneta multidose descartável, de 1,5 mL (1 caneta) ou 3 mL (2 canetas), com agulhas. A ANVISA não aprovou o uso para emagrecimento. Até o fechamento desta página não localizamos a bula do paciente em PDF; por isso não publicamos tabela de dose nem regra de conservação do Ozivy.",
    description: "Ozivy, a semaglutida nacional da EMS: data do registro ANVISA, indicação aprovada, apresentações e o que ainda falta na bula.",
    updated: U,
    sections: [
      { heading: "O que a ANVISA publicou", bullets: [
        "Registro publicado em 26/05/2026; a resolução é de 25/05/2026 (notícia oficial da ANVISA).",
        "Indicação: adultos com diabetes mellitus tipo 2 não controlado, com dieta e exercícios; em monoterapia quando a metformina não é adequada, ou junto com outros antidiabéticos.",
        "Apresentações: semaglutida 1,34 mg/mL, sistema de aplicação preenchido, multidose e descartável: 1,5 mL com 1 caneta e 6 agulhas; 3 mL com 2 canetas e 10 agulhas; 1,5 mL com 1 caneta e 4 agulhas; 3 mL com 2 canetas e 8 agulhas.",
        "A ANVISA informou que outros pedidos de semaglutida sintética e um biológico seguiam em análise.",
      ] },
      { heading: "O que não está aprovado", paragraphs: ["A indicação registrada é o diabetes tipo 2. Emagrecimento não consta no registro publicado. A EMS declarou à imprensa que pretende pedir ampliação; até lá, qualquer uso fora da indicação é decisão exclusiva do médico."] },
      { heading: "O que ainda falta aqui", paragraphs: ["Não localizamos a bula do paciente do Ozivy em PDF público. Enquanto isso, este site não publica escada de doses, prazo de validade após o primeiro uso nem regra de dose esquecida para o Ozivy, porque não pode citar a fonte. Assim que a bula estiver no Bulário da ANVISA, a página será atualizada."] },
      { heading: "Ozivy é o mesmo que Ozempic?", paragraphs: ["Mesma substância (semaglutida) e mesma concentração declarada (1,34 mg/mL), com registro próprio como medicamento novo sintético. Preço, dispositivo e bula são do fabricante; compare pela bula de cada um, não pela marca."] },
    ],
    faq: [
      { q: "Ozivy serve para emagrecer?", a: "A ANVISA aprovou o Ozivy para diabetes tipo 2 em adultos. Emagrecimento não está no registro publicado em 26/05/2026." },
      { q: "Ozivy precisa de receita?", a: "Sim. Medicamentos à base de semaglutida exigem receita retida (RDC 973/2025)." },
      { q: "Quando o Ozivy chega às farmácias?", a: "A notícia do ICTQ explica que a venda depende da definição de preço pela CMED e da decisão da empresa. Não publicamos datas nem preços." },
    ],
    sources: [anvisaOzivy, ictq, bulario],
  },
  {
    slug: "canetas-aprovadas-anvisa-2026",
    title: "Canetas de GLP-1 aprovadas pela ANVISA em 2026: a lista e o que cada registro diz",
    answer:
      "Em 2026 a ANVISA registrou novas canetas de semaglutida, liraglutida e tirzepatida no Brasil: Ozivy (EMS, 26/05), Semavy (Cosmed), Owozy (Ávita Care), Zempneo (Brainfarma), Seemasun (Sun), Orsema (Ranbaxy) em 29/07; semaglutida genérica e Semaclique (Germed) e Yluméc (EMS) em agosto; liraglutida genérica da EMS em 08/09; e a versão multidose do Mounjaro (Lilly) em 18/03. Registro não é venda: cada produto ainda precisa de preço aprovado pela CMED. Esta lista vem de uma reportagem que compila os registros; confira cada um no portal da ANVISA.",
    description: "Lista das canetas de semaglutida, liraglutida e tirzepatida registradas pela ANVISA em 2026, com empresa, indicação e data.",
    updated: U,
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
      { heading: "Sobre a caneta multidose do Mounjaro", paragraphs: ["A reportagem cita a aprovação da versão multidose (caneta reutilizável) em 18/03/2026. A bula do paciente que consultamos (versão 05/2026) descreve a caneta de uso único de 0,5 mL (4 por caixa) e o frasco-ampola de dose única. Confirme pela embalagem e pela bula que acompanha o seu produto."] },
    ],
    faq: [
      { q: "Já existe genérico do Ozempic no Brasil?", a: "A ANVISA registrou semaglutidas genéricas e similares em 2026 (EMS, Germed), segundo a reportagem. A venda depende do preço aprovado pela CMED." },
      { q: "Alguma dessas canetas é aprovada para emagrecer?", a: "Na lista, a indicação de obesidade aparece na liraglutida genérica com referência Olire. As semaglutidas novas foram registradas para diabetes tipo 2." },
      { q: "Como confiro se um produto tem registro?", a: "No portal de consultas da ANVISA, pelo nome do produto ou da empresa." },
    ],
    sources: [diarioRO, anvisaOzivy, mj, bulario],
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
