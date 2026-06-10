import type { NextConfig } from "next";
import { blogSlugPairs, landingPathPairs } from "./lib/slugMap";

type Redirect = { source: string; destination: string; permanent: boolean };

// Existing, hand-written redirects (legacy URLs, content consolidation, etc.).
// Do NOT remove these — they protect indexed/inbound links.
const manualRedirects: Redirect[] = [
      // ─── Stare camping stranice ───────────────────────────────────────────
      {
        source: "/camping/trnovackojezero-maglic",
        destination: "/ture/kampovanje-trnovacko-jezero-maglic",
        permanent: true,
      },
      {
        source: "/camping/ljetna-avantura-na-tjentistu",
        destination: "/ture/porodicni-vikend-tjentiste-zelengora",
        permanent: true,
      },
      // FIX #1: bio je slug sa č — encodiran u %C4%8D da Next.js ne puca
      {
        source: "/camping/zelengora-jahanje-konja",
        destination: "/ture/kampovanje-zelengora-bregoč-jeep-safari",
        permanent: true,
      },

      // ─── Stare izleti stranice ────────────────────────────────────────────
      {
        source: "/izleti/kanjoning-ili-trnovacko-jezero",
        destination: "/ture/kanjoning-hrcavka",
        permanent: true,
      },
      // Stari izlet Perućica/Skakavac → landing prašume (prije catch-all-a)
      {
        source: "/izleti/perucica-skakavac",
        destination: "/perucica",
        permanent: true,
      },
      // Catch-all za /izleti/* — direktno na /ture (bez chain-a)
      {
        source: "/izleti/:path*",
        destination: "/ture",
        permanent: true,
      },

      // ─── Specijalne ponude ────────────────────────────────────────────────
      {
        source: "/specijalne-ponude/kreiraj-svoju-avanturu",
        destination: "/kreiraj-avanturu",
        permanent: true,
      },
      // FIX #2: teambilding sada ide na konkretnu turu, ne generički /ture
      {
        source: "/specijalne-ponude/teambilding",
        destination: "/ture/teambuilding-sutjeska",
        permanent: true,
      },
      {
        source: "/specijalne-ponude/porodicni-paket",
        destination: "/ture/porodicni-vikend-tjentiste-zelengora",
        permanent: true,
      },
      // Catch-all za /specijalne-ponude/* — direktno na /ture (bez chain-a)
      {
        source: "/specijalne-ponude/:path*",
        destination: "/ture",
        permanent: true,
      },

      // ─── Legacy kratki URL-ovi ────────────────────────────────────────────
      // FIX #3: sve što ide na /ture ide sada DIREKTNO, ne kroz chain
      {
        source: "/kampovanje",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/izletibosna",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/posebneponude",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/posebneponude/:path*",
        destination: "/ture",
        permanent: true,
      },

      // ─── Blog / Vodiči ────────────────────────────────────────────────────
      {
        source: "/blog",
        destination: "/vodici",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/vodici/:slug",
        permanent: true,
      },

      // ─── EN stranice ──────────────────────────────────────────────────────
      {
        source: "/en/vodici/:slug",
        destination: "/en/blog/:slug",
        permanent: true,
      },
      {
        source: "/en/how-to-get-here",
        destination: "/en/kako-doci",
        permanent: true,
      },

      // ─── EN blog: srpski slugovi → engleski slugovi ─────────────────────────
      {
        source: "/en/blog/trnovacko-jezero-vodic",
        destination: "/en/blog/trnovacko-lake-guide",
        permanent: true,
      },
      {
        source: "/en/blog/uspon-na-maglic-savjeti",
        destination: "/en/blog/maglic-hike-guide",
        permanent: true,
      },
      {
        source: "/en/blog/sta-ponijeti-np-sutjeska",
        destination: "/en/blog/what-to-pack-sutjeska-national-park",
        permanent: true,
      },
      {
        source: "/en/blog/prasuma-perucica-sta-treba-znati",
        destination: "/en/blog/perucica-rainforest-guide",
        permanent: true,
      },
      // Stari SR slug u EN putanji → direktno na konsolidovani complete-guide (bez chain-a)
      {
        source: "/en/blog/zelengora-jezera-vidikovci-vodic",
        destination: "/en/blog/zelengora-mountain-complete-guide",
        permanent: true,
      },
      {
        source: "/en/blog/vodopad-skakavac-perucica-vodic",
        destination: "/en/blog/skakavac-waterfall-guide",
        permanent: true,
      },

      // ─── Zelengora SEO konsolidacija: duplikat vodič → complete-guide ────────
      {
        source: "/en/blog/zelengora-lakes-hiking-guide",
        destination: "/en/blog/zelengora-mountain-complete-guide",
        permanent: true,
      },
      {
        source: "/vodici/zelengora-jezera-vidikovci-vodic",
        destination: "/vodici/zelengora-vodic-planina-bih",
        permanent: true,
      },
      {
        source: "/en/blog/prvomajska-avantura-utisci",
        destination: "/en/blog/may-day-adventure-recap",
        permanent: true,
      },
      {
        source: "/en/blog/zasto-je-sutjeska-najbolja-destinacija",
        destination: "/en/blog/why-sutjeska-is-the-best-destination",
        permanent: true,
      },
      {
        source: "/en/blog/visednevne-avanture-bih-crna-gora",
        destination: "/en/blog/multi-day-adventures-bosnia-montenegro",
        permanent: true,
      },
      {
        source: "/en/blog/izlet-iz-sarajeva-sutjeska-maglic",
        destination: "/en/blog/day-trip-sarajevo-maglic-sutjeska",
        permanent: true,
      },
      {
        source: "/en/blog/anastasija-alex-marco-lin-sutjeska",
        destination: "/en/blog/tara-rafting-perucica-rainforest-bosnia",
        permanent: true,
      },

      // SR blog: engleski slug (pogrešan jezik u putanji) → ispravan srpski slug
      {
        source: "/vodici/day-trip-sarajevo-maglic-sutjeska",
        destination: "/vodici/izlet-iz-sarajeva-sutjeska-maglic",
        permanent: true,
      },
      {
        source: "/vodici/anastasija-alex-marco-lin-sutjeska",
        destination: "/vodici/perucica-zelengora-rafting-tara-iskustvo",
        permanent: true,
      },

      // EN ture bez zapisa u adventures-en.ts — privremeno na EN početnu (izbjegava 404)
      {
        source: "/en/tours/vikend-na-durmitoru",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/en/tours/teambuilding-sutjeska",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/en/sutjeska",
        destination: "/en/sutjeska-national-park",
        permanent: true,
      },
      {
        source: "/sutjeska",
        destination: "/sutjeska-nacionalni-park",
        permanent: true,
      },

      // ─── Ostale stranice ──────────────────────────────────────────────────
      // FIX #5: uklonjen /ture → /#ture (bio redirect chain za sve gore)
      // /faq i /contact vode na homepage direktno
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/",
        permanent: true,
      },
      {
        source: "/kontakt",
        destination: "/#kontakt",
        permanent: true,
      },

      // Uklonjena tura prvomajska-avantura — stari URL na listu tura
      {
        source: "/ture/prvomajska-avantura",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/en/tours/prvomajska-avantura",
        destination: "/en/tours",
        permanent: true,
      },

      // ─── Stari one-off slug ───────────────────────────────────────────────
      {
        source: "/avantura-trnovacko-jezero-kanjoning-hrcavka",
        destination: "/ture/kampovanje-trnovacko-jezero-maglic",
        permanent: true,
      },
];

/**
 * Auto-generated "wrong-language slug on a route" redirects, derived from the
 * central SR<->EN map in lib/slugMap.ts (single source of truth — add a pair
 * there and the redirects below update themselves).
 *
 * Blog pairs:
 *   /vodici/<en-slug>   -> /vodici/<sr-slug>
 *   /en/blog/<sr-slug>  -> /en/blog/<en-slug>
 * Landing pairs:
 *   /<en-slug>          -> <sr-path>
 *   /en/<sr-slug>       -> <en-path>
 */
function languageSlugRedirects(): Redirect[] {
  const out: Redirect[] = [];

  for (const { sr, en } of blogSlugPairs) {
    out.push({ source: `/vodici/${en}`, destination: `/vodici/${sr}`, permanent: true });
    out.push({ source: `/en/blog/${sr}`, destination: `/en/blog/${en}`, permanent: true });
  }

  for (const { sr, en } of landingPathPairs) {
    const srSlug = sr.replace(/^\//, "");
    const enSlug = en.replace(/^\/en\//, "");
    out.push({ source: `/${enSlug}`, destination: sr, permanent: true });
    out.push({ source: `/en/${srSlug}`, destination: en, permanent: true });
  }

  return out;
}

const nextConfig: NextConfig = {
  async redirects() {
    // Never emit a duplicate source: hand-written redirects win, and a generated
    // entry is skipped if its source already exists or would be a self-redirect.
    const seen = new Set(manualRedirects.map((r) => r.source));
    const generated: Redirect[] = [];
    for (const r of languageSlugRedirects()) {
      if (r.source === r.destination || seen.has(r.source)) continue;
      seen.add(r.source);
      generated.push(r);
    }
    return [...manualRedirects, ...generated];
  },
};

export default nextConfig;
