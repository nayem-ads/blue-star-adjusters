#!/bin/bash
# Pixel-diff with a 3-slot semaphore (the cloud box has 2 CPUs / 7 GB; Chromium runs must not pile up).
# Usage: bash qa/pd.sh <route> <frameId> <port> [--mobile] [--callbar-y N] ...   (always adds --approved)
# Prints a one-screen summary; full report in qa/out/<frame>/report.json.
r=$1; f=$2; port=$3; shift 3
for i in $(seq 1 600); do for s in 1 2 3; do
  exec 8>/tmp/pd-slot-$s.lock
  if flock -n 8; then
    node scripts/pixel-diff.mjs "$r" "$f" --base http://127.0.0.1:$port --approved "$@" > /tmp/pd-$$.json 2>/tmp/pd-$$.err || { cat /tmp/pd-$$.err | tail -5; exit 1; }
    python3 - "$f" <<'PY'
import json,sys
r=json.load(open('qa/out/%s/report.json'%sys.argv[1].replace(':','-')))
g=r['geometry']; print(f"{r['frameId']} {r['viewport']}px  overall {r['mismatchPct']}%  geo {g['within1px']}/{g['checked']}  dH {r['heightDelta']} (raw {r['heightDeltaRaw']})")
for s in r['sections']:
  if s.get('mismatchPct') is None: continue
  flag='  <-- over 3%' if s['mismatchPct']>3 and not s.get('approvedExcluded') else ('  (approved, excluded)' if s.get('approvedExcluded') else '')
  print(f"   {s['mismatchPct']:6.2f}%  y{s['y']:>5} h{s['h']:>5}  {s['section']}{flag}")
for x in g['failures'][:12]: print('   GEO', x.get('id'), x.get('name','')[:30], {k:x[k] for k in ('dx','dy','dw','dh') if k in x} or x.get('error'))
if len(g['failures'])>12: print('   ... +%d more geometry failures'%(len(g['failures'])-12))
PY
    exit 0
  fi
done; sleep 2; done
echo "pd.sh: no slot after 20 min"; exit 1
