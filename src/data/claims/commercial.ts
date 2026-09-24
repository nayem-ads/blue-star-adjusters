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
  title: 'Commercial Claims | Blue Star Adjusters',
  description: 'Commercial claims have more code requirements, more stakeholders and more ways to undervalue the loss. We write the scope first, from your books.',
  header: ['230:10213', '230:10643'] as const,
  footer: ['230:10615', '230:10830'] as const,
  callBar: '230:10831',
};

const lead = "Commercial claims are more complex: more code requirements, more stakeholders, more ways for carriers to undervalue the loss. Michael's development background means nothing gets missed.";

export const hero = {
  img: { d: '230:10210', m: '230:10618', alt: 'Fire-damaged commercial interior, walls and ceiling blackened by smoke.' },
  eyebrow: 'Commercial Claims',
  title: 'Your Business.\nFully Recovered.',
  lead,
  leadOnMobile: false,
  caption: false,
  nodes: {
    section: ['230:10209', '230:10617'], img: ['230:10210', '230:10618'], content: ['230:10214', '230:10645'],
    eyebrow: ['230:10215', '230:10646'], title: ['230:10216', '230:10647'], lead: ['230:10905'], ctas: ['230:10217', '230:10654'],
    cta1: ['230:10218', '230:10655'], cta2: ['230:10219', '230:10656'], trust: ['230:10220', '230:10648'], trustRow: [undefined, '230:10649'],
    trust1: ['230:10221', '230:10650'], trust2: ['230:10223', '230:10653'], trust3: ['230:10225', '230:10652'], ruler: ['230:10226'],
  },
} as const;

export const scope = { lead };

export const cta = { nodes: ctaNodes('230:10600', '230:10815') };
