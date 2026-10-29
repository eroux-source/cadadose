# Colocar o CadaDose no ar (checklist)

## 1. Vercel (10 min)
1. Import the GitHub repo `eroux-source/cadadose` in Vercel (framework: Next.js, defaults are fine).
2. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL=https://cadadose.com`
   - `NEXT_PUBLIC_GA_ID` (Google Analytics 4; defaults to `G-BEGVPYBY9Q`, property "CadaDose"; set to `off` to disable).
   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=cadadose.com` (optional alternative).
   - Later, for Pro: `NEXT_PUBLIC_PADDLE_*` (see `.env.example`).
3. Add the domain `cadadose.com` (+ `www` redirect) in Vercel → DNS at the registrar.

## 2. Smoke test (2 min)
- Open `/`, `/calendario`, `/app` (log one shot), `/medicamentos/mounjaro/validade-depois-de-aberta`, `/widget/validade?med=ozempic`, `/feed.xml`, `/llms.txt`.

## 3. Search engines (15 min)
- Google Search Console: add property (domain), verify via DNS TXT, submit `https://cadadose.com/sitemap.xml`.
- Bing Webmaster Tools: import from Search Console. Then IndexNow: create a key, put `public/<key>.txt` with the key as content, deploy, run `INDEXNOW_KEY=<key> tools/seo/indexnow.sh`.
- Ahrefs Webmaster Tools (free): verify, run Site Audit.

## 4. GitHub Action
- `.github/workflows/check-bulas.yml` runs on the 1st of each month and opens an issue when a bula PDF changes. Enable Actions in the repo settings if not already.

## 5. First links (the part only you can do)
- Profiles: Product Hunt (as "coming soon"), AlternativeTo, Crunchbase, LinkedIn page, GitHub README link.
- 3 answers/week with the bula quote + link: r/brasil, r/emagrecer, Quora pt, Facebook groups "Mounjaro Brasil".
- Pitch one number to health press (Veja Saúde, Metrópoles, Drauzio): "9 M buscas/mês, 70 % das SERP são reels e blogs de clínica, leader mundial ranks 90 keywords no Brasil".
- Offer the free widget (`/para-clinicas`) to clinics whose blogs rank today (Renasce, Bellit, Voy).

## 6. Measure
- Search Console impressions at D+7 / D+30 / D+60; `tools/seo/forecast.py` for the targets.
- Weekly: 10 pt-BR questions to ChatGPT/Perplexity, note citations of cadadose.com.
- Monthly: `python3 tools/seo/check-bulas.py` (also automated).

## Imagens sociais e favicon
- `public/og/*.jpg` são as cartas de compartilhamento (WhatsApp, Instagram, Twitter, Google Discover). Geradas por `node scripts/gen-og.mjs` (precisa das fontes Instrument Serif e Inter instaladas no sistema para o sharp). Rode de novo após adicionar artigos, e `./scripts/gen-article-images.sh` após adicionar fotos em `public/img/a`.
- Para testar o preview do WhatsApp depois do deploy: envie o link em uma conversa consigo mesmo, ou valide em https://developers.facebook.com/tools/debug/ (o WhatsApp usa o mesmo cache; "Scrape again" força a atualização).
- Favicon: `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`; PWA: `public/icon-192.png`, `public/icon-512.png`.
