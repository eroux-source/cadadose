import Link from "next/link";
import { dictionary as t } from "@/i18n/dictionaries";
import type { Section } from "@/content/types";
import InfoNotice from "@/components/InfoNotice";
import CiteBlock from "@/components/CiteBlock";

interface Body {
  answer: string;
  updated: string;
  sections: Section[];
  faq: { q: string; a: string }[];
  sources: { label: string; url: string }[];
}

/** Shared renderer (Healers blog-post layout): wide image, sticky sidebar with sources, answer box, sections each with source line, FAQ accordion, full source list. */
export default function ArticleBody({ a, note, path, title, image }: { a: Body; note?: string; path?: string; title?: string; image?: string }) {
  const Src = () => (
    <>
      {a.sources.map((s, i) => (
        <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>
      ))}
    </>
  );
  const date = new Date(a.updated + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      {image && (
        <div className="-mt-10 aspect-[21/9] overflow-hidden rounded-[4px] md:-mt-14">
          <img src={image} alt="" className="photo" />
        </div>
      )}
      <div className="grid gap-12 py-12 md:grid-cols-[260px_1fr] md:py-16">
        <aside className="md:sticky md:top-24 md:self-start">
          <p className="eyebrow dark">Resumo da página</p>
          <dl className="mt-4 space-y-4 text-sm">
            <div><dt className="text-label">{t.content.updated}</dt><dd className="mt-1">{date}</dd></div>
            <div><dt className="text-label">Revisão</dt><dd className="mt-1">{note ?? t.content.reviewPending}</dd></div>
            <div><dt className="text-label">{t.content.sources}</dt><dd className="mt-1 space-y-1">{a.sources.map((s) => <a key={s.url} href={s.url} rel="noopener" className="block underline underline-offset-2">{s.label}</a>)}</dd></div>
            <div><dt className="text-label">Nesta página</dt><dd className="mt-1 space-y-1">{a.sections.map((s) => <a key={s.heading} href={`#${slug(s.heading)}`} className="block hover:text-forest">{s.heading}</a>)}<a href="#faq" className="block hover:text-forest">{t.content.faq}</a></dd></div>
          </dl>
          <div className="mt-6 grid gap-2">
            <Link href="/calendario" className="btn btn-dark w-full">Montar meu calendário</Link>
            <Link href="/app" className="btn btn-ghost w-full">Abrir meu diário</Link>
          </div>
        </aside>

        <div className="max-w-3xl">
          <div className="rounded-[4px] bg-card p-6 md:p-8">
            <p className="eyebrow dark">Resposta pela bula</p>
            <p className="mt-3 text-lg leading-relaxed md:text-xl">{a.answer}</p>
            <p className="mt-4 text-xs text-muted">Fonte: <Src /></p>
          </div>
          <InfoNotice className="mt-4" />

          {a.sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)} className="mt-12 scroll-mt-28">
              <h2 className="text-3xl">{s.heading}</h2>
              {s.paragraphs?.map((p) => <p key={p} className="mt-4 leading-relaxed text-muted">{p}</p>)}
              {s.steps && <ol className="mt-4 list-decimal space-y-2 pl-6 leading-relaxed text-muted">{s.steps.map((x) => <li key={x}>{x}</li>)}</ol>}
              {s.bullets && <ul className="mt-4 list-disc space-y-2 pl-6 leading-relaxed text-muted">{s.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
              {s.table && (
                <div className="mt-4 overflow-x-auto rounded-[4px] bg-card p-4">
                  <table className="w-full border-collapse text-sm">
                    <thead><tr>{s.table.head.map((h, i) => <th key={i} className="border-b border-border py-2 pr-4 text-left font-medium">{h}</th>)}</tr></thead>
                    <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="border-b border-border py-2 pr-4 align-top text-muted">{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
              <p className="mt-3 text-xs text-label">Fonte: <a href={a.sources[0].url} rel="noopener" className="underline">{a.sources[0].label}</a></p>
            </section>
          ))}

          <section id="faq" className="mt-12 scroll-mt-28">
            <h2 className="text-3xl">{t.content.faq}</h2>
            <div className="mt-4 divide-y divide-border border-y border-border">
              {a.faq.map((f, i) => (
                <details key={f.q} className="faq">
                  <summary><span className="w-8 shrink-0 text-xs text-muted">Q{i + 1}</span><span>{f.q}</span></summary>
                  <p className="pb-5 pl-12 text-sm leading-relaxed text-muted">{f.a} <a href={a.sources[0].url} rel="noopener" className="text-xs underline">[fonte]</a></p>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-12 rounded-[4px] bg-accent-soft p-6 text-sm">
            <h2 className="text-2xl">{t.content.sources}</h2>
            <ul className="mt-3 list-disc space-y-1 pl-6">{a.sources.map((s) => <li key={s.url}><a href={s.url} rel="noopener" className="underline">{s.label}</a></li>)}</ul>
            <p className="mt-4 text-muted">{t.content.disclaimerShort}</p>
            <InfoNotice className="mt-3" />
          </section>

          {path && title && <CiteBlock title={title} path={path} updated={a.updated} />}
        </div>
      </div>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
