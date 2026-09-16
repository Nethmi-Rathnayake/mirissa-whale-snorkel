import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { WhaleTailIcon } from "../../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../../lib/seo";

const TITLE = "Blue Whale Watching in Mirissa: Where & When to See Them";
const DESCRIPTION =
  "What to know about blue whale watching in Mirissa — when they may be seen, what a sighting is like, other species you may encounter, and how to view them responsibly.";
const PATH = "/guides/blue-whale-watching-mirissa";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/blue-whale-sunbeams.png",
      alt: "A blue whale gliding underwater as sunbeams filter through the water",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Blue Whale Watching in Mirissa", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function BlueWhaleGuidePage() {
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
          eyebrow="Species Guide"
          eyebrowIcon={WhaleTailIcon}
          title="Blue Whale Watching in Mirissa"
          subtitle="What draws visitors to Mirissa for blue whales, and what an encounter is actually like."
          image="/images/blue-whale-sunbeams.png"
          imageAlt="A blue whale gliding underwater as sunbeams filter through the water"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            The blue whale is the largest animal to have ever lived, and
            Mirissa is one of the places built around giving visitors a
            genuine chance to see one. In fact, our own tours trace back to a
            small research initiative that began by mapping blue whale
            migratory routes off Sri Lanka&rsquo;s southern coast — long
            before it became a whale watching destination.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Why Visitors Come to Mirissa for Blue Whales
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Blue whales migrate along{" "}
              <Link
                href="/guides/whale-watching-sri-lanka"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Sri Lanka&rsquo;s southern coast
              </Link>
              , and Mirissa grew as a departure point for boats following
              that route. The interest is straightforward: this is a rare
              chance to see the largest animal on the planet at relatively
              close, respectful range, either from a boat deck or in the
              water.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What You Might Encounter on a Trip
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              A blue whale sighting usually starts with a blow — a tall
              burst of spray as the whale surfaces to breathe — followed by
              a long stretch of its back and, if it dives deep, a glimpse of
              its tail. Sightings can last from a few seconds to several
              minutes, and no two encounters look quite the same, since
              blue whales are wild animals moving on their own schedule.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              When Blue Whales May Be Seen
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Blue whales are seen off Mirissa broadly from November to
              April, with December to March being an especially reliable
              stretch based on our own trip data. For a full month-by-month
              breakdown of season and sea conditions, see our{" "}
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
              Other Whales You May Encounter
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Blue whales share these waters with sperm whales, fin whales
              and Bryde&rsquo;s whales, with occasional humpback sightings.
              Spinner, bottlenose and Risso&rsquo;s dolphins are also
              regularly spotted alongside our whale tours, so a trip built
              around blue whales often turns into a broader wildlife outing.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Watching from the Boat vs. Snorkeling Alongside Them
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              There are two ways to encounter blue whales with us. Our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              keeps you on the boat deck the whole time — no swimming
              required. Our{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              trip pairs the same kind of boat cruise with a guided,
              in-water swim alongside the whales, always at a respectful
              distance. Basic swimming confidence is recommended for the
              in-water option.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Responsible Viewing & Safety
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We follow marine park guidelines and never approach closer
              than 15–20 metres. Guests are asked to stay calm and quiet in
              the water, and never touch or chase a whale — any closer
              encounter happens on the whale&rsquo;s terms, not ours. You
              can read more about how we approach this on our{" "}
              <Link
                href="/conservation"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                conservation and responsible tourism page
              </Link>
              .
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Ready to plan your trip? See the{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              or{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
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
