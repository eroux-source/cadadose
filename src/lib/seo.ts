import type { Metadata } from "next";
import { siteName, siteUrl } from "./locales";

/** Open Graph + Twitter block pointing at a pre-rendered social card in /public/og (JPEG, 1200x630, < 200 KB so WhatsApp shows it). */
export function social(key: string, title: string, description: string, opts: { type?: "website" | "article"; modified?: string; path?: string } = {}): Pick<Metadata, "openGraph" | "twitter"> {
  const image = { url: `${siteUrl}/og/${key}.jpg`, width: 1200, height: 630, alt: title, type: "image/jpeg" };
  return {
    openGraph: { title, description, siteName, locale: "pt_BR", type: opts.type ?? "website", url: opts.path ? `${siteUrl}${opts.path}` : undefined, images: [image], ...(opts.modified ? { modifiedTime: opts.modified } : {}) },
    twitter: { card: "summary_large_image", title, description, images: [image.url] },
  };
}
