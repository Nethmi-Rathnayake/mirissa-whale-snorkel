import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryHero from "../components/GalleryHero";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Mirissa Whale Snorkel",
  description:
    "Browse photos of whales, dolphins and reef life from Mirissa Whale Snorkel's whale watching and snorkeling tours in Sri Lanka.",
};

export default function GalleryPage() {
  return (
    <>
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
