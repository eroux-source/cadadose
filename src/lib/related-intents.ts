import type { Intent } from "@/content/types";

const DOSES_MJ: Intent[] = ["dose-2-5-mg", "dose-5-mg", "dose-7-5-mg", "dose-10-mg", "dose-12-5-mg", "dose-15-mg"];
const DOSES_SEMA: Intent[] = ["dose-0-25-mg", "dose-0-5-mg", "dose-1-mg", "dose-1-7-mg", "dose-2-4-mg"];
const ALL_DOSES = [...DOSES_MJ, ...DOSES_SEMA];

/**
 * Which questions a reader of a given page is likely to open next (same medication).
 * Drives the "Leia também" block on every article, so the strongest pages
 * (validade, tabela de dose) receive links from the whole cluster.
 */
const MAP: Partial<Record<Intent, Intent[]>> = {
  "validade-depois-de-aberta": ["viagem-e-transporte", "esqueci-de-aplicar", "agulha-e-caneta", "tabela-de-dose", "frasco-ampola"],
  "tabela-de-dose": [...ALL_DOSES, "validade-depois-de-aberta", "esqueci-de-aplicar", "quantos-quilos"],
  "esqueci-de-aplicar": ["validade-depois-de-aberta", "tabela-de-dose", "melhor-horario", "quanto-tempo-fica-no-corpo"],
  "como-aplicar": ["onde-aplicar", "agulha-e-caneta", "melhor-horario", "reacao-no-local", "validade-depois-de-aberta"],
  "onde-aplicar": ["como-aplicar", "reacao-no-local", "agulha-e-caneta"],
  "melhor-horario": ["como-aplicar", "esqueci-de-aplicar", "tabela-de-dose", "pode-beber-alcool"],
  "efeitos-colaterais": ["nausea-o-que-fazer", "prisao-de-ventre", "queda-de-cabelo", "hipoglicemia", "reacao-no-local"],
  "nausea-o-que-fazer": ["efeitos-colaterais", "o-que-comer", "tabela-de-dose", "desidratacao-e-rins"],
  "prisao-de-ventre": ["efeitos-colaterais", "o-que-comer", "desidratacao-e-rins"],
  "quantos-quilos": ["tabela-de-dose", "o-que-comer", "parar-o-tratamento", "para-que-serve"],
  "para-que-serve": ["quem-nao-pode-tomar", "tabela-de-dose", "precisa-de-receita", "quantos-quilos"],
  "quem-nao-pode-tomar": ["tireoide", "vesicula-e-pancreatite", "gravidez-e-amamentacao", "interacoes-com-remedios"],
  "gravidez-e-amamentacao": ["anticoncepcional", "menstruacao", "quem-nao-pode-tomar", "parar-o-tratamento"],
  "anticoncepcional": ["gravidez-e-amamentacao", "menstruacao", "interacoes-com-remedios"],
  "menstruacao": ["anticoncepcional", "gravidez-e-amamentacao", "efeitos-colaterais"],
  "precisa-de-receita": ["regras-anvisa", "para-que-serve", "tabela-de-dose"],
  "regras-anvisa": ["precisa-de-receita", "frasco-ampola"],
  "viagem-e-transporte": ["validade-depois-de-aberta", "esqueci-de-aplicar", "agulha-e-caneta"],
  "agulha-e-caneta": ["como-aplicar", "validade-depois-de-aberta", "reacao-no-local"],
  "parar-o-tratamento": ["quanto-tempo-fica-no-corpo", "quantos-quilos", "efeitos-colaterais"],
  "quanto-tempo-fica-no-corpo": ["parar-o-tratamento", "esqueci-de-aplicar", "pode-beber-alcool"],
  "pode-beber-alcool": ["hipoglicemia", "nausea-o-que-fazer", "melhor-horario"],
  "o-que-comer": ["nausea-o-que-fazer", "prisao-de-ventre", "quantos-quilos"],
  "frasco-ampola": ["validade-depois-de-aberta", "como-aplicar", "regras-anvisa"],
};

export function relatedIntents(intent: Intent): Intent[] {
  if (intent.startsWith("dose-")) return ["tabela-de-dose", "validade-depois-de-aberta", "esqueci-de-aplicar", "nausea-o-que-fazer", "quantos-quilos"];
  return MAP[intent] ?? ["validade-depois-de-aberta", "tabela-de-dose", "esqueci-de-aplicar", "efeitos-colaterais"];
}
