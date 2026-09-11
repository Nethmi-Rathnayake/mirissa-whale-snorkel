import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import Experience from "./components/Experience";
import TrustBadges from "./components/TrustBadges";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import { defaultOpenGraph } from "./lib/seo";

const TITLE = "Whale & Dolphin Watching Tours in Mirissa, Sri Lanka";
const DESCRIPTION =
  "Book an intimate, eco-certified whale snorkeling, whale watching or dolphin watching tour with Mirissa Whale Snorkel. Small groups, expert crew, transparent pricing.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
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
