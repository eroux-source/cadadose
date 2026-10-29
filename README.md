# CadaDose

Diário de tratamento com GLP-1 (Mounjaro, Ozempic, Wegovy, versões manipuladas) para o Brasil. Site + PWA, Next.js 16.

- `/` landing · `/medicamentos/[slug]/[intent]` páginas de conteúdo · `/app` diário (local-first) · `/app/relatorio` relatório para o médico · `/pro` assinatura · `/llms.txt`, `/sitemap.xml`, `/robots.txt`.
- Dados do usuário ficam no aparelho (`localStorage`). Nenhum backend ainda.

## Regra de conteúdo (não negociável)

**Tudo o que aparece no site vem de uma fonte oficial citada no mesmo trecho.** Sem fonte, não publica.

- Fatos sobre medicamentos: bula do paciente aprovada pela ANVISA (PDF do laboratório), com registro e data de aprovação no rótulo da fonte. Frases-chave entre aspas, como na bula.
- Regras sanitárias: documento da ANVISA ou comunicado do CFF, com data.
- O catálogo em `src/lib/medications.ts` segue a mesma regra: campo sem fonte fica `null` e o diário pergunta ao usuário.
- O site **não calcula nem recomenda doses** (calculadora de dose é dispositivo médico para a ANVISA, RDC 657/2022). O usuário informa a dose da receita.
- Produtos manipulados: nada pré-preenchido; vale o rótulo da farmácia.

Fontes em uso: `src/content/pt.ts`, `src/content/pt-wave3.ts`, `src/content/pt-manipulados.ts` (cabeçalho de cada arquivo).

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

Variáveis (ver `.env.example`): `NEXT_PUBLIC_SITE_URL`; Paddle (`NEXT_PUBLIC_PADDLE_*`) para ativar o checkout do Pro com PIX.

## Próximos passos

1. Deploy (Vercel) + domínio + Search Console + Bing Webmaster/IndexNow.
2. Paddle Billing (PIX Automático) e verificação de assinatura.
3. Push notifications (servidor de envio; o service worker já trata `push`).
4. Comparador de preços em farmácias (dados vivos, citáveis por IAs).
5. App nativa (Capacitor) quando houver assinantes.

## Estado em 29/10/2026

- 234 páginas: 128 respostas (Mounjaro, Ozempic, Wegovy, Saxenda, Rybelsus, manipulados), 11 guias, 28 hubs de tema, calendário, em-breve, sobre, política editorial, fontes, para-clínicas, widget.
- Cada resposta: answer-first, seções com a frase da bula entre aspas, FAQ, fontes com registro/data, InfoNotice, bloco "Citar esta página", links relacionados, OG image, JSON-LD (MedicalWebPage, FAQPage, BreadcrumbList).
- GEO: `/llms.txt`, `/llms-full.txt`, `/feed.xml`, Organization JSON-LD, páginas E-E-A-T.
- Lead capture: `/calendario` e `/em-breve` → `POST /api/lead` → `LEAD_WEBHOOK_URL`.
- Máquina SEO: `tools/seo/` (ingest, gaps, forecast, check-bulas, indexnow) + Action mensal de verificação das bulas.
- Deploy: ver `DEPLOY.md`.
