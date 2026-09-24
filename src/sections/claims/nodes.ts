// Claims kit helper: data-node attributes from a Figma id pair.
// N = 'desktopId' | ['desktopId', 'mobileId'] (either may be undefined). Usage: <div {...dn(nodes.title)}>.
export type N = string | readonly [string | undefined, (string | undefined)?] | undefined;
export const dn = (n: N): Record<string, string | undefined> =>
  typeof n === 'string' ? { 'data-node': n } : n ? { 'data-node': n[0], 'data-node-m': n[1] } : {};
export const d = (n: N) => (typeof n === 'string' ? n : n?.[0]);
export const m = (n: N) => (typeof n === 'string' ? undefined : n?.[1]);
