import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import BookingForm from "../../../components/BookingForm";
import { ArrowRightIcon } from "../../../components/icons";
import { getPackageBySlug, packages } from "../../../lib/packages";
import { defaultOpenGraph } from "../../../lib/seo";

export function generateStaticParams() {
  return packages.map((pkg) => ({ slug: pkg.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/packages/[slug]/book">): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    return {
      title: "Package Not Found",
      robots: { index: false, follow: false },
    };
  }

  const title = `Book ${pkg.name}`;
  const description = `Fill in your details to book the ${pkg.name} tour in Mirissa, Sri Lanka.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/packages/${pkg.slug}/book`,
    },
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: `/packages/${pkg.slug}/book`,
      images: [{ url: pkg.heroImage, alt: pkg.heroImageAlt }],
    },
  };
}

export default async function BookPackagePage({
  params,
}: PageProps<"/packages/[slug]/book">) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);

  if (!pkg) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative flex h-[46vh] min-h-[380px] w-full items-end overflow-hidden">
          {pkg.heroVideo ? (
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={pkg.heroImage}
              aria-label={pkg.heroImageAlt}
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src={pkg.heroVideo} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={pkg.heroImage}
              alt={pkg.heroImageAlt}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          )}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
            aria-hidden="true"
          />

          <div className="relative z-10 w-full px-6 pb-10 lg:px-16">
            <nav
              aria-label="Breadcrumb"
              className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-white/75"
            >
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href="/packages"
                className="transition-colors hover:text-white"
              >
                Packages
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={`/packages/${pkg.slug}`}
                className="transition-colors hover:text-white"
              >
                {pkg.name}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">Book</span>
            </nav>

            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
              Book Your Spot
            </h1>
            <p className="mt-3 max-w-xl text-white/85">{pkg.name}</p>
          </div>
        </section>

        <div className="bg-ivory py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-6">
            <Link
              href={`/packages/${pkg.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-body transition-colors hover:text-accent"
            >
              <ArrowRightIcon className="rotate-180" />
              Back to {pkg.name}
            </Link>

            <div className="mt-6">
              <BookingForm packageName={pkg.name} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
