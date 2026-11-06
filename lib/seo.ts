import type { Metadata } from "next";

const SITE = "https://www.udahniavanturu.com";
const DEFAULT_OG_IMAGE = "/opengraph-image.jpg";

type OgInput = {
  title: string;
  description: string;
  path: string;            // npr. "/en/zelengora-lakes"
  lang: "sr" | "en";
  image?: string;          // relativna putanja, npr. "/images/tours/zelengora/x.webp"
  imageAlt?: string;
};

export function socialMetadata({ title, description, path, lang, image, imageAlt }: OgInput): Pick<Metadata, "openGraph" | "twitter"> {
  const img = image ?? DEFAULT_OG_IMAGE;
  const isDefault = !image;
  const isOgSized = isDefault || img.startsWith("/images/og/");
  return {
    openGraph: {
      title,
      description,
      url: `${SITE}${path}`,
      siteName: "Udahni Avanturu",
      locale: lang === "en" ? "en_US" : "sr_BA",
      type: "website",
      images: [
        isOgSized
          ? { url: img, width: 1200, height: 630, alt: imageAlt ?? title }
          : { url: img, alt: imageAlt ?? title },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [img],
    },
  };
}
