import Image from "next/image";
import Link from "next/link";
import { packages } from "../lib/packages";
import { ChevronRightIcon } from "./icons";
import Reveal from "./Reveal";

export default function Packages() {
  return (
    <section id="packages" className="bg-ivory py-24 sm:py-28">
      <div className="px-6 lg:px-16">
        <div className="mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Whale & Dolphin Tours
          </span>
          <h2 className="mt-3 whitespace-nowrap font-inter text-[clamp(1.5rem,6.2vw,3.75rem)] font-bold tracking-tight">
            Choose Your Adventure
          </h2>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.slug} delay={index * 120} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-lg">
                <Link
                  href={`/packages/${pkg.slug}`}
                  className="relative block aspect-[4/3] w-full overflow-hidden"
                >
                  <Image
                    src={pkg.cardImage}
                    alt={pkg.cardImageAlt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {pkg.popular && (
                    <span className="absolute left-4 top-4 rounded-full bg-accent px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
                      Most Popular
                    </span>
                  )}
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <Link href={`/packages/${pkg.slug}`}>
                    <h3 className="text-lg font-bold tracking-tight text-ink transition-colors group-hover:text-accent">
                      {pkg.name}
                    </h3>
                  </Link>
                  <p className="mt-1 text-sm font-medium text-accent">
                    Mirissa, Sri Lanka
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-body">
                    {pkg.tagline}
                  </p>

                  <nav
                    aria-label={`${pkg.name} package details`}
                    className="mt-4 flex flex-1 flex-col gap-0.5 border-t border-border/70 pt-2"
                  >
                    {pkg.topics.map((topic) => (
                      <Link
                        key={topic.anchor}
                        href={`/packages/${pkg.slug}#${topic.anchor}`}
                        className="group/link flex items-center justify-between gap-3 rounded-xl px-2.5 py-2.5 text-sm text-ink/85 transition-colors hover:bg-cream hover:text-ink"
                      >
                        <span>{topic.label}</span>
                        <ChevronRightIcon className="shrink-0 text-body transition-all duration-200 group-hover/link:translate-x-0.5 group-hover/link:text-accent" />
                      </Link>
                    ))}
                  </nav>

                  <p className="mt-5 border-t border-border/70 pt-4 text-sm text-body">
                    Starting from{" "}
                    <span className="text-lg font-bold text-accent">
                      USD{" "}
                      {pkg.price.kind === "flat"
                        ? pkg.price.price
                        : pkg.price.tiers[0].price}
                    </span>{" "}
                    <span className="text-xs text-body">
                      {pkg.price.kind === "flat"
                        ? `/ ${pkg.price.unit.replace("USD per ", "")}`
                        : "(2–4 persons)"}
                    </span>
                  </p>

                  <Link
                    href={`/packages/${pkg.slug}#price`}
                    className={`mt-4 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                      pkg.popular
                        ? "bg-accent text-white hover:bg-accent-dark"
                        : "bg-ink text-ivory hover:bg-ink/85"
                    }`}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
