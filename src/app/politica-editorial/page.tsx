import type { Metadata } from "next";
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
    <article className="mx-auto max-w-3xl px-4 py-12">
      <span className="eyebrow">Política editorial</span>
      <h1 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">Nove regras, sem exceção.</h1>
      <dl className="mt-8 space-y-6">
        {rules.map(([t, d]) => (<div key={t}><dt className="font-semibold">{t}</dt><dd className="mt-1 text-muted">{d}</dd></div>))}
      </dl>
    </article>
  );
}
