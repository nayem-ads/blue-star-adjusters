// Functional QA on the production build: crawl every page, check links, headings, robots, overflow,
// menu, forms. Usage: (serve dist on :4400) node qa/functional.mjs
import { chromium } from 'playwright-core';
const BASE = process.env.BASE || 'http://127.0.0.1:4400';
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const ctx = await browser.newContext();
const page = await ctx.newPage();
const NEW = ['/claims/residential/', '/claims/commercial/', '/claims/fire-smoke-damage/', '/claims/wildfire/', '/claims/water-damage/', '/claims/wind-hail-trees/', '/claims/contents-valuables/', '/claims/additional-living-expenses/', '/claims/code-upgrades/', '/claims/denied-or-underpaid/', '/results/', '/who-we-serve/', '/locations/', '/locations/california/sacramento/', '/locations/california/santa-monica/', '/locations/california/san-francisco/', '/locations/nevada/reno/', '/locations/oregon/portland/', '/locations/washington/seattle/', '/locations/arizona/scottsdale/', '/faq/', '/first-48-hours/'];
const START = ['/', '/about/', '/contact/', '/home-b/', '/free-claim-review/thank-you/', ...NEW]; const linkedFrom = {}; const seen = new Set(START); const queue = [...START]; const issues = []; const pages = [];
const status = {}; const pctSeen = []; const redirects = []; const notes = [];
while (queue.length) {
  const path = queue.shift();
  const res = await page.goto(BASE + path, { waitUntil: 'load' });
  status[path] = res.status();
  if (/http-equiv="?refresh/i.test(await res.text())) { await page.waitForURL((u) => new URL(u).pathname !== path, { timeout: 5000 }).catch(() => 0); await page.waitForLoadState('load'); redirects.push(`${path} -> ${new URL(page.url()).pathname}`); continue; }
  const info = await page.evaluate(() => ({
    h1: document.querySelectorAll('h1').length,
    title: document.title,
    robots: document.querySelector('meta[name=robots]')?.content || 'index',
    desc: document.querySelector('meta[name=description]')?.content?.length || 0,
    hashLinks: [...document.querySelectorAll('a[href="#"], a:not([href])')].length,
    links: [...document.querySelectorAll('a[href]')].map((a) => a.getAttribute('href')),
    tel: [...document.querySelectorAll('a[href^="tel:"]')].map((a) => a.getAttribute('href')),
    forms: [...document.querySelectorAll('form[data-lead-form]')].map((f) => ({ action: f.action, cc: f.querySelector('[name=_cc]')?.value, next: f.querySelector('[name=_next]')?.value })),
    imgsNoAlt: [...document.images].filter((i) => !i.hasAttribute('alt')).length,
    notes: (document.body.innerText.match(/\[(CLIENT|LEGAL)[^\]]*\]/g) || []),
    pct: (document.body.innerText.match(/[^.\n]{0,40}\d+\s?%[^.\n]{0,40}/g) || []),
    stub: !!document.querySelector('meta[name=robots][content*=noindex]') && /coming soon/i.test(document.body.innerText),
  }));
  pages.push({ path, status: res.status(), ...info, links: undefined });
  if (info.h1 !== 1) issues.push(`${path}: ${info.h1} h1`);
  if (info.hashLinks) issues.push(`${path}: ${info.hashLinks} dead/# links`);
  if (info.imgsNoAlt) issues.push(`${path}: ${info.imgsNoAlt} img without alt`);
  if (info.notes.length) issues.push(`${path}: design note rendered: ${info.notes.join(' | ')}`);
  if (NEW.includes(path) && info.stub) issues.push(`${path}: still a StubPage`);
  for (const t of info.pct) pctSeen.push(`${path}: ${t.trim()}`);
  for (const t of info.tel) if (t !== 'tel:+19165071005') issues.push(`${path}: odd tel ${t}`);
  for (const f of info.forms) if (!f.action.startsWith('https://formsubmit.co/nayem.adsmanager@gmail.com') || f.cc !== 'mike@bluestaradjusters.com' || !f.next.endsWith('/free-claim-review/thank-you/')) issues.push(`${path}: form misconfigured ${JSON.stringify(f)}`);
  for (const l of info.links) {
    if (!l || l.startsWith('tel:') || l.startsWith('mailto:')) continue;
    if (l.startsWith('#')) { const ok = await page.evaluate((id) => !!document.getElementById(id), l.slice(1)); if (!ok) issues.push(`${path}: anchor ${l} has no target`); continue; }
    if (/^https?:/.test(l)) { (l.startsWith('https://www.google.com/maps/') ? notes : issues).push(`${path}: external link ${l}`); continue; }
    const u = new URL(l, BASE + path); const p = u.pathname;
    (linkedFrom[p] ||= new Set()).add(path);
    if (!seen.has(p)) { seen.add(p); queue.push(p); }
  }
}
for (const [p, s] of Object.entries(status)) if (s !== 200) issues.push(`${p}: HTTP ${s}`);
// horizontal overflow at in-between widths
for (const w of [360, 390, 768, 1024, 1100, 1280, 1440]) {
  await page.setViewportSize({ width: w, height: 900 });
  for (const p of ['/', '/home-b/', '/about/michael-rapport/', '/claims/', '/free-claim-review/', '/free-claim-review/thank-you/', '/about/', '/contact/', '/how-it-works/', '/fees/', '/why-blue-star/', ...NEW]) {
    await page.goto(BASE + p, { waitUntil: 'load' });
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    if (sw > w) issues.push(`${p} @${w}: horizontal overflow ${sw}px`);
  }
}
// mobile menu open/close + Esc
await page.setViewportSize({ width: 390, height: 844 });
await page.goto(BASE + '/', { waitUntil: 'load' });
await page.click('[data-menu-open]');
const open = await page.evaluate(() => !document.querySelector('[data-menu]').hidden && document.querySelector('[data-menu-open]').getAttribute('aria-expanded'));
await page.keyboard.press('Escape');
const closed = await page.evaluate(() => document.querySelector('[data-menu]').hidden);
if (open !== 'true' || !closed) issues.push(`menu: open=${open} closedAfterEsc=${closed}`);
// empty submit on FCR must block + show error state
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(BASE + '/free-claim-review/', { waitUntil: 'load' });
let posted = false; page.on('request', (r) => { if (r.url().includes('formsubmit.co')) posted = true; });
await page.click('form[data-lead-form] button[type=submit]');
await page.waitForTimeout(300);
const errs = await page.evaluate(() => document.querySelectorAll('[data-field][data-state=error]').length);
if (posted || errs < 1) issues.push(`fcr empty submit: posted=${posted} errorFields=${errs}`);
// FAQ accordion: keyboard toggle
await page.goto(BASE + '/faq/', { waitUntil: 'load' });
const acc = await page.evaluate(() => [...document.querySelectorAll('button[aria-expanded][aria-controls]')].length);
if (!acc) issues.push('faq: no accordion buttons');
else {
  const b = page.locator('button[aria-expanded][aria-controls]').last(); const before = await b.getAttribute('aria-expanded');
  await b.focus(); await page.keyboard.press('Enter'); await page.waitForTimeout(100); const mid = await b.getAttribute('aria-expanded');
  await page.keyboard.press(' '); await page.waitForTimeout(100); const after = await b.getAttribute('aria-expanded');
  const panelOk = await page.evaluate((id) => !!document.getElementById(id), await b.getAttribute('aria-controls'));
  if (before === mid || mid === after || !panelOk) issues.push(`faq accordion keyboard: ${before}->${mid}->${after} panel=${panelOk}`);
}
// orphans: new pages not linked from any other page
for (const p of NEW) { const from = [...(linkedFrom[p] || [])].filter((x) => x !== p); if (!from.length) notes.push(`${p}: not linked from any page yet (nav decision for Jay)`); }
// 404
const r404 = await page.goto(BASE + '/does-not-exist/'); if (r404.status() !== 404) issues.push('404 page returns ' + r404.status());
await browser.close();
console.log(JSON.stringify({ notes, redirects, percentMentions: pctSeen, pagesCrawled: pages.length, pages: pages.map((p) => `${p.status} ${p.robots === 'index' ? 'INDEX  ' : 'noindex'} h1=${p.h1} ${p.path}  "${p.title}" desc=${p.desc} forms=${p.forms.length}`), issues }, null, 1));
