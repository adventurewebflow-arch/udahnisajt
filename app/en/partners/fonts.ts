import { Bricolage_Grotesque, Inter } from "next/font/google";

/**
 * Type for the B2B partner pages only. The rest of the site runs on the system
 * font stack, so these are exposed as CSS variables and applied on the
 * /en/partners subtree (see layout.tsx) instead of on <body>.
 */
export const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
