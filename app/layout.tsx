import type { Metadata } from "next";
import { DM_Sans, Inter, Playfair_Display } from "next/font/google";
import FloatingContactButtons from "./components/FloatingContactButtons";
import ScrollToTop from "./components/ScrollToTop";
import {
  SITE_NAME,
  SITE_URL,
  buildSocialMetadata,
  defaultOpenGraphImage,
} from "./lib/seo";
import { testimonials } from "./lib/testimonials";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const DESCRIPTION =
  "Join Mirissa Whale Snorkel for an intimate, eco-certified whale snorkeling experience in the beautiful waters of Mirissa, Sri Lanka.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: `${SITE_NAME} | Whale Watching & Snorkeling Tours`,
  },
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  ...buildSocialMetadata(
    `${SITE_NAME} | Whale Watching & Snorkeling Tours`,
    DESCRIPTION,
    "/"
  ),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  // Fill in after registering with Google Search Console / Bing Webmaster
  // Tools: verification: { google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE" },
};

const averageRating =
  testimonials.reduce((sum, t) => sum + parseFloat(t.rating), 0) /
  testimonials.length;

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}${defaultOpenGraphImage.url}`,
  telephone: "+94764875498",
  email: "snorkelmirissawhale@gmail.com",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: averageRating.toFixed(1),
    reviewCount: testimonials.length,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mirissa Beach Road",
    addressLocality: "Mirissa",
    postalCode: "81740",
    addressCountry: "LK",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "07:00",
    closes: "18:00",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory font-sans text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <ScrollToTop />
        {children}
        <FloatingContactButtons />
      </body>
    </html>
  );
}
