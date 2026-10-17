"use client";

import { useRef, useState } from "react";
import { reviews, reviewStats, GOOGLE_REVIEWS_URL, type Lang, type Review } from "../data/reviews";

const copy = {
  sr: {
    title: "Šta kažu naši gosti",
    sub: "Prave recenzije sa Googlea, od ljudi koji su bili sa nama na Trnovačkom, Magliću, Zelengori i u Perućici.",
    count: "recenzija na Googleu",
    all: "Pogledaj sve recenzije",
    more: "Prikaži više",
    less: "Prikaži manje",
    translated: "Prevedeno sa engleskog",
    swipe: "Prevuci za još recenzija",
  },
  en: {
    title: "What our guests say",
    sub: "Real Google reviews from people who joined us at Trnovačko Lake, Maglić, Zelengora and Perućica.",
    count: "reviews on Google",
    all: "See all reviews",
    more: "Read more",
    less: "Show less",
    translated: "Translated from Serbian",
    swipe: "Swipe for more reviews",
  },
};

function Stars() {
  return (
    <div className="text-amber-400 tracking-[2px] text-base" aria-label="5 / 5">
      ★★★★★
    </div>
  );
}

function ReviewCard({ r, lang }: { r: Review; lang: Lang }) {
  const t = copy[lang];
  const text = r.text[lang];
  const isLong = text.length > 260;
  const [open, setOpen] = useState(false);

  // Featured card: clamped only on phones, always full on desktop.
  const clamp = !isLong || open ? "" : r.featured ? "line-clamp-6 md:line-clamp-none" : "line-clamp-6";
  const btnVisibility = r.featured ? "md:hidden" : "";

  return (
    <article
      className={`snap-start shrink-0 w-[85%] sm:w-[70%] md:w-auto bg-gray-900 border rounded-2xl p-6 flex flex-col gap-3 min-w-0 ${
        r.featured ? "md:col-span-2 lg:row-span-2 border-emerald-500/50" : "border-gray-800"
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 shrink-0 rounded-full bg-emerald-400 text-slate-950 font-extrabold grid place-items-center">
          {r.name[0]}
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-white">{r.name}</span>
          <span className="text-sm text-gray-400">{r.date[lang]}</span>
        </div>
      </div>
      <Stars />
      {r.tag && (
        <span className="self-start text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full">
          {r.tag[lang]}
        </span>
      )}
      <p className={`text-gray-300 whitespace-pre-line ${r.featured ? "md:text-lg" : ""} ${clamp}`}>{text}</p>
      {isLong && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`self-start text-emerald-400 font-semibold hover:text-emerald-300 ${btnVisibility}`}
        >
          {open ? t.less : t.more}
        </button>
      )}
      {r.orig !== lang && <span className="mt-auto text-xs italic text-gray-500">{t.translated}</span>}
    </article>
  );
}

export default function GoogleReviews({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = track.current;
    if (!el || !el.firstElementChild) return;
    const card = el.firstElementChild as HTMLElement;
    const step = card.offsetWidth + 16; // card width + gap-4
    setActive(Math.min(reviews.length - 1, Math.round(el.scrollLeft / step)));
  };

  const goTo = (i: number) => {
    const el = track.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id={lang === "sr" ? "recenzije" : "reviews"} className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">{t.title}</h2>
            <div className="w-16 h-1 bg-emerald-400" />
            <p className="text-slate-400 mt-4 max-w-2xl">{t.sub}</p>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-900 border border-gray-800 rounded-2xl px-5 py-4 hover:border-emerald-500/50 transition"
          >
            <span className="text-4xl font-extrabold text-white leading-none">{reviewStats.rating}</span>
            <span className="flex flex-col">
              <Stars />
              <span className="text-sm text-gray-400">
                {reviewStats.count} {t.count}
              </span>
            </span>
          </a>
        </div>

        <div
          ref={track}
          onScroll={onScroll}
          className="mt-10 -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:snap-none"
          aria-label={t.title}
        >
          {reviews.map((r) => (
            <ReviewCard key={r.name} r={r} lang={lang} />
          ))}
        </div>

        {/* Dots — phones only */}
        <div className="md:hidden mt-5 flex flex-col items-center gap-2">
          <div className="flex gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                aria-label={`${i + 1} / ${reviews.length}`}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-emerald-400" : "w-2 bg-gray-600"}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500">{t.swipe}</span>
        </div>

        <div className="mt-8">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition"
          >
            {t.all}
          </a>
        </div>
      </div>
    </section>
  );
}
