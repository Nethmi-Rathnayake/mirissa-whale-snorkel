"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import { packages } from "../lib/packages";

const GALLERY_VIDEOS = [
  {
    src: "/videos/discover-scuba-diving-clip-1.mp4",
    alt: "First Breath Underwater",
    span: "row-span-2",
    category: "discover-scuba-diving",
  },
  {
    src: "/videos/discover-scuba-diving-clip-2.mp4",
    alt: "Guided Reef Introduction",
    span: "",
    category: "discover-scuba-diving",
  },
  {
    src: "/videos/discover-scuba-diving-clip-3.mp4",
    alt: "Discover Scuba Highlights",
    span: "",
    category: "discover-scuba-diving",
  },
  {
    src: "/videos/padi-bubblemaker-clip-1.mp4",
    alt: "Kids' First Dive",
    span: "row-span-2",
    category: "padi-bubblemaker-seal-team",
  },
  {
    src: "/videos/padi-bubblemaker-clip-2.mp4",
    alt: "Shallow Reef Exploring",
    span: "",
    category: "padi-bubblemaker-seal-team",
  },
  {
    src: "/videos/padi-bubblemaker-clip-3.mp4",
    alt: "Bubblemaker Highlights",
    span: "",
    category: "padi-bubblemaker-seal-team",
  },
  {
    src: "/videos/snorkeling-with-turtles-clip-1.mp4",
    alt: "Snorkeling with Turtles Highlights",
    span: "col-span-2",
    category: "snorkeling-with-turtles",
  },
  {
    src: "/videos/fun-diving-clip-1.mp4",
    alt: "Reef Dive Highlights",
    span: "row-span-2",
    category: "fun-diving",
  },
  {
    src: "/videos/fun-diving-clip-2.mp4",
    alt: "Exploring the Reef",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/videos/fun-diving-clip-3.mp4",
    alt: "Diving with the Crew",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/videos/fun-diving-clip-4.mp4",
    alt: "Underwater Moments",
    span: "col-span-2",
    category: "fun-diving",
  },
  {
    src: "/videos/fun-diving-clip-5.mp4",
    alt: "Reef Life Up Close",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/videos/fun-diving-clip-6.mp4",
    alt: "A Day of Fun Diving",
    span: "",
    category: "fun-diving",
  },
].map((video) => ({ ...video, type: "video" as const }));

const GALLERY_IMAGES = [
  {
    src: "/images/whale-snorkeling-group-blue-whale.png",
    alt: "A group of snorkelers swimming beside a massive blue whale underwater",
    span: "row-span-2",
    category: "whale-snorkeling",
  },
  {
    src: "/images/whale-snorkeler-diver-view.png",
    alt: "A snorkeler swimming above a blue whale in open water",
    span: "",
    category: "whale-snorkeling",
  },
  {
    src: "/images/blue-whale-sunbeams.png",
    alt: "A blue whale surfacing through sunlit water",
    span: "",
    category: "whale-snorkeling",
  },
  {
    src: "/images/turtle.jpg",
    alt: "A sea turtle gliding over a coral reef",
    span: "row-span-2",
    category: "snorkeling-with-turtles",
  },
  {
    src: "/images/turtle-couple-snorkeling.png",
    alt: "A couple snorkeling together, holding hands underwater",
    span: "",
    category: "snorkeling-with-turtles",
  },
  {
    src: "/images/turtle-snorkeler-boy.png",
    alt: "A child snorkeling over a shallow reef",
    span: "",
    category: "snorkeling-with-turtles",
  },
  {
    src: "/images/journey-beyond-surface.jpg",
    alt: "A diver descending into open blue water",
    span: "row-span-2",
    category: "night-diving",
  },
  {
    src: "/images/coral-reef.jpg",
    alt: "Sunlight filtering through a shallow coral reef",
    span: "",
    category: "night-diving",
  },
  {
    src: "/images/whale-tails-aerial.jpg",
    alt: "Aerial view of two whales surfacing side by side",
    span: "col-span-2",
    category: "whale-watching",
  },
  {
    src: "/images/blue-whale-underwater-side.png",
    alt: "A blue whale gliding through open water",
    span: "",
    category: "whale-watching",
  },
  {
    src: "/images/humpback-whale-tail-breach.png",
    alt: "A humpback whale's tail rising out of the water mid-breach",
    span: "col-span-2",
    category: "whale-watching",
  },
  {
    src: "/images/blue-whale-spouting.png",
    alt: "A blue whale surfacing and spouting near the boat",
    span: "",
    category: "whale-watching",
  },
  {
    src: "/images/fun-diving-friends-wetsuits-beach.png",
    alt: "Two divers in wetsuits smiling on the beach before a dive",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-divers-clownfish-anemone.png",
    alt: "Two divers exploring a reef alongside clownfish and anemones",
    span: "row-span-2",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-anemone-clownfish-pair.png",
    alt: "Clownfish sheltering in anemones on the reef",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-school-of-fish.png",
    alt: "A large school of fish over a rocky reef",
    span: "col-span-2",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-diver-anemone-clownfish-selfie.png",
    alt: "A diver posing beside a fellow diver, framed by coral, anemone and clownfish",
    span: "row-span-2",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-turtle-encounter.png",
    alt: "A diver swimming toward a hawksbill turtle over the reef",
    span: "",
    category: "fun-diving",
  },
  {
    src: "/images/fun-diving-turtle-sandy-bottom.png",
    alt: "A diver hovering above a turtle gliding over the sandy sea floor",
    span: "col-span-2",
    category: "fun-diving",
  },
  {
    src: "/images/dsd-diver-ok-sign.png",
    alt: "A first-time diver giving the OK hand signal underwater",
    span: "row-span-2",
    category: "discover-scuba-diving",
  },
  {
    src: "/images/dsd-fish-school-reef.png",
    alt: "A school of reef fish over Mirissa's coral, seen on a Discover Scuba Diving trip",
    span: "",
    category: "discover-scuba-diving",
  },
  {
    src: "/images/dsd-fish-school-blue-water.png",
    alt: "A school of reef fish drifting over open blue water",
    span: "",
    category: "discover-scuba-diving",
  },
  {
    src: "/images/bubblemaker-fish-school-rocky-reef.png",
    alt: "A school of reef fish over a shallow, rocky reef",
    span: "col-span-2",
    category: "padi-bubblemaker-seal-team",
  },
  {
    src: "/images/bubblemaker-lionfish-coral.jpg",
    alt: "A lionfish resting on the coral at a shallow Mirissa reef",
    span: "",
    category: "padi-bubblemaker-seal-team",
  },
  {
    src: "/images/fun-diving-friends-wetsuits-beach.png",
    alt: "Two divers in wetsuits smiling on the beach before a dive",
    span: "col-span-2",
    category: "refresher-dive",
  },
  {
    src: "/images/dolphin-pod-leaping.png",
    alt: "A large pod of dolphins leaping together above the waves",
    span: "col-span-2",
    category: "dolphin-watching",
  },
  {
    src: "/images/dolphin-pod-underwater.png",
    alt: "A pod of dolphins swimming together underwater",
    span: "row-span-2",
    category: "dolphin-watching",
  },
  {
    src: "/images/dolphin-pair-surface.png",
    alt: "Dolphins swimming just beneath the surface off Mirissa",
    span: "",
    category: "dolphin-watching",
  },
  {
    src: "/images/dolphin-pod-jump-horizon.png",
    alt: "A dolphin leaping clear of the water as its pod swims alongside",
    span: "",
    category: "dolphin-watching",
  },
  {
    src: "/images/dolphin-pair-close-surface.png",
    alt: "Two dolphins swimming close together at the surface",
    span: "",
    category: "dolphin-watching",
  },
];

function interleaveMedia() {
  const images = GALLERY_IMAGES.map((image) => ({ ...image, type: "image" as const }));
  const imagesPerVideo = Math.max(1, Math.floor(images.length / GALLERY_VIDEOS.length));

  const items: (typeof images[number] | (typeof GALLERY_VIDEOS)[number])[] = [];
  let imageIndex = 0;

  for (const video of GALLERY_VIDEOS) {
    for (let i = 0; i < imagesPerVideo && imageIndex < images.length; i++) {
      items.push(images[imageIndex]);
      imageIndex++;
    }
    items.push(video);
  }

  while (imageIndex < images.length) {
    items.push(images[imageIndex]);
    imageIndex++;
  }

  return items;
}

const GALLERY_ITEMS = interleaveMedia();

const FILTERS = [
  { slug: "all", label: "Show All" },
  ...packages.map((pkg) => ({ slug: pkg.slug, label: pkg.name })),
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleImages =
    activeFilter === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section className="bg-ivory pb-24 pt-16 sm:pb-28 sm:pt-20">
      <div className="px-6 lg:px-16">
        <div className="mb-8 flex flex-wrap gap-2 sm:mb-10">
          {FILTERS.map((filter) => (
            <button
              key={filter.slug}
              type="button"
              onClick={() => setActiveFilter(filter.slug)}
              aria-pressed={activeFilter === filter.slug}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                activeFilter === filter.slug
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-white text-ink/80 hover:bg-cream"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          className="grid auto-rows-[140px] grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-3 sm:gap-4 lg:auto-rows-[200px] lg:grid-cols-4"
          style={{ gridAutoFlow: "dense" }}
        >
          {visibleImages.map((item, index) => (
            <Reveal
              key={`${item.category}-${item.src}`}
              delay={(index % 4) * 90}
              className={`h-full ${item.span}`}
            >
              <div className="group relative h-full w-full overflow-hidden rounded-2xl border border-border/60 bg-cream">
                {item.type === "video" ? (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
