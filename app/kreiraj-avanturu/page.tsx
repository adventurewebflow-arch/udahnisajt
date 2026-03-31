import AdventureBuilder from "../components/AdventureBuilder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kreiraj svoju avanturu – Udahni Avanturu",
  description: "Označi šta želiš — Maglić, rafting, kanjoning, Durmitor, kampovanje — i pošalji upit. Napravimo turu po mjeri za tebe.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/kreiraj-avanturu",
  },
};

export default function KreirajAvanturu() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Kreiraj svoju avanturu
            </h1>
            <p className="text-xl text-gray-400">
              Reci nam šta želiš — mi ćemo složiti turu po mjeri.
            </p>
          </div>
          <AdventureBuilder />
        </div>
      </section>
    </main>
  );
}
