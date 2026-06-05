import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent cleaning prices. Free quotes, no surprises.",
};

const tiers = [
  {
    name: "Standard Clean",
    price: "$120",
    cadence: "per visit",
    desc: "Perfect for keeping a tidy home fresh.",
    features: [
      "Up to 2 bed / 2 bath",
      "Kitchen & bathrooms",
      "Dusting & vacuuming",
      "Floors & surfaces",
    ],
    featured: false,
  },
  {
    name: "Deep Clean",
    price: "$240",
    cadence: "per visit",
    desc: "A top-to-bottom detailed reset.",
    features: [
      "Everything in Standard",
      "Inside appliances",
      "Baseboards & vents",
      "Grout & tile detail",
    ],
    featured: true,
  },
  {
    name: "Recurring",
    price: "$99",
    cadence: "per visit",
    desc: "Weekly or bi-weekly at a discount.",
    features: [
      "Discounted rate",
      "Same trusted cleaner",
      "Priority scheduling",
      "Cancel anytime",
    ],
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Simple pricing</h1>
        <p className="mt-3 text-muted-foreground">
          Transparent rates with no hidden fees. Every quote is free — final
          pricing depends on your home&apos;s size and condition.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <Card
            key={t.name}
            className={t.featured ? "border-primary shadow-lg ring-1 ring-primary" : ""}
          >
            <CardHeader>
              {t.featured && (
                <span className="w-fit rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  Most popular
                </span>
              )}
              <CardTitle>{t.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{t.desc}</p>
              <div className="mt-2">
                <span className="text-4xl font-bold">{t.price}</span>{" "}
                <span className="text-sm text-muted-foreground">{t.cadence}</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="mt-6 w-full"
                variant={t.featured ? "default" : "outline"}
              >
                <Link href="/contact">Get started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Need a commercial or custom quote?{" "}
        <Link href="/contact" className="font-medium text-primary hover:underline">
          Contact us
        </Link>{" "}
        for a tailored estimate.
      </p>
    </div>
  );
}
