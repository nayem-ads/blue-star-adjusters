// Single source of truth for contact details and routes.
export const PHONE_DISPLAY = '(916) 507-1005';
export const PHONE_TEL = 'tel:+19165071005';
export const LICENSE = 'CA DOI License No. 2B60428';
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
} as const;

// FormSubmit (https://formsubmit.co). First submission sends an activation email to FORM_TO.
export const FORM_TO = 'nayem.adsmanager@gmail.com';
export const FORM_CC = 'mike@bluestaradjusters.com';
export const FORM_ACTION = `https://formsubmit.co/${FORM_TO}`;
