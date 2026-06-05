import { z } from "zod";

export const leadSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name").max(80),
  lastName: z.string().max(80).optional().or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  phone: z.string().max(40).optional().or(z.literal("")),
  service: z.string().max(80).optional().or(z.literal("")),
  address: z.string().max(200).optional().or(z.literal("")),
  message: z.string().max(2000).optional().or(z.literal("")),
  // honeypot — must stay empty
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadActionState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};
