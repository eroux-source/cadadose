export type Intent =
  | "como-aplicar"
  | "tabela-de-dose"
  | "esqueci-de-aplicar"
  | "validade-depois-de-aberta"
  | "onde-aplicar"
  | "efeitos-colaterais";

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
};
