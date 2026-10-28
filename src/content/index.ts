import type { Article, Intent } from "./types";
import { ptArticles } from "./pt";
import { ptManipulados } from "./pt-manipulados";

export const allArticles: Article[] = [...ptArticles, ...ptManipulados];
export const getArticle = (slug: string, intent: string) =>
  allArticles.find((a) => a.medicationSlug === slug && a.intent === (intent as Intent));
export const getArticlesForMedication = (slug: string) => allArticles.filter((a) => a.medicationSlug === slug);
