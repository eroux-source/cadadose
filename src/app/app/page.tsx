import type { Metadata } from "next";
import { social } from "@/lib/seo";
import { Suspense } from "react";
import { connection } from "next/server";
import { dictionary, type Dictionary } from "@/i18n/dictionaries";
import Tracker from "@/components/tracker/Tracker";
import Pwa from "@/components/Pwa";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Meu diário", description: "A semana da dose, registrada em um toque. Grátis, sem conta; os dados ficam no seu aparelho.", robots: { index: false }, ...social("app", "Meu diário · CadaDose", "A semana da dose, registrada em um toque. Grátis, sem conta; os dados ficam no seu aparelho.", { path: "/app" }) };

/** The diary is per-user and time-based: it renders at request time, inside a Suspense shell. */
async function DiaryGate({ t }: { t: Dictionary["tracker"] }) {
  await connection();
  return (
    <>
      <Tracker t={t} />
      <Pwa />
    </>
  );
}

export default function AppPage() {
  return (
    <>
    <PageHero eyebrow="Meu diário · grátis, sem conta" title="A semana da dose, registrada em um toque." lede="Aplicações, rodízio, peso, efeitos e validade da caneta. Os dados ficam no seu aparelho." image="/img/card-2.jpg" crumbs={[{ label: "Início", href: "/" }, { label: "Meu diário" }]} />
    <Suspense fallback={<div className="mx-auto max-w-3xl px-4 py-6 text-sm text-muted">…</div>}>
      <DiaryGate t={dictionary.tracker} />
    </Suspense>
    </>
  );
}
