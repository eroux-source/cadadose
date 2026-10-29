"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export interface Item { href: string; img: string; title: string; date: string; intent: string; intentLabel: string; med: string; medLabel: string; answer: string }
export interface Cat { id: string; label: string; intents: string[] }

const fmt = (d: string) => new Date(d + "T12:00:00").toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

/** Filter bar (medication × category × search) with the article grid. Everything is in the HTML, so the list is crawlable without JS. */
export default function PerguntasFilter({ items, cats, meds }: { items: Item[]; cats: Cat[]; meds: { slug: string; label: string }[] }) {
  const [med, setMed] = useState("all");
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  // `/perguntas?q=…` is the site search action advertised in the WebSite schema.
  useEffect(() => { try { const v = new URLSearchParams(window.location.search).get("q"); if (v) setQ(v); } catch {} }, []);

  const list = useMemo(() => {
    const c = cats.find((x) => x.id === cat);
    const nq = norm(q.trim());
    return items.filter((a) => (med === "all" || a.med === med) && (!c || c.intents.includes(a.intent)) && (!nq || norm(a.title + " " + a.answer + " " + a.intentLabel).includes(nq)));
  }, [items, cats, med, cat, q]);

  const count = (f: (a: Item) => boolean) => items.filter(f).length;
  const pill = (active: boolean) => `whitespace-nowrap rounded-[4px] border px-3 py-1.5 text-sm transition ${active ? "border-ink bg-ink text-white" : "border-border bg-card text-muted hover:border-ink hover:text-foreground"}`;

  return (
    <div>
      <div className="rounded-[4px] bg-card p-4 md:p-6">
        <div className="grid gap-5 md:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[.14em] text-label">Medicamento</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" onClick={() => setMed("all")} className={pill(med === "all")}>Todos <span className="opacity-60">{items.length}</span></button>
              {meds.map((m) => <button key={m.slug} type="button" onClick={() => setMed(m.slug)} className={pill(med === m.slug)}>{m.label} <span className="opacity-60">{count((a) => a.med === m.slug)}</span></button>)}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-[.14em] text-label">Buscar</p>
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ex.: geladeira, gravidez, 96 horas" className="mt-2 w-full rounded-[4px] border border-border bg-background px-3 py-2 text-sm outline-none focus:border-ink" />
          </div>
        </div>
        <div className="mt-5">
          <p className="text-xs font-medium uppercase tracking-[.14em] text-label">Tema</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" onClick={() => setCat("all")} className={pill(cat === "all")}>Todos os temas</button>
            {cats.map((c) => <button key={c.id} type="button" onClick={() => setCat(c.id)} className={pill(cat === c.id)}>{c.label} <span className="opacity-60">{count((a) => c.intents.includes(a.intent) && (med === "all" || a.med === med))}</span></button>)}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted">{list.length} {list.length === 1 ? "pergunta" : "perguntas"}{med !== "all" || cat !== "all" || q ? " · " : ""}{(med !== "all" || cat !== "all" || q) && <button type="button" onClick={() => { setMed("all"); setCat("all"); setQ(""); }} className="underline underline-offset-2">limpar filtros</button>}</p>

      {list.length === 0 && <p className="mt-10 rounded-[4px] bg-card p-6 text-sm text-muted">Nenhuma pergunta com esses filtros. Tente outro tema ou limpe a busca.</p>}
      <div className="mt-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        {list.map((a) => (
          <Link key={a.href} href={a.href} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-[4px]"><img src={a.img} alt="" className="photo transition group-hover:scale-[1.02]" loading="lazy" /></div>
            <p className="mt-3 flex flex-wrap gap-x-2 text-xs text-muted"><span>{fmt(a.date)}</span><span className="text-border">|</span><span>{a.medLabel}</span><span className="text-border">|</span><span>{a.intentLabel}</span></p>
            <h3 className="mt-1 text-xl leading-snug">{a.title}</h3>
            <p className="mt-2 text-sm font-medium">Ler mais <span aria-hidden>↗</span></p>
          </Link>
        ))}
      </div>
    </div>
  );
}
