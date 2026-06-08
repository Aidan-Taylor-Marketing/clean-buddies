"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { submitLead } from "@/app/actions/submit-lead";
import type { LeadActionState } from "@/lib/leads";
import { serviceOptions, site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initial: LeadActionState = { ok: false };
const selectClass =
  "border-input bg-transparent flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring outline-none";

const projectTypes = [
  "Residential New Build",
  "Custom Home",
  "Commercial Build-Out / TI",
  "Multifamily",
  "Renovation / Remodel",
  "Other",
];
const projectStatuses = [
  "Just planning",
  "In progress",
  "Trades finishing soon",
  "Construction complete",
  "Need it ASAP",
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full font-semibold" disabled={pending}>
      {pending ? "Sending…" : "Get My Quote"}
    </Button>
  );
}

export function QuoteForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction] = useActionState(submitLead, initial);
  const [done, setDone] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      setDone(true);
      formRef.current?.reset();
    } else if (state.error && !state.fieldErrors) {
      toast.error(state.error);
    }
  }, [state]);

  if (done) {
    return (
      <div className="rounded-xl border bg-muted/30 p-8 text-center">
        <p className="text-lg font-semibold">Thanks. We got your request.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          A member of our team will review your project and reach out within 24 hours.
        </p>
        <p className="mt-4 text-sm">
          Need us sooner? Call{" "}
          <a href={`tel:${site.phone.replace(/[^\d+]/g, "")}`} className="font-semibold text-primary">
            {site.phone}
          </a>
        </p>
      </div>
    );
  }

  const err = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="firstName">First Name *</Label>
          <Input id="firstName" name="firstName" required placeholder="First Name" />
          {err.firstName && <p className="text-sm text-destructive">{err.firstName}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="lastName">Last Name *</Label>
          <Input id="lastName" name="lastName" required placeholder="Last Name" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="Email" />
          {err.email && <p className="text-sm text-destructive">{err.email}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required placeholder="Phone" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="businessName">Business Name</Label>
        <Input id="businessName" name="businessName" placeholder="Business Name" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address">Service Address</Label>
        <Input id="address" name="address" placeholder="Street address" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="city">City</Label>
          <Input id="city" name="city" placeholder="City" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="zip">Zip Code</Label>
          <Input id="zip" name="zip" placeholder="Zip Code" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="service">Service Needed</Label>
          <select id="service" name="service" defaultValue={defaultService ?? ""} className={selectClass}>
            <option value="">Select a service…</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="projectType">Project Type</Label>
          <select id="projectType" name="projectType" defaultValue="" className={selectClass}>
            <option value="">Select…</option>
            {projectTypes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="squareFootage">Estimated Square Footage</Label>
          <Input id="squareFootage" name="squareFootage" placeholder="e.g. 2,500 sq ft" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="projectStatus">Project Status</Label>
          <select id="projectStatus" name="projectStatus" defaultValue="" className={selectClass}>
            <option value="">Select…</option>
            {projectStatuses.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={4} placeholder="Tell us about your project, scope, timeline, or any specific issues like drywall dust or overspray…" />
      </div>

      <SubmitButton />
      <p className="text-center text-xs text-muted-foreground">
        By submitting, you agree to receive calls or texts from Clean Buddies. No spam. Reply STOP at any time.
      </p>
    </form>
  );
}
