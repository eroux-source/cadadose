import Link from "next/link";
import { notFound } from "next/navigation";
import { dictionary } from "@/i18n/dictionaries";
import { medications } from "@/lib/medications";

export default async function Landing() {
  
  const t = dictionary;

  return (
    <div className="mx-auto max-w-5xl px-4">
      <section className="py-16 md:py-24 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">{t.hero.title}</h1>
        <p className="mt-6 text-lg text-muted">{t.hero.subtitle}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href={`/app`} className="rounded-full bg-accent text-white px-6 py-3 font-medium">
            {t.hero.cta}
          </Link>
          <span className="text-sm text-muted">{t.hero.privacy}</span>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {t.features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-semibold">{f.title}</h2>
            <p className="mt-2 text-sm text-muted">{f.text}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold">{t.nav.meds}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {medications.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/medicamentos/${m.slug}`}
                className="inline-block rounded-full border border-border bg-card px-4 py-2 text-sm hover:border-accent"
              >
                {m.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16 rounded-2xl bg-accent-soft p-6 text-sm">
        <p>{t.disclaimer}</p>
      </section>
    </div>
  );
}
