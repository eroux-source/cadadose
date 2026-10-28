/** Brazil-only launch. The `Locale` type is kept so content and catalog entries stay explicit about their language. */
export type Locale = "pt";
export const locale: Locale = "pt";

export const siteName = "CadaDose";
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://cadadose.com";
