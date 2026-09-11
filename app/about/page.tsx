import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutJourney from "../components/AboutJourney";
import AboutCrew from "../components/AboutCrew";
import AboutSustainability from "../components/AboutSustainability";
import { defaultOpenGraph } from "../lib/seo";

const TITLE = "About Us";
const DESCRIPTION =
  "Meet the oceanographers, mariners and conservationists behind Mirissa Whale Snorkel's intimate, responsible whale encounters in Sri Lanka.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <div className="-mt-12 lg:-mt-16">
          <AboutJourney />
        </div>
        <div className="-mt-[110px]">
          <AboutCrew />
        </div>
        <AboutSustainability />
      </main>
      <Footer />
    </>
  );
}
