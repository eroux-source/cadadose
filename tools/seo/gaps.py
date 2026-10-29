#!/usr/bin/env python3
"""Coverage gaps: which keyword clusters have no page on the site yet.
Usage: python3 gaps.py keywords.csv [--min-volume 200]
Reads the site's content index (src/content) through `npx tsx` to get titles + URLs.
"""
import csv, json, re, subprocess, sys, unicodedata
from collections import defaultdict

def norm(s):
    s = unicodedata.normalize("NFKD", s.lower()).encode("ascii", "ignore").decode()
    return re.sub(r"[^a-z0-9 ]", " ", s)

def site_pages():
    js = "import('./src/content/index.ts').then(async m=>{const g=(await import('./src/content/guias.ts')).guias;const p=m.allArticles.map(a=>({url:`/medicamentos/${a.medicationSlug}/${a.intent}`,title:a.title,text:a.title+' '+a.answer}));g.forEach(x=>p.push({url:`/guias/${x.slug}`,title:x.title,text:x.title+' '+x.answer}));console.log(JSON.stringify(p))})"
    out = subprocess.run(["npx", "-y", "tsx", "-e", js], capture_output=True, text=True, cwd=ROOT)
    return json.loads(out.stdout.strip().splitlines()[-1])

MEDS = ["mounjaro", "ozempic", "wegovy", "tirzepatida", "semaglutida", "saxenda", "liraglutida", "caneta"]
TOPIC_WORDS = {  # theme -> words that must appear in a page title/answer to count as covering it
    "geladeira/validade": ["geladeira", "validade", "fora da"], "esqueci/atraso": ["esquec"],
    "como aplicar/usar": ["aplicar"], "efeitos": ["efeito", "nausea", "diarreia", "cabelo", "prisao"],
    "gravidez/contraindicacoes": ["gravid", "amament", "nao pode", "tireoide", "pressao"],
    "comparacao": ["diferenca", " vs ", " ou "], "dose/mg": ["dose", "mg"], "o que e/para que serve": ["para que serve"],
    "receita/anvisa": ["receita", "anvisa"], "comer/dieta/alcool": ["alcool", "comer"], "marcas BR/manipulado": ["manipulad"],
}

def main(path, min_volume):
    pages = site_pages()
    cov = defaultdict(list)
    for p in pages:
        t = norm(p["text"])
        meds = [m for m in MEDS if m in t]
        for theme, words in TOPIC_WORDS.items():
            if any(w in t for w in words):
                for m in meds: cov[(m, theme)].append(p["url"])
    gaps = defaultdict(lambda: [0, 0, []])
    for r in csv.DictReader(open(path)):
        v = int(r["volume"])
        if v < min_volume: continue
        med = next((m for m in MEDS if m in norm(r["keyword"])), "generico")
        key = (med, r["theme"])
        covered = bool(cov.get(key))
        g = gaps[(med, r["theme"], covered)]
        g[0] += v; g[1] += 1; g[2].append((v, r["keyword"]))
    print(f"{'med':12s} {'theme':26s} {'covered':8s} {'volume':>9s} {'n':>4s}  top keywords")
    for (med, theme, covered), (v, n, kws) in sorted(gaps.items(), key=lambda x: -x[1][0]):
        top = ", ".join(k for _, k in sorted(kws, reverse=True)[:3])
        print(f"{med:12s} {theme:26s} {'yes' if covered else 'NO':8s} {v:9,d} {n:4d}  {top}")

if __name__ == "__main__":
    import os
    ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
    mv = int(sys.argv[sys.argv.index("--min-volume") + 1]) if "--min-volume" in sys.argv else 200
    main(sys.argv[1], mv)
