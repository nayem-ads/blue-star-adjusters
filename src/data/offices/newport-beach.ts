// Newport Beach office. Follows the California office structure (Sacramento / Santa Monica / San Francisco).
import type { OfficeData } from '../../sections/office/types';
import { ROUTES } from '../site';

const newportBeach: OfficeData = {
  route: ROUTES.newportBeach,
  title: "Public Adjuster in Orange County, CA | Newport Beach Office | Blue Star",
  description: "Licensed California public adjuster in Newport Beach for Orange County homes and businesses. 4695 MacArthur Court, 11th Floor. Call (949) 991-1447 for a free review.",
  city: "Newport Beach",
  state: "CA",
  hero: {
    eyebrow: "Newport Beach Codes. Orange County Contractors.",
    h1: "Public Adjuster in Orange County. Newport Beach Office.",
    lead: "Blue Star Adjusters is a licensed public adjuster for Orange County homes and businesses, with an office at 4695 MacArthur Court in Newport Beach. We work only for the policyholder, never the insurer. We read the whole policy, measure the full loss, from hidden water and smoke damage to a total loss, and negotiate the settlement with your carrier. A senior adjuster leads every claim, from the first call to the final settlement.",
    headOffice: false,
    alt: 'Coastal Southern California Spanish revival house with a tall palm.',
  },
  office: {
    label: "Newport Beach",
    rows: [
      { kind: 'address', value: "4695 MacArthur Court, 11th Floor, Newport Beach, California 92660" },
      { kind: 'phone', value: "(949) 991-1447" },
      { kind: 'email', value: "mike@bluestaradjusters.com" },
      { kind: 'hours', value: "Monday to Friday, 9 AM to 5 PM Pacific. Closed Saturday and Sunday." },
      { kind: 'license', value: "CA DOI License No. 6015234" },
    ],
  },
  local: "On custom coastal homes and hillside properties in Orange County, standard carrier line items rarely match what the finish work and current code actually cost.",
  rule: {
    cite: "§15027",
    lead: " you can cancel within three business days of signing and receiving the contract, or five calendar days in a declared catastrophic disaster area.",
    leadBold: "California:",
    line: "Our fee can never leave you with less than your insurer already paid before you hired us.",
  },
  blocks: [
    {"type": "office"},
    {"type": "prose", "id": "office-reach", "title": "How to Reach the Newport Beach Office", "body": ["Call (949) 991-1447 or email. We call back the same business day. Our Newport Beach office is at 4695 MacArthur Court, 11th Floor, and our head office is in Sacramento at 1610 R Street, Suite 300.", "Bring the full policy with endorsements, every letter or estimate from your carrier, and any photos taken before and after the loss. If you have moved into temporary housing, save every lease and living expense receipt.", "Check our license before you sign anything. Look up CA DOI License No. 6015234 on the California Department of Insurance license search. [Check a license with the California Department of Insurance](https://cdicloud.insurance.ca.gov/cal/LicenseNumberSearch)"]},
    {"type": "local"},
    {"type": "state"},
    {"type": "prose", "id": "office-coastal", "title": "Water, Wildfire Smoke and Custom Finishes in Orange County", "sub": "Standard Databases Miss Custom Work.", "links": "[Water damage claims](/claims/water-damage/) · [Fire and smoke damage claims](/claims/fire-smoke-damage/) · [Ordinance or law coverage](/claims/code-upgrades/)", "body": ["Carrier estimates are usually built in Xactimate from regional unit prices. On a custom home in Newport Beach, Laguna Beach or Irvine, or a commercial building near the coast, three gaps show up again and again.", "**Hidden water behind custom millwork and stone.** Supply line and slab leaks travel under hardwood, behind cabinetry and into wall cavities. Drying equipment pulls out surface moisture, not ruined custom millwork or matched stone. We map the moisture and document the real replacement scope before demolition hides the path.", "**Canyon wildfire smoke in standing homes.** Even when flames stop miles away, windborne ash and combustion byproducts settle into ductwork, insulation and porous finishes. Testing by an industrial hygienist separates a wipe-down from a true remediation scope.", "**Code upgrades and coastal permitting.** Rebuilding to current California structural, energy and fire-zone rules costs more than replacing old materials in kind. That difference is paid from ordinance or law coverage when the policy includes it, so we read those limits before writing the scope."]},
    {"type": "prose", "id": "office-disaster-rules", "title": "California Rules for Hiring a Public Adjuster", "listStyle": "bullet", "list": ["**Seven-day disaster solicitation wait.** In an area subject to a declared catastrophic disaster, a public adjuster can't solicit a residential policyholder until seven calendar days after the loss-producing event ends, unless you make the first call.", "**State-approved written contract.** Every California public adjuster contract must be in writing on a form approved by the Insurance Commissioner, carrying the adjuster's license number.", "**Right to cancel.** You have three business days after signing and receiving the contract to cancel, or five calendar days if the property sits in a declared catastrophic disaster area.", "**Prior payments are protected.** In California, our fee can never leave you with less than your insurer had already paid before you hired us."]},
    {"type": "prose", "id": "office-process", "title": "How a Claim Runs With Blue Star", "listStyle": "number", "links": "[How a public adjuster works on your claim](/how-it-works/)", "body": ["Five steps, from a free review to the settlement. You decide on every offer."], "list": ["Free review of your claim, at no cost or obligation.", "Policy review: the whole policy, endorsements included.", "Scope the loss: moisture mapping, testing and structural review where the loss calls for it.", "Build your claim: an itemized claim package, sent only with your approval.", "Negotiate the settlement with your insurer, line by line."]},
    {"type": "prose", "id": "office-results", "title": "What the Carrier Offered. What We Recovered.", "note": "Results reflect specific losses and policies. Past results don't guarantee a similar outcome.", "links": "[More claim results](/results/)", "buttons": true, "body": ["**Southern California house fire, full strip out.** We measured the structural damage and proved the subfloor and electrical needed a full strip out. Offered $38,000. Settled at $276,000.", "**Smoke damage.** Offered $17,000. Settled for about $1.1 million. An industrial hygienist proved combustion byproducts in porous materials and doors."]},
    {"type": "claims", "title": "Orange County Claims We Handle", "links": [{"label": "Residential claims", "href": "/claims/residential/"}, {"label": "Commercial claims", "href": "/claims/commercial/"}, {"label": "Fire and smoke damage", "href": "/claims/fire-smoke-damage/"}, {"label": "Water and plumbing", "href": "/claims/water-damage/"}, {"label": "Wind, hail and falling trees", "href": "/claims/wind-hail-trees/"}, {"label": "Denied or underpaid claims", "href": "/claims/denied-or-underpaid/"}]},
    {"type": "prose", "id": "office-not-for", "title": "When You May Not Need Us", "body": ["On a small loss, our fee may outweigh what we add. If the carrier's offer is already fair, we'll tell you so at the free review, before you sign anything."]},
    {"type": "faq", "id": "office-faq", "title": "Questions About Hiring a Public Adjuster in Newport Beach", "items": [{"q": "What does a public adjuster do in Orange County?", "a": "A public adjuster prepares, documents and negotiates your property insurance claim, working only for you. Your insurance company's adjuster works for the insurer. We inspect the property, price the full repair scope and negotiate line by line, while you keep final say on every offer. [How a public adjuster works](/how-it-works/)"}, {"q": "Where is Blue Star's Newport Beach office?", "a": "4695 MacArthur Court, 11th Floor, Newport Beach, California 92660. Call (949) 991-1447 Monday through Friday, 9 AM to 5 PM Pacific, for a same-business-day callback."}, {"q": "How much does a public adjuster cost in California?", "a": "No upfront cost. We're paid a percentage of what we recover, set in writing before work begins. Under California law, our fee can never leave you with less than your insurer had already paid before you hired us. [Public adjuster fees, explained](/fees/)"}, {"q": "Do you handle high-value coastal homes and commercial properties?", "a": "Yes. We handle custom residential estates, private-client and surplus-lines policies, HOA/multi-unit losses and commercial property and business income claims across Orange County. [Who we serve](/who-we-serve/)"}, {"q": "Is it too late if my insurer already made an offer or partial payment?", "a": "Usually not, as long as you haven't signed a final release. We can review the carrier's estimate, document what was left out, and pursue a supplemental settlement."}]},
    {"type": "links", "id": "office-offices", "title": "Other Blue Star Offices", "links": [{"label": "Head office: public adjuster in Sacramento", "href": "/locations/california/sacramento/"}, {"label": "Public adjuster in Los Angeles, from Santa Monica", "href": "/locations/california/santa-monica/"}, {"label": "Public adjuster in San Francisco", "href": "/locations/california/san-francisco/"}, {"label": "All locations", "href": "/locations/"}]},
  ],
  n: {
    'hero.img': ["217:12199", "217:12797"],
  },
};
export default newportBeach;
