#!/usr/bin/env python3
"""Ingest DataForSEO keyword dumps (keyword_suggestions / ranked_keywords JSON, as saved by Treg)
into one scored CSV. Usage: python3 ingest.py out.csv dump1.json dump2.json ...
Each dump is one Treg call result: {"body": {"tasks": [{"result": [{"items": [...]}]}]}}.
"""
import csv, json, re, sys, unicodedata

THEMES = [  # (theme, regex, monetisation/pertinence weight 0-1)
    ("preco/comprar", r"pre[çc]o|valor|compr|drogasil|raia|pague|farm|barat|desconto|onde|cupom|promo", 0.3),
    ("marcas BR/manipulado", r"manipul|gen[ée]ric|tirzec|poviztra|ozivy|lipoless|olire|cimed|eurofarma|\bems\b|biomm|gluconex|paraguai|de pobre|natural|similar|brasileir", 0.9),
    ("receita/anvisa", r"receita|anvisa|liberad|proib|tarja|reten[çc]|\bsus\b|plano de sa[úu]de|conv[êe]nio", 0.9),
    ("geladeira/validade", r"geladeira|valid|armazen|conserv|fora da|congel|vence", 1.0),
    ("esqueci/atraso", r"esquec|atras|pulei|perdi a dose", 1.0),
    ("como aplicar/usar", r"aplic|como usar|como tomar|injet|agulha|clique|local", 1.0),
    ("efeitos", r"efeito|colateral|n[áa]usea|enjoo|diarreia|cabelo|cansa|\bdor|tontura|pris[ãa]o|constipa|refluxo|vomit|gases|sono|ins[ôo]nia|menstrua", 0.8),
    ("gravidez/contraindicacoes", r"gravid|gr[áa]vid|amament|pode tomar|quem n[ãa]o|contraindic|diabet|tireoide|hipotireo|crian[çc]a|idoso|anticoncep|press[ãa]o", 0.8),
    ("comer/dieta/alcool", r"comer|dieta|card[áa]pio|alimenta|caf[ée]|[áa]lcool|bebida|cerveja|jejum", 0.5),
    ("comparacao", r"\bvs\b|\bou\b|diferen[çc]a|melhor|compara[çc][ãa]o|versus", 0.7),
    ("dose/mg", r"\b\d+[,.]?\d*\s?mg|dose|dosagem|\bmg\b|tabela", 0.7),
    ("o que e/para que serve", r"para que serve|o que [ée]|oque|o q [ée]|como funciona|composi[çc][ãa]o|principio", 0.5),
    ("emagrece/quilos", r"emagrec|quilos|\bkg\b|perde|peso|resultado|antes e depois|semanas", 0.3),
    ("app/lembrete", r"\bapp\b|aplicativo|lembrete|calculadora|cronograma|calend[áa]rio", 1.0),
]

def norm(k):
    k = unicodedata.normalize("NFKD", k.lower()).encode("ascii", "ignore").decode()
    k = re.sub(r"[^a-z0-9 ]", " ", k)
    k = re.sub(r"(\d) (\d)", r"\1,\2", k)        # "2 5 mg" -> "2,5 mg"
    k = re.sub(r"(\d)\s?mg", r"\1mg", k)
    return re.sub(r"\s+", " ", k).strip()

def theme(k):
    for name, rx, w in THEMES:
        if re.search(rx, k): return name, w
    return "outro", 0.2

def rows_from(dump):
    task = dump["body"]["tasks"][0]
    seed = task.get("data", {}).get("keyword") or task.get("data", {}).get("target") or ""
    for it in task["result"][0]["items"]:
        kd = it.get("keyword_data", it)
        info = kd.get("keyword_info", {})
        yield {
            "keyword": kd["keyword"], "seed": seed,
            "volume": info.get("search_volume") or 0,
            "kd": (kd.get("keyword_properties") or {}).get("keyword_difficulty") or 0,
            "intent": (kd.get("search_intent_info") or {}).get("main_intent") or "",
            "cpc": info.get("cpc") or 0,
        }

def main(out, dumps):
    seen = {}
    for p in dumps:
        for r in rows_from(json.load(open(p))):
            key = norm(r["keyword"])
            if key in seen and seen[key]["volume"] >= r["volume"]: continue
            t, w = theme(r["keyword"].lower())
            r.update(theme=t, cluster=key, score=round(r["volume"] * w * (1 - r["kd"] / 100)))
            seen[key] = r
    rows = sorted(seen.values(), key=lambda r: -r["score"])
    with open(out, "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=["keyword", "cluster", "seed", "volume", "kd", "intent", "cpc", "theme", "score"])
        w.writeheader(); w.writerows(rows)
    print(f"{len(rows)} clusters, {sum(r['volume'] for r in rows):,} searches/month -> {out}")

if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
