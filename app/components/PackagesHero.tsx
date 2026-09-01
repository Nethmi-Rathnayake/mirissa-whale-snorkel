import Image from "next/image";
import { WhaleTailIcon } from "./icons";

export default function PackagesHero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[38vh] min-h-[320px] w-full">
        <Image
          src="/images/whale-tails-aerial.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-ivory/70 to-ivory"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 -mt-28 w-full px-6 pb-10 lg:-mt-32 lg:px-16">
        <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
          <WhaleTailIcon />
          Whale & Dolphin Tours
        </span>
        <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Our Tour Packages
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-body">
          Three ways to meet the ocean&rsquo;s giants, from an in-water
          snorkel alongside whales to a relaxed deck-side dolphin watch.
        </p>
      </div>
    </section>
  );
}
