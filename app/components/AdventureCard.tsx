import Link from "next/link";
import Image from "next/image";
import { Adventure } from "../data/adventures";

interface AdventureCardProps {
  adventure: Adventure;
}

export default function AdventureCard({ adventure }: AdventureCardProps) {
  // Determine label based on category
  let dateLabel = "";
  let showCalendarIcon = false;

  const campingTourSlugs = [
    "kampovanje-trnovacko-jezero-maglic",
    "kampovanje-zelengora-bregoč-jeep-safari",
  ] as const;
  const isCampingWithMultipleDates =
    Array.isArray(adventure.dates) &&
    adventure.dates.length > 1 &&
    campingTourSlugs.includes(adventure.slug as (typeof campingTourSlugs)[number]);

  if (isCampingWithMultipleDates) {
    dateLabel = "Više termina";
    showCalendarIcon = true;
  } else if (adventure.category === "premium") {
    dateLabel = "Na upit";
  } else if (adventure.category === "day-trip") {
    dateLabel = "Po dogovoru";
  }

  // Safe image check
  const hasImage = Boolean(adventure.image && adventure.image.trim().length > 0);

  // Scale image by slug for better framing
  const imageScaleClass =
    adventure.slug === "porodicni-vikend-tjentiste-zelengora"
      ? "scale-[1.2]"
      : adventure.slug === "kampovanje-trnovacko-jezero-maglic" ||
        adventure.slug === "kampovanje-zelengora-bregoč-jeep-safari"
        ? "scale-110"
        : "";

  return (
    <Link href={`/ture/${adventure.slug}`}>
      <div className="group rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm overflow-hidden hover:scale-[1.02] hover:shadow-xl hover:border-emerald-500/30 transition-all duration-300 cursor-pointer h-full flex flex-col">
        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden bg-slate-900">
          {hasImage ? (
            <Image
              src={adventure.image!}
              alt={adventure.imageAlt ?? adventure.title}
              fill
              className={`object-cover transition-transform duration-500 ${imageScaleClass} group-hover:scale-110`}
              style={{ objectFit: "cover", objectPosition: adventure.imagePosition ?? "center" }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Date Label Badge */}
          {dateLabel && (
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1.5 bg-emerald-500/90 backdrop-blur-sm text-white text-sm font-medium rounded-full flex items-center gap-1.5 shadow-lg">
                {showCalendarIcon && (
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                )}
                {dateLabel}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            {adventure.title}
          </h3>
          <p className="text-slate-400 text-sm mb-4 line-clamp-2">
            {adventure.shortDescription}
          </p>

          {/* Meta Info Row */}
          <div className="flex flex-wrap gap-3 mt-auto pt-4 border-t border-white/10 text-sm">
            {adventure.duration && (
              <div className="flex items-center text-slate-300">
                <svg
                  className="w-4 h-4 mr-1.5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {adventure.duration}
              </div>
            )}
            {adventure.difficulty && (
              <div className="flex items-center text-slate-300">
                <svg
                  className="w-4 h-4 mr-1.5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                {adventure.difficulty}
              </div>
            )}
            {adventure.groupSize && (
              <div className="flex items-center text-slate-300">
                <svg
                  className="w-4 h-4 mr-1.5 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {adventure.groupSize}
              </div>
            )}
            {adventure.price && (
              <div className="flex items-center text-emerald-400 font-medium">
                <svg
                  className="w-4 h-4 mr-1.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {adventure.price}
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
