import Image from "next/image";
import Link from "next/link";
import { PACKAGE_TOPICS, TOPIC_ANCHORS, packages } from "../lib/packages";
import { ChevronRightIcon } from "./icons";

export default function Packages() {
  return (
    <section id="packages" className="bg-ivory py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Whale Snorkeling Packages
          </span>
          <h2 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
            Choose Your Adventure
          </h2>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className={`relative flex flex-col rounded-3xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 ${
                pkg.popular
                  ? "border-accent/25 shadow-xl shadow-accent/10 lg:-translate-y-3"
                  : "border-border/80 shadow-sm hover:shadow-lg"
              }`}
            >
              {pkg.popular && (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white shadow-sm">
                  Most Popular
                </span>
              )}

              <Link
                href={`/packages/${pkg.slug}`}
                className="flex flex-col items-center gap-1.5 pt-2 text-center"
              >
                <h3 className="text-lg font-semibold transition-colors hover:text-accent">
                  {pkg.name}
                </h3>
                <span className="text-4xl font-bold tracking-tight">
                  <span className="mr-1 align-top text-lg font-semibold text-body">
                    USD
                  </span>
                  {pkg.price}
                </span>
                <span className="text-xs uppercase tracking-[0.1em] text-body">
                  Per Person
                </span>
              </Link>

              <Link
                href={`/packages/${pkg.slug}`}
                className="group relative mt-6 block h-48 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={pkg.cardImage}
                  alt={pkg.cardImageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 90vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              <nav
                aria-label={`${pkg.name} package details`}
                className="mt-6 flex flex-1 flex-col gap-0.5 border-t border-border/70 pt-2"
              >
                {PACKAGE_TOPICS.map((topic) => (
                  <Link
                    key={topic.anchor}
                    href={`/packages/${pkg.slug}#${topic.anchor}`}
                    className="group flex items-center justify-between gap-3 rounded-xl px-2.5 py-2.5 text-sm text-ink/85 transition-colors hover:bg-cream hover:text-ink"
                  >
                    <span>{topic.label}</span>
                    <ChevronRightIcon className="shrink-0 text-body transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </Link>
                ))}
              </nav>

              <Link
                href={`/packages/${pkg.slug}#${TOPIC_ANCHORS.price}`}
                className={`mt-8 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-ink text-ivory hover:bg-ink/85"
                }`}
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
