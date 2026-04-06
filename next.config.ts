import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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

      // ─── Stari one-off slug ───────────────────────────────────────────────
      {
        source: "/avantura-trnovacko-jezero-kanjoning-hrcavka",
        destination: "/ture/kampovanje-trnovacko-jezero-maglic",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
