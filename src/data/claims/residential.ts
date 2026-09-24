// Residential Claims (Figma desktop 226:698, mobile 226:1106). Copy verified against design context (qa/dc3/226-704, 226-881, 226-1058, 228-891, 226-1090).
// Node pairs are [desktop id, mobile id]. Middle sections (Buckets, Index, Estimate) are page-specific: src/sections/residential/.

export const page = {
  title: 'Residential Claims | Blue Star Adjusters',
  description: "When your home is damaged, your insurer sends their adjuster. We send ours: a developer who knows exactly what your rebuild costs and won't let the carrier set the scope.",
  header: ['226:703', '226:1133'] as const,
  footer: ['226:1105', '226:1320'] as const,
  callBar: '226:1321',
};

export const hero = {
  img: { d: '226:700', m: '226:1108', alt: 'A wood frame house and a car burned out after a fire, the brick chimney still standing.' },
  eyebrow: 'Residential Claims',
  title: 'Your Home.\nFully Recovered.',
  // Mobile renders this lead at the top of Buckets (226:1504), not in the hero.
  lead: "When your home is damaged, your insurer sends their adjuster. We send ours: a developer who knows exactly what your rebuild costs and won't let the carrier set the scope.",
  leadOnMobile: false,
  nodes: {
    section: ['226:699', '226:1107'], img: ['226:700', '226:1108'], content: ['226:704', '226:1135'],
    eyebrow: ['226:705', '226:1136'], title: ['226:706', '226:1137'], lead: ['226:1395'], ctas: ['226:707', '226:1144'],
    cta1: ['226:708', '226:1145'], cta2: ['226:709', '226:1146'], trust: ['226:710', '226:1138'], trustRow: [undefined, '226:1139'],
    trust1: ['226:711', '226:1140'], trust2: ['226:713', '226:1143'], trust3: ['226:715', '226:1142'],
    ruler: ['226:716'], caption: ['226:878'], captionText: [undefined, '226:1134'],
  },
} as const;

export const cta = {
  nodes: {
    section: ['226:1090', '226:1305'], heading: [undefined, '226:1306'], title: ['226:1092', '226:1307'], body: ['226:1093', '226:1308'],
    block: ['226:1094'], phone: ['226:1095', '226:1309'], label: ['226:1096', '226:1310'], number: ['226:1097', '226:1311'], rule: ['226:1098', '226:1312'],
    hours: ['226:1099', '226:1313'], hoursText: ['226:1101', '226:1315'], buttons: ['226:1102', '226:1316'],
    cta1: ['226:1103', '226:1317'], cta2: ['226:1104', '226:1318'], wave: ['226:1091', '226:1319'],
  },
} as const;
