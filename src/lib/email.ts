import { Resend } from "resend";
import type { LeadInput } from "@/lib/leads";
import { site } from "@/lib/site";

// Sends a new-lead notification to the client's inbox via Resend.
// No-ops gracefully (logs a warning) if Resend isn't configured yet.
export async function sendLeadNotification(lead: LeadInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_TO;
  const from = process.env.LEAD_NOTIFY_FROM || `${site.name} <onboarding@resend.dev>`;

  if (!apiKey || !to) {
    console.warn(
      "[email] RESEND_API_KEY or LEAD_NOTIFY_TO not set — skipping lead notification email.",
    );
    return;
  }

  const resend = new Resend(apiKey);

  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Phone", lead.phone],
    ["Service", lead.service],
    ["Address", lead.address],
    ["Message", lead.message],
  ]
    .filter(([, v]) => v)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;font-weight:600;color:#555">${k}</td><td style="padding:6px 12px">${String(
          v,
        ).replace(/</g, "&lt;")}</td></tr>`,
    )
    .join("");

  await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New ${lead.service || "cleaning"} lead: ${lead.name}`,
    html: `
      <div style="font-family:system-ui,sans-serif;max-width:560px">
        <h2 style="color:#0f172a">New lead from the website</h2>
        <table style="border-collapse:collapse;width:100%;border:1px solid #eee">${rows}</table>
        <p style="color:#888;font-size:12px;margin-top:16px">Sent automatically by ${site.name}.</p>
      </div>`,
  });
}
