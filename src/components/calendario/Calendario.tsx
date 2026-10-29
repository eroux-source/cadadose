"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { medications } from "@/lib/medications";
import InfoNotice from "@/components/InfoNotice";

/**
 * Treatment calendar. It never recommends a dose: the user enters the prescribed dose and the
 * step they are on; the calendar lays out dates using the bula's fixed schedule (weekly, 4-week
 * steps on the bula ladder) and the pen-validity rule. "Next step" is shown as what the bula lists,
 * labelled as the doctor's decision.
 */
const WEEKS_PER_STEP = 4; // Mounjaro bula: ≥4 weeks per dose; Wegovy/Ozempic: 4 weeks per step
const dayNames = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];
const fmt = (d: Date) => d.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" });
const addDays = (d: Date, n: number) => new Date(d.getTime() + n * 864e5);

export default function Calendario() {
  const [slug, setSlug] = useState("mounjaro");
  const med = medications.find((m) => m.slug === slug)!;
  const [start, setStart] = useState("2026-01-05");
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setStart(new Date().toISOString().slice(0, 10)); setMounted(true); }, []);
  const [doseIdx, setDoseIdx] = useState(0);
  const [weeksIn, setWeeksIn] = useState(0);
  const [consultIn, setConsultIn] = useState(8);

  const steps = med.doseStepsMg;
  const plan = useMemo(() => {
    const d0 = new Date(start + "T12:00:00");
    const dose = steps.length ? `${steps[doseIdx].toLocaleString("pt-BR")} mg` : "dose da receita";
    const rows: { date: Date; week: number; dose: string; note?: string }[] = [];
    let left = Math.max(1, WEEKS_PER_STEP - weeksIn);
    for (let w = 0; w < 16; w++) {
      const note = w === 0 ? "próxima aplicação" : left === 1 ? "fim do bloco de 4 semanas da bula: reavaliação com o médico" : undefined;
      rows.push({ date: addDays(d0, 7 * w), week: w + 1, dose, note });
      left = left <= 1 ? WEEKS_PER_STEP : left - 1;
    }
    return rows;
  }, [start, doseIdx, weeksIn, steps]);

  const untilConsult = plan.slice(0, consultIn);
  const pensNeeded = med.dosesPerPen ? Math.ceil(untilConsult.length / med.dosesPerPen) : null;
  const boxes = med.dosesPerPen === 1 ? Math.ceil(untilConsult.length / 4) : pensNeeded;
  const d0 = new Date(start + "T12:00:00");
  const penExpiry = med.storageDays ? addDays(d0, med.storageDays) : null;

  const inp = "mt-1 w-full rounded-xl border border-border bg-background px-3 py-2.5";
  if (!mounted) return <p className="text-sm text-muted">Carregando o calendário…</p>;
  return (
    <div className="grid gap-8 md:grid-cols-[1fr_1.3fr]">
      <form className="rounded-2xl border border-border bg-card p-5" onSubmit={(e) => e.preventDefault()}>
        <label className="block text-sm font-medium">Medicamento</label>
        <select className={inp} value={slug} onChange={(e) => { setSlug(e.target.value); setDoseIdx(0); }}>
          {medications.filter((m) => m.frequency === "weekly").map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}
        </select>
        <label className="mt-4 block text-sm font-medium">Data da próxima aplicação</label>
        <input type="date" className={inp} value={start} onChange={(e) => setStart(e.target.value)} />
        {steps.length > 0 && (
          <>
            <label className="mt-4 block text-sm font-medium">Dose que está na sua receita</label>
            <select className={inp} value={doseIdx} onChange={(e) => setDoseIdx(Number(e.target.value))}>
              {steps.map((s, i) => <option key={s} value={i}>{s.toLocaleString("pt-BR")} mg</option>)}
            </select>
            <label className="mt-4 block text-sm font-medium">Semanas já feitas nessa dose</label>
            <input type="number" min={0} max={52} className={inp} value={weeksIn} onChange={(e) => setWeeksIn(Number(e.target.value))} />
          </>
        )}
        <label className="mt-4 block text-sm font-medium">Próxima consulta daqui a (semanas)</label>
        <input type="number" min={1} max={16} className={inp} value={consultIn} onChange={(e) => setConsultIn(Number(e.target.value))} />
        <p className="mt-4 text-xs text-muted">O calendário usa a escada e os prazos da bula do paciente; não sugere dose. Mudanças de dose são decisão do médico.</p>
      </form>

      <div>
        <div className="rounded-2xl border border-border bg-card p-5">
          <p className="eyebrow">Seu calendário até a consulta</p>
          <p className="mt-1 text-sm text-muted">Aplicação toda {dayNames[d0.getDay()]}. {penExpiry && med.form === "single-use-pen" ? `Caixa fora da geladeira desde ${fmt(d0)}: usar até ${fmt(penExpiry)} (${med.storageDays} dias, bula).` : penExpiry ? `Caneta aberta em ${fmt(d0)}: usar até ${fmt(penExpiry)} (${med.storageDays} dias após o primeiro uso, bula).` : "Conservação: conforme o rótulo da farmácia de manipulação."}</p>
          <table className="mt-4 w-full text-sm">
            <thead><tr className="text-left text-xs text-muted"><th>Semana</th><th>Data</th><th>Dose (sua receita)</th><th></th></tr></thead>
            <tbody>
              {untilConsult.map((r, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-1.5">{i + 1}</td>
                  <td>{fmt(r.date)}</td>
                  <td className="font-medium">{r.dose}</td>
                  <td className="text-xs text-muted">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-4 grid gap-2 sm:grid-cols-3 text-sm">
            <div className="rounded-xl bg-accent-soft p-3"><p className="text-xs text-muted">Aplicações até a consulta</p><p className="text-xl font-semibold">{untilConsult.length}</p></div>
            {boxes != null && <div className="rounded-xl bg-accent-soft p-3"><p className="text-xs text-muted">{med.dosesPerPen === 1 ? "Caixas (4 canetas)" : "Canetas (4 doses)"}</p><p className="text-xl font-semibold">{boxes}</p></div>}
            {med.missedDoseWindowHours && <div className="rounded-xl bg-accent-soft p-3"><p className="text-xs text-muted">Se esquecer (bula)</p><p className="text-xl font-semibold">{med.missedDoseWindowHours} h</p></div>}
          </div>
          <p className="mt-3 text-xs text-muted">Fonte: {med.sources[0] ? <a href={med.sources[0].url} target="_blank" rel="noopener" className="underline">{med.sources[0].label}</a> : "rótulo da farmácia"} · <Link href={`/medicamentos/${slug}/tabela-de-dose`} className="underline">ver a tabela da bula</Link></p>
          <InfoNotice className="mt-3" />
        </div>

        <div className="mt-4 rounded-2xl bg-accent-soft p-5">
          <p className="font-semibold">Quer o lembrete de cada aplicação no celular?</p>
          <p className="mt-1 text-sm text-muted">O diário é grátis, sem conta, e avisa no dia da dose. Os dados ficam no seu aparelho.</p>
          <Link href="/app" className="btn btn-primary mt-3">Abrir meu diário</Link>
        </div>
      </div>
    </div>
  );
}
