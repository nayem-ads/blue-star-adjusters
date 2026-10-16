// Wildfire (Figma desktop 234:917, mobile 234:1325). Copy from bluestar-work/pages/wildfire/content.md (approved 2026-10-16).
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
import { ctaNodes } from './commercial';

export const page = {
  title: 'Wildfire Insurance Claims in California | Blue Star',
  description: "Total loss or standing home, a wildfire insurance claim in California has its own deadlines. See what you're owed and when to call a public adjuster.",
  header: ['234:922', '234:1352'] as const,
  footer: ['234:1324', '234:1539'] as const,
  callBar: '234:1540',
};

export const hero = {
  img: { d: '234:919', m: '234:1327', alt: 'Burned-out home after a wildfire, only the chimney left standing.' },
  eyebrow: 'Wildfire',
  titleClass: 'tm-display lg:t-display-l',
  title: 'Wildfire Insurance Claims\nin California.',
  titleM: 'Wildfire Insurance Claims in California.',
  lead: "A wildfire insurance claim pays to rebuild or repair your home, replace what you owned and cover the cost of living elsewhere. In California, a declared state of emergency extends your deadlines: at least 24 months of living expense coverage and at least 36 months to collect replacement cost. We measure the loss, build the claim and negotiate it with your insurer. You decide on every offer.",
  caption: false,
  nodes: {
    section: ['234:918', '234:1326'], img: ['234:919', '234:1327'], content: ['234:923', '234:1354'],
    eyebrow: ['234:924', '234:1355'], title: ['234:925', '234:1356'], ctas: ['234:926', '234:1363'],
    cta1: ['234:927', '234:1364'], cta2: ['234:928', '234:1365'], trust: ['234:929', '234:1357'], trustRow: [undefined, '234:1358'],
    trust1: ['234:930', '234:1359'], trust2: ['234:932', '234:1362'], trust3: ['234:934', '234:1361'], ruler: ['234:935'],
  },
} as const;

export const related = {
  heading: 'Related Claims',
  nodes: { section: ['234:1277', '234:1493'], chip: ['234:1278', '234:1494'], chipText: ['234:1279', '234:1495'], hubs: ['234:1280'], index: ['234:1287'], list: [undefined, '234:1496'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['234:1281', '234:1497'], text: ['234:1282', '234:1498'] },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['234:1284', '234:1500'], text: ['234:1285', '234:1501'], w: 257 },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['234:1288', '234:1503'], text: ['234:1289', '234:1504'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['234:1291', '234:1506'], text: ['234:1292', '234:1507'] },
    { label: 'Wind, hail and falling tree claims', href: ROUTES.windHailTrees, node: ['234:1294', '234:1509'], text: ['234:1295', '234:1510'] },
    { label: 'Contents and valuables claims', href: ROUTES.contentsValuables, node: ['234:1297', '234:1512'], text: ['234:1298', '234:1513'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['234:1300', '234:1515'], text: ['234:1301', '234:1516'] },
    { label: 'Ordinance or law coverage', href: ROUTES.codeUpgrades, node: ['234:1303', '234:1518'], text: ['234:1304', '234:1519'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['234:1306', '234:1521'], text: ['234:1307', '234:1522'] },
  ],
} as const;

export const cta = { nodes: ctaNodes('234:1309', '234:1524') };

export const detail = {
  img: { d: '234:1166', m: '234:1413', alt: 'Burned stair frame of a hillside home above the ocean after a wildfire.' },
  height: 1104,
  top: 120,
  inset: { d: '234:1168', m: '234:1415', alt: 'Ash on a window sill inside a standing home, an air mover on the floor.' },
  nodes: {
    section: ['234:1165', '234:1411'], img: ['234:1166', '234:1413'], stack: [undefined, '234:1412'], inset: ['234:1167'],
    insetImg: ['234:1168', '234:1415'], crop: ['234:1170', '234:1414'], details: ['234:1171', '234:1417'],
  },
  blocks: [
    { chip: '§ 03', title: 'The Foundation Decides the Rebuild Number.', id: 'wf-builder-title',
      body: "Can the foundation be reused? That's an engineer's call. Heat damaged concrete and rebar often can't carry a new house, and that decision moves the rebuild number more than almost anything else.",
      nodes: { block: ['234:1172', '234:1418'], chip: ['234:1173', '234:1419'], chipText: ['234:1174', '234:1420'], title: ['234:1175', '234:1421'], body: ['234:1176', '234:1422'] } },
    { chip: '§ 04', title: 'Price the Rebuild at What It Costs Now.', id: 'wf-surge-title',
      body: 'After a large fire, labor and materials can cost more than they did the week before. That\'s demand surge. The California Department of Insurance warns that insurer estimates can miss it, along with local building conditions. We build the rebuild number line by line, at current prices, and check it against your limits.' },
    { chip: '§ 05', title: 'Underinsured Is Common.', id: 'wf-underinsured-title',
      body: "After Washington's August 2023 Gray and Oregon Road fires, 244 of 355 significant dwelling claims paid out their full limits. Of those 244, the 169 homes with extended replacement cost coverage recovered more than the policy limit.",
      nodes: { block: ['234:1177', '234:1423'], chip: ['234:1178', '234:1424'], chipText: ['234:1179', '234:1425'], title: ['234:1180', '234:1426'], body: ['234:1181', '234:1427'] } },
  ],
} as const;

export const firstSteps = {
  title: 'First Steps After a Wildfire',
  list: [
    "Don't go back in until officials clear the property.",
    'Report the claim now, before you know the full loss.',
    'Ask for a complete copy of your policy, declarations page included. In California your insurer must send it free within 30 days of your request.',
    'Keep a claim diary. If an adjuster says something is excluded or limited, ask which policy provision says so.',
    "Save every receipt for living costs. You're owed the same standard of living you had before the fire.",
    'Photograph and video everything before anything is moved, cleaned or hauled away.',
    "Don't sign on the spot with anyone, including a public adjuster.",
  ],
  after: ['[What to do in the first 48 hours](/first-48-hours/)'],
};

export const faq = {
  title: 'Wildfire Insurance Claim Questions',
  items: [
    { q: 'Does homeowners insurance cover wildfire damage?',
      a: 'In most policies, yes. Fire is a covered peril in a standard homeowners policy, and wildfire is fire. The dwelling, other structures, contents and loss of use each carry their own limit, listed on your declarations page.' },
    { q: 'What is demand surge, and will my insurance pay for it?',
      a: 'Demand surge is the rise in labor and material prices after a disaster. On a replacement cost policy, dwelling coverage pays what it costs to rebuild, up to your limit. Extended replacement cost, if your policy has it, can pay above that limit.' },
    { q: 'Can I rebuild somewhere else and still get paid?',
      a: 'Yes, in California. You can rebuild or buy at another location and recover what rebuilding at the original site would have paid, with no deduction for the value of the land. You also choose your own contractor.' },
    { q: 'Do I have to list every item I lost?',
      a: ['Not always one by one. After a total loss of a primary residence in a declared emergency, California insurers must accept an inventory grouped by category, such as clothing or books, where listing each item is impractical. On policies issued or renewed from July 1, 2026, the insurer must also offer a contents payment without an itemized claim if the home was furnished. Anything above that payment still has to be documented.',
        '[Contents and valuables claims](/claims/contents-valuables/)'] },
    { q: "Is it too late to hire a public adjuster after I've been paid?",
      a: ["Usually not. While the claim is open, we can review what's been paid and measure what's missing. In California, our fee can never leave you with less than your insurer had already paid before you hired us.",
        '[When is it too late to hire a public adjuster?](/faq/)'] },
    { q: "How is a public adjuster different from the insurance company's adjuster?",
      a: "The insurance company's adjuster works for the insurer. A public adjuster is licensed by the state and works for the policyholder. We represent the insured only." },
  ],
};
