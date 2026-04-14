import type { Metadata } from "next";
import Image from "next/image";
import AdventureBuilder from "../../components/AdventureBuilder";

export const metadata: Metadata = {
  title: "Build Your Adventure – Custom Tour | Udahni Avanturu",
  description:
    "Can't find the right tour? Let's build it together. Tell us what you want to experience — Petar sends you an offer within 1 hour.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/en/build-your-adventure",
  },
};

export default function BuildAdventurePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      {/* Hero */}
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/gallery/zelengora-djevojka-u-planini.webp"
          alt="Planinarenje na Zelengori – Udahni Avanturu"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Custom tour</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Can&apos;t find the right tour? Let&apos;s build it together.
          </h1>
          <p className="mt-4 text-lg text-slate-300 max-w-xl">
            Tell us what you want — we respond within 1 hour.
          </p>
        </div>
      </section>

      {/* Trust signals */}
      <section className="mx-auto w-full max-w-5xl px-4 pt-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-2xl" aria-hidden>
              {"\u26A1"}
            </span>
            <div>
              <p className="text-white font-semibold text-sm">Response within 1 hour</p>
              <p className="text-slate-400 text-xs">Petar responds personally</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-2xl" aria-hidden>
              {"\uD83D\uDC65"}
            </span>
            <div>
              <p className="text-white font-semibold text-sm">Small groups — min. 4 people</p>
              <p className="text-slate-400 text-xs">Personalised experience</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
            <span className="text-2xl" aria-hidden>
              {"\uD83C\uDFD4\uFE0F"}
            </span>
            <div>
              <p className="text-white font-semibold text-sm">Licensed guide</p>
              <p className="text-slate-400 text-xs">15+ years experience</p>
            </div>
          </div>
        </div>

        <AdventureBuilder />
      </section>
    </main>
  );
}
