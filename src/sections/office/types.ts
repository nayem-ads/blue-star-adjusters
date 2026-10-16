// Office template data (one file per office in src/data/offices). n = Figma node ids per role: [desktop, mobile].
// Copy strings in hero.lead, blocks and FAQ answers support the kit's inline markdown: [text](/route/), **bold**, *italic*.
export type OfficeRowKind = 'address' | 'phone' | 'email' | 'hours' | 'license';
export interface OfficeLink { label: string; href: string }
/** Page body between Hero and Cta, in content order. 'office' | 'local' | 'state' place the fixed design sections. */
export type OfficeBlock =
  | { type: 'office' }
  | { type: 'local' }
  | { type: 'state' }
  | { type: 'claims'; title: string; links: OfficeLink[]; after?: string }
  | {
      type: 'prose'; id: string; title: string; sub?: string;
      body?: string[]; list?: string[]; listStyle?: 'bullet' | 'number'; after?: string[];
      note?: string; links?: string; buttons?: boolean;
    }
  | { type: 'faq'; id: string; title: string; items: { q: string; a: string }[] }
  | { type: 'links'; id: string; title: string; links: OfficeLink[] };
export interface OfficeData {
  route: string;
  title: string;
  description: string;
  city: string;
  state: string; // two-letter chip text
  hero: { eyebrow: string; h1: string; lead: string; headOffice: boolean; alt: string };
  // label overrides the row kind's default label (e.g. an 'address' row labelled "Head office").
  office: { label: string; labelWidthM?: number; rows: { kind: OfficeRowKind; value: string; label?: string }[] };
  local: string | null; // Local line band
  rule: { cite: string; lead: string; leadBold: string | null; line: string };
  blocks: OfficeBlock[];
  // labelWidthM: Figma's mobile text box width for the label, where the browser's measure differs by > 1px.
  n: Record<string, [string | null, string | null]>;
}
export type Bg = 'paper' | 'white';
/** data-node / data-node-m attributes for a role key. */
export const nodes = (d: OfficeData, key: string) => {
  const v = d.n[key];
  return v ? { 'data-node': v[0] ?? undefined, 'data-node-m': v[1] ?? undefined } : {};
};
/** Phone shown on this office's call buttons: the office's local number (office phone row). */
export const officePhone = (d: OfficeData) => d.office.rows.find((r) => r.kind === 'phone')?.value ?? '(888) 971-2524';
