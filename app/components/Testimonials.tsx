"use client";

import { useEffect, useState } from "react";
import { StarIcon } from "./icons";

const ROTATE_DURATION_MS = 6000;

const TESTIMONIALS = [
  {
    quote:
      "Swimming beside a blue whale was the most humbling moment of my life. The crew kept us calm and safe the entire time.",
    name: "Olivia Bennett",
    role: "Traveled from the UK",
    rating: "5.0",
  },
  {
    quote:
      "Our guide spotted a pod of spinner dolphins within twenty minutes of leaving the harbour. Absolutely unforgettable.",
    name: "Marcus Chen",
    role: "First-time visitor to Sri Lanka",
    rating: "5.0",
  },
  {
    quote:
      "Small group size made all the difference. It never felt crowded, and every question was answered.",
    name: "Priya Nair",
    role: "Solo traveler",
    rating: "5.0",
  },
  {
    quote:
      "The boat was spotless and comfortable, even when the sea got choppy on the way back to the harbour.",
    name: "Daniel Fischer",
    role: "Traveled from Germany",
    rating: "5.0",
  },
  {
    quote:
      "Watching a whale breach just meters from the boat is something I'll never forget. Highly recommend the sunrise departure.",
    name: "Aisha Osman",
    role: "Family trip",
    rating: "5.0",
  },
  {
    quote:
      "Professional, respectful of the animals, and genuinely passionate about conservation. You can tell they care.",
    name: "Tom Whitfield",
    role: "Repeat guest",
    rating: "5.0",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % TESTIMONIALS.length);
    }, ROTATE_DURATION_MS);
    return () => clearInterval(id);
  }, [paused]);

  const visible = [0, 1, 2].map(
    (offset) => TESTIMONIALS[(index + offset) % TESTIMONIALS.length]
  );

  return (
    <section className="bg-cream py-24 sm:py-28">
      <div className="px-6 lg:px-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-[17px] font-bold uppercase tracking-[0.18em] text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Testimonials
          </span>
          <h2 className="mt-3 font-inter text-[clamp(1.75rem,5vw,3rem)] font-bold leading-tight tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 leading-relaxed text-body">
            We believe every trip has the potential to create lifelong
            memories, and it starts with the little moments spent in the
            water with these incredible animals.
          </p>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((testimonial) => (
              <div
                key={testimonial.name}
                onMouseEnter={() => setHoveredName(testimonial.name)}
                onMouseLeave={() => setHoveredName(null)}
                className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
              >
                <span
                  className={`absolute right-5 top-5 flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-all duration-300 ${
                    hoveredName === testimonial.name
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none -translate-y-1 opacity-0"
                  }`}
                >
                  <StarIcon />
                  Verified Guest
                </span>

                <p
                  key={testimonial.name}
                  className="animate-[testimonial-fade_500ms_ease-out] leading-relaxed text-ink/85"
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-border/70 pt-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
                      {initials(testimonial.name)}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-body">{testimonial.role}</p>
                    </div>
                  </div>

                  <span className="flex shrink-0 items-center gap-1 rounded-full bg-cream px-2.5 py-1 text-xs font-semibold text-ink">
                    <StarIcon className="text-accent" />
                    {testimonial.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((testimonial, i) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Show reviews starting at ${i + 1} of ${TESTIMONIALS.length}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-accent" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
