import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allArticles } from "@/content";
import { intentLabels, type Intent } from "@/content/types";
import { getMedication } from "@/lib/medications";
import InfoNotice from "@/components/InfoNotice";

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
    <div className="mx-auto max-w-3xl px-4 py-12">
      <nav className="text-sm text-muted"><Link href="/perguntas" className="hover:text-accent">Perguntas</Link> › {label}</nav>
      <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">{label}: o que diz a bula de cada medicamento</h1>
      <p className="mt-3 text-muted">A mesma pergunta, respondida pela bula de cada produto. As respostas diferem porque as bulas diferem.</p>
      <ul className="mt-8 space-y-4">
        {arts.map((a) => {
          const med = getMedication(a.medicationSlug);
          return (
            <li key={a.medicationSlug} className="rounded-2xl border border-border bg-card p-5">
              <p className="eyebrow">{med?.name}</p>
              <Link href={`/medicamentos/${a.medicationSlug}/${a.intent}`} className="mt-1 block text-lg font-semibold hover:text-accent">{a.title}</Link>
              <p className="mt-2 text-sm text-muted">{a.answer}</p>
            </li>
          );
        })}
      </ul>
      <InfoNotice className="mt-8" />
    </div>
  );
}
