// Residential Claims (Figma desktop 226:698, mobile 226:1106). Copy verified against design context (qa/dc3/226-704, 226-881, 226-1058, 228-891, 226-1090).
// Node pairs are [desktop id, mobile id]. Middle sections (Buckets, Index, Estimate) are page-specific: src/sections/residential/.

export const page = {
  title: 'Public Adjuster for Home Insurance Claims | Blue Star',
  description: 'A public adjuster for your home insurance claim, working for you. We measure the dwelling, contents and living costs the carrier missed. Free review.',
  header: ['226:703', '226:1133'] as const,
  footer: ['226:1105', '226:1320'] as const,
  callBar: '226:1321',
};

export const hero = {
  img: { d: '226:700', m: '226:1108', alt: 'A wood frame house and a car burned out after a fire, the brick chimney still standing.' },
  // Mike's line moves to the eyebrow; the H1 carries the primary keyword. The lead is the direct answer (desktop and mobile).
  eyebrow: 'Your Home. Fully Recovered.',
  title: 'Public Adjuster for Home Insurance Claims',
  titleClass: 'tm-display lg:t-display-l',
  lead: 'A public adjuster for a home insurance claim is a licensed adjuster who works for you, not the insurance company. We read your policy and measure the full loss: the house, other structures, contents and the cost of living elsewhere. We build the claim and negotiate it with your insurer. A senior adjuster leads every claim, from the first call to the final settlement. You decide on every offer.',
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

// New content blocks (kit sections). Copy from pages/residential/content.md, word for word.
export const depreciation = {
  chip: '§ 05', id: 'res-depreciation-title',
  title: 'Depreciation Is Held Back. Not Lost.',
  body: [
    'If your policy makes you repair or replace before it pays full replacement cost, California law has the insurer pay actual cash value until you do. The amount held back, called recoverable depreciation, comes after. That second payment runs on a deadline.',
    "In California, a policy can't give you less than 12 months from the first actual cash value payment to collect full replacement cost. After a declared state of emergency, the minimum is 36 months. If you act in good faith and hit delays outside your control, your insurer must grant six month extensions. The law names permit delays, material shortages and contractors who aren't available.",
    "After a total loss, you may rebuild or buy somewhere else. California law bars the policy from limiting or denying replacement cost or code upgrade cost for that choice. The payment is capped at what rebuilding at the original site would cost. The land at the new site can't be deducted.",
    '[Wildfire insurance claims](/claims/wildfire/) · [Code upgrades](/claims/code-upgrades/)',
  ],
};

export const beforeSign = {
  chip: '§ 06', id: 'res-before-sign-title',
  title: 'Before You Sign With Any Public Adjuster',
  list: [
    '**Check the license.** California requires a public adjuster to hold a state license. Ours is CA DOI License No. 6015234.',
    '**Ask who will work your claim.** Ours is led by a senior adjuster, from the first call to the final settlement.',
    '**Find the fee in the contract.** California requires the contract to state the fee and to say "We represent the insured only."',
    "**Don't sign on the spot with anyone, including us.** In California you may cancel within three business days of signing and receiving the contract, or five calendar days in a declared catastrophic disaster area.",
    '**Know the solicitation rules.** California bars a public adjuster from soliciting you during the loss. That covers the time responders are on site or an evacuation order is in effect. Contact between 6 p.m. and 8 a.m. is barred unless you asked for it.',
  ],
  after: ['[How a public adjuster works on your claim](/how-it-works/)'],
};

export const notFor = {
  chip: '§ 07', id: 'res-not-for-title',
  title: 'When You May Not Need Us',
  body: [
    "On a small loss, or when the carrier's offer is already fair, our fee may outweigh what we add. We'll tell you so at the free review, before you sign anything. And no public adjuster can recover more than your policy pays.",
  ],
};

export const faq = {
  chip: '§ 08', id: 'res-faq-title',
  title: 'Questions About Hiring a Public Adjuster for a Home Insurance Claim',
  items: [
    { q: 'What does a public adjuster do on a home insurance claim?',
      a: 'A public adjuster reads your policy, measures and documents the damage, builds the claim and negotiates it with your insurer. They work for you, not the insurance company. On a home claim that covers all four buckets: dwelling, other structures, contents and loss of use.' },
    { q: 'My insurance company already sent an adjuster. Why would I need another one?',
      a: 'Their adjuster works for the insurance company. A public adjuster is licensed to work only for you, the policyholder. We start from their estimate and measure what it left out.' },
    { q: 'How much does a public adjuster cost for a home claim?',
      a: ["No upfront cost. We're paid a percentage of what we recover. In California, our fee can never leave you with less than your insurer had already paid before you hired us. The fee is written into the contract before you sign.", '[Public adjuster fees, explained](/fees/)'] },
    { q: 'Can a public adjuster reopen a denied or underpaid home claim?',
      a: ["Yes, when the policy supports it. We read the denial letter against the policy language and measure the scope the carrier left out. Some denials follow the policy, like the business exclusion above, and we'll say so at the free review.", '[Denied or underpaid claims](/claims/denied-or-underpaid/)'] },
    { q: 'When is it too late to hire a public adjuster?',
      a: ["If you already have an offer, it's often not too late. Bring us in before you accept it, and before anything is thrown away. That gives us the most room to work.", '[More answers in our FAQ](/faq/)'] },
    { q: 'Will a public adjuster slow down my claim?',
      a: 'It can. A Florida state study of Citizens Property Insurance claims (OPPAGA Report 10-06) found that claims with a public adjuster took longer to close and paid more before fees. Outside catastrophes, the median was 115 days with a public adjuster and 41 days without. More of the loss gets measured and argued, and that takes time.' },
  ],
};

export const related = {
  chip: '§ 09', id: 'res-related-title',
  title: 'Related',
  list: [
    '[How a public adjuster works on your claim](/how-it-works/)',
    '[What to do in the first 48 hours](/first-48-hours/)',
    '[Public adjuster fees, explained](/fees/)',
    '[Claim results](/results/)',
    '[Our offices](/locations/)',
  ],
};
