import { MetadataRoute } from "next";
import { adventures } from "./data/adventures";
import { adventuresEN } from "./data/adventures-en";
import { blogPosts } from "./data/blog";
import { blogPostsEN } from "./data/blog-en";

const BASE = "https://www.udahniavanturu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const tourDetailsSr = adventures.map((a) => ({
    url: `${BASE}/ture/${a.slug}`,
    lastModified: now,
  }));

  const tourDetailsEn = adventuresEN.map((a) => ({
    url: `${BASE}/en/tours/${a.slug}`,
    lastModified: now,
  }));

  const vodiciDetails = blogPosts.map((p) => ({
    url: `${BASE}/vodici/${p.slug}`,
    lastModified: now,
  }));

  const blogDetailsEn = blogPostsEN.map((p) => ({
    url: `${BASE}/en/blog/${p.slug}`,
    lastModified: now,
  }));

  return [
    // Serbian
    { url: BASE, lastModified: now },
    { url: `${BASE}/ture`, lastModified: now },
    { url: `${BASE}/o-nama`, lastModified: now },
    { url: `${BASE}/vodici`, lastModified: now },
    { url: `${BASE}/galerija`, lastModified: now },
    { url: `${BASE}/trnovacko-jezero`, lastModified: now },
    { url: `${BASE}/maglic-planina`, lastModified: now },
    ...tourDetailsSr,
    ...vodiciDetails,

    // English
    { url: `${BASE}/en`, lastModified: now },
    { url: `${BASE}/en/tours`, lastModified: now },
    { url: `${BASE}/en/o-nama`, lastModified: now },
    { url: `${BASE}/en/galerija`, lastModified: now },
    { url: `${BASE}/en/blog`, lastModified: now },
    ...tourDetailsEn,
    ...blogDetailsEn,
    { url: `${BASE}/en/maglic-hike`, lastModified: now },
    { url: `${BASE}/en/sutjeska-hiking`, lastModified: now },
    { url: `${BASE}/en/trnovacko-lake`, lastModified: now },
    { url: `${BASE}/en/perucica-rainforest`, lastModified: now },
    { url: `${BASE}/en/zelengora-lakes`, lastModified: now },
  ];
}
