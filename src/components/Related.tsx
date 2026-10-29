import Link from "next/link";
import { allArticles } from "@/content";
import { intentLabels } from "@/content/types";
import { getMedication } from "@/lib/medications";
import { medImage, themeImage } from "@/lib/images";

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });

/** Internal links as Healers blog cards: same question (other medications) + same medication (other questions). */
export default function Related({ slug, intent }: { slug: string; intent: string }) {
  const sameMed = allArticles.filter((a) => a.medicationSlug === slug && a.intent !== intent).slice(0, 4);
  const sameIntent = allArticles.filter((a) => a.intent === intent && a.medicationSlug !== slug).slice(0, 4);
  const med = getMedication(slug);
  if (!sameMed.length && !sameIntent.length) return null;
  const label = intentLabels[intent as keyof typeof intentLabels];
  return (
    <section className="bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        {sameIntent.length > 0 && (
          <>
            <div className="flex items-end justify-between gap-4">
              <h2 className="max-w-xl">{label}: outros medicamentos</h2>
              <Link href={`/temas/${intent}`} className="text-sm underline underline-offset-4 hover:text-accent">Ver o tema</Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {sameIntent.map((a) => (
                <Link key={a.medicationSlug} href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={medImage(a.medicationSlug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                  <p className="mt-3 flex gap-3 text-xs text-white/55"><span>{fmt(a.updated)}</span><span>|</span><span>{getMedication(a.medicationSlug)?.name.split(" (")[0]}</span></p>
                  <h3 className="mt-1 text-xl leading-snug group-hover:text-accent">{a.title}</h3>
                </Link>
              ))}
            </div>
          </>
        )}
        {sameMed.length > 0 && (
          <>
            <div className={`flex items-end justify-between gap-4 ${sameIntent.length ? "mt-16" : ""}`}>
              <h2 className="max-w-xl">Mais sobre {med?.name.split(" (")[0]}</h2>
              <Link href={`/medicamentos/${slug}`} className="text-sm underline underline-offset-4 hover:text-accent">Todas as perguntas</Link>
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              {sameMed.map((a) => (
                <Link key={a.intent} href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="group">
                  <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={themeImage(a.intent, a.medicationSlug)} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
                  <p className="mt-3 flex gap-3 text-xs text-white/55"><span>{fmt(a.updated)}</span><span>|</span><span>{intentLabels[a.intent]}</span></p>
                  <h3 className="mt-1 text-xl leading-snug group-hover:text-accent">{a.title}</h3>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
