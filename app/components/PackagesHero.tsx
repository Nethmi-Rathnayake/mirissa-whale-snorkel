import Image from "next/image";
import { WhaleTailIcon } from "./icons";
import Reveal from "./Reveal";

const HERO_STATS = [
  { value: "98%", label: "Sighting Rate" },
  { value: "15+", label: "Years Experience" },
  { value: "Max 6", label: "Guests Per Boat" },
];

export default function PackagesHero() {
  return (
    <section className="relative w-full overflow-hidden bg-ivory pb-6 sm:pb-8">
      <div className="relative h-[60vh] min-h-[440px] w-full sm:h-[64vh] lg:h-[70vh]">
        <Image
          src="/images/packages-hero-boat.png"
          alt="Guide steering a boat out across Mirissa's turquoise water"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
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
              <WhaleTailIcon className="h-3.5 w-3.5 text-accent" />
              Whale & Dolphin Tours
            </span>
            <h1 className="mt-5 max-w-2xl font-inter text-[clamp(2.25rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-white">
              Our <span className="text-[#E0BF00]">Tour Packages</span>
            </h1>
            <p className="mt-4 max-w-lg leading-relaxed text-white/80">
              Three ways to meet the ocean&rsquo;s giants, from an in-water
              snorkel alongside whales to a relaxed deck-side dolphin watch.
            </p>
          </Reveal>
        </div>
      </div>

      <Reveal delay={150}>
        <div className="relative z-10 mx-6 -mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border/80 bg-white px-2 py-5 shadow-lg shadow-ink/10 sm:mx-auto sm:max-w-xl sm:px-4 lg:mx-16 lg:max-w-fit lg:px-8">
          {HERO_STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex min-w-0 flex-col items-center gap-1 px-1 text-center sm:px-2 lg:px-6"
            >
              <span className="text-xl font-[705] tracking-tight text-accent sm:text-2xl">
                {stat.value}
              </span>
              <span className="break-words text-[10px] font-medium uppercase tracking-[0.08em] text-body sm:text-[11px] sm:tracking-[0.12em]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
