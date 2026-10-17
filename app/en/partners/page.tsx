import type { Metadata } from "next";
import PartnerPage from "../../components/PartnerPage";
import { landingHreflang } from "@/lib/slugMap";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Partner with a Local DMC in Sutjeska National Park | Udahni Avanturu",
  description:
    "Net rates for tour operators and travel agencies: hiking, camping, canyoning and Tara rafting in Sutjeska National Park, Bosnia and Herzegovina. Licensed local guides, packages from €170 net.",
  alternates: {
    canonical: `${BASE}/en/partners`,
    languages: landingHreflang("/en/partners"),
  },
};

export default function Page() {
  return <PartnerPage lang="en" />;
}
