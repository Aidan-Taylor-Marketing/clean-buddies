import type { Metadata } from "next";
import Link from "next/link";
import { Heart, ShieldCheck, Users, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — our story, values, and the team behind the sparkle.`,
};

const values = [
  { icon: Heart, title: "We care", body: "We treat every home and office like it's our own." },
  { icon: ShieldCheck, title: "We're trustworthy", body: "Insured, bonded, and background-checked — always." },
  { icon: Users, title: "We're consistent", body: "The same friendly faces you can count on each visit." },
  { icon: Sparkles, title: "We're thorough", body: "Detail-obsessed cleaning, guaranteed to satisfy." },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">About {site.name}</h1>
      <div className="mt-6 space-y-4 text-lg text-muted-foreground">
        <p>
          {site.name} started with a simple idea: cleaning should be easy to
          book, dependable, and done right. We&apos;re a locally owned team
          serving the {site.serviceArea}, and we&apos;ve built our reputation one
          spotless home and office at a time.
        </p>
        <p>
          Whether it&apos;s a weekly tidy-up, a deep seasonal clean, or getting a
          property move-in ready, our trained cleaners bring the same care and
          attention to every job. No contracts, no surprises — just a clean
          space and a friendly team you can trust.
        </p>
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

      <div className="mt-12 rounded-xl bg-muted/40 p-8 text-center">
        <h2 className="text-2xl font-semibold">Let&apos;s get your space sparkling</h2>
        <p className="mt-2 text-muted-foreground">
          Request a free quote and meet your new favorite cleaning crew.
        </p>
        <Button asChild className="mt-4">
          <Link href="/contact">Get a free quote</Link>
        </Button>
      </div>
    </div>
  );
}
