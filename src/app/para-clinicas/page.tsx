import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { siteUrl } from "@/lib/locales";

export const metadata: Metadata = { title: "Para clínicas e profissionais: widget gratuito de validade da caneta e conteúdo citável", description: "Um widget gratuito para o site da sua clínica: o paciente informa quando abriu a caneta e vê até quando vale, pela bula. Sem cadastro, sem custo.", alternates: { canonical: "/para-clinicas" } };

export default function Page() {
  const code = `<iframe src="${siteUrl}/widget/validade?med=mounjaro" width="100%" height="330" style="border:0;border-radius:16px" loading="lazy" title="Validade da caneta, pela bula (CadaDose)"></iframe>`;
  return (
    <>
    <PageHero eyebrow="Para clínicas e profissionais" title="Um widget gratuito para o seu site: até quando a caneta vale, pela bula." image="/img/t-validade-depois-de-aberta.jpg" />
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <p className="mt-4 text-muted">Seus pacientes perguntam quantos dias o Mounjaro aguenta fora da geladeira e até quando a caneta de Ozempic ou Wegovy pode ser usada. O widget responde com a regra da bula aprovada pela ANVISA e um link para a fonte. Sem cadastro, sem custo, sem coleta de dados do paciente.</p>
      <div className="mt-8 overflow-hidden rounded-md border border-border"><iframe src="/widget/validade?med=mounjaro" width="100%" height="330" style={{ border: 0 }} title="Validade da caneta" /></div>
      <h2 className="mt-10 text-xl">Como instalar</h2>
      <p className="mt-2 text-muted">Cole esta linha onde quiser na página (WordPress, Wix, Webflow aceitam HTML). Troque <code>mounjaro</code> por <code>ozempic</code> ou <code>wegovy</code> para abrir já no medicamento certo.</p>
      <pre className="mt-3 overflow-x-auto rounded-md bg-card p-4 text-xs border border-border">{code}</pre>
      <h2 className="mt-10 text-xl">Conteúdo citável</h2>
      <p className="mt-2 text-muted">Cada página do site traz um bloco “Citar esta página” com a referência pronta. Você pode citar trechos com link; pedimos apenas que a citação mantenha a referência à bula e a data. Veja <Link href="/politica-editorial" className="underline">nossa política editorial</Link> e <Link href="/fontes" className="underline">a lista de fontes</Link>.</p>
      <h2 className="mt-10 text-xl">O que o widget não faz</h2>
      <p className="mt-2 text-muted">Não calcula dose, não registra dados do paciente, não envia nada ao seu site. É um iframe estático com a regra da bula e um link.</p>
      <p className="mt-8 text-sm text-muted">Dúvidas, correções ou pedido de versão com as cores da clínica: contato@cadadose.com.</p>
    </div>
    </>
  );
}
