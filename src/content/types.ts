export type Intent =
  | "como-aplicar"
  | "tabela-de-dose"
  | "esqueci-de-aplicar"
  | "validade-depois-de-aberta"
  | "onde-aplicar"
  | "efeitos-colaterais"
  | "regras-anvisa"
  | "para-que-serve"
  | "quem-nao-pode-tomar"
  | "gravidez-e-amamentacao"
  | "melhor-horario"
  | "pode-beber-alcool"
  | "interacoes-com-remedios"
  | "pressao-alta";

export interface Section {
  heading: string;
  /** Paragraphs (plain text). */
  paragraphs?: string[];
  /** Ordered steps or bullet points. */
  steps?: string[];
  bullets?: string[];
  /** Simple table: header row + rows. */
  table?: { head: string[]; rows: string[][] };
}

export interface Article {
  medicationSlug: string;
  intent: Intent;
  title: string;
  /** The two-line answer shown first (what AI assistants quote). */
  answer: string;
  description: string;
  updated: string; // ISO date
  reviewed: boolean;
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
}

export const intentLabels: Record<Intent, string> = {
  "como-aplicar": "Como aplicar",
  "tabela-de-dose": "Tabela de doses (bula)",
  "esqueci-de-aplicar": "Esqueci de aplicar",
  "validade-depois-de-aberta": "Validade depois de aberta",
  "onde-aplicar": "Onde aplicar",
  "efeitos-colaterais": "Efeitos colaterais",
  "regras-anvisa": "Regras da ANVISA",
  "para-que-serve": "Para que serve",
  "quem-nao-pode-tomar": "Quem não pode tomar",
  "gravidez-e-amamentacao": "Gravidez e amamentação",
  "melhor-horario": "Melhor horário",
  "pode-beber-alcool": "Pode beber álcool?",
  "interacoes-com-remedios": "Interações com remédios",
  "pressao-alta": "Pressão alta",
};
