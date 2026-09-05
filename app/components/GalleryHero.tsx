"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CameraIcon } from "./icons";
import Reveal from "./Reveal";
import { packages } from "../lib/packages";

const HERO_IMAGE_OVERRIDES: Record<string, { heroImage: string; heroImageAlt: string }> = {
  "dolphin-watching": {
    heroImage: "/images/gallery-dolphin-pod.png",
    heroImageAlt: "A pod of dolphins swimming together underwater",
  },
};

const HERO_OPTIONS = [
  ...packages.map((pkg) => ({
    slug: pkg.slug,
    name: pkg.name,
    blurb: pkg.tagline,
    heroImage: HERO_IMAGE_OVERRIDES[pkg.slug]?.heroImage ?? pkg.heroImage,
    heroImageAlt: HERO_IMAGE_OVERRIDES[pkg.slug]?.heroImageAlt ?? pkg.heroImageAlt,
    ctaHref: `/packages/${pkg.slug}#price`,
    ctaLabel: `View ${pkg.name}`,
  })),
  {
    slug: "highlights",
    name: "Gallery Highlights",
    blurb: "A closer look at the moments our guests bring home.",
    heroImage: "/images/gallery-hero-divers.png",
    heroImageAlt: "A family of divers holding hands over a coral reef",
    ctaHref: "/packages",
    ctaLabel: "Browse All Tours",
  },
];

const DEFAULT_SLUG = "highlights";

export default function GalleryHero() {
  const [selectedSlug, setSelectedSlug] = useState(DEFAULT_SLUG);
  const selected =
    HERO_OPTIONS.find((option) => option.slug === selectedSlug) ??
    HERO_OPTIONS[0];

  return (
    <section className="relative w-full bg-ivory pb-6 sm:pb-8">
      <div className="relative h-[60vh] min-h-[440px] w-full overflow-hidden sm:h-[64vh] lg:h-[70vh]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/gallery-hero-background.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/5"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent"
          aria-hidden="true"
        />

        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 lg:px-16 lg:pb-20">
          <Reveal>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              <CameraIcon className="h-3.5 w-3.5 text-accent" />
              Photo Gallery
            </span>
            <h1 className="mt-5 max-w-2xl font-inter text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
              Moments From
              <span className="block text-[#E0BF00]">the Water</span>
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-white/80">
              Whales, dolphins and reef life as our guides and guests have
              captured them, trip after trip, out on Mirissa&rsquo;s waters.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={150}>
        <div className="relative z-10 mx-6 -mt-10 flex flex-col gap-5 rounded-2xl border border-border/80 bg-white p-5 shadow-lg shadow-ink/10 sm:mx-auto sm:max-w-xl lg:mx-16 lg:max-w-2xl lg:p-6">
          <div className="flex items-center gap-4">
            <span className="relative hidden h-14 w-14 shrink-0 overflow-hidden rounded-xl sm:block">
              <Image
                src={selected.heroImage}
                alt=""
                fill
                sizes="56px"
                className="object-cover transition-opacity duration-300"
              />
            </span>

            <div className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-body">
                <CameraIcon className="h-3 w-3" />
                Preview a Tour
              </span>
              <p className="mt-1 truncate text-sm font-semibold text-ink">
                {selected.name}
              </p>
              <p className="mt-0.5 truncate text-xs text-body">
                {selected.blurb}
              </p>
            </div>

            <Link
              href={selected.ctaHref}
              className="hidden shrink-0 rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:block"
            >
              {selected.ctaLabel}
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 border-t border-border/70 pt-4">
            {HERO_OPTIONS.map((option) => (
              <button
                key={option.slug}
                type="button"
                aria-pressed={option.slug === selectedSlug}
                onClick={() => setSelectedSlug(option.slug)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  option.slug === selectedSlug
                    ? "border-accent bg-accent text-white"
                    : "border-border bg-ivory text-ink/80 hover:bg-cream"
                }`}
              >
                {option.name}
              </button>
            ))}
          </div>

          <Link
            href={selected.ctaHref}
            className="rounded-full bg-accent px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:hidden"
          >
            {selected.ctaLabel}
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
