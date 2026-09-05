import Image from "next/image";
import { ArrowRightIcon } from "./icons";

const FEATURES = [
  {
    image: "/images/vessel-icon.png",
    title: "Premium Vessels",
    description:
      "Safe, spacious and comfortable cruising for a smooth and stable journey.",
  },
  {
    image: "/images/guide-icon.png",
    title: "Marine Biologist Guides",
    description:
      "Learn from the experts about whales and the magic of conservation in our oceans.",
  },
  {
    image: "/images/camera-icon.png",
    title: "Unforgettable Moments",
    description:
      "From whales to sunsets, we capture the memories that will last a lifetime.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ivory py-24 sm:py-28">
      <div className="grid gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div>
          <span className="text-[17px] font-bold uppercase tracking-[0.18em] text-accent">
            The Experience
          </span>
          <h2 className="mt-3 font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold leading-tight tracking-tight">
            A Journey Beyond the{" "}
            <span className="text-[#3F2A1C]">Surface.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-body">
            Our intimate, small-group expeditions are designed to offer a
            respectful and immersive encounter with blue whales, sperm
            whales, and playful dolphins in their natural habitat — all while
            protecting the ocean we cherish.
          </p>

          <div className="mt-10 flex flex-col divide-y divide-border/70">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-4 py-5 first:pt-0 last:pb-0"
              >
                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Image
                    src={feature.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-contain p-1.5"
                  />
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="group mt-10 inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 font-inter text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-accent-dark"
          >
            More Our Experiences
            <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 pl-8 sm:pb-16 sm:pl-14 lg:max-w-none">
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-3 -translate-y-3 rounded-[2rem] bg-accent/15"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10">
              <Image
                src="/images/journey-beyond-surface.jpg"
                alt="A snorkeler diving down over a shallow reef in vivid turquoise water"
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-40 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:w-56">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/fun-diving-diver-anemone-clownfish-selfie.png"
                alt="A diver posing beside a fellow diver, framed by coral, anemone and clownfish"
                fill
                sizes="224px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
