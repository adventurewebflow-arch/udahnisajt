import AdventureCard from "../../components/AdventureCard";
import { popularAdventures, premiumAdventures, dayTripAdventures } from "../../data/adventures";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Tours - Udahni Avanturu",
  description: "Browse all outdoor adventure tours in Bosnia and Herzegovina.",
};

export default function ToursPageEN() {
  return (
    <main className="min-h-screen pt-20">
      {/* Popular */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Popular Tours</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      {/* Premium */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Premium Tours</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Premium tours are private, handpicked adventures at the most attractive locations. Small groups, personalised approach, and an unforgettable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Day Trips</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Day trips by arrangement &ndash; ideal for those with limited time who still want to enjoy nature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTripAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
