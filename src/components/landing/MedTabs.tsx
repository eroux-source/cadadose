"use client";
import { useState } from "react";
import Link from "next/link";

type Med = { slug: string; name: string; generic: string; img: string; count: number; frequency: string; storage: string; themes: string[] };

export default function MedTabs({ meds }: { meds: Med[] }) {
  const [i, setI] = useState(0);
  const m = meds[i];
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-[1fr_2fr]">
      <ol className="divide-y divide-border border-y border-border">
        {meds.map((x, k) => (
          <li key={x.slug}>
            <button onClick={() => setI(k)} className={`flex w-full items-baseline gap-4 py-4 text-left transition ${k === i ? "text-foreground" : "text-muted hover:text-foreground"}`}>
              <span className="w-6 text-xs text-label">{String(k + 1).padStart(2, "0")}</span>
              <span className="text-xl md:text-2xl">{x.name}</span>
              <span className="ml-auto text-xs text-label">{x.count} respostas</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="grid gap-6 rounded-md bg-card p-4 md:grid-cols-[1fr_1fr] md:p-6">
        <div className="aspect-[3/2] overflow-hidden rounded-md md:aspect-auto md:h-full"><img src={m.img} alt="" className="photo" /></div>
        <div className="flex flex-col">
          <p className="eyebrow">{m.generic} · {m.frequency}</p>
          <h3 className="mt-2 text-2xl md:text-3xl">{m.name}</h3>
          <p className="mt-3 text-sm text-muted">Conservação pela bula: {m.storage}.</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {m.themes.map((th) => <span key={th} className="chip">{th}</span>)}
          </div>
          <Link href={`/medicamentos/${m.slug}`} className="btn btn-primary mt-6 w-fit">Ver as {m.count} respostas</Link>
        </div>
      </div>
    </div>
  );
}
