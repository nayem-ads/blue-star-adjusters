#!/bin/bash
# Full QA: production build -> static server -> pixel + geometry diff for all 15 Figma frames.
# Usage: bash qa/run-all.sh   (needs qa/ref/*.png Figma renders; see design/BUILD-BRIEF.md)
set -u
cd "$(dirname "$0")/.."
PORT=4400; export BASE=http://127.0.0.1:$PORT
npm run build >/tmp/bs-build.log 2>&1 || { tail -30 /tmp/bs-build.log; exit 1; }
npx serve dist -l tcp://127.0.0.1:$PORT --no-clipboard >/tmp/bs-serve.log 2>&1 & SP=$!
trap 'kill $SP 2>/dev/null' EXIT
sleep 2
run() { # route frame prepfile [extra args...]
  local r=$1 f=$2 p=$3; shift 3
  node scripts/pixel-diff.mjs "$r" "$f" --base $BASE --prep "$(cat $p)" "$@" >/dev/null 2>&1 || echo "FAILED $f"
}
run /            22:62  qa/home-a-prep-d.js
run /            58:463 qa/home-a-prep-m.js
run /            63:780 qa/home-a-prep-menu.js --click ".bs-header [data-menu-open]"
run /home-b/     53:148 qa/home-b-prep-d.js
run /home-b/     53:149 qa/home-b-prep-m.js
run /about/michael-rapport/ 68:449 qa/home-a-prep-d.js
run /about/michael-rapport/ 68:450 qa/founder-prep-m.js
run /claims/     70:574 qa/home-a-prep-d.js
run /claims/     70:575 qa/wwd-prep-mobile.js
for f in 73:1379 74:1785 74:2047 74:3862 74:4514 74:4725; do bash qa/fcr/run.sh $f >/dev/null 2>&1 || echo "FAILED $f"; done
node -e '
const fs=require("fs");const rows=[];
for (const f of ["22-62","58-463","63-780","53-148","53-149","68-449","68-450","70-574","70-575","73-1379","74-1785","74-2047","74-3862","74-4514","74-4725"]) {
  const p="qa/out/"+f+"/report.json"; if(!fs.existsSync(p)){rows.push({frame:f,error:"no report"});continue;}
  const r=JSON.parse(fs.readFileSync(p));
  const secs=r.sections.filter(s=>s.mismatchPct!=null);
  const worst=secs.reduce((a,s)=>s.mismatchPct>a.mismatchPct?s:a,{mismatchPct:-1});
  rows.push({frame:r.frameId,route:r.route,w:r.viewport,mismatch:r.mismatchPct,geo:r.geometry.within1px+"/"+r.geometry.checked,heightDelta:r.heightDelta,worstSection:worst.section+" "+worst.mismatchPct+"%",over3:secs.filter(s=>s.mismatchPct>3).map(s=>s.section+" "+s.mismatchPct)});
}
fs.writeFileSync("qa/out/summary.json",JSON.stringify(rows,null,1));
console.table(rows.map(r=>({frame:r.frame,w:r.w,mismatch:r.mismatch,geo:r.geo,dH:r.heightDelta,over3:(r.over3||[]).length})));
'
