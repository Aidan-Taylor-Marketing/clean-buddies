"use server";

import { createAdminClient } from "@/lib/supabase/admin";
import { sendLeadNotification } from "@/lib/email";
import { leadSchema, type LeadActionState } from "@/lib/leads";

export async function submitLead(
  _prev: LeadActionState,
  formData: FormData,
): Promise<LeadActionState> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = leadSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0] ?? "form");
      if (!fieldErrors[key]) fieldErrors[key] = issue.message;
    }
    return { ok: false, error: "Please check the form.", fieldErrors };
  }

  const { company, firstName, lastName, ...rest } = parsed.data;

  // Honeypot tripped — pretend success, drop the bot.
  if (company) return { ok: true };

  const name = [firstName, lastName].filter(Boolean).join(" ").trim();
  const lead = { name, ...rest };

  const supabase = createAdminClient();
  const { error } = await supabase.from("leads").insert({
    name: lead.name,
    email: lead.email,
    phone: lead.phone || null,
    service: lead.service || null,
    address: lead.address || null,
    message: lead.message || null,
    source: "website",
  });

  if (error) {
    console.error("[submitLead] insert failed:", error.message);
    return { ok: false, error: "Something went wrong. Please try again or call us." };
  }

  // Fire the notification but never fail the submission if email is down.
  try {
    await sendLeadNotification(lead);
  } catch (e) {
    console.error("[submitLead] notification email failed:", e);
  }

  return { ok: true };
}
