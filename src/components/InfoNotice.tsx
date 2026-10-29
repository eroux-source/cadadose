import { dictionary as t } from "@/i18n/dictionaries";

/** "For information only, not medical advice…" shown wherever treatment information appears. */
export default function InfoNotice({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <p role="note" className={`rounded-[4px] border px-3 py-2 text-xs font-light ${light ? "border-white/15 bg-white/5 text-white/70" : "border-border bg-card text-muted"} ${className}`}>
      <strong className="font-medium">{t.content.infoOnlyTitle}</strong> {t.content.infoOnly}
    </p>
  );
}
