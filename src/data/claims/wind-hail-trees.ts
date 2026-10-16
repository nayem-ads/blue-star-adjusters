// Wind, Hail & Trees (Figma desktop 229:8926, mobile 229:9334). Copy from design/text/229-8926.json + 229-9334.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
import { ctaNodes } from './commercial';

export const page = {
  title: 'Roof Insurance Claims for Wind, Hail and Fallen Trees',
  description: "Wind, hail or a fallen tree damaged your roof? We document the lost roof life, the framing and the storm date, then negotiate your roof insurance claim.",
  header: ['229:8931', '229:9361'] as const,
  footer: ['229:9333', '229:9548'] as const,
  callBar: '229:9549',
};

export const hero = {
  img: { d: '229:8928', m: '229:9336', alt: 'House with a tarp over its roof beneath storm-damaged trees.' },
  eyebrow: 'Wind, Hail & Falling Trees',
  title: 'Roof Insurance Claims for Wind, Hail and Falling Tree Damage',
  titleClass: 'bs-wind-h1 lg:t-display-l lg:w-[960px]',
  lead: "A roof insurance claim after wind, hail or a falling tree is paid on what you can prove. The carrier's adjuster often looks for wear and tear, roof age and cosmetic damage. We document the storm damage, the roof life it took and the framing underneath. Then we build the claim and negotiate it with your insurer.",
  sub: 'Hail Shortens a Roof. A Tree Racks a House.',
  caption: false,
  nodes: {
    section: ['229:8927', '229:9335'], img: ['229:8928', '229:9336'], content: ['229:8932', '229:9363'],
    eyebrow: ['229:8933', '229:9364'], title: ['229:8934', '229:9365'], ctas: ['229:8935', '229:9372'],
    cta1: ['229:8936', '229:9373'], cta2: ['229:8937', '229:9374'], trust: ['229:8938', '229:9366'], trustRow: [undefined, '229:9367'],
    trust1: ['229:8939', '229:9368'], trust2: ['229:8941', '229:9371'], trust3: ['229:8943', '229:9370'], ruler: ['229:8944'],
  },
} as const;

export const related = {
  heading: 'Related Claims',
  nodes: { section: ['229:9286', '229:9502'], chip: ['229:9287', '229:9503'], chipText: ['229:9288', '229:9504'], hubs: ['229:9289'], index: ['229:9296'], list: [undefined, '229:9505'] },
  hubs: [
    { label: 'Home insurance claims', href: ROUTES.residential, node: ['229:9290', '229:9506'], text: ['229:9291', '229:9507'] },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['229:9293', '229:9509'], text: ['229:9294', '229:9510'], w: 257 },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['229:9303', '229:9518'], text: ['229:9304', '229:9519'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['229:9297', '229:9512'], text: ['229:9298', '229:9513'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['229:9300', '229:9515'], text: ['229:9301', '229:9516'] },
    { label: 'Contents and valuables claims', href: ROUTES.contentsValuables, node: ['229:9306', '229:9521'], text: ['229:9307', '229:9522'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['229:9309', '229:9524'], text: ['229:9310', '229:9525'] },
    { label: 'Ordinance or law coverage', href: ROUTES.codeUpgrades, node: ['229:9312', '229:9527'], text: ['229:9313', '229:9528'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['229:9315', '229:9530'], text: ['229:9316', '229:9531'] },
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
  blocks: [],
} as const;

// Hail and trees copy, rendered in the PhotoSplit "details" slot by sections/claims/wind/StormDetail.astro.
export const hail = {
  chip: '§ 01', id: 'wind-hail-title',
  title: 'Hail Damage Insurance Claims. Count the Years, Not the Dents.',
  body: [
    "Hail can take years off a roof's life. We've seen a roof rated for 30 years reduced to 15. That lost life is the case for a new roof. A patch doesn't give it back.",
    'So we prove it. Each impact is chalked and photographed, slope by slope, with a tape for scale. Gutters, vents and flashing carry the same storm in their dents.',
    "Some policies exclude cosmetic hail damage, meaning dents that don't stop the roof from doing its job. It comes up most on metal roofs. If your policy has that wording, we read it before the inspection, not after a denial.",
    'California also has a matching rule. When your policy pays replacement cost and new shingles can\'t match the old in quality, color or size, the insurer must replace all items in the damaged area so they look reasonably uniform (10 CCR 2695.9). What counts as the damaged area, one slope or the whole roof, is the part we argue.',
  ],
  nodes: { block: ['229:9181', '229:9427'], chip: ['229:9182', '229:9428'], chipText: ['229:9183', '229:9429'], title: ['229:9184', '229:9430'] },
} as const;

export const trees = {
  chip: '§ 02', id: 'wind-trees-title',
  title: 'Tree Fell on Your House? The Damage Runs to the Foundation.',
  body: [
    "A tree strike causes immediate lateral shear. The load travels through the home's diaphragms and shear walls, all the way to the foundation. So we check what a quick walk through skips. Framing connections, racked walls, cracks in the foundation.",
    "Ask the tree crew to leave the broken members until they're photographed. Where the trunk landed and what snapped show where the load went.",
  ],
  subs: [
    { title: 'Whose insurance pays?', body: "If a neighbor's tree falls on your house, you usually claim on your own policy. That holds even when the roots were on their side of the fence. If they ignored a dead tree, their insurer may end up paying. Your claim still comes first." },
    { title: 'The tree itself', body: "Removing the tree usually has its own small limit, separate from the house. A tree that falls in the yard and hits nothing often isn't covered at all. Once it lands on the house, removal, debris and the structural repair are separate lines. We price each one." },
  ],
  nodes: { block: ['229:9186', '229:9432'], chip: ['229:9187', '229:9433'], chipText: ['229:9188', '229:9434'], title: ['229:9189', '229:9435'] },
} as const;

export const wearAndTear = {
  chip: '§ 04', id: 'wind-wear-title',
  title: 'Why a Roof Insurance Claim Gets Called Wear and Tear',
  body: [
    "Homeowners policies cover sudden damage. They exclude wear, tear, age and poor upkeep. Every roof has some of each, so the carrier's adjuster starts there. That's the position they're paid to test.",
    "The answer is proof tied to one storm. That means the storm date, impact patterns that fit it, and damage that age alone doesn't make. Report damage as soon as you find it. Every month of delay gives a later storm, or neglect, room to take the blame.",
    'Then read the endorsements. Some policies pay a roof past a certain age at actual cash value. Some carry a separate wind or hail deductible. Both were printed in your policy before the storm, and we read them before the adjuster arrives.',
  ],
};

export const misses = {
  chip: '§ 05', id: 'wind-misses-title',
  title: 'What the First Roof Estimate Usually Leaves Out',
  list: [
    "Slopes that won't match, priced as a patch instead of a uniform roof.",
    'Soft metals: gutters, vents, flashing.',
    'Ceilings, insulation and drywall soaked through the opening. [Water damage claims](/claims/water-damage/)',
    'Fences, sheds and detached garages, covered under other structures.',
    'Code work the city may require once the old roof comes off. [Ordinance or law coverage](/claims/code-upgrades/)',
    "A place to live if the house isn't safe to sleep in. [Additional living expenses](/claims/additional-living-expenses/)",
  ],
};

export const depreciation = {
  chip: '§ 06', id: 'wind-depreciation-title',
  title: 'Replacement Cost, Depreciation and the Second Check',
  body: [
    'A replacement cost policy usually pays a roof claim in two parts. The first check is actual cash value: the cost to replace, minus depreciation and your deductible. The depreciation held back is recoverable once the work is done.',
    "In California, the insurer can't give you less than 12 months from the first actual cash value payment to collect the full replacement cost. It must grant six month extensions for good cause when you're working in good faith and the delays are outside your control (California Insurance Code 2051.5).",
    'Depreciation is where the age argument returns. California requires it to reflect a measurable difference in market value (10 CCR 2695.9). We check the age and condition the carrier used against the roof you actually had.',
    'A senior adjuster leads every claim, from the first call to the final settlement.',
  ],
};

export const afterStorm = {
  chip: '§ 07', id: 'wind-after-title',
  title: 'After the Storm, Before the Roofer',
  body: ['A tree through the ceiling makes for a long night. Get everyone out and safe first. Then:'],
  list: [
    'Stay off the roof. Photograph it from the ground, and every ceiling stain inside.',
    'Write down the storm date and keep any weather alerts.',
    'Tarp the opening and keep every receipt.',
    "Don't let anything be hauled away until it's documented.",
    "Don't sign with anyone at the door. In California your insurer can't require a specific repairer. Only the insurer decides coverage, so be wary of any roofer who promises approval.",
    'Report the claim to your insurer promptly.',
  ],
  after: ['[What to do in the first 48 hours](/first-48-hours/)'],
};

export const notFor = {
  chip: '§ 08', id: 'wind-notfor-title',
  title: 'When a Roof Claim May Not Be Worth Filing',
  body: ["If the repair costs about the same as your deductible, a claim may not be worth it. The same goes for a fair offer on a small loss, where our fee could outweigh what we add. We'll tell you so at the free review, before you sign anything."],
};

export const faq = {
  chip: '§ 09', id: 'wind-faq-title',
  title: 'Questions About Roof, Hail and Tree Damage Claims',
  items: [
    { q: 'Will insurance pay for a new roof after hail?', a: 'It can, when the hail damage is proven and the policy covers it. Partial damage is usually paid as a repair, unless matching or lost roof life makes a repair the wrong answer. Roof age endorsements and cosmetic damage exclusions can cut the payment, so read them first.' },
    { q: 'How long do I have to file a roof insurance claim?', a: 'Your policy sets the reporting rules in its conditions section. Report as soon as you find damage. The longer you wait, the easier it is to blame a later storm or poor upkeep.' },
    { q: "What if the adjuster says there's no hail damage?", a: ['Ask for the decision in writing, with the reasons. Then answer it with evidence: impact photos with scale, soft metal damage, the storm date and a roof estimate. If the claim was already denied, we start from the denial letter.', '[Denied or underpaid claims](/claims/denied-or-underpaid/)'] },
    { q: "Who pays if my neighbor's tree falls on my house?", a: 'Usually your own insurer. You file on your policy even if the tree grew on their side. If the neighbor ignored a dead tree, their insurer may end up paying.' },
    { q: 'Does homeowners insurance pay to remove a fallen tree?', a: "When the tree damages a covered structure, removal is usually paid up to a separate, small limit. A tree that falls in the yard and hits nothing often isn't covered. Your policy states the exact limit." },
    { q: 'Should I hire a public adjuster or a lawyer for roof damage?', a: "A public adjuster measures the loss and negotiates the claim. An attorney gives legal advice and takes a dispute to court. We don't give legal advice. When a claim needs counsel, we work alongside your attorney." },
    { q: 'What does a public adjuster cost on a roof claim?', a: ["No upfront cost. We're paid a percentage of what we recover. In California, our fee can never leave you with less than your insurer had already paid before you hired us.", '[Public adjuster fees, explained](/fees/)'] },
  ],
};
