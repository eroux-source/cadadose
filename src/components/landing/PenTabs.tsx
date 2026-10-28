"use client";
import { useState } from "react";
import Link from "next/link";
import InfoNotice from "@/components/InfoNotice";

type Med = { slug: string; name: string; storageDays: number; storageLabel: string; dosesPerPen: number | null; source: { label: string; url: string } };

export default function PenTabs({ meds }: { meds: Med[] }) {
  const [i, setI] = useState(0);
  const m = meds[i];
  const elapsed = Math.round(m.storageDays * 0.4);
  return (
    <div className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-border bg-card p-6 md:p-8">
      <div className="flex flex-wrap gap-2">
        {meds.map((x, k) => (
          <button key={x.slug} onClick={() => setI(k)} className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${k === i ? "bg-accent text-white" : "bg-accent-soft text-foreground hover:bg-border"}`}>
            {x.name.split(" (")[0]}
          </button>
        ))}
        <Link href="/medicamentos" className="rounded-full px-4 py-1.5 text-sm text-muted underline">Mais medicamentos</Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="tile bg-accent text-white">
          <p className="text-4xl font-semibold">{m.storageDays}</p>
          <p className="mt-1 text-sm opacity-80">dias {m.storageLabel}</p>
        </div>
        <div className="tile bg-accent-soft">
          <p className="text-4xl font-semibold">{m.storageDays - elapsed}</p>
          <p className="mt-1 text-sm text-muted">dias restantes (exemplo: aberta há {elapsed} dias)</p>
        </div>
        <div className="tile bg-accent-soft">
          <p className="text-4xl font-semibold">{m.dosesPerPen ?? "—"}</p>
          <p className="mt-1 text-sm text-muted">{m.dosesPerPen === 1 ? "dose por caneta (uso único)" : "doses por caneta"}</p>
        </div>
      </div>
      <div className="mt-4 h-2 rounded-full bg-border"><div className="h-2 rounded-full bg-accent transition-all" style={{ width: `${(elapsed / m.storageDays) * 100}%` }} /></div>
      <p className="mt-4 text-xs text-muted">
        Fonte: <a href={m.source.url} target="_blank" rel="noopener" className="underline hover:text-accent">{m.source.label}</a> ·{" "}
        <Link href={`/medicamentos/${m.slug}/validade-depois-de-aberta`} className="underline hover:text-accent">ler a resposta completa</Link>
      </p>
      <InfoNotice className="mt-3" />
    </div>
  );
}
