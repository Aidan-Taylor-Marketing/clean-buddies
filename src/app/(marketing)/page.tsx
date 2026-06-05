import Link from "next/link";
import { Star, ArrowRight, ShieldCheck, HardHat, MapPin } from "lucide-react";
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

const categories = [
  {
    num: "01",
    kicker: "Construction Cleaning",
    title: "Frame to finish.",
    body: "For builders, GCs, and developers. Every cleaning phase your project needs, scheduled around your trades.",
    items: services.map((s) => s.name),
  },
  {
    num: "02",
    kicker: "Additional Services",
    title: "Beyond the build.",
    body: "Specialty cleaning that completes the property. Hand-cleaned, surface-safe, done with the right equipment.",
    items: additionalServices.map((s) => s.name),
  },
  {
    num: "03",
    kicker: "Ongoing Support",
    title: "Recurring partnerships.",
    body: "Not one-off cleans. Scheduled programs that keep properties consistently cared for, year-round.",
    items: ongoingServices.map((s) => s.name),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0a0f1a] text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#38B0F8 1px, transparent 1px), linear-gradient(90deg, #38B0F8 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <MapPin className="h-3.5 w-3.5" /> Phoenix Metro · Maricopa County
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              You build, we handle the mess.
            </h1>
            <p className="mt-4 text-xl font-semibold">
              <span className="text-primary">#1 Rated</span> Post-Construction
              Cleaning in Phoenix
            </p>
            <p className="mt-4 max-w-md text-neutral-300">{site.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="flex items-center gap-1.5 text-primary">
                <span className="tracking-tight">★★★★★</span>
                <span className="text-neutral-200">5.0 Google Rating</span>
              </span>
              <span className="text-neutral-300">400+ projects</span>
              <span className="text-neutral-300">Locally owned</span>
              <span className="text-neutral-300">Fully insured</span>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                  Call {site.phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="#reviews">See Our Reviews</Link>
              </Button>
            </div>
          </div>

          <Card className="text-foreground lg:ml-auto lg:w-full lg:max-w-md">
            <CardHeader>
              <CardTitle className="text-xl">Get a free quote in 24 hours.</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell us about your project. We&apos;ll respond by the next business
                day.
              </p>
            </CardHeader>
            <CardContent>
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stat bar */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="px-4 pb-8 text-center text-sm text-muted-foreground">
          Trusted by builders, developers, and homeowners across the Valley.{" "}
          <span className="font-medium text-foreground">
            Locally owned. Phoenix-based.
          </span>
        </p>
      </section>

      {/* After the build */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          After the build
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Crews are done. The dust isn&apos;t.
        </h2>
        <div className="mt-5 max-w-3xl space-y-4 text-lg text-muted-foreground">
          <p>
            You&apos;ve spent months building. The trades are out, but the fine
            dust, debris, and grit are still everywhere. And delays cost money.
            Inspections. Turnovers. Move-ins. Closings. Staging.
          </p>
          <p>
            You need a cleaning crew that understands construction, hits
            deadlines, and gets it done right the first time. That&apos;s where we
            come in.
          </p>
        </div>
      </section>

      {/* Services overview */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Cleaning Services
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              Every stage. Every season. One partner.
            </h2>
            <p className="mt-3 text-muted-foreground">
              From the first trade rotation to the last walkthrough, and every
              season after, Clean Buddies handles it. Construction cleaning for
              builders and GCs. Specialty work for homes and properties. Ongoing
              partnerships that keep things consistent.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((c) => (
              <Card key={c.num} className="flex flex-col">
                <CardHeader>
                  <span className="text-sm font-semibold text-primary">
                    {c.num} / {c.kicker.toUpperCase()}
                  </span>
                  <CardTitle className="text-xl">{c.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <p className="text-sm text-muted-foreground">{c.body}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {c.items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-primary" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 text-center">
            <p className="max-w-2xl text-muted-foreground">
              15 services. All under one roof. Built for builders, homeowners, and
              property managers across the Phoenix metro.
            </p>
            <Button asChild className="font-semibold">
              <Link href="/services">See All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">What our clients say</h2>
          <p className="mt-3 text-muted-foreground">5.0 stars across 35 reviews.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name}>
              <CardContent className="pt-6">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild className="font-semibold">
            <Link href="/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Common Questions
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              What people ask before they hire us.
            </h2>
            <p className="mt-3 text-muted-foreground">
              If you have a question that&apos;s not on the list, just call or
              text. We respond fast.
            </p>
          </div>
          <div className="mt-10">
            <Faq items={homeFaqs} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#0a0f1a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready for a spotless handoff?
          </h2>
          <p className="max-w-xl text-neutral-300">
            Free quote in 24 hours. No pressure, no surprises, no jargon. Just an
            honest scope, an honest price, and a crew that shows up when we said we
            would.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">Get a free quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/20 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
            >
              <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}>
                Call {site.phone}
              </a>
            </Button>
          </div>
          <p className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1 text-sm text-neutral-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-primary" /> Fully insured
            </span>
            <span className="flex items-center gap-1.5">
              <HardHat className="h-4 w-4 text-primary" /> 100% W-2 employees
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
