import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { guias } from "@/content/guias";
import InfoNotice from "@/components/InfoNotice";

const cols = [
  { title: "Diário", links: [["Meu diário", "/app"], ["Relatório para o médico", "/app/relatorio"], ["CadaDose Pro", "/pro"], ["Recursos", "/#recursos"]] },
  { title: "Medicamentos", links: medications.map((m) => [m.name.split(" (")[0], `/medicamentos/${m.slug}`]) },
  { title: "Comparar", links: guias.map((g) => [g.title.split("?")[0] + "?", `/guias/${g.slug}`]) },
  { title: "Perguntas", links: [["Todas as perguntas", "/perguntas"], ["Como aplicar Mounjaro", "/medicamentos/mounjaro/como-aplicar"], ["Esqueci de aplicar", "/medicamentos/mounjaro/esqueci-de-aplicar"], ["Validade da caneta", "/medicamentos/ozempic/validade-depois-de-aberta"]] },
  { title: "CadaDose", links: [[t.footer.privacy, "/privacidade"], [t.footer.terms, "/termos"], ["Fontes (llms.txt)", "/llms.txt"]] },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-5">
          {cols.map((c) => (
            <div key={c.title}>
              <p className="font-semibold">{c.title}</p>
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
