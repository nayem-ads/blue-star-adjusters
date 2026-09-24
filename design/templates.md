# Templates (Phase 0, 24 Sep 2026)

Method: compared the node structure (types + names, digits normalised) of every top-level section across frames in `design/meta/p-*.xml`, then diffed trees for the sections that differ. `python3 qa/tree.py <frame> [section]` prints any tree.

## Claims pages (10 incl. Residential): shared kit + page-specific middle sections
Page skeleton (desktop / mobile): `Hero` (820 / 844) → middle sections → `Related` (522 / 722) → `CTA` (762 / 672) → Footer (557 / 853) + Mobile call bar (89, y 756).

| Section | Shared by | How it varies (props, not copies) |
|---|---|---|
| Hero | all 10 | Image slot; eyebrow text; H1 (1–3 lines, height 136/192/288); optional lead paragraph (`slot/hero/lead` or `slot/hero/6`, 96–128 tall, 640 wide); trust line (3 items, identical copy); optional "Field photograph" caption (Fire & Smoke has it, Water doesn't). Hero content is bottom-anchored (bottom edge at y 724 desktop, 740 on ALE and Code Upgrades; 732 mobile), so its top y follows content height. **Mobile:** ALE and Code Upgrades move the lead paragraph out of the hero into the top of the next section (`slot/hero/6` at y 64 of section 2). |
| Related | 8 (not Residential, Commercial) | § index number (03/04/05…); 2 hub links (Residential, Commercial) + 7 index links = every claims page except itself, in the page's own order; mobile arrows 24 on hubs, 20 on index rows. |
| CTA | all 10 | Identical structure and copy slots (`slot/cta/1`, `slot/cta/2`); check text per page (`design/text`). |
| Footer / call bar | all | Shared components (approved deviations, see AGENT-PACK). |

Middle-section patterns (same layout family, different content; build as kit components with props where two or more pages use them, else page-specific):

| Pattern | Pages / section | Notes |
|---|---|---|
| RailList: left rail (§ chip, H2 `slot/*/1`, ruler 360) + right list of icon-circle items (648 wide) | Fire & Smoke `Misses`, Water `Method`, Denied `Questions` | item count 3–5; Denied item 4 has a citation row (§2071) under its text; mobile: heading group then list |
| PhotoSplit: photo left (600 wide) + details right (496 at x 704), § chips, optional inset photo with crop marks + dimension line | Fire `Detail` (960), Wind `Detail` (960), Wildfire `Detail` (1104), ALE `Detail` (640), Code `Founder` (720), Denied `When the answer is no` (760) | photo height, inset yes/no, 1–2 detail blocks, optional link / button / disclaimer |
| LawDoc: rail (§ chip, H2, button) + rotated document card with § citation | Fire `Law`, ALE `Law` (691 / 717) | citation text, body text |
| One-off | Fire `Results`; Water `Mold cap (split)`; Wind `Wind and collapse`; Contents `Inventory`, `California total losses`, `Result (bento)`; Wildfire `Two claims`, `Rights`, `Market`, `Timing`; ALE `Includes`; Code `What the city requires`; Denied `Public adjuster or attorney`; Commercial `Scope`, `Commercial list`, `Index`; Residential `Buckets`, `Index`, `Estimate` | own design context + own markup |

Image counts differ: Commercial mobile has 2 images (desktop 3); Residential mobile has no `modern-home`; Contents mobile crops differ. Always use the page's own image node ids (`src/data/images.json`).

## Office pages (7): one template, 3 Office-section variants, per-state State rule
Skeleton: Header (light, 88/64) → `Hero` (720 / 802–850) → `Office` → [`Local line`] → `State rule` (584 / 566) → `Claim types` (581 / 662) → `CTA` (512 / 534) → Footer.

| Section | Variation |
|---|---|
| Hero | eyebrow text/width; chips (Sacramento: "Head office" + "CA"; others: state chip only); image slot; H1/lead text; mobile height 802 (Sac, Reno, Portland, Seattle, Scottsdale) or 850 (Santa Monica, San Francisco — longer text) |
| Office | **3 variants:** Sacramento (743 / 749, head-office detail), Santa Monica + San Francisco (549 / 549), Reno / Portland / Seattle / Scottsdale (452 / 462); within a variant only text + state chip differ |
| Local line | Santa Monica + San Francisco only (352 / 384) |
| State rule | CA pages share copy (Sac, SM, SF); NV/OR/WA/AZ each have their own citation chip + text; card height follows text (311 vs 377) |
| Claim types, CTA | identical structure on all 7 (geometry differs only by page y) |

## One-off pages (own layout, no template)
Locations hub (217:961 / 217:10664), Results (217:6195 / 217:11645), Who We Serve (217:1248 / 217:9663), FAQ (217:698 / 217:10753), First 48 Hours (217:5602 / 217:9387). Results, FAQ and First 48 have no photos.
