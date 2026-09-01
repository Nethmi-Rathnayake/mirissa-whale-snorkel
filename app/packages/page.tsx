import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PackagesHero from "../components/PackagesHero";
import Packages from "../components/Packages";

export const metadata: Metadata = {
  title: "Packages | Mirissa Whale Snorkel",
  description:
    "Compare our whale snorkeling, whale watching, and dolphin watching tour packages in Mirissa, Sri Lanka, including pricing and what's included.",
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory">
        <PackagesHero />
        <Packages />
      </main>
      <Footer />
    </>
  );
}
