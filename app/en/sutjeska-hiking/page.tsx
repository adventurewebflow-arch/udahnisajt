import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sutjeska National Park – Complete Visitor Guide | Bosnia and Herzegovina",
  description:
    "Sutjeska is the oldest national park in Bosnia and Herzegovina. Home to Maglić, Perućica rainforest, Zelengora and the Tara River. Complete guide for hiking and visiting.",
  alternates: {
    canonical: `${BASE}/en/sutjeska-hiking`,
  },
};

export default function SutjeskaHikingPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/kampovanje-trnovacko/trnovacko-jezero-card.webp"
          alt="Sutjeska National Park — Trnovačko Lake and mountains"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Bosnia and Herzegovina</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Sutjeska National Park — The Oldest National Park in Bosnia and Herzegovina
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Sutjeska is like an artery in the human body. The oldest national park in Bosnia and Herzegovina, established in 1962, it is home to the Perućica rainforest, the highest peak in the country — Maglić, Zelengora mountain, and the Sutjeska River. The Via Dinarica, one of the most famous hiking routes in Europe, passes directly through it.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Sutjeska River and Canyon</h2>
          <p className="leading-8">
            The Sutjeska is a crystal-clear mountain river the colour of sky and stone. You can drink it straight — there is nothing to pollute it. We have drunk from it a hundred times. The canyon it carves through is magnificent in a way that words cannot capture — it has to be experienced.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Largest Open-Air Swimming Pool in the Balkans</h2>
          <p className="leading-8">
            At Tjentište there is the largest open-air swimming pool in the Balkans. It is filled directly with water from the Sutjeska River. Cold, clear, refreshing — perfect after a day of hiking or as a destination in itself.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Wildlife</h2>
          <p className="leading-8">
            Bears, wolves, eagles, chamois, wild boar, deer — Sutjeska is home to all of them. We once saw a lynx, which is rarely spotted. Nature here is not decoration — it is real and alive.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Battle of Sutjeska — Historical Significance</h2>
          <p className="leading-8">
            Tjentište and the Valley of Heroes carry within them one of the most important chapters of the Second World War in this region — the Battle of Sutjeska in 1943. The monumental Memorial stands to this day as a reminder of that history.
          </p>
          <p className="leading-8">
            Interestingly — foreign visitors tend to research the places they visit more thoroughly than locals. They arrive at Tjentište already knowing the history, asking questions, exploring. Meanwhile there are people from Foča who have never been to Maglić — and it is right on their doorstep. If you do not know the history, we are always happy to explain. That is why we are here.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Via Dinarica</h2>
          <p className="leading-8">
            The Via Dinarica passes through Sutjeska — a famous mountain route connecting the Alps with the Dinaric Alps across seven countries. Hikers from around the world come specifically for this section of the route.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">What Sutjeska Offers</h2>
          <p className="leading-8">
            Sutjeska is not one destination — it is an entire region. Maglić — the highest peak in Bosnia and Herzegovina. Trnovačko Lake — a breathtaking sight, and though it belongs to Piva Nature Park, everyone passes through Sutjeska to reach it. Zelengora — declared the most beautiful mountain in former Yugoslavia. Perućica — one of the last primeval forests in Europe.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">How to Get There</h2>
          <p className="leading-8">
            Visits most commonly start from Foča or Tjentište, depending on the arrangement and which starting point works best. Foča is the entry point for the region — all our transfers and departures are organised from here.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organised Tours in Sutjeska NP</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Camping at Trnovačko Lake with Maglić Summit</h3>
              <p className="text-slate-400 text-sm mb-3">3 days / 2 nights • 170€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/prasuma-perucica-vodopad-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Perućica Rainforest and Skakavac Waterfall</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 90€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/kanjoning-hrcavka" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Hrčavka Canyoning</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 130€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
