// Fire & Smoke claims page (Figma desktop 217:5733, mobile 217:13377). Copy from design/text/217-5733.json + 217-13377.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Fire Insurance Claims and Smoke Damage | Blue Star Adjusters',
  description: 'A fire insurance claim should pay for heat and smoke damage past the burn line. We measure and document the full loss. No upfront cost. CA DOI 6015234.',
  header: ['217:5738', '217:13382'] as const,
  footer: ['217:9337', '220:967'] as const,
  callBar: '220:1003',
};

export const hero = {
  img: { d: '217:5735', m: '217:13379', alt: 'Corner of a room after a house fire, soot and smoke staining climbing the walls to the ceiling.' },
  eyebrow: 'Fire & Smoke',
  title: 'Your Fire Insurance Claim Covers More Than What Burned.',
  titleClass: 'bs-fs-h1 lg:t-display-l lg:max-w-[1040px]',
  lead: "A fire insurance claim pays to repair or rebuild your property, replace what was inside, and cover your living costs while you're out of your home, up to your policy limits. The first estimate often stops at the burn line. Heat and smoke travel much farther, into wiring, windows, walls and attics, and that damage belongs in the claim too.",
  nodes: {
    section: ['217:5734', '217:13378'], img: ['217:5735', '217:13379'], content: ['217:5761', '217:13400'],
    eyebrow: ['217:5762', '217:13401'], title: ['217:5765', '217:13404'], ctas: ['217:5766', '217:13411'],
    cta1: ['217:5767', '217:13412'], cta2: ['217:5771', '217:13416'], trust: ['217:5775', '217:13405'], trustRow: [undefined, '217:13406'],
    trust1: ['217:5776', '217:13407'], trust2: ['217:5778', '217:13410'], trust3: ['217:5780', '217:13409'],
    ruler: ['217:5781'], caption: ['217:5944'], captionText: [undefined, '217:13399'],
  },
} as const;

export const related = {
  index: '§ 16',
  title: 'Related Claims',
  nodes: { section: ['217:9271', '219:984'], chip: ['217:9272', '219:985'], chipText: ['217:9273', '219:986'], hubs: ['217:9274'], index: ['217:9283'], list: [undefined, '219:987'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['217:9275', '219:988'], text: ['217:9276', '219:989'], w: 243 },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['217:9279', '219:992'], text: ['217:9280', '219:993'], w: 257 },
  ],
  links: [
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['217:9284', '219:996'], text: ['217:9285', '219:997'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['217:9288', '219:1000'], text: ['217:9289', '219:1001'] },
    { label: 'Roof, hail and tree damage claims', href: ROUTES.windHailTrees, node: ['217:9292', '219:1004'], text: ['217:9293', '219:1005'] },
    { label: 'Contents and valuables', href: ROUTES.contentsValuables, node: ['217:9296', '219:1008'], text: ['217:9297', '219:1009'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['217:9300', '219:1012'], text: ['217:9301', '219:1013'] },
    { label: 'Ordinance or law coverage', href: ROUTES.codeUpgrades, node: ['217:9304', '219:1016'], text: ['217:9305', '219:1017'] },
    { label: 'Home insurance claim denied', href: ROUTES.deniedOrUnderpaid, node: ['217:9308', '219:1020'], text: ['217:9309', '219:1021'] },
    { label: 'Public adjuster in San Francisco', href: ROUTES.sanFrancisco },
    { label: 'Public adjuster in Los Angeles', href: ROUTES.santaMonica },
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
  title: 'What the First Estimate Usually Misses',
  intro: "Your insurer's adjuster already came out? Good. We start from their estimate and measure what it left out.",
  links: '[Contents inventory](/claims/contents-valuables/) · [Loss of use coverage](/claims/additional-living-expenses/)',
  id: 'misses-title',
  nodes: {
    section: ['217:5947', '217:13420'], rail: ['217:5948', '217:13421'], chip: ['217:5949', '217:13422'], chipText: ['217:5950', '217:13423'],
    title: ['217:5951', '217:13424'], ruler: ['217:5952', '217:13425'], list: ['217:5999', '217:13452'],
  },
  items: [
    { icon: 'home', text: 'Rooms the flames never reached, written up as undamaged.', node: ['217:6000', '217:13453'], iconNode: ['217:6001', '217:13454'], textNode: ['217:6005', '217:13458'] },
    { icon: 'ruler', text: 'Warped vinyl windows, priced as paint.', node: ['217:6006', '217:13459'], iconNode: ['217:6007', '217:13460'], textNode: ['217:6011', '217:13464'] },
    { icon: 'search', text: "Porous materials the carrier wants cleaned, when they can't be.", node: ['217:6012', '217:13465'], iconNode: ['217:6013', '217:13466'], textNode: ['217:6017', '217:13470'] },
    { icon: 'droplet', text: 'Water from the firefighting, which is its own line on the claim.' },
    { icon: 'document', text: "Everything inside, room by room. Most people can't list one room from memory, and what isn't listed isn't paid." },
    { icon: 'building', text: "Living costs while you're displaced, from the hotel to the extra mileage." },
  ],
} as const;

export const detail = {
  img: { d: '217:7857', m: '218:2565', alt: 'Industrial hygienist in a white protective suit taking air samples in a smoke-damaged living room.' },
  height: 1080,
  top: 120,
  inset: { d: '217:7859', m: '218:2575', alt: 'Macro of heat-damaged electrical cable sheathing inside a charred wall stud bay.', label: 'Well past the burn line' },
  nodes: {
    section: ['217:7856', '218:2563'], img: ['217:7857', '218:2565'], stack: [undefined, '218:2564'], inset: ['217:7858'],
    insetImg: ['217:7859', '218:2575'], dimension: ['217:7860', '218:2576'], crop: ['217:7866', '218:2566'], details: ['217:7875', '218:2582'],
  },
  blocks: [
    {
      chip: '§ 02', title: 'Heat Is Fire Damage.', id: 'heat-title',
      body: "A fire's heat can do covered fire damage well past the burn line. It melts vinyl windows and breaks down the sheathing on the Romex inside your walls. Once the wiring's compromised, paint won't fix it. The walls come open.",
      nodes: { block: ['217:7876', '218:2583'], chip: ['217:7877', '218:2584'], chipText: ['217:7878', '218:2585'], title: ['217:7879', '218:2586'], body: ['217:7880', '218:2587'] },
    },
    {
      chip: '§ 03', title: 'Smoke Is Chemistry.', id: 'smoke-title',
      body: "Modern fires burn plastics, foams and lithium batteries, including those in electric vehicles. Their byproducts are microscopic and travel into attics, wall cavities and appliances. We work with industrial hygienists to test what you can't see. Porous materials that can't be safely cleaned are a total loss, and we document why.",
      nodes: { block: ['217:7881', '218:2588'], chip: ['217:7882', '218:2589'], chipText: ['217:7883', '218:2590'], title: ['217:7884', '218:2591'], body: ['217:7885', '218:2592'] },
    },
  ],
} as const;

export const law = {
  chip: '§ 06',
  title: 'The Law Moved.',
  cite: 'AB 1795',
  body: [
    [
      "California's Smoke Damage Recovery Act (AB 1795, signed September 15, 2026) creates a rebuttable presumption that smoke, ash or soot in a home inside a wildfire impact zone came from that fire, and ",
      { u: 'requires insurers to pay for necessary testing' },
      '.',
    ],
    ['It also stops insurers from ending additional living expense benefits until a qualifying home is restored and safe to live in.'],
    ['The law is written for wildfire smoke in homes that survived. Whether it reaches your claim, and from what date, is something we check at the free review.'],
  ],
  button: { label: 'Wildfire insurance claims', href: ROUTES.wildfire },
  // Card contents are rotated 1.5° in Figma, so they stay untagged.
  nodes: {
    section: ['217:7886', '218:2593'], mark: ['217:7887', '218:2594'], rail: ['217:7892'], heading: [undefined, '218:2599'],
    chip: ['217:7893', '218:2600'], chipText: ['217:7894', '218:2601'], title: ['217:7895', '218:2602'], button: ['217:7896', '218:2619'],
    holder: ['217:7900', '218:2603'], crop: ['217:7908', '218:2610'],
  },
};

export const results = {
  chip: '§ 10',
  title: "Fire Damage Claims We've Settled.",
  nodes: {
    section: ['217:9165', '219:910'], heading: ['217:9233', '219:911'], chip: ['217:9234', '219:912'], chipText: ['217:9235', '219:913'],
    title: ['217:9236', '219:914'], ledger: ['217:9237', '219:915'], disclaimer: ['217:9268', '219:943'], disclaimerText: ['217:9270', '219:945'],
  },
  rows: [
    { loss: 'Los Angeles house fire, full strip out.', offer: '$38,000', settled: 'Settled at', figure: '$276,000', node: ['217:9238', '219:916'] },
    { loss: 'Smoke damage.', offer: '$17,000', settled: 'Settled for', prefix: 'about', figure: '$1.1 million', note: 'An industrial hygienist proved combustion byproducts in porous materials and doors.', node: ['217:9248', '219:925'] },
    { loss: 'An 800 sq ft apartment fire started by a computer.', settled: 'Settled for', prefix: 'nearly', figure: '$200,000', note: 'including the tongue and groove ceiling and smoke mitigation for the neighboring unit.', node: ['217:9653', '219:934'] },
  ],
  more: '[More claim results](/results/)',
  callFirst: 'Call us first, and we can look at your claim the same business day.',
} as const;

// Approved copy sections added in the 2026-10 rewrite (content kit: KitProse / KitFaq).
export const smokeCoverage = {
  chip: '§ 04', id: 'smoke-coverage-title', title: 'Will Insurance Pay for Smoke Damage?',
  body: [
    'Yes. Smoke damage from a covered fire is covered fire damage, even in rooms the flames never reached. You still have to prove it, and that usually means testing. A smoke damage claim is strongest when the testing happens before cleanup starts.',
    'A standard policy also covers the damage firefighters cause putting the fire out. Once coverage is settled, the argument on a smoke damage insurance claim is scope.',
    'After a fire, the first question is usually whether your home is safe to live in. Walls that look clean can still hold smoke residue, so the real answer comes from testing.',
  ],
};

export const smokeQualifies = {
  chip: '§ 05', id: 'smoke-qualifies-title', title: 'What Qualifies as Smoke Damage?',
  body: [
    "Smoke damage is any harm caused by smoke, soot or the chemical residue a fire leaves behind. That means stains and odor, but also residue inside walls, attics, ductwork and appliances. Carpet, drywall and upholstery can hold residue that cleaning won't remove. All of it belongs in a smoke damage insurance claim, documented room by room.",
    "Can a sofa, a mattress or a hollow core door be cleaned, or does it have to be replaced? The carrier's estimate answers with a cleaning line. Lab results answer with evidence.",
  ],
};

export const coverage = {
  chip: '§ 07', id: 'coverage-title', title: 'What a Fire Insurance Claim Can Pay For',
  body: ['A homeowners policy splits a fire claim into four buckets. We measure each one on its own.'],
  list: [
    '**Dwelling.** The structure, returned to its condition before the loss.',
    '**Other structures.** Fences, decks, detached garages, guest houses.',
    '**Contents.** Everything inside, built into a room by room inventory from your photos and purchase records.',
    "**Loss of use.** Comparable housing while you're displaced, plus meals above your normal budget, extra mileage and storage.",
  ],
  after: [
    'Two more lines to check against the estimate. Code upgrades the city will require, paid from ordinance or law coverage, which is often an endorsement with its own limit. And debris removal.',
    'How the money is paid depends on the policy. Replacement cost pays to repair or replace. Actual cash value pays that figure minus depreciation. If your policy pays replacement cost, the depreciation the carrier held back at first can come back to you. California gives you at least 12 months from the first actual cash value payment to collect it, or 36 months when the loss is tied to a declared state of emergency.',
    'A business fire adds loss of income and extra expense, built from your books by a forensic accountant.',
    '[Ordinance or law coverage](/claims/code-upgrades/) · [Contents and valuables claims](/claims/contents-valuables/) · [Commercial fire claims](/claims/commercial/)',
  ],
};

export const notCovered = {
  chip: '§ 08', id: 'not-covered-title', title: 'What Is Not Covered Under Fire Insurance?',
  body: ['It depends on your policy, so the first step is reading all of it, including the endorsements. Common gaps are damage that was there before the fire, and the cost of rebuilding to current code unless you have ordinance or law coverage.'],
};

export const denied = {
  chip: '§ 09', id: 'denied-title', title: 'Why Would Insurance Deny a Fire Claim?',
  body: [
    "Common reasons are a lapsed policy, a cause the policy excludes, a fire the owner set on purpose, or missing documentation. Vacancy is another. California's standard fire policy doesn't cover a loss while the building has been vacant or unoccupied for more than 60 consecutive days, unless the policy says otherwise in writing.",
    'A denial has to come in writing and cite the policy language behind it, and that language is worth a second read.',
    '[Home insurance claim denied?](/claims/denied-or-underpaid/)',
  ],
};

export const timeline = {
  chip: '§ 11', id: 'timeline-title', title: 'How Long Does Insurance Take to Pay Out After a Fire?',
  body: [
    "California regulation sets the insurer's clock. Once the carrier receives your proof of claim, it has 40 calendar days to accept or deny it, in whole or in part. A denial has to be in writing, with the reasons.",
    'Need more time? The insurer must say so in writing, explain what it is waiting for, and update you every 30 days until it decides. Once it accepts, it has 30 calendar days to pay.',
    'If one of those dates passes without a letter, ask why in writing. The California Department of Insurance takes complaints from policyholders.',
    "A public adjuster doesn't make the claim faster. A 2010 Florida state study of Citizens Property Insurance claims (OPPAGA Report 10-06) found claims with a public adjuster took longer to settle, and paid more before fees. More of the loss gets measured and argued, and that takes time.",
  ],
};

export const beforeAccept = {
  chip: '§ 12', id: 'before-accept-title', title: 'Before You Accept the First Offer',
  body: ["The first offer often arrives while you're still finding a place to sleep. You don't have to decide on the spot."],
  list: [
    'Ask the carrier to explain the estimate in writing, line by line.',
    "Get your own contractor's bid on the same scope of loss.",
    "Don't sign a release until you know exactly what it closes.",
    "Don't throw anything away until it's documented, even if it's ruined.",
    'Photograph and video every room before anything is moved or cleaned.',
  ],
  after: ['[What to do after a house fire](/first-48-hours/)'],
};

export const whoHelps = {
  chip: '§ 13', id: 'who-helps-title', title: 'Who Can Help With a Fire Insurance Claim?',
  body: ['A licensed public adjuster, sometimes called a fire public adjuster or fire damage adjuster, measures the loss, builds the claim and negotiates with your insurer for you. On a fire damage insurance claim, that starts with every room, including the ones that never burned. When a claim needs legal action, an attorney is the right call, and we work alongside counsel when it does.'],
};

export const notFor = {
  chip: '§ 14', id: 'not-for-title', title: 'When You May Not Need Us',
  body: ["On a small loss, or when the carrier's offer is already fair, our fee may outweigh what we add. We'll tell you so at the free review, before you sign anything."],
};

export const faq = {
  chip: '§ 15', id: 'faq-title', title: 'Questions About Fire Insurance Claims',
  items: [
    { q: "Can a public adjuster step in after I've already filed a fire claim?", a: "Yes. We start from the insurer's estimate and measure what it left out. If you already have an offer, it's usually not too late, and we can reopen scope before you accept." },
    { q: 'When should I call a public adjuster after a house fire?', a: 'As early as you can. Bringing us in before the first estimate is final, and before anything is thrown away, gives us the most room to work.' },
    { q: "Does a fire claim pay for a rental while I'm out of the house?", a: ["Usually, under loss of use, up to your policy's limit. That covers the extra cost of living elsewhere while the home can't be lived in. Keep every receipt. We claim them.", '[Additional living expenses](/claims/additional-living-expenses/)'] },
    { q: 'Will my insurance company work with a public adjuster?', a: 'Carriers work with public adjusters every day. The difference is what gets measured.' },
    { q: 'How much does a public adjuster cost on a fire claim?', a: ["No upfront cost. We're paid a percentage of what we recover. In California, our fee can never leave you with less than your insurer had already paid before you hired us.", '[Public adjuster fees, explained](/fees/)'] },
  ],
};
