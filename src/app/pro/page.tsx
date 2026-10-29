import type { Metadata } from "next";
import ProCheckout from "@/components/ProCheckout";

export const metadata: Metadata = {
  robots: { index: false },
  title: "CadaDose Pro — lembretes, backup e relatório",
  description: "Lembretes no celular, backup e sincronização entre aparelhos, relatório para o médico. R$ 19,90 por mês ou R$ 149 por ano, com PIX.",
  alternates: { canonical: "/pro" },
};

const free = ["Diário completo: aplicações, rodízio, peso, efeitos, estoque", "Gráfico de progresso para compartilhar", "Informações da bula com fonte", "Dados guardados no seu aparelho"];
const pro = ["Lembretes no celular no dia e na hora da aplicação", "Backup e sincronização entre aparelhos", "Relatório em PDF para a consulta, sempre atualizado", "Alerta de validade da caneta e de reposição", "Apoio ao projeto: sem anúncios, sem venda de medicamentos"];

export default function ProPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-medium">CadaDose Pro</h1>
      <p className="mt-2 text-muted">O diário continua grátis. O Pro paga os lembretes, o backup e o desenvolvimento, sem anúncios e sem comissão de farmácia.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-6">
          <h2 className="font-medium">Grátis</h2>
          <p className="mt-1 text-3xl font-medium">R$ 0</p>
          <ul className="mt-4 space-y-2 text-sm">{free.map((f) => <li key={f}>✓ {f}</li>)}</ul>
        </div>
        <div className="rounded-md border-2 border-accent bg-card p-6">
          <h2 className="font-medium">Pro</h2>
          <p className="mt-1 text-3xl font-medium">R$ 19,90<span className="text-base font-normal text-muted">/mês</span></p>
          <p className="text-sm text-muted">ou R$ 149 por ano (2 meses grátis) · PIX ou cartão</p>
          <ul className="mt-4 space-y-2 text-sm">{pro.map((f) => <li key={f}>✓ {f}</li>)}</ul>
          <ProCheckout />
        </div>
      </div>
      <p className="mt-8 text-xs text-muted">Pagamento processado pela Paddle (nota fiscal e impostos inclusos). Cancele quando quiser. O CadaDose não vende medicamentos e não recebe comissão de farmácias.</p>
    </div>
  );
}
