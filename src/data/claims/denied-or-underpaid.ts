// Denied or Underpaid claims page (Figma desktop 238:10968, mobile 238:11376). Copy from design/text/238-10968.json + 238-11376.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Denied or Underpaid Claims | Blue Star Adjusters',
  description: "Denied or underpaid? We measure the claim again: the scope, the policy wording, the deadlines and appraisal. And we tell you when it needs an attorney.",
  header: ['238:10973', '238:11403'] as const,
  footer: ['238:11375', '238:11590'] as const,
  callBar: '238:11591',
};

export const hero = {
  img: { d: '238:10970', m: '238:11378', alt: 'An insurance letter and reading glasses on a kitchen table beside a cup of coffee.' },
  eyebrow: 'Denied or Underpaid',
  title: 'Denied or Underpaid.\nMeasure It Again.',
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
  chip: '§ 01',
  title: 'Questions we check with you',
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
    { icon: 'clock', text: [{ b: 'Deadlines:' }, " California's standard fire policy sets proof of loss at 60 days unless extended in writing (100 days after a declared state of emergency, under SB 495), and suit within 12 months of the loss (24 in a state of emergency). Check your own policy, and ask an attorney about deadlines."], node: ['243:1016', '244:972'], iconNode: ['243:1020', '244:976'], textNode: ['243:1019', '244:975'], colNode: ['243:1024', '244:980'] },
    { icon: 'shield', text: [{ b: 'Appraisal:' }, " California's standard fire policy lets either side request appraisal in writing when you disagree on the amount of loss. Appraisal decides the amount. It doesn't decide coverage."], node: ['243:1025', '244:981'], iconNode: ['243:1029', '244:985'], textNode: ['243:1028', '244:984'] },
  ],
} as const;

export const answer = {
  img: { d: '238:11217', m: '238:11464', alt: 'A claim binder, loose papers and reading glasses on a wooden kitchen table.' },
  height: 760,
  top: 128,
  nodes: { section: ['238:11216', '238:11462'], img: ['238:11217', '238:11464'], stack: [undefined, '238:11463'], details: ['238:11222', '238:11468'] },
  blocks: [
    {
      chip: '§ 02', title: 'When the answer is no.', id: 'answer-title',
      body: "Not every claim is covered. We reviewed a $1.4 million total loss that was denied because the homeowner was welding for his business inside the garage when the fire started. That policy excluded losses from business operations on the property. We'd rather tell you at the kitchen table than a year into the claim.",
      nodes: { block: ['238:11223', '238:11469'], chip: ['238:11224', '238:11470'], chipText: ['238:11225', '238:11471'], title: ['238:11226', '238:11472'], body: ['238:11227', '238:11473'] },
    },
  ],
} as const;

export const related = {
  index: '§ 04',
  nodes: { section: ['238:11328', '238:11544'], chip: ['238:11329', '238:11545'], chipText: ['238:11330', '238:11546'], hubs: ['238:11331'], index: ['238:11338'], list: [undefined, '238:11547'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['238:11332', '238:11548'], text: ['238:11333', '238:11549'], w: 243 },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['238:11335', '238:11551'], text: ['238:11336', '238:11552'], w: 257 },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['238:11357', '238:11572'], text: ['238:11358', '238:11573'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['238:11339', '238:11554'], text: ['238:11340', '238:11555'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['238:11342', '238:11557'], text: ['238:11343', '238:11558'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['238:11345', '238:11560'], text: ['238:11346', '238:11561'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['238:11348', '238:11563'], text: ['238:11349', '238:11564'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['238:11351', '238:11566'], text: ['238:11352', '238:11567'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['238:11354', '238:11569'], text: ['238:11355', '238:11570'] },
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
