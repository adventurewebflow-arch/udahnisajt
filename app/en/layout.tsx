import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Breathe Adventure - Outdoor Adventure Tours in Bosnia",
  description: "Discover the beauty of Bosnia and Herzegovina through hiking, rafting and camping. Unforgettable adventures in nature.",
  metadataBase: new URL("https://www.udahniavanturu.com"),
  openGraph: {
    title: "Breathe Adventure - Outdoor Adventure Tours in Bosnia",
    description: "Discover the beauty of Bosnia and Herzegovina through hiking, rafting and camping. Unforgettable adventures in nature.",
    url: "https://www.udahniavanturu.com/en",
    siteName: "Udahni Avanturu",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Breathe Adventure - Outdoor Adventure Tours in Bosnia",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Breathe Adventure - Outdoor Adventure Tours in Bosnia",
    description: "Discover the beauty of Bosnia and Herzegovina through hiking, rafting and camping. Unforgettable adventures in nature.",
    images: ["/opengraph-image.png"],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
