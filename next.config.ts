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
    ];
  },
};

export default nextConfig;
