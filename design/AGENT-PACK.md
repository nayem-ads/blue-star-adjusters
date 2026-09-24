# AGENT PACK — Blue Star build session 3 (read this, not BUILD-BRIEF)

Repo `/home/claude/bs/site` (Astro 5 + Tailwind 4, static). Branch `remaining-pages` — never switch branches, never push, never `git add -A`.
Figma file `QDqzYPqApGhUygQ45bv3Co`. The Figma frame is the spec: same copy, layout, spacing, colours, images, crops. Don't redesign.

## Pass bar (per frame, 1280 and 390; the lead re-measures everything, don't self-certify)
Every section ≤ 3 % mismatch · every `data-node` element within 1 px · height delta 0 (report's `heightDelta`, already adjusted for the approved footer) · exact Figma copy · every link/CTA/phone works · no `href="#"` · accordions/tabs keyboard-operable · `npx astro check` not required, but the page must build.
Residual > 3 % is acceptable only when `compare-section` shows it is text anti-aliasing (or an approved deviation); say so in your report.

## Inputs (never re-fetch anything already on disk)
- Section list / node tree: `python3 qa/tree.py <frame>` and `python3 qa/tree.py <frame> "<section name or id>"` (from `design/meta/p-*.xml`).
- Exact text: `design/text/<frame-with-dash>.json` (claims + office frames: `[id, layerName, characters]`), else design context.
- 1× Figma renders: `qa/ref/<frame-with-dash>.png` (never Read whole; use compare-section crops).
- Images: every image node of every new frame is in `src/data/images.json` (2× WebP). `<Img node="<image node id>" alt="…" class="w-full h-full object-cover" />`; `priority` on the hero image only.
- Design-context cache: `qa/dc3/<nodeId with : → ->.txt`. Check it before any Figma call.
- `design/templates.md`: which pages share which sections and how they vary.

## Figma calls (shared quota ≈ 9/min for ALL agents, maybe ~200/day total — be frugal)
1. `ls qa/dc3/` first. 2. `bash scripts/figma-slot.sh <agent>` immediately before every Figma call (blocks until a slot is free).
3. `get_design_context` per **section** node (whole frames come back sparse): load skill `figma:figma-design-to-code` once first; pass `clientFrameworks:"astro"`, `clientLanguages:"html,css,typescript"`, `skillNames:"figma-design-to-code"`.
4. Right after the call save it verbatim (no retyping): `python3 scripts/figma-cache.py '<a unique string from that response, e.g. the node id>' qa/dc3/<id-dashed>.txt`.
5. Asset URLs in responses (`figma.com/api/mcp/asset/…`) are not downloadable here. Photos are already in images.json; icons in `public/svg/icons`; if you need a vector that isn't there, `use_figma` (load `figma:figma-use` first) `exportAsync({format:'SVG_STRING'})`, cache it, save to `public/svg/`.
6. Mobile sections: build from metadata + desktop design context + ref render first; only fetch a mobile section's design context if it is still > 3 % after 2 fix rounds.

## Dev server + checks (one dev server per agent, your own port)
- Start: `cd /home/claude/bs/site && (npx astro dev --port <PORT> --host 127.0.0.1 > /tmp/dev<PORT>.log 2>&1 &)`; never kill other ports.
- Measure: `bash qa/pd.sh <route> <frame> <PORT>` (desktop) / `bash qa/pd.sh <route> <frame> <PORT> --mobile` (390 frames; swaps `data-node-m`, pins call bar at y 756; add `--callbar-y N` if the frame's bar isn't at 756). Always adds `--approved`.
- Look: `node scripts/compare-section.mjs <frame> <y> <h> 1200` → Read `qa/out/<frame>/cmp-<y>.png` (Figma | build | diff). Only for sections over 3 %.
- `npm run build` is run by the lead; don't run it in parallel.

## Approved deviations (Jay, Sep 2026 — do NOT "fix" them)
Sticky navy desktop header with dropdown nav (masked in QA) · navy mobile call bar (masked) · footer without "We represent the insured only." (footer section reported but excluded; heightDelta adjusted). Header/Footer/call-bar instance boxes are excluded from geometry.

## Page skeleton
```astro
---
// <Page> (Figma desktop <D>, mobile <M>). data-node = desktop id, data-node-m = mobile id.
import Base from '../../layouts/Base.astro';  import Header from '../../components/Header.astro';
import Footer from '../../components/Footer.astro';  import CallBar from '../../components/CallBar.astro';
---
<Base title="… | Blue Star Adjusters" description="…(≤155)">
  <!-- dark photo hero (claims pages): -->
  <div class="absolute left-0 right-0 top-0 z-40" data-node="<hdr D>" data-node-m="<hdr M>"><Header theme="dark" overlay /></div>
  <!-- light pages: <div data-node="<hdr D>" data-node-m="<hdr M>"><Header theme="light" /></div> -->
  <main class="bs-<slug>"> …sections… </main>
  <div data-node="<footer D>" data-node-m="<footer M>"><Footer /></div>
  <CallBar node="<call bar M>" />
</Base>
<style is:global>
  @media (max-width: 1023.98px) { .bs-<slug> :where(.tm-body,.tm-body-strong,.tm-lead,.tm-h2,.tm-h3,.tm-display){position:relative;top:1px} }
</style>
```
Template pages: page file ≈ 5–15 lines; content lives in `src/data/<kit>/<slug>.ts`.

## Build rules
- Mobile-first classes; `lg:` = desktop (≥1024). Desktop content 1120 inside 80 px padding: `max-w-[1280px] mx-auto px-[20px] lg:px-[80px]`. Exact px via arbitrary values. Flex/grid + real text flow; absolute only for truly layered things (overlays, marks, captions).
- When mobile and desktop structures differ, render both (`lg:hidden` / `hidden lg:block`), minimum amount.
- `data-node` (desktop id) / `data-node-m` (mobile id) on section wrappers, headings, text blocks, images, buttons, cards — not every span. Rotated Figma nodes: leave untagged (their metadata x/y lie). Hidden Figma nodes: don't render, unless an annotation says it's a static-frame limitation (e.g. scroller cards). Mobile scroller rows: build the full real row (all cards).
- Semantic HTML: one `<h1>`, h2/h3 in order, `<section aria-labelledby>`, real alt text, buttons are `<a>`/`<button>`.
- Text styles (responsive utilities): desktop `t-display-xl t-display-l t-h2 t-h3 t-figure-xl t-figure t-lead t-body t-body-strong t-small t-label t-button t-caption t-legal t-nav`; mobile `tm-display tm-h2 tm-h3 tm-figure tm-lead tm-body tm-body-strong tm-label`. Colours: `navy royal ink paper line muted white error logo-navy`. Fonts `font-display` (Schibsted) / `font-body` (Montserrat).
- Copy: character-exact from `design/text` / design context (apostrophes, line breaks via `whitespace-pre-line` or `<br>`). **Never show a fee percentage.** Figma notes like `[CLIENT: confirm …]` / `[LEGAL CHECK …]` never render on the site — list them in your report.
- Links: `import { PHONE_DISPLAY, PHONE_TEL, ROUTES } from '…/data/site'`. Phone → `PHONE_TEL`; "Schedule a Free Review"/free review → `ROUTES.freeClaimReview`; claims/offices/pages → `ROUTES.*` (fireSmoke, wildfire, waterDamage, windHailTrees, contentsValuables, additionalLiving, codeUpgrades, deniedOrUnderpaid, residential, commercial, results, whoWeServe, locations, faq, first48Hours, howItWorks, fees, founder, whoWeAre, contact, sacramento, santaMonica, sanFrancisco, reno, portland, seattle, scottsdale). No `href="#"`.
- Accordions: `<button aria-expanded aria-controls>` + tiny inline `<script>`; Enter/Space work natively; visible focus.

## Shared components (import, never fork; need a change → ask the lead in your report)
- `Button` {href?, variant 'solid'|'outline'|'on-dark'|'outline-on-dark', icon?, iconPosition?, full?, node?, class} — pill 52 tall; mobile 56: add `class="h-[56px] w-full lg:h-[52px] lg:w-auto"`.
- `Eyebrow` {theme 'light'|'dark', node?, as?} — 24×2 rule + label.
- `Icon` {name, size, class} — names: arrow-right building check chevron-down clock close document droplet flame home map-pin menu phone quote ruler search shield wind.
- `Logo` {variant horizontal-color|horizontal-white|stacked-*|mark-color|mark-white, width, height, bare?} — never redraw the logo; faint B-mark = `mark-*` at the Figma opacity.
- `Img` {node, alt, class, priority?}. `WaveCorner` {position 'top-left'|'bottom-right', width?, node?}. `LedgerRow` {loss, note, offer, recovered, …} (results ledger row). `FormField`, `FormSubmitFields` (forms).
- SVG details in `public/svg/`: `detail-crop-marks.svg`, `detail-dimension-line.svg`, `detail-blueprint-grid.svg`, `wave-*.svg`. Ruler ticks: copy an existing pattern (`grep -rn "Ruler" src/sections/fcr/Ruler.astro src/sections/home-a/Ruler.astro`).
- Existing claims-like sections to learn from (read narrowly): `src/sections/what-we-do/*`, `src/sections/home-a/Offices.astro`, `src/sections/fees/Faq.astro` (accordion), `src/sections/contact/Offices.astro`.

## Ownership (only touch your own files; lead owns site.ts, Header, Footer, CallBar, components/, images.json, global.css, scripts/, qa/pd.sh)
| Agent | Port | Owns | Frames (D / M) → route |
|---|---|---|---|
| 1 claims-kit | 4322 | `src/sections/claims/*.astro` (kit: Hero, Related, Cta, RailList, PhotoSplit, LawDoc), `src/sections/claims/fire-smoke/*`, `water/*`, `denied/*`, `src/data/claims/{fire-smoke-damage,water-damage,denied-or-underpaid}.ts`, their pages | Fire 217:5733/217:13377 → /claims/fire-smoke-damage/ · Water 229:698/229:1106 → /claims/water-damage/ · Denied 238:10968/238:11376 → /claims/denied-or-underpaid/ |
| 2 claims-A | 4323 | `src/sections/claims/{commercial,wildfire,wind}/*`, `src/data/claims/{commercial,wildfire,wind-hail-trees}.ts`, their pages | Commercial 230:10208/230:10616 → /claims/commercial/ · Wildfire 234:917/234:1325 → /claims/wildfire/ · Wind 229:8926/229:9334 → /claims/wind-hail-trees/ |
| 3 claims-B | 4324 | `src/sections/claims/{contents,ale,code}/*`, `src/data/claims/{contents-valuables,additional-living-expenses,code-upgrades}.ts`, their pages | Contents 230:698/230:1106 · ALE 238:698/238:1106 · Code 238:1616/238:2024 |
| 4 offices | 4325 | `src/sections/office/*`, `src/data/offices/*.ts`, `src/pages/locations/<state>/<city>/index.astro` | 7 offices (Sac 217:1456/217:9476, SM 217:12183/217:12780, SF 217:13496/217:14093, Reno 217:14686/217:15283, Portland 217:15891/217:16488, Seattle 217:17062/217:17659, Scottsdale 217:18233/217:18830) |
| 5 locations | 4326 | `src/sections/locations/*`, `src/pages/locations/index.astro` | 217:961/217:10664 → /locations/ |
| 6 results-wws | 4327 | `src/sections/{results,who-we-serve}/*`, their pages | Results 217:6195/217:11645 → /results/ · Who We Serve 217:1248/217:9663 → /who-we-serve/ |
| 7 faq-48 | 4328 | `src/sections/{faq,first-48}/*`, their pages | FAQ 217:698/217:10753 → /faq/ · First 48 217:5602/217:9387 → /first-48-hours/ |
| 8 residential | 4329 | `src/sections/residential/*`, `src/pages/claims/residential/index.astro`, `src/data/claims/residential.ts` | 226:698/226:1106 → /claims/residential/ |

Kit rule: agent 1 builds the claims kit first (Hero → Related → Cta, commit, then `touch design/KIT-READY`). Agents 2, 3, 8 build their one-off sections first and switch to the kit once `design/KIT-READY` exists. A kit component may get a new **optional** prop from another agent only if the default output is unchanged; after such an edit re-run `bash qa/pd.sh /claims/fire-smoke-damage/ 217:5733 <PORT>` (and mobile) to prove no regression, and commit that edit on its own.

## Commits (shared working tree)
`git add <your paths> && git commit -m "<page>: <what>" -- <your paths>`; on `index.lock` errors wait 5 s and retry. Commit per page once both widths are measured. Stub pages at your routes are yours to replace in place.

## Final report (≤ 25 lines)
Table: page | frame | overall % | worst section % | geo within/checked | heightDelta. Then: sections still > 3 % with reason, Figma calls used, `[CLIENT: confirm]`/`[LEGAL CHECK]` notes found, shared-file changes you need.
