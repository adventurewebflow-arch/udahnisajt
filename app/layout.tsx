import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Udahni Avanturu - Avanturističke ture u prirodi",
  description: "Otkrijte ljepotu Bosne i Hercegovine kroz planinarenje, rafting i kampiranje. Nezaboravne avanture u prirodi.",
  metadataBase: new URL("https://www.udahniavanturu.com"),
  openGraph: {
    title: "Udahni Avanturu - Avanturističke ture u prirodi",
    description: "Otkrijte ljepotu Bosne i Hercegovine kroz planinarenje, rafting i kampiranje. Nezaboravne avanture u prirodi.",
    url: "https://www.udahniavanturu.com",
    siteName: "Udahni Avanturu",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Udahni Avanturu - Avanturističke ture u prirodi",
      },
    ],
    locale: "sr_BA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Udahni Avanturu - Avanturističke ture u prirodi",
    description: "Otkrijte ljepotu Bosne i Hercegovine kroz planinarenje, rafting i kampiranje. Nezaboravne avanture u prirodi.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icons/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-48.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icons/icon-180.png", sizes: "180x180", type: "image/png" },
    ],
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
      </body>
    </html>
  );
}
