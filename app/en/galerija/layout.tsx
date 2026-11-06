import type { Metadata } from "next";
import { pathHreflang } from "@/lib/slugMap";
import { socialMetadata } from "@/lib/seo";

const title = "Gallery – Moments from Our Tours in Sutjeska National Park | Udahni Avanturu";
const description = "Photos from our tours: Trnovačko Lake, Maglić, Zelengora, Perućica rainforest and nights at camp. Real people, real adventures.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "https://www.udahniavanturu.com/en/galerija",
    languages: pathHreflang("/galerija", "/en/galerija"),
  },
  ...socialMetadata({ title, description, path: "/en/galerija", lang: "en" }),
};

export default function GalleryLayoutEN({ children }: { children: React.ReactNode }) {
  return children;
}
