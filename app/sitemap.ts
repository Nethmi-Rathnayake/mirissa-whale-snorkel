import type { MetadataRoute } from "next";
import { packages } from "./lib/packages";
import { SITE_URL } from "./lib/seo";

const STATIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/packages", priority: 0.9 },
  { path: "/pricing", priority: 0.8 },
  { path: "/snorkeling-in-mirissa", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/contact", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/conservation", priority: 0.6 },
  { path: "/guides/best-time-to-see-whales-in-mirissa", priority: 0.6 },
  { path: "/guides/what-to-expect-whale-watching-mirissa", priority: 0.6 },
  { path: "/guides/blue-whale-watching-mirissa", priority: 0.6 },
  { path: "/guides/whale-watching-sri-lanka", priority: 0.6 },
  { path: "/guides/getting-to-mirissa", priority: 0.6 },
  { path: "/gallery", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(
    ({ path, priority }) => ({
      url: `${SITE_URL}${path}`,
      changeFrequency: "monthly",
      priority,
    })
  );

  const packageEntries: MetadataRoute.Sitemap = packages.flatMap((pkg) => [
    {
      url: `${SITE_URL}/packages/${pkg.slug}`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/packages/${pkg.slug}/book`,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ]);

  return [...staticEntries, ...packageEntries];
}
