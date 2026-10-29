"use client";

import { useEffect, useState } from "react";

/**
 * Paddle Billing checkout (merchant of record: PIX + cards, taxes handled).
 * Needs NEXT_PUBLIC_PADDLE_CLIENT_TOKEN, NEXT_PUBLIC_PADDLE_PRICE_MONTHLY, NEXT_PUBLIC_PADDLE_PRICE_YEARLY.
 * Until the account exists, the buttons collect a waitlist e-mail locally (mailto fallback).
 */
declare global {
  interface Window {
    Paddle?: { Environment: { set: (e: string) => void }; Initialize: (o: { token: string }) => void; Checkout: { open: (o: unknown) => void } };
  }
}

const token = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN;
const env = process.env.NEXT_PUBLIC_PADDLE_ENV ?? "sandbox";
const prices = { monthly: process.env.NEXT_PUBLIC_PADDLE_PRICE_MONTHLY, yearly: process.env.NEXT_PUBLIC_PADDLE_PRICE_YEARLY };

export default function ProCheckout() {
  const [ready, setReady] = useState(false);
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!token) return;
    const s = document.createElement("script");
    s.src = "https://cdn.paddle.com/paddle/v2/paddle.js";
    s.async = true;
    s.onload = () => {
      if (!window.Paddle) return;
      if (env === "sandbox") window.Paddle.Environment.set("sandbox");
      window.Paddle.Initialize({ token });
      setReady(true);
    };
    document.body.appendChild(s);
  }, []);

  const open = (priceId?: string) => {
    if (!window.Paddle || !priceId) return;
    window.Paddle.Checkout.open({ items: [{ priceId, quantity: 1 }], settings: { displayMode: "overlay", locale: "pt", allowLogout: false } });
  };

  if (token && ready) {
    return (
      <div className="mt-6 grid gap-2">
        <button onClick={() => open(prices.monthly)} className="btn btn-primary !py-2 !px-4 ">Assinar mensal · R$ 19,90</button>
        <button onClick={() => open(prices.yearly)} className="rounded-full border border-accent px-5 py-3 font-medium text-accent">Assinar anual · R$ 149</button>
      </div>
    );
  }

  // Pre-launch: founder waitlist stored on the device + mailto, no server yet.
  return (
    <form
      className="mt-6 grid gap-2"
      onSubmit={(e) => {
        e.preventDefault();
        try {
          localStorage.setItem("cadadose:waitlist", email);
        } catch {
          /* ignore */
        }
        window.location.href = `mailto:ola@cadadose.com?subject=Quero o CadaDose Pro&body=${encodeURIComponent(`Me avisem quando o Pro abrir: ${email}`)}`;
        setSent(true);
      }}
    >
      <p className="text-sm">O Pro abre em breve. Os 500 primeiros terão preço de fundador: <strong>R$ 97 para sempre</strong>.</p>
      <input type="email" required placeholder="seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-lg border border-border bg-background px-3 py-2 text-sm" />
      <button className="btn btn-primary !py-2 !px-4 ">{sent ? "Anotado!" : "Quero ser avisado"}</button>
    </form>
  );
}
