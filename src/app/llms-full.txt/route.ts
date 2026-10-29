import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { getMedication } from "@/lib/medications";
import { intentLabels } from "@/content/types";
import { siteUrl } from "@/lib/locales";
import type { Section } from "@/content/types";

const sec = (s: Section) => {
  const out = [`### ${s.heading}`];
  s.paragraphs?.forEach((p) => out.push(p));
  s.bullets?.forEach((b) => out.push(`- ${b}`));
  s.steps?.forEach((b, i) => out.push(`${i + 1}. ${b}`));
  if (s.table) { out.push(`| ${s.table.head.join(" | ")} |`, `| ${s.table.head.map(() => "---").join(" | ")} |`); s.table.rows.forEach((r) => out.push(`| ${r.join(" | ")} |`)); }
  return out.join("\n");
};

/** Full-text version for AI crawlers that read llms-full.txt. Every page with its sources. */
export function GET() {
  const parts: string[] = [`# CadaDose — conteúdo completo\n\nRespostas sobre GLP-1 no Brasil baseadas nas bulas aprovadas pela ANVISA. Apenas para informação, não é orientação médica. Fale com quem prescreveu o seu tratamento antes de mudar o medicamento ou o plano de tratamento.\n`];
  for (const a of allArticles) {
    const med = getMedication(a.medicationSlug);
    parts.push(`## ${a.title}\nURL: ${siteUrl}/medicamentos/${a.medicationSlug}/${a.intent}\nMedicamento: ${med?.name} · Tema: ${intentLabels[a.intent]} · Atualizado: ${a.updated}\n\n**Resposta:** ${a.answer}\n\n${a.sections.map(sec).join("\n\n")}\n\n### Perguntas frequentes\n${a.faq.map((f) => `- **${f.q}** ${f.a}`).join("\n")}\n\n### Fontes\n${a.sources.map((s) => `- ${s.label}: ${s.url}`).join("\n")}\n`);
  }
  for (const g of guias) {
    parts.push(`## ${g.title}\nURL: ${siteUrl}/guias/${g.slug}\nAtualizado: ${g.updated}\n\n**Resposta:** ${g.answer}\n\n${g.sections.map(sec).join("\n\n")}\n\n### Perguntas frequentes\n${g.faq.map((f) => `- **${f.q}** ${f.a}`).join("\n")}\n\n### Fontes\n${g.sources.map((s) => `- ${s.label}: ${s.url}`).join("\n")}\n`);
  }
  return new Response(parts.join("\n---\n\n"), { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
