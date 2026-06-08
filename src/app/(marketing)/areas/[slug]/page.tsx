import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MapPin } from "lucide-react";
import {
  getCity,
  allCitySlugs,
  SERVICE_CARDS,
  COMMITMENTS,
} from "@/lib/areas";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function generateStaticParams() {
  return allCitySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return { title: "Service Area" };
  return {
    title: `Post-Construction Cleaning ${city.name}`,
    description: city.subtitle,
  };
}

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0e182c] text-white">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
  );
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();

  const cityName = city.name.replace(/, AZ$/, "");
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      {/* Hero card */}
      <section className="mx-auto max-w-6xl px-4 py-10 lg:py-14">
        <Reveal
          as="div"
          className="rounded-3xl bg-[#080808] px-6 py-16 text-center text-white lg:py-20"
        >
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-tight sm:text-6xl">
            {city.name}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-neutral-200 sm:text-xl">
            {city.subtitle}
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-7 border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <Link href="/services">Our Services</Link>
          </Button>
        </Reveal>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-4xl px-4 pb-8 text-center">
        <Reveal>
          <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            {city.h2}
          </h2>
          <div className="mt-6 space-y-4 text-left text-muted-foreground">
            {city.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Feature cards */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 80}>
              <div className="h-full rounded-2xl border bg-gradient-to-br from-white to-sky-100/70 p-7">
                <h3 className="text-center font-heading text-xl font-bold">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {card.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm">
                      <CheckDot /> <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Areas we serve */}
      {city.areas.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <Reveal className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <h2 className="font-heading text-4xl font-extrabold uppercase leading-[1.0] tracking-tight sm:text-5xl">
              {cityName} Construction Areas We Serve
            </h2>
            <ul className="space-y-3">
              {city.areas.map((a) => (
                <li key={a} className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-primary" />
                  <span className="font-medium">{a}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      )}

      {/* Commitment */}
      <section className="bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <Reveal>
            <h2 className="text-center font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl">
              Our Commitment to {cityName} Builders &amp; GCs
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {COMMITMENTS.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 rounded-xl border bg-background p-5"
                >
                  <CheckDot />
                  <span className="text-sm font-semibold">{c}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative overflow-hidden bg-[#0e182c] text-white">
        <Reveal className="relative mx-auto max-w-4xl px-4 py-20 text-center">
          <MapPin className="mx-auto h-8 w-8 text-primary" />
          <p className="mx-auto mt-5 max-w-3xl text-neutral-300">{city.closing}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <Link href="/contact">Book Your Free Walkthrough</Link>
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
