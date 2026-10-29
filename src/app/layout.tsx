import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/locales";
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
  openGraph: { siteName, locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "Organization", name: "CadaDose", url: "https://cadadose.com", description: "Diário de tratamento GLP-1 e respostas baseadas nas bulas aprovadas pela ANVISA, para o Brasil.", knowsAbout: ["Mounjaro", "Ozempic", "Wegovy", "Saxenda", "Rybelsus", "tirzepatida", "semaglutida", "liraglutida", "GLP-1"], areaServed: "BR", inLanguage: "pt-BR" }) }} />
        <link rel="alternate" type="application/rss+xml" title="CadaDose" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
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
