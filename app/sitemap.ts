import { MetadataRoute } from "next";
import { adventures } from "./data/adventures";

const BASE = "https://udahniavanturu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const tourDetailsSr = adventures.map((a) => ({
    url: `${BASE}/ture/${a.slug}`,
    lastModified: now,
  }));

  const tourDetailsEn = adventures.map((a) => ({
    url: `${BASE}/en/tours/${a.slug}`,
    lastModified: now,
  }));

  return [
    // Serbian
    { url: BASE, lastModified: now },
    { url: `${BASE}/ture`, lastModified: now },
    { url: `${BASE}/galerija`, lastModified: now },
    { url: `${BASE}/blog`, lastModified: now },
    { url: `${BASE}/kontakt`, lastModified: now },
    ...tourDetailsSr,

    // English
    { url: `${BASE}/en`, lastModified: now },
    { url: `${BASE}/en/tours`, lastModified: now },
    ...tourDetailsEn,
  ];
}
