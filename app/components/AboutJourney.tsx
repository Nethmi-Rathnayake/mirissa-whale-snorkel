import Image from "next/image";
import { ArrowRightIcon } from "./icons";

export default function AboutJourney() {
  return (
    <section className="bg-ivory py-24 sm:py-28">
      <div className="grid gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-16">
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <span className="text-[17px] font-bold uppercase tracking-[0.18em] text-accent">
              Our Journey
            </span>
          </div>
          <h2 className="mt-4 font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold leading-tight tracking-tight">
            Pioneering Ethical Encounters{" "}
            <span className="text-[#E0BF00]">Since 2012.</span>
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
            src="/images/blue-whale-underwater-side.png"
            alt="A blue whale gliding through open water"
            fill
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
