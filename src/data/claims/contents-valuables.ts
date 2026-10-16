// Contents & Valuables (Figma desktop 230:698, mobile 230:1106). Copy from design/text/230-698.json + 230-1106.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Personal Property Insurance Claims | Blue Star Adjusters',
  description: 'Contents claim after a fire or total loss? We build the inventory room by room, value art and wine properly, and go after the depreciation held back.',
  header: ['230:703', '230:1133'] as const,
  footer: ['230:1105', '230:1320'] as const,
  callBar: '230:1321',
};

export const hero = {
  img: { d: '230:700', m: '230:1108', alt: 'Private library with shelves of books and a wine collection.' },
  eyebrow: 'Everything You Owned. Accounted For.',
  title: 'Personal Property Insurance Claims for Contents and Valuables',
  titleClass: 'bs-cv-h1 lg:t-display-l lg:w-[960px]',
  lead: 'A personal property insurance claim pays for what was inside the house: furniture, clothing, books, art, wine. The carrier pays against a list. We build the inventory room by room, give art, wine and antiques specialized valuation, and go after the depreciation held back on a replacement cost policy.',
  caption: false,
  nodes: {
    section: ['230:699', '230:1107'], img: ['230:700', '230:1108'], content: ['230:704', '230:1135'],
    eyebrow: ['230:705', '230:1136'], title: ['230:706', '230:1137'], ctas: ['230:707', '230:1144'],
    cta1: ['230:708', '230:1145'], cta2: ['230:709', '230:1146'], trust: ['230:710', '230:1138'], trustRow: [undefined, '230:1139'],
    trust1: ['230:711', '230:1140'], trust2: ['230:713', '230:1143'], trust3: ['230:715', '230:1142'], ruler: ['230:716'],
  },
} as const;

export const inventory = {
  chip: '§ 01',
  title: "What Isn't Listed Isn't Paid.",
  heading: "Emotional ties to personal property make thorough documentation difficult. Most people can't list one room from memory, and what isn't listed isn't paid.",
  imageAlt: 'Gloved hands photographing a sooty vase beside numbered inventory tags',
  items: [
    { icon: 'home', text: 'Room by room inventory built from our databases, your photos and purchase records.' },
    { icon: 'search', text: 'Our inventory specialists document all household belongings with special attention to antiques, fine arts, collectibles, and other items requiring specialized valuation expertise.' },
    { icon: 'document', text: 'If your policy pays replacement cost, we go after the depreciation the carrier held back.' },
  ],
  after: [
    'Room by room means every drawer, closet and shelf. Each line needs what the carrier uses to price it: brand, model, age, condition and quantity.',
    'No records? Most families have more than they think. Photos on your phone. Photos friends and family took in your home. Social media posts. Online order history and emailed receipts. Work through all of it, and list only what you owned.',
  ],
};

export const depreciation = {
  chip: '§ 02',
  id: 'depreciation-title',
  title: 'Recoverable Depreciation. The Second Check.',
  body: [
    'On a replacement cost policy, a contents claim is usually paid in two parts. First comes actual cash value: the price to replace an item, minus depreciation for age and wear. The depreciation held back is paid once you replace the item and show what you spent.',
    'On an actual cash value policy, there is no second check. That makes depreciation the line worth arguing.',
    'Depreciation is negotiable. There is no official schedule. A sofa used daily for ten years and a dining set brought out twice a year are not the same age in any way that matters. Condition counts. A well kept antique is not worn out because it is old.',
    "California sets a floor on the time you get to replace. Your insurer can't give you less than 12 months from the first actual cash value payment to collect full replacement cost. After a loss related to a declared state of emergency, the floor is 36 months.",
  ],
};

export const valuables = {
  chip: '§ 03',
  id: 'valuables-title',
  title: 'The Fine Art Was Priced Like Furniture.',
  body: ['Many homeowners policies cap what they pay for jewelry, collectibles and other high value items unless those items are scheduled on an endorsement. We read those limits before a single piece is priced.'],
  list: [
    '**Like kind and quality.** Replacement cost means an item of the same kind and quality. A hand knotted rug is priced as a hand knotted rug, not as the cheapest rug of the same size.',
    '**Specialist valuation.** Antiques, fine art, wine and collectibles need specialized valuation. Our inventory specialists give them special attention.',
    '**Which bucket pays.** Built in appliances and wall to wall carpet can fall under dwelling or contents, depending on the policy wording. We check which one applies and where the limit has room.',
  ],
};

export const law = {
  chip: '§ 04',
  heading: 'California Total Losses.',
  citation: 'SB 495 · Cal. Ins. Code 10103.7',
  // Body split around the underlined, semibold phrase.
  body: ['On a total loss of a furnished primary residence caused by a declared state of emergency, the insurer ', 'must offer at least 60% of the contents limit, up to $350,000', ', without an itemized inventory (policies issued or renewed from July 1, 2026).'] as const,
  after: [
    'Say your contents limit is $400,000. That is $240,000 before a single item is listed. With a $1 million contents limit, the advance stops at $350,000. Recovering more takes a full itemized claim.',
    'That advance is not the cap. California law lets you claim more, up to your contents limit, under the terms of your policy. To release the advance, your insurer may ask you to sign an attestation form, for example that the home was furnished.',
    "Two more California rules apply after a total loss of a primary residence in a state of emergency. The insurer can't insist on its own inventory form if yours has substantially the same information. It must also accept groupings for clothing, shoes, books and other categories where listing every item would be impractical.",
  ],
};

export const result = {
  chip: '§ 05',
  heading: 'Result.',
  caseText: 'An estate owner had recovered $6 million on his own and stalled on fine wine and art. The structure settled at $11 million, with $5.2 million more for contents.',
  figure: '$5.2 million',
  figureLabel: 'more for contents',
  disclaimer: "Results reflect specific losses and policies. Past results don't guarantee a similar outcome.",
  imageAlt: 'Household contents being documented for a claim',
};

export const firstSteps = {
  chip: '§ 06',
  id: 'first-steps-title',
  title: 'Before You Start the List.',
  list: [
    "Don't throw anything away until it is documented, even if it is ruined.",
    'Photograph and video every room before anything is moved or cleaned.',
    'Keep a claim diary: every call, every name, every date.',
    'Put requests to your insurer in writing, including requests for more time.',
    "Don't rush into a quick contents settlement. Read any check marked full or final before you cash it.",
  ],
};

export const fit = {
  chip: '§ 07',
  id: 'fit-title',
  title: 'When You May Not Need Us.',
  body: [
    "On a small contents loss, or when the carrier's offer is already fair, our fee may outweigh what we add. We'll tell you so at the free review, before you sign anything.",
    "No upfront cost. We're paid a percentage of what we recover.",
  ],
  after: ['[Public adjuster fees, explained](/fees/)'],
};

export const faq = {
  chip: '§ 08',
  id: 'faq-title',
  title: 'Questions About a Personal Property Insurance Claim',
  items: [
    { q: 'Do I need a home inventory to file a personal property claim?', a: 'You can file without one, but the carrier pays contents against a list. In California, after a total loss of a furnished primary residence in a declared state of emergency, the insurer must offer a contents payment without an itemized inventory. To recover beyond that payment, you still need the list.' },
    { q: 'How is a contents insurance claim paid?', a: 'Usually in two parts on a replacement cost policy. The first check is actual cash value, which is the replacement price minus depreciation. The second is the depreciation held back, paid once you replace the item and send proof of what you spent.' },
    { q: 'What is recoverable depreciation?', a: "It is the part of a replacement cost payment the carrier holds back until you replace the item. Once you replace it within the time your policy and state law allow, you claim it. In California, that window can't be shorter than 12 months from the first actual cash value payment." },
    { q: 'Are appliances personal property or dwelling?', a: 'It depends on the policy. Built in appliances and wall to wall carpet can fall under either, so we read the policy wording before the claim is built.' },
    { q: 'What if I can\'t remember everything I owned?', a: 'Most people can\'t. Start with phone photos, pictures friends and family took in your home, social media, and online order history. Items come back to people for months after a loss, so the list should stay open while the claim does.' },
    { q: 'Can a public adjuster handle the contents part of my claim?', a: 'Yes. The carrier expects you to prove contents line by line, often while you are still displaced. We build the inventory, price it, and negotiate it alongside the structure claim.' },
  ],
};

export const related = {
  heading: 'Related Claims',
  nodes: { section: ['230:1058', '230:1274'], chip: ['230:1059', '230:1275'], chipText: ['230:1060', '230:1276'], hubs: ['230:1061'], index: ['230:1068'], list: [undefined, '230:1277'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['230:1062', '230:1278'], text: ['230:1063', '230:1279'] },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['230:1065', '230:1281'], text: ['230:1066', '230:1282'], w: 257 },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['230:1078', '230:1293'], text: ['230:1079', '230:1294'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['230:1069', '230:1284'], text: ['230:1070', '230:1285'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['230:1072', '230:1287'], text: ['230:1073', '230:1288'] },
    { label: 'Roof, hail and tree damage claims', href: ROUTES.windHailTrees, node: ['230:1075', '230:1290'], text: ['230:1076', '230:1291'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['230:1081', '230:1296'], text: ['230:1082', '230:1297'] },
    { label: 'Code upgrades', href: ROUTES.codeUpgrades, node: ['230:1084', '230:1299'], text: ['230:1085', '230:1300'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['230:1087', '230:1302'], text: ['230:1088', '230:1303'] },
    { label: 'Claim results', href: ROUTES.results },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['230:1090', '230:1305'], heading: [undefined, '230:1306'], title: ['230:1092', '230:1307'], body: ['230:1093', '230:1308'],
    block: ['230:1094'], phone: ['230:1095', '230:1309'], label: ['230:1096', '230:1310'], number: ['230:1097', '230:1311'], rule: ['230:1098', '230:1312'],
    hours: ['230:1099', '230:1313'], hoursText: ['230:1101', '230:1315'], buttons: ['230:1102', '230:1316'],
    cta1: ['230:1103', '230:1317'], cta2: ['230:1104', '230:1318'], wave: ['230:1091', '230:1319'],
  },
} as const;
