// Build a --prep script that retargets data-node ids to a given FCR frame.
// Base ids in markup: data-node = desktop default (73:1379) or TY desktop (74:2047) ids; data-node-m = mobile default (74:3862) or TY mobile (74:4725) ids.
// Usage: node prep.mjs <targetFrame>  -> prints JS
import fs from 'node:fs';
const xml = fs.readFileSync('/home/claude/bs/site/design/meta/fcr.xml', 'utf8');
const frames = {}; let cur = null; const stack = [];
for (const line of xml.split('\n')) {
  const m = line.match(/^(\s*)<(\/?)([\w-]+)([^>]*?)(\/?)>/); if (!m) continue;
  const depth = m[1].length / 2; if (m[2]) { stack.length = depth; continue; }
  const a = {}; for (const mm of m[4].matchAll(/(\w+)="([^"]*)"/g)) a[mm[1]] = mm[2];
  stack.length = depth;
  if (depth === 1) { cur = frames[a.id] = { byPath: {}, ids: new Set([a.id]), pathOf: {} }; stack[1] = { path: '', counts: {} }; continue; }
  if (!cur || depth < 2) continue;
  const parent = stack[depth - 1]; const n = (parent.counts[a.name] = (parent.counts[a.name] || 0) + 1);
  const path = parent.path + '/' + a.name + '#' + n;
  stack[depth] = { path, counts: {} };
  cur.byPath[path] = a.id; cur.pathOf[a.id] = path; cur.ids.add(a.id);
}
const target = process.argv[2];
const mobile = ['74:3862', '74:4514', '74:4725'].includes(target);
const bases = mobile ? ['74:3862', '74:4725'] : ['73:1379', '74:2047'];
const T = frames[target]; const map = {};
for (const b of bases) for (const [id, p] of Object.entries(frames[b].pathOf)) { if (T.ids.has(id)) map[id] = id; else if (T.byPath[p]) map[id] = T.byPath[p]; }
for (const id of T.ids) map[id] = id;
const attr = mobile ? 'nodeM' : 'node';
process.stdout.write(`(()=>{const M=${JSON.stringify(map)};document.querySelectorAll('[data-node],[data-node-m]').forEach(e=>{const b=e.dataset.${attr};const t=b&&M[b];if(t)e.dataset.node=t;else delete e.dataset.node;});})();(async()=>{for(const i of document.images){i.loading='eager';i.decoding='sync';}await Promise.all([...document.images].map(i=>i.complete&&i.naturalWidth?0:new Promise(r=>{i.onload=i.onerror=r;})));await document.fonts.ready;})()`);
