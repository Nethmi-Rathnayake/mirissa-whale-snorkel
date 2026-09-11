import type { Metadata } from "next";

export const SITE_URL = "https://mirissawhalesnorkel.com";
export const SITE_NAME = "Mirissa Whale Snorkel";

export const defaultOpenGraphImage = {
  url: "/images/whale-snorkelers-pair-blue-whales.png",
  width: 1200,
  height: 800,
  alt: "Snorkelers swimming beside a blue whale in Mirissa, Sri Lanka",
};

export const defaultOpenGraph: NonNullable<Metadata["openGraph"]> = {
  siteName: SITE_NAME,
  type: "website",
  locale: "en_US",
  images: [defaultOpenGraphImage],
};
