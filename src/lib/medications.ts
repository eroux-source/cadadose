/**
 * Medication catalog used by the diary and the content pages.
 *
 * Every number comes from the Brazilian patient leaflet (bula) linked in `sources`, with its
 * ANVISA registration and approval date. Nothing is filled from memory: a field we could not
 * source is null and the diary asks the user. `reviewed` turns true only after a health
 * professional checks the entry against the current bula. The diary never computes or
 * recommends a dose: it stores what the prescription says and applies the leaflet's storage
 * rule to the date the user gives.
 */
export type MedForm = "single-use-pen" | "multidose-pen" | "vial";

export interface Medication {
  slug: string;
  name: string;
  activeIngredient: string;
  form: MedForm;
  frequency: "weekly" | "daily";
  /** Label dose steps in mg (informational, from the bula). */
  doseStepsMg: number[];
  /** Doses per pen (multidose) or 1 (single-use); null for vials. */
  dosesPerPen: number | null;
  /** Days the product may be used/kept per the storage rule below; null = set by the pharmacy label. */
  storageDays: number | null;
  /** What `storageDays` counts from, in the bula's words. */
  storageLabel: string | null;
  /** Max storage temperature outside the fridge (°C), from the bula. */
  maxTempC: number | null;
  /** Missed-dose window in hours per the bula (apply if within; otherwise skip). */
  missedDoseWindowHours: number | null;
  reviewed: boolean;
  sources: { label: string; url: string }[];
}

export const medications: Medication[] = [
  {
    slug: "mounjaro",
    name: "Mounjaro (tirzepatida)",
    activeIngredient: "tirzepatida",
    form: "single-use-pen",
    frequency: "weekly",
    doseStepsMg: [2.5, 5, 7.5, 10, 12.5, 15],
    dosesPerPen: 1,
    storageDays: 21,
    storageLabel: "fora da geladeira, abaixo de 30 °C",
    maxTempC: 30,
    missedDoseWindowHours: 96,
    reviewed: false,
    sources: [
      {
        label: "Bula do paciente Mounjaro® — Eli Lilly do Brasil, registro ANVISA 1.1260.0202, versão 05/2026 (ampliação de uso aprovada em 22/04/2026)",
        url: "https://bkt-prd-grupopanvel-datalake-documents.s3.amazonaws.com/bulas/anomesdia=20260513/codigo_item=89181/bula_paciente.pdf",
      },
    ],
  },
  {
    slug: "ozempic",
    name: "Ozempic (semaglutida)",
    activeIngredient: "semaglutida",
    form: "multidose-pen",
    frequency: "weekly",
    doseStepsMg: [0.25, 0.5, 1],
    dosesPerPen: 4,
    storageDays: 42,
    storageLabel: "após o primeiro uso (6 semanas)",
    maxTempC: 30,
    missedDoseWindowHours: 120,
    reviewed: false,
    sources: [
      {
        label: "Bula do paciente Ozempic® 1 mg — Novo Nordisk, registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
        url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_3mL_1mg_Paciente.pdf",
      },
      {
        label: "Bula do paciente Ozempic® 0,25/0,5 mg — Novo Nordisk, registro ANVISA 1.1766.0036, aprovada em 17/04/2026",
        url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Ozempic_1-5mL_0-25mg_0-5mg_Bula_Paciente.pdf",
      },
    ],
  },
  {
    slug: "wegovy",
    name: "Wegovy (semaglutida)",
    activeIngredient: "semaglutida",
    form: "multidose-pen",
    frequency: "weekly",
    doseStepsMg: [0.25, 0.5, 1, 1.7, 2.4],
    dosesPerPen: 4,
    storageDays: 42,
    storageLabel: "após o primeiro uso (6 semanas)",
    maxTempC: 30,
    missedDoseWindowHours: 120,
    reviewed: false,
    sources: [
      {
        label: "Bula do paciente Wegovy® — Novo Nordisk, registro ANVISA 1.1766.0039, aprovada em 04/05/2026",
        url: "https://www.novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Wegovy_Bula_Paciente.pdf",
      },
    ],
  },
  {
    slug: "saxenda",
    name: "Saxenda (liraglutida)",
    activeIngredient: "liraglutida",
    form: "multidose-pen",
    frequency: "daily",
    doseStepsMg: [0.6, 1.2, 1.8, 2.4, 3],
    dosesPerPen: null, // 18 mg por caneta; o número de doses depende da dose diária
    storageDays: 28,
    storageLabel: "após o primeiro uso (4 semanas), entre 15 °C e 30 °C ou em geladeira",
    maxTempC: 30,
    missedDoseWindowHours: 12,
    reviewed: false,
    sources: [
      {
        label: "Bula do paciente Saxenda® (liraglutida) — Novo Nordisk, registro ANVISA 1.1766.0032, aprovada em 17/04/2026",
        url: "https://novonordisk.com.br/content/dam/nncorp/br/pt/pdfs/bulas/patient/Saxenda_Bula_Paciente1.pdf",
      },
    ],
  },
  {
    slug: "semaglutida-manipulada",
    name: "Semaglutida manipulada (frasco)",
    activeIngredient: "semaglutida",
    form: "vial",
    frequency: "weekly",
    doseStepsMg: [],
    dosesPerPen: null,
    storageDays: null,
    storageLabel: "conforme o rótulo da farmácia de manipulação",
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
    dosesPerPen: null,
    storageDays: null,
    storageLabel: "conforme o rótulo da farmácia de manipulação",
    maxTempC: null,
    missedDoseWindowHours: null,
    reviewed: false,
    sources: [],
  },
];

export const getMedication = (slug: string) => medications.find((m) => m.slug === slug);
