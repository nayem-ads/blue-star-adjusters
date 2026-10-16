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
  reno: '/locations/nevada/reno/',
  portland: '/locations/oregon/portland/',
  seattle: '/locations/washington/seattle/',
  scottsdale: '/locations/arizona/scottsdale/',
} as const;

// FormSubmit (https://formsubmit.co). First submission sends an activation email to FORM_TO.
export const FORM_TO = 'nayem.adsmanager@gmail.com';
export const FORM_CC = 'mike@bluestaradjusters.com';
export const FORM_ACTION = `https://formsubmit.co/${FORM_TO}`;
