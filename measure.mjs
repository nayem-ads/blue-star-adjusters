import { chromium } from 'playwright-core';
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await page.goto('http://localhost:4321/claims/residential/', { waitUntil: 'networkidle' });
const h = await page.evaluate(() => {
  const els = [...document.querySelectorAll('main > section, footer, header')];
  return els.map(e => ({ tag: e.tagName, cls: e.className, h: e.getBoundingClientRect().height }));
});
console.log(h);
await browser.close();
