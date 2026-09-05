---
name: nextjs-mobile-responsive
description: Make a Next.js project mobile responsive. Use this whenever the user asks to make their Next.js app/site mobile-friendly, fix layout issues on small screens, add responsive breakpoints, or improve how pages look on phones/tablets. Also trigger when the user reports things like "this looks broken on mobile", "not responsive", "overflowing on small screens", or asks for a mobile-first redesign of a Next.js page or component.
---

# Next.js Mobile Responsive

A practical checklist and workflow for auditing and fixing mobile responsiveness in a Next.js project.

## Step 1: Confirm the setup

Before making changes, check:
- Styling approach: Tailwind CSS, CSS Modules, plain CSS, or styled-components. The fix pattern differs.
- App Router (`app/`) vs Pages Router (`pages/`) — affects where layout/meta files live.
- Whether a viewport meta tag is already set. In App Router, Next.js sets a sensible default automatically via the `viewport` export; in Pages Router, check `pages/_document.js` for:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ```
  If missing, add it — this is the #1 cause of "not responsive" bugs.

## Step 2: Audit common problem areas

Go through the project and look for these mobile-breaking patterns:

1. **Fixed pixel widths** (`width: 800px`, `w-[800px]`) on containers, cards, or images — replace with `max-width` + `width: 100%`, or Tailwind's `w-full max-w-*`.
2. **Non-responsive grids/flex layouts** — a `grid-cols-3` or `flex-row` that never collapses to a single column on small screens.
3. **Fixed font sizes** for headings that are too large on phones.
4. **Horizontal overflow** — usually from a fixed-width element, an image without `max-width: 100%`, or a table without a scroll wrapper.
5. **Nav bars** built for desktop with no hamburger/mobile menu variant.
6. **Images not using `next/image`** — raw `<img>` tags without responsive `sizes`/`fill` can cause layout shift and oversized downloads on mobile.
7. **Touch target size** — buttons/links smaller than ~44x44px are hard to tap.
8. **Modals/dropdowns** that overflow the viewport on small screens.

## Step 3: Fix with the right tool for the styling approach

### Tailwind CSS (most common in Next.js)
Use mobile-first breakpoint prefixes — unprefixed styles apply to mobile, then override upward:
```jsx
// Stacks on mobile, 3 columns from md breakpoint up
<div className="grid grid-cols-1 gap-4 md:grid-cols-3">

// Smaller heading on mobile, larger on desktop
<h1 className="text-2xl md:text-4xl lg:text-5xl">

// Full width on mobile, capped width on larger screens
<div className="w-full max-w-4xl mx-auto px-4">

// Hide desktop nav on mobile, show hamburger instead
<nav className="hidden md:flex gap-6">...</nav>
<button className="md:hidden">☰</button>
```
Default Tailwind breakpoints: `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1536px.

### CSS Modules / plain CSS
Use media queries mobile-first (base styles = mobile, then `min-width` overrides):
```css
.container {
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    flex-direction: row;
    padding: 2rem;
  }
}
```
Avoid `max-width` media queries as the primary pattern unless the project already uses desktop-first — mixing both leads to conflicting overrides.

### Images
Prefer `next/image` for anything responsive:
```jsx
import Image from "next/image";

<Image
  src="/hero.jpg"
  alt="Hero"
  fill
  sizes="(max-width: 768px) 100vw, 50vw"
  style={{ objectFit: "cover" }}
/>
```
`sizes` tells the browser what width to expect at each breakpoint so it downloads an appropriately sized image on mobile.

## Step 4: Test responsiveness

- Use browser dev tools' device toolbar to check at common widths: 375px (small phone), 390–428px (modern phones), 768px (tablet), 1024px+ (desktop).
- Check for horizontal scrollbars at each width — that's the clearest sign of an overflow bug. A quick way to spot the culprit: add `outline: 1px solid red` temporarily to `*` and see which element extends past the viewport.
- Check tap target spacing and font legibility at the smallest width, not just that it "fits."

## Step 5: Common quick fixes reference

| Symptom | Likely cause | Fix |
|---|---|---|
| Page scrolls horizontally on mobile | Fixed-width element or unconstrained image | `max-width: 100%`, `overflow-x: hidden` on a wrapper as a last resort (fix the source first) |
| Text too small/large on phone | No responsive type scale | Use `clamp()` in CSS, or Tailwind's responsive text utilities |
| Nav unusable on mobile | Desktop-only nav markup | Add a mobile menu (hamburger + drawer/dropdown), hide with `hidden md:flex` |
| Cards/grid squished | Fixed column count | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |
| Buttons hard to tap | Touch target too small | Minimum `44px` height/width, adequate padding |
| Layout shifts on load | Images without dimensions | Use `next/image` with `width`/`height` or `fill` + a sized parent |

## Output expectations

When applying fixes, prefer editing the actual project files directly (components, layout files, global CSS) rather than just describing changes — the user wants a working responsive result, not just advice. After edits, summarize what was changed and which breakpoints were addressed.
