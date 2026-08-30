import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import AboutJourney from "../components/AboutJourney";
import AboutCrew from "../components/AboutCrew";
import AboutSustainability from "../components/AboutSustainability";

export const metadata: Metadata = {
  title: "About Us | Mirissa Whale Snorkel",
  description:
    "Meet the oceanographers, mariners and conservationists behind Mirissa Whale Snorkel's intimate, responsible whale encounters in Sri Lanka.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <AboutJourney />
        <AboutCrew />
        <AboutSustainability />
      </main>
      <Footer />
    </>
  );
}
