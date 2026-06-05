import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { services, specialtyServices, ongoingServices, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Construction Cleaning Services",
  description:
    "Post-construction final clean, rough clean, demo clean-up, paint removal, and more — for contractors and builders across Maricopa County.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Services
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">
          Specialists in construction cleaning
        </h1>
        <p className="mt-3 text-muted-foreground">
          Every phase of the build, handled by trained W-2 crews. Fully insured,
          inspection-ready, and built around your schedule.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {services.map((s, i) => (
          <Card key={s.key} className="overflow-hidden">
            <div className="grid md:grid-cols-3">
              <CardHeader className="bg-muted/40 md:border-r">
                <span className="text-sm font-semibold text-primary">
                  0{i + 1}
                </span>
                <CardTitle className="text-2xl">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="md:col-span-2 md:py-6">
                <p>{s.blurb}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 font-semibold">
                  <Link href={`/contact?service=${encodeURIComponent(s.name)}`}>
                    Get a quote
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>

      {/* Specialty */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Specialty services</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {specialtyServices.map((s) => (
              <Badge key={s} variant="secondary" className="text-sm">
                {s}
              </Badge>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Ongoing support</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {ongoingServices.map((s) => (
                <li key={s.name} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {s.name}
                  {s.note && (
                    <Badge variant="outline" className="ml-1 text-xs">
                      {s.note}
                    </Badge>
                  )}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 rounded-xl bg-[#0a0f1a] p-8 text-center text-white">
        <h2 className="text-2xl font-semibold">Not sure which clean you need?</h2>
        <p className="mt-2 text-neutral-300">
          Tell us about your project and we&apos;ll scope it for you — free, within
          24 hours.
        </p>
        <Button asChild className="mt-4 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
        <p className="mt-3 text-sm text-neutral-400">
          or call{" "}
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-primary">
            {site.phone}
          </a>
        </p>
      </div>
    </div>
  );
}
