import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Without this, the page would inherit the root layout's `index, follow`
// robots metadata, which would sit alongside Next.js's automatic 404
// noindex tag as a contradictory pair. Setting it explicitly here keeps
// both tags in agreement.
export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="flex flex-col items-center gap-6 px-6 py-24 text-center sm:py-32">
          <span className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            404
          </span>
          <h1 className="max-w-xl font-inter text-3xl font-bold tracking-tight sm:text-4xl">
            We couldn&rsquo;t find that page
          </h1>
          <p className="max-w-md text-body">
            The page you&rsquo;re looking for may have moved or no longer
            exists. Try one of the links below to get back on course.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/"
              className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ink/85"
            >
              Back to Home
            </Link>
            <Link
              href="/packages"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cream"
            >
              View Packages
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
