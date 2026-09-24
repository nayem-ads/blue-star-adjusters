#!/usr/bin/env python3
# Save a Figma MCP response verbatim to disk WITHOUT retyping it: finds the latest *Figma tool* result in the
# Claude session transcripts (lead + subagents) that contains <needle> and writes it to <outfile>.
# Usage: python3 scripts/figma-cache.py '<unique substring of the response, e.g. data-node-id="217:5734">' qa/dc3/<nodeId>.txt
import json, sys, glob, os, re
needle, out = sys.argv[1], sys.argv[2]
esc = json.dumps(needle)[1:-1]
figma_ids, hits = set(), []
files = sorted(glob.glob('/root/.claude/projects/**/*.jsonl', recursive=True), key=os.path.getmtime)
for f in files:
    for i, line in enumerate(open(f, errors='ignore')):
        if '"tool_use"' in line and 'mcp__Figma__' in line:
            try:
                for p in json.loads(line).get('message', {}).get('content', []):
                    if p.get('type') == 'tool_use' and p.get('name', '').startswith('mcp__Figma__'): figma_ids.add(p['id'])
            except Exception: pass
        if needle not in line and esc not in line and 'has been saved to' not in line and 'persisted-output' not in line: continue
        try: d = json.loads(line)
        except Exception: continue
        c = d.get('message', {}).get('content')
        if not isinstance(c, list): continue
        for part in c:
            if part.get('type') != 'tool_result' or part.get('tool_use_id') not in figma_ids: continue
            cc = part.get('content')
            t = ''.join(x.get('text', '') for x in cc if isinstance(x, dict)) if isinstance(cc, list) else str(cc)
            m = re.search(r'(/root/\.claude/\S+?\.(?:txt|json))', t) if ('Output has been saved to' in t or 'persisted-output' in t) else None
            if m:
                raw = open(m.group(1)).read()
                try: raw = ''.join(x.get('text', '') for x in json.loads(raw))
                except Exception: pass
                t = raw
            if needle in t: hits.append(t)
if not hits: sys.exit('not found: ' + needle)
os.makedirs(os.path.dirname(out) or '.', exist_ok=True)
open(out, 'w').write(hits[-1]); print(out, len(hits[-1]))
