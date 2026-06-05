import Link from "next/link";
import Image from "next/image";
import { Star, ArrowRight, Check } from "lucide-react";
import {
  site,
  stats,
  services,
  additionalServices,
  ongoingServices,
  testimonials,
  homeFaqs,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import van from "../../../public/van.jpg";

// Blueprint grid backdrop for dark sections.
const grid = {
  backgroundImage:
    "linear-gradient(rgba(56,182,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(56,182,255,.6) 1px, transparent 1px)",
  backgroundSize: "48px 48px",
};

const serviceColumns = [
  {
    num: "01",
    kicker: "Construction Cleaning",
    title: "Frame to finish.",
    body: "For builders, GCs, and developers. Every cleaning phase your project needs, scheduled around your trades.",
    items: services.map((s) => ({ name: s.aka, note: "" })),
  },
  {
    num: "02",
    kicker: "Additional Services",
    title: "Beyond the build.",
    body: "Specialty cleaning that completes the property. Hand-cleaned, surface-safe, done with the right equipment.",
    items: additionalServices.map((s) => ({ name: s.name, note: "" })),
  },
  {
    num: "03",
    kicker: "Ongoing Support",
    title: "Recurring partnerships.",
    body: "Not one-off cleans. Scheduled programs that keep properties consistently cared for, year-round.",
    items: ongoingServices.map((s) => ({ name: s.name, note: s.note })),
  },
];

function Anno({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={`pointer-events-none absolute font-mono text-[11px] uppercase tracking-widest text-primary/40 ${className}`}
    >
      {children}
    </span>
  );
}

export default function HomePage() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
        <Anno className="left-4 top-6 hidden sm:block">⌐ Proj.001 · PHX</Anno>
        <Anno className="right-4 top-6 hidden sm:block">Sheet A0.1</Anno>
        <Anno className="right-4 top-40 hidden lg:block">Rev. 04 · 2026</Anno>

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2 lg:py-20">
          <Reveal className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Phoenix Metro · Maricopa County
            </span>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-primary">
              You build, we handle the mess.
            </p>
            <h1 className="mt-3 text-4xl font-extrabold uppercase leading-[0.98] tracking-tight sm:text-5xl lg:text-6xl">
              #1 Rated <span className="text-primary">Post-Construction Cleaning</span> in Phoenix
            </h1>
            <p className="mt-5 max-w-md text-neutral-300">{site.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5">
                <span className="text-[#f5b400]">★★★★★</span>
                <span className="text-neutral-200">5.0 Google Rating</span>
              </span>
              {["400+ projects", "Locally owned", "Fully insured"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-neutral-200">
                  <Check className="h-4 w-4 text-[#37ca37]" /> {t}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href={tel}>Call {site.phone}</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#reviews">See Our Reviews</Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:ml-auto lg:w-full lg:max-w-md">
            <Card className="text-foreground">
              <CardHeader>
                <span className="w-fit rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
                  Free Quote
                </span>
                <CardTitle className="mt-2 text-2xl">Get a free quote in 24 hours.</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Tell us about your project. We&apos;ll respond by the next business day.
                </p>
              </CardHeader>
              <CardContent>
                <LeadForm />
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-3xl font-extrabold text-foreground sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-6xl px-4 pb-10">
          <div className="border-t pt-6 text-center text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by builders, developers, and homeowners across the Valley
          </div>
        </div>
      </section>

      {/* After the build */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal className="relative overflow-hidden rounded-2xl">
            <Image src={van} alt="Clean Buddies service van in Phoenix" className="h-full w-full object-cover" placeholder="blur" />
            <span className="absolute bottom-4 left-4 rounded-lg bg-[#0e182c]/85 px-4 py-2 text-sm font-medium text-white backdrop-blur">
              Locally owned. Phoenix-based.
            </span>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              After the build
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              Crews are done. <span className="text-primary">The dust isn&apos;t.</span>
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground">
              <p>
                You&apos;ve spent months building. The trades are out, but the fine dust,
                debris, and grit are still everywhere. And delays cost money. Inspections.
                Turnovers. Move-ins. Closings. Staging.
              </p>
              <p>
                You need a cleaning crew that understands construction, hits deadlines, and
                gets it done right the first time. That&apos;s where we come in.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Button asChild size="lg">
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
              >
                See real before/afters <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cleaning Services */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
        <Anno className="right-6 top-16 hidden lg:block">B.01</Anno>
        <div className="relative mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <Reveal>
              <p className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" /> Cleaning Services
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
                Every stage. Every season. One partner.
              </h2>
              <p className="mt-4 max-w-2xl text-neutral-300">
                From the first trade rotation to the last walkthrough, and every season
                after, Clean Buddies handles it. Construction cleaning for builders and GCs.
                Specialty work for homes and properties. Ongoing partnerships that keep
                things consistent.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <Button asChild size="lg">
                <Link href="/services">
                  See All Services <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            {serviceColumns.map((col) => (
              <Reveal key={col.num} className="bg-[#0e182c] p-6">
                <p className="text-sm font-bold uppercase tracking-widest text-primary">
                  {col.num} / {col.kicker}
                </p>
                <h3 className="mt-3 font-heading text-2xl font-extrabold uppercase tracking-tight">
                  {col.title}
                </h3>
                <p className="mt-3 text-sm text-neutral-400">{col.body}</p>
                <ul className="mt-5 divide-y divide-white/10 border-t border-white/10">
                  {col.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-center justify-between gap-3 py-3 text-sm"
                    >
                      <span className="flex items-center gap-2">
                        {it.name}
                        {it.note && (
                          <span className="rounded-full border border-primary/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                            {it.note}
                          </span>
                        )}
                      </span>
                      <ArrowRight className="h-4 w-4 text-neutral-500" />
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-neutral-300">
              <span className="font-semibold text-white">15 services.</span> All under one
              roof. Built for builders, homeowners, and property managers across the Phoenix
              metro.
            </p>
            <Button asChild size="lg">
              <Link href="/services">
                See All Services <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="scroll-mt-24 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              What our clients say
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase tracking-tight sm:text-4xl lg:text-5xl">
              5.0 stars across 35 reviews.
            </h2>
            <div className="mx-auto mt-6 flex w-fit items-center gap-3 rounded-full border bg-background px-5 py-2.5 shadow-sm">
              <span className="font-heading text-lg font-bold">G</span>
              <span className="text-sm font-medium">Google</span>
              <span className="text-[#f5b400]">★★★★★</span>
              <span className="text-sm text-muted-foreground">5.0 from 35 reviews</span>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <Card className="h-full">
                  <CardContent className="pt-6">
                    <div className="text-[#f5b400]">★★★★★</div>
                    <p className="mt-3 text-sm">&ldquo;{t.quote}&rdquo;</p>
                    <p className="mt-4 text-sm font-semibold">{t.name}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Common Questions
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
              What people ask before they hire us.
            </h2>
            <p className="mt-4 text-muted-foreground">
              If you have a question that&apos;s not on the list, just call or text. We
              respond fast.
            </p>
            <Button asChild size="lg" className="mt-6">
              <a href={tel}>Call {site.phone}</a>
            </Button>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={homeFaqs} />
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.06]" style={grid} />
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-20 text-center">
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-5xl">
            Ready for a <span className="text-primary">spotless handoff?</span>
          </h2>
          <p className="max-w-xl text-neutral-300">
            Free quote in 24 hours. No pressure, no surprises, no jargon. Just an honest
            scope, an honest price, and a crew that shows up when we said we would.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
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
    </>
  );
}
