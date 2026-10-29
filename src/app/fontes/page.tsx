import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
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
    <>
    <PageHero eyebrow="Fontes" title="As bulas e documentos que citamos." lede="Cada página aponta para um destes documentos. Registro ANVISA, versão e data aparecem no rótulo de cada um." image="/img/t-quem-nao-pode-tomar.jpg" crumbs={[{ label: "Sobre", href: "/sobre" }, { label: "Fontes" }]} />
    <article className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="tile bg-accent-soft"><p className="display text-5xl text-forest">{bulas.length}</p><p className="mt-1 text-xs text-muted">bulas do paciente</p></div>
        <div className="tile bg-accent-soft"><p className="display text-5xl text-forest">{outros.length}</p><p className="mt-1 text-xs text-muted">documentos e comunicados</p></div>
        <div className="tile bg-ink text-white"><p className="display text-5xl text-accent">mensal</p><p className="mt-1 text-xs text-white/70">verificação de cada PDF</p></div>
      </div>
      <p className="mt-8 max-w-3xl text-muted">Verificação mensal. Última verificação: 28/10/2026. Se você encontrar uma versão mais nova de qualquer bula no Bulário da ANVISA, avise: contato@cadadose.com.</p>
      <h2 className="mt-12">Bulas do paciente (ANVISA)</h2>
      <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        {bulas.map(([u, l]) => <li key={u} className="rounded-[4px] bg-card p-4"><a href={u} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-forest">{l}</a></li>)}
      </ul>
      <h2 className="mt-12">Documentos e comunicados</h2>
      <ul className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
        {outros.map(([u, l]) => <li key={u} className="rounded-[4px] bg-card p-4"><a href={u} target="_blank" rel="noopener" className="underline underline-offset-2 hover:text-forest">{l}</a></li>)}
      </ul>
      <h2 className="mt-12">Como verificamos</h2>
      <p className="mt-3 max-w-3xl text-muted">Cada mês comparamos o conteúdo de cada PDF com a cópia anterior (hash do arquivo) e lemos o histórico de alterações da bula. Uma mudança de indicação, dose, conservação ou dose esquecida gera atualização das páginas afetadas em até uma semana, com a nova data no topo.</p>
    </article>
    </>
  );
}
