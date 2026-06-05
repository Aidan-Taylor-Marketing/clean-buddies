"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { toast } from "sonner";
import { submitLead } from "@/app/actions/submit-lead";
import type { LeadActionState } from "@/lib/leads";
import { services } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initial: LeadActionState = { ok: false };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" className="w-full" disabled={pending}>
      {pending ? "Sending…" : "Get my free quote"}
    </Button>
  );
}

export function LeadForm({ defaultService }: { defaultService?: string }) {
  const [state, formAction] = useActionState(submitLead, initial);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      toast.success("Thanks! We got your request and will reach out shortly.");
      formRef.current?.reset();
    } else if (state.error && !state.fieldErrors) {
      toast.error(state.error);
    }
  }, [state]);

  const err = state.fieldErrors ?? {};

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Jane Doe" />
          {err.name && <p className="text-sm text-destructive">{err.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="jane@email.com" />
          {err.email && <p className="text-sm text-destructive">{err.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            name="service"
            defaultValue={defaultService ?? ""}
            className="border-input bg-transparent flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-xs focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring outline-none"
          >
            <option value="">Not sure yet</option>
            {services.map((s) => (
              <option key={s.key} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="address">Address</Label>
        <Input id="address" name="address" placeholder="123 Main St, City" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your space and what you need…"
        />
      </div>

      <SubmitButton />
      <p className="text-center text-xs text-muted-foreground">
        No spam. We&apos;ll only use your info to send your quote.
      </p>
    </form>
  );
}
