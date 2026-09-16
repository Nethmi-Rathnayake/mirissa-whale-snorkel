import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { ClockIcon } from "../../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../../lib/seo";

const TITLE = "Best Time for Whale Watching in Mirissa (Season Guide)";
const DESCRIPTION =
  "When to visit Mirissa for the best whale watching, whale snorkeling and dolphin watching conditions — season, sea conditions and sighting expectations, month by month.";
const PATH = "/guides/best-time-to-see-whales-in-mirissa";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/whale-tails-aerial.jpg",
      alt: "Aerial view of two whale tails surfacing side by side in deep blue water",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Best Time for Whale Watching in Mirissa", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

const TIMING_FAQS = [
  {
    question: "What is the whale watching season in Mirissa?",
    answer:
      "Whale watching in Mirissa runs broadly from November to April, when sea conditions are calmer and whale sightings are more consistent.",
  },
  {
    question: "When is the best time to see blue whales in Mirissa?",
    answer:
      "Blue whales are seen throughout the November–April season, with December to March being an especially reliable stretch and February to April offering the clearest water for snorkeling alongside them.",
  },
  {
    question: "Can I go whale watching outside the November–April season?",
    answer:
      "Our whale watching and whale snorkeling tours run within the November–April window. Outside those months, the southwest monsoon tends to bring rougher seas to Mirissa's coast.",
  },
  {
    question: "When is dolphin watching best in Mirissa?",
    answer:
      "Dolphin watching runs from October to April, a slightly longer window than the whale season, with calmer seas making sightings easier throughout.",
  },
  {
    question: "What if I don't see a whale during my trip?",
    answer:
      "Sightings are never 100% guaranteed with wild animals, but if we don't spot any whales, you're welcome to join a future tour at no extra cost.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TIMING_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function BestTimeGuidePage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <PageHero
          eyebrow="Season Guide"
          eyebrowIcon={ClockIcon}
          title="When Is the Best Time for Whale Watching in Mirissa?"
          subtitle="Season, sea conditions and what to realistically expect before you book."
          image="/images/whale-tails-aerial.jpg"
          imageAlt="Aerial view of two whale tails surfacing side by side in deep blue water"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            Mirissa sits on Sri Lanka&rsquo;s south coast, right along the
            migratory path of blue whales, sperm whales and several dolphin
            species. Timing your trip well makes a real difference — not just
            to your chances of a sighting, but to how comfortable the boat
            ride is. Here&rsquo;s what our own tour scheduling is built
            around.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Whale Watching Season in Mirissa: November to April
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Whale watching in Mirissa runs broadly from November to April,
              when the sea is calmer and sightings of{" "}
              <Link
                href="/guides/blue-whale-watching-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                blue whales
              </Link>
              , sperm whales, fin whales and Bryde&rsquo;s whales are most
              consistent. This window covers both our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              and our{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              trips. Dolphin pods are seen on a slightly longer window — see
              the dolphin watching section below.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Month-by-Month Considerations
            </h2>

            <h3 className="mt-6 text-lg font-semibold tracking-tight">
              November: The Season Begins
            </h3>
            <p className="mt-2 leading-relaxed text-body">
              As the southwest monsoon eases, the sea starts to settle and
              whale watching tours pick back up for the season.
            </p>

            <h3 className="mt-6 text-lg font-semibold tracking-tight">
              December to March: The Most Reliable Window
            </h3>
            <p className="mt-2 leading-relaxed text-body">
              This stretch is when whale snorkeling sightings tend to be
              especially reliable, alongside generally calmer conditions
              across all of our boat tours.
            </p>

            <h3 className="mt-6 text-lg font-semibold tracking-tight">
              February to April: The Clearest Water
            </h3>
            <p className="mt-2 leading-relaxed text-body">
              If snorkeling alongside whales is the priority rather than
              watching from the deck, February to April typically brings the
              best underwater visibility of the season.
            </p>

            <h3 className="mt-6 text-lg font-semibold tracking-tight">
              May to October: The Off-Season
            </h3>
            <p className="mt-2 leading-relaxed text-body">
              Outside the November–April window, the southwest monsoon tends
              to bring rougher seas to Sri Lanka&rsquo;s south coast, which is
              why our whale watching and whale snorkeling season is centered
              on the cooler, calmer months.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Sea Conditions and the Southwest Monsoon
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Sea state matters as much as the calendar. The southwest
              monsoon (roughly May to October) is the main reason conditions
              get rougher outside the main season. Within the
              November–April season itself, conditions are generally calmer,
              though as with any open-water boat trip, the sea can still vary
              from day to day.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Water Visibility for Snorkeling
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              For Whale Snorkeling specifically, February to April tends to
              offer the clearest underwater visibility, which matters if you
              want a good view of a whale while you&rsquo;re in the water
              with it. Earlier in the season (November–January), sightings
              can still be excellent, though visibility can be more
              variable.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What to Expect From Seasonal Conditions
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Even during the best months, whale watching is an open-ocean
              activity — expect an early departure, a boat ride of a few
              hours, and some motion on the water. If you&rsquo;re prone to
              seasickness, take precautions before boarding regardless of
              season. For a fuller walkthrough of what actually happens on a
              tour, see our guide on{" "}
              <Link
                href="/guides/what-to-expect-whale-watching-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                what to expect on a Mirissa whale watching tour
              </Link>
              .
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Sighting Expectations by Season
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Whales are wild animals, so no season can guarantee a sighting.
              That said, our own sighting rate runs at around 98% during the
              main season, and if we don&rsquo;t spot any whales on your
              trip, you&rsquo;re welcome to join a future tour at no extra
              cost. Sightings are generally most consistent from December to
              March.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Dolphin Watching Season
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our{" "}
              <Link
                href="/packages/dolphin-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Dolphin Watching Tour
              </Link>{" "}
              runs on a slightly longer window — October to April — with
              calmer sea state during those months making it easier to
              follow the large pods that gather off Mirissa most mornings.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Frequently Asked Questions About Timing
            </h2>
            <div className="mt-6 flex flex-col gap-6">
              {TIMING_FAQS.map((item) => (
                <div key={item.question}>
                  <h3 className="text-base font-semibold tracking-tight">
                    {item.question}
                  </h3>
                  <p className="mt-2 leading-relaxed text-body">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Ready to plan your trip? Browse our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>
              ,{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              and{" "}
              <Link
                href="/packages/dolphin-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Dolphin Watching Tour
              </Link>
              , or check our{" "}
              <Link
                href="/faq"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                FAQ
              </Link>{" "}
              for more on what to bring and how booking works.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
