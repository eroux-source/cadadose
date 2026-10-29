import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { siteUrl } from "@/lib/locales";

export const metadata: Metadata = { title: "Para clínicas e profissionais: widget gratuito de validade da caneta e conteúdo citável", description: "Um widget gratuito para o site da sua clínica: o paciente informa quando abriu a caneta e vê até quando vale, pela bula. Sem cadastro, sem custo.", alternates: { canonical: "/para-clinicas" } };

export default function Page() {
  const code = `<iframe src="${siteUrl}/widget/validade?med=mounjaro" width="100%" height="330" style="border:0;border-radius:4px" loading="lazy" title="Validade da caneta, pela bula (CadaDose)"></iframe>`;
  return (
    <>
    <PageHero eyebrow="Para clínicas e profissionais" title="Um widget gratuito para o seu site: até quando a caneta vale, pela bula." image="/img/t-validade-depois-de-aberta.jpg" crumbs={[{ label: "Início", href: "/" }, { label: "Para clínicas" }]} />
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid gap-10 md:grid-cols-2">
      <div>
      <p className="text-muted">Seus pacientes perguntam quantos dias o Mounjaro aguenta fora da geladeira e até quando a caneta de Ozempic ou Wegovy pode ser usada. O widget responde com a regra da bula aprovada pela ANVISA e um link para a fonte. Sem cadastro, sem custo, sem coleta de dados do paciente.</p>
      <h2 className="mt-10">Como instalar</h2>
      <p className="mt-2 text-muted">Cole esta linha onde quiser na página (WordPress, Wix, Webflow aceitam HTML). Troque <code>mounjaro</code> por <code>ozempic</code> ou <code>wegovy</code> para abrir já no medicamento certo.</p>
      <pre className="mt-3 overflow-x-auto rounded-[4px] bg-ink p-4 text-xs text-white/85">{code}</pre>
      </div>
      <div className="grid gap-4 self-start md:sticky md:top-24"><div className="overflow-hidden rounded-[4px] bg-card p-2"><iframe src="/widget/validade?med=mounjaro" width="100%" height="330" style={{ border: 0 }} title="Validade da caneta" /></div><div className="aspect-[16/9] overflow-hidden rounded-[4px]"><img src="/img/cta-portrait.jpg" alt="" className="photo" loading="lazy" /></div></div>
      </div>
      <div className="mt-16 grid gap-10 md:grid-cols-2"><div>
      <h2>Conteúdo citável</h2>
      <p className="mt-2 text-muted">Cada página do site traz um bloco “Citar esta página” com a referência pronta. Você pode citar trechos com link; pedimos apenas que a citação mantenha a referência à bula e a data. Veja <Link href="/politica-editorial" className="underline">nossa política editorial</Link> e <Link href="/fontes" className="underline">a lista de fontes</Link>.</p>
      </div><div>
      <h2>O que o widget não faz</h2>
      <p className="mt-2 text-muted">Não calcula dose, não registra dados do paciente, não envia nada ao seu site. É um iframe estático com a regra da bula e um link.</p>
      <p className="mt-8 text-sm text-muted">Dúvidas, correções ou pedido de versão com as cores da clínica: contato@cadadose.com.</p>
      </div></div>
    </div>
    </>
  );
}
