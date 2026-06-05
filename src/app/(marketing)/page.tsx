import Link from "next/link";
import {
  ShieldCheck,
  Star,
  CheckCircle2,
  HardHat,
  Clock,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import {
  site,
  services,
  specialtyServices,
  stats,
  testimonials,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

const process = [
  {
    icon: FileCheck2,
    title: "Free quote in 24 hours",
    body: "Send us the scope and we turn around a clear, itemized quote within a day.",
  },
  {
    icon: Clock,
    title: "Scheduled in 3–5 days",
    body: "We work around your build timeline and get a crew on site fast.",
  },
  {
    icon: HardHat,
    title: "Rough & final cleaning",
    body: "W-2, trained crews handle every phase — from debris haul-out to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Inspection-ready",
    body: "We leave it white-glove clean, with a same-day certificate of insurance on request.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — dark, construction-grade */}
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
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              <Star className="h-4 w-4 fill-current" /> #1 Rated in Phoenix · 400+ projects
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {site.tagline}
            </h1>
            <p className="mt-2 text-lg font-semibold text-primary">
              {site.subtagline}
            </p>
            <p className="mt-5 max-w-md text-neutral-300">
              {site.description}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <Link href="/contact">Get a free quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-primary" /> Fully insured
              </span>
              <span className="flex items-center gap-1.5">
                <HardHat className="h-4 w-4 text-primary" /> 100% W-2 employees
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck2 className="h-4 w-4 text-primary" /> COI same-day
              </span>
            </div>
          </div>

          <Card className="text-foreground lg:ml-auto lg:w-full lg:max-w-md">
            <CardHeader>
              <CardTitle className="text-xl">Get your free quote</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell us about the project — we respond within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b bg-background">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-extrabold text-primary">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">
            Construction cleaning, every phase
          </h2>
          <p className="mt-3 text-muted-foreground">
            From rough clean to inspection-ready final clean — specialists, not
            generalists.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.key} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="ghost" size="sm" className="mt-4 w-fit px-0 text-primary hover:bg-transparent hover:text-primary">
                  <Link href={`/contact?service=${encodeURIComponent(s.name)}`}>
                    Get a quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-xl border bg-muted/30 p-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            Also available
          </p>
          <p className="mt-2 text-foreground">
            {specialtyServices.join(" · ")}
          </p>
        </div>
      </section>

      {/* Process */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-muted-foreground">
              Built around your construction timeline — fast, clean, accountable.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.title} className="rounded-xl border bg-background p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="text-2xl font-extrabold text-muted-foreground/30">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Trusted by contractors & homeowners
          </h2>
          <p className="mt-3 text-muted-foreground">
            5.0 stars across 35 Google reviews.
          </p>
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
      </section>

      {/* CTA */}
      <section className="bg-[#0a0f1a] text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            You build it. We&apos;ll handle the mess.
          </h2>
          <p className="max-w-md text-neutral-300">
            Get a free, no-obligation quote within 24 hours — serving all of
            {" "}
            {site.serviceArea}.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/contact">Get my free quote</Link>
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
        </div>
      </section>
    </>
  );
}
