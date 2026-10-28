import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionary } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";
import { getArticlesForMedication } from "@/content";
import { intentLabels } from "@/content/types";

export default async function MedsIndex() {
  
  const t = dictionary;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{t.nav.meds}</h1>
      <p className="mt-2 text-muted">{t.content.disclaimerShort}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {medications.map((m) => {
          const articles = getArticlesForMedication(m.slug);
          return (
            <div key={m.slug} className="rounded-2xl border border-border bg-card p-5">
              <Link href={`/medicamentos/${m.slug}`} className="font-semibold hover:text-accent">
                {m.name}
              </Link>
              <ul className="mt-3 space-y-1 text-sm">
                {articles.map((a) => (
                  <li key={a.intent}>
                    <Link href={`/medicamentos/${m.slug}/${a.intent}`} className="text-accent hover:underline">
                      {intentLabels[a.intent]}
                    </Link>
                  </li>
                ))}
                {articles.length === 0 && <li className="text-muted">—</li>}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
