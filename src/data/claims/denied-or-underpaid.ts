// Denied or Underpaid claims page (Figma desktop 238:10968, mobile 238:11376). Copy from design/text/238-10968.json + 238-11376.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Home Insurance Claim Denied or Underpaid? | Blue Star',
  description: 'Home insurance claim denied or underpaid in California? Read the letter, write down your deadlines, then get the loss measured again. Free claim review.',
  header: ['238:10973', '238:11403'] as const,
  footer: ['238:11375', '238:11590'] as const,
  callBar: '238:11591',
};

export const hero = {
  img: { d: '238:10970', m: '238:11378', alt: 'An insurance letter and reading glasses on a kitchen table beside a cup of coffee.' },
  eyebrow: 'Denied or Underpaid. Measure It Again.',
  title: 'Home Insurance Claim Denied or Underpaid?',
  titleClass: 'bs-den-h1 lg:t-display-l lg:w-[960px]',
  lead: 'A home insurance claim denied in a letter is not always the last word. In California, the carrier has to put every reason in writing and cite the policy language behind it. Read that letter against your whole policy. Write down your deadlines. Then get the loss measured again. If the claim was paid but short, start with scope: what did the first estimate leave out?',
  caption: false,
  bottom: 80, // content bottom at y 740 in this frame (724 on Fire/Water)
  nodes: {
    section: ['238:10969', '238:11377'], img: ['238:10970', '238:11378'], content: ['238:10974', '238:11405'], eyebrow: ['238:10975', '238:11406'],
    title: ['238:10976', '238:11407'], ctas: ['238:10977', '238:11414'], cta1: ['238:10978', '238:11415'], cta2: ['238:10979', '238:11416'],
    trust: ['238:10980', '238:11408'], trustRow: [undefined, '238:11409'], trust1: ['238:10981', '238:11410'], trust2: ['238:10983', '238:11413'],
    trust3: ['238:10985', '238:11412'], ruler: ['238:10986'],
  },
} as const;

export const questions = {
  chip: '§ 02',
  title: 'Questions we check with you',
  bg: 'white',
  itemStyle: 'lead',
  lastRule: false,
  id: 'questions-title',
  nodes: {
    section: ['238:11151', '238:11417'], rail: ['238:11152', '238:11418'], chip: ['238:11153', '238:11419'], chipText: ['238:11154', '238:11420'],
    title: ['238:11155', '238:11421'], ruler: ['238:11156', '238:11422'], list: ['238:11203', '238:11449'],
  },
  items: [
    { icon: 'ruler', text: [{ b: 'Scope:' }, ' was everything measured? Heat damage, code upgrades, hidden water.'], node: ['238:11204', '238:11450'], iconNode: ['243:996', '244:952'], textNode: ['238:11207', '238:11453'] },
    { icon: 'document', text: [{ b: 'Reassignment:' }, ' every new adjuster restarts the file. We keep one record and one scope, and send it to each of them.'], node: ['243:1000', '244:956'], iconNode: ['243:1004', '244:960'], textNode: ['243:1003', '244:959'] },
    { icon: 'search', text: [{ b: 'Wording:' }, ' which policy language did the letter cite, and what does it actually say?'], node: ['243:1008', '244:964'], iconNode: ['243:1012', '244:968'], textNode: ['243:1011', '244:967'] },
    { icon: 'check', text: [{ b: 'Timing:' }, ' once the carrier has proof of your claim, California gives it 40 calendar days to accept or deny it, in whole or in part. If it needs longer, it must tell you in writing, and again every 30 days until it decides.'] },
    { icon: 'clock', text: [{ b: 'Deadlines:' }, " California's standard fire policy sets proof of loss at 60 days unless extended in writing (at least 100 days from the date of loss when the loss is tied to a declared state of emergency, under SB 495), and suit within 12 months of the loss (24 in a state of emergency). Check your own policy, and ask an attorney about deadlines."], node: ['243:1016', '244:972'], iconNode: ['243:1020', '244:976'], textNode: ['243:1019', '244:975'], colNode: ['243:1024', '244:980'] },
    { icon: 'shield', text: [{ b: 'Appraisal:' }, " California's standard fire policy lets either side request appraisal in writing when you disagree on the amount of loss. Appraisal decides the amount. It doesn't decide coverage. After a government declared disaster, either side can still ask for it, but neither side can force it."], node: ['243:1025', '244:981'], iconNode: ['243:1029', '244:985'], textNode: ['243:1028', '244:984'] },
  ],
} as const;

export const answer = {
  img: { d: '238:11217', m: '238:11464', alt: 'A claim binder, loose papers and reading glasses on a wooden kitchen table.' },
  height: 760,
  top: 128,
  nodes: { section: ['238:11216', '238:11462'], img: ['238:11217', '238:11464'], stack: [undefined, '238:11463'], details: ['238:11222', '238:11468'] },
  blocks: [
    {
      chip: '§ 04', title: 'When the answer is no.', id: 'answer-title',
      body: "Not every claim is covered. We reviewed a $1.4 million total loss that was denied because the homeowner was welding for his business inside the garage when the fire started. That policy excluded losses from business operations on the property. We'd rather tell you at the kitchen table than a year into the claim.",
      nodes: { block: ['238:11223', '238:11469'], chip: ['238:11224', '238:11470'], chipText: ['238:11225', '238:11471'], title: ['238:11226', '238:11472'], body: ['238:11227', '238:11473'] },
    },
  ],
} as const;

export const related = {
  index: '§ 08',
  title: 'Related Claims',
  nodes: { section: ['238:11328', '238:11544'], chip: ['238:11329', '238:11545'], chipText: ['238:11330', '238:11546'], hubs: ['238:11331'], index: ['238:11338'], list: [undefined, '238:11547'] },
  hubs: [
    { label: 'Residential claims', href: ROUTES.residential, node: ['238:11332', '238:11548'], text: ['238:11333', '238:11549'], w: 243 },
    { label: 'Commercial claims', href: ROUTES.commercial, node: ['238:11335', '238:11551'], text: ['238:11336', '238:11552'], w: 257 },
  ],
  links: [
    { label: 'Fire insurance claims', href: ROUTES.fireSmoke, node: ['238:11357', '238:11572'], text: ['238:11358', '238:11573'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['238:11339', '238:11554'], text: ['238:11340', '238:11555'] },
    { label: 'Water damage claims', href: ROUTES.waterDamage, node: ['238:11342', '238:11557'], text: ['238:11343', '238:11558'] },
    { label: 'Roof, hail and tree damage claims', href: ROUTES.windHailTrees, node: ['238:11345', '238:11560'], text: ['238:11346', '238:11561'] },
    { label: 'Contents and valuables claims', href: ROUTES.contentsValuables, node: ['238:11348', '238:11563'], text: ['238:11349', '238:11564'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['238:11351', '238:11566'], text: ['238:11352', '238:11567'] },
    { label: 'Ordinance or law coverage', href: ROUTES.codeUpgrades, node: ['238:11354', '238:11569'], text: ['238:11355', '238:11570'] },
    { label: 'How a public adjuster works', href: ROUTES.howItWorks },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['238:11360', '238:11575'], heading: [undefined, '238:11576'], title: ['238:11362', '238:11577'], body: ['238:11363', '238:11578'], block: ['238:11364'],
    phone: ['238:11365', '238:11579'], label: ['238:11366', '238:11580'], number: ['238:11367', '238:11581'], rule: ['238:11368', '238:11582'],
    hours: ['238:11369', '238:11583'], hoursText: ['238:11371', '238:11585'], buttons: ['238:11372', '238:11586'],
    cta1: ['238:11373', '238:11587'], cta2: ['238:11374', '238:11588'], wave: ['238:11361', '238:11589'],
  },
} as const;

export const firstSteps = {
  chip: '§ 01',
  id: 'first-steps-title',
  title: 'Home Insurance Claim Denied? What to Do First.',
  body: ['A denial letter after a loss is hard to read once. Read it twice. Then work through this list in order.'],
  listStyle: 'number',
  list: [
    "**Get every reason in writing.** California's fair claims regulations require a written denial that lists all of its bases and cites the policy provision, condition or exclusion it relies on. If you were told a reason on the phone, ask for it in a letter.",
    '**Read the cited wording against the whole policy.** The declarations page, the exclusion, and every endorsement. Endorsements add to the base policy, so read each one.',
    "**Write down your deadlines.** Proof of loss, appraisal and suit each run on their own clock. They're listed below.",
    "**Keep documenting.** Photos, video, receipts, every letter and every call, with the date and the name of the person you spoke to. Make temporary repairs to stop further damage and keep those receipts too. Don't throw anything away until it's measured.",
    '**Answer in writing, with evidence.** Ask the carrier to reconsider. Send what the first inspection missed: contractor estimates, test results, photos. Ask for a reinspection.',
    '**Ask the California Department of Insurance to review it.** Your denial letter has to tell you that you can. File a Request for Assistance at insurance.ca.gov or call (800) 927-4357, and attach the denial letter and your declarations page.',
    "**Know when it's a legal question.** A fight over coverage, possible bad faith, or a lawsuit belongs with an attorney. More on that below.",
  ],
  bg: 'paper',
} as const;

export const reasons = {
  chip: '§ 03',
  id: 'reasons-title',
  title: 'Why Home Insurance Claims Get Denied',
  body: ['Each common reason turns on a different question. This is the one we ask.'],
  list: [
    '**An excluded peril.** Flood or earthquake, for example. Cause of loss decides coverage, so the cause has to be documented.',
    '**Wear, tear or neglect.** The carrier says the damage was already there. We measure what the event itself damaged.',
    '**Late notice.** The standard fire policy asks for written notice of a loss without unnecessary delay. If the letter cites late notice, gather every date you have and talk to an attorney.',
    "**Not enough documentation.** What isn't documented isn't paid. Evidence answers this one.",
    "**Below the deductible.** The carrier's number came in under your deductible. If the scope was short, so was the number.",
    "**A lapse in coverage.** An unpaid premium or a cancelled policy. We can't fix that, and we'll tell you so.",
    "**Suspected misrepresentation or fraud.** That's a legal matter. Talk to an attorney.",
    "**An exclusion you didn't know was there.** Like the one below.",
  ],
  bg: 'paper',
} as const;

export const underpaid = {
  chip: '§ 05',
  id: 'underpaid-title',
  title: 'Underpaid Insurance Claim? Start With the Scope.',
  body: ["The carrier's estimate prices what its adjuster saw on inspection day. Anything nobody measured never reaches it. So we start from their estimate and measure what it left out."],
  list: [
    'Rooms the flames never reached, written up as undamaged.',
    "Smoke in porous materials the carrier wants cleaned, when they can't be.",
    'Water inside walls and under floors, found with moisture mapping.',
    'Code upgrades the city will require, priced against your [ordinance or law coverage](/claims/code-upgrades/).',
    'Recoverable depreciation. If your policy pays replacement cost, the carrier can hold back depreciation from the first payment. California gives you at least 12 months from the first actual cash value payment to collect it, or 36 months when the loss is tied to a declared state of emergency.',
    'Fine art priced like furniture. [Contents and valuables](/claims/contents-valuables/)',
    'The rental ends before the rebuild does. [Additional living expenses](/claims/additional-living-expenses/)',
  ],
  results: [
    { lead: 'Los Angeles house fire, full strip out.', text: 'Offered $38,000. Settled at $276,000.' },
    { lead: 'Smoke damage.', text: 'Offered $17,000. Settled for about $1.1 million, after an industrial hygienist proved combustion byproducts in the porous materials and doors.' },
  ],
  after: [
    "Already have an offer or a first check? It's usually not too late. We can reopen scope before you accept. In California, our fee can never leave you with less than your insurer had already paid before you hired us.",
    "On a small gap, or when the offer is already fair, our fee may outweigh what we add. We'll tell you so at the free review, before you sign anything.",
  ],
} as const;

export const counsel = {
  chip: '§ 06',
  head: ['The dispute', 'Who takes it'],
  rows: [
    ['How much the loss is: scope, pricing, depreciation, contents', "A public adjuster measures and negotiates it. Appraisal is the policy's tool for this one."],
    ['Whether the loss is covered at all', 'An attorney'],
    ['Possible bad faith in how the claim was handled', 'An attorney'],
    ['Fraud or misrepresentation alleged against you', 'An attorney'],
    ['A suit deadline that is close', 'An attorney'],
  ],
} as const;

export const faq = {
  chip: '§ 07',
  id: 'faq-title',
  title: 'Questions About a Denied Home Insurance Claim',
  bg: 'white',
  items: [
    { q: 'Can you appeal a denied home insurance claim?', a: "Yes. Ask the carrier in writing to reconsider, send new evidence, and ask for a reinspection. In California you can also ask the Department of Insurance to review a denial you believe is wrong. If the dispute is only about the amount, the policy's appraisal clause is another route." },
    { q: 'Can I hire a public adjuster after my claim was denied or partly paid?', a: "Yes. We can reopen scope on an underpaid claim, and we can read a denial against the exact policy wording the carrier cited. If the denial holds up, we'll tell you at the free review." },
    { q: 'How long does an insurer have to accept or deny a claim in California?', a: "Forty calendar days after it receives proof of claim, under California's fair claims regulations. If it needs longer, it must tell you in writing within that time, and again every 30 days until it decides." },
    { q: 'What is the deadline to sue over a denied homeowners claim?', a: "California's standard fire policy sets 12 months from the loss, or 24 months when the loss is tied to a declared state of emergency. Your own policy and the facts of your claim can change that answer. Ask an attorney, and ask early." },
    { q: 'Do I need a public adjuster or an attorney?', a: "It depends on the dispute. If you and the carrier disagree on how much the loss is, that's our work. If the carrier says the loss isn't covered, or you think the claim was handled in bad faith, call an attorney. We work alongside your attorney when a claim needs both." },
    { q: 'Can I dispute a claim denial without a lawyer?', a: 'Yes. You can ask for reconsideration, send evidence, request appraisal on the amount, and file a Request for Assistance with the California Department of Insurance yourself. Bring in an attorney for a coverage dispute, possible bad faith, or a suit deadline.' },
    { q: 'How are you paid?', a: "No upfront cost. We're paid a percentage of what we recover. [Public adjuster fees, explained](/fees/)" },
  ],
} as const;
