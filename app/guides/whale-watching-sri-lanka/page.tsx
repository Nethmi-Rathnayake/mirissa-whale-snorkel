import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { PinIcon } from "../../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../../lib/seo";

const TITLE = "Whale Watching in Sri Lanka: A Complete Guide";
const DESCRIPTION =
  "An introduction to whale watching along Sri Lanka's south coast, how Mirissa fits in, seasonal considerations, and how to choose a responsible operator.";
const PATH = "/guides/whale-watching-sri-lanka";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/blue-whale-underwater-side.png",
      alt: "A blue whale gliding through open water",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Whale Watching in Sri Lanka", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function SriLankaGuidePage() {
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
          eyebrow="Sri Lanka Guide"
          eyebrowIcon={PinIcon}
          title="Whale Watching in Sri Lanka"
          subtitle="An introduction to whale watching along Sri Lanka's south coast, and where Mirissa fits in."
          image="/images/blue-whale-underwater-side.png"
          imageAlt="A blue whale gliding through open water"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            Sri Lanka&rsquo;s southern coastline sits along a migratory route
            for blue whales and several other whale and dolphin species,
            which is what first brought whale watching to this part of the
            island. Mirissa, on that same south coast, is where our own
            tours are based.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Whale Watching Along the South Coast
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our own tours trace back to a small research initiative
              mapping blue whale migratory routes off Sri Lanka&rsquo;s
              southern coast, which later grew into the whale watching and
              whale snorkeling trips we run today. It&rsquo;s this stretch
              of coastline — not a single town — that the whales pass along.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Mirissa: Our Home Departure Point
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We run our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              and{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              trips from Mirissa Fisheries Harbour, in small groups with an
              experienced guide. Species commonly seen from Mirissa include
              blue whales, sperm whales, fin whales and Bryde&rsquo;s
              whales, along with spinner, bottlenose and Risso&rsquo;s
              dolphins.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Seasonal Considerations
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Along this stretch of coast, the whale watching season runs
              broadly from November to April, when the sea is calmer.
              Outside that window, the southwest monsoon tends to bring
              rougher conditions. For a full month-by-month breakdown, see
              our{" "}
              <Link
                href="/guides/best-time-to-see-whales-in-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                whale watching season guide
              </Link>
              .
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Choosing a Responsible Whale Watching Operator
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Wherever you go whale watching, it&rsquo;s worth checking how
              an operator handles the basics: a safe viewing distance from
              the animals, life jackets and safety equipment on board, and
              guides who won&rsquo;t chase or crowd a whale for a better
              photo. It&rsquo;s a good idea to ask directly before booking.
              You can read about our own approach on the{" "}
              <Link
                href="/conservation"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                conservation and responsible tourism page
              </Link>
              .
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Visitors Choose Mirissa
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              For our own guests, that usually comes down to small group
              sizes, guides with real ocean and whale-behaviour experience,
              and a company whose tours grew out of genuine whale research
              rather than being built purely as a tourist attraction. See
              our{" "}
              <Link
                href="/about"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                About page
              </Link>{" "}
              for the full story.
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Ready to book? See our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Mirissa Whale Watching Tour
              </Link>{" "}
              for full pricing and details.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
