import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";
import { allArticles } from "@/content";
import { guias } from "@/content/guias";

export const metadata: Metadata = { title: "Sobre o CadaDose: quem faz, como fazemos, o que não fazemos", description: "Quem está por trás do CadaDose, como cada página é escrita a partir da bula aprovada pela ANVISA, e os limites que nos impomos.", alternates: { canonical: "/sobre" } };

export default function Sobre() {
  return (
    <>
    <PageHero eyebrow="Sobre" title="Um site que só repete o que a bula diz." image="/img/principles.jpg" />
    <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      <p className="mt-6 text-lg text-muted">O CadaDose nasceu de uma constatação simples: quem começa um tratamento com GLP-1 no Brasil encontra respostas em reels, grupos e blogs de clínica, quase nunca no documento que a ANVISA aprovou para o paciente. Nós pegamos esse documento, a bula do paciente, e respondemos as perguntas mais buscadas com ele, trecho a trecho.</p>
      <h2 className="mt-10 text-xl">Como cada página é feita</h2>
      <ol className="mt-3 list-decimal space-y-2 pl-6 text-muted">
        <li>Partimos das perguntas que as pessoas realmente digitam (dados de busca do Brasil).</li>
        <li>Abrimos a bula do paciente mais recente no Bulário da ANVISA ou no site do fabricante, e anotamos registro e data.</li>
        <li>Cada afirmação é ligada a uma frase da bula, citada entre aspas com a seção. Quando a bula não trata do assunto, a página diz “a bula não diz”.</li>
        <li>Fontes secundárias (comunicados da ANVISA, CFF, imprensa que cita a ANVISA) são identificadas como tais.</li>
        <li>Revisamos as bulas mensalmente; a data de atualização aparece em cada página. Em 05/2026 a bula do Mounjaro mudou de indicação, e o site mudou com ela.</li>
      </ol>
      <h2 className="mt-10 text-xl">O que não fazemos</h2>
      <ul className="mt-3 list-disc space-y-2 pl-6 text-muted">
        <li>Não calculamos nem sugerimos doses; não mostramos “nível do medicamento no sangue”.</li>
        <li>Não vendemos medicamentos, não indicamos onde comprar, não temos comissão de farmácia.</li>
        <li>Não damos orientação médica. Cada página traz a mesma frase: fale com quem prescreveu o seu tratamento antes de mudar qualquer coisa.</li>
        <li>Não publicamos nada sobre produtos sem bula aprovada (canetas sem registro, por exemplo), além do que a ANVISA diz sobre eles.</li>
      </ul>
      <h2 className="mt-10 text-xl">Quem faz</h2>
      <p className="mt-3 text-muted">O CadaDose é um projeto independente, editado por uma pequena equipe de produto e conteúdo, sem vínculo com Eli Lilly, Novo Nordisk, EMS ou qualquer farmácia. As marcas citadas pertencem aos seus titulares e aparecem apenas para identificar os medicamentos. Erros e correções: escreva para contato@cadadose.com.</p>
      <p className="mt-6 text-sm text-muted">Hoje são {allArticles.length} respostas e {guias.length} guias. <Link href="/politica-editorial" className="underline">Política editorial</Link> · <Link href="/fontes" className="underline">Fontes e versões das bulas</Link></p>
    </article>
    </>
  );
}
