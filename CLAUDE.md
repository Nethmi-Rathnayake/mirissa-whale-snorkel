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
- Three fonts loaded via `next/font/google` in `app/layout.tsx` (not the `create-next-app` default Geist): DM Sans → `--font-dm-sans` / `font-sans` (body), Playfair Display → `--font-playfair` / `font-serif` (display/heading), Inter → `--font-inter` (used directly where a distinct weight/tracking is needed, e.g. eyebrow labels)

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
- `app/page.tsx` — home page: `Header`, `Hero`, `Stats`, `Packages`, `Testimonials`, `Experience`, `TrustBadges`, `Footer`. All sections except `Header`/`Hero`/`Packages` are wrapped in `Reveal` for scroll-in animation.
- `app/packages/page.tsx` — packages index/listing page. Renders `Header` + `PackagesHero` + `Packages` + `Footer` (same `Packages` grid component used on the home page).
- `app/packages/[slug]/page.tsx` — one page per tour package, statically generated via `generateStaticParams`. Renders `Header` + `PackageDetail` + `Footer`.
- `app/about/page.tsx` — renders `Header` + `AboutHero`, `AboutJourney`, `AboutCrew`, `AboutSustainability` + `Footer`.
- `app/contact/page.tsx` — renders `Header` + `ContactHero` + `ContactForm` + `ContactInfo` (plus a static image and social links) + `Footer`.
- `app/faq/page.tsx` — renders `Header` + `FaqHero` + `FaqExplorer` (fed from `app/lib/faq.ts`) + `Footer`.
- `app/gallery/page.tsx` — renders `Header` + `GalleryHero` + `GalleryGrid` + `Footer`.

Each of these route files sets its own `export const metadata: Metadata` (title/description) rather than relying on a shared layout default — follow that pattern for any new route.

**Package data** lives entirely in `app/lib/packages.ts`, not in any CMS or database:
- `packages: TourPackage[]` is the single source of truth for tour content (pricing, images, features, species, logistics). `Packages` (the grid rendered on both the home page and `/packages`) and `PackageDetail` (the `[slug]` page) both render from this array — add a new tour by appending to it.
- `getPackageBySlug(slug)` powers the dynamic route's lookup and 404 (`notFound()`) handling.
- Each `TourPackage` carries its own `topics: { label, anchor }[]` (there's no shared/global topic list — anchors are per-package and vary in name/count between tours). These deep-link into `PackageDetail` sections rendered from the same package's `sections`/sidebar data (e.g. `/packages/${slug}#price`); anchored elements use `scroll-mt-28` so the sticky header doesn't cover them. Adding a topic to a package means adding both the `topics` entry and the corresponding `id`-bearing section for that package.
- `TourPackage.videos?: { src, label }[]` is optional per-package; when present, `PackageDetail` renders a "Video Highlights" grid of `<video controls>` tiles below the accordion. Not every package has videos — check before assuming the section exists.

**FAQ data** lives similarly in `app/lib/faq.ts`: `faqCategories: FaqCategory[]` groups `FaqQuestion` entries under a category id/title; `FaqExplorer` (client component) renders the interactive filtering/accordion UI from this array, so add a new FAQ by editing the array, not the component.

**Components** (`app/components/`) are mostly presentational; `"use client"` is used specifically for interactivity: `Header` (mobile menu + active-link state), `NewsletterForm` (submitted state), `Hero`, `Accordion`, `FaqExplorer`, `ContactForm`, `Testimonials`, `GalleryHero` and `GalleryGrid` (lightbox/filter state), and `Reveal` (a generic `IntersectionObserver`-based scroll-reveal wrapper used to fade/slide content into view — wrap new on-scroll animated sections in it rather than writing a new observer). `icons.tsx` holds all inline SVG icons as small components rather than an icon library dependency.

**Styling** uses Tailwind utility classes exclusively (no CSS modules/styled-components). The color palette is defined as CSS custom properties in `app/globals.css` (`--color-ivory`, `--color-cream`, `--color-border`, `--color-ink`, `--color-body`, `--color-accent`, `--color-accent-dark`) and re-exposed through Tailwind v4's `@theme inline` block, so they're used as ordinary utilities (`bg-ivory`, `text-ink`, `border-accent/25`, etc.) rather than arbitrary values.

**Images** referenced by components (`/images/*`, a mix of `.png` and legacy `.jpg`) live in `public/images/` and are served statically; all are used with `next/image`'s `fill` + `sizes` pattern, not fixed `width`/`height`. **Videos** (`/videos/*.mp4`) live in `public/videos/` and are self-hosted (no external embeds) — referenced from `TourPackage.videos`, `GalleryGrid`'s video tiles, `GalleryHero`'s background, and the home `Hero` carousel.

Two components mix images and video in one list, both using the same `type: "image" | "video"` discriminator on their slide/item objects and rendering `<Image>` or an autoplaying muted looping `<video>` accordingly — follow that convention rather than inventing a new one:

- **`GalleryGrid`** merges two separate arrays — `GALLERY_IMAGES` and `GALLERY_VIDEOS` — into one `GALLERY_ITEMS` list via `interleaveMedia()`, which spaces videos evenly through the images rather than grouping all of one type together. Every item carries a `category` matching a package `slug`, and the filter buttons are generated from `packages` — add media by appending to the relevant array with a matching `category`, not by editing the filter/render logic.
- **`Hero`** (home page) cross-fades `HERO_SLIDES` on a `SLIDE_DURATION_MS` interval; slides advance on a fixed timer regardless of video length, and the video slide's `playbackRate` is set to `VIDEO_PLAYBACK_RATE` in a ref callback (there's no declarative HTML attribute for playback speed).

**`GalleryHero`** is the exception to the pattern above: it has two independent media systems on the same page — a single full-bleed autoplaying background video (`public/videos/gallery-hero-background.mp4`, unrelated to any package) behind the headline, and a separate per-package *still-image* preview card below it (`HERO_OPTIONS`, built from `packages` plus a synthetic `"highlights"` entry) whose small thumbnail/CTA switches on click; `HERO_IMAGE_OVERRIDES` lets a package show a different still image in that preview card than its own `heroImage`.

## Brand and product direction

`PRODUCT.md` defines the brand personality, target user, and design principles (warm/trustworthy/premium boutique eco-tour operator, trust-before-upsell, no stock-template genericness) plus an explicit accessibility bar (WCAG AA, visible focus states, no motion-only affordances — see `Reveal`'s `motion-reduce` handling). Read it before making visual/copy decisions on marketing sections.
