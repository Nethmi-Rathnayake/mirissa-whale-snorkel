import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { WaveIcon } from "../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../lib/seo";

const TITLE = "Snorkeling in Mirissa: Whales, Turtles & Reefs";
const DESCRIPTION =
  "Compare Mirissa's snorkeling experiences — swimming with whales, snorkeling with turtles, and reef diving — to find the right trip for you.";
const PATH = "/snorkeling-in-mirissa";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/turtle-couple-snorkeling.png",
      alt: "A couple snorkeling together, holding hands underwater",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Snorkeling in Mirissa", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function SnorkelingInMirissaPage() {
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
          eyebrow="Snorkeling Guide"
          eyebrowIcon={WaveIcon}
          title="Snorkeling in Mirissa"
          subtitle="Whales, turtles or reef — here's how each snorkeling and diving experience in Mirissa actually works."
          image="/images/turtle-couple-snorkeling.png"
          imageAlt="A couple snorkeling together, holding hands underwater"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            Mirissa offers a few very different ways to get in the water,
            from swimming alongside whales to a gentle, family-friendly
            snorkel with sea turtles, right through to certified scuba
            diving on the reef. Here&rsquo;s how each one works, so you can
            pick the right fit.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Whale Snorkeling
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Our{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              trip pairs a scenic boat cruise with a guided, in-water
              snorkel alongside blue and sperm whales, at a safe, respectful
              distance of at least 15–20 metres. Basic swimming confidence
              is recommended, and every trip runs in small groups with an
              experienced guide. It runs on the same November–April season
              as our whale watching tours, with February to April typically
              offering the clearest water.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Snorkeling with Turtles
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              A more relaxed option, our{" "}
              <Link
                href="/packages/snorkeling-with-turtles"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Snorkeling with Turtles
              </Link>{" "}
              trip heads out to a turtle feeding site just off Mirissa. Life
              jackets are provided, so non-swimmers can safely take part,
              and the guide keeps a respectful distance (1–2 metres) so the
              turtles aren&rsquo;t disturbed. It&rsquo;s a good fit for
              families or anyone who&rsquo;d rather ease into snorkeling.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Reef & Fun Diving
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              If you&rsquo;re a certified diver and want to go beyond
              snorkeling, our{" "}
              <Link
                href="/packages/fun-diving"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Fun Diving
              </Link>{" "}
              trips run daily to Mirissa&rsquo;s reef dive sites, with
              single dives, two-tank morning trips, night dives and
              refresher sessions all available. This is scuba diving rather
              than snorkeling, so it requires a recognised certification
              (Open Water or higher). Never dived before? Our{" "}
              <Link
                href="/packages/discover-scuba-diving"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Discover Scuba Diving
              </Link>{" "}
              trip is a guided, 1:1 first experience that needs no
              certification at all.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Which Snorkeling Experience Is Right for You
            </h2>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="leading-relaxed text-body">
                <span className="font-semibold text-ink">
                  Want to swim with whales?
                </span>{" "}
                Whale Snorkeling — basic swimming confidence needed,
                available November to April.
              </li>
              <li className="leading-relaxed text-body">
                <span className="font-semibold text-ink">
                  Snorkeling with kids or non-swimmers?
                </span>{" "}
                Snorkeling with Turtles — life jackets provided.
              </li>
              <li className="leading-relaxed text-body">
                <span className="font-semibold text-ink">
                  Already certified to dive?
                </span>{" "}
                Fun Diving — reef sites, no snorkeling involved.
              </li>
              <li className="leading-relaxed text-body">
                <span className="font-semibold text-ink">
                  Never dived before but curious?
                </span>{" "}
                Discover Scuba Diving — no certification needed, 1:1 guided.
              </li>
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Safety & What&rsquo;s Included
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Every one of these trips includes life jackets or full
              equipment as standard, and is led by an experienced guide or a
              PADI/SSI-certified instructor. Whale Snorkeling and Snorkeling
              with Turtles both maintain a respectful distance from marine
              life at all times.
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Compare full pricing across every tour on our{" "}
              <Link
                href="/pricing"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                pricing page
              </Link>
              , or head back to{" "}
              <Link
                href="/packages"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                all packages
              </Link>{" "}
              to see everything we offer.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
