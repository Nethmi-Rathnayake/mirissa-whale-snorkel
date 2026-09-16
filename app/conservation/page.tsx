import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { LeafIcon } from "../components/icons";
import { buildBreadcrumbJsonLd, buildSocialMetadata, SITE_URL } from "../lib/seo";

const TITLE = "Our Approach to Ethical & Responsible Whale Watching";
const DESCRIPTION =
  "How Mirissa Whale Snorkel approaches responsible whale watching — viewing distance, carbon-neutral operations, marine data collection, and community funding.";
const PATH = "/conservation";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, PATH, [
    {
      url: "/images/coral-reef.jpg",
      alt: "Sunrays streaming through the ocean over a vivid coral reef",
    },
  ]),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Conservation", path: PATH },
]);

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
};

export default function ConservationPage() {
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
          eyebrow="Our Manifesto"
          eyebrowIcon={LeafIcon}
          title="Protecting the Whales We Share the Water With"
          subtitle="Our approach to responsible whale watching, from viewing distance to where a share of every booking goes."
          image="/images/coral-reef.jpg"
          imageAlt="Sunrays streaming through the ocean over a vivid coral reef"
        />

        <article className="mx-auto max-w-3xl px-6 py-4 sm:py-6 lg:px-16">
          <p className="leading-relaxed text-body">
            What began as a small research initiative mapping the migratory
            routes of blue whales off the southern coast of Sri Lanka has
            evolved into a leading advocate for marine conservation and
            sustainable ecotourism. We believe the connection forged when a
            person meets a whale in its natural habitat is one of the most
            powerful catalysts for ocean advocacy — so our mission is to
            facilitate that encounter with absolute respect for the animals
            and their environment.
          </p>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Responsible Viewing Distance
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We follow strict marine park guidelines and never approach
              closer than 15–20 metres from a whale. Guests are asked to
              stay calm and quiet in the water, never touch or chase marine
              life, and never feed marine animals. Any closer encounter
              always happens on the animal&rsquo;s terms, not ours.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Carbon-Neutral Operations
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We offset all emissions from our vessels through local
              mangrove reforestation projects, aiming to keep our own
              footprint on the ocean we depend on as light as possible.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Marine Research & Data Collection
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              During every trip, our biologists collect acoustic and visual
              data that is shared with global marine databases, continuing
              the research focus our tours were originally built on.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Community Funding
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              A percentage of every booking directly funds local marine
              research and community education programs in Mirissa, so
              guests booking a trip are also supporting work that happens
              well beyond the boat.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Guide-Led Safety Standards
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              Every trip is led by an experienced or certified guide, with a
              strict guest-to-guide ratio and approved life jackets and
              first-aid equipment carried on board. These standards exist
              to protect guests and animals alike.
            </p>
          </section>

          <section className="mt-14 border-t border-border/70 pt-8">
            <p className="leading-relaxed text-body">
              Read more about{" "}
              <Link
                href="/about"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                who we are
              </Link>
              , see how this shows up on the water in our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>
              , or check our{" "}
              <Link
                href="/faq"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                FAQ
              </Link>{" "}
              for more on safety and booking.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
