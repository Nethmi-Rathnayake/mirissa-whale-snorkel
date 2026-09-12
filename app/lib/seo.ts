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

type SocialImages = NonNullable<Metadata["openGraph"]>["images"];

/**
 * Next.js metadata is only shallow-merged across layout/page segments: a page
 * that sets `openGraph` but not `twitter` inherits the *entire* parent
 * `twitter` object as-is, so its Twitter Card would silently show another
 * page's title/description. Every page metadata export should spread this
 * instead of hand-rolling `openGraph`/`twitter` to keep both in sync.
 */
export function buildSocialMetadata(
  title: string,
  description: string,
  path: string,
  images: SocialImages = defaultOpenGraph.images
): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      ...defaultOpenGraph,
      title,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
