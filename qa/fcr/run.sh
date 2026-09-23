#!/bin/bash
# FCR QA runner. Usage: bash qa/fcr/run.sh <frameId>. Uses scripts/pixel-diff.mjs (BASE env = server URL, default dev server).
# prep.mjs retargets data-node/data-node-m ids to the frame (path match in design/meta/fcr.xml), forces eager+sync image decode.
# Error frames: click submit on the empty form, then fill the Figma sample values and resubmit (forms.ts produces the state). TY frames: inject the Figma sample receipt.
# run.sh <frame> : pixel-diff with retargeted node ids; prints compact summary
cd /home/claude/bs/site
S=/home/claude/bs/site/qa/fcr
F=$1
PREP=$(node $S/prep.mjs $F)
case $F in
  73:1379) R=/free-claim-review/; X=(--hide astro-dev-toolbar);;
  74:3862) R=/free-claim-review/; X=(--hide astro-dev-toolbar);;
  74:1785) R=/free-claim-review/; X=(--hide astro-dev-toolbar --click "form[data-lead-form] button[type=submit]"); PREP="(()=>{const f=document.querySelector('form[data-lead-form]');const s=(id,v)=>{const e=document.getElementById(id);e.value=v;};s('f-name','Jordan Moreno');s('f-phone','(916) 555-01');s('f-email','jmoreno@');s('f-state','California');f.requestSubmit();document.activeElement&&document.activeElement.blur();})();$PREP";;
  74:4514) R=/free-claim-review/; X=(--hide astro-dev-toolbar --click "form[data-lead-form] button[type=submit]"); PREP="(()=>{const f=document.querySelector('form[data-lead-form]');const s=(id,v)=>{const e=document.getElementById(id);e.value=v;};s('f-name','Jordan Moreno');s('f-phone','(916) 555-01');s('f-email','jmoreno@');s('f-state','California');f.requestSubmit();document.activeElement&&document.activeElement.blur();})();$PREP";;
  74:2047|74:4725) R=/free-claim-review/thank-you/; X=(--hide astro-dev-toolbar); [ $F = 74:4725 ] && X=(--hide astro-dev-toolbar); PREP="(()=>{sessionStorage.setItem('fcr-receipt',JSON.stringify({name:'Jordan Moreno',phone:'(916) 555-0123',state:'California',what:'Fire or smoke',docs:''}));document.dispatchEvent(new Event('fcr:receipt'));})();$PREP";;
esac
case $F in 74:3862|74:4514|74:4725) PREP="(()=>{const st=document.createElement('style');st.textContent='.bs-callbar{position:absolute!important;top:756px!important;bottom:auto!important}';document.head.appendChild(st);})();$PREP";; esac
node scripts/pixel-diff.mjs $R $F --base ${BASE:-http://127.0.0.1:4321} "${X[@]}" --prep "$PREP" > /tmp/fcr-last-$F.json 2>&1 || { tail -20 /tmp/fcr-last-$F.json; exit 1; }
node -e "
const r=require('/home/claude/bs/site/qa/out/'+process.argv[1].replace(':','-')+'/report.json');
console.log('overall',r.mismatchPct,'% height',r.actualHeight,'vs',r.refHeight,'delta',r.heightDelta,'geo',r.geometry.within1px+'/'+r.geometry.checked);
r.sections.forEach(s=>console.log(' ',s.section,s.y,s.h,s.mismatchPct));
r.geometry.failures.slice(0,+process.argv[2]||40).forEach(g=>console.log('  X',g.id,g.name,g.error||'',g.dx,g.dy,g.dw,g.dh));
" $F $2
