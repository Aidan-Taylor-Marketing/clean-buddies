import type { Metadata } from "next";
import { Phone, MapPin, Clock, FileCheck2 } from "lucide-react";
import { site } from "@/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Request a free post-construction cleaning quote from ${site.legalName}. 24-hour turnaround, serving all of ${site.serviceArea}.`,
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Get a free quote
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Tell us about your project
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Send us the scope and we&apos;ll turn around a clear, itemized quote
            within 24 hours. Prefer to talk it through? Call us anytime.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Call or text</p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-semibold">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Service area</p>
                <p className="font-semibold">{site.serviceArea}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Quote turnaround</p>
                <p className="font-semibold">Within 24 hours · scheduling in 3–5 days</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileCheck2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Insurance</p>
                <p className="font-semibold">Fully insured · COI available same-day</p>
              </div>
            </li>
          </ul>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Request a quote</CardTitle>
          </CardHeader>
          <CardContent>
            <LeadForm defaultService={service} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
