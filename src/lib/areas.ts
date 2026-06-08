import areasData from "./areas-data.json";

export type CityData = {
  slug: string;
  name: string;
  subtitle: string;
  h2: string;
  intro: string[];
  areas: string[];
  closing: string;
};

const data = areasData as Record<string, CityData>;

// URL prefix matches the original site for SEO continuity.
export const AREA_PREFIX = "post-construction-cleaning-";

export function cityPath(shortSlug: string) {
  return `/areas/${AREA_PREFIX}${shortSlug}`;
}

export function getCity(fullSlug: string): CityData | null {
  const short = fullSlug.replace(AREA_PREFIX, "");
  return data[short] ?? null;
}

export const allCities: CityData[] = Object.values(data);

export const allCitySlugs = Object.keys(data).map((s) => `${AREA_PREFIX}${s}`);

// Boilerplate sections — identical across every city page on the original.
export const SERVICE_CARDS = [
  {
    title: "Final Clean Execution",
    bullets: [
      "Fine dust + debris removal from all interior zones",
      "Detailed finishing on fixtures, appliances, trim, glass + surfaces",
      "Showcase clean for walkthrough, inspection, turnover, or CO",
    ],
  },
  {
    title: "Touch-Up & Punch List Support",
    bullets: [
      "Micro-dust removal after late-trade intrusion",
      "Spot corrections on glass, paint touch areas, casework + hardware",
      "Punch list compatible timeline staging",
    ],
  },
  {
    title: "Dust Resets & HEPA Micro-Dust Removal",
    bullets: [
      "HEPA filtration cleaning for AZ's airborne dust environment",
      "Rapid resets after painters, flooring, millwork + low-voltage trades",
      "Flexible deployment to support schedule changes",
    ],
  },
  {
    title: "Multi-Unit Production Closeouts",
    bullets: [
      "Unit-by-unit production cleaning across full buildings",
      "Amenity spaces and common areas finished to presentation-ready standard",
      "Leasing office + model unit detailing for lease-up showcase",
    ],
  },
];

export const COMMITMENTS = [
  "Precision Final Clean Execution",
  "Licensed + Insured Protection",
  "HEPA Filtration Dust Control",
  "Reliable Close-Out Support",
];
