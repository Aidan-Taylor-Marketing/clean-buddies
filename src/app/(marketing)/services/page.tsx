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
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { BlueprintGrid, Anno } from "@/components/blueprint";

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

const serviceStats = [
  { value: "15", label: "specialized services" },
  { value: "3", label: "categories from build to maintain" },
  { value: "W-2", label: "employees, fully insured" },
  { value: "All AZ", label: "Maricopa County coverage" },
];

function ServiceCard({
  category,
  name,
  sub,
  blurb,
}: {
  category: string;
  name: string;
  sub: string;
  blurb: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-background p-7 transition-shadow hover:shadow-md">
      <p className="text-xs font-bold uppercase tracking-widest text-primary">
        {category}
      </p>
      <h3 className="mt-3 font-heading text-2xl font-bold tracking-tight">{name}</h3>
      <p className="mt-1 text-sm font-medium text-primary">{sub}</p>
      <p className="mt-3 flex-1 text-sm text-muted-foreground">{blurb}</p>
      <Link
        href={`/contact?service=${encodeURIComponent(name)}`}
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
      >
        Learn more <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function CategorySection({
  num,
  kicker,
  title,
  body,
  children,
}: {
  num: string;
  kicker: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <Reveal>
        <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
          <span className="h-px w-8 bg-primary" /> {num} — {kicker}
        </p>
        <div className="mt-4 grid gap-6 lg:grid-cols-2 lg:items-start">
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="text-muted-foreground lg:pt-2">{body}</p>
        </div>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">{children}</div>
    </section>
  );
}

export default function ServicesPage() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <BlueprintGrid />
        <Anno className="right-6 top-44 hidden lg:block">C.01</Anno>
        <Anno className="left-6 top-72 hidden lg:block">B.02</Anno>
        <Anno className="right-6 bottom-40 hidden lg:block">Sheet S-1.0 of 12</Anno>

        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-20">
          <Reveal>
            <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" /> Clean Buddies Services
            </p>
            <h1 className="mt-4 font-heading text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
              Every stage.
              <br />
              Every season.
              <br />
              <span className="text-primary">One partner.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-neutral-300">
              Clean Buddies handles the full lifecycle of cleaning needs for builders,
              GCs, developers, homeowners, Realtors, and property managers across the
              Phoenix metro. From pre-construction protection through ongoing maintenance —
              and everything in between. Below, every service we offer, organized by
              category.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <a href={tel}>Call {site.phone}</a>
              </Button>
            </div>
          </Reveal>

          {/* Stats row */}
          <Reveal delay={120} className="mt-14 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 md:grid-cols-4">
            {serviceStats.map((s) => (
              <div key={s.label} className="border-l-2 border-primary pl-4">
                <p className="font-heading text-3xl font-extrabold sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm text-neutral-400">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 01 Construction Cleaning */}
      <CategorySection
        num="01"
        kicker="Construction Cleaning"
        title="Frame to finish."
        body="Six services covering the full construction cleaning lifecycle. From pre-trade protection through final move-in handoff, with every phase in between scoped and scheduled around your construction timeline. Built for general contractors, custom home builders, developers, and homeowners running their own renovations."
      >
        {services.map((s) => (
          <ServiceCard
            key={s.key}
            category="Construction Cleaning"
            name={s.name}
            sub={`aka ${s.aka}`}
            blurb={s.blurb}
          />
        ))}
      </CategorySection>

      {/* 02 Additional Services */}
      <div className="bg-muted/30">
        <CategorySection
          num="02"
          kicker="Additional Services"
          title="Beyond the build."
          body="Specialty cleaning that completes the property. Hand-cleaned where it matters, surface-safe where finishes are sensitive, and done with the right equipment for each job. Available as standalone services or bundled with construction cleaning programs."
        >
          {additionalServices.map((s) => (
            <ServiceCard
              key={s.name}
              category="Additional Services"
              name={s.name}
              sub={s.tagline}
              blurb={s.blurb}
            />
          ))}
        </CategorySection>
      </div>

      {/* 03 Ongoing Support */}
      <CategorySection
        num="03"
        kicker="Ongoing Support"
        title="Recurring partnerships."
        body="Not one-off cleans. Scheduled programs that follow your property, your project, or your portfolio over time. Same crews, same checklists, same standards every visit. Built for long-term consistency rather than reactive cleanup."
      >
        {ongoingServices.map((s) => (
          <ServiceCard
            key={s.name}
            category={s.note ? `Ongoing Support · ${s.note}` : "Ongoing Support"}
            name={s.name}
            sub={s.tagline}
            blurb={s.blurb}
          />
        ))}
      </CategorySection>

      {/* Not sure */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <BlueprintGrid />
        <Reveal className="relative mx-auto max-w-3xl px-4 py-20 text-center">
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            Not sure what you need? <span className="text-primary">We&apos;ll figure it out.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-300">
            Tell us about your project, your property, or your timeline — whether you&apos;re
            a builder mid-construction, a homeowner planning a remodel, a Realtor prepping a
            listing, or a property manager looking for ongoing service. We&apos;ll walk it,
            scope it, and recommend exactly the right combination of services.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <a href={tel}>Call {site.phone}</a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Quick Answers */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Quick Answers
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl">
              Common questions about our services.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={servicesFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
