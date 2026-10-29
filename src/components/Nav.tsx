import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";

export default function Nav() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-accent">Cada</span>Dose
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/#recursos" className="hidden hover:text-accent sm:inline">Recursos</Link>
          <Link href="/perguntas" className="hover:text-accent">Perguntas</Link>
          <Link href="/calendario" className="hover:text-accent">Calendário</Link>
          <Link href="/medicamentos" className="hover:text-accent">{t.nav.meds}</Link>
                    <Link href="/app" className="btn btn-primary !py-1.5 !px-4 text-sm">
            Meu diário
          </Link>
        </nav>
      </div>
    </header>
  );
}
