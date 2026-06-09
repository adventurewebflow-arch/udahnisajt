/**
 * Central SR <-> EN routing map (single source of truth).
 *
 * Used by:
 *  - the navbar language switcher (correct cross-language URL instead of a naive
 *    prefix swap that 404s when SR and EN slugs differ)
 *  - hreflang generation (alternates.languages) on bilingual pages
 *
 * Tour detail pages intentionally SHARE their slug between SR and EN
 * (/ture/<slug> <-> /en/tours/<slug>), so they are NOT listed here — the
 * navbar prefix fallback handles them correctly.
 */

import type { Metadata } from "next";

export const SITE_URL = "https://www.udahniavanturu.com";

/** The exact shape Next.js expects for `metadata.alternates.languages`. */
type LanguageAlternates = NonNullable<NonNullable<Metadata["alternates"]>["languages"]>;

export interface SlugPair {
  /** SR blog slug, served at /vodici/<sr> */
  sr: string;
  /** EN blog slug, served at /en/blog/<en> */
  en: string;
}

export interface PathPair {
  /** Full SR path, e.g. "/zelengora" or "/vodici/zelengora-vodic-planina-bih" */
  sr: string;
  /** Full EN path, e.g. "/en/zelengora-lakes" or "/en/blog/zelengora-mountain-complete-guide" */
  en: string;
}

/** Blog post slug pairs (ids 1–12 in app/data/blog.ts / blog-en.ts). */
export const blogSlugPairs: SlugPair[] = [
  { sr: "trnovacko-jezero-vodic", en: "trnovacko-lake-guide" }, // id 1
  { sr: "uspon-na-maglic-savjeti", en: "maglic-hike-guide" }, // id 2
  { sr: "sta-ponijeti-np-sutjeska", en: "what-to-pack-sutjeska-national-park" }, // id 3
  { sr: "prasuma-perucica-sta-treba-znati", en: "perucica-rainforest-guide" }, // id 4
  { sr: "vodopad-skakavac-perucica-vodic", en: "skakavac-waterfall-guide" }, // id 6
  { sr: "prvomajska-avantura-utisci", en: "may-day-adventure-recap" }, // id 7
  { sr: "zasto-je-sutjeska-najbolja-destinacija", en: "why-sutjeska-is-the-best-destination" }, // id 8
  { sr: "visednevne-avanture-bih-crna-gora", en: "multi-day-adventures-bosnia-montenegro" }, // id 9
  { sr: "izlet-iz-sarajeva-sutjeska-maglic", en: "day-trip-sarajevo-maglic-sutjeska" }, // id 10
  { sr: "zelengora-vodic-planina-bih", en: "zelengora-mountain-complete-guide" }, // id 11
  { sr: "perucica-zelengora-rafting-tara-iskustvo", en: "tara-rafting-perucica-rainforest-bosnia" }, // id 12
];

/** Localized landing pages whose SR and EN paths differ. */
export const landingPathPairs: PathPair[] = [
  { sr: "/zelengora", en: "/en/zelengora-lakes" },
  { sr: "/maglic-planina", en: "/en/maglic-hike" },
  { sr: "/trnovacko-jezero", en: "/en/trnovacko-lake" },
  { sr: "/perucica", en: "/en/perucica-rainforest" },
  { sr: "/sutjeska-nacionalni-park", en: "/en/sutjeska-national-park" },
  { sr: "/sutjeska", en: "/en/sutjeska-hiking" },
];

/** All full-path pairs (blog detail + landings) for lookups by pathname. */
export const pathPairs: PathPair[] = [
  ...blogSlugPairs.map((p) => ({ sr: `/vodici/${p.sr}`, en: `/en/blog/${p.en}` })),
  ...landingPathPairs,
];

function normalizePath(pathname: string): string {
  const noHash = pathname.split(/[?#]/)[0] ?? pathname;
  return noHash.replace(/\/+$/, "") || "/";
}

/**
 * Look up the exact SR/EN counterpart for a full pathname.
 * Returns null when the path is not in the map (caller should fall back to
 * the naive prefix swap, which is correct for shared-slug routes).
 */
export function getPathPair(pathname: string): PathPair | null {
  const clean = normalizePath(pathname);
  for (const pair of pathPairs) {
    if (pair.sr === clean || pair.en === clean) return pair;
  }
  return null;
}

export function getBlogPairBySrSlug(slug: string): SlugPair | undefined {
  return blogSlugPairs.find((p) => p.sr === slug);
}

export function getBlogPairByEnSlug(slug: string): SlugPair | undefined {
  return blogSlugPairs.find((p) => p.en === slug);
}

function buildAlternates(srPath: string, enPath: string): LanguageAlternates {
  return {
    "sr-Latn": `${SITE_URL}${srPath}`,
    en: `${SITE_URL}${enPath}`,
    // x-default points to the EN version (international fallback for unmatched
    // languages).
    "x-default": `${SITE_URL}${enPath}`,
  };
}

/** hreflang alternates for a blog post, given either its SR or EN slug. */
export function blogHreflang(opts: { sr?: string; en?: string }): LanguageAlternates | undefined {
  const pair = opts.sr
    ? getBlogPairBySrSlug(opts.sr)
    : opts.en
      ? getBlogPairByEnSlug(opts.en)
      : undefined;
  if (!pair) return undefined;
  return buildAlternates(`/vodici/${pair.sr}`, `/en/blog/${pair.en}`);
}

/** hreflang alternates for a landing page, given either its SR or EN full path. */
export function landingHreflang(pathname: string): LanguageAlternates | undefined {
  const pair = getPathPair(pathname);
  if (!pair) return undefined;
  return buildAlternates(pair.sr, pair.en);
}

/**
 * hreflang alternates for an explicit SR/EN path pair.
 * Use for fixed bilingual pages such as the homepage ("" <-> "/en") and the
 * tour list ("/ture" <-> "/en/tours"). Paths are relative to SITE_URL; pass ""
 * for the SR homepage so the URL has no trailing slash.
 */
export function pathHreflang(srPath: string, enPath: string): LanguageAlternates {
  return buildAlternates(srPath, enPath);
}

/**
 * hreflang alternates for a tour detail page. Tours share their slug between
 * languages: SR /ture/<slug> <-> EN /en/tours/<slug>.
 */
export function tourHreflang(slug: string): LanguageAlternates {
  return buildAlternates(`/ture/${slug}`, `/en/tours/${slug}`);
}
