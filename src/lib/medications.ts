/**
 * Medication catalog used by the tracker and the content pages.
 *
 * IMPORTANT: every number here comes from the product leaflet (bula / prospecto) and
 * must be checked against the current ANVISA / ANMAT version by a health professional
 * before launch. `reviewed` stays false until that check is done. The tracker never
 * computes or recommends a dose: it only stores what the prescription says and applies
 * the leaflet's storage rule to the date the pen was opened.
 */
export type MedForm = "pen" | "vial";

export interface Medication {
  slug: string;
  name: string;
  activeIngredient: string;
  form: MedForm;
  /** "weekly" | "daily" */
  frequency: "weekly" | "daily";
  /** Label dose steps in mg, informational only (shown as the official titration table). */
  doseStepsMg: number[];
  /** Minimum weeks between dose increases per leaflet (informational). */
  titrationWeeks: number | null;
  /** Doses contained in one multi-dose pen (null for vials). */
  dosesPerPen: number | null;
  /** Days a pen/vial can be used after first use per leaflet (null = set by pharmacy label). */
  daysAfterOpening: number | null;
  /** Max storage temperature after opening in °C (informational). */
  maxTempC: number | null;
  /** Missed-dose window in hours per leaflet (take if within; otherwise skip). */
  missedDoseWindowHours: number | null;
  reviewed: boolean;
  sources: { label: string; url: string }[];
}

export const medications: Medication[] = [
  {
    slug: "mounjaro",
    name: "Mounjaro (tirzepatida)",
    activeIngredient: "tirzepatida",
    form: "pen",
    frequency: "weekly",
    doseStepsMg: [2.5, 5, 7.5, 10, 12.5, 15],
    titrationWeeks: 4,
    dosesPerPen: 4,
    daysAfterOpening: 30,
    maxTempC: 30,
    missedDoseWindowHours: 96,
    reviewed: false,
    sources: [
      { label: "Bula Mounjaro — Bulário Eletrônico ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" },
      { label: "Lilly — armazenamento da KwikPen", url: "https://medical.lilly.com/es/products/answers/c-mo-se-debe-almacenar-mounjaro-tirzepatida-kwikpen-316116" },
    ],
  },
  {
    slug: "ozempic",
    name: "Ozempic (semaglutida)",
    activeIngredient: "semaglutida",
    form: "pen",
    frequency: "weekly",
    doseStepsMg: [0.25, 0.5, 1, 2],
    titrationWeeks: 4,
    dosesPerPen: 4,
    daysAfterOpening: 56,
    maxTempC: 30,
    missedDoseWindowHours: 120,
    reviewed: false,
    sources: [{ label: "Bula Ozempic — Bulário Eletrônico ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" }],
  },
  {
    slug: "wegovy",
    name: "Wegovy (semaglutida 2,4 mg)",
    activeIngredient: "semaglutida",
    form: "pen",
    frequency: "weekly",
    doseStepsMg: [0.25, 0.5, 1, 1.7, 2.4],
    titrationWeeks: 4,
    dosesPerPen: 4,
    daysAfterOpening: 42,
    maxTempC: 30,
    missedDoseWindowHours: 120,
    reviewed: false,
    sources: [{ label: "Bula Wegovy — Bulário Eletrônico ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" }],
  },
  {
    slug: "saxenda",
    name: "Saxenda (liraglutida)",
    activeIngredient: "liraglutida",
    form: "pen",
    frequency: "daily",
    doseStepsMg: [0.6, 1.2, 1.8, 2.4, 3],
    titrationWeeks: 1,
    dosesPerPen: null,
    daysAfterOpening: 30,
    maxTempC: 30,
    missedDoseWindowHours: 12,
    reviewed: false,
    sources: [{ label: "Bula Saxenda — Bulário Eletrônico ANVISA", url: "https://consultas.anvisa.gov.br/#/bulario/" }],
  },
  {
    slug: "semaglutida-manipulada",
    name: "Semaglutida manipulada (frasco)",
    activeIngredient: "semaglutida",
    form: "vial",
    frequency: "weekly",
    doseStepsMg: [],
    titrationWeeks: null,
    dosesPerPen: null,
    daysAfterOpening: null,
    maxTempC: null,
    missedDoseWindowHours: null,
    reviewed: false,
    sources: [],
  },
  {
    slug: "tirzepatida-manipulada",
    name: "Tirzepatida manipulada (frasco)",
    activeIngredient: "tirzepatida",
    form: "vial",
    frequency: "weekly",
    doseStepsMg: [],
    titrationWeeks: null,
    dosesPerPen: null,
    daysAfterOpening: null,
    maxTempC: null,
    missedDoseWindowHours: null,
    reviewed: false,
    sources: [],
  },
];

export const getMedication = (slug: string) => medications.find((m) => m.slug === slug);
