import Image from "next/image";
import { ChevronDownIcon, PlayIcon } from "./icons";

export default function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[620px] w-full items-center justify-center overflow-hidden">
      <Image
        src="/images/whale-breach.jpg"
        alt="A humpback whale breaching the surface of the ocean near Mirissa"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#3a1d0a]/40 via-transparent to-[#3a1d0a]/30 mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white backdrop-blur-sm">
          Whale Watching in Mirissa
        </span>

        <h1 className="mt-6 text-5xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Encounter the Ocean&rsquo;s Giants.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Join us for an unforgettable whale snorkeling experience in the
          beautiful waters of Mirissa. Swim, explore, and connect with nature
          like never before.
        </p>

        <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#packages"
            className="rounded-full bg-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Explore Packages
          </a>
          <a
            href="#experience"
            className="flex items-center gap-2.5 rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-ink">
              <PlayIcon />
            </span>
            Watch the Film
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-white/80">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ChevronDownIcon className="animate-bounce" />
      </div>
    </section>
  );
}
