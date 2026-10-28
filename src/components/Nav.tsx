import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";

export default function Nav() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur sticky top-0 z-10">
      <div className="mx-auto max-w-5xl px-4 h-14 flex items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          <span className="text-accent">Cada</span>Dose
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/medicamentos" className="hover:text-accent">{t.nav.meds}</Link>
          <Link href="/pro" className="hover:text-accent">Pro</Link>
          <Link href="/app" className="rounded-full bg-accent text-white px-3 py-1.5 font-medium">
            {t.nav.app}
          </Link>
        </nav>
      </div>
    </header>
  );
}
