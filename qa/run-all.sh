#!/bin/bash
# Full QA: production build -> static server -> pixel + geometry diff for every Figma frame that has a ref in qa/ref/.
# Usage: bash qa/run-all.sh   (refs: qa/ref/<frame>.png, 1x Figma renders via get_screenshot maxDimension 65536; not committed)
# Session-3 frames run with --approved (Jay-approved header / call bar / footer deviations excluded, see scripts/pixel-diff.mjs).
set -u
cd "$(dirname "$0")/.."
PORT=4400; export BASE=http://127.0.0.1:$PORT
npm run build >/tmp/bs-build.log 2>&1 || { tail -30 /tmp/bs-build.log; exit 1; }
npx serve dist -l tcp://127.0.0.1:$PORT --no-clipboard >/tmp/bs-serve.log 2>&1 & SP=$!
trap 'kill $SP 2>/dev/null' EXIT
sleep 2
FRAMES=()
run() { # route frame [extra args...]
  local r=$1 f=$2; shift 2
  [ -f "qa/ref/${f/:/-}.png" ] || { echo "SKIP $f (no ref)"; return; }
  FRAMES+=("${f/:/-}")
  node scripts/pixel-diff.mjs "$r" "$f" --base $BASE "$@" >/dev/null 2>&1 || echo "FAILED $f"
}
# v1/v2 frames (refs not in qa/ref this session; header/footer/call bar changed since, so these no longer pixel-match by design)
run /            22:62  --prep "$(cat qa/home-a-prep-d.js)"
run /            58:463 --prep "$(cat qa/home-a-prep-m.js)"
run /about/        128:3436
run /about/        128:6353 --mobile
run /contact/      128:3899
run /contact/      128:6470 --mobile
run /how-it-works/ 128:3750
run /how-it-works/ 135:4640 --mobile --callbar-y 755
run /fees/         128:3369
run /fees/         128:6166 --mobile
run /why-blue-star/ 128:3866
run /why-blue-star/ 135:1578 --mobile
# session 3 (Sep 2026): 22 pages x 2 widths
A=--approved
while read -r route d m cb; do
  run "$route" "$d" $A
  if [ "$cb" = "-" ]; then run "$route" "$m" --mobile $A; else run "$route" "$m" --mobile --callbar-y "$cb" $A; fi
done <<'LIST'
/claims/residential/ 226:698 226:1106 -
/claims/commercial/ 230:10208 230:10616 -
/claims/fire-smoke-damage/ 217:5733 217:13377 -
/claims/wildfire/ 234:917 234:1325 -
/claims/water-damage/ 229:698 229:1106 -
/claims/wind-hail-trees/ 229:8926 229:9334 -
/claims/contents-valuables/ 230:698 230:1106 -
/claims/additional-living-expenses/ 238:698 238:1106 -
/claims/code-upgrades/ 238:1616 238:2024 -
/claims/denied-or-underpaid/ 238:10968 238:11376 -
/results/ 217:6195 217:11645 -
/who-we-serve/ 217:1248 217:9663 -
/locations/ 217:961 217:10664 -
/locations/california/sacramento/ 217:1456 217:9476 755
/locations/california/santa-monica/ 217:12183 217:12780 755
/locations/california/san-francisco/ 217:13496 217:14093 755
/locations/nevada/reno/ 217:14686 217:15283 755
/locations/oregon/portland/ 217:15891 217:16488 755
/locations/washington/seattle/ 217:17062 217:17659 755
/locations/arizona/scottsdale/ 217:18233 217:18830 755
/faq/ 217:698 217:10753 -
/first-48-hours/ 217:5602 217:9387 -
LIST
node -e '
const fs=require("fs");const rows=[];
for (const f of process.argv.slice(1)) {
  const p="qa/out/"+f+"/report.json"; if(!fs.existsSync(p)){rows.push({frame:f,error:"no report"});continue;}
  const r=JSON.parse(fs.readFileSync(p));
  const secs=r.sections.filter(s=>s.mismatchPct!=null&&!s.approvedExcluded);
  const worst=secs.reduce((a,s)=>s.mismatchPct>a.mismatchPct?s:a,{mismatchPct:-1});
  rows.push({frame:r.frameId,route:r.route,w:r.viewport,mismatch:r.mismatchPct,geo:r.geometry.within1px+"/"+r.geometry.checked,heightDelta:r.heightDelta,heightDeltaRaw:r.heightDeltaRaw,worstSection:worst.section+" "+worst.mismatchPct+"%",over3:secs.filter(s=>s.mismatchPct>3).map(s=>s.section+" "+s.mismatchPct),geoFail:r.geometry.failures.map(g=>g.id+" "+(g.name||g.error))});
}
fs.writeFileSync("qa/out/summary.json",JSON.stringify(rows,null,1));
console.table(rows.map(r=>({frame:r.frame,route:r.route,w:r.w,mismatch:r.mismatch,worst:r.worstSection,geo:r.geo,dH:r.heightDelta,over3:(r.over3||[]).length})));
' "${FRAMES[@]}"
