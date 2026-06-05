import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  services,
  additionalServices,
  ongoingServices,
  site,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Every stage. Every season. One partner. The full lifecycle of construction cleaning for builders, GCs, developers, homeowners, Realtors, and property managers across the Phoenix metro.",
};

const servicesFaqs = [
  {
    q: "What is included in rough construction cleaning?",
    a: "Rough cleaning includes debris removal, floor sweeping or shop-vac, dust knockdown, and surface prep before paint and final installations.",
  },
  {
    q: "What is a final construction clean?",
    a: "A final clean includes detailed dust removal, window cleaning, floor polishing, cabinet and fixture cleaning, and full prep for inspections or move-in.",
  },
  {
    q: "How quickly can post-construction cleaning be scheduled in Phoenix?",
    a: "We can often get you on the calendar in as little as 24–48 hours. For tight timelines (inspections, client walkthroughs, move-ins), we'll prioritize your deadline and send a confirmed schedule once we review the scope.",
  },
  {
    q: "Do you offer emergency dust resets?",
    a: "Yes. Emergency dust resets are for last-minute cleanups when trades return after a final clean and the space needs to be inspection-ready again.",
  },
  {
    q: "Can you support multi-phase construction cleaning?",
    a: "Yes. We offer rough cleans, final cleans, touch-ups, and return visits for phased developments or occupied renovations.",
  },
];

function ServiceRow({
  name,
  aka,
  tagline,
  blurb,
  note,
}: {
  name: string;
  aka?: string;
  tagline?: string;
  blurb: string;
  note?: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          {aka && (
            <span className="text-sm text-muted-foreground">aka {aka}</span>
          )}
          {note && (
            <Badge variant="outline" className="text-xs">
              {note}
            </Badge>
          )}
        </div>
        {tagline && (
          <p className="mt-1 text-sm font-medium text-primary">{tagline}</p>
        )}
        <p className="mt-2 text-sm text-muted-foreground">{blurb}</p>
      </CardContent>
    </Card>
  );
}

function CategoryHeader({
  num,
  kicker,
  title,
  body,
}: {
  num: string;
  kicker: string;
  title: string;
  body: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        {num} — {kicker}
      </p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight">{title}</h2>
      <p className="mt-3 text-muted-foreground">{body}</p>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* Intro */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          Clean Buddies Services
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Every stage. Every season. One partner.
        </h1>
        <p className="mt-4 text-muted-foreground">
          Clean Buddies handles the full lifecycle of cleaning needs for builders,
          GCs, developers, homeowners, Realtors, and property managers across the
          Phoenix metro. From pre-construction protection through ongoing
          maintenance — and everything in between. Below, every service we offer,
          organized by category.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <span><strong className="text-foreground">15</strong> specialized services</span>
          <span><strong className="text-foreground">W-2</strong> employees, fully insured</span>
          <span><strong className="text-foreground">All AZ</strong> Maricopa County coverage</span>
        </div>
      </div>

      {/* 01 Construction Cleaning */}
      <div className="mt-16">
        <CategoryHeader
          num="01"
          kicker="Construction Cleaning"
          title="Frame to finish."
          body="Six services covering the full construction cleaning lifecycle. From pre-trade protection through final move-in handoff, with every phase in between scoped and scheduled around your construction timeline. Built for general contractors, custom home builders, developers, and homeowners running their own renovations."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <ServiceRow key={s.key} name={s.name} aka={s.aka} blurb={s.blurb} />
          ))}
        </div>
      </div>

      {/* 02 Additional Services */}
      <div className="mt-16">
        <CategoryHeader
          num="02"
          kicker="Additional Services"
          title="Beyond the build."
          body="Specialty cleaning that completes the property. Hand-cleaned where it matters, surface-safe where finishes are sensitive, and done with the right equipment for each job. Available as standalone services or bundled with construction cleaning programs."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {additionalServices.map((s) => (
            <ServiceRow key={s.name} name={s.name} tagline={s.tagline} blurb={s.blurb} />
          ))}
        </div>
      </div>

      {/* 03 Ongoing Support */}
      <div className="mt-16">
        <CategoryHeader
          num="03"
          kicker="Ongoing Support"
          title="Recurring partnerships."
          body="Not one-off cleans. Scheduled programs that follow your property, your project, or your portfolio over time. Same crews, same checklists, same standards every visit. Built for long-term consistency rather than reactive cleanup."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {ongoingServices.map((s) => (
            <ServiceRow
              key={s.name}
              name={s.name}
              note={s.note || undefined}
              tagline={s.tagline}
              blurb={s.blurb}
            />
          ))}
        </div>
      </div>

      {/* Not sure */}
      <div className="mt-16 rounded-xl bg-[#0e182c] p-8 text-center text-white">
        <h2 className="text-2xl font-semibold">
          Not sure what you need? We&apos;ll figure it out.
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-neutral-300">
          Tell us about your project, your property, or your timeline — whether
          you&apos;re a builder mid-construction, a homeowner planning a remodel, a
          Realtor prepping a listing, or a property manager looking for ongoing
          service. We&apos;ll walk it, scope it, and recommend exactly the right
          combination of services.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Button asChild className="font-semibold">
            <Link href="/contact">Get a free quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
          >
            <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
              Call {site.phone} <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Quick Answers */}
      <div className="mt-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Answers
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Common questions about our services
          </h2>
        </div>
        <div className="mt-8">
          <Faq items={servicesFaqs} />
        </div>
      </div>
    </div>
  );
}
