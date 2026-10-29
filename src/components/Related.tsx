import Link from "next/link";
import { allArticles } from "@/content";
import { intentLabels } from "@/content/types";
import { getMedication } from "@/lib/medications";
import { medImage, themeImage } from "@/lib/images";

/** Internal links: same medication (other questions) + same question (other medications). */
export default function Related({ slug, intent }: { slug: string; intent: string }) {
  const sameMed = allArticles.filter((a) => a.medicationSlug === slug && a.intent !== intent).slice(0, 8);
  const sameIntent = allArticles.filter((a) => a.intent === intent && a.medicationSlug !== slug);
  const med = getMedication(slug);
  if (!sameMed.length && !sameIntent.length) return null;
  return (
    <section className="mt-12 grid gap-6 md:grid-cols-2">
      {sameIntent.length > 0 && (
        <div>
          <h2 className="">{intentLabels[intent as keyof typeof intentLabels]}: outros medicamentos</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {sameIntent.map((a) => <li key={a.medicationSlug}><Link href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="group flex items-center gap-3"><span className="h-10 w-14 shrink-0 overflow-hidden rounded-sm"><img src={medImage(a.medicationSlug)} alt="" className="photo" loading="lazy" /></span><span className="group-hover:text-accent">{getMedication(a.medicationSlug)?.name}</span></Link></li>)}
          </ul>
          <Link href={`/temas/${intent}`} className="mt-2 inline-block text-xs text-muted underline">Ver o tema completo</Link>
        </div>
      )}
      {sameMed.length > 0 && (
        <div>
          <h2 className="">Mais sobre {med?.name.split(" (")[0]}</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {sameMed.map((a) => <li key={a.intent}><Link href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="group flex items-center gap-3"><span className="h-10 w-14 shrink-0 overflow-hidden rounded-sm"><img src={themeImage(a.intent, a.medicationSlug)} alt="" className="photo" loading="lazy" /></span><span className="group-hover:text-accent">{intentLabels[a.intent]}</span></Link></li>)}
          </ul>
          <Link href={`/medicamentos/${slug}`} className="mt-2 inline-block text-xs text-muted underline">Todas as perguntas sobre {med?.name.split(" (")[0]}</Link>
        </div>
      )}
    </section>
  );
}
