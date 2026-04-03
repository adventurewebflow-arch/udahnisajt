import { MetadataRoute } from "next";
import { adventures } from "./data/adventures";
import { adventuresEN } from "./data/adventures-en";
import { blogPosts } from "./data/blog";
import { blogPostsEN } from "./data/blog-en";

const BASE = "https://www.udahniavanturu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const tourDetailsSr = adventures.map((a) => ({
    url: encodeURI(`${BASE}/ture/${a.slug}`),
    lastModified: now,
  }));

  const tourDetailsEn = adventuresEN.map((a) => ({
    url: encodeURI(`${BASE}/en/tours/${a.slug}`),
    lastModified: now,
  }));

  const vodiciDetails = blogPosts.map((p) => ({
    url: encodeURI(`${BASE}/vodici/${p.slug}`),
    lastModified: now,
  }));

  const blogDetailsEn = blogPostsEN.map((p) => ({
    url: encodeURI(`${BASE}/en/blog/${p.slug}`),
    lastModified: now,
  }));

  return [
    // Serbian
    { url: encodeURI(BASE), lastModified: now },
    { url: encodeURI(`${BASE}/ture`), lastModified: now },
    { url: encodeURI(`${BASE}/o-nama`), lastModified: now },
    { url: encodeURI(`${BASE}/vodici`), lastModified: now },
    { url: encodeURI(`${BASE}/galerija`), lastModified: now },
    { url: encodeURI(`${BASE}/trnovacko-jezero`), lastModified: now },
    { url: encodeURI(`${BASE}/maglic-planina`), lastModified: now },
    { url: encodeURI(`${BASE}/zelengora`), lastModified: now },
    { url: encodeURI(`${BASE}/perucica`), lastModified: now },
    { url: encodeURI(`${BASE}/sutjeska`), lastModified: now },
    { url: encodeURI(`${BASE}/kako-doci`), lastModified: now },
    ...tourDetailsSr,
    ...vodiciDetails,

    // English
    { url: encodeURI(`${BASE}/en`), lastModified: now },
    { url: encodeURI(`${BASE}/en/tours`), lastModified: now },
    { url: encodeURI(`${BASE}/en/o-nama`), lastModified: now },
    { url: encodeURI(`${BASE}/en/galerija`), lastModified: now },
    { url: encodeURI(`${BASE}/en/blog`), lastModified: now },
    { url: encodeURI(`${BASE}/en/kako-doci`), lastModified: now },
    ...tourDetailsEn,
    ...blogDetailsEn,
    { url: encodeURI(`${BASE}/en/maglic-hike`), lastModified: now },
    { url: encodeURI(`${BASE}/en/sutjeska-hiking`), lastModified: now },
    { url: encodeURI(`${BASE}/en/trnovacko-lake`), lastModified: now },
    { url: encodeURI(`${BASE}/en/perucica-rainforest`), lastModified: now },
    { url: encodeURI(`${BASE}/en/zelengora-lakes`), lastModified: now },
  ];
}
