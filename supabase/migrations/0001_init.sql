-- Clean Buddies initial schema
-- Leads (quote/contact form submissions) + blog posts

-- =========================================================
-- LEADS
-- =========================================================
create table if not exists public.leads (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  email        text not null,
  phone        text,
  service      text,                 -- e.g. residential, commercial, deep-clean
  address      text,
  message      text,
  source       text default 'website',
  status       text not null default 'new',   -- new | contacted | quoted | won | lost
  notes        text
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);
create index if not exists leads_status_idx on public.leads (status);

alter table public.leads enable row level security;

-- Anonymous visitors may INSERT a lead (form submission), but cannot read.
drop policy if exists "anon can insert leads" on public.leads;
create policy "anon can insert leads"
  on public.leads for insert
  to anon, authenticated
  with check (true);

-- Only authenticated (admin) users may read/update/delete leads.
drop policy if exists "authenticated can read leads" on public.leads;
create policy "authenticated can read leads"
  on public.leads for select
  to authenticated
  using (true);

drop policy if exists "authenticated can update leads" on public.leads;
create policy "authenticated can update leads"
  on public.leads for update
  to authenticated
  using (true) with check (true);

drop policy if exists "authenticated can delete leads" on public.leads;
create policy "authenticated can delete leads"
  on public.leads for delete
  to authenticated
  using (true);

-- =========================================================
-- BLOG POSTS
-- =========================================================
create table if not exists public.blog_posts (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now(),
  slug          text not null unique,
  title         text not null,
  excerpt       text,
  body          text not null default '',     -- markdown
  cover_image    text,
  author        text default 'Clean Buddies',
  published      boolean not null default false,
  published_at   timestamptz
);

create index if not exists blog_posts_published_idx on public.blog_posts (published, published_at desc);

alter table public.blog_posts enable row level security;

-- Anyone can read PUBLISHED posts.
drop policy if exists "public can read published posts" on public.blog_posts;
create policy "public can read published posts"
  on public.blog_posts for select
  to anon, authenticated
  using (published = true);

-- Authenticated admins can do everything.
drop policy if exists "authenticated manage posts" on public.blog_posts;
create policy "authenticated manage posts"
  on public.blog_posts for all
  to authenticated
  using (true) with check (true);

-- keep updated_at fresh
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
  before update on public.blog_posts
  for each row execute function public.set_updated_at();
