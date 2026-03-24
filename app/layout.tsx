import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Udahni Avanturu – Hiking, rafting i kampovanje u Bosni i Hercegovini",
  description:
    "Organizovane ture u Nacionalnom parku Sutjeska, Bosna i Hercegovina. Male grupe, licencirani vodiči, nezaboravne avanture u prirodi blizu Foče.",
  metadataBase: new URL("https://www.udahniavanturu.com"),
  openGraph: {
    title: "Udahni Avanturu – Hiking, rafting i kampovanje u Bosni i Hercegovini",
    description:
      "Organizovane ture u Nacionalnom parku Sutjeska, Bosna i Hercegovina. Male grupe, licencirani vodiči, nezaboravne avanture u prirodi blizu Foče.",
    url: "https://www.udahniavanturu.com",
    siteName: "Udahni Avanturu",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Udahni Avanturu – Hiking, Rafting & Camping Tours in Bosnia and Herzegovina",
      },
    ],
    locale: "sr_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udahni Avanturu – Hiking, rafting i kampovanje u Bosni i Hercegovini",
    description:
      "Organizovane ture u Nacionalnom parku Sutjeska, Bosna i Hercegovina. Male grupe, licencirani vodiči, nezaboravne avanture u prirodi blizu Foče.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/logo-icon.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const showVercelAnalytics = process.env.NODE_ENV === "production" && Boolean(process.env.VERCEL);

  return (
    <html lang="sr">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Navbar />
        <main className="pt-20">{children}</main>
        {showVercelAnalytics && <Analytics />}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
