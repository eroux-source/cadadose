import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { guias } from "@/content/guias";
import InfoNotice from "@/components/InfoNotice";

const cols = [
  { title: "Diário", links: [["Meu diário (grátis)", "/app"], ["Calendário do tratamento", "/calendario"], ["Relatório para o médico", "/app/relatorio"], ["Recursos", "/#recursos"]] },
  { title: "Medicamentos", links: medications.map((m) => [m.name.split(" (")[0], `/medicamentos/${m.slug}`]) },
  { title: "Guias", links: [...guias.slice(0, 5).map((g) => [g.title.split(/[?:]/)[0], `/guias/${g.slug}`]), ["Todos os guias", "/perguntas"]] },
  { title: "Perguntas", links: [["Todas as perguntas", "/perguntas"], ["Como aplicar Mounjaro", "/medicamentos/mounjaro/como-aplicar"], ["Esqueci de aplicar", "/medicamentos/mounjaro/esqueci-de-aplicar"], ["Validade da caneta", "/medicamentos/ozempic/validade-depois-de-aberta"]] },
  { title: "CadaDose", links: [["Sobre", "/sobre"], ["Política editorial", "/politica-editorial"], ["Fontes e bulas", "/fontes"], ["Para clínicas (widget)", "/para-clinicas"], [t.footer.privacy, "/privacidade"], [t.footer.terms, "/termos"], ["RSS", "/feed.xml"], ["llms.txt", "/llms.txt"]] },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 text-sm md:px-12">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-6"><div className="md:col-span-1"><p className="text-xl">Cada<span className="text-accent">Dose</span></p><p className="mt-2 text-muted">O que a bula diz, com a fonte ao lado. Para quem usa GLP-1 no Brasil.</p></div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="eyebrow">{c.title}</p>
              <ul className="mt-3 space-y-2 text-muted">
                {c.links.map(([label, href]) => (
                  <li key={href}><Link href={href} className="hover:text-accent">{label}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 space-y-3 text-muted">
          <p>{t.disclaimer}</p>
          <InfoNotice />
          <p>© 2026 CadaDose · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
