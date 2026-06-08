import type { Metadata } from "next";
import Image from "next/image";
import { Clock, CalendarDays, Globe, Phone, CheckCircle2 } from "lucide-react";
import { site, expectations } from "@/lib/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "@/components/quote-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import billboard from "../../../../public/quote/billboard.jpg";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description:
    "Tell us about your project and we'll send a clear, itemized quote within 24 hours — most cleans are scheduled within 3–5 days.",
};

const quoteFaqs = [
  {
    q: "How fast can I get a post-construction cleaning quote?",
    a: "You'll receive a clear, itemized quote within 24 hours of submitting your project details.",
  },
  {
    q: "What information do I need to provide for an accurate quote?",
    a: "We need your project type, scope of work, cleaning phase needed, timeline, and any specific issues like drywall dust or overspray.",
  },
  {
    q: "How soon can you schedule the cleaning after I receive my quote?",
    a: "Most projects are scheduled within 3–5 days, depending on scope and availability.",
  },
  {
    q: "Can I talk to someone before booking?",
    a: "Yes. You can call us directly at (480) 908-9684.",
  },
  {
    q: "Do you offer on-site inspections before finalizing the quote?",
    a: "Yes. For larger or complex jobs, we provide detailed site inspections to ensure accurate scope and pricing.",
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
      {/* Schedule a walkthrough */}
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <h1 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl">
            Schedule a Walkthrough
          </h1>
          <p className="mt-5 text-muted-foreground">
            Construction is done, but the space still feels like a job site. Whether
            you&apos;re a GC preparing for a final walkthrough, a builder handing off keys,
            a property manager turning a unit, or a homeowner finishing a remodel, we handle
            the dust, debris, and detail work for you. Tell us about your project below and
            we&apos;ll send a clear, itemized quote within 24 hours—most cleans are scheduled
            within 3–5 days.
          </p>

          {/* Booking card (live scheduler can be embedded here) */}
          <Card className="mt-8">
            <CardContent className="pt-6">
              <p className="font-heading text-lg font-semibold">Schedule a Walkthrough</p>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" /> 30 min on-site walkthrough
                </li>
                <li className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-primary" /> Flexible scheduling, Mon–Sat
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" /> {site.serviceArea}
                </li>
              </ul>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href={tel}>Call to book — {site.phone}</a>
                </Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Prefer to send details? Use the quote form below and we&apos;ll reach out to
                set a time.
              </p>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={120} className="overflow-hidden rounded-2xl">
          <Image
            src={billboard}
            alt='Clean Buddies billboard: "We make dirty look good."'
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </Reveal>
      </section>

      {/* OR + quote form */}
      <section className="mt-20">
        <Reveal className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <p className="font-heading text-4xl font-extrabold uppercase tracking-tight text-muted-foreground/40">
            OR
          </p>
          <h2 className="font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl lg:text-5xl">
            Get a fast, accurate post-construction cleaning quote
          </h2>
        </Reveal>

        <Reveal delay={100} className="mx-auto mt-10 max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <QuoteForm defaultService={service} />
            </CardContent>
          </Card>
        </Reveal>
      </section>

      {/* What you can expect + ASAP */}
      <section className="mt-16 grid gap-6 md:grid-cols-2">
        <Reveal className="rounded-xl border bg-muted/30 p-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            What You Can Expect
          </p>
          <ul className="mt-3 space-y-2">
            {expectations.map((e) => (
              <li key={e} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" /> {e}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={100} className="rounded-xl bg-[#0e182c] p-6 text-white">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Need to book ASAP?
          </p>
          <p className="mt-1 text-neutral-300">Call us, we pick up.</p>
          <a href={tel} className="mt-2 flex items-center gap-2 text-xl font-bold">
            <Phone className="h-5 w-5 text-primary" /> {site.phone}
          </a>
        </Reveal>
      </section>

      {/* Quick answers */}
      <section className="mt-16">
        <h2 className="text-center text-sm font-bold uppercase tracking-[0.2em] text-primary">
          Quick Answers
        </h2>
        <div className="mt-6">
          <Faq items={quoteFaqs} />
        </div>
      </section>
    </div>
  );
}
