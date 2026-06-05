// Central place for brand + content. Swap these to match the client's branding.
// TODO: replace placeholder copy/colors with the real Clean Buddies branding
// pulled from the existing Go High Level site.

export const site = {
  name: "Clean Buddies",
  tagline: "Spotless homes & offices, every single time.",
  description:
    "Clean Buddies is a professional residential and commercial cleaning service. Trusted, insured, and friendly cleaners who treat your space like their own.",
  phone: "(555) 123-4567",
  email: "hello@cleanbuddies.com",
  serviceArea: "Greater Metro Area",
  // Used for canonical URLs / SEO. Overridden by NEXT_PUBLIC_SITE_URL in production.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type ServiceKey =
  | "residential"
  | "commercial"
  | "deep-clean"
  | "move-in-out"
  | "recurring";

export const services: {
  key: ServiceKey;
  name: string;
  blurb: string;
  features: string[];
  startingAt: string;
}[] = [
  {
    key: "residential",
    name: "Residential Cleaning",
    blurb:
      "Routine house cleaning that keeps your home fresh — kitchens, baths, floors, and dusting top to bottom.",
    features: ["Kitchens & bathrooms", "Dusting & vacuuming", "Floors & surfaces", "Trash removal"],
    startingAt: "$120",
  },
  {
    key: "commercial",
    name: "Commercial Cleaning",
    blurb:
      "Reliable office and workspace cleaning on a schedule that fits your business hours.",
    features: ["Offices & lobbies", "Restrooms", "Break rooms", "Nightly or weekly"],
    startingAt: "Custom quote",
  },
  {
    key: "deep-clean",
    name: "Deep Cleaning",
    blurb:
      "A thorough, detailed reset — baseboards, inside appliances, grout, and the spots regular cleaning misses.",
    features: ["Inside appliances", "Baseboards & vents", "Grout & tile", "Detailed scrub"],
    startingAt: "$240",
  },
  {
    key: "move-in-out",
    name: "Move In / Move Out",
    blurb:
      "Empty-home cleaning to get your deposit back or hand over keys spotless.",
    features: ["Whole-home detail", "Inside cabinets", "Appliance interiors", "Final walkthrough"],
    startingAt: "$280",
  },
  {
    key: "recurring",
    name: "Recurring Service",
    blurb:
      "Weekly, bi-weekly, or monthly cleans at a discounted rate. Same trusted cleaner each visit.",
    features: ["Discounted rates", "Same crew", "Flexible scheduling", "Cancel anytime"],
    startingAt: "$99 / visit",
  },
];
