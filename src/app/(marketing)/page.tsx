import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  CheckCircle2,
  Leaf,
} from "lucide-react";
import { site, services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

const trustPoints = [
  { icon: ShieldCheck, label: "Insured & bonded" },
  { icon: Star, label: "5-star rated" },
  { icon: Leaf, label: "Eco-friendly products" },
  { icon: Clock, label: "On-time, every time" },
];

const testimonials = [
  {
    quote:
      "Clean Buddies transformed our home. Reliable, friendly, and the attention to detail is unreal.",
    name: "Sarah M.",
    role: "Residential client",
  },
  {
    quote:
      "We've used them for our offices for over a year. Never had a single complaint from staff.",
    name: "David R.",
    role: "Office manager",
  },
  {
    quote:
      "Booked a deep clean before guests arrived — spotless. Worth every penny.",
    name: "Priya K.",
    role: "Deep clean client",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-accent/40 to-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" /> {site.serviceArea}&apos;s trusted cleaners
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {site.tagline}
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">Get a free quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/services">View services</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {trustPoints.map((t) => (
                <div key={t.label} className="flex items-center gap-2 text-sm">
                  <t.icon className="h-5 w-5 text-primary" />
                  {t.label}
                </div>
              ))}
            </div>
          </div>

          <Card className="lg:ml-auto lg:w-full lg:max-w-md">
            <CardHeader>
              <CardTitle className="text-xl">Get your free quote</CardTitle>
              <p className="text-sm text-muted-foreground">
                Tell us about your space — we&apos;ll get back to you fast.
              </p>
            </CardHeader>
            <CardContent>
              <LeadForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">Our services</h2>
          <p className="mt-3 text-muted-foreground">
            Professional cleaning for every space and schedule.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.key} className="flex flex-col">
              <CardHeader>
                <CardTitle>{s.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="text-sm text-muted-foreground">{s.blurb}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="text-sm text-muted-foreground">
                    From <span className="font-semibold text-foreground">{s.startingAt}</span>
                  </span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={`/contact?service=${encodeURIComponent(s.name)}`}>
                      Get quote →
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Fully insured", body: "Bonded and insured for your total peace of mind." },
            { icon: Star, title: "Vetted cleaners", body: "Background-checked, trained, and friendly pros." },
            { icon: Leaf, title: "Safe products", body: "Eco-friendly supplies safe for kids and pets." },
            { icon: Clock, title: "Flexible scheduling", body: "One-time or recurring — on your schedule." },
          ].map((b) => (
            <div key={b.title}>
              <b.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-3 font-semibold">{b.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight">What clients say</h2>
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
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready for a spotless space?
          </h2>
          <p className="max-w-md text-primary-foreground/80">
            Get a free, no-obligation quote today and see why neighbors love
            {" "}
            {site.name}.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get my free quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
