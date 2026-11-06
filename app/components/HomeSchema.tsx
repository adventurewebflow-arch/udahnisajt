const BASE = "https://www.udahniavanturu.com";

const DESCRIPTION = {
  sr: "Avanturistička agencija iz Foče: vođene ture u Nacionalnom parku Sutjeska i okolini — planinarenje na Maglić i Trnovačko jezero, prašuma Perućica, Zelengora, kanjoning i rafting na Tari. Licencirani vodiči, male grupe.",
  en: "Adventure travel agency from Foča, Bosnia and Herzegovina: guided tours in Sutjeska National Park and around — Maglić and Trnovačko Lake hikes, Perućica rainforest, Zelengora, canyoning and Tara rafting. Licensed local guides, small groups.",
};

export default function HomeSchema({ lang = "sr" }: { lang?: "sr" | "en" }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TravelAgency",
        "@id": `${BASE}/#organization`,
        name: "Udahni Avanturu",
        alternateName: "Breathe Adventure",
        url: lang === "en" ? `${BASE}/en` : BASE,
        logo: { "@type": "ImageObject", url: `${BASE}/logo-icon.png` },
        image: `${BASE}/opengraph-image.jpg`,
        telephone: "+38765797200",
        email: "udahniavanturu@gmail.com",
        priceRange: "€€",
        foundingDate: "2021",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Foča",
          postalCode: "73300",
          addressRegion: "Republika Srpska",
          addressCountry: "BA",
        },
        geo: { "@type": "GeoCoordinates", latitude: 43.5067, longitude: 18.7756 },
        areaServed: [
          { "@type": "Place", name: "Sutjeska National Park" },
          { "@type": "Place", name: "Tara River Canyon" },
          { "@type": "Place", name: "Durmitor National Park" },
        ],
        knowsLanguage: ["sr", "en"],
        sameAs: [
          "https://www.instagram.com/udahniavanturu",
          "https://www.tiktok.com/@udahniavanturu",
          "https://www.facebook.com/p/Udahni-Avanturu-61554918975889/",
        ],
        description: DESCRIPTION[lang],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        url: BASE,
        name: "Udahni Avanturu",
        publisher: { "@id": `${BASE}/#organization` },
        inLanguage: ["sr-Latn", "en"],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
