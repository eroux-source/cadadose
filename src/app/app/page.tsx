import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import { dictionary, type Dictionary } from "@/i18n/dictionaries";
import Tracker from "@/components/tracker/Tracker";

export const metadata: Metadata = { robots: { index: false } };

/** The diary is per-user and time-based: it renders at request time, inside a Suspense shell. */
async function DiaryGate({ t }: { t: Dictionary["tracker"] }) {
  await connection();
  return <Tracker t={t} />;
}

export default function AppPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-6 text-sm text-muted">…</div>}>
      <DiaryGate t={dictionary.tracker} />
    </Suspense>
  );
}
