/** Editorial photos (generated, unbranded, no text) keyed by theme, medication and guide. */
const THEME = new Set(["como-aplicar","tabela-de-dose","esqueci-de-aplicar","validade-depois-de-aberta","onde-aplicar","efeitos-colaterais","regras-anvisa","para-que-serve","quem-nao-pode-tomar","gravidez-e-amamentacao","melhor-horario","pode-beber-alcool","interacoes-com-remedios","pressao-alta","reacao-no-local","desidratacao-e-rins","vesicula-e-pancreatite","tireoide","parar-o-tratamento","queda-de-cabelo","viagem-e-transporte","hipoglicemia","nausea-o-que-fazer","prisao-de-ventre","agulha-e-caneta","retinopatia","quanto-tempo-fica-no-corpo","alergia","precisa-de-receita","menstruacao","anticoncepcional","quantos-quilos","o-que-comer","frasco-ampola"]);
const MED = new Set(["mounjaro","ozempic","wegovy","saxenda","rybelsus"]);

export function medImage(slug: string) {
  return MED.has(slug) ? `/img/med-${slug}.jpg` : "/img/med-manipulado.jpg";
}
import { ARTICLE_IMAGES } from "./article-images";

/** One generated photo per article (`a-<med>-<intent>.webp`); falls back to the shared theme photo. */
export function themeImage(intent: string, medSlug?: string) {
  if (medSlug && ARTICLE_IMAGES.has(`a-${medSlug}-${intent}`)) return `/img/a/a-${medSlug}-${intent}.webp`;
  if (intent.startsWith("dose-")) return medSlug ? medImage(medSlug) : "/img/t-tabela-de-dose.jpg";
  return THEME.has(intent) ? `/img/t-${intent}.jpg` : medSlug ? medImage(medSlug) : "/img/hero.jpg";
}
/** One generated photo per guide (`g-<slug>.webp`); falls back to the shared guide photo. */
export function guideImage(slug: string) {
  if (ARTICLE_IMAGES.has(`g-${slug}`)) return `/img/a/g-${slug}.webp`;
  if (/app|shotsy/.test(slug)) return "/img/g-apps.jpg";
  if (/ozivy|anvisa|paraguai|natural|caneta-emagrecedora/.test(slug)) return "/img/g-marcas.jpg";
  return "/img/g-compare.jpg";
}
