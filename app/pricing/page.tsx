import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import PriceDisplay from "../components/PriceDisplay";
import { CardIcon } from "../components/icons";
import { getPackageBySlug, getPackageOffer } from "../lib/packages";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../lib/seo";

const TITLE = "Mirissa Whale Watching & Snorkeling Prices";
const DESCRIPTION =
  "Compare current prices for whale watching, whale snorkeling, dolphin watching and diving tours in Mirissa, including what's included in each package.";
const PATH = "/pricing";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/packages-hero-snorkeler-whale.png",
      alt: "Snorkeler swimming above two blue whales in deep open water",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Pricing", path: PATH },
]);

const WHALE_DOLPHIN_SLUGS = [
  "whale-snorkeling",
  "whale-watching",
  "dolphin-watching",
];

const SNORKEL_DIVE_SLUGS = [
  "snorkeling-with-turtles",
  "fun-diving",
  "discover-scuba-diving",
  "night-diving",
  "padi-bubblemaker-seal-team",
  "refresher-dive",
];

const whaleDolphinPackages = WHALE_DOLPHIN_SLUGS.map((slug) =>
  getPackageBySlug(slug)
).filter((pkg) => pkg !== undefined);

const snorkelDivePackages = SNORKEL_DIVE_SLUGS.map((slug) =>
  getPackageBySlug(slug)
).filter((pkg) => pkg !== undefined);

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  name: TITLE,
  url: `${SITE_URL}${PATH}`,
  itemListElement: [...whaleDolphinPackages, ...snorkelDivePackages].map(
    (pkg) => ({
      ...getPackageOffer(pkg),
      name: pkg.name,
      url: `${SITE_URL}/packages/${pkg.slug}`,
    })
  ),
};

function PriceCard({
  pkg,
}: {
  pkg: NonNullable<ReturnType<typeof getPackageBySlug>>;
}) {
  return (
    <div className="flex flex-col rounded-3xl border border-border/80 bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold tracking-tight text-ink">
        {pkg.name}
      </h3>
      <p className="mt-1 text-sm leading-relaxed text-body">{pkg.tagline}</p>

      <div className="mt-5 border-t border-border/70 pt-5">
        <PriceDisplay price={pkg.price} />
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={`/packages/${pkg.slug}`}
          className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-ivory transition-colors hover:bg-ink/85"
        >
          View Details
        </Link>
        <Link
          href={`/packages/${pkg.slug}/book`}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-cream"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <PageHero
          eyebrow="Pricing"
          eyebrowIcon={CardIcon}
          title="How Much Does Whale Watching Cost in Mirissa?"
          subtitle="A clear, up-to-date comparison of every tour we run, in USD."
          image="/images/packages-hero-snorkeler-whale.png"
          imageAlt="Snorkeler swimming above two blue whales in deep open water"
        />

        <div className="mx-auto max-w-5xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="max-w-3xl leading-relaxed text-body">
            Here&rsquo;s a clear comparison of what each of our tours costs
            in Mirissa, from whale watching and snorkeling to diving. Prices
            are in USD and reflect what&rsquo;s currently charged for each
            package — tap through to any tour for the full list of
            what&rsquo;s included.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Whale & Dolphin Watching
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whaleDolphinPackages.map((pkg) => (
                <PriceCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Snorkeling & Diving
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {snorkelDivePackages.map((pkg) => (
                <PriceCard key={pkg.slug} pkg={pkg} />
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Payments & Cancellations
            </h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-body">
              All tours accept Sri Lankan Rupees (LKR), US Dollars (USD),
              and card payments. Reservations can be cancelled or
              rescheduled free of charge up to 24 hours before departure,
              and any trip we cancel due to weather or sea conditions is
              fully refunded or rebooked at no extra cost. See our{" "}
              <Link
                href="/faq"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                FAQ
              </Link>{" "}
              for more booking details.
            </p>
          </section>

          <section className="mt-10">
            <p className="leading-relaxed text-body">
              Not sure which tour fits you best? Compare every{" "}
              <Link
                href="/snorkeling-in-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                snorkeling experience in Mirissa
              </Link>
              , read our{" "}
              <Link
                href="/guides/best-time-to-see-whales-in-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                best time to visit guide
              </Link>
              , or browse{" "}
              <Link
                href="/packages"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                all packages
              </Link>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
