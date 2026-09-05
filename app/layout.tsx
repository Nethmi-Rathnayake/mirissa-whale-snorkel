import type { Metadata } from "next";
import { DM_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import OceanScrollEffect from "./components/OceanScrollEffect";

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

export const metadata: Metadata = {
  title: "Mirissa Whale Snorkel | Whale Watching & Snorkeling Tours",
  description:
    "Join Mirissa Whale Snorkel for an intimate, eco-certified whale snorkeling experience in the beautiful waters of Mirissa, Sri Lanka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory font-sans text-ink">
        <OceanScrollEffect />
        {children}
      </body>
    </html>
  );
}
