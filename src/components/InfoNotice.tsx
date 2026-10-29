import { dictionary as t } from "@/i18n/dictionaries";

/** "For information only, not medical advice…" shown wherever treatment information appears. */
export default function InfoNotice({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <p role="note" className={`rounded-md border px-3 py-2 text-xs ${light ? "border-white/20 bg-white/10 text-white/80" : "border-border bg-accent-soft/60 text-muted"} ${className}`}>
      <strong className="font-semibold">{t.content.infoOnlyTitle}</strong> {t.content.infoOnly}
    </p>
  );
}
