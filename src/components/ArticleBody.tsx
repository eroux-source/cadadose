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

/** Shared renderer: answer box with source, sections each with their source line, FAQ with [fonte], full source list. */
export default function ArticleBody({ a, note, path, title }: { a: Body; note?: string; path?: string; title?: string }) {
  const Src = () => (
    <>
      {a.sources.map((s, i) => (
        <span key={s.url}>{i > 0 ? " · " : ""}<a href={s.url} rel="noopener" className="underline">{s.label}</a></span>
      ))}
    </>
  );
  return (
    <>
      <p className="mt-2 text-sm text-muted">
        {t.content.updated} {new Date(a.updated + "T12:00:00").toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })} · {note ?? t.content.reviewPending}
      </p>

      <div className="mt-6 rounded-md bg-accent-soft p-6">
        <p className="text-lg leading-relaxed">{a.answer}</p>
        <p className="mt-3 text-xs text-muted">Fonte: <Src /></p>
        <InfoNotice className="mt-3" />
      </div>

      {a.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-2xl">{s.heading}</h2>
          {s.paragraphs?.map((p) => <p key={p} className="mt-3 leading-relaxed">{p}</p>)}
          {s.steps && <ol className="mt-3 list-decimal space-y-2 pl-6 leading-relaxed">{s.steps.map((x) => <li key={x}>{x}</li>)}</ol>}
          {s.bullets && <ul className="mt-3 list-disc space-y-2 pl-6 leading-relaxed">{s.bullets.map((x) => <li key={x}>{x}</li>)}</ul>}
          {s.table && (
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead><tr>{s.table.head.map((h, i) => <th key={i} className="border-b border-border py-2 pr-4 text-left font-semibold">{h}</th>)}</tr></thead>
                <tbody>{s.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => <td key={j} className="border-b border-border py-2 pr-4 align-top">{c}</td>)}</tr>)}</tbody>
              </table>
            </div>
          )}
          <p className="mt-2 text-xs text-muted">Fonte: <a href={a.sources[0].url} rel="noopener" className="underline">{a.sources[0].label}</a></p>
        </section>
      ))}

      <section className="mt-10">
        <h2 className="text-2xl">{t.content.faq}</h2>
        <dl className="mt-3 space-y-4">
          {a.faq.map((f) => (
            <div key={f.q}>
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-1 text-muted leading-relaxed">{f.a} <a href={a.sources[0].url} rel="noopener" className="underline text-xs">[fonte]</a></dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-10 text-sm text-muted">
        <h2 className=" text-foreground">{t.content.sources}</h2>
        <ul className="mt-2 list-disc pl-6">{a.sources.map((s) => <li key={s.url}><a href={s.url} rel="noopener" className="underline">{s.label}</a></li>)}</ul>
        <p className="mt-4">{t.content.disclaimerShort}</p>
        <InfoNotice className="mt-3" />
      </section>

      {path && title && <CiteBlock title={title} path={path} updated={a.updated} />}
      <div className="mt-10 flex flex-wrap gap-3"><Link href="/calendario" className="btn btn-primary">Montar meu calendário de aplicações</Link><Link href="/app" className="btn btn-ghost">Abrir meu diário</Link></div>
    </>
  );
}
