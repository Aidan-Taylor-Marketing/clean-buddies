import { z } from "zod";

const optStr = (max: number) => z.string().max(max).optional().or(z.literal(""));

export const leadSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name").max(80),
  lastName: optStr(80),
  email: z.string().email("Enter a valid email"),
  phone: optStr(40),
  service: optStr(80),
  address: optStr(200),
  message: optStr(2000),
  // Extended quote-form fields (optional)
  businessName: optStr(120),
  city: optStr(80),
  zip: optStr(20),
  projectType: optStr(80),
  squareFootage: optStr(60),
  projectStatus: optStr(80),
  // honeypot — must stay empty
  company: z.string().max(0).optional().or(z.literal("")),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadActionState = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string>;
};
