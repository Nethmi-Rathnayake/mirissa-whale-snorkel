import Image from "next/image";
import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  eyebrowIcon: React.ComponentType<{ className?: string }>;
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
};

export default function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon,
  title,
  subtitle,
  image,
  imageAlt,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[38vh] min-h-[320px] w-full">
        <Image
          src={image}
          alt={imageAlt}
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
          <EyebrowIcon className="h-4 w-4" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-xl leading-relaxed text-body">{subtitle}</p>
      </div>
    </section>
  );
}
