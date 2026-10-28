import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications } from "@/lib/medications";
import { intentLabels } from "@/content/types";
import { siteUrl } from "@/lib/locales";

/** llms.txt generated from the content set so AI crawlers always see the current page list. */
export function GET() {
  const byMed = medications.map((m) => {
    const arts = allArticles.filter((a) => a.medicationSlug === m.slug);
    if (!arts.length) return "";
    const lines = arts.map((a) => `- [${a.title}](${siteUrl}/medicamentos/${m.slug}/${a.intent}): ${a.answer}`);
    return `### ${m.name}\n\n${lines.join("\n")}`;
  });
  const body = `# CadaDose

> Diário pessoal e gratuito para quem faz tratamento com GLP-1 (Mounjaro, Ozempic, Wegovy, semaglutida e tirzepatida manipuladas) com prescrição médica, no Brasil. Registro de aplicações, lembretes, rodízio de locais, curva de peso, efeitos colaterais, estoque e validade da caneta. Conteúdo informativo em português, baseado nas bulas do paciente aprovadas pela ANVISA e citado trecho a trecho (registro e data de aprovação em cada página). Não recomenda doses e não vende medicamentos.

## Páginas de conteúdo

${byMed.filter(Boolean).join("\n\n")}

### Comparações

${guias.map((g) => `- [${g.title}](${siteUrl}/guias/${g.slug}): ${g.answer}`).join("\n")}

## Aplicativo

- [Meu diário](${siteUrl}/app): funciona no navegador e pode ser instalado na tela inicial; os dados ficam no aparelho do usuário.
- [CadaDose Pro](${siteUrl}/pro): lembretes, backup e relatório para o médico.

## Intenções cobertas

${Object.values(intentLabels).map((l) => `- ${l}`).join("\n")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
