import Image from "next/image";
import Reveal from "./Reveal";

const ABOUT_STATS = [
  { value: "2012", label: "Founded" },
  { value: "15+", label: "Years Experience" },
  { value: "Eco", label: "Certified Operator" },
];

export default function AboutHero() {
  return (
    <section className="relative w-full bg-ivory pb-6 sm:pb-8">
      <div className="relative h-[58vh] min-h-[440px] w-full overflow-hidden sm:h-[64vh] lg:h-[70vh]">
        <Image
          src="/images/humpback-whale-tail-breach.png"
          alt="A humpback whale's tail rising out of the water mid-breach"
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

        <div className="relative z-10 flex h-full items-end">
          <div className="w-full px-6 pb-16 lg:px-16 lg:pb-20">
            <Reveal>
              <h1 className="max-w-2xl font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold leading-[1.1] tracking-tight text-white">
                Born From a Reverence for the{" "}
                <span className="text-[#E0BF00]">Deep</span>
              </h1>
              <p className="mt-4 max-w-xl leading-relaxed text-white/85">
                We are a collective of oceanographers, local mariners, and
                conservationists dedicated to providing the most intimate and
                responsible whale snorkeling experiences in Sri Lanka.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal delay={150}>
        <div className="relative z-10 mx-6 -mt-10 grid grid-cols-3 divide-x divide-border rounded-2xl border border-border/80 bg-white px-2 py-5 shadow-lg shadow-ink/10 sm:mx-auto sm:max-w-xl sm:px-4 lg:mx-16 lg:max-w-fit lg:px-8">
          {ABOUT_STATS.map((stat) => (
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
