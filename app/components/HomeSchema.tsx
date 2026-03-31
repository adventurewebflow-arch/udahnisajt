const BASE = "https://www.udahniavanturu.com";

export default function HomeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE}/#organization`,
        "name": "Udahni Avanturu",
        "url": BASE,
        "logo": {
          "@type": "ImageObject",
          "url": `${BASE}/logo-icon.png`
        },
        "telephone": "+38765797200",
        "email": "info@udahniavanturu.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Foča",
          "addressLocality": "Foča",
          "postalCode": "73300",
          "addressRegion": "Republika Srpska",
          "addressCountry": "BA"
        },
        "sameAs": [
          "https://www.instagram.com/udahniavanturu",
          "https://www.facebook.com/udahniavanturu"
        ],
        "description": "Organizovane avanturističke ture u Nacionalnom parku Sutjeska — hiking, rafting, kanjoning i kampovanje. Licencirani vodič Petar, male grupe, autentično iskustvo."
      },
      {
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        "url": BASE,
        "name": "Udahni Avanturu",
        "description": "Hiking, rafting, kanjoning i kampovanje u NP Sutjeska, Bosna i Hercegovina",
        "publisher": {
          "@id": `${BASE}/#organization`
        },
        "inLanguage": ["sr", "en"]
      },
      {
        "@type": "TouristInformationCenter",
        "name": "Udahni Avanturu",
        "url": BASE,
        "image": `${BASE}/logo-icon.png`,
        "telephone": "+38765797200",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Foča",
          "addressLocality": "Foča",
          "postalCode": "73300",
          "addressRegion": "Republika Srpska",
          "addressCountry": "BA"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "43.5067",
          "longitude": "18.7756"
        },
        "openingHours": "Mo-Su 08:00-20:00",
        "priceRange": "€€",
        "description": "Avanturistička agencija iz Foče — hiking, rafting, kanjoning i kampovanje u NP Sutjeska i okolini."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
