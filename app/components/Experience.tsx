import Image from "next/image";
import { ArrowRightIcon, CameraIcon, GuideIcon, VesselIcon } from "./icons";

const FEATURES = [
  {
    icon: VesselIcon,
    title: "Premium Vessels",
    description:
      "Safe, spacious and comfortable cruising for a smooth and stable journey.",
  },
  {
    icon: GuideIcon,
    title: "Marine Biologist Guides",
    description:
      "Learn from the experts about whales and the magic of conservation in our oceans.",
  },
  {
    icon: CameraIcon,
    title: "Unforgettable Moments",
    description:
      "From whales to sunsets, we capture the memories that will last a lifetime.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            The Experience
          </span>
          <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A Journey Beyond the Surface.
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-body">
            Our intimate, small-group expeditions are designed to offer a
            respectful and immersive encounter with blue whales, sperm
            whales, and playful dolphins in their natural habitat — all while
            protecting the ocean we cherish.
          </p>

          <div className="mt-10 flex flex-col gap-7">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                  <feature.icon />
                </span>
                <div>
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  <p className="mt-1 max-w-sm text-sm leading-relaxed text-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#about"
            className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent"
          >
            More Our Experiences
            <ArrowRightIcon />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md pb-10 pl-8 sm:pb-16 sm:pl-14 lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
            <Image
              src="/images/coral-reef.jpg"
              alt="Sunrays streaming through the ocean over a vivid coral reef"
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-40 overflow-hidden rounded-2xl border-4 border-ivory shadow-xl sm:w-56">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/images/turtle.jpg"
                alt="A sea turtle gliding through clear Mirissa waters"
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
