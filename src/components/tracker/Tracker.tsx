"use client";

import { useEffect, useMemo, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import { medications, getMedication } from "@/lib/medications";
import { exportStore, resetStore, uid, updateStore, useStore, type Profile, type Shot } from "@/lib/storage";
import WeightChart from "./WeightChart";
import { shareWeightChart } from "@/lib/shareChart";

type Tab = "today" | "shots" | "weight" | "symptoms" | "stock" | "profile";

const dayMs = 86_400_000;
const toISODate = (d: Date) => d.toISOString().slice(0, 10);
const nowLocalInput = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
};

export default function Tracker({ t }: { t: Dictionary["tracker"] }) {
  // Everything below reads localStorage, so render only after mount: the server snapshot is always empty.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="mx-auto max-w-3xl px-4 py-6 text-sm text-muted">…</div>;
  return <TrackerBody t={t} />;
}

function TrackerBody({ t }: { t: Dictionary["tracker"] }) {
  const store = useStore();
  const [tab, setTab] = useState<Tab>(store.profile ? "today" : "profile");
  const med = store.profile ? getMedication(store.profile.medicationSlug) : undefined;

  const sortedShots = useMemo(() => [...store.shots].sort((a, b) => b.at.localeCompare(a.at)), [store.shots]);
  const lastShot = sortedShots[0];

  // Next application date (weekly: last shot + 7 days, or the next chosen weekday; daily: tomorrow / today).
  const nextDue = useMemo(() => {
    if (!store.profile || !med) return null;
    if (med.frequency === "daily") {
      if (!lastShot) return new Date();
      const d = new Date(lastShot.at);
      d.setDate(d.getDate() + 1);
      return d;
    }
    if (lastShot) {
      const d = new Date(lastShot.at);
      d.setDate(d.getDate() + 7);
      return d;
    }
    const d = new Date();
    const delta = (store.profile.weekday - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + delta);
    return d;
  }, [store.profile, med, lastShot]);

  const todayISO = toISODate(new Date());
  const doneToday = !!lastShot && toISODate(new Date(lastShot.at)) === todayISO;
  const overdue = !!nextDue && !doneToday && toISODate(nextDue) < todayISO;

  const suggestedSite = lastShot ? (lastShot.siteIndex + 1) % t.sites.length : 0;

  // Pen / vial validity.
  const daysAfterOpening = store.stock.daysAfterOpening ?? med?.storageDays ?? null;
  const expiresAt =
    store.stock.currentOpenedAt && daysAfterOpening
      ? new Date(new Date(store.stock.currentOpenedAt).getTime() + daysAfterOpening * dayMs)
      : null;
  const penDaysLeft = expiresAt ? Math.ceil((expiresAt.getTime() - Date.now()) / dayMs) : null;
  const shotsSinceOpened = store.stock.currentOpenedAt
    ? store.shots.filter((s) => s.at >= store.stock.currentOpenedAt!).length
    : 0;
  const dosesLeft = med?.form === "multidose-pen" && med.dosesPerPen != null ? Math.max(0, med.dosesPerPen - shotsSinceOpened) : null;

  // Gentle reminder when the app is open on the due day (web push arrives in sprint 2).
  useEffect(() => {
    if (!nextDue || doneToday || typeof Notification === "undefined") return;
    if (toISODate(nextDue) !== todayISO || Notification.permission !== "granted") return;
    const key = `cadadose:notified:${todayISO}`;
    if (sessionStorage.getItem(key)) return;
    new Notification("CadaDose", { body: t.today.next });
    sessionStorage.setItem(key, "1");
  }, [nextDue, doneToday, todayISO, t.today.next]);

  const logNow = () => {
    if (!store.profile) return;
    const shot: Shot = {
      id: uid(),
      at: new Date().toISOString(),
      doseValue: store.profile.doseValue,
      doseUnit: store.profile.doseUnit,
      siteIndex: suggestedSite,
    };
    updateStore((s) => ({ ...s, shots: [shot, ...s.shots] }));
    setTab("shots");
  };

  const tabs: Tab[] = ["today", "shots", "weight", "symptoms", "stock", "profile"];

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <nav className="flex gap-1 overflow-x-auto rounded-full border border-border bg-card p-1 text-sm">
        {tabs.map((k) => (
          <button
            key={k}
            onClick={() => setTab(k)}
            className={`whitespace-nowrap rounded-full px-3 py-1.5 ${tab === k ? "bg-accent text-white" : "hover:bg-accent-soft"}`}
          >
            {t.tabs[k]}
          </button>
        ))}
      </nav>

      <section className="mt-6">
        {tab === "today" && (
          <Card title={t.tabs.today}>
            {!store.profile || !med ? (
              <p className="text-muted">{t.today.noProfile}</p>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted">{overdue ? t.today.overdue : t.today.next}</p>
                  <p className={`text-2xl font-semibold ${overdue ? "text-red-600" : ""}`}>
                    {doneToday ? t.today.done : nextDue?.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
                  </p>
                  <p className="text-sm text-muted">
                    {med.name} · {store.profile.doseValue ?? "—"} {store.profile.doseUnit} · {store.profile.reminderTime}
                  </p>
                </div>
                {!doneToday && (
                  <div className="flex flex-wrap items-center gap-3">
                    <button onClick={logNow} className="rounded-full bg-accent px-5 py-2.5 text-white font-medium">
                      {t.today.logNow}
                    </button>
                    <span className="text-sm text-muted">
                      {t.today.suggestedSite}: <strong>{t.sites[suggestedSite]}</strong>
                    </span>
                  </div>
                )}
                {penDaysLeft != null && (
                  <p className="text-sm">
                    {t.today.penDays}: <strong className={penDaysLeft <= 3 ? "text-red-600" : ""}>{penDaysLeft}</strong>
                    {dosesLeft != null && <span className="text-muted"> · {t.stock.dosesLeft}: {dosesLeft}</span>}
                  </p>
                )}
                {typeof Notification !== "undefined" && Notification.permission === "default" && (
                  <button onClick={() => Notification.requestPermission()} className="text-sm underline text-muted">
                    🔔 {t.profile.time}
                  </button>
                )}
              </div>
            )}
          </Card>
        )}

        {tab === "shots" && <Shots t={t} store={store} />}
        {tab === "weight" && <Weight t={t} store={store} />}
        {tab === "symptoms" && <Symptoms t={t} store={store} />}
        {tab === "stock" && (
          <StockPanel t={t} store={store} med={med} expiresAt={expiresAt} dosesLeft={dosesLeft} />
        )}
        {tab === "profile" && <ProfileForm t={t} profile={store.profile} onSaved={() => setTab("today")} />}
      </section>

      <div className="mt-10 flex flex-wrap gap-4 text-xs text-muted">
        <a href="/app/relatorio" className="underline">Relatório para o médico (PDF)</a>
        <button
          onClick={() => {
            const blob = new Blob([exportStore()], { type: "application/json" });
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = `cadadose-${todayISO}.json`;
            a.click();
          }}
          className="underline"
        >
          {t.export}
        </button>
        <button onClick={() => confirm(t.reset + "?") && resetStore()} className="underline">
          {t.reset}
        </button>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <h2 className="font-semibold mb-4">{title}</h2>
      {children}
    </div>
  );
}

const inputCls = "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm";
const labelCls = "block text-xs text-muted mb-1";

function ProfileForm({
  t,
  profile,
  onSaved,
}: {
  t: Dictionary["tracker"];
  profile: Profile | null;
    onSaved: () => void;
}) {
  const [form, setForm] = useState<Profile>(
    profile ?? { medicationSlug: medications[0].slug, doseValue: null, doseUnit: "mg", weekday: new Date().getDay(), reminderTime: "09:00" },
  );
  const med = getMedication(form.medicationSlug)!;
  const [saved, setSaved] = useState(false);

  return (
    <Card title={t.profile.title}>
      <form
        className="grid gap-4 md:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          updateStore((s) => ({ ...s, profile: form, stock: { ...s.stock, daysAfterOpening: s.stock.daysAfterOpening ?? med.storageDays } }));
          setSaved(true);
          setTimeout(onSaved, 600);
        }}
      >
        <div className="md:col-span-2">
          <label className={labelCls}>{t.profile.medication}</label>
          <select
            className={inputCls}
            value={form.medicationSlug}
            onChange={(e) => {
              const m = getMedication(e.target.value)!;
              setForm({ ...form, medicationSlug: m.slug, doseUnit: m.form === "vial" ? "UI" : "mg" });
            }}
          >
            {medications.map((m) => (
              <option key={m.slug} value={m.slug}>
                {m.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelCls}>{t.profile.dose}</label>
          <div className="flex gap-2">
            <input
              type="number"
              step="any"
              min="0"
              className={inputCls}
              value={form.doseValue ?? ""}
              onChange={(e) => setForm({ ...form, doseValue: e.target.value === "" ? null : Number(e.target.value) })}
            />
            <select className={inputCls} value={form.doseUnit} onChange={(e) => setForm({ ...form, doseUnit: e.target.value as "mg" | "UI" })}>
              <option value="mg">{t.profile.unitMg}</option>
              <option value="UI">{t.profile.unitUI}</option>
            </select>
          </div>
          <p className="mt-1 text-xs text-muted">{t.profile.doseHint}</p>
        </div>
        {med.frequency === "weekly" && (
          <div>
            <label className={labelCls}>{t.profile.day}</label>
            <select className={inputCls} value={form.weekday} onChange={(e) => setForm({ ...form, weekday: Number(e.target.value) })}>
              {t.profile.days.map((d, i) => (
                <option key={d} value={i}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className={labelCls}>{t.profile.time}</label>
          <input type="time" className={inputCls} value={form.reminderTime} onChange={(e) => setForm({ ...form, reminderTime: e.target.value })} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="rounded-full bg-accent px-5 py-2.5 text-white font-medium">
            {t.profile.save}
          </button>
          {saved && <span className="text-sm text-muted">{t.profile.saved}</span>}
        </div>
      </form>
    </Card>
  );
}

function Shots({ t, store }: { t: Dictionary["tracker"]; store: ReturnType<typeof useStore> }) {
  const [at, setAt] = useState(nowLocalInput());
  const [dose, setDose] = useState<string>(store.profile?.doseValue?.toString() ?? "");
  const [site, setSite] = useState(0);
  const [note, setNote] = useState("");
  const shots = [...store.shots].sort((a, b) => b.at.localeCompare(a.at));

  return (
    <Card title={t.shots.title}>
      <form
        className="grid gap-3 md:grid-cols-4 items-end"
        onSubmit={(e) => {
          e.preventDefault();
          const shot: Shot = {
            id: uid(),
            at: new Date(at).toISOString(),
            doseValue: dose === "" ? null : Number(dose),
            doseUnit: store.profile?.doseUnit ?? "mg",
            siteIndex: site,
            note: note || undefined,
          };
          updateStore((s) => ({ ...s, shots: [shot, ...s.shots] }));
          setNote("");
          setAt(nowLocalInput());
        }}
      >
        <div>
          <label className={labelCls}>{t.shots.date}</label>
          <input type="datetime-local" className={inputCls} value={at} onChange={(e) => setAt(e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>{t.shots.dose}</label>
          <input type="number" step="any" className={inputCls} value={dose} onChange={(e) => setDose(e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>{t.shots.site}</label>
          <select className={inputCls} value={site} onChange={(e) => setSite(Number(e.target.value))}>
            {t.sites.map((s, i) => (
              <option key={s} value={i}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <button className="rounded-full bg-accent px-4 py-2 text-white text-sm font-medium">{t.shots.add}</button>
        <div className="md:col-span-4">
          <input className={inputCls} placeholder={t.shots.note} value={note} onChange={(e) => setNote(e.target.value)} />
        </div>
      </form>

      <ul className="mt-6 divide-y divide-border">
        {shots.length === 0 && <li className="py-3 text-sm text-muted">{t.shots.empty}</li>}
        {shots.map((s) => (
          <li key={s.id} className="py-3 flex items-center justify-between gap-3 text-sm">
            <div>
              <div className="font-medium">
                {new Date(s.at).toLocaleString("pt-BR", { dateStyle: "medium", timeStyle: "short" })}
              </div>
              <div className="text-muted">
                {s.doseValue ?? "—"} {s.doseUnit} · {t.sites[s.siteIndex]}
                {s.note ? ` · ${s.note}` : ""}
              </div>
            </div>
            <button
              onClick={() => updateStore((st) => ({ ...st, shots: st.shots.filter((x) => x.id !== s.id) }))}
              className="text-xs text-muted underline"
            >
              {t.shots.delete}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Weight({ t, store }: { t: Dictionary["tracker"]; store: ReturnType<typeof useStore> }) {
  const [at, setAt] = useState(toISODate(new Date()));
  const [kg, setKg] = useState("");
  const sorted = [...store.weights].sort((a, b) => a.at.localeCompare(b.at));
  const total = sorted.length > 1 ? sorted[sorted.length - 1].kg - sorted[0].kg : null;

  const share = async () => {
    const svg = document.querySelector<SVGSVGElement>('svg[aria-label="weight chart"]');
    if (!svg || total == null) return;
    const weeks = Math.max(1, Math.round((new Date(sorted[sorted.length - 1].at).getTime() - new Date(sorted[0].at).getTime()) / (7 * dayMs)));
    await shareWeightChart({
      svg,
      headline: `${total > 0 ? "+" : ""}${total.toFixed(1)} kg`,
      subline: `em ${weeks} semana${weeks > 1 ? "s" : ""} · ${sorted.length} pesagens`,
      filename: `meu-progresso-cadadose.png`,
    });
  };

  return (
    <Card title={t.weight.title}>
      <form
        className="flex flex-wrap gap-3 items-end"
        onSubmit={(e) => {
          e.preventDefault();
          if (!kg) return;
          updateStore((s) => ({ ...s, weights: [...s.weights, { id: uid(), at, kg: Number(kg) }] }));
          setKg("");
        }}
      >
        <div>
          <label className={labelCls}>{t.weight.date}</label>
          <input type="date" className={inputCls} value={at} onChange={(e) => setAt(e.target.value)} required />
        </div>
        <div>
          <label className={labelCls}>{t.weight.kg}</label>
          <input type="number" step="0.1" min="20" max="400" className={inputCls} value={kg} onChange={(e) => setKg(e.target.value)} required />
        </div>
        <button className="rounded-full bg-accent px-4 py-2 text-white text-sm font-medium">{t.weight.add}</button>
      </form>

      {sorted.length < 2 ? (
        <p className="mt-6 text-sm text-muted">{t.weight.empty}</p>
      ) : (
        <div className="mt-6">
          <div className="flex items-center justify-between">
            <p className="text-sm">
              {t.weight.total}: <strong className="text-accent">{total! > 0 ? "+" : ""}{total!.toFixed(1)} {t.weight.kg}</strong>
            </p>
            <button onClick={share} className="text-sm underline">
              {t.weight.share}
            </button>
          </div>
          <div className="mt-3 text-foreground">
            <WeightChart weights={store.weights} shots={store.shots} />
          </div>
        </div>
      )}

      <ul className="mt-4 divide-y divide-border text-sm">
        {[...sorted].reverse().slice(0, 10).map((w) => (
          <li key={w.id} className="py-2 flex justify-between">
            <span>{new Date(w.at + "T12:00:00").toLocaleDateString("pt-BR")}</span>
            <span className="flex gap-3">
              <strong>{w.kg.toFixed(1)} {t.weight.kg}</strong>
              <button onClick={() => updateStore((s) => ({ ...s, weights: s.weights.filter((x) => x.id !== w.id) }))} className="text-xs text-muted underline">
                {t.shots.delete}
              </button>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Symptoms({ t, store }: { t: Dictionary["tracker"]; store: ReturnType<typeof useStore> }) {
  const [symptom, setSymptom] = useState(0);
  const [intensity, setIntensity] = useState<0 | 1 | 2>(0);
  const [note, setNote] = useState("");
  const list = [...store.symptoms].sort((a, b) => b.at.localeCompare(a.at));

  return (
    <Card title={t.symptoms.title}>
      <form
        className="grid gap-3 md:grid-cols-4 items-end"
        onSubmit={(e) => {
          e.preventDefault();
          updateStore((s) => ({
            ...s,
            symptoms: [{ id: uid(), at: new Date().toISOString(), symptomIndex: symptom, intensity, note: note || undefined }, ...s.symptoms],
          }));
          setNote("");
        }}
      >
        <div>
          <select className={inputCls} value={symptom} onChange={(e) => setSymptom(Number(e.target.value))}>
            {t.symptoms.list.map((s, i) => (
              <option key={s} value={i}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select className={inputCls} value={intensity} onChange={(e) => setIntensity(Number(e.target.value) as 0 | 1 | 2)}>
            {t.symptoms.intensity.map((s, i) => (
              <option key={s} value={i}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <input className={inputCls} placeholder={t.shots.note} value={note} onChange={(e) => setNote(e.target.value)} />
        <button className="rounded-full bg-accent px-4 py-2 text-white text-sm font-medium">{t.symptoms.add}</button>
      </form>
      <p className="mt-4 text-xs text-muted">{t.symptoms.warning}</p>
      <ul className="mt-4 divide-y divide-border text-sm">
        {list.length === 0 && <li className="py-3 text-muted">{t.symptoms.empty}</li>}
        {list.map((s) => (
          <li key={s.id} className="py-2 flex justify-between gap-3">
            <span>
              {new Date(s.at).toLocaleDateString("pt-BR")} · <strong>{t.symptoms.list[s.symptomIndex]}</strong> ·{" "}
              {t.symptoms.intensity[s.intensity]}
              {s.note ? ` · ${s.note}` : ""}
            </span>
            <button onClick={() => updateStore((st) => ({ ...st, symptoms: st.symptoms.filter((x) => x.id !== s.id) }))} className="text-xs text-muted underline">
              {t.shots.delete}
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function StockPanel({
  t,
  store,
  med,
  expiresAt,
  dosesLeft,
}: {
  t: Dictionary["tracker"];
  store: ReturnType<typeof useStore>;
  med: ReturnType<typeof getMedication>;
  expiresAt: Date | null;
  dosesLeft: number | null;
  }) {
  const fmt = (d: Date) => d.toLocaleDateString("pt-BR", { day: "numeric", month: "long" });
  const days = store.stock.daysAfterOpening ?? med?.storageDays ?? null;

  // Buy-by: whichever comes first, the pen expiry or running out of doses.
  let buyBy: Date | null = expiresAt;
  if (med && dosesLeft != null && store.profile) {
    const lastAt = store.shots[0] ? new Date([...store.shots].sort((a, b) => b.at.localeCompare(a.at))[0].at) : new Date();
    const runOut = new Date(lastAt.getTime() + dosesLeft * (med.frequency === "weekly" ? 7 : 1) * dayMs);
    if (!buyBy || runOut < buyBy) buyBy = runOut;
  }

  return (
    <Card title={t.stock.title}>
      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className={labelCls}>{t.stock.pens}</label>
          <input
            type="number"
            min="0"
            className={inputCls}
            value={store.stock.pensAtHome}
            onChange={(e) => updateStore((s) => ({ ...s, stock: { ...s.stock, pensAtHome: Number(e.target.value) } }))}
          />
        </div>
        <div>
          <label className={labelCls}>{med?.form === "single-use-pen" ? t.stock.outOfFridge : t.stock.opened}</label>
          <input
            type="date"
            className={inputCls}
            value={store.stock.currentOpenedAt ?? ""}
            onChange={(e) => updateStore((s) => ({ ...s, stock: { ...s.stock, currentOpenedAt: e.target.value || null } }))}
          />
        </div>
        <div>
          <label className={labelCls}>{t.stock.rule} (dias)</label>
          <input
            type="number"
            min="1"
            className={inputCls}
            value={days ?? ""}
            onChange={(e) => updateStore((s) => ({ ...s, stock: { ...s.stock, daysAfterOpening: e.target.value ? Number(e.target.value) : null } }))}
          />
        </div>
      </div>

      {!store.stock.currentOpenedAt ? (
        <p className="mt-4 text-sm text-muted">{t.stock.empty}</p>
      ) : (
        <dl className="mt-6 grid gap-3 md:grid-cols-3 text-sm">
          {expiresAt && (
            <div className="rounded-xl bg-accent-soft p-3">
              <dt className="text-muted">{t.stock.expires}</dt>
              <dd className="font-semibold">{fmt(expiresAt)}</dd>
            </div>
          )}
          {dosesLeft != null && (
            <div className="rounded-xl bg-accent-soft p-3">
              <dt className="text-muted">{t.stock.dosesLeft}</dt>
              <dd className="font-semibold">{dosesLeft}</dd>
            </div>
          )}
          {buyBy && store.stock.pensAtHome <= 1 && (
            <div className="rounded-xl bg-accent-soft p-3">
              <dt className="text-muted">{t.stock.buyBy}</dt>
              <dd className="font-semibold">{fmt(buyBy)}</dd>
            </div>
          )}
        </dl>
      )}
      {med && (
        <p className="mt-4 text-xs text-muted">
          {t.stock.rule}: {med.storageDays ?? "—"} dias {med.storageLabel ?? ""}
          {med.sources[0] && (
            <> · Fonte: <a href={med.sources[0].url} target="_blank" rel="noopener" className="underline">{med.sources[0].label}</a></>
          )}
          {!med.reviewed && " · revisão profissional pendente"}
        </p>
      )}
    </Card>
  );
}
