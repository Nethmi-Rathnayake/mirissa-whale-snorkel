import Image from "next/image";

const MOSAIC_IMAGES = [
  "/images/whale-breach.jpg",
  "/images/diver-reef.jpg",
  "/images/dolphins.jpg",
  "/images/coral-reef.jpg",
  "/images/turtle.jpg",
  "/images/whale-tails-aerial.jpg",
];

export default function AboutHero() {
  return (
    <section className="relative h-[58vh] min-h-[440px] w-full overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-[2px]">
        {MOSAIC_IMAGES.map((src) => (
          <div key={src} className="relative">
            <Image src={src} alt="" fill sizes="34vw" className="object-cover" />
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full items-end">
        <div className="w-full px-6 pb-12 lg:px-16">
          <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Born from a reverence for the deep.
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-white/85">
            We are a collective of oceanographers, local mariners, and
            conservationists dedicated to providing the most intimate and
            responsible whale snorkeling experiences in Sri Lanka.
          </p>
        </div>
      </div>
    </section>
  );
}
