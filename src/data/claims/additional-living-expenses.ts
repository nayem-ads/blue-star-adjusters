// Additional Living Expenses (Figma desktop 238:698, mobile 238:1106). Copy from pages/additional-living-expenses/content.md (approved).
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Loss of Use Homeowners Insurance: ALE Claims | Blue Star',
  description: "Loss of use pays the extra cost of living elsewhere after a covered loss. We quantify the ALE you're entitled to: a comparable rental, meals, mileage.",
  header: ['238:703', '238:1133'] as const,
  footer: ['238:1105', '238:1320'] as const,
  callBar: '238:1321',
};

// Hero copy. On mobile the lead paragraphs and tagline open the Includes section instead (Figma 240:947).
export const heroLead = [
  "Loss of use homeowners insurance, often listed as Coverage D, pays the extra cost of living somewhere else while a covered loss keeps you out of your home. Most of it is additional living expenses, or ALE. It pays the increase over what you normally spend, up to your policy's time and dollar limits. Your mortgage keeps running.",
  "We quantify the additional living expenses you're entitled to while displaced, so your family can live comfortably in the manner you are accustomed, at no out of pocket cost to you.",
];
export const heroTagline = 'Same Size Home. Same School District.';

export const hero = {
  img: { d: '238:700', m: '238:1108', alt: 'A comfortable home where a displaced family can live while theirs is rebuilt.' },
  eyebrow: 'Additional Living Expenses',
  title: 'Loss of Use Homeowners Insurance and Additional Living Expenses',
  titleClass: 'tm-display lg:t-display-l lg:max-w-[1040px]',
  lead: heroLead,
  tagline: heroTagline,
  caption: false,
  bottom: 80,
  nodes: {
    section: ['238:699', '238:1107'], img: ['238:700', '238:1108'], content: ['238:704', '238:1135'],
    eyebrow: ['238:705', '238:1136'], title: ['238:706', '238:1137'], lead: ['239:992'], ctas: ['238:707', '238:1144'],
    cta1: ['238:708', '238:1145'], cta2: ['238:709', '238:1146'], trust: ['238:710', '238:1138'], trustRow: [undefined, '238:1139'],
    trust1: ['238:711', '238:1140'], trust2: ['238:713', '238:1143'], trust3: ['238:715', '238:1142'], ruler: ['238:716'],
  },
} as const;

export const includes = {
  chip: '§ 01',
  heading: 'What ALE Can Include, Policy Permitting.',
  lead: 'A comparable rental, pet accommodations, extra mileage, meals above your normal budget, storage, utility setup.',
  list: [
    'Rent on a comparable home, or a hotel until one is found',
    'Meals above your normal grocery budget',
    'Extra mileage to work and to school',
    "Pet boarding when the rental won't take animals",
    'Moving and storage',
    'Furniture rental',
    'Utility and phone setup at the temporary home',
  ],
  after: [
    'The California Department of Insurance lists the same kinds of costs, furniture rental and storage included.',
    'Comparable means the home you had. Same number of bedrooms. Same school district. A commute that still works.',
    'Every line is measured against your baseline, what you spent before the loss. The claim is the difference.',
  ],
};

export const notCovered = {
  chip: '§ 02',
  id: 'not-covered-title',
  title: 'What Loss of Use Homeowners Insurance Does Not Pay',
  list: [
    "Your mortgage and normal bills. They continue while you're out.",
    'Groceries you would have bought anyway.',
    'A move out of a home that is still livable.',
    'A loss your policy excludes. Most homeowners policies exclude flood, so there is no ALE for it either.',
    "A utility's public safety power shutoff. California's rule for unlivable homes does not reach it.",
    'Costs past your ALE limit. Those fall to you.',
  ],
  after: [
    "Damage isn't always the trigger. In California, after a declared state of emergency, a home can be unlivable without a mark on it. If a covered peril cuts off water, sewer or power, ALE can apply. Your insurer may fix the condition instead, with a generator, for example.",
  ],
};

export const law = {
  chip: '§ 03',
  title: 'How Long.',
  cite: 'Cal. Ins. Code §2060',
  body: ["In California, after a declared state of emergency, at least 24 months, with up to 12 more for delays beyond your control. Under AB 1795, once in effect, ALE on a covered wildfire smoke claim in the fire's impact zone can't end until the home is restored and cleared for occupancy, subject to your policy limit."],
  id: 'law-title',
  nodes: {
    section: ['238:963', '238:1209'], mark: ['238:964', '238:1210'], rail: ['238:965'], heading: [undefined, '238:1211'],
    chip: ['238:966', '238:1212'], chipText: ['238:967', '238:1213'], title: ['238:968', '238:1214'], button: ['238:969', '238:1223'],
    holder: ['238:970', '238:1215'], crop: ['238:978', '238:1216'],
  },
} as const;

export const rules = {
  chip: '§ 04',
  id: 'ca-rules-title',
  title: 'Additional Living Expenses in California: The Rules',
  head: ['Rule', 'What it means for you', 'Source'],
  rows: [
    ['Time', 'At least 24 months from the loss after a declared state of emergency. Up to 12 more months for delays beyond your control, such as permits, materials or contractors, while you act in good faith and with reasonable diligence. Further six month extensions for good cause. Your other policy terms, such as the dollar limit, still apply.', 'Cal. Ins. Code §2060(b)(1)'],
    ['Civil authority order', 'If a civil authority order blocks access to your home because of a covered peril during a state of emergency, at least two weeks, with two week extensions for good cause.', 'Cal. Ins. Code §2060(c)'],
    ['Advance', 'After a total loss in a state of emergency, at least four months of living expenses paid up front, if you ask.', 'Cal. Ins. Code §2061(a)(1)'],
    ['The list', 'When you claim ALE, your insurer must give you a list of items it believes may be covered.', 'Cal. Ins. Code §2060(a)'],
    ['Smoke', 'Once in effect, ALE on a covered wildfire smoke claim inside the impact zone continues until the home is restored and cleared for occupancy, up to the policy limit.', 'AB 1795, Cal. Ins. Code §2060.1'],
  ],
  after: [
    'Outside a declared emergency, the time limit comes from your policy, often 12 months. A dollar limit runs alongside it, and it can run out first.',
    'Smoke claims after a wildfire have their own page. [Wildfire insurance claims](/claims/wildfire/)',
  ],
};

export const rebuildGap = {
  chip: '§ 05',
  id: 'rebuild-gap-title',
  title: 'The Rental Ends Before the Rebuild Does.',
  body: [
    'ALE stops when a time limit or a dollar limit runs out. A repair estimate that is too short makes the stay look shorter than it is. We measure the loss before the first estimate is final.',
    'Here is how the claim gets built. We read the whole policy first, endorsements included, and find the Coverage D dollar and time limits. Then we set your baseline: housing cost, groceries and commute before the loss. A comparable rental gets priced against the home you had, room for room.',
    'Being out of your home is hard on a family. Keeping the receipts is your job. Claiming them is ours.',
  ],
};

export const notFor = {
  chip: '§ 06',
  id: 'not-for-title',
  title: 'When You May Not Need Us for ALE',
  body: [
    "If you're home again in a few weeks and the insurer is already paying the hotel, you may not need a public adjuster. If we can't add value, we'll say so at the free review, before you sign anything.",
    "No upfront cost. We're paid a percentage of what we recover.",
    'ALE is rarely the whole claim. We measure it alongside the dwelling, other structures and contents. [Residential claims](/claims/residential/)',
  ],
};

export const detail = {
  img: { d: '238:947', m: '238:1194', alt: 'A comparable rental home, furnished and ready for a displaced family.' },
  height: 640,
  top: 136,
  blocks: [{
    chip: '§ 07', title: 'Business Owners.', body: 'Your version is loss of income and extra expense.', id: 'detail-title',
    nodes: { block: ['238:953', '238:1199'], chip: ['238:954', '238:1200'], chipText: ['238:955', '238:1201'], title: ['238:956', '238:1202'], body: ['238:957', '238:1203'] },
  }],
  nodes: { section: ['238:946', '238:1192'], img: ['238:947', '238:1194'], stack: [undefined, '238:1193'], details: ['238:952', '238:1198'] },
} as const;

export const detailMore = 'If you rent out part of your home, fair rental value may cover the rent you lose while that space can\'t be lived in.';
export const detailLink = { label: 'Commercial claims', href: ROUTES.commercial, node: ['239:995', '240:950'], text: ['239:996', '240:951'] } as const;

export const faq = {
  chip: '§ 08',
  id: 'faq-title',
  title: 'Loss of Use Questions',
  items: [
    { q: 'Is loss of use the same as additional living expenses?', a: 'Mostly. Additional living expenses are the main part of loss of use coverage. Some policies also include fair rental value, which pays the rent you lose on a part of your home you rent out.' },
    { q: 'Does loss of use have a deductible?', a: 'It depends on the policy form. Your declarations page shows the deductible, and the policy wording says which coverages it applies to.' },
    { q: 'Does loss of use cover my mortgage?', a: "No. Your mortgage continues while you're displaced, and loss of use pays only costs above your normal spending. The rent on a temporary home, on top of that mortgage, is the kind of increase it does pay." },
    { q: 'How long does loss of use last?', a: "Until your policy's time limit or dollar limit runs out. Policies set one or both. In California, after a declared state of emergency, the minimum is 24 months, with up to 12 more for delays beyond your control. The dollar limit still applies." },
    { q: 'Can I get additional living expenses paid in advance?', a: 'In California, after a total loss in a declared state of emergency, yes. Your insurer must advance at least four months of living expenses if you ask. After that, payments follow proof of your costs.' },
  ],
};

export const related = {
  heading: 'Related Claims',
  nodes: { section: ['238:1058', '238:1274'], chip: ['238:1059', '238:1275'], chipText: ['238:1060', '238:1276'], hubs: ['238:1061'], index: ['238:1068'], list: [undefined, '238:1277'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['238:1062', '238:1278'], text: ['238:1063', '238:1279'] },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['238:1065', '238:1281'], text: ['238:1066', '238:1282'], w: 257 },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['238:1081', '238:1296'], text: ['238:1082', '238:1297'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['238:1069', '238:1284'], text: ['238:1070', '238:1285'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['238:1072', '238:1287'], text: ['238:1073', '238:1288'] },
    { label: 'Wind, hail and falling tree claims', href: ROUTES.windHailTrees, node: ['238:1075', '238:1290'], text: ['238:1076', '238:1291'] },
    { label: 'Contents and valuables claims', href: ROUTES.contentsValuables, node: ['238:1078', '238:1293'], text: ['238:1079', '238:1294'] },
    { label: 'Code upgrade claims', href: ROUTES.codeUpgrades, node: ['238:1084', '238:1299'], text: ['238:1085', '238:1300'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['238:1087', '238:1302'], text: ['238:1088', '238:1303'] },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['238:1090', '238:1305'], heading: [undefined, '238:1306'], title: ['238:1092', '238:1307'], body: ['238:1093', '238:1308'],
    block: ['238:1094'], phone: ['238:1095', '238:1309'], label: ['238:1096', '238:1310'], number: ['238:1097', '238:1311'], rule: ['238:1098', '238:1312'],
    hours: ['238:1099', '238:1313'], hoursText: ['238:1101', '238:1315'], buttons: ['238:1102', '238:1316'],
    cta1: ['238:1103', '238:1317'], cta2: ['238:1104', '238:1318'], wave: ['238:1091', '238:1319'],
  },
} as const;
