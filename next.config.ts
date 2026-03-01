import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
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
      {
        source: "/camping/zelengora-jahanje-konja",
        destination: "/ture/kampovanje-zelengora-bregoč-jeep-safari",
        permanent: true,
      },
      {
        source: "/izleti/kanjoning-ili-trnovacko-jezero",
        destination: "/ture/kanjoning-hrcavka",
        permanent: true,
      },
      {
        source: "/specijalne-ponude/kreiraj-svoju-avanturu",
        destination: "/ture/kanjoning-hrcavka-prasuma-perucica-skakavac",
        permanent: true,
      },
      {
        source: "/faq",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#kontakt-form",
        permanent: true,
      },

      // Legacy redirects (Webflow/old site)
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
        source: "/specijalne-ponude/porodicni-paket",
        destination: "/ture/porodicni-vikend-tjentiste-zelengora",
        permanent: true,
      },
      {
        source: "/specijalne-ponude/teambilding",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/izleti/zelengora",
        destination: "/ture",
        permanent: true,
      },

      // Catch-all legacy redirects
      {
        source: "/izleti/:path*",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/specijalne-ponude/:path*",
        destination: "/ture",
        permanent: true,
      },
      {
        source: "/posebneponude/:path*",
        destination: "/ture",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
