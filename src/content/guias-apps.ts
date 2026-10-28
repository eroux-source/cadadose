import type { Guide } from "./guias";

/**
 * App comparison pages. Every claim about another app comes from its App Store Brasil
 * listing on 28/10/2026 (linked). Ratings and counts change daily; we quote what the
 * listing showed and date it. No download or revenue estimates: those are not verifiable.
 */
const st = (name: string, id: string, path: string) => ({ label: `${name} — ficha na App Store Brasil (consultada em 28/10/2026)`, url: `https://apps.apple.com/br/app/${path}/id${id}` });
const S = {
  ozempro: st("OzemPro", "6753301974", "ozempro-emagrecer-com-glp-1"),
  shotsy: st("Shotsy", "6499510249", "shotsy-monitor-glp-1"),
  sopro: st("SoPro", "6761509283", "sopro-controle-glp-1-e-doses"),
  mounhealth: st("MounHealth", "6760874134", "mounjaro-gratis-mounhealth"),
  meumon: st("meuMON", "6777329407", "meumon-glp-1-dose-e-peso"),
  mjcare: st("Mounjaro Care", "6756684818", "mounjaro-care-glp-1-tracker"),
  glucopal: st("GlucoPal", "6670317407", "zepbound-mounjaro-tracker"),
  glucopalSite: { label: "GlucoPal — site oficial glucopal.com (consultado em 28/10/2026)", url: "https://glucopal.com/" },
  anvisa: { label: "ANVISA — Perguntas e respostas sobre software como dispositivo médico (RDC 657/2022)", url: "https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2022/software-como-dispositivo-medico-perguntas-e-respostas/perguntas-respostas-rdc-657-de-2022-v1-01-09-2022.pdf/@@download/file" },
};
const U = "2026-10-28";

export const guiasApps: Guide[] = [
  {
    slug: "melhores-apps-glp-1-brasil",
    title: "Melhores apps para acompanhar Mounjaro, Ozempic e Wegovy no Brasil (2026)",
    answer:
      "Comparamos sete apps disponíveis na App Store Brasil pelo que a própria ficha de cada um declara: idioma, preço, se exige conta, se calcula dose e se estima “nível do medicamento”. O CadaDose entra na lista com o mesmo critério. Resumo: SoPro e CadaDose são os únicos sem conta e com dados no aparelho; OzemPro é o mais completo (e só por assinatura); Shotsy é o líder mundial, traduzido; os demais são apps pequenos ou em inglês.",
    description: "Comparativo dos apps de acompanhamento de GLP-1 disponíveis no Brasil, pelo que cada ficha da App Store declara.",
    updated: U,
    sections: [
      { heading: "Como comparamos", paragraphs: ["Só entram fatos que a ficha oficial de cada app declara. Notas e número de avaliações mudam todo dia: citamos o que a ficha mostrava em 28/10/2026. Não estimamos downloads nem receita."] },
      { heading: "Tabela comparativa (fichas da App Store Brasil, 28/10/2026)", table: {
        head: ["App", "Idioma da ficha", "Preço declarado", "Sem conta?", "Calcula dose (UI)?", "“Nível do medicamento”?", "Relatório p/ médico"],
        rows: [
          ["CadaDose", "pt-BR", "Grátis; Pro opcional (relatório PDF, backup)", "Sim, dados no aparelho", "Não, por escolha", "Não, por escolha", "Sim (Pro)"],
          ["OzemPro (FitCal LTDA)", "pt + 12", "Assinatura mensal/anual; “não há versão gratuita com acesso total”", "Não informado", "Sim (“Calculadora de doses: quantas UI puxar”)", "Sim (“concentração estimada”)", "Sim (PDF e Excel)"],
          ["SoPro (DocPocket)", "pt + 2", "Grátis; Premium R$ 4,90/mês ou R$ 49,90/ano", "Sim (“sem conta”, dados no iPhone)", "Não declarado", "Não declarado", "Sim (Premium)"],
          ["Shotsy", "pt + 16", "Grátis com compras no app", "Não informado", "Não declarado", "Sim (“níveis estimados de medicamento”)", "Não declarado na ficha"],
          ["MounHealth (“Mounjaro Grátis”)", "pt + 6", "Grátis; Premium (IA, exames, composição corporal)", "Não informado", "Não declarado", "Não declarado", "Não declarado"],
          ["meuMON", "pt + 1", "Grátis com compras no app", "Não informado", "Não (“não recomenda doses”)", "Não declarado", "Histórico para consulta"],
          ["Mounjaro Care", "en (suporte pt-BR)", "Grátis com compras no app", "Não informado", "Não declarado", "Não declarado", "Compartilhar com profissional"],
          ["GlucoPal (Zepbound & Mounjaro Tracker)", "en", "Grátis; Pro para relatório", "Sim (“no account”)", "Calculadoras no site", "Sim (“medication levels”)", "Sim (Pro)"],
        ] } },
      { heading: "Por que o CadaDose não calcula dose nem mostra “nível do medicamento”", paragraphs: [
        "A ANVISA, nas perguntas e respostas da RDC 657/2022, trata calculadoras de dose como software que pode se enquadrar como dispositivo médico, enquanto diários e lembretes não. Preferimos ficar do lado do diário: você registra a dose que o médico prescreveu, e o site reproduz a tabela da bula com a fonte ao lado.",
        "“Nível do medicamento” é uma estimativa a partir da meia-vida; a bula do paciente não traz essa curva, e um gráfico bonito pode dar falsa segurança para decisões que são do médico.",
      ] },
      { heading: "Quem escolhe o quê", bullets: [
        "Quer tudo em um (refeições por foto, comunidade, IA) e aceita assinatura: OzemPro.",
        "Quer um diário simples, sem conta, barato: SoPro (iPhone) ou CadaDose (qualquer celular, pelo navegador, sem instalar).",
        "Já usa Shotsy em outro país: a ficha é traduzida, mas os textos citam Zepbound e Foundayo, que não existem no Brasil.",
        "Quer ler o que a bula brasileira diz antes de decidir qualquer coisa: as 70+ respostas sourçadas deste site, em /perguntas.",
      ] },
    ],
    faq: [
      { q: "Qual app de Mounjaro é gratuito de verdade?", a: "Pela ficha, SoPro declara doses, lembretes, peso e exportação grátis; MounHealth declara doses, peso e progresso grátis; OzemPro declara que não há versão gratuita com acesso total. O CadaDose é grátis sem conta; o Pro é opcional." },
      { q: "Existe app brasileiro para Ozempic?", a: "Sim: OzemPro, SoPro, MounHealth e meuMON têm fichas em português e desenvolvedores no Brasil (ficha da App Store). O CadaDose também é brasileiro e funciona no navegador." },
      { q: "Preciso instalar o CadaDose?", a: "Não. Abre no navegador do celular e pode ser adicionado à tela inicial. Funciona em Android e iPhone." },
    ],
    sources: [S.ozempro, S.sopro, S.shotsy, S.mounhealth, S.meumon, S.mjcare, S.glucopal, S.glucopalSite, S.anvisa],
  },
  {
    slug: "alternativa-ao-shotsy-em-portugues",
    title: "Alternativa ao Shotsy em português: o que muda para quem está no Brasil",
    answer:
      "O Shotsy é o rastreador de GLP-1 mais conhecido no mundo e tem ficha em português. Mas o conteúdo é traduzido do inglês: a ficha cita Zepbound®, Rybelsus®, Saxenda®, Victoza® e Trulicity®, e o blog fala de regras da TSA e aprovações da FDA. O CadaDose faz o caminho inverso: só medicamentos registrados na ANVISA, textos baseados nas bulas brasileiras, sem conta, no navegador, com Pro em reais via PIX.",
    description: "Shotsy vs CadaDose para quem usa Mounjaro, Ozempic ou Wegovy no Brasil.",
    updated: U,
    sections: [
      { heading: "O que o Shotsy declara na ficha", bullets: [
        "“Acompanhe doses de Ozempic®, Wegovy®, Wegovy™ Pill, Mounjaro®, Zepbound®, Rybelsus®, Saxenda®, Victoza® e Trulicity®”.",
        "“Níveis estimados de medicamento” com gráficos.",
        "Grátis com compras dentro do app; somente para iPhone (ficha BR).",
      ] },
      { heading: "O que muda no CadaDose", bullets: [
        "Catálogo só com o que tem registro ANVISA: Mounjaro (caneta de uso único de 0,5 mL, 4 por caixa), Ozempic, Wegovy e os manipulados.",
        "Regras de validade da caneta pela bula brasileira: 21 dias para Mounjaro, 6 semanas para Ozempic e Wegovy.",
        "Sem conta, sem app para instalar, dados no aparelho; funciona em Android.",
        "Nenhuma estimativa de nível no sangue e nenhuma calculadora de dose.",
      ] },
      { heading: "Onde o Shotsy é melhor", bullets: ["Suporte a comprimidos e a vários medicamentos ao mesmo tempo.", "Integrações e análises mais profundas no app nativo.", "Mais tempo de mercado e mais avaliações."] },
    ],
    faq: [
      { q: "Shotsy funciona no Brasil?", a: "Sim, a ficha está em português na App Store Brasil. O conteúdo é traduzido do inglês e cita medicamentos sem registro no Brasil." },
      { q: "Shotsy tem versão Android?", a: "A ficha da App Store Brasil diz “somente para iPhone”; a ficha do Google Play existe separadamente." },
    ],
    sources: [S.shotsy, S.anvisa],
  },
];
