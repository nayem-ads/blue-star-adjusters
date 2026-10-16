// Code Upgrades (Figma desktop 238:1616, mobile 238:2024). Copy from /home/claude/bluestar-work/pages/code-upgrades/content.md (approved).
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Ordinance or Law Coverage: Code Upgrade Claims | Blue Star',
  description: 'Ordinance or law coverage pays to rebuild to current code after a covered loss. How Coverage A, B and C work, California\'s rules, and how we claim it.',
  header: ['238:1621', '238:2051'] as const,
  footer: ['238:2023', '238:2238'] as const,
  callBar: '238:2239',
};

// Direct answer under the H1 (desktop hero lead; on mobile it opens § 01, as in the design).
export const heroLead = 'Ordinance or law coverage pays the added cost of rebuilding to current building code after a covered loss. It covers three costs: the value of the undamaged part the code makes you tear down, the cost to demolish it, and the increased cost of construction. In California, a replacement cost home policy must include code upgrade coverage of at least one tenth of the dwelling limit.';

export const requires = {
  chip: '§ 01',
  title: "You Can't Rebuild It the Way It Was. The City Won't Let You.",
  lead: "We identify and quantify code upgrade costs that may be covered under your policy, a significant source of recovery that most homeowners don't know they have, and the carrier's first estimate rarely includes.",
  rows: [
    { icon: 'building', label: 'What the city will require:', text: 'energy code, fire sprinklers, accessibility, seismic bracing.' },
    { icon: 'home', label: 'Undamaged portions', text: 'that must come up to code because the damaged part does.' },
    { icon: 'document', label: 'Where the money is:', text: 'ordinance or law coverage (often an endorsement, with its own limit), demolition, increased cost of construction.' },
  ],
};

export const founder = {
  img: { d: '238:1865', m: '238:2112', alt: 'Seismic retrofit under way: steel frame and new plywood shear walls in a building basement.' },
  height: 720,
  top: 184,
  inset: { d: '238:1867', m: '238:2114', alt: 'Hand resting on construction plans on a job site table.', label: 'Ordinance or law' },
  blocks: [],
  dark: true,
  nodes: {
    section: ['238:1864', '238:2110'], img: ['238:1865', '238:2112'], stack: [undefined, '238:2111'], inset: ['238:1866'],
    insetImg: ['238:1867', '238:2114'], dimension: ['238:1868', '238:2115'], crop: ['238:1869', '238:2113'], details: ['238:1870', '238:2116'],
  },
  line: {
    chip: '§ 02',
    title: 'Read the Limit. Then Write the Scope.',
    body: "Your code upgrade limit is printed in your policy. We read it before the scope is written, so the code work is priced against money that's actually there.",
    nodes: { block: ['238:1871', '238:2117'], chip: ['238:1872', '238:2118'], chipText: ['238:1873', '238:2119'], rule: ['241:1013', '242:976'], body: ['238:1875', '238:2121'], button: ['241:1014', '242:977'] },
  },
} as const;

export const hero = {
  img: { d: '238:1618', m: '238:2026', alt: 'House framing under construction with new fire sprinkler piping and seismic hold-down hardware.' },
  eyebrow: 'Code Upgrades',
  title: 'Ordinance or Law Coverage for Code Upgrades After a Loss',
  titleClass: 'bs-code-h1 lg:t-display-l lg:w-[1040px]',
  lead: heroLead,
  leadOnMobile: false,
  caption: false,
  bottom: 80,
  nodes: {
    section: ['238:1617', '238:2025'], img: ['238:1618', '238:2026'], content: ['238:1622', '238:2053'],
    eyebrow: ['238:1623', '238:2054'], title: ['238:1624', '238:2055'], lead: ['241:992'], ctas: ['238:1625', '238:2062'],
    cta1: ['238:1626', '238:2063'], cta2: ['238:1627', '238:2064'], trust: ['238:1628', '238:2056'], trustRow: [undefined, '238:2057'],
    trust1: ['238:1629', '238:2058'], trust2: ['238:1631', '238:2061'], trust3: ['238:1633', '238:2060'], ruler: ['238:1634'],
  },
} as const;

export const related = {
  index: '§ 03',
  title: 'Related Claims',
  nodes: { section: ['238:1976', '238:2192'], chip: ['238:1977', '238:2193'], chipText: ['238:1978', '238:2194'], hubs: ['238:1979'], index: ['238:1986'], list: [undefined, '238:2195'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['238:1980', '238:2196'], text: ['238:1981', '238:2197'] },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['238:1983', '238:2199'], text: ['238:1984', '238:2200'], w: 257 },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['238:2002', '238:2217'], text: ['238:2003', '238:2218'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['238:1987', '238:2202'], text: ['238:1988', '238:2203'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['238:1990', '238:2205'], text: ['238:1991', '238:2206'] },
    { label: 'Roof, hail and tree damage claims', href: ROUTES.windHailTrees, node: ['238:1993', '238:2208'], text: ['238:1994', '238:2209'] },
    { label: 'Contents and valuables claims', href: ROUTES.contentsValuables, node: ['238:1996', '238:2211'], text: ['238:1997', '238:2212'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['238:1999', '238:2214'], text: ['238:2000', '238:2215'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['238:2005', '238:2220'], text: ['238:2006', '238:2221'] },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['238:2008', '238:2223'], heading: [undefined, '238:2224'], title: ['238:2010', '238:2225'], body: ['238:2011', '238:2226'],
    block: ['238:2012'], phone: ['238:2013', '238:2227'], label: ['238:2014', '238:2228'], number: ['238:2015', '238:2229'], rule: ['238:2016', '238:2230'],
    hours: ['238:2017', '238:2231'], hoursText: ['238:2019', '238:2233'], buttons: ['238:2020', '238:2234'],
    cta1: ['238:2021', '238:2235'], cta2: ['238:2022', '238:2236'], wave: ['238:2009', '238:2237'],
  },
} as const;

// New sections from the approved copy (pages/code-upgrades/content.md), rendered with the content kit.
export const coverage = {
  title: 'Ordinance or Law Coverage A, B and C, Explained',
  intro: 'Ordinance or law is three coverages under one name. Each one pays a different cost the code creates.',
  head: ['Part', 'What it pays', 'Example'],
  rows: [
    ['Coverage A: loss to the undamaged portion', "The value of the part of the building that wasn't damaged but has to come down because of the code", 'A fire burns most of a wall. Code requires the whole wall replaced. Coverage A pays for the part that survived.'],
    ['Coverage B: demolition cost', 'Tearing down that undamaged portion and clearing the site', 'The building department requires the rest of the structure taken down after the fire.'],
    ['Coverage C: increased cost of construction', 'The extra cost to rebuild to the code in force now, not the code the building went up under', 'Current code requires fire sprinklers the old building never had.'],
  ],
  after: [
    'Watch the letters. In a homeowners policy, Coverage A is your dwelling. Inside ordinance or law, Coverage A is the undamaged portion. Before you agree to a number, check which Coverage A the carrier means.',
    'Homes and businesses split it differently. Standard homeowners forms pay all three costs from one shared limit, set as a share of the dwelling coverage. The standard commercial endorsement lists A, B and C, with separate limits for demolition and for increased cost of construction.',
  ],
};

export const replacementCost = {
  title: "Why Replacement Cost Doesn't Pay for Code",
  body: [
    'After a fire, most owners want the house they had back. The permit counter often has other plans.',
    "Replacement cost puts back what you had, at like kind and quality. Your dwelling coverage pays for damaged property. It doesn't pay for undamaged walls the code makes you remove, so that money has to come from ordinance or law coverage.",
    "The carrier's first estimate prices the house that stood before the loss. That's what it's built to do. Code work has to be claimed, line by line, with the building department's requirement behind each item. Rewiring to current electrical code, a sprinkler system, an accessible entry and seismic bracing are four separate lines, each priced against the code limit.",
  ],
};

export const california = {
  title: 'Building Code Upgrade Coverage in California',
  cite: 'Cal. Ins. Code 10103 and 2051.5',
  body: ['California law calls it building code upgrade coverage. These are the rules that change the numbers on a claim.'],
  list: [
    "**There's a floor.** A replacement cost home policy must include code upgrade coverage of at least one tenth of the dwelling limit. It's additional coverage. Using it can't reduce your dwelling limit.",
    "**It's flagged on your declarations page.** The policy must say there that it includes the coverage, with any limits or conditions on a separate disclosure form attached. A policy without the coverage must state: \"THIS POLICY DOES NOT INCLUDE BUILDING CODE UPGRADE COVERAGE.\"",
    '**Codes in effect at the time of loss or rebuilding count.** The policy may restrict codes that take effect after the loss but before your permits are issued. Rebuilds take time, and codes change in the meantime.',
    "**You can rebuild somewhere else.** After a total loss, a policy can't deny covered code upgrade cost because you rebuild or buy at a new location. The payment is capped at what rebuilding at the original address would have cost.",
    '**The clock runs from the first payment.** You have at least 12 months from the first actual cash value payment to collect full replacement cost. After a loss tied to a declared state of emergency, at least 36 months.',
  ],
  after: [`Code work after a total loss: [wildfire insurance claims](${ROUTES.wildfire}) and [fire and smoke damage claims](${ROUTES.fireSmoke}).`],
};

export const processSteps = {
  title: 'How We Build an Ordinance or Law Claim',
  list: [
    'Read the declarations page and the code upgrade disclosure form. Note the limit, and whether A, B and C share it.',
    'Meet building officials early, so the scope reflects what the city will actually require.',
    "Separate the damaged part from the undamaged part the code reaches. They're paid from different places.",
    'Price each code item as its own line: electrical, plumbing, sprinklers, accessibility, energy code, seismic bracing.',
    'Note the deadlines in your policy. If it pays full replacement cost only after the rebuild, the clock matters.',
  ],
  after: ['A senior adjuster leads every claim, from the first call to the final settlement. You always have final say on any settlement.'],
};

export const exclusions = {
  title: "What Ordinance or Law Coverage Won't Pay",
  list: [
    "**Upgrades you choose.** A bigger kitchen or a better finish isn't code.",
    "**Code work with no covered loss behind it.** The coverage applies only after a covered loss. A city ordering work torn down because it never met code isn't a covered loss on its own.",
    "**Code problems you already had.** Coverage generally doesn't reach a loss that comes from an earlier failure to follow the code.",
    '**Anything past the limit.** Once the code limit is used up, the rest of the code work is yours.',
    `**Lost business income during the code rebuild, on some forms.** Some commercial policies leave the extra time a code rebuild takes out of the period of restoration. An endorsement can close that gap. [Commercial property claims](${ROUTES.commercial})`,
  ],
};

export const notFor = {
  title: 'When You May Not Need Us',
  body: ["A small loss may not trigger any code work. If the carrier already priced the code items inside your limit, the offer may be fair. We'll tell you so at the free review, before you sign anything."],
};

export const faq = {
  title: 'Questions About Ordinance or Law Coverage',
  items: [
    { q: 'Is ordinance or law coverage automatically included in my policy?', a: "It depends on the policy and the state. In California, a homeowners policy that pays replacement cost must include building code upgrade coverage of at least one tenth of the dwelling limit. A policy without it must say so on the declarations page. Some business policies carry only a small built in amount unless they're endorsed." },
    { q: 'What are Coverage A, B and C in ordinance or law coverage?', a: 'A pays for the value of the undamaged portion the code forces you to remove. Demolishing it and clearing the site falls under B. The third part, C, pays the increased cost of building to current code.' },
    { q: 'Does replacement cost coverage pay for code upgrades?', a: 'Not by itself. Replacement cost puts back what you had, at like kind and quality. The added cost of meeting current code comes from ordinance or law coverage, up to its limit.' },
    { q: 'Does ordinance or law coverage pay for any upgrade?', a: 'No. It pays for work the code requires after a covered loss. Upgrades you choose, and routine repairs, stay with you.' },
    { q: 'How much ordinance or law coverage should I have?', a: "That's a question for your agent, before a loss. Insurers often set the limit as a share of the dwelling coverage, commonly one tenth, one fifth or one quarter. An endorsement can raise it, on standard forms to the full dwelling limit or more. After a loss, the limit on your declarations page is what's there to claim." },
    { q: 'Does the building department have to order the upgrade?', a: 'Many policies tie this coverage to the enforcement of a code. One policyholder law firm reads that to include complying with a code in force, with no order issued. Carriers can read it more narrowly. We meet building officials early, so the requirement is documented before the scope goes in.' },
  ],
};
