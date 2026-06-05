// Central brand + content config, matched to getcleanbuddies.com (Clean Buddies
// Construction Cleaning — post-construction cleaning, Phoenix / Maricopa County).

export const site = {
  name: "Clean Buddies",
  legalName: "Clean Buddies Construction Cleaning",
  tagline: "You build, we handle the mess.",
  subtagline: "Your construction crew's cleaning crew.",
  description:
    "Fast, meticulous post-construction cleaning for contractors, builders, developers, and homeowners across Maricopa County. W-2 employees, fully insured, and built around your schedule.",
  phone: "(480) 908-9684",
  email: "", // not published on the original site — phone + quote form drive contact
  serviceArea: "Maricopa County, AZ",
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
  social: {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com",
    x: "https://x.com",
  },
} as const;

// Trust signals lifted from the live site.
export const stats = [
  { value: "5.0★", label: "Google rating (35 reviews)" },
  { value: "400+", label: "Projects completed" },
  { value: "100%", label: "W-2 employees" },
  { value: "24 hr", label: "Quote turnaround" },
];

export type ServiceKey =
  | "final-clean"
  | "rough-clean"
  | "touch-up"
  | "pre-construction-protection"
  | "demo-cleanup"
  | "paint-removal";

// Core construction-cleaning services.
export const services: {
  key: ServiceKey;
  name: string;
  blurb: string;
  features: string[];
}[] = [
  {
    key: "final-clean",
    name: "Final Clean (Post-Construction)",
    blurb:
      "The white-glove, inspection-ready clean that gets your build over the finish line — every surface, fixture, and corner detailed.",
    features: ["Detail dusting top to bottom", "Windows, tracks & sills", "Fixtures & finishes", "Floors polished & ready"],
  },
  {
    key: "rough-clean",
    name: "Rough Clean",
    blurb:
      "First-phase debris and dust removal after framing and drywall, so trades can keep moving on a clean site.",
    features: ["Debris removal", "Bulk dust knockdown", "Trash haul-out", "Site staged for next phase"],
  },
  {
    key: "touch-up",
    name: "Touch-Up & Dust Reset",
    blurb:
      "A pre-walkthrough or pre-listing dust reset so the space shows flawless on inspection or photo day.",
    features: ["Settled-dust wipe-down", "Glass & mirrors", "High-touch surfaces", "Walkthrough-ready"],
  },
  {
    key: "pre-construction-protection",
    name: "Pre-Construction Protection",
    blurb:
      "Protect finishes, floors, and fixtures before work begins to avoid costly damage and rework.",
    features: ["Floor & surface protection", "Fixture masking", "Common-area coverage", "Damage prevention"],
  },
  {
    key: "demo-cleanup",
    name: "Demo Clean-Up",
    blurb:
      "Debris haul-out and a full site reset after demolition so the next phase starts on solid, clean ground.",
    features: ["Debris & rubble haul-out", "Dust suppression", "Site sweep & reset", "Disposal handled"],
  },
  {
    key: "paint-removal",
    name: "Paint Removal & Restoration",
    blurb:
      "Overspray, adhesive, and paint removal from glass, tile, and fixtures — restoring finishes to like-new.",
    features: ["Overspray removal", "Adhesive & sticker removal", "Glass & tile restoration", "Fixture detailing"],
  },
];

// Specialty add-ons offered alongside the core construction services.
export const specialtyServices = [
  "Window Cleaning",
  "HVAC & Duct Cleaning",
  "Pressure Washing",
  "Solar Panel Cleaning",
  "Turnover & Deep Clean",
];

// Ongoing programs.
export const ongoingServices = [
  { name: "Clean Club Membership", note: "Coming soon" },
  { name: "On-Site Maintenance", note: "" },
  { name: "Listing Prep", note: "" },
  { name: "Multi-Phase Project Programs", note: "" },
];

// Maricopa County service area.
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

// Real reviews from the live site.
export const testimonials = [
  {
    quote:
      "Clean Buddies is rock solid. Their cleaning is thorough, and they're happy to go above and beyond. They even helped us move some heavy furniture.",
    name: "Elizabeth P.",
  },
  {
    quote:
      "They did an absolutely amazing job! Stacy and Joel were fantastic. Everything was really beautiful after they were done.",
    name: "Jennifer D.",
  },
  {
    quote:
      "Clean Buddies exceeded my expectations from start to finish! Carlo and Jorden were very helpful, and the cleaning team was professional and kind.",
    name: "Debbie S.",
  },
];
