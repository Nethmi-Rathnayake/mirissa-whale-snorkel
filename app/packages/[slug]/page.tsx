import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PackageDetail from "../../components/PackageDetail";
import { getPackageBySlug, packages } from "../../lib/packages";
import { SITE_URL, defaultOpenGraph } from "../../lib/seo";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

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

  return {
    title: pkg.name,
    description: pkg.tagline,
    alternates: {
      canonical: `/packages/${pkg.slug}`,
    },
    openGraph: {
      ...defaultOpenGraph,
      title: pkg.name,
      description: pkg.tagline,
      url: `/packages/${pkg.slug}`,
      images: [{ url: pkg.heroImage, alt: pkg.heroImageAlt }],
    },
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

  const offers =
    pkg.price.kind === "flat"
      ? {
          "@type": "Offer",
          price: pkg.price.price,
          priceCurrency: "USD",
        }
      : {
          "@type": "AggregateOffer",
          lowPrice: Math.min(...pkg.price.tiers.map((tier) => tier.price)),
          highPrice: Math.max(...pkg.price.tiers.map((tier) => tier.price)),
          priceCurrency: "USD",
        };

  const touristTripJsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.name,
    description: pkg.description,
    image: `${SITE_URL}${pkg.heroImage}`,
    offers,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Packages",
        item: `${SITE_URL}/packages`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.name,
        item: `${SITE_URL}/packages/${pkg.slug}`,
      },
    ],
  };

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
