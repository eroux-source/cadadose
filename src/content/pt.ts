import type { Article } from "./types";

const anvisa = { label: "Bulário Eletrônico — ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" };
const lillyStorage = {
  label: "Lilly — armazenamento da KwikPen Mounjaro",
  url: "https://medical.lilly.com/es/products/answers/c-mo-se-debe-almacenar-mounjaro-tirzepatida-kwikpen-316116",
};

export const ptArticles: Article[] = [
  {
    medicationSlug: "mounjaro",
    intent: "como-aplicar",
    title: "Como aplicar Mounjaro (tirzepatida): passo a passo da caneta KwikPen",
    answer:
      "Mounjaro é aplicado uma vez por semana, por via subcutânea, no abdômen, na coxa ou na parte de trás do braço. Com a caneta KwikPen multidose, você coloca uma agulha nova, faz o teste de fluxo só na primeira dose de cada caneta nova, gira o seletor até parar, insere a agulha na pele e pressiona o botão até o fim, contando devagar até 5.",
    description:
      "Passo a passo para aplicar Mounjaro (tirzepatida) com a caneta KwikPen: preparo, teste de fluxo, locais de aplicação, rodízio e descarte, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Antes de começar",
        bullets: [
          "Confira no rótulo: nome do medicamento, dose da caneta e data de validade.",
          "O líquido deve estar límpido e incolor. Não use se estiver turvo, com partículas ou se a caneta foi congelada.",
          "Lave as mãos. Separe uma agulha nova (uma por aplicação) e um recipiente rígido para o descarte.",
          "A caneta pode ser usada direto da geladeira. Se preferir, deixe alguns minutos em temperatura ambiente.",
        ],
      },
      {
        heading: "Passo a passo",
        steps: [
          "Retire a tampa da caneta e encaixe uma agulha nova. Remova as duas tampas da agulha.",
          "Só na primeira dose de cada caneta nova: faça o teste de fluxo conforme a bula (gire o seletor até a posição de teste e pressione o botão até sair uma gota na ponta da agulha).",
          "Gire o seletor de dose até ele parar. A KwikPen do Mounjaro aplica a dose completa da caneta; você não escolhe o número.",
          "Escolha o local: abdômen (a pelo menos 5 cm do umbigo), parte da frente da coxa ou parte de trás do braço. Evite áreas com dor, hematoma, cicatriz ou pele endurecida.",
          "Insira a agulha na pele em ângulo reto e pressione o botão até o fim. Mantenha pressionado e conte devagar até 5 antes de retirar.",
          "Retire a agulha, descarte-a no recipiente rígido e guarde a caneta com a tampa, sem agulha.",
        ],
      },
      {
        heading: "Rodízio dos locais",
        paragraphs: [
          "Alterne o local a cada semana (por exemplo: abdômen esquerdo, abdômen direito, coxa esquerda, coxa direita). Repetir sempre o mesmo ponto favorece nódulos e irritação. O diário CadaDose sugere automaticamente o próximo local.",
        ],
      },
      {
        heading: "Quantas doses tem a caneta e como guardar",
        bullets: [
          "A KwikPen contém 4 doses semanais. Após a 4ª dose, descarte a caneta mesmo que sobre líquido.",
          "Antes do primeiro uso: geladeira, entre 2 °C e 8 °C. Nunca congele.",
          "Depois do primeiro uso: geladeira ou temperatura ambiente até 30 °C, por no máximo 30 dias. Depois disso, descarte.",
        ],
      },
    ],
    faq: [
      {
        q: "Mounjaro pode ser aplicado em qualquer horário?",
        a: "Sim. A aplicação é uma vez por semana, em qualquer horário, com ou sem alimentação. O importante é manter o mesmo dia da semana.",
      },
      {
        q: "Posso mudar o dia da aplicação?",
        a: "Sim, desde que tenham passado pelo menos 3 dias (72 horas) desde a última dose. Confirme com seu médico.",
      },
      {
        q: "A caneta do Mounjaro precisa de teste de fluxo toda semana?",
        a: "Não. O teste de fluxo é feito apenas antes da primeira dose de cada caneta nova, segundo a bula.",
      },
      {
        q: "Por quantos segundos devo segurar o botão?",
        a: "Pressione o botão até o fim e conte devagar até 5 antes de retirar a agulha, para garantir a dose completa.",
      },
      {
        q: "Posso reutilizar a agulha?",
        a: "Não. Use uma agulha nova a cada aplicação e descarte-a em recipiente rígido.",
      },
    ],
    sources: [anvisa, lillyStorage],
  },
  {
    medicationSlug: "mounjaro",
    intent: "tabela-de-dose",
    title: "Tabela de doses do Mounjaro (tirzepatida) segundo a bula",
    answer:
      "Segundo a bula, Mounjaro começa com 2,5 mg uma vez por semana durante 4 semanas e passa para 5 mg. Depois, o médico pode aumentar 2,5 mg por vez, com intervalo mínimo de 4 semanas em cada dose, até o máximo de 15 mg por semana. Quem define cada mudança é o médico.",
    description: "Esquema de doses do Mounjaro (2,5 mg a 15 mg) conforme a bula: dose inicial, intervalo entre aumentos e dose máxima.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Esquema oficial de doses",
        table: {
          head: ["Dose semanal", "Quando, segundo a bula"],
          rows: [
            ["2,5 mg", "Dose inicial, durante 4 semanas (adaptação, não é dose de manutenção)"],
            ["5 mg", "A partir da 5ª semana"],
            ["7,5 mg", "Após pelo menos 4 semanas em 5 mg, se o médico indicar"],
            ["10 mg", "Após pelo menos 4 semanas em 7,5 mg, se o médico indicar"],
            ["12,5 mg", "Após pelo menos 4 semanas em 10 mg, se o médico indicar"],
            ["15 mg", "Dose máxima, após pelo menos 4 semanas em 12,5 mg"],
          ],
        },
      },
      {
        heading: "O que a tabela não decide",
        paragraphs: [
          "A tabela mostra o esquema aprovado na bula, não a sua prescrição. Muitas pessoas ficam mais tempo em uma dose, ou não chegam à dose máxima, por decisão médica. Se os efeitos colaterais incomodarem, o médico pode manter ou reduzir a dose. Nunca aumente por conta própria.",
        ],
      },
      {
        heading: "Cada caneta tem uma dose",
        paragraphs: [
          "No Brasil, a KwikPen do Mounjaro vem em apresentações de 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg e 15 mg, cada uma com 4 doses semanais. Ao mudar de dose, você muda de caneta.",
        ],
      },
    ],
    faq: [
      { q: "Qual é a dose inicial do Mounjaro?", a: "2,5 mg uma vez por semana, durante 4 semanas. É a dose de adaptação." },
      { q: "Qual é a dose máxima do Mounjaro?", a: "15 mg uma vez por semana, segundo a bula." },
      { q: "De quanto em quanto tempo a dose aumenta?", a: "Os aumentos são de 2,5 mg, com intervalo mínimo de 4 semanas em cada dose, sempre por decisão médica." },
      { q: "Preciso chegar aos 15 mg?", a: "Não necessariamente. A dose de manutenção é definida pelo médico conforme a resposta e a tolerância de cada pessoa." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "mounjaro",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Mounjaro: o que fazer segundo a bula",
    answer:
      "Se passaram até 4 dias (96 horas) do dia previsto, aplique assim que lembrar e siga o calendário normal. Se passaram mais de 4 dias, pule a dose esquecida e aplique no próximo dia programado. Nunca aplique duas doses para compensar.",
    description: "Regra da bula para dose esquecida de Mounjaro: janela de 4 dias, quando pular a dose e como voltar ao calendário.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra dos 4 dias",
        bullets: [
          "Até 96 horas de atraso: aplique a dose esquecida e mantenha o dia habitual da semana seguinte.",
          "Mais de 96 horas: não aplique. Espere o próximo dia programado e continue normalmente.",
          "Em nenhum caso aplique duas doses no mesmo dia ou com menos de 3 dias de intervalo.",
        ],
      },
      {
        heading: "Exemplo prático",
        paragraphs: [
          "Sua aplicação é na segunda-feira. Lembrou na quinta: aplique na quinta e volte a aplicar na segunda seguinte. Lembrou no sábado: pule, e aplique na segunda como de costume.",
        ],
      },
      {
        heading: "Se os esquecimentos se repetem",
        paragraphs: [
          "Um lembrete semanal resolve a maior parte dos casos. O CadaDose avisa no dia e na hora que você escolher e registra cada aplicação, para você nunca ficar na dúvida se já aplicou.",
        ],
      },
    ],
    faq: [
      { q: "Esqueci o Mounjaro por 2 dias, posso aplicar?", a: "Sim. Dentro de 4 dias (96 horas) a bula orienta aplicar assim que lembrar." },
      { q: "Esqueci por uma semana inteira, aplico dose dobrada?", a: "Não. Aplique a dose normal no próximo dia programado. Nunca dobre a dose." },
      { q: "Posso mudar o dia da semana depois de esquecer?", a: "Pode, desde que haja pelo menos 3 dias (72 horas) entre as doses. Combine com seu médico." },
    ],
    sources: [anvisa],
  },
  {
    medicationSlug: "mounjaro",
    intent: "validade-depois-de-aberta",
    title: "Validade do Mounjaro depois de aberto: 30 dias e 4 doses",
    answer:
      "Depois do primeiro uso, a caneta KwikPen do Mounjaro pode ser usada por até 30 dias, guardada na geladeira (2 °C a 8 °C) ou em temperatura ambiente até 30 °C, protegida da luz. Descarte a caneta após 30 dias ou após a 4ª dose, o que vier primeiro, mesmo que sobre líquido.",
    description: "Quanto tempo dura a caneta de Mounjaro depois de aberta, como guardar em viagem e quando descartar, conforme a bula.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação",
        table: {
          head: ["Situação", "Onde guardar", "Por quanto tempo"],
          rows: [
            ["Caneta fechada", "Geladeira, 2 °C a 8 °C, na caixa", "Até a data de validade do rótulo"],
            ["Caneta em uso", "Geladeira ou ambiente até 30 °C, longe de calor e luz", "Até 30 dias após o primeiro uso"],
            ["Viagem curta", "Fora da geladeira, abaixo de 30 °C", "Conta dentro dos 30 dias"],
            ["Congelou", "Não use", "Descarte"],
          ],
        },
      },
      {
        heading: "Pode entrar e sair da geladeira?",
        paragraphs: [
          "Sim. Segundo a fabricante, alternar entre geladeira e temperatura ambiente dentro dos 30 dias não altera a qualidade, desde que a caneta nunca ultrapasse 30 °C nem congele.",
        ],
      },
      {
        heading: "Como não perder o prazo",
        paragraphs: [
          "Anote a data do primeiro uso na caixa ou no diário. O CadaDose calcula a data limite a partir da regra da bula e avisa quando a caneta está perto de vencer.",
        ],
      },
    ],
    faq: [
      { q: "Mounjaro pode ficar fora da geladeira?", a: "Depois do primeiro uso, sim: até 30 dias abaixo de 30 °C. Antes do primeiro uso, deve ficar na geladeira." },
      { q: "Sobrou líquido depois da 4ª dose, posso usar?", a: "Não. A bula orienta descartar a caneta após 4 doses semanais." },
      { q: "A caneta ficou no calor do carro, e agora?", a: "Se a temperatura passou de 30 °C, a qualidade pode ter sido afetada. Não use sem orientação; a fabricante pode avaliar o caso." },
    ],
    sources: [anvisa, lillyStorage],
  },
];
