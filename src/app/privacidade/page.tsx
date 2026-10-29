import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = { title: "Privacidade e LGPD", description: "Como o CadaDose trata seus dados: diário no aparelho, contatos deixados no calendário, LGPD.", alternates: { canonical: "/privacidade" } };

const copy = {
  pt: {
    title: "Privacidade",
    body: [
      "O CadaDose foi feito para que seus dados de saúde fiquem com você. O diário funciona no seu navegador e guarda as informações no armazenamento local do seu aparelho. Nada é enviado aos nossos servidores, a não ser que você crie uma conta para sincronizar entre aparelhos (recurso opcional, em desenvolvimento).",
      "Dados de saúde são dados pessoais sensíveis segundo a LGPD (Lei 13.709/2018). Quando a sincronização estiver disponível, ela só será ativada com seu consentimento específico, os dados serão criptografados e você poderá apagá-los a qualquer momento.",
      "Não vendemos medicamentos, não recebemos comissão de farmácias ou fabricantes e não compartilhamos dados com terceiros para publicidade.",
      "Calendário e lista de espera: se você deixar e-mail ou WhatsApp para receber o calendário ou o aviso de lançamento, guardamos apenas esse contato, o medicamento informado e as preferências marcadas, para enviar o que você pediu. Você pode pedir a exclusão a qualquer momento pelo mesmo canal ou por privacidade@cadadose.com.",
      "Contato do encarregado de dados (LGPD): privacidade@cadadose.com.",
    ],
  },
  es: {
    title: "Privacidad",
    body: [
      "CadaDose está hecho para que tus datos de salud queden con vos. El diario funciona en tu navegador y guarda la información en el almacenamiento local de tu dispositivo. Nada se envía a nuestros servidores, salvo que crees una cuenta para sincronizar entre dispositivos (función opcional, en desarrollo).",
      "Los datos de salud son datos personales sensibles. Cuando la sincronización esté disponible, solo se activará con tu consentimiento específico, los datos estarán cifrados y vas a poder borrarlos en cualquier momento.",
      "No vendemos medicamentos, no recibimos comisiones de farmacias ni de laboratorios y no compartimos datos con terceros con fines publicitarios.",
      "Contacto de protección de datos: privacidade@cadadose.com.",
    ],
  },
};

export default async function Privacy() {
  
  const c = copy.pt;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-semibold">{c.title}</h1>
      {c.body.map((p) => (
        <p key={p} className="mt-4 leading-relaxed">{p}</p>
      ))}
    </div>
  );
}
