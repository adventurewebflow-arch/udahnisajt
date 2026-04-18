"use client";

import { useState } from "react";
import AdventureCard from "./AdventureCard";
import type { Adventure } from "../data/adventures";

const scrollbarHide =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

export interface TourSliderProps {
  popular: Adventure[];
  premium: Adventure[];
  multiDay: Adventure[];
  dayTrips: Adventure[];
}

export default function TourSlider({
  popular,
  premium,
  multiDay,
  dayTrips,
}: TourSliderProps) {
  const tabs = [
    { label: "Popularne", items: popular },
    { label: "Premium", items: premium },
    { label: "Višednevne", items: multiDay },
    { label: "Izleti", items: dayTrips },
  ] as const;

  const [activeIndex, setActiveIndex] = useState(0);
  const activeItems = tabs[activeIndex].items;

  return (
    <div>
      <div
        className={`flex flex-row gap-2 overflow-x-auto ${scrollbarHide} pb-1`}
        role="tablist"
        aria-label="Kategorije tura"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={i === activeIndex}
            onClick={() => setActiveIndex(i)}
            className={`flex-shrink-0 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
              i === activeIndex
                ? "bg-emerald-500 text-white"
                : "border border-white/10 bg-white/5 text-slate-400"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className={`mt-6 flex snap-x snap-mandatory gap-8 overflow-x-auto md:grid md:grid-cols-2 md:snap-none md:overflow-x-visible lg:grid-cols-3 ${scrollbarHide}`}
        role="tabpanel"
      >
        {activeItems.map((adventure) => (
          <div
            key={adventure.id}
            className="w-[280px] flex-shrink-0 snap-start md:w-auto"
          >
            <AdventureCard adventure={adventure} />
          </div>
        ))}
      </div>
    </div>
  );
}
