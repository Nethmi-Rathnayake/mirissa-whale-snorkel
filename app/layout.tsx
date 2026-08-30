import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mirissa Whale Snorkel | Whale Watching & Snorkeling Tours",
  description:
    "Join Mirissa Whale Snorkel for an intimate, eco-certified whale snorkeling experience in the beautiful waters of Mirissa, Sri Lanka.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-ivory font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
