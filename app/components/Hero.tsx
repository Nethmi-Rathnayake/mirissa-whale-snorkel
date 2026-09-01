"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDownIcon, PlayIcon, WhaleTailIcon } from "./icons";

const SLIDE_DURATION_MS = 5000;

const TYPED_WORDS = [
  "Deep Adventure",
  "Marine Majesty",
  "Ocean Magic",
  "Whale Encounter",
  "Sea Giants",
];

const TYPING_SPEED_MS = 90;
const DELETING_SPEED_MS = 45;
const HOLD_DURATION_MS = 1500;

const HERO_SLIDES = [
  {
    src: "/images/hero-whale-underwater.png",
    alt: "A humpback whale gliding just beneath the surface near Mirissa",
  },
  {
    src: "/images/hero-diver-reef-fish.png",
    alt: "A scuba diver gliding past a school of fish above the reef",
  },
  {
    src: "/images/hero-whale-shark-divers.png",
    alt: "Two divers giving the OK sign as a whale shark passes overhead",
  },
  {
    src: "/images/hero-snorkelers-reef.png",
    alt: "A family snorkeling together over a vibrant coral reef",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(id);
  }, []);

  const [wordIndex, setWordIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = TYPED_WORDS[wordIndex];

    if (!isDeleting && typedText === currentWord) {
      const holdTimeout = setTimeout(() => setIsDeleting(true), HOLD_DURATION_MS);
      return () => clearTimeout(holdTimeout);
    }

    if (isDeleting && typedText === "") {
      const nextWordTimeout = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % TYPED_WORDS.length);
      }, 300);
      return () => clearTimeout(nextWordTimeout);
    }

    const timeout = setTimeout(
      () => {
        setTypedText((current) =>
          isDeleting
            ? currentWord.slice(0, current.length - 1)
            : currentWord.slice(0, current.length + 1)
        );
      },
      isDeleting ? DELETING_SPEED_MS : TYPING_SPEED_MS
    );
    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, wordIndex]);

  return (
    <section className="relative flex min-h-[max(720px,94vh)] w-full items-start overflow-hidden pb-24 pt-8">
      {HERO_SLIDES.map((slide, i) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#040f1a]/80 via-[#040f1a]/45 to-[#040f1a]/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 lg:px-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#040f1a]/60 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
            <WhaleTailIcon className="h-3.5 w-3.5 text-[#5EC8F0]" />
            Whale Watching in Mirissa
          </span>

          <h1 className="mt-6 font-inter text-4xl font-medium leading-[1.15] tracking-tight sm:text-6xl lg:text-[64px]">
            <span className="mt-[10px] block whitespace-nowrap text-[clamp(1.1rem,5.6vw,4rem)] text-[#5EC8F0]">
              Dive Into The Deep Blue Sea
            </span>
            <span className="block text-white">And See The World&rsquo;s</span>
            <span className="block whitespace-nowrap text-[#E0BF00]">
              <span aria-hidden="true">
                {typedText}
                <span
                  className="ml-0.5 inline-block w-[3px] animate-[cursor-blink_1s_step-start_infinite] bg-[#E0BF00] align-[-0.1em] motion-reduce:animate-none"
                  style={{ height: "0.9em" }}
                />
              </span>
              <span className="sr-only">{TYPED_WORDS.join(", ")}</span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
            An unforgettable ocean adventure where you can witness majestic
            whales in their natural habitat.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#packages"
              className="flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#3FB6E8] to-[#1C86C9] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white shadow-lg shadow-[#1C86C9]/30 transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/logo.png"
                  alt=""
                  fill
                  sizes="20px"
                  className="object-cover"
                />
              </span>
              Explore Packages
            </a>
            <a
              href="#experience"
              className="flex items-center gap-2.5 rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-ink">
                <PlayIcon />
              </span>
              Watch the Film
            </a>
          </div>

          <div className="mt-10 flex w-full max-w-xs items-center gap-2">
            {HERO_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Show slide ${i + 1} of ${HERO_SLIDES.length}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/25"
              >
                <span
                  key={i === index ? `active-${index}` : `idle-${i}`}
                  style={
                    i === index
                      ? { animationDuration: `${SLIDE_DURATION_MS}ms` }
                      : undefined
                  }
                  className={`block h-full origin-left rounded-full bg-white ${
                    i < index
                      ? "scale-x-100"
                      : i === index
                        ? "animate-[hero-progress_linear_forwards]"
                        : "scale-x-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80 sm:bottom-20">
        <span className="sr-only">Scroll</span>
        <ChevronDownIcon className="animate-bounce" />
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 z-10 h-10 w-full sm:h-14"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 40C240 90 480 0 720 20C960 40 1200 100 1440 50V100H0Z"
          className="fill-cream"
        />
      </svg>
    </section>
  );
}
