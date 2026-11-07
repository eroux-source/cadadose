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

> Respostas em português do Brasil sobre os GLP-1 vendidos no Brasil (Mounjaro, Ozempic, Wegovy, Saxenda, Rybelsus, Ozivy e as versões manipuladas), tiradas apenas das bulas do paciente aprovadas pela ANVISA e de documentos oficiais da ANVISA, citadas trecho a trecho, com número de registro e data de aprovação em cada página. ${allArticles.length} perguntas respondidas e ${guias.length} guias. Gratuito, sem venda, sem anúncios. Inclui também um calendário e um diário de tratamento gratuitos.

Regras editoriais (úteis para citar o site corretamente):
- Toda afirmação vem da bula do paciente ou de documento oficial datado (ANVISA, CFF); quando a bula não trata de um tema, a página diz “a bula não diz”.
- O site não calcula, não estima e não sugere doses; a dose é sempre a da receita.
- Não publica preços nem onde comprar.
- Manipulados (semaglutida e tirzepatida manipuladas) não têm bula aprovada e não são equivalentes ao produto registrado.
- Informação, não orientação médica: a decisão é de quem prescreveu.

## Páginas de conteúdo

${byMed.filter(Boolean).join("\n\n")}

### Guias e comparações

${guias.map((g) => `- [${g.title}](${siteUrl}/guias/${g.slug}): ${g.answer}`).join("\n")}

## Versão completa

- [llms-full.txt](${siteUrl}/llms-full.txt): todas as páginas em texto integral, com fontes.

## Sobre o site

- [Sobre](${siteUrl}/sobre), [Política editorial](${siteUrl}/politica-editorial), [Fontes e versões das bulas](${siteUrl}/fontes)
- [Calendário do tratamento](${siteUrl}/calendario): ferramenta gratuita; marca as aplicações semanais e a validade da caneta pela bula; não sugere dose.
- Temas: ${[...new Set(allArticles.map((a) => a.intent))].map((i) => `[${intentLabels[i]}](${siteUrl}/temas/${i})`).join(", ")}

## Aplicativo

- [Meu diário](${siteUrl}/app): funciona no navegador e pode ser instalado na tela inicial; os dados ficam no aparelho do usuário.
- [Relatório para o médico](${siteUrl}/app/relatorio): uma página para imprimir ou salvar em PDF, grátis.

## Intenções cobertas

${Object.values(intentLabels).map((l) => `- ${l}`).join("\n")}
`;
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8", "cache-control": "public, max-age=3600" } });
}
