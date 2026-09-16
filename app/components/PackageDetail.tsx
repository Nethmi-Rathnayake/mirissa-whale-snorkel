import Image from "next/image";
import Link from "next/link";
import type { IconKey, TourPackage } from "../lib/packages";
import Accordion from "./Accordion";
import PriceDisplay from "./PriceDisplay";
import { ArrowRightIcon, CardIcon, ClockIcon, PinIcon, VesselIcon } from "./icons";

const SIDEBAR_ICONS: Record<IconKey, typeof VesselIcon> = {
  vessel: VesselIcon,
  clock: ClockIcon,
  card: CardIcon,
  pin: PinIcon,
};

export default function PackageDetail({ pkg }: { pkg: TourPackage }) {
  return (
    <>
      <section className="relative flex h-[46vh] min-h-[380px] w-full items-end overflow-hidden">
        {pkg.heroVideo ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={pkg.heroImage}
            aria-label={pkg.heroImageAlt}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={pkg.heroVideo} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={pkg.heroImage}
            alt={pkg.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        )}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
          aria-hidden="true"
        />

        <div className="relative z-10 w-full px-6 pb-10 lg:px-16">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/packages"
              className="transition-colors hover:text-white"
            >
              Packages
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{pkg.name}</span>
          </nav>

          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {pkg.name}
          </h1>
          <p className="mt-3 max-w-xl text-white/85">{pkg.tagline}</p>
        </div>
      </section>

      <section className="bg-ivory py-16 sm:py-20">
        <div className="grid gap-12 px-6 lg:grid-cols-3 lg:gap-10 lg:px-16">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-body">{pkg.description}</p>

            <div className="mt-10">
              <h2 className="text-lg font-semibold tracking-tight">
                Tour Details
              </h2>
              <div className="mt-5">
                <Accordion items={pkg.sections} />
              </div>
            </div>

            {pkg.videos && pkg.videos.length > 0 && (
              <div className="mt-12">
                <h2 className="text-lg font-semibold tracking-tight">
                  Video Highlights
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {pkg.videos.map((video) => (
                    <video
                      key={video.src}
                      controls
                      preload="metadata"
                      playsInline
                      aria-label={video.label}
                      className="aspect-video w-full rounded-2xl border border-border/80 bg-ink"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </div>
            )}

            {pkg.relatedLinks && pkg.relatedLinks.length > 0 && (
              <div className="mt-12 border-t border-border/70 pt-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-body">
                  Helpful Guides
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {pkg.relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-dark"
                      >
                        {link.label}
                        <ArrowRightIcon />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link
              href="/packages"
              className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-accent"
            >
              <ArrowRightIcon className="rotate-180" />
              Back to Packages
            </Link>
          </div>

          <div className="lg:col-span-1">
            <div className="rounded-3xl border border-border/80 bg-white p-8 shadow-sm lg:sticky lg:top-28">
              <div id="price" className="scroll-mt-28 text-center">
                <PriceDisplay price={pkg.price} />
              </div>

              <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8">
                {pkg.sidebarFacts.map((fact) => {
                  const FactIcon = SIDEBAR_ICONS[fact.icon];
                  return (
                    <div
                      key={fact.id}
                      id={fact.id}
                      className="flex scroll-mt-28 items-start gap-3.5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                        <FactIcon />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
                          {fact.label}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink/85">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link
                href={`/packages/${pkg.slug}/book`}
                className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-ink text-ivory hover:bg-ink/85"
                }`}
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
