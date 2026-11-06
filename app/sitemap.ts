import type { MetadataRoute } from "next";
import { adventures } from "./data/adventures";
import { adventuresEN } from "./data/adventures-en";
import { blogPosts } from "./data/blog";
import { blogPostsEN } from "./data/blog-en";
import { partnerExperiences } from "@/lib/partnerExperiences";
import { getBlogPairBySrSlug, getBlogPairByEnSlug } from "@/lib/slugMap";

const BASE = "https://www.udahniavanturu.com";
const u = (path: string) => encodeURI(`${BASE}${path}`);

type Entry = MetadataRoute.Sitemap[number];

/** SR + EN entry for one bilingual page, each pointing at the other. */
function pair(sr: string, en: string, priority: number, lastModified?: string): Entry[] {
  const languages = { "sr-Latn": u(sr), en: u(en), "x-default": u(en) };
  return [
    { url: u(sr), alternates: { languages }, priority, ...(lastModified ? { lastModified } : {}) },
    { url: u(en), alternates: { languages }, priority, ...(lastModified ? { lastModified } : {}) },
  ];
}

export default function sitemap(): MetadataRoute.Sitemap {
  const enSlugs = new Set(adventuresEN.map((a) => a.slug));

  const pages: Entry[] = [
    ...pair("", "/en", 1.0),
    ...pair("/ture", "/en/tours", 0.9),
    ...pair("/sutjeska-nacionalni-park", "/en/sutjeska-national-park", 0.9),
    ...pair("/trnovacko-jezero", "/en/trnovacko-lake", 0.9),
    ...pair("/maglic-planina", "/en/maglic-hike", 0.9),
    ...pair("/zelengora", "/en/zelengora-lakes", 0.9),
    ...pair("/perucica", "/en/perucica-rainforest", 0.9),
    ...pair("/sutjeska", "/en/sutjeska-hiking", 0.8),
    ...pair("/kako-doci", "/en/kako-doci", 0.7),
    ...pair("/o-nama", "/en/o-nama", 0.6),
    ...pair("/galerija", "/en/galerija", 0.5),
    ...pair("/vodici", "/en/blog", 0.6),
    ...pair("/kreiraj-avanturu", "/en/kreiraj-avanturu", 0.6),
    ...pair("/partneri", "/en/partners", 0.5),
  ];

  const tours: Entry[] = adventures.flatMap((a) =>
    enSlugs.has(a.slug)
      ? pair(`/ture/${a.slug}`, `/en/tours/${a.slug}`, 0.8)
      : [{ url: u(`/ture/${a.slug}`), priority: 0.8 }]
  );

  const srBlog: Entry[] = blogPosts.map((p) => {
    const match = getBlogPairBySrSlug(p.slug);
    return {
      url: u(`/vodici/${p.slug}`),
      lastModified: p.date,
      priority: 0.7,
      ...(match
        ? { alternates: { languages: { "sr-Latn": u(`/vodici/${match.sr}`), en: u(`/en/blog/${match.en}`), "x-default": u(`/en/blog/${match.en}`) } } }
        : {}),
    };
  });

  const enBlog: Entry[] = blogPostsEN.map((p) => {
    const match = getBlogPairByEnSlug(p.slug);
    return {
      url: u(`/en/blog/${p.slug}`),
      lastModified: p.date,
      priority: 0.7,
      ...(match
        ? { alternates: { languages: { "sr-Latn": u(`/vodici/${match.sr}`), en: u(`/en/blog/${match.en}`), "x-default": u(`/en/blog/${match.en}`) } } }
        : {}),
    };
  });

  const partners: Entry[] = partnerExperiences.map((e) => ({
    url: u(`/en/partners/${e.slug}`),
    priority: 0.4,
  }));

  return [...pages, ...tours, ...srBlog, ...enBlog, ...partners];
}
