import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PackageDetail from "../../components/PackageDetail";
import { getPackageBySlug, getPackageOffer, packages } from "../../lib/packages";
import {
  SITE_URL,
  buildBreadcrumbJsonLd,
  buildSocialMetadata,
} from "../../lib/seo";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

/**
 * Sharper, intent-differentiated descriptions for the three whale/dolphin
 * packages, since these are the pages most likely to compete for overlapping
 * "whale watching Mirissa" style searches. Every other package falls back to
 * its own `tagline`, which is already sufficiently distinct.
 */
const SEO_DESCRIPTIONS: Partial<Record<string, string>> = {
  "whale-snorkeling":
    "Swim alongside blue and sperm whales on a guided, in-water snorkel tour in Mirissa. Small groups and experienced guides included.",
  "whale-watching":
    "Watch blue whales and dolphins surface and dive from the boat deck on our Whale Watching Tour in Mirissa — no swimming required.",
  "dolphin-watching":
    "Follow large pods of dolphins on a relaxed morning boat trip in Mirissa — the same boat and schedule as our Whale Watching Tour.",
};

export async function generateMetadata({
  params,
}: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `${pkg.name} in Mirissa`;
  const description = SEO_DESCRIPTIONS[pkg.slug] ?? pkg.tagline;

  return {
    title,
    description,
    alternates: {
      canonical: `/packages/${pkg.slug}`,
    },
    ...buildSocialMetadata(title, description, `/packages/${pkg.slug}`, [
      { url: pkg.heroImage, alt: pkg.heroImageAlt },
    ]),
  };
}

export default async function PackagePage({
  params,
}: PageProps<"/packages/[slug]">) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.description,
    image: `${SITE_URL}${pkg.heroImage}`,
    offers: getPackageOffer(pkg),
  };

  const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: pkg.name, path: `/packages/${pkg.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <PackageDetail pkg={pkg} />
      </main>
      <Footer />
    </>
  );
}
