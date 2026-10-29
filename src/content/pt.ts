import type { Article } from "./types";

/**
 * EVERY fact below comes from the Brazilian patient leaflet (bula) named in `sources`.
 * Nothing is added from memory. When the leaflet does not say something, the page says so
 * and sends the reader to the leaflet / their doctor. A health professional still reviews
 * each page before `reviewed` is set to true.
 */

const mounjaroBula = {
  label: "Bula do paciente Mounjaro® (tirzepatida), Eli Lilly do Brasil — registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
  url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
};
const lillyDoseEsquecida = {
  label: "Lilly Medical Brasil — Esquecimento de dose (Mounjaro), revisado em 17/03/2025",
  url: "https://medical.lilly.com/br/products/respostas/esquecimento-de-dose-219658",
};
const ozempicBula025 = {
  label: "Bula do paciente Ozempic® 0,25 mg / 0,5 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_1-5mL_0-25mg_0-5mg_Bula_Paciente.pdf",
};
const ozempicBula1 = {
  label: "Bula do paciente Ozempic® 1 mg, Novo Nordisk — registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
};
const wegovyBula = {
  label: "Bula do paciente Wegovy® (semaglutida), Novo Nordisk — registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
  url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
};
const anvisaBulario = { label: "Bulário Eletrônico — ANVISA (versão mais recente)", url: "https://consultas.anvisa.gov.br/#/bulario/" };

export const ptArticles: Article[] = [
  // ───────────────────────── MOUNJARO ─────────────────────────
  {
    medicationSlug: "mounjaro",
    intent: "como-aplicar",
    title: "Como aplicar Mounjaro (tirzepatida) no Brasil: o que diz a bula",
    answer:
      "Mounjaro é aplicado por via subcutânea, uma vez por semana, no abdômen, na coxa ou no braço, alternando o local a cada dose. No Brasil, vem em canetas de uso único de 0,5 mL (4 por caixa): cada caneta é uma dose. A bula versão 05/2026 também registra o frasco-ampola de dose única (0,5 mL), para aplicação com seringa e agulha novas a cada dose, sem fracionar nem guardar o frasco aberto. Pode ser aplicado em qualquer horário, com ou sem alimentos. O passo a passo da caneta está nas Instruções de Uso que acompanham a embalagem.",
    description: "O que a bula brasileira do Mounjaro diz sobre a aplicação: via, locais, rodízio, horário, uso com insulina e mudança do dia da semana.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "O que a bula estabelece",
        bullets: [
          "Via subcutânea (debaixo da pele), uma vez por semana.",
          "Locais: abdômen, coxa ou braço. Alterne o local a cada dose.",
          "Qualquer horário do dia, com ou sem alimentos.",
          "Apresentação no Brasil: solução injetável em caneta de uso único de 0,5 mL, 4 canetas por caixa, nas doses de 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg e 15 mg.",
        ],
      },
      {
        heading: "Se você também usa insulina",
        paragraphs: [
          "A bula orienta aplicar Mounjaro e insulina em injeções separadas, nunca misturadas. Pode ser na mesma região do corpo, mas as aplicações não devem ficar próximas uma da outra.",
        ],
      },
      {
        heading: "Mudar o dia da semana",
        paragraphs: ["É permitido, desde que passem pelo menos 3 dias (72 horas) entre uma dose e a seguinte."],
      },
      {
        heading: "O passo a passo da caneta",
        paragraphs: [
          "A bula do paciente remete às Instruções de Uso que vêm dentro da caixa para o manuseio da caneta. Siga esse folheto e a orientação de quem te ensinou a aplicar. Esta página não reproduz etapas que não estejam na bula.",
        ],
      },
    ],
    faq: [
      { q: "Mounjaro pode ser aplicado em qualquer horário?", a: "Sim. Segundo a bula, em qualquer horário do dia, com ou sem alimentos, uma vez por semana." },
      { q: "A caneta do Mounjaro no Brasil tem várias doses?", a: "Não. No Brasil as apresentações registradas são a caneta de uso único de 0,5 mL (4 por caixa) e o frasco-ampola de dose única. Cada caneta ou frasco é uma dose." },
      { q: "Posso aplicar Mounjaro e insulina no mesmo lugar?", a: "Na mesma região sim, mas em injeções separadas e não próximas uma da outra, segundo a bula." },
      { q: "Posso mudar o dia da aplicação?", a: "Sim, desde que passem pelo menos 72 horas entre as doses." },
    ],
    sources: [mounjaroBula, anvisaBulario],
  },
  {
    medicationSlug: "mounjaro",
    intent: "tabela-de-dose",
    title: "Tabela de doses do Mounjaro (tirzepatida) segundo a bula brasileira",
    answer:
      "Segundo a bula, Mounjaro começa com 2,5 mg uma vez por semana. Após 4 semanas, passa para 5 mg por semana. Aumentos seguintes são de 2,5 mg, cada um após pelo menos 4 semanas na dose atual. A dose máxima é 15 mg uma vez por semana. Quem define cada mudança é o médico.",
    description: "Esquema de doses do Mounjaro no Brasil, de 2,5 mg a 15 mg, conforme a bula: dose inicial, intervalo entre aumentos e dose máxima.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Esquema da bula",
        table: {
          head: ["Dose semanal", "Regra da bula"],
          rows: [
            ["2,5 mg", "Dose inicial, por 4 semanas"],
            ["5 mg", "Após as 4 semanas iniciais"],
            ["7,5 mg · 10 mg · 12,5 mg", "Aumentos de 2,5 mg, cada um após pelo menos 4 semanas na dose atual, por decisão médica"],
            ["15 mg", "Dose máxima: \"A dose máxima de MOUNJARO é 15 mg uma vez por semana.\""],
          ],
        },
      },
      {
        heading: "Apresentações no Brasil",
        paragraphs: ["Canetas de uso único de 0,5 mL com 2,5 mg, 5 mg, 7,5 mg, 10 mg, 12,5 mg ou 15 mg de tirzepatida, 4 canetas por caixa. Ao mudar de dose, muda-se de caixa."],
      },
      {
        heading: "O que a tabela não decide",
        paragraphs: ["A tabela é o esquema aprovado, não a sua prescrição. Manter uma dose por mais tempo, ou não chegar à dose máxima, é decisão do médico. Não altere a dose por conta própria."],
      },
    ],
    faq: [
      { q: "Qual é a dose inicial do Mounjaro?", a: "2,5 mg uma vez por semana, por 4 semanas, segundo a bula." },
      { q: "Qual é a dose máxima do Mounjaro?", a: "15 mg uma vez por semana." },
      { q: "De quanto em quanto tempo a dose aumenta?", a: "Em passos de 2,5 mg, cada um após pelo menos 4 semanas na dose atual, sempre por decisão médica." },
    ],
    sources: [mounjaroBula, anvisaBulario],
  },
  {
    medicationSlug: "mounjaro",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Mounjaro: o que fazer segundo a bula",
    answer:
      "Se passaram até 4 dias (96 horas) do dia previsto, aplique a dose esquecida o mais rápido possível e retome o esquema semanal normal. Se passaram mais de 4 dias, pule a dose esquecida e aplique no próximo dia programado. A bula usa a expressão \"dentro de 4 dias (96 horas)\".",
    description: "Regra da bula brasileira para dose esquecida de Mounjaro: janela de 96 horas, quando pular a dose e como voltar ao calendário.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra das 96 horas",
        bullets: [
          "Até 4 dias (96 horas) de atraso: aplique assim que possível e mantenha o dia habitual na semana seguinte.",
          "Mais de 4 dias: a dose esquecida \"deve ser ignorada\"; aplique a próxima no dia programado.",
        ],
      },
      {
        heading: "Mudar o dia da semana",
        paragraphs: ["Permitido quando o intervalo entre as doses for de pelo menos 3 dias (72 horas)."],
      },
      {
        heading: "Várias doses seguidas esquecidas",
        paragraphs: [
          "A bula do paciente não traz regra para esse caso. O material da Lilly para profissionais descreve como os estudos clínicos lidaram com interrupções, mas isso é decisão médica: fale com seu médico antes de retomar.",
        ],
      },
    ],
    faq: [
      { q: "Esqueci o Mounjaro por 2 dias, posso aplicar?", a: "Sim. Dentro de 96 horas a bula orienta aplicar o mais rápido possível." },
      { q: "Esqueci por mais de 4 dias, aplico dose dobrada?", a: "Não. A bula orienta ignorar a dose esquecida e aplicar a próxima no dia programado." },
    ],
    sources: [mounjaroBula, lillyDoseEsquecida],
  },
  {
    medicationSlug: "mounjaro",
    intent: "validade-depois-de-aberta",
    title: "Validade do Mounjaro fora da geladeira: 21 dias, segundo a bula",
    answer:
      "A caneta de Mounjaro deve ficar na geladeira, entre 2 °C e 8 °C, na embalagem original, e não pode ser congelada. Fora da geladeira, a bula permite manter a caneta em temperatura abaixo de 30 °C por até 21 dias. Como a caneta brasileira é de uso único, não existe \"depois de aberta\": cada caneta é descartada após a aplicação.",
    description: "Conservação do Mounjaro no Brasil segundo a bula: geladeira, até 21 dias fora de refrigeração abaixo de 30 °C, e caneta de uso único.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação da bula",
        table: {
          head: ["Situação", "Regra"],
          rows: [
            ["Na geladeira", "2 °C a 8 °C, na embalagem original, protegida da luz"],
            ["Fora da geladeira", "\"pode ser armazenado fora de refrigeração a temperaturas abaixo de 30°C por até 21 dias\""],
            ["Congelou", "Não congelar; não use"],
            ["Após a aplicação", "Caneta de uso único: descarte"],
          ],
        },
      },
      {
        heading: "Na prática",
        paragraphs: ["Se tirou uma caixa da geladeira (viagem, por exemplo), anote a data: as canetas devem ser usadas em até 21 dias, abaixo de 30 °C. O diário CadaDose calcula essa data a partir da regra da bula."],
      },
    ],
    faq: [
      { q: "Mounjaro pode ficar fora da geladeira?", a: "Sim, abaixo de 30 °C, por até 21 dias, segundo a bula." },
      { q: "A caneta do Mounjaro vence depois de aberta?", a: "No Brasil a caneta é de uso único: ela é usada uma vez e descartada." },
      { q: "Posso usar Mounjaro que congelou?", a: "Não. A bula orienta não congelar." },
    ],
    sources: [mounjaroBula, anvisaBulario],
  },
  {
    medicationSlug: "mounjaro",
    intent: "efeitos-colaterais",
    title: "Efeitos colaterais do Mounjaro (tirzepatida) segundo a bula brasileira",
    answer:
      "Os efeitos muito comuns do Mounjaro (mais de 10% dos pacientes) são náusea e diarreia, e hipoglicemia quando usado com insulina basal ou sulfonilureia. Os comuns (1% a 10%) incluem dor abdominal, vômito, indigestão, prisão de ventre, distensão abdominal, arrotos, gases, refluxo, doença aguda da vesícula biliar, cansaço, reação no local da aplicação, hipersensibilidade e redução do apetite.",
    description: "Efeitos colaterais do Mounjaro por frequência, como listados na bula brasileira, e os avisos da bula sobre pancreatite, hipoglicemia, desidratação, vesícula, retinopatia e alergia.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Por frequência, como na bula",
        table: {
          head: ["Frequência", "Reações listadas"],
          rows: [
            ["Muito comum (> 10%)", "Náusea; diarreia; hipoglicemia com insulina basal ou sulfonilureia (com ou sem metformina / inibidor de SGLT-2)"],
            ["Comum (1% a 10%)", "Dor abdominal, vômito, dispepsia, prisão de ventre, distensão abdominal, arrotos, flatulência, refluxo; doença aguda da vesícula biliar; cansaço; reação no local da aplicação; reação de hipersensibilidade; redução do apetite; hipoglicemia com metformina + inibidor de SGLT-2"],
            ["Incomum (0,1% a 1%)", "Alteração do paladar (disgeusia); hipoglicemia com metformina isolada; disestesia"],
            ["Rara (0,01% a 0,1%)", "Reação anafilática; angioedema"],
          ],
        },
        paragraphs: ["A bula também relata redução da pressão arterial, aumento da frequência cardíaca e aumento de enzimas pancreáticas."],
      },
      {
        heading: "Avisos da bula: informe seu médico",
        bullets: [
          "Pancreatite: se houver suspeita, interrompa o uso e informe o médico. \"Se houver a confirmação de pancreatite, MOUNJARO não deverá ser reiniciado.\"",
          "Hipoglicemia: \"Informe ao seu médico se fizer uso de sulfonilureia ou insulina\", pois as doses podem precisar de ajuste.",
          "Desidratação: vômito, náusea e diarreia podem desidratar e reduzir a função dos rins. \"É importante aumentar a ingestão de líquidos para evitar a desidratação.\"",
          "Vesícula: \"Informe ao seu médico caso tenha alguma doença da vesícula biliar.\"",
          "Retinopatia: \"Informe ao seu médico caso tenha retinopatia diabética.\"",
          "Alergia: em caso de reação de hipersensibilidade, \"interrompa o uso de MOUNJARO e informe ao seu médico.\"",
        ],
      },
      {
        heading: "O que anotar para a consulta",
        paragraphs: ["Dia, intensidade e relação com a aplicação e com a dose. O diário CadaDose registra isso para você mostrar ao médico."],
      },
    ],
    faq: [
      { q: "Quais são os efeitos colaterais mais comuns do Mounjaro?", a: "Náusea e diarreia, listados como muito comuns (mais de 10% dos pacientes) na bula." },
      { q: "Mounjaro causa hipoglicemia?", a: "Segundo a bula, a hipoglicemia é muito comum quando Mounjaro é usado com insulina basal ou sulfonilureia, e menos frequente nas outras combinações." },
      { q: "O que fazer se suspeitar de pancreatite?", a: "A bula orienta interromper o uso e informar o médico; se confirmada, o medicamento não deve ser reiniciado." },
    ],
    sources: [mounjaroBula, anvisaBulario],
  },
  {
    medicationSlug: "mounjaro",
    intent: "onde-aplicar",
    title: "Onde aplicar Mounjaro: os locais indicados na bula",
    answer:
      "A bula brasileira do Mounjaro indica três locais de aplicação subcutânea: abdômen, coxa ou braço, com rodízio do local a cada dose. Se você também usa insulina, as duas injeções podem ser na mesma região, mas separadas e não próximas uma da outra.",
    description: "Locais de aplicação do Mounjaro conforme a bula brasileira, rodízio e regra para quem usa insulina.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Os três locais da bula",
        bullets: ["Abdômen", "Coxa", "Braço"],
        paragraphs: ["\"Alterne o local da aplicação a cada dose.\" A bula não detalha distâncias ou pontos específicos; para isso, siga as Instruções de Uso da embalagem e a orientação do seu médico."],
      },
      {
        heading: "Com insulina",
        paragraphs: ["Injeções separadas, nunca misturadas. Mesma região permitida, mas sem ficarem próximas."],
      },
      {
        heading: "Rodízio no diário",
        paragraphs: ["O CadaDose registra o local de cada aplicação e sugere o próximo, para que o rodízio aconteça sem esforço."],
      },
    ],
    faq: [
      { q: "Posso aplicar Mounjaro sempre na barriga?", a: "A bula pede rodízio do local a cada dose. Pergunte ao seu médico como alternar os pontos dentro da mesma região." },
      { q: "Mounjaro pode ser aplicado no braço sozinho?", a: "O braço é um dos locais indicados na bula. A técnica de aplicação deve seguir as Instruções de Uso da embalagem." },
    ],
    sources: [mounjaroBula],
  },

  // ───────────────────────── OZEMPIC ─────────────────────────
  {
    medicationSlug: "ozempic",
    intent: "como-aplicar",
    title: "Como aplicar Ozempic (semaglutida): passo a passo da bula brasileira",
    answer:
      "Ozempic é aplicado uma vez por semana, debaixo da pele, na parte da frente das coxas, no abdômen ou na parte superior do braço. Antes da primeira dose de cada caneta nova, faz-se o teste de fluxo até aparecer uma gota na agulha. Depois, gira-se o seletor até a dose prescrita, insere-se a agulha e mantém-se o botão pressionado contando lentamente até 6.",
    description: "Como aplicar Ozempic conforme a bula do paciente: teste de fluxo, seleção da dose, contagem até 6, locais de aplicação e quantas doses tem a caneta.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Passo a passo da bula",
        steps: [
          "Coloque uma agulha nova e remova as duas tampas da agulha.",
          "Só na primeira vez que usar cada caneta nova: gire o seletor de dose até o símbolo de teste de fluxo, segure a caneta com a agulha para cima e pressione o botão até o contador voltar a 0. Deve aparecer uma gota na ponta da agulha. Se não aparecer, repita até 6 vezes; se ainda não aparecer, troque a agulha; se mesmo assim não aparecer, descarte a caneta.",
          "Gire o seletor até o contador mostrar a dose prescrita (0,25 mg ou 0,5 mg na caneta de 0,25/0,5; 1 mg na caneta de 1 mg).",
          "Insira a agulha na pele e pressione o botão até o contador voltar a 0. \"Conte lentamente até 6 enquanto mantém o botão de aplicação pressionado.\"",
          "Retire a agulha e descarte-a.",
        ],
      },
      {
        heading: "Locais e horário",
        bullets: ["Parte da frente das coxas, abdômen ou parte superior do braço.", "Qualquer horário do dia, com ou sem alimentos."],
      },
      {
        heading: "Quantas doses tem a caneta",
        bullets: [
          "Caneta de 0,25 mg / 0,5 mg: 1,5 mL com 2 mg de semaglutida no total; libera doses de 0,25 mg ou 0,5 mg.",
          "Caneta de 1 mg: \"Um sistema de aplicação não utilizado contém 4 doses de 1 mg.\"",
        ],
      },
      {
        heading: "Mudar o dia da semana",
        paragraphs: ["Permitido se tiverem passado pelo menos 3 dias desde a última aplicação."],
      },
    ],
    faq: [
      { q: "Por que contar até 6?", a: "É a instrução da bula para garantir que a dose completa seja liberada antes de retirar a agulha." },
      { q: "O teste de fluxo é toda semana?", a: "Não. Apenas na primeira vez que usar cada caneta nova." },
      { q: "A caneta de 1 mg tem quantas doses?", a: "4 doses de 1 mg, segundo a bula." },
      { q: "Ozempic pode ser aplicado em qualquer horário?", a: "Sim, com ou sem alimentos, uma vez por semana." },
    ],
    sources: [ozempicBula025, ozempicBula1, anvisaBulario],
  },
  {
    medicationSlug: "ozempic",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Ozempic: o que fazer segundo a bula",
    answer:
      "Se não passaram mais de 5 dias do dia em que deveria ter aplicado, use assim que se lembrar e aplique a próxima dose no dia planejado. Se passaram mais de 5 dias, pule a dose esquecida e aplique a próxima no dia planejado. A bula é clara: não aplique uma dose extra para compensar.",
    description: "Regra da bula brasileira para dose esquecida de Ozempic: janela de 5 dias, quando pular e por que nunca dobrar a dose.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra dos 5 dias",
        bullets: [
          "\"Se não se passaram mais de 5 dias que você deveria ter utilizado Ozempic®, use assim que se lembrar.\"",
          "\"Se passaram mais de 5 dias que você deveria ter utilizado Ozempic®, pule a dose esquecida.\"",
          "Nos dois casos, a próxima dose é no dia planejado. Não aplique dose extra para compensar.",
        ],
      },
      {
        heading: "Mudar o dia da aplicação",
        paragraphs: ["Permitido, desde que tenham passado pelo menos 3 dias desde a última dose."],
      },
    ],
    faq: [
      { q: "Esqueci o Ozempic por 3 dias, posso aplicar?", a: "Sim: dentro de 5 dias a bula orienta aplicar assim que se lembrar." },
      { q: "Esqueci por uma semana, aplico dose dobrada?", a: "Não. Pule a dose esquecida e aplique a próxima no dia planejado." },
    ],
    sources: [ozempicBula025, ozempicBula1],
  },
  {
    medicationSlug: "ozempic",
    intent: "validade-depois-de-aberta",
    title: "Validade do Ozempic depois de aberto: 6 semanas, segundo a bula",
    answer:
      "Depois do primeiro uso, a caneta de Ozempic pode ser mantida por 6 semanas, em temperatura abaixo de 30 °C ou na geladeira (2 °C a 8 °C). Depois das 6 semanas, descarte mesmo que sobre medicamento. Antes do primeiro uso, a caneta fica na geladeira, com a tampa, e nunca deve ser congelada.",
    description: "Conservação do Ozempic conforme a bula brasileira: 6 semanas após aberto, abaixo de 30 °C ou na geladeira; geladeira antes do uso; não congelar.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação da bula",
        table: {
          head: ["Situação", "Regra"],
          rows: [
            ["Antes do primeiro uso", "\"Armazenar em geladeira (de 2 °C a 8 °C)\", longe do congelador, com a tampa para proteger da luz"],
            ["Depois do primeiro uso", "\"Após aberto, válido por 6 semanas\", abaixo de 30 °C ou na geladeira"],
            ["Congelou", "\"Não congelar e não utilizar se tiver sido congelado.\""],
          ],
        },
      },
      {
        heading: "Anote a data do primeiro uso",
        paragraphs: ["O CadaDose calcula as 6 semanas a partir da data que você informar e avisa quando a caneta está perto do limite."],
      },
    ],
    faq: [
      { q: "Ozempic pode ficar fora da geladeira?", a: "Depois do primeiro uso, sim: abaixo de 30 °C, dentro das 6 semanas. Antes do primeiro uso, geladeira." },
      { q: "Sobrou medicamento depois de 6 semanas, posso usar?", a: "Não. A bula orienta descartar após 6 semanas." },
    ],
    sources: [ozempicBula025, ozempicBula1],
  },

  // ───────────────────────── WEGOVY ─────────────────────────
  {
    medicationSlug: "wegovy",
    intent: "como-aplicar",
    title: "Como aplicar Wegovy (semaglutida): passo a passo da bula brasileira",
    answer:
      "Wegovy é aplicado uma vez por semana, debaixo da pele, na parte superior do braço, na parte da frente das coxas ou no abdômen, a cerca de 5 cm do umbigo. Com uma caneta nova, faz-se o teste de fluxo até aparecer uma gota. Depois, gira-se o seletor até a dose, insere-se a agulha e mantém-se o botão pressionado contando lentamente até 6. Cada caneta libera 4 doses de uma mesma concentração.",
    description: "Como aplicar Wegovy conforme a bula do paciente: teste de fluxo, dose, contagem até 6, locais (5 cm do umbigo), esquema de doses e quantas doses tem a caneta.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Passo a passo da bula",
        steps: [
          "Use uma agulha nova a cada aplicação e remova as duas tampas. Verifique pela janela que a solução está límpida e incolor.",
          "Só com uma caneta nova: gire o seletor até o símbolo de teste de fluxo, segure com a agulha para cima e pressione o botão até o contador voltar a 0 mg. \"Uma gota de Wegovy® deve aparecer na ponta da agulha.\" Se não aparecer, repita o teste no máximo duas vezes (\"Isso deve ser feito apenas duas vezes\"), troque a agulha e verifique o fluxo mais uma vez; se ainda não aparecer, não use a caneta.",
          "Gire o seletor até o contador mostrar a dose prescrita.",
          "Insira a agulha na pele, mantendo o contador visível. \"Continue pressionando o botão de aplicação com a agulha em sua pele e conte lentamente até 6.\"",
          "Só depois da contagem retire a agulha, tampe e descarte com segurança.",
        ],
      },
      {
        heading: "Locais",
        bullets: ["Parte superior do braço, parte da frente das coxas ou abdômen.", "No abdômen, \"mantenha uma distância de 5 cm do seu umbigo\".", "Evite o mesmo ponto da última aplicação; a mesma região pode ser reutilizada."],
      },
      {
        heading: "Esquema de doses da bula (controle de peso, adultos)",
        table: {
          head: ["Semanas", "Dose semanal"],
          rows: [
            ["1 a 4", "0,25 mg"],
            ["5 a 8", "0,5 mg"],
            ["9 a 12", "1 mg"],
            ["13 a 16", "1,7 mg"],
            ["A partir da 17", "2,4 mg"],
          ],
        },
        paragraphs: ["A bula prevê, a partir da semana 21 e em condições específicas definidas pelo médico, a possibilidade de 7,2 mg por semana (três aplicações de 2,4 mg). Isso é decisão médica."],
      },
      {
        heading: "Quantas doses tem a caneta",
        paragraphs: ["Cada caneta libera 4 doses de uma mesma concentração (0,25, 0,5, 1, 1,7 ou 2,4 mg). \"Cada embalagem contém 1 sistema de aplicação preenchido e 4 agulhas descartáveis NovoFine® Plus.\""],
      },
    ],
    faq: [
      { q: "Quantas vezes repito o teste de fluxo do Wegovy?", a: "No máximo duas vezes, segundo a bula; depois troque a agulha e verifique o fluxo mais uma vez. Se ainda não sair gota, não use a caneta." },
      { q: "Por que contar até 6?", a: "É a instrução da bula para garantir a dose completa antes de retirar a agulha." },
      { q: "Wegovy tem quantas doses por caneta?", a: "4 doses de uma mesma concentração." },
    ],
    sources: [wegovyBula, anvisaBulario],
  },
  {
    medicationSlug: "wegovy",
    intent: "esqueci-de-aplicar",
    title: "Esqueci de aplicar Wegovy: o que fazer segundo a bula",
    answer:
      "Se passaram 5 dias ou menos desde o dia em que deveria ter aplicado, use assim que se lembrar e retome o dia habitual. Se passaram mais de 5 dias, pule a dose esquecida e aplique a próxima no dia habitual. Não aplique dose extra para compensar. Se mais doses forem esquecidas, procure seu médico para avaliar se é preciso reiniciar o escalonamento.",
    description: "Regra da bula brasileira para dose esquecida de Wegovy: janela de 5 dias, nunca dobrar a dose, e o que fazer quando várias doses foram esquecidas.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "A regra dos 5 dias",
        bullets: [
          "\"Se passaram 5 dias ou menos desde que você deveria ter usado Wegovy®, use-o assim que se lembrar.\"",
          "\"Se passaram mais de 5 dias que você deveria ter usado Wegovy®, pule a dose esquecida.\"",
          "\"Não administre uma dose extra para compensar uma dose esquecida.\"",
        ],
      },
      {
        heading: "Várias doses esquecidas",
        paragraphs: ["\"Se mais doses forem esquecidas, procure seu médico para avaliar a necessidade de reinício do escalonamento.\""],
      },
    ],
    faq: [
      { q: "Esqueci o Wegovy por 4 dias, aplico?", a: "Sim: dentro de 5 dias a bula orienta aplicar assim que se lembrar." },
      { q: "Esqueci duas semanas, volto na mesma dose?", a: "A bula orienta procurar o médico quando mais doses são esquecidas, para avaliar o reinício do escalonamento." },
    ],
    sources: [wegovyBula],
  },
  {
    medicationSlug: "wegovy",
    intent: "validade-depois-de-aberta",
    title: "Validade do Wegovy depois de aberto: 6 semanas, segundo a bula",
    answer:
      "Depois do primeiro uso, a caneta de Wegovy pode ser mantida por 6 semanas, abaixo de 30 °C ou na geladeira. Antes do primeiro uso, deve ficar na geladeira entre 2 °C e 8 °C, com a tampa, longe do congelador. Nunca congele nem use Wegovy que tenha sido congelado.",
    description: "Conservação do Wegovy conforme a bula brasileira: 6 semanas após o primeiro uso, geladeira antes do uso, não congelar.",
    updated: "2026-10-28",
    reviewed: false,
    sections: [
      {
        heading: "Regras de conservação da bula",
        table: {
          head: ["Situação", "Regra"],
          rows: [
            ["Antes do primeiro uso", "\"Armazenar em geladeira (de 2 ºC a 8 °C)\", longe do congelador, com a tampa"],
            ["Depois do primeiro uso", "\"Você pode manter o sistema de aplicação por 6 semanas quando armazenado abaixo de 30 ºC ou em geladeira.\""],
            ["Congelou", "\"Não congelar e não utilizar Wegovy® se tiver sido congelado.\""],
          ],
        },
      },
      {
        heading: "Na prática",
        paragraphs: ["Uma caneta de 4 doses semanais termina em 4 semanas, dentro das 6 semanas. Anote a data do primeiro uso; o CadaDose calcula o limite e avisa."],
      },
    ],
    faq: [
      { q: "Wegovy pode ficar fora da geladeira?", a: "Depois do primeiro uso, sim: abaixo de 30 °C, por até 6 semanas." },
      { q: "Sobrou medicamento depois da 4ª dose, posso usar?", a: "A bula estabelece 6 semanas após o primeiro uso como limite. Siga a bula e a orientação do seu médico." },
    ],
    sources: [wegovyBula],
  },
];
