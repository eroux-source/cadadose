import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Termos de uso", description: "Termos de uso do CadaDose: site informativo baseado em bulas, sem orientação médica.", alternates: { canonical: "/termos" } };

const copy = {
  pt: {
    title: "Termos de uso",
    body: [
      "O CadaDose é um diário pessoal de apoio ao tratamento. Ele não é um dispositivo médico, não faz diagnóstico, não calcula nem recomenda doses e não substitui a orientação do seu médico, da sua farmácia ou da bula do medicamento.",
      "As informações de bula publicadas no site são educativas e podem mudar. Confira sempre a versão mais recente no Bulário Eletrônico da ANVISA e siga a sua prescrição.",
      "Em caso de sintomas intensos ou emergência, procure atendimento médico imediatamente.",
      "O uso do CadaDose é por sua conta e risco; não nos responsabilizamos por decisões tomadas com base nas informações registradas ou exibidas.",
    ],
  },
  es: {
    title: "Términos de uso",
    body: [
      "CadaDose es un diario personal de apoyo al tratamiento. No es un dispositivo médico, no diagnostica, no calcula ni recomienda dosis y no reemplaza la orientación de tu médico, de tu farmacia ni del prospecto del medicamento.",
      "La información de prospecto publicada en el sitio es educativa y puede cambiar. Verificá siempre la versión más reciente en la autoridad sanitaria de tu país y seguí tu receta.",
      "Ante síntomas intensos o una emergencia, buscá atención médica de inmediato.",
      "El uso de CadaDose es bajo tu responsabilidad; no respondemos por decisiones tomadas en base a la información registrada o mostrada.",
    ],
  },
};

export default async function Terms() {
  
  const c = copy.pt;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl">{c.title}</h1>
      {c.body.map((p) => (
        <p key={p} className="mt-4 leading-relaxed">{p}</p>
      ))}
    </div>
  );
}
