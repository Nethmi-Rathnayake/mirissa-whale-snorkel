import type { Metadata } from "next";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PageHero from "../../components/PageHero";
import { WhaleTailIcon } from "../../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../../lib/seo";

const TITLE = "What to Expect on a Whale Watching Tour in Mirissa";
const DESCRIPTION =
  "What actually happens on a Mirissa whale watching tour — boarding, the boat ride, what a sighting looks like, and how it compares to whale snorkeling.";
const PATH = "/guides/what-to-expect-whale-watching-mirissa";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/blue-whale-spout-closeup.png",
      alt: "A blue whale surfacing with its blowhole spouting a tall column of mist",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "What to Expect on a Whale Watching Tour", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function WhatToExpectGuidePage() {
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
          eyebrow="Tour Walkthrough"
          eyebrowIcon={WhaleTailIcon}
          title="What Really Happens on a Mirissa Whale Watching Tour"
          subtitle="A realistic, step-by-step look at the morning — from boarding to what a sighting actually looks like."
          image="/images/blue-whale-spout-closeup.png"
          imageAlt="A blue whale surfacing with its blowhole spouting a tall column of mist"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            If you&rsquo;ve never been whale watching before, it helps to
            know what the morning actually looks like — from the early start
            to what a sighting really looks like from the deck. Here&rsquo;s
            a realistic walkthrough based on how our{" "}
            <Link
              href="/packages/whale-watching"
              className="font-semibold text-accent hover:text-accent-dark"
            >
              Whale Watching Tour
            </Link>{" "}
            runs.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Before You Board
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our Whale Watching Tour departs from Mirissa Fisheries Harbour
              between 6:00 and 6:30 AM, so we ask guests to arrive by 5:30
              AM. Foreign visitors should carry their original passport or a
              passport copy for port inspection. Payments can be made in USD
              or Sri Lankan Rupees, and we recommend booking in advance,
              especially between October and April when the season is
              busiest.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Departure and the Journey Out
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Once everyone is checked in and fitted with an approved life
              jacket, the boat heads out from the harbour toward the areas
              where whales and dolphins are most commonly spotted that day.
              Tours run in small groups, and the crew keeps a close eye on
              the water throughout the journey out.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What a Whale Sighting Actually Looks Like
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              From the boat, a sighting usually starts with a blow — a burst
              of spray as a whale surfaces to breathe — followed by a
              glimpse of its back or dorsal fin, and sometimes a tail as it
              dives again.{" "}
              <Link
                href="/guides/blue-whale-watching-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Blue whales
              </Link>{" "}
              are the species most associated with these waters, and you may
              also see sperm whales, fin whales, Bryde&rsquo;s whales,
              spinner and bottlenose dolphins, seabirds, flying fish, and
              occasionally a sea turtle. Sightings can last anywhere from a
              few seconds to several minutes, depending on the
              animal&rsquo;s behaviour.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              How Long the Tour Runs
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our Whale Watching Tour typically runs 3 to 5 hours in total,
              covering the boat ride out, time spent looking for and
              following wildlife, and the return to harbour.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Seasickness and Comfort on Board
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Because this is an open-water boat trip, it&rsquo;s worth
              taking precautions for seasickness before you board if
              you&rsquo;re prone to it. Light, comfortable clothing and
              reef-safe sunscreen help too, since you&rsquo;ll be outdoors on
              the deck for most of the trip.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              What to Bring
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              A few essentials make the morning easier: your passport or a
              copy of it for port registration, reef-safe sunscreen and
              sunglasses, light clothing, and a waterproof bag or case to
              protect your phone or camera from sea spray.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              If We Don&rsquo;t See Any Whales
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Whales are wild animals, so no operator can promise a sighting.
              If your trip doesn&rsquo;t turn one up, you&rsquo;re welcome to
              join a future tour at no extra cost — that&rsquo;s our
              standing policy, not a guarantee of a sighting on any single
              trip.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Whale Watching vs. Whale Snorkeling: What&rsquo;s the
              Difference
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our Whale Watching Tour keeps you on deck the whole time — no
              swimming required, just following whales and dolphins by boat.{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              goes a step further, pairing the same kind of boat cruise with
              a guided, in-water snorkel alongside the whales, always at a
              respectful distance. If you&rsquo;d rather stay dry and simply
              watch, the Whale Watching Tour is the better fit; if you want
              to get in the water, Whale Snorkeling is our in-water option.
              Either way, the{" "}
              <Link
                href="/guides/best-time-to-see-whales-in-mirissa"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                best time to go
              </Link>{" "}
              is broadly the same.
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Ready to book? See full details for the{" "}
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
              </Link>
              , or check our{" "}
              <Link
                href="/faq"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                FAQ
              </Link>{" "}
              for more on safety and logistics.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
