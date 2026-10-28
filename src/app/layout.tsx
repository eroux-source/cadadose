import type { Metadata } from "next";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/locales";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CadaDose — diário de tratamento com GLP-1 (Mounjaro, Ozempic, Wegovy)",
    template: `%s · ${siteName}`,
  },
  description: "Registre aplicações, peso, efeitos e validade da caneta. Grátis, privado, com informações da bula.",
  alternates: { canonical: "/" },
  manifest: "/manifest.webmanifest",
  openGraph: { siteName, locale: "pt_BR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
