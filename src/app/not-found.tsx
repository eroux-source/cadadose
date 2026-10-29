import Link from "next/link";
import { medications } from "@/lib/medications";
import PageHero from "@/components/PageHero";
import { medImage } from "@/lib/images";
export default function NotFound() {
  return (
    <>
    <PageHero eyebrow="Página não encontrada" title="Essa página não existe, mas a resposta pode estar aqui." image="/img/t-esqueci-de-aplicar.jpg" />
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
      <h2>Escolha o medicamento</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {medications.map((m) => (
          <Link key={m.slug} href={`/medicamentos/${m.slug}`} className="group">
            <div className="aspect-[3/2] overflow-hidden rounded-[4px]"><img src={medImage(m.slug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
            <h3 className="mt-3 text-2xl group-hover:text-forest">{m.name.split(" (")[0]}</h3>
          </Link>
        ))}
        <Link href="/perguntas" className="tile flex items-end bg-ink text-white hover:bg-ink-deep"><span className="display text-3xl">Todas as perguntas ↗</span></Link>
      </div>
    </div>
    </>
  );
}
