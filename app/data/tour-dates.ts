/**
 * Group departure dates — single source of truth.
 *
 * Keyed by tour slug, which SR (/ture/<slug>) and EN (/en/tours/<slug>) share,
 * so a departure can never drift between the two languages. Tours that run only
 * on request (private groups, multi-day programmes, day trips) have no entry.
 *
 * Dates are stored as ISO ranges and formatted on render, which means the site
 * has exactly one date format and past departures disappear on their own.
 *
 * To publish a departure: add `{ start, end }` to the tour below. To close one
 * without hiding it: add `soldOut: true` — it stays visible on the tour page as
 * proof the tour runs, but is no longer offered in the booking form.
 */

export interface TourDate {
  /** First day of the tour, ISO `YYYY-MM-DD`. */
  start: string;
  /** Last day of the tour, ISO `YYYY-MM-DD`. Equal to `start` for one-day tours. */
  end: string;
  /** Fully booked — shown on the tour page, excluded from the booking form. */
  soldOut?: boolean;
}

export const tourDates: Record<string, TourDate[]> = {
  "kampovanje-trnovacko-jezero-maglic": [
    { start: "2026-08-21", end: "2026-08-23", soldOut: true },
    { start: "2026-09-04", end: "2026-09-06" },
  ],
  "kampovanje-zelengora-bregoč-jeep-safari": [
    { start: "2026-09-11", end: "2026-09-13" },
  ],
  "hrcavka-perucica-kanjoning-prasuma-skakavac": [
    { start: "2026-08-28", end: "2026-08-30" },
  ],

  // Group departures run on these tours too, but nothing is scheduled yet.
  "rafting-tarom-na-nas-nacin": [],
  "porodicni-vikend-tjentiste-zelengora": [],
  "vikend-u-divljini": [],
  "tura-za-malo-jace-ljude-maglic-trnovacko-rafting": [],
  "durmitorski-prsten-via-ferata-piva-prutas-kajk-pivsko-jezero": [],
};

/**
 * Today as `YYYY-MM-DD` in UTC. UTC keeps the value identical on the server and
 * in the browser, so a client component filtering dates cannot produce a
 * hydration mismatch. The cost is that a tour stays listed for a few extra
 * hours after its last day in local time, which is harmless.
 */
function todayISO(now: Date = new Date()): string {
  return now.toISOString().slice(0, 10);
}

/** A departure counts as upcoming through the whole of its last day. */
export function isUpcoming(date: TourDate, now?: Date): boolean {
  return date.end >= todayISO(now);
}

/** Every departure for a tour, past ones included, oldest first. */
export function getTourDates(slug: string): TourDate[] {
  return [...(tourDates[slug] ?? [])].sort((a, b) => a.start.localeCompare(b.start));
}

/** Departures to show on a tour page: still ahead of us, sold out ones included. */
export function getUpcomingTourDates(slug: string, now?: Date): TourDate[] {
  return getTourDates(slug).filter((d) => isUpcoming(d, now));
}

/** Departures a guest can actually book: upcoming and not full. */
export function getBookableTourDates(slug: string, now?: Date): TourDate[] {
  return getUpcomingTourDates(slug, now).filter((d) => !d.soldOut);
}

/**
 * Display label for a range: `04.–06.09.2026`, `31.07.–02.08.2026` across
 * months, `30.12.2026.–01.01.2027` across years, `21.08.2026` for one day.
 */
export function formatTourDate({ start, end }: TourDate): string {
  const [startYear, startMonth, startDay] = start.split("-");
  const [endYear, endMonth, endDay] = end.split("-");

  if (start === end) return `${startDay}.${startMonth}.${startYear}`;
  if (startYear !== endYear) {
    return `${startDay}.${startMonth}.${startYear}.–${endDay}.${endMonth}.${endYear}`;
  }
  if (startMonth !== endMonth) {
    return `${startDay}.${startMonth}.–${endDay}.${endMonth}.${endYear}`;
  }
  return `${startDay}.–${endDay}.${endMonth}.${endYear}`;
}
