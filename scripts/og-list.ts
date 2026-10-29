// Prints the list of social cards to generate (used by scripts/gen-og.mjs).
import { allArticles } from "../src/content";
import { guias } from "../src/content/guias";
import { medications, getMedication } from "../src/lib/medications";
import { intentLabels } from "../src/content/types";
import { themeImage, guideImage, medImage } from "../src/lib/images";

const jpg = (p: string) => (p.endsWith(".webp") ? p : p); // webp is fine for sharp
const list = [
  { key: "home", title: "Mounjaro, Ozempic e Wegovy respondidos pela bula. E o diário da sua semana.", eyebrow: "Respostas pela bula ANVISA", photo: "img/hero.jpg" },
  { key: "perguntas", title: `${allArticles.length} perguntas sobre GLP-1, cada uma com a fonte ao lado.`, eyebrow: "Perguntas", photo: "img/t-para-que-serve.jpg" },
  { key: "medicamentos", title: "Os GLP-1 vendidos no Brasil, cada um pela sua bula.", eyebrow: "Medicamentos", photo: "img/g-compare.jpg" },
  { key: "calendario", title: "Calendário do seu tratamento, pela bula. Grátis, sem cadastro.", eyebrow: "Ferramenta gratuita", photo: "img/t-tabela-de-dose.jpg" },
  { key: "app", title: "A semana da dose, registrada em um toque. Os dados ficam no seu aparelho.", eyebrow: "Meu diário", photo: "img/card-2.jpg" },
  { key: "sobre", title: "Um site que só repete o que a bula diz.", eyebrow: "Sobre", photo: "img/principles.jpg" },
  ...medications.map((m) => ({ key: `med-${m.slug}`, title: `${m.name.split(" (")[0]}: ${allArticles.filter((a) => a.medicationSlug === m.slug).length} perguntas respondidas pela bula`, eyebrow: m.activeIngredient, photo: jpg(medImage(m.slug).slice(1)) })),
  ...allArticles.map((a) => ({ key: `a-${a.medicationSlug}-${a.intent}`, title: a.title, eyebrow: `${getMedication(a.medicationSlug)?.name.split(" (")[0]} · ${intentLabels[a.intent]}`, photo: themeImage(a.intent, a.medicationSlug).slice(1) })),
  ...[...new Set(allArticles.map((a) => a.intent))].map((i) => ({ key: `t-${i}`, title: `${intentLabels[i]}: o que diz a bula de cada medicamento`, eyebrow: "Tema", photo: themeImage(i).slice(1) })),
  ...guias.map((g) => ({ key: `g-${g.slug}`, title: g.title, eyebrow: "Guia", photo: guideImage(g.slug).slice(1) })),
];
console.log(JSON.stringify(list));
