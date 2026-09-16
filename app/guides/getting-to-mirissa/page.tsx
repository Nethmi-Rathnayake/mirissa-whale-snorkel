import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { VesselIcon } from "../../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../../lib/seo";

const TITLE = "How to Get to Mirissa for Whale Watching";
const DESCRIPTION =
  "What to know about getting to Mirissa on Sri Lanka's south coast, including hotel pickup and where our whale watching tours depart from.";
const PATH = "/guides/getting-to-mirissa";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/fun-diving-friends-wetsuits-beach.png",
      alt: "Two divers in wetsuits smiling on the beach before a dive",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Getting to Mirissa", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function GettingToMirissaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <PageHero
          eyebrow="Travel Planning"
          eyebrowIcon={VesselIcon}
          title="Getting to Mirissa"
          subtitle="Where Mirissa is, how our pickup service works, and where our tours depart from."
          image="/images/fun-diving-friends-wetsuits-beach.png"
          imageAlt="Two divers in wetsuits smiling on the beach before a dive"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            Mirissa sits on Sri Lanka&rsquo;s south coast, close to
            Weligama and Matara. Here&rsquo;s what&rsquo;s worth knowing
            before you travel, plus how we get guests from their hotel to
            the boat.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Traveling to Mirissa Independently
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              If you&rsquo;re coming from elsewhere in Sri Lanka — including
              Colombo or Galle — the usual options are a private car, taxi,
              or public transport along the south coast. Routes, journey
              times and fares change, so it&rsquo;s best to confirm current
              options with your hotel or a local travel provider closer to
              your travel date rather than relying on fixed figures.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Hotel Pickup With Us
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Once you&rsquo;re in the Mirissa area, most of our tours
              include free hotel pickup and drop-off from nearby areas, so
              you don&rsquo;t need to arrange your own transport to the
              harbour on the morning of your trip. Some of our diving
              packages can also arrange pickup from hotels in Weligama or
              Matara — worth confirming in advance when you book.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Where Our Tours Depart From
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              and{" "}
              <Link
                href="/packages/dolphin-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Dolphin Watching Tour
              </Link>{" "}
              depart from Mirissa Fisheries Harbour, typically between 6:00
              and 6:30 AM, with guests asked to arrive by 5:30 AM.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Planning Ahead
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We recommend booking in advance, especially between October
              and April when the season is busiest. If you&rsquo;re a
              foreign visitor, carry your original passport or a passport
              copy for port inspection on the morning of your tour.
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Ready to book? Browse{" "}
              <Link
                href="/packages"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                all packages
              </Link>
              , see the{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>
              , or{" "}
              <Link
                href="/contact"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                contact us
              </Link>{" "}
              if you have questions about pickup or timing.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
