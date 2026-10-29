import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/locales";

/** Search engines and AI answer engines are welcome everywhere except the personal diary and the unlisted /pro page. */
const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "anthropic-ai", "PerplexityBot", "Perplexity-User", "Google-Extended", "Applebot-Extended", "Bytespider", "CCBot", "Amazonbot", "meta-externalagent", "DuckAssistBot", "YouBot"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/app", "/pro", "/api/"] },
      ...aiBots.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/app", "/pro", "/api/"] })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
