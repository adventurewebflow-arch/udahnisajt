import { pathHreflang } from "@/lib/slugMap";
import type { Metadata } from "next";
import { socialMetadata } from "@/lib/seo";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sve ture - Udahni Avanturu",
  description: "Pregledajte sve avanturističke ture u Bosni i Hercegovini.",
  alternates: {
    canonical: `${BASE}/ture`,
    languages: pathHreflang("/ture", "/en/tours"),
  },
  ...socialMetadata({
    title: "Sve ture - Udahni Avanturu",
    description: "Pregledajte sve avanturističke ture u Bosni i Hercegovini.",
    path: "/ture",
    lang: "sr",
  }),
};

export default function TureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
