# Blue Star Adjusters: build brief (read fully before touching code)

Repo: `/home/claude/bs/site` (Astro 5 + Tailwind v4, static output, deploys to Railway with `npm run build` then `npm start`).
Figma file: `QDqzYPqApGhUygQ45bv3Co`. The Figma design is the spec. Jay reviewed and approved it, so **replicate it exactly**: same copy, same layout, same spacing, same colours, same images and crops. Don't redesign, "improve" copy, or add sections.

## Goal and pass bar
The target is pixel-perfect at the two designed widths, **1280 (desktop)** and **390 (mobile)**. For every section, both checks must pass:
1. **Geometry:** every key element carries `data-node="<figma node id>"`, and its box (x, y, w, h) is within **1px** of Figma. Put `data-node` on section wrappers, headings, text blocks, images, buttons and cards, not on every span.
2. **Pixels:** `scripts/pixel-diff.mjs` mismatch per section is **≤ 3%**. Anything above that comes only from text anti-aliasing, and you've confirmed that visually with `compare-section.mjs`. The page's total height should be within ±2px of the Figma frame.
Report the real numbers. Never claim a pass you haven't measured.

## Tools you have
- Dev server, already running: `http://127.0.0.1:4321` (shared, with hot reload). Don't start another one on 4321. Don't kill it.
- `node scripts/pixel-diff.mjs <route> <frameId> --base http://127.0.0.1:4321 [--hide ".x"] [--click "sel"] [--prep "js"]`. It writes `qa/out/<frame>/{actual,diff}.png` and `report.json` (per-section mismatch and geometry failures).
- `node scripts/compare-section.mjs <frameId> <y> <height> 1600` makes a side-by-side image (Figma | build | diff) → Read the PNG to see it.
- Figma reference renders at 1×: `qa/ref/<frame-id>.png`. Figma metadata (every node's id, name, x/y/w/h, relative to its parent): `design/meta/*.xml`.
- Tokens are already in `src/styles/global.css`: colours (`navy royal ink paper line muted white error`, plus `logo-navy` #0D1C5A) and text-style utilities, which work with responsive prefixes, e.g. `class="tm-h2 lg:t-h2"`:
  - Desktop: `t-display-xl t-display-l t-h2 t-h3 t-figure-xl t-figure t-lead t-body t-body-strong t-small t-label t-button t-caption t-legal t-nav`
  - Mobile: `tm-display tm-h2 tm-h3 tm-figure tm-lead tm-body tm-body-strong tm-label`
  - Fields: `tf-label tf-input tf-helper`
  Fonts: Schibsted Grotesk 500/600/700 (`font-display`) and Montserrat 400/500/600 (`font-body`), self-hosted.
- Images: `<Img node="<figma image node id>" alt="..." class="..." />` from `src/components/Img.astro`. Every image slot is pre-cropped exactly as in Figma, at 2×, in `src/data/images.json` (keyed by node id, including instance ids like `I56:285;41:71`). Size it with CSS to the Figma box, using `object-fit: cover`, with width and height at 100% of the box. Use `priority` for the hero image only.
- Icons: `<Icon name="phone|menu|close|arrow-right|check|chevron-down|flame|droplet|wind|home|building|document|ruler|search|shield|map-pin|clock|quote" size={20} class="text-royal" />`. They use currentColor.
- Logo: `<Logo variant="horizontal-color|horizontal-white|stacked-color|stacked-white|mark-color|mark-white" width height bare? />`. These are the exact Figma component exports. The white variants include the component's #0D1C5A backing rect. Pass `bare` when the design shows no box. **Never redraw or restyle the logo.**
- Brand/detail SVGs in `public/svg/`: `wave-top-left.svg`, `wave-bottom-right.svg`, `detail-dimension-line.svg`, `detail-crop-marks.svg`, `detail-blueprint-grid.svg`, `logo-mark-*.svg`. The B-mark "faint" detail = the mark at the opacity Figma shows.
- Contact and routes: `src/data/site.ts` (`PHONE_DISPLAY`, `PHONE_TEL`, `ROUTES`, `FORM_ACTION`).
- Shared components (built by the components agent; import them, don't fork them): `Header` (theme light|dark), `Footer`, `CallBar`, `Button` (variant solid|outline|on-dark|outline-on-dark, href, icon), `Eyebrow` (theme light|dark), `FormField`, `LedgerRow`, `WaveCorner`. If a stub isn't finished yet, keep building your sections and come back to it.

## Figma API rules (shared quota: about 200 calls/day and 10/min across ALL agents)
- Load the Figma `figma-design-to-code` skill before your first `get_design_context`. Pass `skillNames: "figma-design-to-code"`, `clientFrameworks: "astro"`, `clientLanguages: "html,css,typescript"`.
- Call `get_design_context` **once per section node**. Take the node ids from `design/meta/*.xml`. Big frames come back sparse, so go down to section or sub-section level.
- **Pace yourself:** at most 1 Figma call every 45 seconds (`sleep 45` in Bash between calls). On a rate-limit error, wait 90s and retry once. If the daily quota runs out, stop calling Figma and finish from metadata, the reference PNGs and the visual diffs. Say so in your report.
- Keep your own budget (below). Never re-request a node. Save each response you use to `qa/dc/<nodeId>.txt` (large responses are auto-saved to a tool-results file; copy that file).
- Asset URLs in design context (`figma.com/api/mcp/asset/...`) **cannot be downloaded** from this environment. Don't try. Every raster image you need is already in `images.json`, and the icons, logos and details are in `public/svg`. If a design context needs a vector that isn't in `public/svg`, you can use `use_figma` (load the `figma-use` skill first) to `exportAsync({format:'SVG_STRING'})` that node. The output is capped at about 20KB per call. Save the result to `public/svg/`.
- Don't write to the Figma file. Read-only.

## Implementation rules
- The design-context code is React plus Tailwind with absolute positions. Translate it to semantic Astro and HTML with flex/grid and real text flow. Use Tailwind arbitrary values for exact px (`pt-[120px] gap-[24px] w-[504px]`). Use absolute positioning only where Figma is truly layered (overlays, decorative marks).
- **Responsive:** base classes = mobile (390 design); `lg:` (≥1024px) = desktop (1280 design). The desktop content width is 1120 inside 80px side padding at 1280. Use `max-w-[1280px] mx-auto px-[20px] lg:px-[80px]` (or whatever the section's Figma padding is), so 1024–1279 degrades gracefully. When mobile and desktop structures truly differ, render both blocks with `lg:hidden` / `hidden lg:block`. Keep that to the minimum.
- Copy must match Figma character for character: apostrophes, dashes, line breaks, casing. Don't add text. Don't fix grammar.
- Semantic, accessible HTML:
  - one `<h1>` per page, then h2/h3 in order
  - `<section>` per section, with an `aria-labelledby` where it's natural
  - alt text describes the photo
  - buttons are `<a>` or `<button>`
  - colour contrast as designed
- **Everything clickable must work (Jay's explicit requirement):**
  - phone numbers → `PHONE_TEL`
  - "Schedule / Free Claim Review" CTAs → `ROUTES.freeClaimReview`
  - nav and footer links → real routes
  - in-page anchors scroll
  - accordions open and close with the keyboard
  - hover and focus states are visible (Button hover/focus comes from the Figma variants; links get a subtle underline or colour change)
  - no dead `href="#"`
- Lead forms: `<form action={FORM_ACTION} method="POST" data-lead-form novalidate>` + `<FormSubmitFields source="<page/section>" />` + `FormField` components + `<button type="submit">`. Load `src/scripts/forms.ts` once per page that has a form: `<script>import '../scripts/forms.ts'</script>` (adjust the path). Field names must be human-readable (`Name`, `Phone`, `Email`, `Property address`, `Claim type`, `Message`), because FormSubmit emails show them as-is.
- Performance: no client JS except the header menu, forms and accordions. Keep it tiny and inline in Astro `<script>`. No external requests. Images are lazy except the hero.
- Page `<title>` and meta description: take them from the hero or H1 copy. Keep them ≤ 60 and ≤ 155 chars.
- Don't edit files owned by another agent (see ownership below). If you need a change in a shared component, tell the lead in your final report. Don't fork the component.

## Ownership
| Agent | Owns | Frames |
|---|---|---|
| components | `src/components/{Header,Footer,CallBar,Button,Eyebrow,FormField,LedgerRow,WaveCorner}.astro`, stub pages | Foundation 37:70; header/footer instances inside frames |
| home-a | `src/pages/index.astro`, `src/sections/home-a/*` | Desktop 22:62, Mobile 58:463, Menu open 63:780 (menu belongs to components; home-a verifies it) |
| home-b | `src/pages/home-b.astro` (noindex), `src/sections/home-b/*` | 53:148, 53:149 |
| founder | `src/pages/about/michael-rapport.astro`, `src/sections/founder/*` | 68:449, 68:450 |
| what-we-do | `src/pages/claims/index.astro`, `src/sections/what-we-do/*` | 70:574, 70:575 |
| fcr | `src/pages/free-claim-review/index.astro`, `.../thank-you.astro` (noindex), `src/sections/fcr/*` | 73:1379 (default), 74:1785 (error), 74:2047 (thank you); mobile 74:3862, 74:4514, 74:4725 |

## Workflow per section (loop until it passes)
1. Read the section's node list in `design/meta/*.xml`, then call `get_design_context` for it (paced).
2. Build it with `data-node` on key elements.
3. `pixel-diff` at the frame's width. `compare-section` on that section's y range. Look at it.
4. Fix and repeat. Then move to the next section. Don't leave a section above the bar without a written reason.

## Final report (your last message, keep it compact)
- Per frame: overall mismatch %, per-section mismatch %, geometry `within1px/checked`, height delta.
- Figma calls used.
- Open issues you couldn't fix, with the reason.
- Any shared-component changes you need from the lead.

---
## v2 pages (Who We Are, Contact, How It Works, Fees, Why Blue Star): what's different from v1
- **Don't call Figma yourself.** A fetcher agent is saving every section's `get_design_context` to `qa/dc2/<nodeId with : replaced by ->.txt`, working through `qa/dc2/QUEUE.tsv` (desktop sections first, then mobile). When it finishes, it writes `qa/dc2/DONE`.
  - While you wait for a file, build from `design/meta/<page>.xml` and the reference PNG. Poll with `sleep 30`.
  - Only when `DONE` exists and a file you need is still missing may you make **at most 4** paced Figma calls yourself (1 every 45s).
- **Shared components are done.** Reuse them: Header (light), Footer, CallBar, Button, Eyebrow, FormField, FormSubmitFields + `src/scripts/forms.ts`, WaveCorner, Img, Icon, Logo. Read each file's header comment. Look at similar v1 sections (e.g. `src/sections/home-a/FinalCta.astro`, `src/sections/fcr/*`) for patterns, but don't edit files you don't own.
- **Mobile QA:** put `data-node` (desktop id) and `data-node-m` (mobile id) on elements, then run:
  `node scripts/pixel-diff.mjs <route> <frame> --base http://127.0.0.1:4321 --mobile [--callbar-y 755]`
  It swaps the ids and pins the call bar at Figma's y. You need no prep script for this.
- **Mobile baseline fix:** Chrome sets text 1px higher than Figma. Wrap your page in `<main class="bs-<page>">` and add a scoped rule like:
  `@media (max-width:1023.98px){ .bs-<page> :where(.tm-body,.tm-body-strong,.tm-lead,.tm-h2,.tm-h3,.tm-display){position:relative;top:1px} }`
- **Copy:** use Figma's text exactly. `claude/bluestar-pages-v3-copy.md` is the copy source Figma was built from. Read it with the Projects tool (`project_read`) if you need to check a line.
- **Routes:** use `ROUTES` in `src/data/site.ts` (`whoWeAre /about/`, `contact /contact/`, `howItWorks /how-it-works/`, `fees /fees/`, `whyBlueStar /why-blue-star/`). Every CTA and link must be real.
  - "The First 48 Hours" links to `/first-48-hours/` (stub exists).
  - "Meet Michael Rapport" links to `ROUTES.founder`.
  - Office cards link to the existing `/locations/...` stubs.
- **Pass bar:** same as v1. The pixel diff must stay ≤3% per section; above that, write down why. Geometry within 1px. Height delta 0.
