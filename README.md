# Blue Star Adjusters website

The site is built from the Figma file `QDqzYPqApGhUygQ45bv3Co` with Astro 5 and Tailwind v4. The output is a static site served by `serve`.

## Pages
| Route | Figma frames | Indexed |
|---|---|---|
| `/` Home A | 22:62 desktop, 58:463 mobile, 63:780 menu | yes |
| `/home-b/` Home B | 53:148, 53:149 | no (alternate homepage concept) |
| `/about/michael-rapport/` Our Founder | 68:449, 68:450 | yes |
| `/claims/` What We Do | 70:574, 70:575 | yes |
| `/free-claim-review/` Free Claim Review (default and error states) | 73:1379, 74:1785, 74:3862, 74:4514 | yes |
| `/free-claim-review/thank-you/` | 74:2047, 74:4725 | no |

Every other link in the header, footer and body goes to a branded **noindex placeholder** (`src/components/StubPage.astro`), so there are no dead links. Replace each placeholder with a real page when it's designed. A 404 page is included.

## Develop
```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm start          # serves dist/ on $PORT (default 3000)
```

## Deploy on Railway
1. New Project → Deploy from GitHub repo → pick this repo.
2. Railway detects Node and runs `npm install`, `npm run build`, then `npm start`. `npm start` listens on Railway's `$PORT`.
3. Optional variable: `PUBLIC_SITE_URL=https://yourdomain.com`, used for canonical URLs (default `https://bluestaradjusters.com`).
4. Settings → Networking → Generate Domain, or add your custom domain.

## Lead forms (FormSubmit)
- Forms post to `https://formsubmit.co/nayem.adsmanager@gmail.com` and CC `mike@bluestaradjusters.com`. Both are set in `src/data/site.ts`.
- **The first submission sends an activation email to nayem.adsmanager@gmail.com. Click Activate once, or no emails arrive after that.**
- Spam protection is a honeypot field (`_honey`). FormSubmit's captcha page is turned off so visitors stay on the brand. To turn it back on, set `_captcha` to `true` in `src/components/FormSubmitFields.astro`.
- After a successful submit, the visitor goes to `/free-claim-review/thank-you/`.
- To switch to Brevo later, change `FORM_ACTION` and the hidden fields. The field names are already human-readable.

## Design fidelity QA
- `design/BUILD-BRIEF.md`: the build rules and pass bar.
- `design/tokens.json` and `src/styles/global.css`: exact Figma variables and text styles.
- `design/meta/*.xml`: Figma node geometry.
- `design/imagemap.json` + `scripts/build-images.mjs`: every image slot cropped exactly as placed in Figma, at 2× WebP (`public/img`). The original source photos are kept out of git on purpose.
- `scripts/pixel-diff.mjs`: pixel and geometry diff of a page against the Figma 1× render, per section, plus the box of every `data-node` element.
- `qa/run-all.sh`: builds the site, then diffs all 15 frames. It needs the Figma renders in `qa/ref/`, which are not committed. Re-export them with the Figma MCP `get_screenshot` at `maxDimension 65536`.
- `qa/functional.mjs`: crawls every page. It checks HTTP 200, one h1 per page, `#` links, form config, horizontal overflow at 360–1440px, menu open/Esc, blocking of empty submits, and the 404 page.
