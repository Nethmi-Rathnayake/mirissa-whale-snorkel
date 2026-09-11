import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FaqHero from "../components/FaqHero";
import FaqExplorer from "../components/FaqExplorer";
import { faqCategories } from "../lib/faq";
import { defaultOpenGraph } from "../lib/seo";

const TITLE = "FAQ";
const DESCRIPTION =
  "Answers to common questions about whale species, safety, sighting guarantees, best season, and booking for Mirissa Whale Snorkel tours.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    ...defaultOpenGraph,
    title: TITLE,
    description: DESCRIPTION,
    url: "/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <FaqHero />
        <FaqExplorer categories={faqCategories} />
      </main>
      <Footer />
    </>
  );
}
