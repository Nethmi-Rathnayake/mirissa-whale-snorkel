import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqHero from "../components/FaqHero";
import FaqExplorer from "../components/FaqExplorer";
import { faqCategories } from "../lib/faq";

export const metadata: Metadata = {
  title: "FAQ | Mirissa Whale Snorkel",
  description:
    "Answers to common questions about whale species, safety, sighting guarantees, best season, and booking for Mirissa Whale Snorkel tours.",
};

export default function FaqPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory">
        <FaqHero />
        <FaqExplorer categories={faqCategories} />
      </main>
      <Footer />
    </>
  );
}
