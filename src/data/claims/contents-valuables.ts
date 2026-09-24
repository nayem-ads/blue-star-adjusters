// Contents & Valuables (Figma desktop 230:698, mobile 230:1106). Copy from design/text/230-698.json + 230-1106.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
export const page = {
  title: 'Contents & Valuables Claims | Blue Star Adjusters',
  description: "Room by room contents inventory for fire and total losses: antiques, fine art, wine and collectibles valued properly, and depreciation recovered.",
  header: ['230:703', '230:1133'] as const,
  footer: ['230:1105', '230:1320'] as const,
  callBar: '230:1321',
};

export const hero = {
  img: { d: '230:700', m: '230:1108', alt: 'Private library with shelves of books and a wine collection.' },
  eyebrow: 'Contents & Valuables',
  title: 'Everything You Owned.\nAccounted For.',
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
  heading: "Emotional ties to personal property make thorough documentation difficult. Most people can't list one room from memory, and what isn't listed isn't paid.",
  imageAlt: 'Gloved hands photographing a sooty vase beside numbered inventory tags',
  items: [
    { icon: 'home', text: 'Room by room inventory built from our databases, your photos and purchase records.' },
    { icon: 'search', text: 'Our inventory specialists document all household belongings with special attention to antiques, fine arts, collectibles, and other items requiring specialized valuation expertise.' },
    { icon: 'document', text: 'If your policy pays replacement cost, we go after the depreciation the carrier held back.' },
  ],
};

export const law = {
  chip: '§ 02',
  heading: 'California total losses.',
  citation: 'SB 495',
  // Body split around the underlined, semibold phrase.
  body: ['On a total loss of a furnished primary residence, the insurer ', 'must offer at least 60% of the contents limit, up to $350,000', ', without an itemized inventory (policies issued or renewed from July 1, 2026).'] as const,
};

export const result = {
  chip: '§ 03',
  heading: 'Result.',
  caseText: 'An estate owner had recovered $6 million on his own and stalled on fine wine and art. The structure settled at $11 million, with $5.2 million more for contents.',
  figure: '$5.2 million',
  figureLabel: 'more for contents',
  disclaimer: "Results reflect specific losses and policies. Past results don't guarantee a similar outcome.",
  imageAlt: 'Household contents being documented for a claim',
};

export const related = {
  index: '§ 04',
  nodes: { section: ['230:1058', '230:1274'], chip: ['230:1059', '230:1275'], chipText: ['230:1060', '230:1276'], hubs: ['230:1061'], index: ['230:1068'], list: [undefined, '230:1277'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['230:1062', '230:1278'], text: ['230:1063', '230:1279'] },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['230:1065', '230:1281'], text: ['230:1066', '230:1282'] },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['230:1078', '230:1293'], text: ['230:1079', '230:1294'] },
    { label: 'Wildfire', href: ROUTES.wildfire, node: ['230:1069', '230:1284'], text: ['230:1070', '230:1285'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['230:1072', '230:1287'], text: ['230:1073', '230:1288'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['230:1075', '230:1290'], text: ['230:1076', '230:1291'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['230:1081', '230:1296'], text: ['230:1082', '230:1297'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['230:1084', '230:1299'], text: ['230:1085', '230:1300'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['230:1087', '230:1302'], text: ['230:1088', '230:1303'] },
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
