import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Request a free cleaning quote from ${site.name}. Fast, friendly, no obligation.`,
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
          <h1 className="text-4xl font-bold tracking-tight">Get your free quote</h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Fill out the form and we&apos;ll get back to you quickly with a
            tailored quote. Prefer to talk? Reach us directly below.
          </p>

          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Call or text</p>
                <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-medium">
                  {site.phone}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href={`mailto:${site.email}`} className="font-medium">
                  {site.email}
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Service area</p>
                <p className="font-medium">{site.serviceArea}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm text-muted-foreground">Hours</p>
                <p className="font-medium">Mon–Sat, 8am–6pm</p>
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
