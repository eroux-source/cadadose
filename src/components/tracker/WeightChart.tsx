"use client";

import type { WeightEntry, Shot } from "@/lib/storage";

/**
 * Dependency-free SVG weight chart. Dose changes (from the shots log) are drawn as
 * vertical markers so the user sees what happened when the dose changed.
 */
export default function WeightChart({ weights, shots }: { weights: WeightEntry[]; shots: Shot[] }) {
  const pts = [...weights].sort((a, b) => a.at.localeCompare(b.at));
  if (pts.length < 2) return null;

  const W = 640;
  const H = 240;
  const pad = { l: 40, r: 12, t: 16, b: 28 };
  const xs = pts.map((p) => new Date(p.at).getTime());
  const ys = pts.map((p) => p.kg);
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const yMin = Math.floor(Math.min(...ys) - 1);
  const yMax = Math.ceil(Math.max(...ys) + 1);
  const sx = (x: number) => pad.l + ((x - x0) / Math.max(1, x1 - x0)) * (W - pad.l - pad.r);
  const sy = (y: number) => pad.t + ((yMax - y) / Math.max(1, yMax - yMin)) * (H - pad.t - pad.b);

  const path = pts.map((p, i) => `${i ? "L" : "M"}${sx(new Date(p.at).getTime()).toFixed(1)},${sy(p.kg).toFixed(1)}`).join(" ");

  // Dose change markers: first shot where the dose differs from the previous one.
  const sortedShots = [...shots].sort((a, b) => a.at.localeCompare(b.at));
  const changes: Shot[] = [];
  sortedShots.forEach((s, i) => {
    if (i > 0 && s.doseValue !== sortedShots[i - 1].doseValue) changes.push(s);
  });

  const ticks = 4;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="weight chart">
      {Array.from({ length: ticks + 1 }).map((_, i) => {
        const y = yMin + ((yMax - yMin) * i) / ticks;
        return (
          <g key={i}>
            <line x1={pad.l} x2={W - pad.r} y1={sy(y)} y2={sy(y)} stroke="currentColor" strokeOpacity="0.12" />
            <text x={pad.l - 6} y={sy(y) + 4} fontSize="11" textAnchor="end" fill="currentColor" opacity="0.6">
              {Number.isInteger(y) ? y : y.toFixed(1)}
            </text>
          </g>
        );
      })}
      {changes.map((s) => {
        const x = sx(new Date(s.at).getTime());
        if (x < pad.l || x > W - pad.r) return null;
        return (
          <g key={s.id}>
            <line x1={x} x2={x} y1={pad.t} y2={H - pad.b} stroke="var(--accent)" strokeDasharray="4 4" />
            <text x={x + 4} y={pad.t + 10} fontSize="10" fill="var(--accent)">
              {s.doseValue} {s.doseUnit}
            </text>
          </g>
        );
      })}
      <path d={path} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      {pts.map((p) => (
        <circle key={p.id} cx={sx(new Date(p.at).getTime())} cy={sy(p.kg)} r="3.5" fill="var(--accent)" />
      ))}
      <text x={pad.l} y={H - 8} fontSize="11" fill="currentColor" opacity="0.6">
        {new Date(pts[0].at).toLocaleDateString()}
      </text>
      <text x={W - pad.r} y={H - 8} fontSize="11" textAnchor="end" fill="currentColor" opacity="0.6">
        {new Date(pts[pts.length - 1].at).toLocaleDateString()}
      </text>
    </svg>
  );
}
