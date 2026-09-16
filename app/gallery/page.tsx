import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";
import { buildBreadcrumbJsonLd, buildSocialMetadata } from "../lib/seo";

const TITLE = "Gallery";
const DESCRIPTION =
  "Browse photos of whales, dolphins and reef life from Mirissa Whale Snorkel's whale watching and snorkeling tours in Sri Lanka.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/gallery",
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, "/gallery"),
};

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Gallery", path: "/gallery" },
]);

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1 bg-ivory">
        <GalleryHero />
        <div className="-mt-12 lg:-mt-16">
          <GalleryGrid />
        </div>
      </main>
      <Footer />
    </>
  );
}
