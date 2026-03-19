import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breathe Adventure – Hiking, Rafting & Camping Tours in Bosnia and Herzegovina",
  description: "Join guided hiking, rafting and camping tours in Sutjeska National Park, Bosnia and Herzegovina. Small groups, licensed guides, unforgettable nature adventures.",
  metadataBase: new URL("https://www.udahniavanturu.com"),
  openGraph: {
    title: "Breathe Adventure – Hiking, Rafting & Camping Tours in Bosnia and Herzegovina",
    description: "Join guided hiking, rafting and camping tours in Sutjeska National Park, Bosnia and Herzegovina. Small groups, licensed guides, unforgettable nature adventures.",
    url: "https://www.udahniavanturu.com/en",
    siteName: "Udahni Avanturu",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Breathe Adventure – Hiking, Rafting & Camping Tours in Bosnia and Herzegovina",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathe Adventure – Hiking, Rafting & Camping Tours in Bosnia and Herzegovina",
    description: "Join guided hiking, rafting and camping tours in Sutjeska National Park, Bosnia and Herzegovina. Small groups, licensed guides, unforgettable nature adventures.",
    images: ["/opengraph-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
