import Script from "next/script";

/** Google Analytics 4, loaded only when NEXT_PUBLIC_GA_ID is set (e.g. G-XXXXXXXXXX). IP anonymisation is the GA4 default. */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID ?? "G-BEGVPYBY9Q"; // CadaDose property (account Agence Digibomb), stream "CadaDose site"
  if (!id || id === "off") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}',{send_page_view:true});`}</Script>
    </>
  );
}
