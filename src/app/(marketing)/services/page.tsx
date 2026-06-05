import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Residential, commercial, deep cleaning, move in/out, and recurring cleaning services.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight">Cleaning services</h1>
        <p className="mt-3 text-muted-foreground">
          Whatever your space needs, we have a service for it. Every clean is
          backed by our satisfaction guarantee.
        </p>
      </div>

      <div className="mt-12 space-y-6">
        {services.map((s, i) => (
          <Card key={s.key} className="overflow-hidden">
            <div className="grid md:grid-cols-3">
              <CardHeader className="bg-muted/40 md:border-r">
                <span className="text-sm font-medium text-primary">
                  0{i + 1}
                </span>
                <CardTitle className="text-2xl">{s.name}</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Starting at{" "}
                  <span className="font-semibold text-foreground">{s.startingAt}</span>
                </p>
              </CardHeader>
              <CardContent className="md:col-span-2 md:py-6">
                <p>{s.blurb}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6">
                  <Link href={`/contact?service=${encodeURIComponent(s.name)}`}>
                    Get a quote for {s.name.toLowerCase()}
                  </Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
