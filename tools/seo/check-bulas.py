#!/usr/bin/env python3
"""Monthly bula check: download every bula URL cited in src/, hash it, compare with the last run,
and report changes. Run: python3 tools/seo/check-bulas.py  (state in tools/seo/data/bulas-state.json)
"""
import hashlib, json, os, re, sys, urllib.request, datetime
ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..")
STATE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data", "bulas-state.json")

def urls():
    out = {}
    for dp, _, fs in os.walk(os.path.join(ROOT, "src")):
        for f in fs:
            if not f.endswith((".ts", ".tsx")): continue
            t = open(os.path.join(dp, f), encoding="utf-8").read()
            for m in re.finditer(r'label:\s*"([^"]+)",\s*url:\s*"([^"]+)"', t):
                if m.group(2).lower().endswith(".pdf") or "bula" in m.group(2).lower():
                    out[m.group(2)] = m.group(1)
    return out

def main():
    prev = json.load(open(STATE)) if os.path.exists(STATE) else {}
    cur, changed = {}, []
    for u, label in urls().items():
        try:
            req = urllib.request.Request(u, headers={"User-Agent": "cadadose-bula-check/1.0"})
            data = urllib.request.urlopen(req, timeout=60).read()
            h = hashlib.sha256(data).hexdigest()[:16]
            cur[u] = {"label": label, "sha": h, "bytes": len(data), "checked": datetime.date.today().isoformat()}
            if u in prev and prev[u]["sha"] != h: changed.append((label, u))
            print(("CHANGED " if (u in prev and prev[u]["sha"] != h) else "ok      ") + label[:80])
        except Exception as e:
            print("ERROR   ", label[:60], "->", e)
            if u in prev: cur[u] = prev[u]
    os.makedirs(os.path.dirname(STATE), exist_ok=True)
    json.dump(cur, open(STATE, "w"), indent=1, ensure_ascii=False)
    if changed:
        print("\nBulas changed since last run (re-read their 'Histórico de alteração' and update pages):")
        for l, u in changed: print(" -", l, "\n  ", u)
        sys.exit(2)

if __name__ == "__main__":
    main()
