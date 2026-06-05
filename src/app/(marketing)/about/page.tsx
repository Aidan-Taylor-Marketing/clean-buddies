import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, ShieldCheck, MapPin, BadgeCheck } from "lucide-react";
import { site, stats } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: `${site.legalName} — Phoenix-based, locally owned post-construction cleaning specialists with 100% W-2 employees and full insurance.`,
};

const values = [
  {
    icon: HardHat,
    title: "Construction specialists",
    body: "We're not residential cleaners moonlighting on job sites — post-construction is what we do.",
  },
  {
    icon: BadgeCheck,
    title: "100% W-2 employees",
    body: "Trained, accountable crews. No day-labor, no rotating subs you've never met.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    body: "General liability and workers' comp, with a certificate of insurance available same-day.",
  },
  {
    icon: MapPin,
    title: "Locally owned",
    body: "Phoenix-based and built around how Valley contractors actually run a schedule.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">
        About us
      </p>
      <h1 className="mt-2 text-4xl font-bold tracking-tight">
        Your construction crew&apos;s cleaning crew
      </h1>
      <div className="mt-6 space-y-4 text-lg text-muted-foreground">
        <p>
          {site.legalName} is a Phoenix-based, locally owned cleaning company
          built specifically for the construction industry. We understand
          construction timelines, inspection standards, and what it takes to
          hand over a space that&apos;s truly finished.
        </p>
        <p>
          From rough clean to the final, white-glove detail, our trained W-2
          crews deliver inspection-ready results — fully insured, with a
          certificate of insurance available the same day you ask. You build it;
          we handle the mess.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 rounded-xl border bg-muted/30 p-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-2xl font-extrabold text-primary">{s.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {values.map((v) => (
          <div key={v.title} className="rounded-xl border p-6">
            <v.icon className="h-8 w-8 text-primary" />
            <h3 className="mt-3 font-semibold">{v.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{v.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl bg-[#0a0f1a] p-8 text-center text-white">
        <h2 className="text-2xl font-semibold">Let&apos;s get your build finished</h2>
        <p className="mt-2 text-neutral-300">
          Free quote within 24 hours, crew on site in 3–5 days.
        </p>
        <Button asChild className="mt-4 font-semibold">
          <Link href="/contact">Get a free quote</Link>
        </Button>
      </div>
    </div>
  );
}
