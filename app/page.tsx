import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import TrustBadges from "./components/TrustBadges";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { buildSocialMetadata } from "./lib/seo";

const TITLE = "Whale & Dolphin Watching Tours in Mirissa, Sri Lanka";
const DESCRIPTION =
  "Book an intimate, eco-certified whale snorkeling, whale watching or dolphin watching tour with Mirissa Whale Snorkel. Small groups, expert crew, transparent pricing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, "/"),
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Reveal>
          <Stats />
        </Reveal>
        <Packages />
        <div className="bg-ivory px-6 pb-20 text-center sm:pb-24 lg:px-16">
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-body">
            Planning ahead? Read our guide to the{" "}
            <Link
              href="/guides/best-time-to-see-whales-in-mirissa"
              className="font-semibold text-accent hover:text-accent-dark"
            >
              best time for whale watching in Mirissa
            </Link>{" "}
            or compare every{" "}
            <Link
              href="/snorkeling-in-mirissa"
              className="font-semibold text-accent hover:text-accent-dark"
            >
              snorkeling experience in Mirissa
            </Link>{" "}
            and see{" "}
            <Link
              href="/pricing"
              className="font-semibold text-accent hover:text-accent-dark"
            >
              full pricing
            </Link>{" "}
            for every tour.
          </p>
        </div>
        <Reveal>
          <Testimonials />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <TrustBadges />
        </Reveal>
      </main>
      <Reveal>
        <Footer />
      </Reveal>
    </>
  );
}
