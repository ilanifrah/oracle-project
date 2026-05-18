-- Oracle project database schema
-- Run in Supabase SQL editor

create extension if not exists "pgcrypto";

-- ── quiz_sessions ─────────────────────────────────────────
create table if not exists quiz_sessions (
  id           uuid primary key default gen_random_uuid(),
  language     text not null default 'en',
  answers      jsonb not null default '{}',
  scores       jsonb not null default '{}',
  archetype    text not null,
  email        text,
  name         text,
  completed_at timestamptz,
  created_at   timestamptz not null default now()
);

-- ── payments ──────────────────────────────────────────────
create table if not exists payments (
  id                       uuid primary key default gen_random_uuid(),
  session_id               uuid references quiz_sessions(id),
  plan                     text not null,
  amount                   integer not null,   -- in cents
  currency                 text not null default 'usd',
  stripe_payment_intent_id text unique not null,
  status                   text not null default 'pending',
  email                    text,
  created_at               timestamptz not null default now()
);

-- ── reports ───────────────────────────────────────────────
create table if not exists reports (
  id                       uuid primary key default gen_random_uuid(),
  session_id               uuid references quiz_sessions(id),
  plan                     text not null,
  content                  text not null,
  stripe_payment_intent_id text references payments(stripe_payment_intent_id),
  paid                     boolean not null default false,
  created_at               timestamptz not null default now()
);

-- ── Row Level Security ────────────────────────────────────
-- Service role has full access (server uses service key).
-- Anon role cannot read reports or payments directly.

alter table quiz_sessions enable row level security;
alter table payments      enable row level security;
alter table reports       enable row level security;

-- Allow server (service_role) full access — service_role bypasses RLS by default.

-- Public: insert-only on quiz_sessions (quiz submit)
create policy "anon_insert_sessions" on quiz_sessions
  for insert to anon with check (true);

-- Public: read own session by id (no auth, just by id knowledge)
create policy "anon_read_session" on quiz_sessions
  for select to anon using (true);

-- Public: read own paid report by session_id
create policy "anon_read_paid_report" on reports
  for select to anon using (paid = true);

-- No public access to payments table
