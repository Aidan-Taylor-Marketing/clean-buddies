import type { Metadata } from "next";
import Link from "next/link";
import { site, trackRecord, aboutFaqs } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "About",
  description:
    "We provide specialized post-construction cleaning for new homes, commercial build-outs, and renovation projects across the Phoenix Metro area.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0f1a] text-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            About Us
          </p>
          <h1 className="mt-3 text-3xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Your Construction Crew&apos;s Cleaning Crew
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-300">
            We provide specialized post-construction cleaning for new homes,
            commercial build-outs, and renovation projects across the Phoenix
            Metro area.
          </p>
          <Button asChild size="lg" className="mt-7 font-semibold">
            <Link href="/contact">Get Started</Link>
          </Button>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 py-16">
        {/* Why we started + how we work */}
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              Why We Started
            </h2>
            <p className="mt-3 text-lg">
              Too many projects were getting held up by cleaning crews that
              didn&apos;t understand builder standards — missed details, failed
              inspections, delayed closings.
            </p>
            <p className="mt-3 text-lg font-semibold">
              We built Clean Buddies to fix that.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
              How We Work
            </h2>
            <p className="mt-3 text-lg">
              We clean exclusively for construction and follow methods that keep
              projects moving.
            </p>
            <Button asChild className="mt-4 font-semibold">
              <Link href="/contact">Schedule Your Clean</Link>
            </Button>
          </div>
        </div>

        {/* Track record */}
        <div className="mt-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Our Track Record
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl border bg-muted/30 p-6 md:grid-cols-4">
            {trackRecord.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Careers */}
        <div className="mt-14 rounded-xl border p-8">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">
            Interested in Joining the Team?
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Clean Buddies is growing and always looking for dependable,
            detail-oriented team members. We offer consistent work, clear
            expectations, and opportunities to grow with a company that values
            reliability, teamwork, and getting the job done right the first time.
          </p>
          <Button asChild variant="outline" className="mt-4 font-semibold">
            <Link href="/contact">Apply Now</Link>
          </Button>
        </div>

        {/* Inspection CTA */}
        <div className="mt-14 rounded-xl bg-[#0a0f1a] p-8 text-center text-white">
          <h2 className="text-2xl font-semibold">Get an Inspection-Ready Clean</h2>
          <p className="mt-2 text-neutral-300">
            Book a site inspection and receive a clear, no-surprise proposal.
          </p>
          <Button asChild className="mt-4 font-semibold">
            <Link href="/contact">Book My Site Inspection</Link>
          </Button>
        </div>

        {/* Quick answers */}
        <div className="mt-14">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
            Quick Answers
          </h2>
          <div className="mt-6">
            <Faq items={aboutFaqs} />
          </div>
        </div>
      </div>
    </>
  );
}
