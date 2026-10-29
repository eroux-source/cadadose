#!/usr/bin/env python3
"""Traffic forecast from the keyword CSV. Assumptions are explicit and editable.
Usage: python3 forecast.py keywords.csv
"""
import csv, sys

# CTR by position (mobile, informational, AI Overview present) — conservative.
CTR = {1: .18, 2: .11, 3: .08, 4: .06, 5: .045, 6: .035, 7: .03, 8: .025, 9: .02, 10: .018}
def ctr(pos): return CTR.get(pos, 0.004 if pos <= 20 else 0.0)

# Share of targeted clusters reaching each position band, by month since launch (new domain, ~10 links).
SCENARIOS = {
    "pessimiste": {1: {"4-10": .02, "11-20": .08}, 2: {"4-10": .06, "11-20": .18}, 3: {"4-10": .12, "11-20": .25}},
    "base":       {1: {"4-10": .04, "11-20": .12}, 2: {"4-10": .12, "11-20": .25}, 3: {"4-10": .22, "11-20": .30}},
    "optimiste":  {1: {"4-10": .08, "11-20": .15}, 2: {"4-10": .20, "11-20": .30}, 3: {"4-10": .35, "11-20": .30}},
}
TARGET_THEMES = {"geladeira/validade", "esqueci/atraso", "como aplicar/usar", "efeitos", "gravidez/contraindicacoes",
                 "comparacao", "o que e/para que serve", "receita/anvisa", "marcas BR/manipulado", "dose/mg", "comer/dieta/alcool", "app/lembrete"}
HEAD_CUTOFF = 20000  # above this volume pharmacies/brands dominate; count only 25 % of the volume

def main(path):
    vol = 0
    for r in csv.DictReader(open(path)):
        if r.get("theme", r.get("tema")) not in TARGET_THEMES: continue
        v = int(r.get("volume", r.get("volume_mensal_BR")))
        vol += v * 0.25 if v > HEAD_CUTOFF else v
    print(f"addressable monthly searches (targeted themes, head terms discounted): {vol:,.0f}")
    for name, months in SCENARIOS.items():
        line = []
        for m, bands in months.items():
            visits = vol * (bands["4-10"] * 0.035 + bands["11-20"] * 0.004)
            line.append(f"M{m}: {visits:,.0f}")
        print(f"  {name:11s} " + "   ".join(line) + "  visites/mois")

if __name__ == "__main__":
    main(sys.argv[1])
