import { MetadataRoute } from "next";
import { adventures } from "./data/adventures";
import { adventuresEN } from "./data/adventures-en";
import { blogPosts } from "./data/blog";
import { blogPostsEN } from "./data/blog-en";

const BASE = "https://www.udahniavanturu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString();

  const tourDetailsSr = adventures.map((a) => ({
    url: encodeURI(`${BASE}/ture/${a.slug}`),
    lastModified,
  }));

  const tourDetailsEn = adventuresEN.map((a) => ({
    url: encodeURI(`${BASE}/en/tours/${a.slug}`),
    lastModified,
  }));

  const vodiciDetails = blogPosts.map((p) => ({
    url: encodeURI(`${BASE}/vodici/${p.slug}`),
    lastModified,
  }));

  const blogDetailsEn = blogPostsEN.map((p) => ({
    url: encodeURI(`${BASE}/en/blog/${p.slug}`),
    lastModified,
  }));

  return [
    // Serbian
    { url: encodeURI(BASE), lastModified },
    { url: encodeURI(`${BASE}/ture`), lastModified },
    { url: encodeURI(`${BASE}/o-nama`), lastModified },
    { url: encodeURI(`${BASE}/vodici`), lastModified },
    { url: encodeURI(`${BASE}/galerija`), lastModified },
    { url: encodeURI(`${BASE}/trnovacko-jezero`), lastModified },
    { url: encodeURI(`${BASE}/maglic-planina`), lastModified },
    { url: encodeURI(`${BASE}/zelengora`), lastModified },
    { url: encodeURI(`${BASE}/perucica`), lastModified },
    { url: encodeURI(`${BASE}/sutjeska`), lastModified },
    { url: encodeURI(`${BASE}/kako-doci`), lastModified },
    ...tourDetailsSr,
    ...vodiciDetails,

    // English
    { url: encodeURI(`${BASE}/en`), lastModified },
    { url: encodeURI(`${BASE}/en/tours`), lastModified },
    { url: encodeURI(`${BASE}/en/o-nama`), lastModified },
    { url: encodeURI(`${BASE}/en/galerija`), lastModified },
    { url: encodeURI(`${BASE}/en/blog`), lastModified },
    { url: encodeURI(`${BASE}/en/kako-doci`), lastModified },
    ...tourDetailsEn,
    ...blogDetailsEn,
    { url: encodeURI(`${BASE}/en/maglic-hike`), lastModified },
    { url: encodeURI(`${BASE}/en/sutjeska-hiking`), lastModified },
    { url: encodeURI(`${BASE}/en/trnovacko-lake`), lastModified },
    { url: encodeURI(`${BASE}/en/perucica-rainforest`), lastModified },
    { url: encodeURI(`${BASE}/en/zelengora-lakes`), lastModified },
  ];
}
