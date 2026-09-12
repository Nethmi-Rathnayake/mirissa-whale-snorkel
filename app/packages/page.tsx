import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PackagesHero from "../components/PackagesHero";
import Packages from "../components/Packages";
import { buildSocialMetadata } from "../lib/seo";

const TITLE = "Packages";
const DESCRIPTION =
  "Compare our whale snorkeling, whale watching, and dolphin watching tour packages in Mirissa, Sri Lanka, including pricing and what's included.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/packages",
  },
  ...buildSocialMetadata(TITLE, DESCRIPTION, "/packages"),
};

export default function PackagesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-ivory">
        <PackagesHero />
        <div className="-mt-12 lg:-mt-16">
          <Packages />
        </div>
      </main>
      <Footer />
    </>
  );
}
