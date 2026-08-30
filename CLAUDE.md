# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

This is a freshly scaffolded `create-next-app` project — currently just the default template (`app/page.tsx`, `app/layout.tsx`) with no custom routes, components, or business logic added yet.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`'s `core-web-vitals` + `typescript` rules)

No test runner is configured yet.

## Stack

- Next.js 16.3.3 (App Router) — see "Non-standard Next.js version" below before writing any Next.js-specific code
- React 19.2.8 / React DOM 19.2.8
- TypeScript, strict mode, path alias `@/*` → repo root
- Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` and `@theme inline` in `app/globals.css`, no `tailwind.config.*` file)
- Geist Sans / Geist Mono loaded via `next/font/google` in `app/layout.tsx`

## Non-standard Next.js version

`next@16.3.3` is newer than what most training data covers and has real breaking API/convention changes. Before writing or editing any Next.js-specific code (routing, layouts, data fetching, config, etc.), read the relevant guide under `node_modules/next/dist/docs/` — it's the actual bundled documentation for this installed version, not boilerplate. Key sections:

- `01-app/01-getting-started/`
- `01-app/02-guides/` (includes `upgrading/` and `migrating/` for breaking-change specifics)
- `01-app/03-api-reference/`

One concrete example already in this codebase: `RootLayout` in `app/layout.tsx` types its props as `LayoutProps<"/">` (a generated global helper type), not a hand-written `{ children: React.ReactNode }` prop.

The `<!-- BEGIN:nextjs-agent-rules -->…<!-- END:nextjs-agent-rules -->` block in `AGENTS.md` is written/maintained automatically by `next dev` (see `node_modules/next/dist/server/lib/generate-agent-files.js`) — don't hand-edit it; it will be re-added if removed.
