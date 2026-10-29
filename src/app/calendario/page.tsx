import type { Metadata } from "next";
import Calendario from "@/components/calendario/Calendario";

export const metadata: Metadata = {
  title: "Calendário do tratamento com Mounjaro, Ozempic ou Wegovy (pela bula)",
  description: "Monte o calendário das suas aplicações semanais, veja até quando a caneta vale e quantas caixas precisa até a consulta. Baseado na bula; não sugere dose.",
  alternates: { canonical: "/calendario" },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <span className="eyebrow">Ferramenta gratuita</span>
      <h1 className="mt-2 max-w-3xl text-3xl font-semibold leading-tight md:text-5xl">Calendário do seu tratamento, pela bula.</h1>
      <p className="mt-4 max-w-2xl text-muted">Informe o medicamento e a dose da sua receita. O calendário marca cada aplicação, o fim de cada bloco de 4 semanas previsto na bula (momento de reavaliar com o médico), a validade da caneta e quantas caixas você precisa até a consulta. Ele não calcula nem recomenda dose.</p>
      <div className="mt-10"><Calendario /></div>
    </div>
  );
}
