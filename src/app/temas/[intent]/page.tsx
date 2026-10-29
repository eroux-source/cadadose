import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles } from "@/content";
import { intentLabels, type Intent } from "@/content/types";
import { getMedication } from "@/lib/medications";
import InfoNotice from "@/components/InfoNotice";
import { themeImage } from "@/lib/images";
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
  return (
    <>
    <PageHero eyebrow="Tema" title={`${label}: o que diz a bula de cada medicamento`} lede="A mesma pergunta, respondida pela bula de cada produto. As respostas diferem porque as bulas diferem." image={themeImage(intent)} crumbs={[{ label: "Perguntas", href: "/perguntas" }, { label }]} />
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <ul className="space-y-4">
        {arts.map((a) => {
          const med = getMedication(a.medicationSlug);
          return (
            <li key={a.medicationSlug} className="flex gap-4 rounded-md border border-border bg-card p-4">
              <div className="hidden h-24 w-36 shrink-0 overflow-hidden rounded-md sm:block"><img src={themeImage(a.intent, a.medicationSlug)} alt="" className="photo" loading="lazy" /></div>
              <div>
              <p className="eyebrow">{med?.name}</p>
              <Link href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="mt-1 block text-lg font-semibold hover:text-accent">{a.title}</Link>
              <p className="mt-2 text-sm text-muted">{a.answer}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <InfoNotice className="mt-8" />
    </div>
    </>
  );
}
