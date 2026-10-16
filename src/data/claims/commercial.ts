// Commercial Claims (Figma desktop 230:10208, mobile 230:10616). Copy from design/text/230-10208.json + 230-10616.json.
// Node pairs are [desktop id, mobile id]. No Related section on this page (its own § 03 Index replaces it).

// Every claims frame numbers its CTA children in the same order, so the kit ids are offsets of the section ids.
// (Shared with the Wildfire and Wind pages.)
const at = (id: string, k: number) => { const [a, b] = id.split(':'); return `${a}:${Number(b) + k}`; };
export const ctaNodes = (d: string, m: string) => ({
  section: [d, m], heading: [undefined, at(m, 1)], title: [at(d, 2), at(m, 2)], body: [at(d, 3), at(m, 3)], block: [at(d, 4)],
  phone: [at(d, 5), at(m, 4)], label: [at(d, 6), at(m, 5)], number: [at(d, 7), at(m, 6)], rule: [at(d, 8), at(m, 7)],
  hours: [at(d, 9), at(m, 8)], hoursText: [at(d, 11), at(m, 10)], buttons: [at(d, 12), at(m, 11)],
  cta1: [at(d, 13), at(m, 12)], cta2: [at(d, 14), at(m, 13)], wave: [at(d, 1), at(m, 14)],
} as const);

export const page = {
  title: 'Commercial Public Adjuster for Business Claims | Blue Star',
  description: 'Commercial public adjuster for business claims. Lost income, contingent business interruption, tenant improvements, equipment and code. Free review.',
  header: ['230:10213', '230:10643'] as const,
  footer: ['230:10615', '230:10830'] as const,
  callBar: '230:10831',
};


export const hero = {
  img: { d: '230:10210', m: '230:10618', alt: 'Fire-damaged commercial interior, walls and ceiling blackened by smoke.' },
  eyebrow: 'Your Business. Fully Recovered.',
  title: 'Commercial Public Adjuster for Business Property Claims',
  titleClass: 'bs-cm-h1 lg:t-display-l lg:w-[900px] text-balance',
  lead: 'A commercial public adjuster is a licensed adjuster who works for the business owner on a property claim, not for the insurance company. Blue Star Adjusters reads your commercial policy, measures the physical loss, has a forensic accountant build your lost income from your books, and negotiates the claim with your insurer. A senior adjuster leads every claim, from the first call to the final settlement.',
  caption: false,
  nodes: {
    section: ['230:10209', '230:10617'], img: ['230:10210', '230:10618'], content: ['230:10214', '230:10645'],
    eyebrow: ['230:10215', '230:10646'], title: ['230:10216', '230:10647'], lead: ['230:10905'], ctas: ['230:10217', '230:10654'],
    cta1: ['230:10218', '230:10655'], cta2: ['230:10219', '230:10656'], trust: ['230:10220', '230:10648'], trustRow: [undefined, '230:10649'],
    trust1: ['230:10221', '230:10650'], trust2: ['230:10223', '230:10653'], trust3: ['230:10225', '230:10652'], ruler: ['230:10226'],
  },
} as const;

export const scope = {
  title: 'What a Commercial Public Adjuster Does on a Business Claim',
  lead: 'Commercial claims are more complex: more code requirements, more stakeholders, more ways for carriers to undervalue the loss.',
  after: 'Blue Star is licensed in California, Nevada, Oregon, Washington, Arizona and Colorado.',
};

// New content blocks (kit sections). Copy strings use md(): [text](/route/), **bold**, *italic*.
export const businessIncome = {
  chip: '§ 03', id: 'cm-bi', bg: 'white' as const,
  title: 'Business Interruption Claims: How Lost Income Is Measured',
  body: [
    'Your property can be rebuilt. The months your doors were closed have to be proven in numbers.',
    'Business income coverage pays the net income you would have earned, plus the normal operating expenses that keep running, payroll included. That is how the standard ISO business income form defines it. It is triggered by direct physical loss or damage from a covered cause. A shutdown with no physical damage usually isn\'t covered.',
    'What decides the size of the claim:',
  ],
  list: [
    '**The period of restoration.** In the standard form, income loss starts counting 72 hours after the damage. It ends when the property should be repaired with reasonable speed, or when you reopen at a new permanent location.',
    '**Extended business income.** Revenue rarely snaps back the day you reopen. The standard form pays for a set number of days after reopening, and an option called the extended period of indemnity can lengthen it.',
    '**Extra expense.** The costs you take on to keep operating, such as temporary space, rented equipment and advertising. In the standard form these start right away, with no waiting period.',
    '**Coinsurance.** If your business income limit is lower than the policy requires, the carrier reduces what it pays in proportion. Coinsurance doesn\'t apply to extra expense.',
  ],
  after: ['The carrier may bring its own accountant. Ours works for you and builds the claim from your books.'],
};

export const contingent = {
  chip: '§ 04', id: 'cm-cbi', bg: 'paper' as const,
  title: 'Contingent Business Interruption: When the Damage Is Somewhere Else',
  body: [
    'The standard business income form responds to damage at your own premises. Sometimes the fire is at your supplier, or at the anchor store that brings your customers in.',
    'That loss falls under dependent property coverage. The standard ISO versions are endorsements, and some cover only the businesses named on a schedule. We read the schedule first.',
  ],
  list: [
    '**Contributing location.** A supplier your business depends on for materials or components.',
    '**Recipient location.** A customer your business relies on to buy its goods or services.',
    '**Leader location.** A nearby business that draws customers to you.',
  ],
  after: ['A related coverage, civil authority, can pay when a government order blocks access to your property because of damage elsewhere. It has its own waiting period and a short time limit, set by your form\'s edition.'],
};

export const tenant = {
  chip: '§ 05', id: 'cm-ti', bg: 'white' as const,
  title: 'Tenant Improvements vs. Building: Whose Policy Pays',
  body: [
    'A tenant\'s build out sits inside someone else\'s building. Flooring, lighting and counters installed for a tenant are called improvements and betterments. Once permanently installed, they can\'t be removed when the tenant moves out.',
    'So two policies can point at each other. The landlord\'s carrier can say the build out belongs to the tenant. The tenant\'s carrier can say it became part of the building.',
    'We read the lease beside both policies, so the improvements are claimed under the right one.',
  ],
};

export const equipment = {
  chip: '§ 06', id: 'cm-eq', bg: 'paper' as const,
  title: 'Inventory and Equipment',
  body: [
    'Actual cash value is the most common way a commercial policy values property. Unless the policy defines it otherwise, actual cash value in California means fair market value. Replacement cost pays for new property of like kind and quality.',
    'Which one your policy uses changes every line on the inventory. We price stock, fixtures and machinery at replacement cost where the policy allows it.',
    'Equipment that failed on its own is a different claim from equipment that burned. Most commercial property policies exclude boiler and machinery losses. That risk is covered by a separate policy, sold under names like machinery breakdown or systems breakdown.',
  ],
};

export const code = {
  chip: '§ 07', id: 'cm-code', bg: 'white' as const,
  title: 'Code Upgrades on a Commercial Rebuild',
  body: [
    'Often the city won\'t let a commercial building go back the way it was.',
    'Upgrades such as seismic bracing and fire sprinklers can apply once the permit is pulled. Ordinance or law coverage can pay for the undamaged portion of the building, its demolition, and the higher cost to rebuild to code. That last part needs replacement cost in effect.',
    'Code work also costs time. In the standard business income form, the period of restoration doesn\'t include extra time caused by enforcing building codes. We read whether your policy changes that, and we meet building officials early so the scope reflects what the city will actually require.',
    '[Ordinance or law coverage](/claims/code-upgrades/)',
  ],
};

export const proof = {
  chip: '§ 08', id: 'cm-ih',
  title: 'Xactimate Estimates and Industrial Hygienist Reports',
  body: [
    'When the carrier\'s estimate is written in Xactimate, we rebuild it line by line, trade by trade, priced to current code.',
    'On a smoke loss, an industrial hygienist (IH) tests the building for combustion byproducts. That report shapes what gets cleaned and what gets replaced. We read it before the carrier does, so its findings land in the scope and not in a footnote.',
  ],
  result: { title: 'Smoke damage to a home.', text: 'Offered $17,000. Settled for about $1.1 million, after an industrial hygienist proved combustion byproducts in porous materials and doors.' },
  disclaimer: 'Results reflect specific losses and policies. Past results don\'t guarantee a similar outcome.',
  link: '[Fire and smoke damage claims](/claims/fire-smoke-damage/)',
};

export const attorney = {
  chip: '§ 09', id: 'cm-atty', bg: 'white' as const,
  title: 'Demand Packages and Your Attorney',
  body: [
    'We don\'t give legal advice. When a claim needs counsel, we work alongside your attorney.',
    'What we bring is the record. The scope, the income calculation, the IH findings and the carrier\'s own estimate, side by side in one claim package.',
  ],
};

export const notFor = {
  chip: '§ 10', id: 'cm-not', bg: 'paper' as const,
  title: 'When a Commercial Public Adjuster May Not Be Worth It',
  body: ['On a small loss, or when the carrier\'s offer is already fair, our fee may outweigh what we add. We\'ll tell you so at the free review, before you sign anything.'],
};

export const faq = {
  chip: '§ 11', id: 'cm-faq', bg: 'white' as const,
  title: 'Questions About Hiring a Commercial Public Adjuster',
  items: [
    { q: 'How much does it cost to hire a commercial public adjuster?', a: ['No upfront cost. We\'re paid a percentage of what we recover. In California, our fee can never leave you with less than your insurer had already paid before you hired us. The review is free.', '[Public adjuster fees, explained](/fees/)'] },
    { q: 'How long does a commercial insurance claim take?', a: 'Often longer with a public adjuster, not shorter. A 2010 Florida state study of claims at Citizens Property Insurance (OPPAGA Report 10-06) found that claims with a public adjuster took longer to settle and paid more before fees. More of the loss gets measured and argued, and that takes time.' },
    { q: 'How is a commercial claim different from a residential claim?', a: 'There are more coverages and more people with a stake in the outcome. A business claim can include lost income, extra expense, a landlord\'s policy, equipment, inventory and code work, all on one loss. Each one is measured on its own.' },
    { q: 'When should a business call a public adjuster?', a: ['As early as you can, before the first estimate is final and before anything is thrown away. If you already have an offer, it\'s often not too late.', '[When is it too late to hire a public adjuster?](/faq/)'] },
    { q: 'Should I give the insurance company\'s accountant everything it asks for?', a: 'Give what the policy requires. Your policy lets the carrier examine and copy your books and records. Know what each record shows before it goes out. We build the income claim with our forensic accountant from those same records.' },
    { q: 'Does business interruption insurance cover a government ordered shutdown?', a: 'Usually not on its own. The California Department of Insurance says business interruption coverage requires direct physical loss or damage, and that civil authority coverage also requires physical damage. Most commercial policies also exclude loss from a virus.' },
  ],
};

export const cta = { nodes: ctaNodes('230:10600', '230:10815') };
