import type { MetadataRoute } from "next";

// Required for the static export.
export const dynamic = "force-static";

// TEMPORARY: blocks all crawlers while the site contains test content and has no
// production domain. Allow crawling and add the sitemap at launch
// (see docs/launch-checklist.md).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", disallow: "/" },
  };
}