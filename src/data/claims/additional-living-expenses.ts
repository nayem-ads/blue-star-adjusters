// Additional Living Expenses (Figma desktop 238:698, mobile 238:1106). Copy from design/text/238-698.json + 238-1106.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Additional Living Expenses (ALE) Claims | Blue Star Adjusters',
  description: "We quantify the additional living expenses you're entitled to while displaced: a comparable rental, meals, mileage, storage and more, at no out of pocket cost.",
  header: ['238:703', '238:1133'] as const,
  footer: ['238:1105', '238:1320'] as const,
  callBar: '238:1321',
};

export const heroLead = "We quantify the additional living expenses you're entitled to while displaced, ensuring your family can live comfortably in the manner you are accustomed, at no out of pocket cost to you.";

export const hero = {
  img: { d: '238:700', m: '238:1108', alt: 'A comfortable home where a displaced family can live while theirs is rebuilt.' },
  eyebrow: 'Additional Living Expenses',
  title: 'Same Size Home.\nSame School District.',
  lead: heroLead,
  leadOnMobile: false,
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
  heading: 'What ALE can include, policy permitting.',
  lead: 'A comparable rental, pet accommodations, extra mileage, meals above your normal budget, storage, utility setup.',
};

export const law = {
  chip: '§ 02',
  title: 'How long.',
  cite: '2060',
  body: ["In California, after a declared state of emergency, at least 24 months, with up to 12 more for delays beyond your control. Under AB 1795, once in effect, ALE on a wildfire smoke claim can't end until the home is restored and cleared for occupancy."],
  id: 'law-title',
  nodes: {
    section: ['238:963', '238:1209'], mark: ['238:964', '238:1210'], rail: ['238:965'], heading: [undefined, '238:1211'],
    chip: ['238:966', '238:1212'], chipText: ['238:967', '238:1213'], title: ['238:968', '238:1214'], button: ['238:969', '238:1223'],
    holder: ['238:970', '238:1215'], crop: ['238:978', '238:1216'],
  },
} as const;

export const detail = {
  img: { d: '238:947', m: '238:1194', alt: 'A comparable rental home, furnished and ready for a displaced family.' },
  height: 640,
  top: 136,
  blocks: [{
    chip: '§ 03', title: 'Business owners.', body: 'Your version is loss of income and extra expense.', id: 'detail-title',
    nodes: { block: ['238:953', '238:1199'], chip: ['238:954', '238:1200'], chipText: ['238:955', '238:1201'], title: ['238:956', '238:1202'], body: ['238:957', '238:1203'] },
  }],
  nodes: { section: ['238:946', '238:1192'], img: ['238:947', '238:1194'], stack: [undefined, '238:1193'], details: ['238:952', '238:1198'] },
} as const;

export const detailLink = { label: 'Commercial', href: ROUTES.commercial, node: ['239:995', '240:950'], text: ['239:996', '240:951'] } as const;

export const related = {
  index: '§ 04',
  nodes: { section: ['238:1058', '238:1274'], chip: ['238:1059', '238:1275'], chipText: ['238:1060', '238:1276'], hubs: ['238:1061'], index: ['238:1068'], list: [undefined, '238:1277'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['238:1062', '238:1278'], text: ['238:1063', '238:1279'] },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['238:1065', '238:1281'], text: ['238:1066', '238:1282'] },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['238:1081', '238:1296'], text: ['238:1082', '238:1297'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['238:1069', '238:1284'], text: ['238:1070', '238:1285'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['238:1072', '238:1287'], text: ['238:1073', '238:1288'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['238:1075', '238:1290'], text: ['238:1076', '238:1291'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['238:1078', '238:1293'], text: ['238:1079', '238:1294'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['238:1084', '238:1299'], text: ['238:1085', '238:1300'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['238:1087', '238:1302'], text: ['238:1088', '238:1303'] },
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
