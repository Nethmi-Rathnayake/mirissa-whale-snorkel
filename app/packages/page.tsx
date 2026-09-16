import type { Metadata } from "next";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PackagesHero from "../components/PackagesHero";
import Packages from "../components/Packages";
import { buildBreadcrumbJsonLd, buildSocialMetadata } from "../lib/seo";

const TITLE = "Tour Packages & Pricing";
const DESCRIPTION =
  "See pricing and what's included for every Mirissa Whale Snorkel tour — whale watching, whale snorkeling, dolphin watching and diving — all in one place to compare.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/packages",
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, "/packages"),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Packages", path: "/packages" },
]);

export default function PackagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <PackagesHero />
        <div className="-mt-12 lg:-mt-16">
          <section className="bg-ivory px-6 pb-4 pt-10 lg:px-16">
            <p className="leading-relaxed text-body">
              Not sure which tour is right for you? Our{" "}
              <Link
                href="/packages/whale-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Watching Tour
              </Link>{" "}
              follows whales and dolphins from the comfort of the boat deck
              — no swimming required.{" "}
              <Link
                href="/packages/whale-snorkeling"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Whale Snorkeling
              </Link>{" "}
              takes you further, pairing the same boat cruise with a guided
              in-water swim alongside the whales.{" "}
              <Link
                href="/packages/dolphin-watching"
                className="font-semibold text-accent hover:text-accent-dark"
              >
                Dolphin Watching
              </Link>{" "}
              uses the same boat, schedule and pricing as our Whale Watching
              Tour, focused on the pods that gather off Mirissa most
              mornings. Every package below includes full pricing and
              what&rsquo;s included, so you can compare and choose with
              confidence.
            </p>
          </section>
          <Packages />
        </div>
      </main>
      <Footer />
    </>
  );
}
