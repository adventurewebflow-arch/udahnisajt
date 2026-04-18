import type { Metadata } from "next";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sve ture - Udahni Avanturu",
  description: "Pregledajte sve avanturističke ture u Bosni i Hercegovini.",
  alternates: {
    canonical: `${BASE}/ture`,
  },
};

export default function TureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
