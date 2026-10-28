import type { Metadata } from "next";
import { Suspense } from "react";
import { connection } from "next/server";
import Report from "@/components/tracker/Report";

export const metadata: Metadata = { robots: { index: false }, title: "Relatório para o médico" };

async function Gate() {
  await connection();
  return <Report />;
}

export default function ReportPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-6 text-sm text-muted">…</div>}>
      <Gate />
    </Suspense>
  );
}
