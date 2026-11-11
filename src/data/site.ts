// Single source of truth for contact details and routes.
export const PHONE_DISPLAY = '(888) 971-2524';
export const PHONE_TEL = 'tel:+18889712524';
/** tel: link for any displayed US number, e.g. telHref('(628) 300-0741') -> 'tel:+16283000741'. */
export const telHref = (display: string) => 'tel:+1' + display.replace(/\D/g, '');
export const LICENSE = 'CA DOI License No. 6015234';
export const ADDRESS = '1610 R Street, Suite 300, Sacramento, California 95811';

export const ROUTES = {
  home: '/',
  homeB: '/home-b/',
  founder: '/about/michael-rapport/',
  whatWeDo: '/claims/',
  freeClaimReview: '/free-claim-review/',
  thankYou: '/free-claim-review/thank-you/',
  whoWeAre: '/about/',
  contact: '/contact/',
  howItWorks: '/how-it-works/',
  fees: '/fees/',
  whyBlueStar: '/why-blue-star/',
  // Claims, firm and location pages (built Sep 2026)
  residential: '/claims/residential/',
  commercial: '/claims/commercial/',
  fireSmoke: '/claims/fire-smoke-damage/',
  wildfire: '/claims/wildfire/',
  waterDamage: '/claims/water-damage/',
  windHailTrees: '/claims/wind-hail-trees/',
  contentsValuables: '/claims/contents-valuables/',
  additionalLiving: '/claims/additional-living-expenses/',
  codeUpgrades: '/claims/code-upgrades/',
  deniedOrUnderpaid: '/claims/denied-or-underpaid/',
  results: '/results/',
  whoWeServe: '/who-we-serve/',
  locations: '/locations/',
  faq: '/faq/',
  first48Hours: '/first-48-hours/',
  // Office pages
  sacramento: '/locations/california/sacramento/',
  santaMonica: '/locations/california/santa-monica/',
  sanFrancisco: '/locations/california/san-francisco/',
  newportBeach: '/locations/california/newport-beach/',
  reno: '/locations/nevada/reno/',
  portland: '/locations/oregon/portland/',
  seattle: '/locations/washington/seattle/',
  scottsdale: '/locations/arizona/scottsdale/',
  denver: '/locations/colorado/denver/',
} as const;

// Lead routing via Blue Star's Resend-backed API (lead@bluestaradjusters.com -> mike@bluestaradjusters.com, CC nayem.adsmanager@gmail.com).
export const FORM_TO = 'mike@bluestaradjusters.com';
export const FORM_CC = 'nayem.adsmanager@gmail.com';
export const FORM_ACTION = 'https://quiz.bluestaradjusters.com/api/site-lead';
