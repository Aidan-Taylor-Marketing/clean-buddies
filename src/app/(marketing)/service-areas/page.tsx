import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { site } from "@/lib/site";
import { allCities, cityPath } from "@/lib/areas";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Service Areas",
  description: `${site.legalName} provides post-construction cleaning across Maricopa County: ${allCities
    .map((c) => c.name.replace(/, AZ$/, ""))
    .join(", ")}.`,
};

export default function ServiceAreasPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Where we work
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Serving all of {site.serviceArea}
        </h1>
        <p className="mt-3 text-muted-foreground">
          Phoenix-based and locally owned, we cover construction sites across the
          Valley. If you don&apos;t see your city, just ask — we likely cover it.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {allCities.map((city) => (
          <Link
            key={city.slug}
            href={cityPath(city.slug)}
            className="group flex items-center justify-between gap-2 rounded-lg border bg-background px-4 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
          >
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              {city.name.replace(/, AZ$/, "")}
            </span>
            <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-[#0e182c] p-8 text-center text-white">
        <h2 className="text-2xl font-semibold">On a build in the Valley?</h2>
        <p className="mt-2 text-neutral-300">
          Get a free quote within 24 hours and a crew on site in 3–5 days.
        </p>
        <Button asChild className="mt-4 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
      </div>
    </div>
  );
}
