// Wildfire (Figma desktop 234:917, mobile 234:1325). Copy from design/text/234-917.json + 234-1325.json.
// Node pairs are [desktop id, mobile id].
import { ROUTES } from '../site';
import { ctaNodes } from './commercial';

export const page = {
  title: 'Wildfire Claims | Blue Star Adjusters',
  description: 'Total loss or standing home, they are two different claims. What California policyholders are owed after a declared state of emergency.',
  header: ['234:922', '234:1352'] as const,
  footer: ['234:1324', '234:1539'] as const,
  callBar: '234:1540',
};

export const hero = {
  img: { d: '234:919', m: '234:1327', alt: 'Burned-out home after a wildfire, only the chimney left standing.' },
  eyebrow: 'Wildfire',
  titleClass: 'tm-display lg:t-display-l',
  title: 'Total Loss or Standing Home.\nTwo Different Claims.',
  caption: false,
  nodes: {
    section: ['234:918', '234:1326'], img: ['234:919', '234:1327'], content: ['234:923', '234:1354'],
    eyebrow: ['234:924', '234:1355'], title: ['234:925', '234:1356'], ctas: ['234:926', '234:1363'],
    cta1: ['234:927', '234:1364'], cta2: ['234:928', '234:1365'], trust: ['234:929', '234:1357'], trustRow: [undefined, '234:1358'],
    trust1: ['234:930', '234:1359'], trust2: ['234:932', '234:1362'], trust3: ['234:934', '234:1361'], ruler: ['234:935'],
  },
} as const;

export const related = {
  index: '§ 07',
  nodes: { section: ['234:1277', '234:1493'], chip: ['234:1278', '234:1494'], chipText: ['234:1279', '234:1495'], hubs: ['234:1280'], index: ['234:1287'], list: [undefined, '234:1496'] },
  hubs: [
    { label: 'Residential Claims', href: ROUTES.residential, node: ['234:1281', '234:1497'], text: ['234:1282', '234:1498'] },
    { label: 'Commercial Claims', href: ROUTES.commercial, node: ['234:1284', '234:1500'], text: ['234:1285', '234:1501'], w: 257 },
  ],
  links: [
    { label: 'Fire & Smoke', href: ROUTES.fireSmoke, node: ['234:1288', '234:1503'], text: ['234:1289', '234:1504'] },
    { label: 'Water & Plumbing', href: ROUTES.waterDamage, node: ['234:1291', '234:1506'], text: ['234:1292', '234:1507'] },
    { label: 'Wind, Hail & Falling Trees', href: ROUTES.windHailTrees, node: ['234:1294', '234:1509'], text: ['234:1295', '234:1510'] },
    { label: 'Contents & Valuables', href: ROUTES.contentsValuables, node: ['234:1297', '234:1512'], text: ['234:1298', '234:1513'] },
    { label: 'Additional Living Expenses', href: ROUTES.additionalLiving, node: ['234:1300', '234:1515'], text: ['234:1301', '234:1516'] },
    { label: 'Code Upgrades', href: ROUTES.codeUpgrades, node: ['234:1303', '234:1518'], text: ['234:1304', '234:1519'] },
    { label: 'Denied or Underpaid', href: ROUTES.deniedOrUnderpaid, node: ['234:1306', '234:1521'], text: ['234:1307', '234:1522'] },
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
    { chip: '§ 02', title: "The builder's question on a total loss.", id: 'wf-builder-title',
      body: "Can the foundation be reused? That's an engineer's call. Heat damaged concrete and rebar often can't carry a new house, and that decision moves the rebuild number more than almost anything else.",
      nodes: { block: ['234:1172', '234:1418'], chip: ['234:1173', '234:1419'], chipText: ['234:1174', '234:1420'], title: ['234:1175', '234:1421'], body: ['234:1176', '234:1422'] } },
    { chip: '§ 03', title: 'Underinsured is common.', id: 'wf-underinsured-title',
      body: "After Washington's August 2023 Gray and Oregon Road fires, 244 of 355 significant dwelling claims paid out their full limits. Once you hit the dwelling limit, the other coverages have to carry the rebuild. Code upgrades. Extended replacement cost. Debris removal.",
      nodes: { block: ['234:1177', '234:1423'], chip: ['234:1178', '234:1424'], chipText: ['234:1179', '234:1425'], title: ['234:1180', '234:1426'], body: ['234:1181', '234:1427'] } },
  ],
} as const;
