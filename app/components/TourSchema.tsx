import type { Adventure } from "../data/adventures";

const BASE = "https://www.udahniavanturu.com";

interface TourSchemaProps {
  adventure: Adventure;
  slug: string;
  lang?: "sr" | "en";
}

export default function TourSchema({ adventure, slug, lang = "sr" }: TourSchemaProps) {
  const url = lang === "en"
    ? `${BASE}/en/tours/${slug}`
    : `${BASE}/ture/${slug}`;

  const image = adventure.image
    ? `${BASE}${adventure.image}`
    : `${BASE}/opengraph-image.png`;

  const priceMatch = adventure.price?.match(/(\d+)/);
  const price = priceMatch ? priceMatch[1] : null;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": url,
        "name": adventure.title,
        "description": adventure.shortDescription,
        "url": url,
        "image": image,
        "touristType": "Adventure tourists",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": adventure.itinerary?.map((day, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "name": day.dayTitle,
            "description": day.description?.replace(/\n/g, " ").trim()
          })) ?? []
        },
        "offers": price ? {
          "@type": "Offer",
          "price": price,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock",
          "url": url
        } : undefined,
        "provider": {
          "@type": "TouristInformationCenter",
          "name": "Udahni Avanturu",
          "url": BASE,
          "telephone": "+38765797200",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Foča",
            "addressCountry": "BA"
          }
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": lang === "en" ? "Home" : "Početna",
            "item": lang === "en" ? `${BASE}/en` : BASE
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": lang === "en" ? "Tours" : "Ture",
            "item": lang === "en" ? `${BASE}/en/tours` : `${BASE}/ture`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": adventure.title,
            "item": url
          }
        ]
      },
      ...(adventure.faqs && adventure.faqs.length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": adventure.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }] : [])
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
