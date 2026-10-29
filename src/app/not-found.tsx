import Link from "next/link";
import { medications } from "@/lib/medications";
export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <span className="eyebrow">Página não encontrada</span>
      <h1 className="mt-2 text-3xl font-semibold">Essa página não existe, mas a resposta pode estar aqui.</h1>
      <p className="mt-3 text-muted">Escolha o medicamento ou veja todas as perguntas respondidas pela bula.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {medications.map((m) => <Link key={m.slug} href={`/medicamentos/${m.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-accent">{m.name.split(" (")[0]}</Link>)}
        <Link href="/perguntas" className="btn btn-primary !py-2">Todas as perguntas</Link>
      </div>
    </div>
  );
}
