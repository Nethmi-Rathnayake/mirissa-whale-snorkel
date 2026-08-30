import Image from "next/image";
import Link from "next/link";
import { TOPIC_ANCHORS, type TourPackage } from "../lib/packages";
import { CheckIcon, ClockIcon, PinIcon, VesselIcon } from "./icons";

export default function PackageDetail({ pkg }: { pkg: TourPackage }) {
  return (
    <>
      <section className="relative flex h-[46vh] min-h-[380px] w-full items-end overflow-hidden">
        <Image
          src={pkg.heroImage}
          alt={pkg.heroImageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-10 lg:px-10">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/75"
          >
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href="/#packages"
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
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-3 lg:gap-10 lg:px-10">
          <div className="lg:col-span-2">
            <p className="leading-relaxed text-body">{pkg.description}</p>

            <div id={TOPIC_ANCHORS.included} className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                What&rsquo;s Included
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2.5 text-sm text-ink/85"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div id={TOPIC_ANCHORS.species} className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                Whale Species You May See
              </h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {pkg.species.map((species) => (
                  <span
                    key={species}
                    className="rounded-full border border-border bg-white px-4 py-2 text-sm text-ink/85"
                  >
                    {species}
                  </span>
                ))}
              </div>
            </div>

            <div id={TOPIC_ANCHORS.whatToBring} className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">
                What to Bring
              </h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {pkg.whatToBring.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink/85"
                  >
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div
              id={TOPIC_ANCHORS.sightingGuaranteed}
              className="mt-12 scroll-mt-28"
            >
              <h2 className="text-2xl font-bold tracking-tight">
                Is Whale Sighting Guaranteed?
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-body">
                {pkg.sightingGuaranteed}
              </p>
            </div>

            <div id={TOPIC_ANCHORS.payment} className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-bold tracking-tight">Payment</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-body">
                {pkg.payment}
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-28 rounded-3xl border border-border/80 bg-white p-8 shadow-sm">
              <div id={TOPIC_ANCHORS.price} className="scroll-mt-28 text-center">
                <span className="text-4xl font-bold tracking-tight">
                  <span className="mr-1 align-top text-lg font-semibold text-body">
                    USD
                  </span>
                  {pkg.price}
                </span>
                <p className="mt-1 text-xs uppercase tracking-[0.1em] text-body">
                  Per Person
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-6 border-t border-border pt-8">
                <div
                  id={TOPIC_ANCHORS.transportation}
                  className="flex scroll-mt-28 items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                    <VesselIcon />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
                      Transportation
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/85">
                      {pkg.transportation}
                    </p>
                  </div>
                </div>

                <div
                  id={TOPIC_ANCHORS.startTime}
                  className="flex scroll-mt-28 items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                    <ClockIcon />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
                      Start Time
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/85">
                      {pkg.startTime}
                    </p>
                  </div>
                </div>

                <div
                  id={TOPIC_ANCHORS.meetingPoint}
                  className="flex scroll-mt-28 items-start gap-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-ink">
                    <PinIcon />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-body">
                      Meeting Point
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/85">
                      {pkg.meetingPoint}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:bookings@mirissawhalesnorkel.com?subject=${encodeURIComponent(
                  `Booking Enquiry - ${pkg.name}`
                )}`}
                className={`mt-8 block rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-colors ${
                  pkg.popular
                    ? "bg-accent text-white hover:bg-accent-dark"
                    : "bg-ink text-ivory hover:bg-ink/85"
                }`}
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
