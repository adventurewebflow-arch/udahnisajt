import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.udahniavanturu.com/sitemap.xml",
    host: "https://www.udahniavanturu.com",
  };
}
