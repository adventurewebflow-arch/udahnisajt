"use client";

import { useState } from "react";
import AdventureCard from "../components/AdventureCard";
import {
  popularAdventures,
  premiumAdventures,
  multiDayAdventures,
  dayTripAdventures,
} from "../data/adventures";

const categories = [
  {
    key: "sve",
    label: "Sve ture",
    description: "",
  },
  {
    key: "popular",
    label: "Popularne",
    description: "Fiksni grupni termini — dolaziš sam, u paru ili sa ekipom.",
  },
  {
    key: "premium",
    label: "Premium",
    description: "Zahtjevnije avanture za vikend — kanjoning, via ferrata, rafting.",
  },
  {
    key: "multi-day",
    label: "Višednevne",
    description: "Privatne ture za grupe od 6 do 16 osoba — vi birate datum.",
  },
  {
    key: "day-trip",
    label: "Izleti",
    description: "Privatne ture po dogovoru — minimum 4 osobe.",
  },
];

const allAdventures = [
  ...popularAdventures,
  ...premiumAdventures,
  ...multiDayAdventures,
  ...dayTripAdventures,
];

export default function TurePageSR() {
  const [active, setActive] = useState("sve");

  const filtered =
    active === "sve"
      ? allAdventures
      : allAdventures.filter((a) => a.category === active);

  const activeCategory = categories.find((c) => c.key === active);

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-3">Sve ture</h1>
        <div className="w-16 h-1 bg-emerald-400 mb-6" />
        <p className="text-slate-400 text-lg max-w-2xl">
          Hiking, rafting, kanjoning, kampovanje — pronađi avanturu koja tebi odgovara.
        </p>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="flex gap-2 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat.key
                    ? "bg-emerald-500 text-white"
                    : "bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {cat.label}
                {cat.key !== "sve" && (
                  <span className="ml-1.5 text-xs opacity-60">
                    ({cat.key === "popular"
                      ? popularAdventures.length
                      : cat.key === "premium"
                        ? premiumAdventures.length
                        : cat.key === "multi-day"
                          ? multiDayAdventures.length
                          : dayTripAdventures.length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category description */}
      {activeCategory?.description && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <p className="text-slate-400 text-sm">{activeCategory.description}</p>
        </div>
      )}

      {/* Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((adventure) => (
            <AdventureCard key={adventure.id} adventure={adventure} />
          ))}
        </div>
      </section>
    </main>
  );
}
