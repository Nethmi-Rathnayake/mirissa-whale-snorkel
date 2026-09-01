# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

A marketing/booking site for a whale-and-dolphin snorkeling tour operator in Mirissa, Sri Lanka. Started from `create-next-app`; the default template has been replaced with a real home page and a dynamic package-detail route (see `git log` for progression). There is no backend, database, or auth — all content is static/hardcoded in TypeScript, and "booking" is a `mailto:` link.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — run the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`, extends `eslint-config-next`'s `core-web-vitals` + `typescript` rules)

No test runner is configured.

## Stack

- Next.js 16.3.3 (App Router) — see "Non-standard Next.js version" below before writing any Next.js-specific code
- React 19.2.8 / React DOM 19.2.8
- TypeScript, strict mode, path alias `@/*` → repo root
- Tailwind CSS v4 (CSS-first config via `@import "tailwindcss"` and `@theme inline` in `app/globals.css`, no `tailwind.config.*` file)
- DM Sans loaded via `next/font/google` in `app/layout.tsx` and exposed as `--font-dm-sans` / the `font-sans` Tailwind utility (not the `create-next-app` default Geist)

## Non-standard Next.js version

`next@16.3.3` is newer than what most training data covers and has real breaking API/convention changes. Before writing or editing any Next.js-specific code (routing, layouts, data fetching, config, etc.), read the relevant guide under `node_modules/next/dist/docs/` — it's the actual bundled documentation for this installed version, not boilerplate. Key sections:

- `01-app/01-getting-started/`
- `01-app/02-guides/` (includes `upgrading/` and `migrating/` for breaking-change specifics)
- `01-app/03-api-reference/`

Two concrete examples already in this codebase, both using generated global helper types instead of hand-written prop types:
- `RootLayout` in `app/layout.tsx` types its props as `LayoutProps<"/">`.
- `PackagePage` in `app/packages/[slug]/page.tsx` types its props as `PageProps<"/packages/[slug]">`, and `generateStaticParams`/`generateMetadata` follow the same convention (`params` is a `Promise` that must be `await`ed).

The `<!-- BEGIN:nextjs-agent-rules -->…<!-- END:nextjs-agent-rules -->` block in `AGENTS.md` is written/maintained automatically by `next dev` (see `node_modules/next/dist/server/lib/generate-agent-files.js`) — don't hand-edit it; it will be re-added if removed.

## Architecture

**Routes** (App Router, all pages are server components that compose section components):
- `app/page.tsx` — home page, composed of `Header`, `Hero`, `Stats`, `Packages`, `Experience`, `Footer`.
- `app/packages/[slug]/page.tsx` — one page per tour package, statically generated via `generateStaticParams`. Renders `Header` + `PackageDetail` + `Footer`.
- `app/about/page.tsx` — renders `Header` + `AboutHero`, `AboutJourney`, `AboutCrew`, `AboutSustainability` + `Footer`.
- `app/contact/page.tsx` — renders `Header` + `ContactForm` + `ContactInfo` (plus a static image and social links) + `Footer`.
- `app/faq/page.tsx` — renders `Header` + `FaqHero` + `FaqExplorer` (fed from `app/lib/faq.ts`) + `Footer`.

Each of these route files sets its own `export const metadata: Metadata` (title/description) rather than relying on a shared layout default — follow that pattern for any new route.

**Package data** lives entirely in `app/lib/packages.ts`, not in any CMS or database:
- `packages: TourPackage[]` is the single source of truth for tour content (pricing, images, features, species, logistics). `Packages` (grid on the home page) and `PackageDetail` (the `[slug]` page) both render from this array — add a new tour by appending to it.
- `getPackageBySlug(slug)` powers the dynamic route's lookup and 404 (`notFound()`) handling.
- `TOPIC_ANCHORS` / `PACKAGE_TOPICS` define the set of on-page section ids (price, included, species, etc.). The home page package cards deep-link into these anchors on the detail page (e.g. `/packages/${slug}#price`); `PackageDetail` renders a matching `id={...}` + `scroll-mt-28` on each section. Adding a new topic requires updating both this list and the corresponding section in `PackageDetail.tsx`.

**FAQ data** lives similarly in `app/lib/faq.ts`: `faqCategories: FaqCategory[]` groups `FaqQuestion` entries under a category id/title; `FaqExplorer` (client component) renders the interactive filtering/accordion UI from this array, so add a new FAQ by editing the array, not the component.

**Components** (`app/components/`) are mostly presentational; `"use client"` is used specifically for interactivity: `Header` (mobile menu + active-link state), `NewsletterForm` (submitted state), `Hero`, `Accordion`, `FaqExplorer`, `ContactForm`, and `Reveal` (a generic `IntersectionObserver`-based scroll-reveal wrapper used to fade/slide content into view — wrap new on-scroll animated sections in it rather than writing a new observer). `icons.tsx` holds all inline SVG icons as small components rather than an icon library dependency.

**Styling** uses Tailwind utility classes exclusively (no CSS modules/styled-components). The color palette is defined as CSS custom properties in `app/globals.css` (`--color-ivory`, `--color-cream`, `--color-border`, `--color-ink`, `--color-body`, `--color-accent`, `--color-accent-dark`) and re-exposed through Tailwind v4's `@theme inline` block, so they're used as ordinary utilities (`bg-ivory`, `text-ink`, `border-accent/25`, etc.) rather than arbitrary values.

**Images** referenced by components (`/images/*.jpg`) live in `public/images/` and are served statically; all are used with `next/image`'s `fill` + `sizes` pattern, not fixed `width`/`height`.

## Repository note

This working tree has an untracked nested directory, `mirissa-whale-snorkel/`, which is itself a separate git repository containing what looks like an earlier copy of this same project. It's excluded from version control by being untracked, but be aware it exists so file searches/greps aren't confused by duplicate hits — it is not part of the active app.
