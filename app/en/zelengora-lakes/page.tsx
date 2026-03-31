import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Zelengora – The Most Beautiful Mountain of Former Yugoslavia | Lakes & Hiking Guide",
  description:
    "Nine mountain lakes, Dinaric meadows and panoramas that take your breath away. Zelengora before the tourist crowds arrive. Hiking, jeep safari and camping — guided tours from Foča with licensed guide Petar.",
  alternates: {
    canonical: `${BASE}/en/zelengora-lakes`,
  },
};

export default function ZelengoraLakesPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/zelengora-jezera-vidikovci.webp"
          alt="Zelengora lakes and panoramic viewpoints"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Sutjeska National Park</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Zelengora — The Most Beautiful Mountain of Former Yugoslavia
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            The name says it all — Zelen Gora, the Green Mountain. So green that it was once declared the most beautiful mountain in former Yugoslavia. Located in the heart of Sutjeska National Park, Zelengora is not a single destination — it is an entire world of lakes, viewpoints, meadows and silence.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">How Many Lakes Does Zelengora Have?</h2>
          <p className="leading-8">
            More than you think. Orlovačko, Štirinsko, Kotlaničko, Bijelo, Crno, Kladopoljsko, Borlovačko, Donje Bare, Gornje Bare — each lake has its own character, its own colour, its own setting. Orlovačko is perhaps the most famous and for many the most beautiful. But those who know Zelengora well know there is much more to discover.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Three Areas of Zelengora</h2>
          <p className="leading-8">
            Zelengora is not one route — it has three distinct areas, each with its own story.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">First area: Borić, Donje and Gornje Bare, Uglješin vrh</h3>
              <p className="leading-8">
                The Borić viewpoint is a beautiful spot from which Maglić stands right in front of you. Donje and Gornje Bare are close by, and Uglješin vrh is nearby too. From Čemerno, which you see from the Borić viewpoint, lies the border between Bosnia and Herzegovina — and here is a detail very few people know: on one side of Čemerno the water flows toward the Adriatic Sea, and on the other toward the Black Sea. Two watersheds, one view.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Second area: Bregoč, Orlovačko, Kotlaničko, Štirinsko, Borlovačko Lake</h3>
              <p className="leading-8">
                Bregoč is the highest peak of Zelengora at 2,017 metres. The ascent takes around 2 hours and is designed for people with moderate fitness — not as demanding as Maglić, but not a stroll either. This area includes the most famous lakes of Zelengora — Orlovačko, Kotlaničko, Štirinsko and Borlovačko.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Third area: Pašina Poljana, Crno and Bijelo Lake</h3>
              <p className="leading-8">
                The quieter, more remote part of Zelengora — ideal for those who want silence and untouched nature away from the main routes. Here you can ride horses and visit Crno and Bijelo Lake.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Jeep Safari — The Canister Speaker and Chill Music</h2>
          <p className="leading-8">
            Zelengora can also be experienced differently — in an open-sided truck with comfortable seats and a speaker built into the cabin from an iron canister. When the chill music starts playing through the mountain and the view of Kotlaničko Lake opens up before you and Herzegovina begins — that is a feeling you do not forget. A panoramic drive that combines enjoyment and adventure.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Wildlife</h2>
          <p className="leading-8">
            On Zelengora you are not alone. Chamois are frequent — we see them regularly. We have watched deer running across the clearings. Zelengora is home to wildlife that does not know what a tourist is.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Camping Beside the Lakes</h2>
          <p className="leading-8">
            On Zelengora you can camp beside any lake. A tent by the water, stars above, mountain silence — that is Zelengora at its finest.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">When to Go</h2>
          <p className="leading-8">
            Zelengora is beautiful at any time:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200 leading-8 pl-2">
            <li><strong>June</strong> — just turning green, vegetation is late but everything is fresh and lush</li>
            <li><strong>July/August</strong> — fully green, lakes warm, meadows in bloom</li>
            <li><strong>Autumn</strong> — golden, red, yellow — it changes colour like few mountains can</li>
          </ul>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organised Tours on Zelengora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/en/tours/zelengora-jezera-vidikovci" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Zelengora – Lakes and Viewpoints</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 70€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/zelengora-uspon-bregoč" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Zelengora – Bregoč Summit</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 70€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/kampovanje-zelengora-bregoč-jeep-safari" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Camping on Zelengora + Jeep Safari</h3>
              <p className="text-slate-400 text-sm mb-3">3 days / 2 nights • 160€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
