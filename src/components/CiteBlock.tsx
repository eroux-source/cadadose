"use client";
import { useState } from "react";
import { siteUrl } from "@/lib/locales";

/** "Cite this page": ready-made citation + link. Makes the page easy to quote (and to link). */
export default function CiteBlock({ title, path, updated }: { title: string; path: string; updated: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${siteUrl}${path}`;
  const d = new Date(updated + "T12:00:00").toLocaleDateString("pt-BR");
  const text = `CadaDose. "${title}". Baseado na bula do paciente aprovada pela ANVISA. Atualizado em ${d}. ${url}`;
  const html = `<a href="${url}">${title}</a> — CadaDose, baseado na bula aprovada pela ANVISA`;
  async function copy(s: string) {
    try { await navigator.clipboard.writeText(s); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  }
  return (
    <aside className="mt-10 rounded-2xl border border-border bg-card p-4 text-sm">
      <p className="font-semibold">Citar esta página</p>
      <p className="mt-1 text-muted">Pode copiar o trecho e o link. Pedimos só que a citação mantenha a referência à bula e a data.</p>
      <pre className="mt-3 whitespace-pre-wrap rounded-xl bg-background p-3 text-xs">{text}</pre>
      <div className="mt-2 flex flex-wrap gap-2">
        <button onClick={() => copy(text)} className="btn btn-ghost !py-1.5 !px-3 text-xs">{copied ? "Copiado" : "Copiar citação"}</button>
        <button onClick={() => copy(html)} className="btn btn-ghost !py-1.5 !px-3 text-xs">Copiar link HTML</button>
      </div>
    </aside>
  );
}
