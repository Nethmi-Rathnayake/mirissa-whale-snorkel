import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function AboutJourney() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
              Our Journey
            </span>
          </div>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            Pioneering ethical encounters since 2012.
          </h2>
          <p className="mt-6 leading-relaxed text-body">
            What began as a small research initiative mapping the migratory
            routes of blue whales off the southern coast of Sri Lanka has
            evolved into a leading advocate for marine conservation and
            sustainable ecotourism.
          </p>
          <p className="mt-4 leading-relaxed text-body">
            We realised that the profound connection forged when a human
            meets a whale in its natural habitat is the most powerful
            catalyst for ocean advocacy. Our mission is to facilitate these
            encounters with absolute respect for the animals and their
            environment.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-border"
          >
            Read Our Manifesto
            <ArrowRightIcon />
          </a>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/whale-breach.jpg"
            alt="A humpback whale breaching the surface near Mirissa"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
