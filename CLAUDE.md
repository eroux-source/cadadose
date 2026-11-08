# CadaDose — contexte pour Claude Code

Site brésilien (pt-BR) qui répond aux questions sur les GLP-1 vendus au Brésil (Mounjaro, Ozempic, Wegovy, Saxenda, Rybelsus, versions manipuladas) **uniquement à partir des bulas du paciente approuvées par l'ANVISA**, plus un calendrier de traitement (`/calendario`) et un diário local-first (`/app`). Prod : https://cadadose.com (Vercel, déploiement auto depuis `main`). Repo : `eroux-source/cadadose`.

Objectif actuel : **tester le signal de trafic SEO/GEO**. Tout est gratuit, aucune vente, aucune capture d'e-mail, aucune pub. Pas de SaaS/app tant que le trafic n'est pas prouvé.

## Règles non négociables (édito et légal)

1. **Rien sans source.** Chaque affirmation médicale vient de la bula du paciente (PDF du laboratoire, avec registro ANVISA + version/date dans le label de la source) ou d'un document ANVISA/CFF daté. Citations entre guillemets, section indiquée. Si la bula ne dit rien : la page dit « a bula não diz » et s'arrête là. Pas de source → ne pas publier.
2. **Aucun calcul ni suggestion de dose**, aucun « nível do medicamento no sangue », aucune date de montée de dose auto (calculateur de dose = dispositif médical, RDC 657/2022). L'utilisateur saisit la dose de sa receita ; le calendrier garde la dose constante.
3. **Pas de vente, pas d'affiliation, pas de prix, pas de « onde comprar »**, pas de liens pharmacie.
4. La notice `InfoNotice` (« Apenas para informação, não é orientação médica. Fale com quem prescreveu… ») est présente partout où une info de santé est donnée. Ne pas la retirer.
5. Manipulados (semaglutida/tirzepatida manipulada) : rien de pré-rempli ; on cite seulement ce que dit l'ANVISA (Nota Técnica 200/2025, RDC 973/2025). Ne jamais présenter le manipulado comme équivalent au produit registré.
6. Bula Mounjaro de référence : versão **05/2026** (3 indications : DM2, controle do peso, apneia do sono ; règle anticoncepcional 4 semaines ; arrêt 1 mois avant grossesse). Vérifier avant d'écrire sur Mounjaro.
7. JSON-LD : **jamais `Drug`** (sous-type de `Product` → Google exige offers/review). Utiliser `MedicalEntity`.

## Stack

- Next.js 16 App Router, React 19, TypeScript, Tailwind v4 (`@theme inline` dans `src/app/globals.css`). Polices auto-hébergées (`@fontsource/inter`, `@fontsource/instrument-serif`).
- Lire `AGENTS.md` (règles Next 16 : les API ont changé par rapport à l'entraînement).
- Build : `npm run build` · Serveur : `PORT=3000 npm run start` (tuer `next-server` avant) · Typecheck : `npx tsc --noEmit`.
- Captures d'écran : Playwright est installé (`require('playwright')`), scripts d'exemple dans le scratchpad historique.

## Design (template « Healers », appliqué partout)

Tokens : fond `#eae9e2`, encre `#1b2b2b` / `#0c1313`, accent menthe `#7cea99`, forest `#2f723d`, cartes blanches, rayons 4px. Instrument Serif pour les titres, Inter 300 pour le corps. Primitives dans `globals.css` : `.blobs` (bandeau sombre), `.tile`, `.chip`, `.btn-primary|dark|ghost`, `.eyebrow`, `.ribbon`, `details.faq`, `.photo`, `.frame`. Composants : `PageHero`, `Nav`, `Footer`, `ArticleBody` (sidebar collante + sections + « Leia também » + FAQ accordéon + sources), `Related` (cartes sombres), `PerguntasFilter` (médicament × thème × recherche), `InfoNotice`, `CiteBlock`. **Pas d'espaces vides** : chaque section a une photo ou une tuile.

## Contenu

- Modèle : `src/content/types.ts` (`Article {medicationSlug, intent, title, answer, description, updated, reviewed, sections[], faq[], sources[]}`, `Section` avec `paragraphs|steps|bullets|table|links`, `Intent` union ~46 valeurs, `intentLabels`).
- Agrégation : `src/content/index.ts` (`allArticles`, 144 articles : pt, wave3…8, saxenda, rybelsus, ozivy, manipulados) et `src/content/guias.ts` (13 guides).
- Catalogue médicaments : `src/lib/medications.ts` (champ sans source = `null`).
- Ajouter un article = l'ajouter dans le fichier wave correspondant avec ses `sources`, puis : `./scripts/gen-article-images.sh` (manifeste des photos), `node scripts/gen-og.mjs` (cartes sociales ; nécessite Instrument Serif + Inter installées pour fontconfig), build, commit. Les images par article vivent dans `public/img/a/a-<med>-<intent>.webp` (fallback automatique vers la photo du thème).
- Images : générées sur Higgsfield (`gpt_image_2_5`), sans marque, sans texte. Le conteneur ne peut pas télécharger depuis le CDN Higgsfield : transfert via le navigateur intégré (fetch → canvas → base64).

## SEO / GEO (état au 7 nov. 2026)

- Pages : 218 (accueil, 144 articles, 13 guides, 45 thèmes `/temas/[intent]`, 8 hubs `/medicamentos/[slug]`, perguntas, calendario, app, sobre, politica-editorial, fontes, para-clinicas, widget `/widget/validade`).
- Balisage : MedicalWebPage + FAQPage + BreadcrumbList sur les articles ; WebSite (SearchAction `/perguntas?q=`) + Organization dans le layout ; ItemList sur les thèmes ; `/llms.txt`, `/llms-full.txt`, `/feed.xml`, sitemap avec `image:loc`, robots qui autorise explicitement les crawlers IA (hors `/app`, `/pro`, `/api`).
- Social : 206 cartes JPEG statiques dans `public/og/` (< 100 Ko pour WhatsApp), via `src/lib/seo.ts#social()`. Favicon : `src/app/icon.svg`, `favicon.ico`, `apple-icon.png`, `public/icon-192/512.png`.
- Analytics : GA4 `G-BEGVPYBY9Q` (`src/components/Analytics.tsx`, override `NEXT_PUBLIC_GA_ID`, `off` pour désactiver). Search Console vérifiée (domaine), sitemap soumis. Tâche planifiée « Récap GA CadaDose » tous les 3 jours à 18 h 42 (Buenos Aires).
- Chiffres (Search Console, 29 oct–4 nov) : 2 010 impressions, 9 clics, position moyenne 13, 82 % Brésil, 148 pages affichées. Page n°1 : `/medicamentos/mounjaro/validade-depois-de-aberta` (463 impr.). Clusters qui marchent : validade, pages dose (Wegovy 0,25/0,5/1,7/2,4 mg, Mounjaro 2,5/5 mg), « Mounjaro de pobre ».
- Maillage : `src/lib/related-intents.ts` pilote le bloc « Leia também » (cluster par thème, même médicament). Les guides lient les 4 pages fortes. Le hero et le ruban de l'accueil lient les pages/thèmes les plus cherchés.
- Boucle hebdo recommandée : lire les requêtes Search Console → créer la page pour toute requête qui monte sans page dédiée (exemple fait : `tirzepatida-manipulada/gravidez-e-amamentacao`), renforcer les titres avec la formulation exacte des gens (ex. « quantos quilos por semana », « 0.25mg »).
- Outils : `tools/seo/` (ingest.py, gaps.py, forecast.py, check-bulas.py mensuel via GitHub Action, indexnow.sh pour Bing). Dataset `tools/seo/data/keywords-br-2026-10-28.csv` (4 479 clusters, 9 M recherches/mois).
- Levier n°1 restant : **liens entrants** (domaine neuf, 0 backlink). Textes pour groupes/forums brésiliens à rédiger en portugais, valeur d'abord, lien en dernier, vers une page précise.

- Nouveautés 7 nov. 2026 : Ozivy (bula EMS, 8 pages) et guide Wegovy em comprimido (avis ANVISA du 04/11/2026, bula patient pas encore publiée : à compléter dès sa sortie).
- `gen-og.mjs` : sur ce Mac, les polices ont été installées dans `~/Library/Fonts` (TTF convertis depuis `@fontsource`). Avec ces polices installées, la sortie est stable : seules les cartes dont le titre ou le sous-titre change sont modifiées.

## Déploiement

Voir `DEPLOY.md`. Vercel déploie `main` automatiquement ; vérifier que le dernier commit est en ligne (titre d'une page dose) après chaque push. Après ajout de contenu : demander l'indexation des nouvelles URLs dans Search Console (quota ~10/jour).

## Commits

Messages en anglais, un sujet par commit ; terminer par les lignes d'attribution fournies par la session. Ne pas committer `AGENTS.md` modifié par `next dev` si la seule différence est le bloc auto-généré.
