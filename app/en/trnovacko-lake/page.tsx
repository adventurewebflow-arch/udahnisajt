import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Trnovačko Lake – Complete Guide | Camping, Hiking & Maglić Summit",
  description:
    "Trnovačko Lake is one of the most beautiful mountain lakes in the Balkans. Complete guide — how to get there, camping, Maglić summit and organised tours from Foča.",
  alternates: {
    canonical: `${BASE}/en/trnovacko-lake`,
  },
};

export default function TrnovackoLakePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp"
          alt="Trnovačko Lake beneath Maglić — mountain lake in the Balkans"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Balkans</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Trnovačko Lake — One of the Most Beautiful Mountain Lakes in the Balkans
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Trnovačko Lake sits at 1,520 metres above sea level on the border between Bosnia and Herzegovina and Montenegro, beneath Maglić — the highest peak in Bosnia and Herzegovina. It is shaped like a heart. It is surrounded by steep mountain slopes, green meadows and rocky peaks. And it is one of those places that changes people.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">You Sleep in Montenegro</h2>
          <p className="leading-8">
            Here is something most visitors do not know before they arrive: Trnovačko Lake is on the Montenegrin side of the border. When you camp here, you sleep in Montenegro. In the morning you climb Maglić — the highest peak in Bosnia and Herzegovina — and return to Montenegro to sleep. The next morning you cross back into Bosnia on foot, through the mountain, with no border crossings. Very few travellers in the world can say they have done that.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">How to Get There</h2>
          <p className="leading-8">
            The most common route starts from Prijevor, at around 1,500 metres above sea level. The hike to the lake takes approximately 1.5 hours at a comfortable pace. The terrain is moderate and suitable for most participants.
          </p>
          <p className="leading-8">
            There is also a route from the village of Mratinje in Montenegro — longer but equally beautiful.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Lake Itself</h2>
          <p className="leading-8">
            The water is crystal clear and cold even in summer. You can swim in it — and in July and August many people do. The lake stretches around 700 metres in length and 300 metres in width. On clear days it reflects Maglić, Volujak and Bioč. The heart shape is most visible from the viewpoint above — worth the extra 15 minutes of climbing.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Café at the Lake</h2>
          <p className="leading-8">
            On the shore of Trnovačko Lake there is a small mountain café run by Miloš and Ilija. Rakija, beer, coffee, tea — everything you need after the hike or the Maglić summit. Beer chills in a 100-litre barrel of ice-cold spring water. Whoever sits there and picks up that beer — they will never forget the taste. People who have never touched a beer in their lives drink one there.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Maglić Above the Lake</h2>
          <p className="leading-8">
            Maglić (2,386m) rises directly above Trnovačko Lake. The ascent from the lake takes around 2.5 hours and offers spectacular views back down to the lake and across the entire region — Durmitor, Zelengora, Jahorina, Volujak, Bioč, Piva Lake, Foča. The combination of Trnovačko Lake and Maglić is one of the finest adventures in the Balkans.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Camping</h2>
          <p className="leading-8">
            Camping at Trnovačko Lake is one of the most special experiences you can have in Bosnia and Herzegovina. A night under the stars, the sound of silence, morning mist rising over the water, Maglić above you. The meadows around the lake are perfect for pitching a tent. Bring a sleeping bag rated for the altitude — nights at 1,500 metres can be cold even in summer.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">When to Go</h2>
          <p className="leading-8">
            June to September is ideal. The trails are passable, the weather more stable, and the lake has its most beautiful colour. July and August are perfect for swimming. June and September offer fewer crowds and more quiet — but be prepared for less predictable weather.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organised Tours</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mt-6">
            <Link
              href="/en/tours/kampovanje-trnovacko-jezero-maglic"
              className="block rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-500/40"
            >
              <h3 className="mb-1 font-semibold text-emerald-400">Camping at Trnovačko Lake with Maglić Summit</h3>
              <p className="mb-3 text-sm text-slate-400">3 days / 2 nights • 170€ per person</p>
              <span className="text-sm text-emerald-400">View tour →</span>
            </Link>
            <Link
              href="/en/tours/maglic-trnovacko-jezero"
              className="block rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-500/40"
            >
              <h3 className="mb-1 font-semibold text-emerald-400">Maglić and Trnovačko Lake</h3>
              <p className="mb-3 text-sm text-slate-400">1 day • 95€ per person</p>
              <span className="text-sm text-emerald-400">View tour →</span>
            </Link>
            <Link
              href="/en/tours/trnovacko-jezero"
              className="block rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-500/40"
            >
              <h3 className="mb-1 font-semibold text-emerald-400">Trnovačko Lake – Day Trip</h3>
              <p className="mb-3 text-sm text-slate-400">1 day • 75€ per person</p>
              <span className="text-sm text-emerald-400">View tour →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
