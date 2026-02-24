import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://udahniavanturu.com", lastModified: new Date() },
    { url: "https://udahniavanturu.com/ture", lastModified: new Date() },
    { url: "https://udahniavanturu.com/galerija", lastModified: new Date() },
    { url: "https://udahniavanturu.com/blog", lastModified: new Date() },
    { url: "https://udahniavanturu.com/kontakt", lastModified: new Date() },
  ];
}
