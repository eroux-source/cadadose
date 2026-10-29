import type { Metadata } from "next";
import Calendario from "@/components/calendario/Calendario";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Calendário do tratamento com Mounjaro, Ozempic ou Wegovy (pela bula)",
  description: "Monte o calendário das suas aplicações semanais, veja até quando a caneta vale e quantas caixas precisa até a consulta. Baseado na bula; não sugere dose.",
  alternates: { canonical: "/calendario" },
};

export default function Page() {
  return (
    <>
    <PageHero eyebrow="Ferramenta gratuita" title="Calendário do seu tratamento, pela bula." lede="Informe o medicamento e a dose da sua receita. O calendário marca cada aplicação, o fim de cada bloco de 4 semanas previsto na bula (momento de reavaliar com o médico), a validade da caneta e quantas caixas você precisa até a consulta. Ele não calcula nem recomenda dose." image="/img/t-tabela-de-dose.jpg" crumbs={[{ label: "Início", href: "/" }, { label: "Calendário" }]} />
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20"><Calendario /></div>
    </>
  );
}
