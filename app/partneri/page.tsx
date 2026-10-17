import type { Metadata } from "next";
import PartnerPage from "../components/PartnerPage";
import { landingHreflang } from "@/lib/slugMap";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Saradnja za agencije i tour operatore | Udahni Avanturu",
  description:
    "Neto cijene za turističke agencije: hiking, kampovanje, kanjoning i rafting Tarom u NP Sutjeska. Licencirani lokalni vodiči, paketi od 170€ neto po osobi.",
  alternates: {
    canonical: `${BASE}/partneri`,
    languages: landingHreflang("/partneri"),
  },
};

export default function Page() {
  return <PartnerPage lang="sr" />;
}
