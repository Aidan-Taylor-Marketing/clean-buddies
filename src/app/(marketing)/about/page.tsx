import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site, trackRecord, aboutFaqs } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import desert from "../../../../public/about/desert.jpg";
import team from "../../../../public/about/team.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "We provide specialized post-construction cleaning for new homes, commercial build-outs, and renovation projects across the Phoenix Metro area.",
};

const methods = [
  "Construction-trained crews",
  "Finish-safe products",
  "50-point checklist",
  "HEPA dust control",
  "QC inspection every visit",
];

const INK = "#080808";

export default function AboutPage() {
  return (
    <>
      {/* Hero card */}
      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <Reveal
          as="div"
          className="grid gap-8 rounded-3xl bg-[#080808] px-8 py-16 text-white lg:grid-cols-2 lg:items-center lg:px-16 lg:py-24"
        >
          <h1 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
            Your Construction Crew&apos;s Cleaning Crew
          </h1>
          <div>
            <p className="text-lg text-neutral-200">
              We provide{" "}
              <span className="font-bold text-primary">
                specialized post-construction cleaning
              </span>{" "}
              for new homes, commercial build-outs, and renovation projects across the
              Phoenix Metro area.
            </p>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="mt-6 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Why we started */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl lg:text-6xl">
            Why We Started
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              Too many projects were getting held up by cleaning crews that didn&apos;t
              understand builder standards — missed details, failed inspections, delayed
              closings.
            </p>
            <p className="font-semibold">
              We built <span className="text-primary">Clean Buddies</span> to fix that.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Desert oval */}
      <Reveal className="flex justify-center px-4 pb-8">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[50%]">
          <Image src={desert} alt="Saguaro desert near Phoenix" fill className="object-cover" />
        </div>
      </Reveal>

      {/* How we work */}
      <section style={{ backgroundColor: INK }} className="text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
              How We Work
            </h2>
            <p className="text-lg text-neutral-200">
              We clean{" "}
              <span className="font-bold text-primary">exclusively for construction</span>{" "}
              and follow methods that keep projects moving.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {methods.map((m) => (
              <div
                key={m}
                className="flex min-h-24 items-center justify-center rounded-lg bg-white/5 p-4 text-center text-sm font-medium text-neutral-100"
              >
                {m}
              </div>
            ))}
          </Reveal>

          <Reveal delay={200} className="mt-10 flex justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Schedule Your Clean</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Track record */}
      <section className="bg-gradient-to-br from-white via-sky-50 to-primary/20">
        <div className="mx-auto max-w-6xl px-4 py-20 text-center">
          <Reveal>
            <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
              Our Track Record
            </h2>
          </Reveal>
          <Reveal delay={120} className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {trackRecord.map((s) => (
              <div key={s.label}>
                <p className="font-heading text-4xl font-extrabold text-foreground/80 sm:text-5xl">
                  {s.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Careers */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
            Interested in Joining the Team?
          </h2>
          <div>
            <p className="text-lg text-muted-foreground">
              Clean Buddies is growing and always looking for dependable, detail-oriented
              team members. We offer consistent work, clear expectations, and opportunities
              to grow with a company that values reliability, teamwork, and getting the job
              done right the first time.
            </p>
            <Button asChild size="lg" variant="outline" className="mt-6">
              <Link href="/contact">Apply Now</Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Inspection-ready CTA */}
      <section style={{ backgroundColor: INK }} className="text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex justify-center">
              <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[50%]">
                <Image src={team} alt="The Clean Buddies crew on site" fill className="object-cover" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
                Get an Inspection-Ready Clean
              </h2>
              <p className="mt-4 text-lg text-neutral-200">
                Book a site inspection and receive a clear, no-surprise proposal.
              </p>
              <Button asChild size="lg" className="mt-6">
                <Link href="/contact">Book My Site Inspection</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick answers */}
      <section className="mx-auto max-w-6xl px-4 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Quick Answers
            </p>
            <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase leading-[1.02] tracking-tight sm:text-4xl">
              Common questions about Clean Buddies.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <Faq items={aboutFaqs} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
