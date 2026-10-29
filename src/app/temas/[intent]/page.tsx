import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles } from "@/content";
import { intentLabels, type Intent } from "@/content/types";
import { getMedication } from "@/lib/medications";
import InfoNotice from "@/components/InfoNotice";
import { themeImage, medImage } from "@/lib/images";
import PageHero from "@/components/PageHero";

const intents = [...new Set(allArticles.map((a) => a.intent))];
export function generateStaticParams() { return intents.map((intent) => ({ intent })); }
export async function generateMetadata({ params }: { params: Promise<{ intent: string }> }): Promise<Metadata> {
  const { intent } = await params;
  const label = intentLabels[intent as Intent];
  if (!label) return {};
  return { title: `${label}: Mounjaro, Ozempic e Wegovy, o que cada bula diz`, description: `${label} para cada medicamento GLP-1 vendido no Brasil, com a resposta curta e a fonte na bula.`, alternates: { canonical: `/temas/${intent}` } };
}
export default async function Tema({ params }: { params: Promise<{ intent: string }> }) {
  const { intent } = await params;
  const label = intentLabels[intent as Intent];
  const arts = allArticles.filter((a) => a.intent === intent);
  if (!label || !arts.length) notFound();
  const others = intents.filter((i) => i !== intent).slice(0, 12);
  return (
    <>
      <PageHero eyebrow="Tema" title={`${label}: o que diz a bula de cada medicamento`} lede="A mesma pergunta, respondida pela bula de cada produto. As respostas diferem porque as bulas diferem." image={themeImage(intent)} crumbs={[{ label: "Perguntas", href: "/perguntas" }, { label }]} />

      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div className="grid gap-4 self-start md:sticky md:top-24">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={medImage(arts[0].medicationSlug)} alt="" className="photo" loading="lazy" /></div>
            <div className="tile bg-ink text-white">
              <h3 className="text-3xl">{arts.length} medicamentos, {arts.length} bulas</h3>
              <p className="mt-2 text-sm font-light text-white/70">Abra cada resposta para ver a frase da bula citada, com a seção e a data da versão.</p>
              <InfoNotice light className="mt-4" />
            </div>
          </div>
          <div>
            <h2>{label}</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {arts.map((a, i) => {
                const med = getMedication(a.medicationSlug);
                return (
                  <details key={a.medicationSlug} className="faq" open={i === 0}>
                    <summary><span className="w-8 shrink-0 text-xs text-muted">{String(i + 1).padStart(2, "0")}</span><span className="text-lg md:text-xl">{a.title}</span><span className="ml-auto hidden shrink-0 text-xs text-muted sm:block">{med?.name.split(" (")[0]}</span></summary>
                    <div className="grid gap-4 pb-6 pl-12 sm:grid-cols-[120px_1fr]">
                      <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={medImage(a.medicationSlug)} alt="" className="photo" loading="lazy" /></div>
                      <div>
                        <p className="text-sm leading-relaxed text-muted">{a.answer}</p>
                        <Link href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="mt-3 inline-block text-sm font-medium hover:text-forest">Ler a resposta completa ↗</Link>
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        </div>

        <section className="mt-20">
          <span className="eyebrow dark">Outros temas</span>
          <div className="mt-3 flex flex-wrap gap-2">
            {others.map((i) => <Link key={i} href={`/temas/${i}`} className="chip hover:border-forest hover:text-forest">{intentLabels[i]}</Link>)}
            <Link href="/perguntas" className="chip bg-ink text-white hover:bg-ink-deep">Todas as perguntas</Link>
          </div>
        </section>
      </div>
    </>
  );
}
