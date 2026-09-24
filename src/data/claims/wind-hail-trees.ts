// Wind, Hail & Trees (Figma desktop 229:8926, mobile 229:9334). Copy from design/text/229-8926.json + 229-9334.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
import { ctaNodes } from './commercial';

export const page = {
  title: 'Wind, Hail & Falling Tree Claims | Blue Star Adjusters',
  description: "Hail shortens a roof. A tree racks a house. We document the lost roof life, the structural load path and wind uplift before it's called wear and tear.",
  header: ['229:8931', '229:9361'] as const,
  footer: ['229:9333', '229:9548'] as const,
  callBar: '229:9549',
};

export const hero = {
  img: { d: '229:8928', m: '229:9336', alt: 'House with a tarp over its roof beneath storm-damaged trees.' },
  eyebrow: 'Wind, Hail & Falling Trees',
  title: 'Hail Shortens a Roof.\nA Tree Racks a House.',
  caption: false,
  nodes: {
    section: ['229:8927', '229:9335'], img: ['229:8928', '229:9336'], content: ['229:8932', '229:9363'],
    eyebrow: ['229:8933', '229:9364'], title: ['229:8934', '229:9365'], ctas: ['229:8935', '229:9372'],
    cta1: ['229:8936', '229:9373'], cta2: ['229:8937', '229:9374'], trust: ['229:8938', '229:9366'], trustRow: [undefined, '229:9367'],
    trust1: ['229:8939', '229:9368'], trust2: ['229:8941', '229:9371'], trust3: ['229:8943', '229:9370'], ruler: ['229:8944'],
  },
} as const;

export const related = {
  index: '§ 04',
  nodes: { section: ['229:9286', '229:9502'], chip: ['229:9287', '229:9503'], chipText: ['229:9288', '229:9504'], hubs: ['229:9289'], index: ['229:9296'], list: [undefined, '229:9505'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['229:9290', '229:9506'], text: ['229:9291', '229:9507'] },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['229:9293', '229:9509'], text: ['229:9294', '229:9510'] },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['229:9303', '229:9518'], text: ['229:9304', '229:9519'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['229:9297', '229:9512'], text: ['229:9298', '229:9513'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['229:9300', '229:9515'], text: ['229:9301', '229:9516'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['229:9306', '229:9521'], text: ['229:9307', '229:9522'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['229:9309', '229:9524'], text: ['229:9310', '229:9525'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['229:9312', '229:9527'], text: ['229:9313', '229:9528'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['229:9315', '229:9530'], text: ['229:9316', '229:9531'] },
  ],
} as const;

export const cta = { nodes: ctaNodes('229:9318', '229:9533') };

export const detail = {
  img: { d: '229:9175', m: '229:9422', alt: 'Hail-damaged roof shingles, the impacts circled in chalk, with a tape measure for scale.' },
  height: 960,
  top: 130,
  inset: { d: '229:9177', m: '229:9424', alt: 'Close view of broken framing after a tree strike.', label: 'Framing connections' },
  nodes: {
    section: ['229:9174', '229:9420'], img: ['229:9175', '229:9422'], stack: [undefined, '229:9421'], inset: ['229:9176'],
    insetImg: ['229:9177', '229:9424'], dimension: ['229:9178', '229:9425'], crop: ['229:9179', '229:9423'], details: ['229:9180', '229:9426'],
  },
  blocks: [
    { chip: '§ 01', title: 'Hail.', id: 'wind-hail-title',
      body: "Hail can take years off a roof's life. We've seen a roof rated for 30 years reduced to 15. That lost life is the case for a new roof. A patch doesn't give it back.",
      nodes: { block: ['229:9181', '229:9427'], chip: ['229:9182', '229:9428'], chipText: ['229:9183', '229:9429'], title: ['229:9184', '229:9430'], body: ['229:9185', '229:9431'] } },
    { chip: '§ 02', title: 'Falling trees.', id: 'wind-trees-title',
      body: "A tree strike causes immediate lateral shear. The load travels through the home's diaphragms and shear walls, all the way to the foundation. So we check what a quick walk through skips. Framing connections, racked walls, cracks in the foundation.",
      nodes: { block: ['229:9186', '229:9432'], chip: ['229:9187', '229:9433'], chipText: ['229:9188', '229:9434'], title: ['229:9189', '229:9435'], body: ['229:9190', '229:9436'] } },
  ],
} as const;
