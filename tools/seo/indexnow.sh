#!/usr/bin/env bash
# Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver). Usage:
#   INDEXNOW_KEY=xxxx SITE=https://cadadose.com tools/seo/indexnow.sh
# Put the same key in public/<key>.txt (file content = key) before running.
set -euo pipefail
: "${INDEXNOW_KEY:?set INDEXNOW_KEY}"; SITE="${SITE:-https://cadadose.com}"
HOST=$(echo "$SITE" | sed -E 's#https?://##')
URLS=$(curl -s "$SITE/sitemap.xml" | grep -o '<loc>[^<]*</loc>' | sed -E 's#</?loc>##g' | jq -R . | jq -s .)
curl -s -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" \
  -d "{\"host\":\"$HOST\",\"key\":\"$INDEXNOW_KEY\",\"keyLocation\":\"$SITE/$INDEXNOW_KEY.txt\",\"urlList\":$URLS}" -w "\nHTTP %{http_code}\n"
