import type { Metadata } from "next";
import { Phone, CheckCircle2 } from "lucide-react";
import { site, expectations } from "@/lib/site";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LeadForm } from "@/components/lead-form";
import { Faq } from "@/components/faq";

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

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Schedule a Walkthrough
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            Get a fast, accurate quote
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Construction is done, but the space still feels like a job site.
            Whether you&apos;re a GC preparing for a final walkthrough, a builder
            handing off keys, a property manager turning a unit, or a homeowner
            finishing a remodel, we handle the dust, debris, and detail work for
            you. Tell us about your project below and we&apos;ll send a clear,
            itemized quote within 24 hours—most cleans are scheduled within 3–5
            days.
          </p>

          <div className="mt-8 rounded-xl border bg-muted/30 p-6">
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
          </div>

          <div className="mt-6 rounded-xl bg-[#0e182c] p-6 text-white">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Need to book ASAP?
            </p>
            <p className="mt-1 text-neutral-300">Call us, we pick up.</p>
            <a
              href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
              className="mt-2 flex items-center gap-2 text-xl font-bold"
            >
              <Phone className="h-5 w-5 text-primary" /> {site.phone}
            </a>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">
              Get a fast, accurate post-construction cleaning quote
            </CardTitle>
          </CardHeader>
          <CardContent>
            <LeadForm defaultService={service} />
          </CardContent>
        </Card>
      </div>

      {/* Quick answers */}
      <div className="mt-16">
        <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-primary">
          Quick Answers
        </h2>
        <div className="mt-6">
          <Faq items={quoteFaqs} />
        </div>
      </div>
    </div>
  );
}
