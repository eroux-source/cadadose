import Link from "next/link";

export default function Nav() {
  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-6 md:px-10">
        <Link href="/" className="display text-2xl">Cada<span className="text-accent">Dose</span></Link>
        <nav className="hidden items-center gap-7 text-sm font-light md:flex">
          <Link href="/" className="hover:text-accent">Início</Link>
          <Link href="/perguntas" className="hover:text-accent">Perguntas</Link>
          <Link href="/medicamentos" className="hover:text-accent">Medicamentos</Link>
          <Link href="/calendario" className="hover:text-accent">Calendário</Link>
          <Link href="/sobre" className="hover:text-accent">Sobre</Link>
        </nav>
        <Link href="/app" className="btn btn-primary !py-3 text-sm">Meu diário</Link>
      </div>
    </header>
  );
}
