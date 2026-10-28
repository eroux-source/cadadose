import type { Article } from "./types";

const anvisa = { label: "Bulário Eletrônico — ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" };

export const ptWave2: Article[] = [
  // ───────────────────────── Mounjaro ─────────────────────────
  {
    medicationSlug: "mounjaro",
    intent: "efeitos-colaterais",
    title: "Efeitos colaterais do Mounjaro (tirzepatida): o que é comum e quando procurar o médico",
    answer:
      "Os efeitos colaterais mais comuns do Mounjaro são náusea, diarreia, vômito, prisão de ventre, dor abdominal e redução do apetite. Eles aparecem sobretudo no início e a cada aumento de dose, e tendem a diminuir com as semanas. Dor abdominal intensa e persistente, vômitos que não param ou sinais de desidratação exigem avaliação médica imediata.",
    description:
      "Lista dos efeitos colaterais do Mounjaro segundo a bula: os mais comuns, os que exigem atenção, como costumam evoluir e o que anotar para a consulta.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Os mais comuns, segundo a bula",
        bullets: [
          "Náusea (o mais frequente), diarreia, vômito, prisão de ventre, dor ou desconforto abdominal, indigestão, gases.",
          "Redução do apetite, cansaço, azia, arrotos.",
          "Reações no local da aplicação: vermelhidão, coceira ou pequeno inchaço, geralmente leves.",
        ],
      },
      {
        heading: "Quando costumam aparecer",
        paragraphs: [
          "A maioria surge nas primeiras semanas e nos dias seguintes a cada aumento de dose. Por isso a bula prevê intervalos mínimos de 4 semanas entre as doses: o corpo se adapta. Se os sintomas atrapalham a rotina, o médico pode manter a dose atual por mais tempo em vez de subir.",
        ],
      },
      {
        heading: "Sinais que pedem avaliação médica",
        bullets: [
          "Dor forte e persistente na parte superior do abdômen, que pode irradiar para as costas, com ou sem vômito (possível pancreatite).",
          "Vômitos ou diarreia que não param, com tontura, boca seca e pouca urina (desidratação, que pode afetar os rins).",
          "Dor no abdômen superior direito, febre, pele ou olhos amarelados (vesícula biliar).",
          "Em quem usa insulina ou sulfonilureia: suor frio, tremor, confusão (hipoglicemia).",
          "Alterações visuais, especialmente em quem tem retinopatia diabética.",
          "Reação alérgica grave: inchaço no rosto, lábios ou garganta, dificuldade para respirar. Procure emergência.",
        ],
      },
      {
        heading: "O que anotar para a consulta",
        paragraphs: [
          "Dia do sintoma, intensidade, relação com a aplicação (quantos dias depois) e com a dose. Esse histórico ajuda o médico a decidir se mantém, reduz ou sobe a dose. O diário CadaDose registra isso em dois toques.",
        ],
      },
    ],
    faq: [
      { q: "A náusea do Mounjaro passa?", a: "Na maioria das pessoas, sim: ela é mais forte no início e após cada aumento de dose e diminui ao longo das semanas. Se persistir, fale com seu médico." },
      { q: "Mounjaro causa queda de cabelo?", a: "Queda de cabelo foi relatada em estudos, geralmente associada à perda de peso rápida. Converse com seu médico se notar." },
      { q: "Posso tomar remédio para enjoo?", a: "Só com orientação médica. Medidas como refeições menores, evitar gordura e álcool e manter hidratação costumam ser indicadas primeiro." },
      { q: "Mounjaro pode causar pancreatite?", a: "É um efeito raro descrito na bula. Dor abdominal intensa e persistente deve ser avaliada imediatamente." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "mounjaro",
    intent: "onde-aplicar",
    title: "Onde aplicar Mounjaro: locais de injeção e rodízio",
    answer:
      "Mounjaro é aplicado por via subcutânea em três regiões: abdômen (a pelo menos 5 cm do umbigo), parte da frente da coxa ou parte de trás do braço. Alterne o local a cada semana e evite áreas com dor, hematoma, cicatriz ou pele endurecida. Abdômen e coxa são os mais fáceis para quem aplica sozinho.",
    description: "Locais de aplicação do Mounjaro segundo a bula, como fazer o rodízio e o que evitar.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Os três locais aprovados",
        table: {
          head: ["Local", "Detalhe", "Para quem"],
          rows: [
            ["Abdômen", "Pelo menos 5 cm ao redor do umbigo, nas laterais", "O mais usado para autoaplicação"],
            ["Coxa", "Parte da frente, terço médio", "Fácil de alcançar sentado"],
            ["Braço", "Parte de trás, entre ombro e cotovelo", "Geralmente com ajuda de outra pessoa"],
          ],
        },
      },
      {
        heading: "Como fazer o rodízio",
        paragraphs: [
          "Mude de local a cada aplicação, ou ao menos mude o ponto dentro da mesma região (alguns centímetros de distância). Uma sequência simples: abdômen esquerdo, abdômen direito, coxa esquerda, coxa direita. Repetir o mesmo ponto favorece nódulos, irritação e absorção irregular.",
        ],
      },
      {
        heading: "O que evitar",
        bullets: [
          "Pele com dor, vermelhidão, hematoma, cicatriz, estrias inflamadas ou endurecimento.",
          "Aplicar através da roupa.",
          "Se você usa insulina: não aplique Mounjaro e insulina no mesmo ponto; use locais diferentes.",
        ],
      },
    ],
    faq: [
      { q: "Posso aplicar Mounjaro na barriga toda semana?", a: "Pode, desde que mude o ponto a cada vez (alguns centímetros de distância) e mantenha 5 cm do umbigo." },
      { q: "Dói mais na coxa ou no abdômen?", a: "Varia de pessoa para pessoa. Muitos relatam menos desconforto no abdômen; a agulha é curta e fina." },
      { q: "Precisa fazer prega na pele?", a: "A bula da KwikPen não exige prega. Siga as instruções do seu dispositivo e a orientação de quem te ensinou a aplicar." },
    ],
    sources: [anvisa],
  },

  // ───────────────────────── Ozempic ─────────────────────────
  {
    medicationSlug: "ozempic",
    intent: "como-aplicar",
    title: "Como aplicar Ozempic (semaglutida): passo a passo da caneta",
    answer:
      "Ozempic é aplicado uma vez por semana, por via subcutânea, no abdômen, na coxa ou na parte de trás do braço. Coloque uma agulha nova, faça o teste de fluxo apenas na primeira vez que usar cada caneta nova, gire o seletor até a dose prescrita, insira a agulha e mantenha o botão pressionado contando devagar até 6.",
    description: "Passo a passo para aplicar Ozempic com a caneta: preparo, teste de fluxo, seleção da dose, locais, rodízio e conservação, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Antes de começar",
        bullets: [
          "Confira o rótulo (nome, dose da caneta, validade). O líquido deve estar límpido e incolor.",
          "Lave as mãos. Separe uma agulha nova (uma por aplicação) e um recipiente rígido para descarte.",
        ],
      },
      {
        heading: "Passo a passo",
        steps: [
          "Retire a tampa da caneta e encaixe uma agulha nova. Remova as duas tampas da agulha.",
          "Só na primeira dose de cada caneta nova: gire o seletor até o símbolo de teste de fluxo e pressione o botão até aparecer uma gota na ponta da agulha. Se não aparecer, repita até 6 vezes; se ainda assim não aparecer, troque a agulha.",
          "Gire o seletor até a dose prescrita pelo médico (0,25, 0,5, 1 ou 2 mg, conforme a caneta).",
          "Escolha o local: abdômen (a 5 cm do umbigo), parte da frente da coxa ou parte de trás do braço. Evite áreas doloridas, com hematoma ou cicatriz.",
          "Insira a agulha e pressione o botão até o contador voltar a 0. Mantenha pressionado e conte devagar até 6.",
          "Retire a agulha, descarte-a no recipiente rígido e guarde a caneta com a tampa, sem agulha.",
        ],
      },
      {
        heading: "Quantas doses tem a caneta",
        paragraphs: [
          "A caneta de 0,25/0,5 mg rende 4 doses de 0,5 mg (ou 8 de 0,25 mg nas primeiras semanas). As canetas de 1 mg e 2 mg rendem 4 doses cada. O contador mostra quanto resta.",
        ],
      },
      {
        heading: "Conservação",
        bullets: [
          "Antes do primeiro uso: geladeira, 2 °C a 8 °C. Nunca congele.",
          "Depois do primeiro uso: geladeira ou temperatura ambiente até 30 °C, por no máximo 56 dias. Depois, descarte.",
        ],
      },
    ],
    faq: [
      { q: "Ozempic pode ser aplicado em qualquer horário?", a: "Sim, uma vez por semana, em qualquer horário, com ou sem alimento. Mantenha o mesmo dia da semana." },
      { q: "Por que contar até 6?", a: "Para garantir que a dose completa foi liberada. Retirar a agulha antes pode deixar parte da dose na caneta." },
      { q: "O teste de fluxo é toda semana?", a: "Não. Apenas antes da primeira dose de cada caneta nova." },
      { q: "Posso mudar o dia da aplicação?", a: "Pode, desde que tenham passado pelo menos 3 dias (72 horas) desde a última dose. Confirme com seu médico." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "ozempic",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Ozempic: o que fazer segundo a bula",
    answer:
      "Se passaram até 5 dias do dia previsto, aplique assim que lembrar e mantenha o calendário normal. Se passaram mais de 5 dias, pule a dose esquecida e aplique no próximo dia programado. Nunca aplique duas doses para compensar.",
    description: "Regra da bula para dose esquecida de Ozempic: janela de 5 dias, quando pular e como voltar ao calendário.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra dos 5 dias",
        bullets: [
          "Até 5 dias de atraso: aplique a dose esquecida e siga com o dia habitual na semana seguinte.",
          "Mais de 5 dias: não aplique. Espere o próximo dia programado.",
          "Nunca duas doses no mesmo dia nem com menos de 3 dias de intervalo.",
        ],
      },
      {
        heading: "Exemplo prático",
        paragraphs: [
          "Sua aplicação é no domingo. Lembrou na quinta (4 dias): aplique na quinta e volte a aplicar no domingo seguinte. Lembrou no sábado (6 dias): pule e aplique no domingo como de costume.",
        ],
      },
    ],
    faq: [
      { q: "Esqueci o Ozempic por 3 dias, posso aplicar?", a: "Sim. Dentro de 5 dias a bula orienta aplicar assim que lembrar." },
      { q: "Esqueci uma semana inteira, aplico dose dobrada?", a: "Não. Aplique a dose normal no próximo dia programado." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "ozempic",
    intent: "validade-depois-de-aberta",
    title: "Validade do Ozempic depois de aberto: 56 dias",
    answer:
      "Depois do primeiro uso, a caneta de Ozempic pode ser usada por até 56 dias (8 semanas), guardada na geladeira (2 °C a 8 °C) ou em temperatura ambiente até 30 °C, longe de calor e luz direta. Depois de 56 dias, descarte mesmo que sobre líquido.",
    description: "Quanto tempo dura a caneta de Ozempic depois de aberta, como guardar, viagens e quando descartar, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação",
        table: {
          head: ["Situação", "Onde guardar", "Por quanto tempo"],
          rows: [
            ["Caneta fechada", "Geladeira, 2 °C a 8 °C, na caixa", "Até a validade do rótulo"],
            ["Caneta em uso", "Geladeira ou ambiente até 30 °C", "Até 56 dias após o primeiro uso"],
            ["Congelou", "Não use", "Descarte"],
          ],
        },
      },
      {
        heading: "Na prática",
        paragraphs: [
          "Uma caneta de 4 doses semanais dura 4 semanas de uso, bem dentro dos 56 dias. O prazo importa mais para quem usa 0,25 mg (8 doses) ou faz pausas. Anote a data do primeiro uso: o CadaDose calcula o limite e avisa.",
        ],
      },
    ],
    faq: [
      { q: "Ozempic pode ficar fora da geladeira?", a: "Depois do primeiro uso, sim: até 56 dias abaixo de 30 °C. Antes do primeiro uso, geladeira." },
      { q: "Posso levar o Ozempic em viagem?", a: "Sim, protegido do calor (abaixo de 30 °C) e da luz, sem congelar. Em avião, leve na bagagem de mão." },
    ],
    sources: [anvisa],
  },

  // ───────────────────────── Wegovy ─────────────────────────
  {
    medicationSlug: "wegovy",
    intent: "como-aplicar",
    title: "Como aplicar Wegovy (semaglutida 2,4 mg): passo a passo da caneta",
    answer:
      "Wegovy é aplicado uma vez por semana, por via subcutânea, no abdômen, na coxa ou na parte de trás do braço. Com a caneta multidose, coloque uma agulha nova, faça o teste de fluxo só na primeira vez que usar cada caneta nova, gire o seletor até a dose, insira a agulha e mantenha o botão pressionado contando devagar até 6.",
    description: "Passo a passo para aplicar Wegovy com a caneta multidose: preparo, teste de fluxo, locais, rodízio, esquema de doses e conservação, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Passo a passo",
        steps: [
          "Confira o rótulo e o líquido (límpido e incolor). Lave as mãos e separe uma agulha nova.",
          "Encaixe a agulha e remova as duas tampas.",
          "Só na primeira dose de cada caneta nova: faça o teste de fluxo até aparecer uma gota na ponta da agulha.",
          "Gire o seletor até a dose prescrita. Cada caneta corresponde a uma dose (0,25, 0,5, 1, 1,7 ou 2,4 mg).",
          "Escolha o local (abdômen a 5 cm do umbigo, coxa ou braço), insira a agulha e pressione o botão até o fim. Conte devagar até 6.",
          "Retire a agulha, descarte-a em recipiente rígido e guarde a caneta tampada, sem agulha.",
        ],
      },
      {
        heading: "Esquema de doses da bula",
        table: {
          head: ["Dose semanal", "Duração"],
          rows: [
            ["0,25 mg", "Semanas 1 a 4"],
            ["0,5 mg", "Semanas 5 a 8"],
            ["1 mg", "Semanas 9 a 12"],
            ["1,7 mg", "Semanas 13 a 16"],
            ["2,4 mg", "A partir da semana 17 (manutenção)"],
          ],
        },
        paragraphs: ["O médico pode manter uma etapa por mais tempo se houver efeitos colaterais. Não acelere por conta própria."],
      },
      {
        heading: "Quantas doses tem a caneta e como guardar",
        bullets: [
          "Cada caneta multidose de Wegovy contém 4 doses semanais.",
          "Antes do primeiro uso: geladeira, 2 °C a 8 °C. Não congele.",
          "Depois do primeiro uso: geladeira ou temperatura ambiente até 30 °C, por até 6 semanas (confira na bula da sua apresentação).",
        ],
      },
    ],
    faq: [
      { q: "Wegovy e Ozempic são a mesma coisa?", a: "Os dois têm semaglutida, mas Wegovy é aprovado para controle de peso com doses até 2,4 mg; Ozempic é aprovado para diabetes tipo 2 com doses até 2 mg. Siga o que seu médico prescreveu." },
      { q: "Posso aplicar Wegovy em qualquer horário?", a: "Sim, uma vez por semana, em qualquer horário, com ou sem alimento." },
      { q: "Por que contar até 6?", a: "Para garantir a liberação da dose completa antes de retirar a agulha." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "wegovy",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Wegovy: o que fazer segundo a bula",
    answer:
      "Se passaram até 5 dias do dia previsto, aplique assim que lembrar e mantenha o calendário normal. Se passaram mais de 5 dias, pule a dose esquecida e aplique no próximo dia programado. Se ficar mais de 2 semanas sem aplicar, fale com o médico antes de retomar: pode ser preciso reiniciar em dose menor.",
    description: "Regra da bula para dose esquecida de Wegovy: janela de 5 dias, quando pular e o que fazer após pausas longas.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra dos 5 dias",
        bullets: [
          "Até 5 dias de atraso: aplique a dose esquecida e siga o dia habitual na semana seguinte.",
          "Mais de 5 dias: não aplique; espere o próximo dia programado.",
          "Nunca duas doses no mesmo dia nem com menos de 3 dias de intervalo.",
        ],
      },
      {
        heading: "Pausas longas",
        paragraphs: [
          "Após mais de 2 semanas sem Wegovy, os efeitos colaterais podem voltar com força se você retomar na dose anterior. A bula orienta avaliar com o médico se deve reiniciar com a dose menor e subir de novo.",
        ],
      },
    ],
    faq: [
      { q: "Esqueci o Wegovy por 4 dias, aplico?", a: "Sim. Dentro de 5 dias a bula orienta aplicar assim que lembrar." },
      { q: "Fiquei 3 semanas sem aplicar, volto na mesma dose?", a: "Não decida sozinho. Fale com seu médico; pode ser preciso reiniciar em dose menor para reduzir efeitos colaterais." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "wegovy",
    intent: "validade-depois-de-aberta",
    title: "Validade do Wegovy depois de aberto",
    answer:
      "Depois do primeiro uso, a caneta multidose de Wegovy pode ser guardada na geladeira (2 °C a 8 °C) ou em temperatura ambiente até 30 °C, protegida da luz, por até 6 semanas, segundo a bula da apresentação multidose. Como cada caneta tem 4 doses semanais, o uso normal termina antes desse prazo. Confira o prazo exato na bula da sua caneta.",
    description: "Quanto tempo dura a caneta de Wegovy depois de aberta, como guardar e quando descartar, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação",
        table: {
          head: ["Situação", "Onde guardar", "Por quanto tempo"],
          rows: [
            ["Caneta fechada", "Geladeira, 2 °C a 8 °C, na caixa", "Até a validade do rótulo"],
            ["Caneta em uso", "Geladeira ou ambiente até 30 °C", "Até 6 semanas após o primeiro uso (confira na bula)"],
            ["Congelou", "Não use", "Descarte"],
          ],
        },
      },
      {
        heading: "Anote a data do primeiro uso",
        paragraphs: ["Escreva a data na caixa ou no diário. O CadaDose calcula o limite a partir da regra da bula e avisa quando a caneta estiver perto de vencer."],
      },
    ],
    faq: [
      { q: "Wegovy pode ficar fora da geladeira?", a: "Depois do primeiro uso, sim, abaixo de 30 °C e dentro do prazo da bula. Antes do primeiro uso, geladeira." },
      { q: "Sobrou líquido depois da 4ª dose, posso usar?", a: "Não. Descarte a caneta após as 4 doses." },
    ],
    sources: [anvisa],
  },
];
