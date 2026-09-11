# UniApply — Frontend Starter

A student-facing frontend for a "apply once, reach every school" platform.
Built with Next.js (App Router), TypeScript, Tailwind CSS, React Hook Form + Zod.

## What's included

- `app/page.tsx` — landing page
- `app/apply/page.tsx` — the multi-step profile builder (personal info → academics → essay), validated with Zod
- `app/universities/page.tsx` — searchable university selector
- `app/dashboard/page.tsx` — student dashboard with profile completeness + application statuses
- `components/ui/*` — small hand-built component primitives (button, input, card, progress, etc.), shadcn-style
- `components/profile-wizard/*` — the step form and its individual steps
- `lib/validations/profile.ts` — Zod schemas for form validation
- `data/universities.ts` — mock university data (swap for a real API/database later)

## Setup

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Notes

- All data is currently in-memory / mock (see `data/universities.ts` and the
  `console.log` in `ProfileWizard.tsx`). Wire these up to your backend
  (e.g. Supabase) when you're ready — see the earlier plan for suggested
  schema and auth.
- Design tokens (colors, fonts) live in `tailwind.config.ts` and
  `app/globals.css`. The palette is ink navy + brass gold on a paper-white
  background, with Lora for headlines and Inter for UI text.
- No backend, auth, or file upload wiring yet — this is the frontend shell
  ready to connect to real data.
