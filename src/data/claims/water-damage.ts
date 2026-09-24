// Water & Plumbing claims page (Figma desktop 229:698, mobile 229:1106). Copy from design/text/229-698.json + 229-1106.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';

export const page = {
  title: 'Water & Plumbing Damage Claims | Blue Star Adjusters',
  description: 'Water dries and the evidence goes with it. We map moisture room by room, establish the cause of the plumbing failure and scope the full tear out.',
  header: ['229:703', '229:1133'] as const,
  footer: ['229:1105', '229:1320'] as const,
  callBar: '229:1321',
};

export const hero = {
  img: { d: '229:700', m: '229:1108', alt: 'Kitchen after a water loss, with the ceiling collapsed and wet debris across the floor.' },
  eyebrow: 'Water & Plumbing',
  title: 'Water Dries.\nThe Evidence Goes With It.',
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

export const related = {
  index: '§ 03',
  nodes: { section: ['229:1058', '229:1274'], chip: ['229:1059', '229:1275'], chipText: ['229:1060', '229:1276'], hubs: ['229:1061'], index: ['229:1068'], list: [undefined, '229:1277'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['229:1062', '229:1278'], text: ['229:1063', '229:1279'], w: 243 },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['229:1065', '229:1281'], text: ['229:1066', '229:1282'], w: 257 },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['229:1072', '229:1287'], text: ['229:1073', '229:1288'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['229:1069', '229:1284'], text: ['229:1070', '229:1285'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['229:1075', '229:1290'], text: ['229:1076', '229:1291'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['229:1078', '229:1293'], text: ['229:1079', '229:1294'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['229:1081', '229:1296'], text: ['229:1082', '229:1297'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['229:1084', '229:1299'], text: ['229:1085', '229:1300'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['229:1087', '229:1302'], text: ['229:1088', '229:1303'] },
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
