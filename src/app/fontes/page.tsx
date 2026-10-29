import type { Metadata } from "next";
import { medications } from "@/lib/medications";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";

export const metadata: Metadata = { title: "Fontes: bulas e documentos da ANVISA usados no CadaDose, com versão e data", description: "Todas as bulas do paciente e documentos oficiais citados no site, com registro ANVISA, versão e data de verificação.", alternates: { canonical: "/fontes" } };

export default function Fontes() {
  const all = new Map<string, string>();
  medications.forEach((m) => m.sources.forEach((s) => all.set(s.url, s.label)));
  [...allArticles, ...guias].forEach((a) => a.sources.forEach((s) => all.set(s.url, s.label)));
  const bulas = [...all].filter(([, l]) => /^Bula/.test(l));
  const outros = [...all].filter(([, l]) => !/^Bula/.test(l));
  return (
    <article className="mx-auto max-w-3xl px-4 py-12">
      <span className="eyebrow">Fontes</span>
      <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">As bulas e documentos que citamos.</h1>
      <p className="mt-4 text-muted">Verificação mensal. Última verificação: 28/10/2026. Se você encontrar uma versão mais nova de qualquer bula no Bulário da ANVISA, avise: contato@cadadose.com.</p>
      <h2 className="mt-10 text-xl font-semibold">Bulas do paciente (ANVISA)</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {bulas.map(([u, l]) => <li key={u}><a href={u} target="_blank" rel="noopener" className="underline hover:text-accent">{l}</a></li>)}
      </ul>
      <h2 className="mt-10 text-xl font-semibold">Documentos e comunicados</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {outros.map(([u, l]) => <li key={u}><a href={u} target="_blank" rel="noopener" className="underline hover:text-accent">{l}</a></li>)}
      </ul>
      <h2 className="mt-10 text-xl font-semibold">Como verificamos</h2>
      <p className="mt-3 text-muted">Cada mês comparamos o conteúdo de cada PDF com a cópia anterior (hash do arquivo) e lemos o histórico de alterações da bula. Uma mudança de indicação, dose, conservação ou dose esquecida gera atualização das páginas afetadas em até uma semana, com a nova data no topo.</p>
    </article>
  );
}
