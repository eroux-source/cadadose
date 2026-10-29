# SEO/GEO machine

A repeatable loop: **mine → score → gap → SERP-check → brief → write (sourced) → measure**.
Data comes from Treg (DataForSEO/Serpstat routed, pay-per-call, no subscription): ~$0.13 per 1,000
keywords, $0.002 per SERP, $0.02 to list a competitor's ranked keywords.

## Loop
1. **Mine** (Treg → `dataforseo.x.dataforseo-labs-google-keyword-suggestions-live`, one seed per call,
   `location_code` 2076 = Brazil, `language_code` pt, `limit` 1000, filter volume ≥ 50). Save each result JSON.
   Also `dataforseo.google.domain.ranked_keywords` for each competitor domain.
2. **Score**: `python3 ingest.py data/keywords.csv dump1.json dump2.json …` → clusters, theme, score
   (volume × theme weight × (1 − KD)). Theme weights encode monetisation: diary features and
   bula questions 1.0, price/affiliate 0.3.
3. **Gaps**: `python3 gaps.py data/keywords.csv --min-volume 200` → (medication × theme) with no page yet.
4. **SERP check** for the top gaps (Treg → `dataforseo.google.serp.organic`, mobile, depth 10). A SERP is
   *weak* when ≥ 4 of the top 10 are social (Instagram/Facebook/YouTube/Reddit), clinic blogs, Zendesk
   help pages or translated apps — that's where a sourced page wins in weeks.
5. **Brief → write**: every page follows `src/content/*.ts`: answer-first, each sentence mapped to a bula
   section, "a bula não diz" when silent, FAQ with [fonte], InfoNotice. No dose calculation, no drug-level estimate.
6. **Measure**: Search Console (impressions at D+7/30/60), Treg SERP for our own URL, 10 pt-BR questions a
   week to ChatGPT/Perplexity for citations.
7. **Forecast**: `python3 forecast.py data/keywords.csv` (assumptions inside).

## Findings, 2026-10-28 (Brazil)
- 4,479 clusters, 9.0 M searches/month across mounjaro/ozempic/wegovy/tirzepatida/semaglutida/caneta emagrecedora.
- shotsyapp.com BR: 90 keywords, ~270 visits/mo (translated pages). ozempro.com: 171 keywords, ~760 visits/mo.
- SERPs for "como aplicar mounjaro", "mounjaro pode ficar fora da geladeira", "mounjaro precisa de receita":
  clinic blogs, Instagram reels, Reddit, Zendesk, pharmacies. AI Overview cites clinic blogs + Drogasil bula page.
- Biggest uncovered, sourceable clusters: per-dose pages (mounjaro 5 mg 135k, 2,5 mg 90k, 15 mg 27k; tirzepatida 15 mg 40k;
  wegovy 1 mg 40k), Brazilian brands (lipoless 14.8k, tirzec, poviztra, ozivy, gluconex; "caneta emagrecedora brasileira" 18k),
  "precisa de receita" (12k + variants; RDC 973/2025).
