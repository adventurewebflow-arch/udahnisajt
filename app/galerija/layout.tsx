import type { Metadata } from "next";
import { pathHreflang } from "@/lib/slugMap";
import { socialMetadata } from "@/lib/seo";

const title = "Galerija – trenuci sa naših tura u NP Sutjeska | Udahni Avanturu";
const description = "Fotografije sa naših tura: Trnovačko jezero, Maglić, Zelengora, Perućica i kamp pod zvijezdama. Stvarni ljudi, stvarne avanture.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.udahniavanturu.com/galerija",
    languages: pathHreflang("/galerija", "/en/galerija"),
  },
  ...socialMetadata({ title, description, path: "/galerija", lang: "sr" }),
};

export default function GalerijaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
