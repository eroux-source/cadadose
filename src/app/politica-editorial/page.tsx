import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
export const metadata: Metadata = { title: "Política editorial do CadaDose", description: "As regras que cada página do CadaDose segue: fontes admitidas, o que é citado, o que fica de fora, como corrigimos.", alternates: { canonical: "/politica-editorial" } };
const rules = [
  ["Fonte primária", "A bula do paciente aprovada pela ANVISA, na versão mais recente que conseguimos localizar, com registro e data. Quando usamos uma cópia hospedada fora do site do fabricante, dizemos qual."],
  ["Fontes secundárias", "Comunicados da ANVISA, resoluções publicadas no DOU, notas do CFF e reportagens que citam esses documentos. Sempre identificadas como secundárias, com data."],
  ["Citação literal", "Números, prazos e orientações são reproduzidos entre aspas, com a seção da bula. Não arredondamos nem “traduzimos” a bula."],
  ["Silêncio da bula", "Se a bula não trata do assunto, a página diz isso e para por aí. Não completamos com opinião, estudos soltos ou prática clínica."],
  ["Nada de dose", "Nenhuma página ou ferramenta calcula, sugere ou projeta dose, nível no sangue ou perda de peso. O calendário usa só a dose que o usuário informa da própria receita."],
  ["Sem conflito comercial", "Não vendemos medicamentos, não temos afiliação com farmácias ou fabricantes, não aceitamos conteúdo pago."],
  ["Atualização", "Bulas verificadas mensalmente. Cada página mostra a data da última revisão. Mudança de indicação ou de regra gera atualização em até uma semana."],
  ["Correções", "Erros apontados por leitores ou profissionais são corrigidos e registrados na página. Contato: contato@cadadose.com."],
  ["Aviso", "Todas as páginas trazem: “Apenas para informação, não é orientação médica. Fale com quem prescreveu o seu tratamento antes de mudar o medicamento ou o plano de tratamento.”"],
];
export default function Page() {
  return (
    <>
    <PageHero eyebrow="Política editorial" title="Nove regras, sem exceção." lede="O que entra no site, o que fica de fora e como corrigimos. Cada página segue estas regras." image="/img/t-regras-anvisa.jpg" crumbs={[{ label: "Sobre", href: "/sobre" }, { label: "Política editorial" }]} />
    <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 md:py-20">
      <div className="grid gap-4 md:grid-cols-3">
        {rules.map(([t, d], i) => (
          <div key={t} className={`tile ${i === 4 ? "bg-forest text-white" : i === 8 ? "bg-ink text-white" : "bg-card"}`}>
            <p className={`display text-4xl ${i === 4 || i === 8 ? "text-accent" : "text-forest"}`}>{String(i + 1).padStart(2, "0")}</p>
            <h2 className="mt-4 text-2xl">{t}</h2>
            <p className={`mt-2 text-sm ${i === 4 || i === 8 ? "text-white/75" : "text-muted"}`}>{d}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="aspect-[16/9] overflow-hidden rounded-[4px]"><img src="/img/t-para-que-serve.jpg" alt="" className="photo" loading="lazy" /></div>
        <div className="aspect-[16/9] overflow-hidden rounded-[4px]"><img src="/img/principles.jpg" alt="" className="photo" loading="lazy" /></div>
      </div>
    </div>
    </>
  );
}
