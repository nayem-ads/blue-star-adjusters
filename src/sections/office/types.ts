// Office template data (one file per office in src/data/offices). n = Figma node ids per role: [desktop, mobile].
export type OfficeRowKind = 'address' | 'phone' | 'email' | 'hours' | 'license';
export interface OfficeData {
  route: string;
  title: string;
  description: string;
  city: string;
  state: string; // two-letter chip text
  hero: { eyebrow: string; h1: string; headOffice: boolean; alt: string };
  office: { label: string; rows: { kind: OfficeRowKind; value: string }[] };
  local: string | null; // Local line (Santa Monica, San Francisco only)
  rule: { cite: string; lead: string; leadBold: string | null; line: string };
  n: Record<string, [string | null, string | null]>;
}
/** data-node / data-node-m attributes for a role key. */
export const nodes = (d: OfficeData, key: string) => {
  const v = d.n[key];
  return v ? { 'data-node': v[0] ?? undefined, 'data-node-m': v[1] ?? undefined } : {};
};
