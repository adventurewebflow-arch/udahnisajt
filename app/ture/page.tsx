import AdventureCard from "../components/AdventureCard";
import { popularAdventures, premiumAdventures, dayTripAdventures } from "../data/adventures";
import type { Metadata } from "next";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sve ture - Udahni Avanturu",
  description: "Pregledajte sve avanturističke ture u Bosni i Hercegovini.",
  alternates: {
    canonical: `${BASE}/ture`,
    languages: {
      sr: `${BASE}/ture`,
      en: `${BASE}/en/tours`,
    },
  },
};

export default function TurePageSR() {
  return (
    <main className="min-h-screen pt-20">
      {/* Popularne ture */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Popularne ture</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium ture */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Premium ture</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Premium ture su privatne ture i strogo birane najatraktivnije lokacije. Mali broj učesnika, personalizovani pristup i nezaboravno iskustvo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      {/* Jednodnevni izleti */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Jednodnevni izleti</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Jednodnevne ture po dogovoru - idealne za one koji imaju ograničeno vrijeme ali žele uživati u prirodi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTripAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
