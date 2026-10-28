"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/lib/storage";

type BeforeInstallPromptEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: "accepted" | "dismissed" }> };

/** Registers the service worker and offers "add to home screen" once the diary has real data. */
export default function Pwa() {
  const store = useStore();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [ios, setIos] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if ("serviceWorker" in navigator) navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    const standalone = window.matchMedia("(display-mode: standalone)").matches || ("standalone" in navigator && (navigator as { standalone?: boolean }).standalone === true);
    if (standalone) return;
    try {
      setDismissed(localStorage.getItem("cadadose:install-dismissed") === "1");
    } catch {
      setDismissed(false);
    }
    const onPrompt = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);
    setIos(/iphone|ipad|ipod/i.test(navigator.userAgent) && !/crios|fxios/i.test(navigator.userAgent));
    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const hasData = store.shots.length > 0 || store.weights.length > 0;
  if (dismissed || !hasData || (!deferred && !ios)) return null;

  const close = () => {
    setDismissed(true);
    try {
      localStorage.setItem("cadadose:install-dismissed", "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="fixed inset-x-4 bottom-4 z-20 rounded-2xl border border-border bg-card p-4 shadow-lg text-sm md:left-auto md:right-6 md:w-96">
      <p className="font-semibold">Instalar o CadaDose na tela inicial</p>
      <p className="mt-1 text-muted">
        {deferred
          ? "Abra o diário com um toque, como um aplicativo, e receba os lembretes."
          : "No Safari, toque em Compartilhar e depois em \"Adicionar à Tela de Início\"."}
      </p>
      <div className="mt-3 flex gap-3">
        {deferred && (
          <button
            onClick={async () => {
              await deferred.prompt();
              const { outcome } = await deferred.userChoice;
              if (outcome === "accepted") close();
              setDeferred(null);
            }}
            className="rounded-full bg-accent px-4 py-2 text-white font-medium"
          >
            Instalar
          </button>
        )}
        <button onClick={close} className="px-3 py-2 text-muted underline">
          Agora não
        </button>
      </div>
    </div>
  );
}
