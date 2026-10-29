import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";

export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 md:px-12 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-medium tracking-tight text-lg">
          Cada<span className="text-accent">Dose</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/#recursos" className="hidden hover:text-accent sm:inline">Recursos</Link>
          <Link href="/perguntas" className="hover:text-accent">Perguntas</Link>
          <Link href="/calendario" className="hover:text-accent">Calendário</Link>
          <Link href="/medicamentos" className="hover:text-accent">{t.nav.meds}</Link>
                    <Link href="/app" className="btn btn-primary !py-2 !px-4 text-sm">
            Meu diário
          </Link>
        </nav>
      </div>
    </header>
  );
}
