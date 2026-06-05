// Central brand + content config. Copy is taken verbatim from the client's
// existing site (getcleanbuddies.com) — Clean Buddies Construction Cleaning.

export const site = {
  name: "Clean Buddies",
  legalName: "Clean Buddies Construction Cleaning",
  tagline: "You build, we handle the mess.",
  subtagline: "Your Construction Crew's Cleaning Crew.",
  description:
    "Fast, meticulous post-construction cleaning for contractors, builders, developers, and homeowners. W-2 employees, fully insured, and built around your schedule.",
  phone: "(480) 908-9684",
  email: "",
  serviceArea: "Maricopa County, AZ",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Resources" },
  ],
} as const;

// Hero / stat-bar trust signals (verbatim).
export const stats = [
  { value: "5.0★", label: "on Google" },
  { value: "400+", label: "Projects Completed" },
  { value: "100%", label: "W-2 · Fully Insured" },
  { value: "All", label: "of Maricopa County" },
];

export type ServiceKey =
  | "final-clean"
  | "rough-clean"
  | "touch-up"
  | "pre-construction-protection"
  | "demo-cleanup"
  | "paint-removal";

// 01 — Construction Cleaning. Names, "aka", and descriptions are verbatim.
export const services: {
  key: ServiceKey;
  name: string;
  aka: string;
  blurb: string;
}[] = [
  {
    key: "final-clean",
    name: "Move-In Ready Cleaning",
    aka: "Final Clean",
    blurb:
      "The full top-to-bottom clean after construction wraps. Every dust source addressed, every surface detailed, every space ready for buyer walkthrough or owner move-in.",
  },
  {
    key: "rough-clean",
    name: "Mid-Build Cleanup",
    aka: "Rough Clean",
    blurb:
      "Site reset between trade rotations. Debris consolidation, dust knockdown, and inspection-ready handoff so your finish trades start on a clean baseline.",
  },
  {
    key: "touch-up",
    name: "Walkthrough Prep",
    aka: "Touch-Up & Dust Reset",
    blurb:
      "Same-day reset for finished spaces before showings, walkthroughs, or last-minute handoffs. The surgical pass that brings a finished home back to first-impression standard.",
  },
  {
    key: "pre-construction-protection",
    name: "Surface & Floor Protection",
    aka: "Pre-Construction Protection",
    blurb:
      "Ram Board floor protection, masking, corner guards, and HVAC sealing installed before trades arrive. Removed clean at end of project. Protects what's not being touched.",
  },
  {
    key: "demo-cleanup",
    name: "Post-Demolition Cleanup",
    aka: "Demo Clean-Up",
    blurb:
      "Bridge between demo crew and build trades. We consolidate debris, stage for your hauler, knock down demo dust, and prep the space build-ready for the next phase.",
  },
  {
    key: "paint-removal",
    name: "Surface Restoration",
    aka: "Paint Removal & Restoration",
    blurb:
      "Paint splatter, stucco overspray, primer drips, dried caulk, and other construction residue removed from hardwood, glass, marble, fixtures, and trim.",
  },
];

// 02 — Additional Services (tagline + description verbatim).
export const additionalServices = [
  {
    name: "Window Cleaning",
    tagline: "interior, exterior, frames, screens",
    blurb:
      "Hand-cleaned interior and exterior glass. RO + DI water-fed pole system reaches up to 40 feet for spot-free drying on hard-to-reach upper-level windows.",
  },
  {
    name: "HVAC & Duct Cleaning",
    tagline: "HEPA negative air, rotary brushes",
    blurb:
      "Post-construction and residential duct cleaning. We pull dust out of the system at the source instead of pushing it back into your home, with before/after photos in every duct.",
  },
  {
    name: "Pressure Washing",
    tagline: "hot + cold water, surface-safe PSI",
    blurb:
      "Driveways, patios, pool decks, sidewalks, exterior walls. Right pressure for each surface, right detergent for each stain. Restoration, not just rinsing.",
  },
  {
    name: "Solar Panel Cleaning",
    tagline: "warranty-safe RO/DI pure water",
    blurb:
      "Phoenix dust and monsoon residue can drop panel output by 15 to 30 percent. We clean with pure water and soft brushes designed for panels — no abrasives, no warranty risk.",
  },
  {
    name: "Turnover & Deep Clean",
    tagline: "multi-unit, lease-ready, hard turns",
    blurb:
      "Tenant turnover deep cleaning for property managers, Realtors, and landlords. Built for speed-to-rent, including hard turns after smoke, pets, evictions, or long-term tenants.",
  },
];

// 03 — Ongoing Support (tagline + description verbatim).
export const ongoingServices = [
  {
    name: "Clean Club Membership",
    note: "Coming Soon",
    tagline: "modular residential program",
    blurb:
      "Phoenix's first modular home maintenance membership. Custom-built around your property — pool deck if you have one, solar if you have panels — with a Phoenix-climate seasonal rhythm. Founding member spots opening Q2 2026.",
  },
  {
    name: "On-Site Maintenance",
    note: "",
    tagline: "commercial recurring cleaning",
    blurb:
      "Daily, weekly, or monthly recurring programs for offices, retail, gyms, medical, salons, and multifamily common areas. Same crew every visit, off-hours scheduling, no quality drift.",
  },
  {
    name: "Post-Showing & Listing Prep",
    note: "",
    tagline: "same-day Realtor support",
    blurb:
      "Pre-listing deep cleans, between-showing touch-ups, photo-shoot prep, and open house resets. For Realtors, sellers, and property managers running active listings.",
  },
  {
    name: "Multi-Phase Project Programs",
    note: "",
    tagline: "GC + developer coordinated programs",
    blurb:
      "One coordinated program that follows your construction project from rough through final. Single project lead, Procore-ready, AIA G702/G703 billing, COI same-day.",
  },
];

// Service options for the quote form's "What service do you need?" select.
export const serviceOptions = [
  "Final Clean (Post-Construction)",
  "Rough Clean",
  "Touch-Up & Dust Reset",
  "Pre-Construction Protection",
  "Demo Clean-Up",
  "Paint Removal & Restoration",
  "Window Cleaning",
  "HVAC & Duct Cleaning",
  "Pressure Washing",
  "Solar Panel Cleaning",
  "Turnover & Deep Clean",
  "Multi-Phase Project Program",
  "Other / Not Sure",
];

export const serviceCities = [
  "Phoenix",
  "Scottsdale",
  "Paradise Valley",
  "Cave Creek",
  "North Scottsdale",
  "Chandler",
  "Gilbert",
  "Mesa",
  "Tempe",
  "Glendale",
  "Peoria",
  "Surprise",
  "Buckeye",
  "Queen Creek",
  "Sun City",
  "Goodyear",
];

// Verbatim Google reviews.
export const testimonials = [
  {
    quote:
      "Clean Buddies is rock solid. Their cleaning is thorough, and they're happy to go above and beyond. They even helped us move some heavy furniture. Great attitudes, and they meet their commitments. Every team member is professional and friendly. Pricing is fair and reasonable. Highly recommend!",
    name: "Elizabeth P.",
  },
  {
    quote:
      "They did an absolutely amazing job! Stacy and Joel were fantastic. They were incredible! Everything was really beautiful after they were done. They worked incredibly hard and the whole process from requesting a quote to cleaning was seamless. So rare that something exceeds your expectations these days. 1,000,000/10.",
    name: "Jennifer D.",
  },
  {
    quote:
      "I wish there were 10 Stars because Clean Buddies exceeded my expectations from start to finish! Carlo and Jorden were very helpful, walking me through the process and setting me up for service the very next day. Stacey, Daniel, Jesus and Joel cleaned EVERYTHING from top to bottom. Friendly, personable, kind, helpful, professional. Worth every fair, well priced penny!",
    name: "Debbie S.",
  },
];

// Home-page FAQ (verbatim).
export const homeFaqs = [
  {
    q: "What is post-construction cleaning?",
    a: "Post-construction cleaning is the detailed removal of dust, debris, and residue after a build or renovation. It prepares a property for inspection, turnover, or move-in. The work covers everything from fine drywall dust on every surface to sticker and paint removal on windows, deep cleaning of fixtures and finishes, and final detail work that brings the space to a move-in-ready standard.",
  },
  {
    q: "What areas does Clean Buddies serve in Arizona?",
    a: "Clean Buddies serves the entire Phoenix Metro area, including Phoenix, Scottsdale, Paradise Valley, Cave Creek, North Scottsdale, Chandler, Gilbert, Mesa, Tempe, Glendale, Peoria, Surprise, Buckeye, Queen Creek, Sun City, Goodyear, and surrounding Maricopa County communities. If you're nearby and not listed, just ask.",
  },
  {
    q: "How fast can you provide a quote?",
    a: "Most quotes come back within 24 hours. For straightforward jobs we can often quote same-day after a quick walkthrough or after you share project details and photos.",
  },
  {
    q: "How quickly can post-construction cleaning be scheduled in Phoenix?",
    a: "Most projects can be scheduled within 3 to 5 days of quote approval, with quotes themselves delivered within 24 hours. For urgent timelines, walk-throughs and same-day scheduling are sometimes possible depending on crew availability.",
  },
  {
    q: "Are you insured?",
    a: "Yes. Fully insured with general liability and workers' compensation. We can provide a Certificate of Insurance naming any party your project requires, usually same day.",
  },
  {
    q: "Do you handle finish-sensitive materials?",
    a: "Yes. We work on luxury custom homes with natural stone, hardwoods, premium fixtures, and high-end finishes regularly. Our crews are trained on finish-safe products and methods.",
  },
  {
    q: "How does pricing work?",
    a: "Pricing depends on scope, square footage, finish sensitivity, and how dusty the site is. We'll walk it or review your scope, then send a clear written quote with line items and exclusions so you know exactly what you're paying for.",
  },
  {
    q: "What makes Clean Buddies different from regular cleaning companies?",
    a: "Clean Buddies specializes only in construction cleaning, not residential maid service or commercial janitorial. Our crews are W-2 employees trained specifically for post-construction work, with HEPA filtration, finish-safe products, and inspection-ready results. We work directly with builders, GCs, and developers across the Valley.",
  },
];

// About-page "Quick Answers" (verbatim).
export const aboutFaqs = [
  {
    q: "Why was Clean Buddies created?",
    a: "Clean Buddies was created to solve recurring issues contractors faced with standard cleaners—missed details, failed inspections, and delayed closings.",
  },
  {
    q: "Are Clean Buddies crews trained specifically for construction cleaning?",
    a: "Yes. Our crews receive specialized training in post-construction protocols, HEPA dust control, and finish-safe cleaning methods.",
  },
  {
    q: "Is Clean Buddies licensed and insured?",
    a: "Yes. We are fully licensed, bonded, and insured for all post-construction cleaning work.",
  },
  {
    q: "What makes Clean Buddies a trusted partner for Phoenix contractors?",
    a: "Contractors trust us for our on-time starts, fast issue resolution, consistent results, and understanding of builder expectations.",
  },
];

// About-page "Our Track Record" (verbatim).
export const trackRecord = [
  { value: "98%", label: "On-Time Starts" },
  { value: "2-hour", label: "Average Issue Resolution" },
  { value: "90%+", label: "3-Month Client Retention" },
  { value: "50-point", label: "Checklist on Every Job" },
];

// Quote page "What You Can Expect" (verbatim).
export const expectations = [
  "Quote in 24 hours",
  "Transparent scope & pricing",
  "Fast scheduling (3–5 days)",
  "Licensed, bonded & insured",
  "Inspection-ready results",
];
