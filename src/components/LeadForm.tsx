"use client";
import { useState } from "react";
import { medications } from "@/lib/medications";

const wants = [
  ["lembrete", "Lembrete semanal da aplicação"],
  ["validade", "Aviso de validade da caneta"],
  ["relatorio", "Relatório para levar ao médico"],
  ["efeitos", "Registro de efeitos por dose"],
];

export default function LeadForm({ source }: { source: string }) {
  const [contact, setContact] = useState("");
  const [med, setMed] = useState("");
  const [want, setWant] = useState<string[]>(["lembrete"]);
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setState("sending");
    const r = await fetch("/api/lead", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ contact, med, want, source }) }).catch(() => null);
    setState(r?.ok ? "done" : "error");
  }

  if (state === "done")
    return (
      <div className="rounded-2xl bg-accent-soft p-5">
        <p className="font-semibold">Anotado. Você vai saber primeiro.</p>
        <p className="mt-1 text-sm text-muted">Enquanto isso, as respostas da bula já estão no ar em <a href="/perguntas" className="underline">Perguntas</a>.</p>
      </div>
    );

  return (
    <form onSubmit={submit} className="rounded-2xl border border-border bg-card p-5">
      <label className="block text-sm font-medium" htmlFor="contact">Seu e-mail ou WhatsApp</label>
      <input id="contact" required value={contact} onChange={(e) => setContact(e.target.value)} placeholder="voce@email.com ou (11) 9…" className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5" />
      <label className="mt-4 block text-sm font-medium" htmlFor="med">Qual medicamento você usa?</label>
      <select id="med" value={med} onChange={(e) => setMed(e.target.value)} className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5">
        <option value="">Prefiro não dizer</option>
        {medications.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}
        <option value="outro">Outro</option>
      </select>
      <p className="mt-4 text-sm font-medium">O que você mais quer no app?</p>
      <div className="mt-1 grid gap-1.5 sm:grid-cols-2">
        {wants.map(([k, label]) => (
          <label key={k} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={want.includes(k)} onChange={(e) => setWant(e.target.checked ? [...want, k] : want.filter((x) => x !== k))} />
            {label}
          </label>
        ))}
      </div>
      <button disabled={state === "sending"} className="btn btn-primary mt-5 w-full">{state === "sending" ? "Enviando…" : "Me avise quando lançar"}</button>
      {state === "error" && <p className="mt-2 text-sm text-red-600">Não deu certo. Tente de novo em instantes.</p>}
      <p className="mt-3 text-xs text-muted">Só para avisar do lançamento. Sem spam, sem venda de dados.</p>
    </form>
  );
}
