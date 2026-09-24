#!/usr/bin/env python3
# Compact Figma node tree from design/meta (ticks / ramp steps collapsed). Coordinates are relative to the parent.
# Usage: python3 qa/tree.py <frameId>                 -> top-level sections (id, y, h)
#        python3 qa/tree.py <frameId> <section id|name-substring>  -> full subtree of that section
import re, glob, sys
fid = sys.argv[1]; want = sys.argv[2] if len(sys.argv) > 2 else None
for f in glob.glob('design/meta/*.xml'):
    txt = open(f).read()
    if f'id="{fid}"' not in txt: continue
    stack = []; frame = None
    for line in txt.split('\n'):
        m = re.match(r'^(\s*)<(\w[\w-]*) id="([^"]+)" name="([^"]*)" x="([^"]+)" y="([^"]+)" width="([^"]+)" height="([^"]+)"([^>]*)>', line)
        if not m: continue
        d = len(m.group(1)) // 2
        n = dict(d=d, t=m.group(2), id=m.group(3), name=m.group(4), x=float(m.group(5)), y=float(m.group(6)), w=float(m.group(7)), h=float(m.group(8)), hid='hidden="true"' in m.group(9), kids=[])
        stack[d:] = [n]
        if n['id'] == fid: frame = n
        elif d > 0 and len(stack) > 1 and stack[d-1] is not None: stack[d-1]['kids'].append(n)
    break
if not frame: sys.exit('frame not found in design/meta')
r = lambda v: ('%g' % round(v, 1))
def show(n, ind=0):
    if re.match(r'^(Tick|Ramp step)$', n['name']): return
    ticks = sum(1 for k in n['kids'] if k['name'] in ('Tick', 'Ramp step'))
    print('  ' * ind + f"{n['t'][:4]} {n['id']} \"{n['name']}\" {r(n['x'])},{r(n['y'])} {r(n['w'])}x{r(n['h'])}" + (' HIDDEN' if n['hid'] else '') + (f' [{ticks} ticks]' if ticks else ''))
    for k in n['kids']: show(k, ind + 1)
if not want:
    print(f"{frame['id']} {frame['name']} {r(frame['w'])}x{r(frame['h'])}")
    for s in frame['kids']: print(f"  {s['id']:>12}  y{r(s['y']):>6} h{r(s['h']):>5}  {s['name']}")
else:
    for s in frame['kids']:
        if s['id'] == want or want.lower() in s['name'].lower(): show(s)
