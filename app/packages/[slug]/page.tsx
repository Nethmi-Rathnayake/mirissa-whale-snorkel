import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PackageDetail from "../../components/PackageDetail";
import { getPackageBySlug, packages } from "../../lib/packages";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/packages/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return { title: "Package Not Found | Mirissa Whale Snorkel" };
  }

  return {
    title: `${pkg.name} | Mirissa Whale Snorkel`,
    description: pkg.tagline,
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

  return (
    <>
      <Header />
      <main className="flex-1">
        <PackageDetail pkg={pkg} />
      </main>
      <Footer />
    </>
  );
}
