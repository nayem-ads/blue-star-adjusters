// Water & Plumbing claims page (Figma desktop 229:698, mobile 229:1106). Copy from design/text/229-698.json + 229-1106.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Water Damage Insurance Claims | Blue Star Adjusters',
  description: 'A water damage insurance claim turns on cause, timing and proof. We map the moisture, prove why the pipe failed and scope the tear out before it dries.',
  header: ['229:703', '229:1133'] as const,
  footer: ['229:1105', '229:1320'] as const,
  callBar: '229:1321',
};

export const hero = {
  img: { d: '229:700', m: '229:1108', alt: 'Kitchen after a water loss, with the ceiling collapsed and wet debris across the floor.' },
  eyebrow: 'Water & Plumbing',
  title: 'Water Damage Insurance Claims',
  lead: 'A water damage insurance claim is usually paid when the water was sudden and accidental, like a burst pipe or a failed water heater. It is usually denied when the carrier calls it gradual, wear and tear, or flood. The outcome turns on proving the cause and measuring how far the water went, before the drying erases it.',
  tagline: 'Water dries. The evidence goes with it.',
  caption: false,
  nodes: {
    section: ['229:699', '229:1107'], img: ['229:700', '229:1108'], content: ['229:704', '229:1135'], eyebrow: ['229:705', '229:1136'],
    title: ['229:706', '229:1137'], ctas: ['229:707', '229:1144'], cta1: ['229:708', '229:1145'], cta2: ['229:709', '229:1146'],
    trust: ['229:710', '229:1138'], trustRow: [undefined, '229:1139'], trust1: ['229:711', '229:1140'], trust2: ['229:713', '229:1143'],
    trust3: ['229:715', '229:1142'], ruler: ['229:716'],
  },
} as const;

export const method = {
  chip: '§ 01',
  title: "Water losses are highly time sensitive. If the water isn't measured, it dries, and mold begins to grow.",
  titleStyle: 'h3',
  itemStyle: 'lead',
  id: 'method-title',
  nodes: {
    section: ['229:881', '229:1147'], rail: ['229:882', '229:1148'], chip: ['229:883', '229:1149'], chipText: ['229:884', '229:1150'],
    title: ['229:885', '229:1151'], ruler: ['229:886', '229:1152'], list: ['229:933', '229:1179'],
  },
  items: [
    { icon: 'droplet', text: [{ b: 'Moisture mapping,' }, ' room by room, to document how far the water traveled.'], node: ['229:934', '229:1180'], iconNode: ['229:935', '229:1181'], textNode: ['229:937', '229:1183'] },
    { icon: 'search', text: [{ b: 'Plumbing failure analysis' }, " to establish proximate cause, because sudden and accidental is covered and gradual usually isn't."], node: ['229:938', '229:1184'], iconNode: ['229:939', '229:1185'], textNode: ['229:941', '229:1187'] },
    { icon: 'ruler', text: [{ b: 'Tear out scope:' }, ' drywall, insulation, flooring, cabinets, subfloor.'], node: ['229:942', '229:1188'], iconNode: ['229:943', '229:1189'], textNode: ['229:945', '229:1191'], bottomRule: true },
    { icon: 'flame', text: [{ b: 'Firefighting water:' }, ' after a fire, the water damage is its own line on the claim.'], node: ['229:1420', '229:1501'], iconNode: ['229:1421', '229:1502'], textNode: ['229:1423', '229:1504'] },
  ],
} as const;

export const methodAfter = [
  'Water wicks up drywall and under flooring well past the stain you can see. An estimate that stops at the stain misses it. Moisture readings, taken wall by wall as the drying begins, show where the water actually went. That map becomes the tear out scope.',
  'A senior adjuster leads every claim, from the first call to the final settlement.',
];

export const suddenGradual = {
  chip: '§ 02',
  id: 'sudden-gradual-title',
  title: 'Sudden or Gradual: What Decides a Water Damage Insurance Claim',
  intro: 'The cause decides coverage. Most homeowners policies pay for water that escapes suddenly and accidentally from inside the house. They exclude damage the carrier can tie to time, maintenance or flood. Your policy wording controls, so read it before you accept a denial.',
  head: ['What happened', 'How policies usually treat it'],
  rows: [
    ['A supply line or pipe bursts', 'Usually covered as sudden and accidental'],
    ['A water heater, washer or dishwasher fails', 'Usually covered as sudden and accidental'],
    ['A pipe freezes and bursts', 'Usually covered. Can be excluded in a home left unheated.'],
    ['A slow leak under a sink, seeping for weeks', 'Usually excluded as continuous seepage or wear and tear'],
    ['Water used to put out a fire', 'Usually covered as part of the fire loss'],
    ['Rain through a roof opening made by wind or hail', 'Usually covered. Rain through a worn out roof is often denied.'],
    ['A sewer, drain or sump pump backs up', 'Usually covered only with a water backup endorsement'],
    ['Flooding, surface water or overflow from outside', 'Not covered by most homeowners policies. Needs a separate flood policy.'],
    ['The broken pipe or appliance itself', 'Usually not covered. Tearing out walls or floors to reach it often is.'],
  ],
  note: "Some policies put a clock on seepage. One Florida policy excluded seepage or leakage over a period of 14 or more days. The carrier's adjuster reads the loss against the exclusions. That's their job. Ours is to prove the cause that fits the coverage, with the failed part, the readings and the photos.",
};

export const flood = {
  chip: '§ 04',
  id: 'flood-title',
  title: 'Flood Is a Separate Policy',
  body: [
    'Water that rises from outside and across the ground into the house is usually treated as flood. Most homeowners policies don\'t cover it. FEMA\'s flood program says it plainly: "Most homeowners insurance does not cover flood damage." Flood coverage comes from a separate flood policy. The federal flood program offers two types, building coverage and contents coverage.',
    'The line between flood and water damage is where many claims get argued. A pipe that bursts inside the house during a storm is usually still a plumbing loss. Rain driven through a roof the wind just opened is usually a wind loss. We document which water did the damage, room by room.',
  ],
};

export const firstSteps = {
  chip: '§ 05',
  id: 'first-steps-title',
  title: 'What to Do First After Water Damage',
  list: [
    'Stop the water. Close the main shutoff or the valve at the fixture.',
    'Get everyone safe first.',
    'Photograph and video everything before anything is moved, dried or torn out.',
    'Keep the failed part. The burst hose or cracked fitting is evidence of cause.',
    'Start drying, and keep every receipt for fans, dehumidifiers and emergency repairs.',
    'Report the claim promptly, in writing, and keep a copy.',
    "Don't throw anything away until it's documented, even if it's ruined.",
    "Don't sign on the spot with anyone, including a public adjuster.",
  ],
  after: [
    "If the tear out leaves your home unlivable, your policy's loss of use coverage may pay to live elsewhere. See [additional living expenses](/claims/additional-living-expenses/).",
    '[What to do in the first 48 hours](/first-48-hours/)',
  ],
};

export const california = {
  chip: '§ 06',
  id: 'california-title',
  title: 'What California Requires of Your Insurer',
  body: [
    "California's Fair Claims Settlement Practices Regulations set the clock. Within 15 calendar days of your notice of claim, the insurer must acknowledge it, give you the forms and instructions, and begin any necessary investigation. Once it has proof of claim, it has 40 calendar days to accept or deny the claim, in whole or in part.",
    'A denial must be in writing and list every basis for it. If the insurer needs more time, it must tell you in writing, then again every 30 days until it decides. Keep every letter. The stated basis is what we answer, line by line.',
  ],
};

export const notFor = {
  chip: '§ 07',
  id: 'not-for-title',
  title: 'When You May Not Need Us',
  body: [
    "A small leak with a fair offer may not need a public adjuster. Compare the damage to your deductible first. On a small claim, our fee may outweigh what we add. We'll tell you so at the free review, before you sign anything.",
    "No upfront cost. We're paid a percentage of what we recover.",
  ],
};

export const faq = {
  chip: '§ 08',
  id: 'faq-title',
  title: 'Questions About Water Damage Claims',
  items: [
    { q: 'Does homeowners insurance cover water damage?', a: 'Usually, when the water was sudden and accidental and came from inside the home. A burst pipe or failed appliance is the classic covered loss. Flood, long term seepage and wear and tear are usually excluded. Your policy wording decides it.' },
    { q: 'Why would a water damage claim be denied?', a: 'Common reasons are gradual damage, poor maintenance, flood and a backup with no water backup endorsement. The carrier ties the damage to time or neglect. If the cause was a sudden failure, proof of that failure is how the denial gets answered. See [denied or underpaid claims](/claims/denied-or-underpaid/).' },
    { q: 'Does homeowners insurance cover mold from water damage?', a: "Sometimes. Many policies exclude or cap mold, and where it is covered, the water that caused it usually has to be covered too. One policy we reviewed capped mold at $7,500. Mold from flooding or a long term leak usually isn't covered. Dry fast and document the moisture." },
    { q: 'Does insurance pay to fix the pipe that leaked?', a: 'Usually not. Many policies exclude the system or appliance the water came from. Many do pay to tear out and replace the walls or floors needed to reach it, and for the water damage itself.' },
    { q: 'Should I file a claim for a small leak?', a: 'Compare the repair cost to your deductible first. A small claim may net little, and claims can affect your premium at renewal. If the damage is spreading inside walls or floors, get it measured before you decide.' },
    { q: 'Do I need a public adjuster for a water damage claim?', a: "Not always. It matters most when the cause is disputed, the tear out is large or the first estimate stops at the visible stain. Bring the policy and the carrier's letters to a free review, and we'll tell you if we can add anything." },
  ],
};

export const related = {
  heading: 'Related Claims',
  nodes: { section: ['229:1058', '229:1274'], chip: ['229:1059', '229:1275'], chipText: ['229:1060', '229:1276'], hubs: ['229:1061'], index: ['229:1068'], list: [undefined, '229:1277'] },
  hubs: [
    { label: 'Home insurance claims', href: ROUTES.residential, node: ['229:1062', '229:1278'], text: ['229:1063', '229:1279'] },
    { label: 'Commercial property claims', href: ROUTES.commercial, node: ['229:1065', '229:1281'], text: ['229:1066', '229:1282'] },
  ],
  links: [
    { label: 'Fire and smoke damage claims', href: ROUTES.fireSmoke, node: ['229:1072', '229:1287'], text: ['229:1073', '229:1288'] },
    { label: 'Wildfire insurance claims', href: ROUTES.wildfire, node: ['229:1069', '229:1284'], text: ['229:1070', '229:1285'] },
    { label: 'Wind, hail and falling tree claims', href: ROUTES.windHailTrees, node: ['229:1075', '229:1290'], text: ['229:1076', '229:1291'] },
    { label: 'Contents and valuables', href: ROUTES.contentsValuables, node: ['229:1078', '229:1293'], text: ['229:1079', '229:1294'] },
    { label: 'Additional living expenses', href: ROUTES.additionalLiving, node: ['229:1081', '229:1296'], text: ['229:1082', '229:1297'] },
    { label: 'Code upgrades', href: ROUTES.codeUpgrades, node: ['229:1084', '229:1299'], text: ['229:1085', '229:1300'] },
    { label: 'Denied or underpaid claims', href: ROUTES.deniedOrUnderpaid, node: ['229:1087', '229:1302'], text: ['229:1088', '229:1303'] },
  ],
} as const;

export const cta = {
  nodes: {
    section: ['229:1090', '229:1305'], heading: [undefined, '229:1306'], title: ['229:1092', '229:1307'], body: ['229:1093', '229:1308'], block: ['229:1094'],
    phone: ['229:1095', '229:1309'], label: ['229:1096', '229:1310'], number: ['229:1097', '229:1311'], rule: ['229:1098', '229:1312'],
    hours: ['229:1099', '229:1313'], hoursText: ['229:1101', '229:1315'], buttons: ['229:1102', '229:1316'],
    cta1: ['229:1103', '229:1317'], cta2: ['229:1104', '229:1318'], wave: ['229:1091', '229:1319'],
  },
} as const;
