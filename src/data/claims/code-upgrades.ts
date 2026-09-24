// Code Upgrades (Figma desktop 238:1616, mobile 238:2024). Copy from design/text/238-1616.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Code Upgrade Claims | Blue Star Adjusters',
  description: 'We identify and quantify code upgrade costs your policy may cover: ordinance or law coverage, demolition and increased cost of construction.',
  header: ['238:1621', '238:2051'] as const,
  footer: ['238:2023', '238:2238'] as const,
  callBar: '238:2239',
};

export const heroLead = 'We identify and quantify code upgrade costs that may be covered under your policy, a significant source of recovery that most homeowners and insurance company adjusters miss entirely.';

export const requires = {
  chip: '§ 01',
  title: 'What the city requires',
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
  inset: { d: '238:1867', m: '238:2114', alt: 'Hand resting on construction plans on a job site table.', label: 'Seismic retrofit ordinance' },
  blocks: [],
  dark: true,
  nodes: {
    section: ['238:1864', '238:2110'], img: ['238:1865', '238:2112'], stack: [undefined, '238:2111'], inset: ['238:1866'],
    insetImg: ['238:1867', '238:2114'], dimension: ['238:1868', '238:2115'], crop: ['238:1869', '238:2113'], details: ['238:1870', '238:2116'],
  },
  line: {
    chip: '§ 02',
    body: "Michael has built to San Francisco's seismic retrofit ordinance. Ordinance of law and code upgrade triggers other adjusters miss are his specialty.",
    nodes: { block: ['238:1871', '238:2117'], chip: ['238:1872', '238:2118'], chipText: ['238:1873', '238:2119'], rule: ['241:1013', '242:976'], body: ['238:1875', '238:2121'], button: ['241:1014', '242:977'] },
  },
} as const;

export const hero = {
  img: { d: '238:1618', m: '238:2026', alt: 'House framing under construction with new fire sprinkler piping and seismic hold-down hardware.' },
  eyebrow: 'Code Upgrades',
  title: "You Can't Rebuild It the Way It Was. The City Won't Let You.",
  titleClass: 'bs-code-h1 lg:t-display-l lg:w-[900px]',
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
  nodes: { section: ['238:1976', '238:2192'], chip: ['238:1977', '238:2193'], chipText: ['238:1978', '238:2194'], hubs: ['238:1979'], index: ['238:1986'], list: [undefined, '238:2195'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['238:1980', '238:2196'], text: ['238:1981', '238:2197'] },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['238:1983', '238:2199'], text: ['238:1984', '238:2200'], w: 257 },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['238:2002', '238:2217'], text: ['238:2003', '238:2218'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['238:1987', '238:2202'], text: ['238:1988', '238:2203'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['238:1990', '238:2205'], text: ['238:1991', '238:2206'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['238:1993', '238:2208'], text: ['238:1994', '238:2209'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['238:1996', '238:2211'], text: ['238:1997', '238:2212'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['238:1999', '238:2214'], text: ['238:2000', '238:2215'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['238:2005', '238:2220'], text: ['238:2006', '238:2221'] },
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
