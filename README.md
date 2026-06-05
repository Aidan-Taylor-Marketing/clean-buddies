# Clean Buddies

Marketing website + lead capture for Clean Buddies cleaning service. Rebuilt from
Go High Level on Next.js, Supabase, and Vercel.

## Stack

- **Next.js 16** (App Router, React 19, Turbopack)
- **Tailwind CSS v4** + **shadcn/ui**
- **Supabase** — Postgres (leads + blog), Auth (admin login)
- **Resend** — new-lead email notifications
- **Vercel** — hosting & CI/CD

## What's here

| Area | Path |
| --- | --- |
| Marketing pages | `src/app/(marketing)/` — home, services, pricing, about, contact |
| Blog (DB-driven) | `src/app/(marketing)/blog/` — reads published posts from Supabase |
| Lead capture form | `src/components/lead-form.tsx` → `src/app/actions/submit-lead.ts` |
| Email notifications | `src/lib/email.ts` (Resend) |
| Admin dashboard | `src/app/admin/` — login + view/manage leads |
| Brand / content config | `src/lib/site.ts` |
| DB schema | `supabase/migrations/0001_init.sql` |

## Local development

```bash
npm install
# .env.local is already populated for this project (gitignored)
npm run dev                  # http://localhost:3000
```

Admin dashboard: <http://localhost:3000/admin>

## Environment variables

See `.env.example`. Supabase values are filled in. You must add:

- `RESEND_API_KEY` — from <https://resend.com/api-keys>
- `LEAD_NOTIFY_TO` — the inbox that receives new-lead emails
- `LEAD_NOTIFY_FROM` — a verified Resend sender (use `onboarding@resend.dev` until your domain is verified)

## Database

Schema lives in `supabase/migrations/`. Two tables:

- `leads` — form submissions (anon can insert; only authenticated admins can read)
- `blog_posts` — blog content (public reads published; admins manage)

Row Level Security is enabled on both.

## Editing content

- **Brand, phone, services, nav:** `src/lib/site.ts`
- **Blog posts:** rows in the `blog_posts` table (set `published = true` to go live)
- **Colors:** `src/app/globals.css` (`--primary` etc.)
