import Link from "next/link";
import { medications } from "@/lib/medications";
import PageHero from "@/components/PageHero";
export default function NotFound() {
  return (
    <>
    <PageHero eyebrow="Página não encontrada" title="Essa página não existe, mas a resposta pode estar aqui." image="/img/t-esqueci-de-aplicar.jpg" />
    <div className="mx-auto max-w-3xl px-6 py-12">
      <p className="text-muted">Escolha o medicamento ou veja todas as perguntas respondidas pela bula.</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {medications.map((m) => <Link key={m.slug} href={`/medicamentos/${m.slug}`} className="rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-accent">{m.name.split(" (")[0]}</Link>)}
        <Link href="/perguntas" className="btn btn-primary !py-2">Todas as perguntas</Link>
      </div>
    </div>
    </>
  );
}
