import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { guias } from "@/content/guias";
import InfoNotice from "@/components/InfoNotice";

const cols = [
  { title: "Diário", links: [["Meu diário (grátis)", "/app"], ["Calendário do tratamento", "/calendario"], ["Relatório para o médico", "/app/relatorio"]] },
  { title: "Medicamentos", links: medications.map((m) => [m.name.split(" (")[0], `/medicamentos/${m.slug}`]) },
  { title: "Guias", links: [...guias.slice(0, 5).map((g) => [g.title.split(/[?:]/)[0], `/guias/${g.slug}`]), ["Todos os guias", "/perguntas"]] },
  { title: "CadaDose", links: [["Sobre", "/sobre"], ["Política editorial", "/politica-editorial"], ["Fontes e bulas", "/fontes"], ["Para clínicas (widget)", "/para-clinicas"], [t.footer.privacy, "/privacidade"], [t.footer.terms, "/termos"], ["RSS", "/feed.xml"], ["llms.txt", "/llms.txt"]] },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="display text-3xl">Cada<span className="text-accent">Dose</span></p>
            <p className="mt-4 max-w-xs text-sm font-light text-white/70">O que a bula diz, com a fonte ao lado. Para quem usa GLP-1 no Brasil. Sem calculadora de dose, sem venda, sem anúncios.</p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="display text-xl">{c.title}</p>
              <ul className="mt-4 space-y-2 text-sm font-light text-white/75">
                {c.links.map(([label, href]) => (
                  <li key={href} className="flex gap-2"><span className="text-accent">•</span><Link href={href} className="hover:text-white">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 space-y-3 border-t border-white/10 pt-8 text-sm font-light text-white/60">
          <p>{t.disclaimer}</p>
          <InfoNotice light />
          <p>© 2026 CadaDose · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
