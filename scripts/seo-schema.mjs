// Astro integration (runs after smart-quotes): SEO output that needs the whole built site.
// 1. JSON-LD on every page: the firm (ProfessionalService), WebSite, WebPage, BreadcrumbList, and FAQPage
//    built from the FAQ rows actually rendered on the page (elements marked data-faq-q / data-faq-a).
// 2. sitemap.xml listing only pages that are indexable (no robots noindex meta).
// 3. robots.txt: blocks everything unless PUBLIC_INDEXABLE=true (production), then points to the sitemap.
// Facts used here come from approved site copy only (firm name, toll free line, head office, licensed states, hours).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = (process.env.PUBLIC_SITE_URL || 'https://bluestaradjusters.com').replace(/\/$/, '');
const INDEXABLE = process.env.PUBLIC_INDEXABLE === 'true';
const ORG_ID = `${SITE}/#org`;
const SITE_ID = `${SITE}/#website`;

const ORG = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Blue Star Adjusters',
  legalName: 'Blue Star Adjusters LLC',
  description: 'Licensed public adjusters who represent policyholders on home and business property insurance claims.',
  url: `${SITE}/`,
  image: `${SITE}/hero-poster.jpg`,
  telephone: '+1-888-971-2524',
  address: { '@type': 'PostalAddress', streetAddress: '1610 R Street, Suite 300', addressLocality: 'Sacramento', addressRegion: 'CA', postalCode: '95811', addressCountry: 'US' },
  areaServed: ['California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado'].map((name) => ({ '@type': 'State', name })),
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' }],
  founder: { '@type': 'Person', name: 'Michael Rapport', jobTitle: 'Founding Principal' },
};

function walk(dir, out = []) {
  for (const f of fs.readdirSync(dir)) { const p = path.join(dir, f); if (fs.statSync(p).isDirectory()) walk(p, out); else if (f === 'index.html') out.push(p); }
  return out;
}
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#39;|&#x27;/g, "'").replace(/&nbsp;/g, ' ');
const text = (html) => decode(html.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const shortTitle = (t) => t.split(' | ')[0].trim();

// Text inside the element that opens at index i (balanced on the same tag name).
function innerAt(html, i) {
  const tag = html.slice(i + 1).match(/^[a-zA-Z0-9]+/)[0];
  const re = new RegExp(`<${tag}\\b|</${tag}>`, 'g');
  re.lastIndex = html.indexOf('>', i) + 1; let depth = 1, m;
  while ((m = re.exec(html))) { depth += m[0].startsWith('</') ? -1 : 1; if (depth === 0) return html.slice(html.indexOf('>', i) + 1, m.index); }
  return '';
}
function faqs(html) {
  const out = []; const re = /<[a-zA-Z0-9]+[^>]*\bdata-faq-(q|a)\b[^>]*>/g; let m, q = null;
  while ((m = re.exec(html))) {
    const t = text(innerAt(html, m.index));
    if (m[1] === 'q') q = t; else if (q && t) { out.push({ q, a: t }); q = null; }
  }
  return out;
}

export default function seoSchema() {
  return {
    name: 'seo-schema',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const root = fileURLToPath(dir);
        const pages = walk(root).map((file) => {
          const route = '/' + path.relative(root, path.dirname(file)).split(path.sep).join('/') + '/';
          return { file, route: route.replace(/^\/\.?\/$/, '/').replace('//', '/'), html: fs.readFileSync(file, 'utf8') };
        }).filter((p) => !/http-equiv="refresh"/.test(p.html));
        const names = new Map(pages.map((p) => [p.route, shortTitle(decode((p.html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]))]));
        names.set('/', 'Home');
        let nFaq = 0;
        for (const p of pages) {
          const title = decode((p.html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]);
          const desc = decode((p.html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
          const url = SITE + p.route;
          const crumbs = [{ route: '/', name: 'Home' }];
          const segs = p.route.split('/').filter(Boolean);
          segs.forEach((_, i) => { const r = '/' + segs.slice(0, i + 1).join('/') + '/'; if (names.has(r) && r !== '/') crumbs.push({ route: r, name: names.get(r) }); });
          const graph = [
            ORG,
            { '@type': 'WebSite', '@id': SITE_ID, url: `${SITE}/`, name: 'Blue Star Adjusters', publisher: { '@id': ORG_ID } },
            { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description: desc || undefined, isPartOf: { '@id': SITE_ID }, about: { '@id': ORG_ID }, ...(crumbs.length > 1 ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}) },
          ];
          if (crumbs.length > 1) graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + c.route })) });
          const f = faqs(p.html);
          if (f.length) { nFaq++; graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: f.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }); }
          const ld = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
          fs.writeFileSync(p.file, p.html.replace('</head>', `${ld}</head>`));
        }
        const live = pages.filter((p) => !/<meta name="robots" content="[^"]*noindex/.test(p.html));
        fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${live.map((p) => `  <url><loc>${SITE}${p.route}</loc></url>`).join('\n')}\n</urlset>\n`);
        fs.writeFileSync(path.join(root, 'robots.txt'), INDEXABLE ? `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
        console.log(`seo-schema: JSON-LD on ${pages.length} pages (${nFaq} with FAQPage), sitemap ${live.length} URLs, robots ${INDEXABLE ? 'open' : 'blocked'}`);
      },
    },
  };
}
