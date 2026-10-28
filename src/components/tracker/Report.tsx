"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useStore } from "@/lib/storage";
import { getMedication } from "@/lib/medications";
import { dictionary } from "@/i18n/dictionaries";
import WeightChart from "./WeightChart";

const fmt = (iso: string, withTime = false) =>
  new Date(iso.length === 10 ? iso + "T12:00:00" : iso).toLocaleString("pt-BR", withTime ? { dateStyle: "short", timeStyle: "short" } : { dateStyle: "short" });

/**
 * One-page treatment report the patient prints or saves as PDF for the consultation.
 * Rendered entirely on the device from local data; nothing is uploaded.
 */
export default function Report() {
  const store = useStore();
  const t = dictionary.tracker;
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const med = store.profile ? getMedication(store.profile.medicationSlug) : undefined;
  const shots = [...store.shots].sort((a, b) => a.at.localeCompare(b.at));
  const weights = [...store.weights].sort((a, b) => a.at.localeCompare(b.at));
  const symptoms = [...store.symptoms].sort((a, b) => a.at.localeCompare(b.at));
  const delta = weights.length > 1 ? weights[weights.length - 1].kg - weights[0].kg : null;
  const period = shots.length ? `${fmt(shots[0].at)} a ${fmt(shots[shots.length - 1].at)}` : "—";

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 print:max-w-none print:px-0">
      <style>{`@media print { nav, footer, header, .no-print { display: none !important } body { background: #fff } }`}</style>
      <div className="no-print mb-6 flex flex-wrap items-center gap-3 text-sm">
        <button onClick={() => window.print()} className="rounded-full bg-accent px-5 py-2.5 text-white font-medium">
          Salvar em PDF / imprimir
        </button>
        <Link href="/app" className="underline text-muted">Voltar ao diário</Link>
        <span className="text-muted">Gerado no seu aparelho. Nada é enviado.</span>
      </div>

      <header className="border-b border-border pb-4">
        <h1 className="text-2xl font-semibold">Relatório de tratamento</h1>
        <p className="text-sm text-muted">CadaDose · gerado em {new Date().toLocaleDateString("pt-BR")} · registro feito pelo próprio paciente</p>
      </header>

      <section className="mt-6 grid gap-4 md:grid-cols-2 text-sm">
        <div className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Tratamento informado</h2>
          <p className="mt-2">Medicamento: <strong>{med?.name ?? "—"}</strong></p>
          <p>Dose prescrita (informada): <strong>{store.profile?.doseValue ?? "—"} {store.profile?.doseUnit ?? ""}</strong></p>
          <p>Dia da semana: {store.profile ? t.profile.days[store.profile.weekday] : "—"}</p>
          <p>Período registrado: {period}</p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <h2 className="font-semibold">Resumo</h2>
          <p className="mt-2">Aplicações registradas: <strong>{shots.length}</strong></p>
          <p>Pesagens: <strong>{weights.length}</strong>{delta != null && <> · variação <strong>{delta > 0 ? "+" : ""}{delta.toFixed(1)} kg</strong></>}</p>
          <p>Efeitos registrados: <strong>{symptoms.length}</strong></p>
        </div>
      </section>

      {weights.length > 1 && (
        <section className="mt-6">
          <h2 className="font-semibold">Curva de peso (linhas tracejadas = mudança de dose)</h2>
          <div className="mt-2 text-foreground"><WeightChart weights={weights} shots={shots} /></div>
        </section>
      )}

      <section className="mt-6 text-sm">
        <h2 className="font-semibold">Aplicações</h2>
        <table className="mt-2 w-full border-collapse">
          <thead><tr>{["Data", "Dose", "Local", "Obs."].map((h) => <th key={h} className="border-b border-border py-1 pr-3 text-left">{h}</th>)}</tr></thead>
          <tbody>
            {shots.map((s) => (
              <tr key={s.id}>
                <td className="border-b border-border py-1 pr-3">{fmt(s.at, true)}</td>
                <td className="border-b border-border py-1 pr-3">{s.doseValue ?? "—"} {s.doseUnit}</td>
                <td className="border-b border-border py-1 pr-3">{t.sites[s.siteIndex]}</td>
                <td className="border-b border-border py-1 pr-3">{s.note ?? ""}</td>
              </tr>
            ))}
            {shots.length === 0 && <tr><td className="py-2 text-muted" colSpan={4}>Nenhuma aplicação registrada.</td></tr>}
          </tbody>
        </table>
      </section>

      <section className="mt-6 text-sm">
        <h2 className="font-semibold">Efeitos colaterais relatados</h2>
        <table className="mt-2 w-full border-collapse">
          <thead><tr>{["Data", "Efeito", "Intensidade", "Obs."].map((h) => <th key={h} className="border-b border-border py-1 pr-3 text-left">{h}</th>)}</tr></thead>
          <tbody>
            {symptoms.map((s) => (
              <tr key={s.id}>
                <td className="border-b border-border py-1 pr-3">{fmt(s.at)}</td>
                <td className="border-b border-border py-1 pr-3">{t.symptoms.list[s.symptomIndex]}</td>
                <td className="border-b border-border py-1 pr-3">{t.symptoms.intensity[s.intensity]}</td>
                <td className="border-b border-border py-1 pr-3">{s.note ?? ""}</td>
              </tr>
            ))}
            {symptoms.length === 0 && <tr><td className="py-2 text-muted" colSpan={4}>Nenhum efeito registrado.</td></tr>}
          </tbody>
        </table>
      </section>

      <p className="mt-8 text-xs text-muted">
        Este relatório reúne registros feitos pelo paciente no diário CadaDose. Não é um documento médico e não substitui a avaliação do profissional de saúde.
      </p>
    </div>
  );
}
