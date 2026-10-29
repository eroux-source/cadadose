import type { Metadata, Viewport } from "next";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/locales";
import { social } from "@/lib/seo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CadaDose — Mounjaro, Ozempic e Wegovy respondidos pela bula, e o diário do tratamento",
    template: `%s · ${siteName}`,
  },
  description: "Mais de 120 perguntas sobre Mounjaro, Ozempic, Wegovy, Saxenda e Rybelsus respondidas com a bula aprovada pela ANVISA, citada em cada frase. Calendário do tratamento gratuito. Sem calculadora de dose, sem venda de medicamentos.",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  ...social("home", "CadaDose — Mounjaro, Ozempic e Wegovy respondidos pela bula", "Mais de 130 perguntas sobre GLP-1 respondidas com a bula aprovada pela ANVISA, citada em cada frase. Calendário e diário gratuitos."),
};

export const viewport: Viewport = { themeColor: "#1b2b2b", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([{ "@context": "https://schema.org", "@type": "WebSite", name: "CadaDose", url: siteUrl, inLanguage: "pt-BR", potentialAction: { "@type": "SearchAction", target: `${siteUrl}/perguntas?q={search_term_string}`, "query-input": "required name=search_term_string" } }, { "@context": "https://schema.org", "@type": "Organization", "@id": `${siteUrl}/#org`, name: "CadaDose", url: siteUrl, logo: `${siteUrl}/icon-512.png`, email: "contato@cadadose.com", description: "Diário de tratamento GLP-1 e respostas baseadas nas bulas aprovadas pela ANVISA, para o Brasil.", knowsAbout: ["Mounjaro", "Ozempic", "Wegovy", "Saxenda", "Rybelsus", "tirzepatida", "semaglutida", "liraglutida", "GLP-1"], areaServed: "BR", inLanguage: "pt-BR" }]) }} />
        <link rel="alternate" type="application/rss+xml" title="CadaDose" href="/feed.xml" />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && <script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />}
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
