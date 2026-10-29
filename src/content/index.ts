import type { Article, Intent } from "./types";
import { ptArticles } from "./pt";
import { ptManipulados } from "./pt-manipulados";
import { ptWave3 } from "./pt-wave3";
import { ptWave4 } from "./pt-wave4";
import { ptWave5 } from "./pt-wave5";
import { ptWave6 } from "./pt-wave6";

export const allArticles: Article[] = [...ptArticles, ...ptWave3, ...ptWave4, ...ptWave5, ...ptWave6, ...ptManipulados];
export const getArticle = (slug: string, intent: string) =>
  allArticles.find((a) => a.medicationSlug === slug && a.intent === (intent as Intent));
export const getArticlesForMedication = (slug: string) => allArticles.filter((a) => a.medicationSlug === slug);
