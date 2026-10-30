// Astro integration (runs after smart-quotes): SEO output that needs the whole built site.
// 1. JSON-LD on every page: the firm (ProfessionalService), WebSite, WebPage (or AboutPage/ContactPage/ProfilePage/CollectionPage),
//    page-specific entities (Local Office ProfessionalService, Claim Service, Founder Person, Article), BreadcrumbList, and FAQPage
//    built from the FAQ rows actually rendered on the page (elements marked data-faq-q / data-faq-a).
// 2. sitemap.xml listing only pages that are indexable (no robots noindex meta).
// 3. robots.txt: open by default unless PUBLIC_INDEXABLE=false, pointing to the sitemap.
// Facts used here come from approved site copy only (firm name, toll free & local lines, head office, licensed states, hours).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = (process.env.PUBLIC_SITE_URL || 'https://bluestaradjusters.com').replace(/\/$/, '');
const INDEXABLE = process.env.PUBLIC_INDEXABLE !== 'false';
const ORG_ID = `${SITE}/#org`;
const SITE_ID = `${SITE}/#website`;
const PERSON_ID = `${SITE}/about/michael-rapport/#person`;

const CREDENTIALS = {
  CA: {
    '@type': 'EducationalOccupationalCredential',
    name: 'California Public Insurance Adjuster Firm License No. 6015234',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '6015234',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'California Department of Insurance', url: 'https://cdicloud.insurance.ca.gov/cal/LicenseNumberSearch' },
  },
  NV: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Nevada Public Adjuster Firm License No. 4263596',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '4263596',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Nevada Division of Insurance', url: 'https://di.nv.gov/nv/r/doi/licensing/search' },
  },
  OR: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Oregon Public Adjuster Firm License No. 3004448214',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '3004448214',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Oregon Division of Financial Regulation', url: 'https://dfr.oregon.gov/help/complaints-licenses/Pages/check-license.aspx' },
  },
  CO: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Colorado Public Adjuster Firm License No. 969283',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '969283',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Colorado Division of Insurance', url: 'https://doi.colorado.gov/for-consumers/consumer-protection' },
  },
  WA: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Washington Public Adjuster Firm License No. 1382428',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '1382428',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Washington Office of the Insurance Commissioner', url: 'https://www.insurance.wa.gov/consumertoolkit/search.aspx' },
  },
  AZ: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Arizona Public Adjuster Firm License No. 3004469742',
    credentialCategory: 'Public Adjuster Firm License',
    identifier: '3004469742',
    recognizedBy: { '@type': 'GovernmentOrganization', name: 'Arizona Department of Insurance and Financial Institutions', url: 'https://difi.az.gov/license-search' },
  },
};

const HOURS = [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' }];
const HEAD_ADDRESS = { '@type': 'PostalAddress', streetAddress: '1610 R Street, Suite 300', addressLocality: 'Sacramento', addressRegion: 'CA', postalCode: '95811', addressCountry: 'US' };
const STATES_SERVED = ['California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Utah', 'Hawaii'].map((name) => ({ '@type': 'State', name }));
const ASSOCIATIONS = [
  { '@type': 'Organization', name: 'National Association of Public Insurance Adjusters (NAPIA)', url: 'https://www.napia.com/' },
  { '@type': 'Organization', name: 'Pacific Coast Association of Public Insurance Adjusters (PCAPIA)', url: 'https://www.pcapia.org/' },
];

const FOUNDER = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Michael Rapport',
  jobTitle: 'Founding Principal',
  description: 'Public adjuster and Founding Principal of Blue Star Adjusters.',
  url: `${SITE}/about/michael-rapport/`,
  worksFor: { '@id': ORG_ID },
  memberOf: ASSOCIATIONS,
};

const ORG = {
  '@type': 'ProfessionalService',
  '@id': ORG_ID,
  name: 'Blue Star Adjusters',
  legalName: 'Blue Star Adjusters LLC',
  slogan: 'Your Claim. Our Fight.',
  description: 'Licensed public adjusters who represent policyholders on home and business property insurance claims.',
  url: `${SITE}/`,
  logo: { '@type': 'ImageObject', '@id': `${SITE}/#logo`, url: `${SITE}/favicon.svg`, contentUrl: `${SITE}/favicon.svg`, caption: 'Blue Star Adjusters' },
  image: `${SITE}/hero-poster.jpg`,
  telephone: '+1-888-971-2524',
  email: 'mike@bluestaradjusters.com',
  priceRange: 'Contingency fee (no upfront cost)',
  address: HEAD_ADDRESS,
  areaServed: STATES_SERVED,
  openingHoursSpecification: HOURS,
  contactPoint: [{
    '@type': 'ContactPoint',
    telephone: '+1-888-971-2524',
    email: 'mike@bluestaradjusters.com',
    contactType: 'customer service',
    areaServed: ['US-CA', 'US-NV', 'US-OR', 'US-WA', 'US-AZ', 'US-CO', 'US-UT', 'US-HI'],
    availableLanguage: ['English'],
  }],
  founder: { '@id': PERSON_ID },
  memberOf: ASSOCIATIONS,
  hasCredential: Object.values(CREDENTIALS),
  knowsAbout: [
    'Public Adjusting',
    'Property Damage Insurance Claims',
    'Residential Insurance Claims',
    'Commercial Property and Business Interruption Claims',
    'Fire and Smoke Damage Claims',
    'Wildfire Insurance Claims',
    'Water Damage Insurance Claims',
    'Roof, Wind, Hail and Tree Damage Claims',
    'Personal Property and Contents Claims',
    'Additional Living Expenses (Loss of Use) Claims',
    'Ordinance or Law (Code Upgrade) Claims',
    'Denied or Underpaid Insurance Claims',
  ],
};

const OFFICES = {
  '/locations/california/sacramento/': {
    name: 'Blue Star Adjusters — Sacramento Head Office',
    telephone: '+1-916-507-1005',
    city: 'Sacramento',
    state: 'California',
    cred: CREDENTIALS.CA,
    address: HEAD_ADDRESS,
  },
  '/locations/california/santa-monica/': {
    name: 'Blue Star Adjusters — Santa Monica Office',
    telephone: '+1-213-572-6005',
    city: 'Santa Monica',
    AreaExtra: 'Los Angeles',
    state: 'California',
    cred: CREDENTIALS.CA,
  },
  '/locations/california/san-francisco/': {
    name: 'Blue Star Adjusters — San Francisco Office',
    telephone: '+1-628-300-0741',
    city: 'San Francisco',
    state: 'California',
    cred: CREDENTIALS.CA,
  },
  '/locations/nevada/reno/': {
    name: 'Blue Star Adjusters — Reno Office',
    telephone: '+1-775-993-5511',
    city: 'Reno',
    state: 'Nevada',
    cred: CREDENTIALS.NV,
  },
  '/locations/oregon/portland/': {
    name: 'Blue Star Adjusters — Portland Office',
    telephone: '+1-971-610-0741',
    city: 'Portland',
    state: 'Oregon',
    cred: CREDENTIALS.OR,
  },
  '/locations/washington/seattle/': {
    name: 'Blue Star Adjusters — Seattle Office',
    telephone: '+1-564-465-4550',
    city: 'Seattle',
    state: 'Washington',
    cred: CREDENTIALS.WA,
  },
  '/locations/arizona/scottsdale/': {
    name: 'Blue Star Adjusters — Scottsdale Office',
    telephone: '+1-480-933-1557',
    city: 'Scottsdale',
    state: 'Arizona',
    cred: CREDENTIALS.AZ,
  },
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

function pageType(route) {
  if (route === '/about/michael-rapport/') return 'ProfilePage';
  if (route === '/about/') return 'AboutPage';
  if (route === '/contact/' || route === '/free-claim-review/') return 'ContactPage';
  if (route === '/claims/' || route === '/locations/') return 'CollectionPage';
  return 'WebPage';
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
        names.set('/about/', 'About');
        names.set('/claims/', 'Claims');
        names.set('/locations/', 'Locations');
        let nFaq = 0;
        const claimPages = pages.filter((p) => p.route.startsWith('/claims/') && p.route !== '/claims/');
        for (const p of pages) {
          const title = decode((p.html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]);
          const desc = decode((p.html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
          const url = SITE + p.route;
          const crumbs = [{ route: '/', name: 'Home' }];
          const segs = p.route.split('/').filter(Boolean);
          segs.forEach((_, i) => { const r = '/' + segs.slice(0, i + 1).join('/') + '/'; if (names.has(r) && r !== '/') crumbs.push({ route: r, name: names.get(r) }); });

          const extraEntities = [];
          let mainEntityRef = undefined;

          if (p.route === '/about/michael-rapport/') {
            mainEntityRef = { '@id': PERSON_ID };
          } else if (OFFICES[p.route]) {
            const o = OFFICES[p.route];
            const officeId = `${url}#office`;
            const area = [{ '@type': 'City', name: o.city }, ...(o.AreaExtra ? [{ '@type': 'City', name: o.AreaExtra }] : []), { '@type': 'State', name: o.state }];
            extraEntities.push({
              '@type': 'ProfessionalService',
              '@id': officeId,
              name: o.name,
              description: desc || undefined,
              url,
              image: `${SITE}/hero-poster.jpg`,
              telephone: o.telephone,
              email: 'mike@bluestaradjusters.com',
              priceRange: 'Contingency fee (no upfront cost)',
              parentOrganization: { '@id': ORG_ID },
              ...(o.address ? { address: o.address } : {}),
              areaServed: area,
              openingHoursSpecification: HOURS,
              hasCredential: [o.cred],
            });
            mainEntityRef = { '@id': officeId };
          } else if (p.route.startsWith('/claims/') && p.route !== '/claims/') {
            const serviceId = `${url}#service`;
            extraEntities.push({
              '@type': 'Service',
              '@id': serviceId,
              name: shortTitle(title),
              description: desc || undefined,
              url,
              serviceType: 'Public Insurance Adjusting',
              provider: { '@id': ORG_ID },
              areaServed: STATES_SERVED,
              offers: {
                '@type': 'Offer',
                description: 'Free insurance claim review with no upfront cost; contingency fee based on recovery.',
              },
            });
            mainEntityRef = { '@id': serviceId };
          } else if (p.route === '/claims/') {
            const catalogId = `${url}#catalog`;
            extraEntities.push({
              '@type': 'OfferCatalog',
              '@id': catalogId,
              name: 'Public Adjusting Claim Services',
              itemListElement: claimPages.map((cp, idx) => {
                const cpTitle = shortTitle(decode((cp.html.match(/<title>([^<]*)<\/title>/) || [, ''])[1]));
                const cpDesc = decode((cp.html.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1]);
                return {
                  '@type': 'ListItem',
                  position: idx + 1,
                  item: {
                    '@type': 'Service',
                    name: cpTitle,
                    description: cpDesc || undefined,
                    url: SITE + cp.route,
                    provider: { '@id': ORG_ID },
                  },
                };
              }),
            });
            mainEntityRef = { '@id': catalogId };
          } else if (p.route === '/first-48-hours/') {
            const articleId = `${url}#article`;
            extraEntities.push({
              '@type': 'Article',
              '@id': articleId,
              headline: shortTitle(title),
              description: desc || undefined,
              url,
              image: `${SITE}/hero-poster.jpg`,
              author: { '@id': PERSON_ID },
              publisher: { '@id': ORG_ID },
              mainEntityOfPage: { '@id': `${url}#webpage` },
            });
            mainEntityRef = { '@id': articleId };
          }

          const graph = [
            ORG,
            FOUNDER,
            { '@type': 'WebSite', '@id': SITE_ID, url: `${SITE}/`, name: 'Blue Star Adjusters', publisher: { '@id': ORG_ID } },
            {
              '@type': pageType(p.route),
              '@id': `${url}#webpage`,
              url,
              name: title,
              description: desc || undefined,
              isPartOf: { '@id': SITE_ID },
              about: { '@id': ORG_ID },
              ...(mainEntityRef ? { mainEntity: mainEntityRef } : {}),
              ...(crumbs.length > 1 ? { breadcrumb: { '@id': `${url}#breadcrumb` } } : {}),
            },
            ...extraEntities,
          ];
          if (crumbs.length > 1) graph.push({ '@type': 'BreadcrumbList', '@id': `${url}#breadcrumb`, itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.name, item: SITE + c.route })) });
          const f = faqs(p.html);
          if (f.length) { nFaq++; graph.push({ '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: f.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) }); }
          const ld = `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
          fs.writeFileSync(p.file, p.html.replace('</head>', `${ld}</head>`));
        }
        const live = pages
          .filter((p) => !/<meta name="robots" content="[^"]*noindex/.test(p.html))
          .sort((a, b) => (a.route === '/' ? -1 : b.route === '/' ? 1 : a.route.localeCompare(b.route)));
        fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${live.map((p) => `  <url><loc>${SITE}${p.route}</loc></url>`).join('\n')}\n</urlset>\n`);
        fs.writeFileSync(path.join(root, 'robots.txt'), INDEXABLE ? `User-agent: *\nAllow: /\nDisallow: /home-b/\nDisallow: /free-claim-review/thank-you/\n\nSitemap: ${SITE}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n');
        console.log(`seo-schema: JSON-LD on ${pages.length} pages (${nFaq} with FAQPage), sitemap ${live.length} URLs, robots ${INDEXABLE ? 'open' : 'blocked'}`);
      },
    },
  };
}
