import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";
import { medications } from "@/lib/medications";

export const metadata: Metadata = { title: "Sobre o CadaDose: quem faz, como fazemos, o que não fazemos", description: "Quem está por trás do CadaDose, como cada página é escrita a partir da bula aprovada pela ANVISA, e os limites que nos impomos.", alternates: { canonical: "/sobre" } };

const steps = [
  "Partimos das perguntas que as pessoas realmente digitam (dados de busca do Brasil).",
  "Abrimos a bula do paciente mais recente no Bulário da ANVISA ou no site do fabricante, e anotamos registro e data.",
  "Cada afirmação é ligada a uma frase da bula, citada entre aspas com a seção. Quando a bula não trata do assunto, a página diz “a bula não diz”.",
  "Fontes secundárias (comunicados da ANVISA, CFF, imprensa que cita a ANVISA) são identificadas como tais.",
  "Revisamos as bulas mensalmente; a data de atualização aparece em cada página. Em 05/2026 a bula do Mounjaro mudou de indicação, e o site mudou com ela.",
];
const nots = [
  ["Nada de dose", "Não calculamos nem sugerimos doses; não mostramos “nível do medicamento no sangue”."],
  ["Nada à venda", "Não vendemos medicamentos, não indicamos onde comprar, não temos comissão de farmácia."],
  ["Nada de orientação médica", "Cada página traz a mesma frase: fale com quem prescreveu o seu tratamento antes de mudar qualquer coisa."],
  ["Nada sem bula", "Não publicamos nada sobre produtos sem bula aprovada, além do que a ANVISA diz sobre eles."],
];

export default function Sobre() {
  const bulas = medications.filter((m) => m.sources.length).length;
  return (
    <>
      <PageHero eyebrow="Sobre" title="Um site que só repete o que a bula diz." lede="O CadaDose nasceu de uma constatação simples: quem começa um tratamento com GLP-1 no Brasil encontra respostas em reels, grupos e blogs de clínica, quase nunca no documento que a ANVISA aprovou para o paciente." image="/img/principles.jpg" crumbs={[{ label: "Início", href: "/" }, { label: "Sobre" }]} />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div className="grid grid-cols-3 gap-4">
          {[[allArticles.length, "respostas"], [guias.length, "guias"], [bulas, "bulas citadas"]].map(([n, l]) => (
            <div key={l} className="tile bg-accent-soft"><p className="display text-5xl text-forest">{n}</p><p className="mt-1 text-xs text-muted">{l}</p></div>
          ))}
        </div>
        <div>
          <h2>Nós pegamos esse documento e respondemos com ele, trecho a trecho</h2>
          <p className="mt-5 text-muted">A bula do paciente é o único texto sobre o medicamento que passou pela ANVISA. É curto, é público e quase ninguém lê. Nosso trabalho é organizá-lo por pergunta, sem acrescentar opinião.</p>
        </div>
      </section>

      <section className="blobs text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
          <h2 className="max-w-2xl">Como cada página é feita</h2>
          <ol className="mt-12 grid gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <li key={i} className="tile bg-white/5"><p className="display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</p><p className="mt-4 text-sm font-light text-white/80">{s}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-[2fr_3fr]">
          <div className="aspect-[4/5] overflow-hidden rounded-[4px]"><img src="/img/t-quem-nao-pode-tomar.jpg" alt="" className="photo" loading="lazy" /></div>
          <div>
            <h2>O que não fazemos</h2>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {nots.map(([t, d]) => (
                <div key={t} className="grid gap-2 py-5 sm:grid-cols-[200px_1fr]"><h3 className="text-2xl">{t}</h3><p className="text-sm text-muted">{d}</p></div>
              ))}
            </div>
            <h2 className="mt-14">Quem faz</h2>
            <p className="mt-4 text-muted">O CadaDose é um projeto independente, editado por uma pequena equipe de produto e conteúdo, sem vínculo com Eli Lilly, Novo Nordisk, EMS ou qualquer farmácia. As marcas citadas pertencem aos seus titulares e aparecem apenas para identificar os medicamentos. Erros e correções: contato@cadadose.com.</p>
            <div className="mt-6 flex flex-wrap gap-3"><Link href="/politica-editorial" className="btn btn-dark">Política editorial</Link><Link href="/fontes" className="btn btn-ghost">Fontes e versões das bulas</Link></div>
          </div>
        </div>
      </section>
    </>
  );
}
