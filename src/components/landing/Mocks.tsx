/* Phone-style mockups of the diary, rendered in pure CSS/SVG (no screenshots). */

function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <figure className="w-full pb-6 sm:pb-10">
      <div className="mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-border bg-card p-3 shadow-[0_30px_60px_-30px_rgba(20,32,26,.35)]">
        <div className="mx-auto mb-3 h-1.5 w-16 rounded-full bg-border" />
        <div className="rounded-[1.6rem] bg-background p-4 text-[13px] leading-snug">{children}</div>
      </div>
      <figcaption className="mt-3 text-center text-xs opacity-70">{label}</figcaption>
    </figure>
  );
}

export function MockToday() {
  return (
    <Phone label="Hoje">
      <div className="flex items-center justify-between text-[11px] text-muted">
        <span>Hoje</span>
        <span className="rounded-full bg-warm px-2 py-0.5 font-semibold text-warm-ink">semana 9</span>
      </div>
      <p className="mt-3 text-[11px] text-muted">Próxima aplicação</p>
      <p className="text-lg font-semibold leading-tight">quarta, 4 de nov</p>
      <p className="text-[12px] text-muted">Mounjaro · 5 mg · 09:00</p>
      <div className="mt-3 rounded-full bg-accent px-3 py-2 text-center text-[12px] font-medium text-white">Registrar aplicação</div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-xl bg-accent-soft p-2.5">
          <p className="text-muted">Local sugerido</p>
          <p className="mt-0.5 font-semibold">Coxa (dir.)</p>
        </div>
        <div className="rounded-xl bg-accent-soft p-2.5">
          <p className="text-muted">Fora da geladeira</p>
          <p className="mt-0.5 font-semibold">16 dias</p>
        </div>
      </div>
    </Phone>
  );
}

export function MockWeight() {
  return (
    <Phone label="Curva de peso">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-[11px] text-muted">Variação total</p>
          <p className="text-2xl font-semibold text-accent">−5,5 kg</p>
        </div>
        <span className="text-[11px] text-muted">9 semanas</span>
      </div>
      <svg viewBox="0 0 220 90" className="mt-3 w-full">
        <polyline fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" points="8,18 45,28 85,34 125,52 165,62 212,70" />
        <line x1="105" x2="105" y1="6" y2="84" stroke="var(--accent)" strokeDasharray="4 4" opacity=".6" />
        <text x="109" y="14" fontSize="9" fill="var(--muted)">5 mg</text>
      </svg>
      <div className="mt-2 flex gap-1 text-[10px]">
        {["7d", "30d", "90d", "Tudo"].map((r, i) => (
          <span key={r} className={`rounded-full px-2 py-0.5 ${i === 3 ? "bg-accent text-white" : "bg-card text-muted"}`}>{r}</span>
        ))}
      </div>
    </Phone>
  );
}

export function MockSymptoms() {
  const rows = [
    ["2,5 mg", "Náusea leve", 1],
    ["5 mg", "Náusea moderada", 2],
    ["5 mg", "Sem efeitos", 0],
  ] as const;
  return (
    <Phone label="Efeitos por dose">
      <p className="font-semibold">Como você se sentiu</p>
      <ul className="mt-2 space-y-2">
        {rows.map(([dose, s, lvl], i) => (
          <li key={i} className="flex items-center justify-between rounded-xl bg-card px-3 py-2">
            <span>
              <span className="block text-[11px] text-muted">{dose}</span>
              <span className="font-medium">{s}</span>
            </span>
            <span className="flex gap-0.5">
              {[0, 1, 2].map((d) => (
                <span key={d} className={`h-2 w-2 rounded-full ${d < lvl ? "bg-accent" : "bg-border"}`} />
              ))}
            </span>
          </li>
        ))}
      </ul>
    </Phone>
  );
}

export function MockReport() {
  return (
    <Phone label="Relatório para o médico">
      <p className="text-[11px] text-muted">Relatório · 8 semanas</p>
      <p className="font-semibold">Mounjaro 2,5 → 5 mg</p>
      <div className="mt-3 grid grid-cols-3 gap-1.5 text-center text-[10px]">
        {[["8", "aplicações"], ["−5,5", "kg"], ["3", "efeitos"]].map(([n, l]) => (
          <div key={l} className="rounded-xl bg-accent-soft py-2">
            <p className="text-base font-semibold">{n}</p>
            <p className="text-muted">{l}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[70, 55, 85, 40].map((w, i) => (
          <div key={i} className="h-2 rounded-full bg-border"><div className="h-2 rounded-full bg-accent/60" style={{ width: `${w}%` }} /></div>
        ))}
      </div>
      <div className="mt-3 rounded-full border border-border bg-card py-1.5 text-center text-[11px] font-medium">Imprimir / PDF</div>
    </Phone>
  );
}

export function MockStock() {
  return (
    <Phone label="Estoque e validade">
      <p className="font-semibold">Caneta atual</p>
      <p className="text-[11px] text-muted">Ozempic 0,5 mg · aberta em 12 out</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-semibold text-accent">27 dias</p>
        <span className="text-[11px] text-muted">de 42 (bula)</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-border"><div className="h-2 w-[36%] rounded-full bg-accent" /></div>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        <div className="rounded-xl bg-accent-soft p-2.5"><p className="text-muted">Doses restantes</p><p className="font-semibold">2 de 4</p></div>
        <div className="rounded-xl bg-accent-soft p-2.5"><p className="text-muted">Em casa</p><p className="font-semibold">1 caneta</p></div>
      </div>
    </Phone>
  );
}
