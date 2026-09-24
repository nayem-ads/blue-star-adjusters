// Fire & Smoke claims page (Figma desktop 217:5733, mobile 217:13377). Copy from design/text/217-5733.json + 217-13377.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Fire & Smoke Damage Claims | Blue Star Adjusters',
  description: "Heat is fire damage. Smoke is chemistry. We document what the first estimate misses, from melted windows and wiring to smoke in porous materials.",
  header: ['217:5738', '217:13382'] as const,
  footer: ['217:9337', '220:967'] as const,
  callBar: '220:1003',
};

export const hero = {
  img: { d: '217:5735', m: '217:13379', alt: 'Corner of a room after a house fire, soot and smoke staining climbing the walls to the ceiling.' },
  eyebrow: 'Fire & Smoke',
  title: 'Heat Is Fire Damage.\nSmoke Is Chemistry.',
  nodes: {
    section: ['217:5734', '217:13378'], img: ['217:5735', '217:13379'], content: ['217:5761', '217:13400'],
    eyebrow: ['217:5762', '217:13401'], title: ['217:5765', '217:13404'], ctas: ['217:5766', '217:13411'],
    cta1: ['217:5767', '217:13412'], cta2: ['217:5771', '217:13416'], trust: ['217:5775', '217:13405'], trustRow: [undefined, '217:13406'],
    trust1: ['217:5776', '217:13407'], trust2: ['217:5778', '217:13410'], trust3: ['217:5780', '217:13409'],
    ruler: ['217:5781'], caption: ['217:5944'], captionText: [undefined, '217:13399'],
  },
} as const;

export const related = {
  index: '§ 06',
  nodes: { section: ['217:9271', '219:984'], chip: ['217:9272', '219:985'], chipText: ['217:9273', '219:986'], hubs: ['217:9274'], index: ['217:9283'], list: [undefined, '219:987'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['217:9275', '219:988'], text: ['217:9276', '219:989'], w: 243 },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['217:9279', '219:992'], text: ['217:9280', '219:993'], w: 257 },
  ],
  links: [
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['217:9284', '219:996'], text: ['217:9285', '219:997'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['217:9288', '219:1000'], text: ['217:9289', '219:1001'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['217:9292', '219:1004'], text: ['217:9293', '219:1005'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['217:9296', '219:1008'], text: ['217:9297', '219:1009'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['217:9300', '219:1012'], text: ['217:9301', '219:1013'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['217:9304', '219:1016'], text: ['217:9305', '219:1017'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['217:9308', '219:1020'], text: ['217:9309', '219:1021'] },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['217:9312', '220:941'], heading: [undefined, '220:942'], title: ['217:9316', '220:943'], body: ['217:9317', '220:944'],
    block: ['217:9318'], phone: ['217:9319', '220:945'], label: ['217:9320', '220:946'], number: ['217:9321', '220:947'], rule: ['217:9322', '220:948'],
    hours: ['217:9323', '220:949'], hoursText: ['217:9327', '220:953'], buttons: ['217:9328', '220:954'],
    cta1: ['217:9329', '220:955'], cta2: ['217:9333', '220:960'], wave: ['217:9313', '220:964'],
  },
} as const;

export const misses = {
  chip: '§ 01',
  title: 'What the first estimate usually misses',
  id: 'misses-title',
  nodes: {
    section: ['217:5947', '217:13420'], rail: ['217:5948', '217:13421'], chip: ['217:5949', '217:13422'], chipText: ['217:5950', '217:13423'],
    title: ['217:5951', '217:13424'], ruler: ['217:5952', '217:13425'], list: ['217:5999', '217:13452'],
  },
  items: [
    { icon: 'home', text: 'Rooms the flames never reached, written up as undamaged.', node: ['217:6000', '217:13453'], iconNode: ['217:6001', '217:13454'], textNode: ['217:6005', '217:13458'] },
    { icon: 'ruler', text: 'Warped vinyl windows, priced as paint.', node: ['217:6006', '217:13459'], iconNode: ['217:6007', '217:13460'], textNode: ['217:6011', '217:13464'] },
    { icon: 'search', text: "Porous materials the carrier wants cleaned, when they can't be.", node: ['217:6012', '217:13465'], iconNode: ['217:6013', '217:13466'], textNode: ['217:6017', '217:13470'] },
  ],
} as const;

export const detail = {
  img: { d: '217:7857', m: '218:2565', alt: 'Industrial hygienist in a white protective suit taking air samples in a smoke-damaged living room.' },
  height: 960,
  top: 120,
  inset: { d: '217:7859', m: '218:2575', alt: 'Macro of heat-damaged electrical cable sheathing inside a charred wall stud bay.', label: 'Well past the burn line' },
  nodes: {
    section: ['217:7856', '218:2563'], img: ['217:7857', '218:2565'], stack: [undefined, '218:2564'], inset: ['217:7858'],
    insetImg: ['217:7859', '218:2575'], dimension: ['217:7860', '218:2576'], crop: ['217:7866', '218:2566'], details: ['217:7875', '218:2582'],
  },
  blocks: [
    {
      chip: '§ 02', title: 'Heat.', id: 'heat-title',
      body: "A fire's heat can do covered fire damage well past the burn line. It melts vinyl windows and breaks down the sheathing on the Romex inside your walls. Once the wiring's compromised, paint won't fix it. The walls come open.",
      nodes: { block: ['217:7876', '218:2583'], chip: ['217:7877', '218:2584'], chipText: ['217:7878', '218:2585'], title: ['217:7879', '218:2586'], body: ['217:7880', '218:2587'] },
    },
    {
      chip: '§ 03', title: 'Smoke.', id: 'smoke-title',
      body: "Modern fires burn plastics, foams and lithium batteries, including those in electric vehicles. Their byproducts are microscopic and travel into attics, wall cavities and appliances. We work with industrial hygienists to test what you can't see. Porous materials that can't be safely cleaned are a total loss, and we document why.",
      nodes: { block: ['217:7881', '218:2588'], chip: ['217:7882', '218:2589'], chipText: ['217:7883', '218:2590'], title: ['217:7884', '218:2591'], body: ['217:7885', '218:2592'] },
    },
  ],
} as const;

export const law = {
  chip: '§ 04',
  title: 'The law moved.',
  cite: 'AB 1795',
  body: [
    "California's Smoke Damage Recovery Act (AB 1795, signed September 15, 2026) creates a rebuttable presumption that smoke, ash or soot in a home inside a wildfire impact zone came from that fire, and ",
    { u: 'requires insurers to pay for necessary testing' },
    '.',
  ],
  // Card contents are rotated 1.5° in Figma, so they stay untagged.
  nodes: {
    section: ['217:7886', '218:2593'], mark: ['217:7887', '218:2594'], rail: ['217:7892'], heading: [undefined, '218:2599'],
    chip: ['217:7893', '218:2600'], chipText: ['217:7894', '218:2601'], title: ['217:7895', '218:2602'], button: ['217:7896', '218:2619'],
    holder: ['217:7900', '218:2603'], crop: ['217:7908', '218:2610'],
  },
};

export const results = {
  nodes: {
    section: ['217:9165', '219:910'], heading: ['217:9233', '219:911'], chip: ['217:9234', '219:912'], chipText: ['217:9235', '219:913'],
    title: ['217:9236', '219:914'], ledger: ['217:9237', '219:915'], disclaimer: ['217:9268', '219:943'], disclaimerText: ['217:9270', '219:945'],
  },
  rows: [
    { loss: 'Palisades fire, full strip out.', offer: '$38,000', figure: '$276,000', node: ['217:9238', '219:916'] },
    { loss: 'Hidden smoke.', offer: '$17,000', prefix: 'about', figure: '$1.1 million', node: ['217:9248', '219:925'] },
    { loss: 'An 800 sq ft apartment fire started by a computer', note: 'Including the tongue and groove ceiling and smoke mitigation for the neighboring unit.', prefix: 'nearly', figure: '$200,000', node: ['217:9653', '219:934'] },
  ],
} as const;
