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
  | "pressao-alta"
  | "reacao-no-local"
  | "desidratacao-e-rins"
  | "vesicula-e-pancreatite"
  | "tireoide"
  | "parar-o-tratamento"
  | "queda-de-cabelo"
  | "viagem-e-transporte"
  | "hipoglicemia"
  | "nausea-o-que-fazer"
  | "prisao-de-ventre"
  | "agulha-e-caneta"
  | "retinopatia"
  | "quanto-tempo-fica-no-corpo"
  | "alergia"
  | "precisa-de-receita"
  | "dose-2-5-mg" | "dose-5-mg" | "dose-7-5-mg" | "dose-10-mg" | "dose-12-5-mg" | "dose-15-mg"
  | "dose-0-25-mg" | "dose-0-5-mg" | "dose-1-mg" | "dose-1-7-mg" | "dose-2-4-mg";

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
  "reacao-no-local": "Reação no local da aplicação",
  "desidratacao-e-rins": "Desidratação e rins",
  "vesicula-e-pancreatite": "Vesícula e pancreatite",
  "tireoide": "Tireoide",
  "parar-o-tratamento": "Parar o tratamento",
  "queda-de-cabelo": "Queda de cabelo",
  "viagem-e-transporte": "Viagem e transporte",
  "hipoglicemia": "Hipoglicemia",
  "nausea-o-que-fazer": "Náusea: o que fazer",
  "prisao-de-ventre": "Prisão de ventre",
  "agulha-e-caneta": "Agulha e caneta",
  "retinopatia": "Retinopatia (olhos)",
  "quanto-tempo-fica-no-corpo": "Quanto tempo fica no corpo",
  "alergia": "Reação alérgica",
  "precisa-de-receita": "Precisa de receita?",
  "dose-2-5-mg": "2,5 mg", "dose-5-mg": "5 mg", "dose-7-5-mg": "7,5 mg", "dose-10-mg": "10 mg", "dose-12-5-mg": "12,5 mg", "dose-15-mg": "15 mg",
  "dose-0-25-mg": "0,25 mg", "dose-0-5-mg": "0,5 mg", "dose-1-mg": "1 mg", "dose-1-7-mg": "1,7 mg", "dose-2-4-mg": "2,4 mg",
};
