import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Perućica Rainforest & Skakavac Waterfall | Bosnia Hiking Guide",
  description:
    "A rainforest thousands of years old and Skakavac waterfall dropping 75 metres. One of only two primeval forests left in Europe — untouched, wild and perfect. Small groups, licensed guide, tours from Foča.",
  alternates: {
    canonical: `${BASE}/en/perucica-rainforest`,
  },
};

export default function PerucicaRainforestPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/skakavac.webp"
          alt="Skakavac waterfall in Perućica rainforest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Sutjeska National Park</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Perućica Rainforest — One of the Last Primeval Forests in Europe
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Perućica is not a forest. Perućica is another world. One of only two remaining primeval forests in Europe, protected and untouched, where trees grow and fall by their own laws — as they have for thousands of years.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">What You Will See</h2>
          <p className="leading-8">
            Enormous trees still standing tall and powerful. And beside them — trees that fell nobody knows when, covered in moss, slowly returning to the earth. A natural cycle unfolding without human intervention. The silence of the rainforest draws you in gradually — and then a sound begins. It grows louder. And suddenly — Skakavac.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Skakavac Waterfall — 75 Metres of Free Fall</h2>
          <p className="leading-8">
            Skakavac drops 75 metres and you feel every one of them. The sound, the spray, the power of the water. But there is also a route that brings you directly above the waterfall — the view from the top of that free fall is an experience very few waterfalls in the Balkans can offer.
          </p>
          <p className="leading-8">
            The full excursion takes around 5 hours. The descent is steep and requires care and knowledge of the terrain. Do not enter without a guide — this is not a joke. The story goes that two Slovenian hikers entered Perućica alone and were never found.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Guardians of the Rainforest</h2>
          <p className="leading-8">
            At one spring deep in the forest, three vipers have lived for over 10 years. They are always there. We call them the guardians of Perućica. They are magnificent — but approach carefully when filling water. They are not aggressive if you do not disturb them. They are as much a part of this forest as any tree.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">When to Go</h2>
          <p className="leading-8">
            May to October. Summer is ideal — the vegetation is lush, the waterfall is at full power. After rain, Skakavac is particularly impressive.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">What to Bring</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-200 leading-8 pl-2">
            <li>Hiking boots with good grip — the trails can be wet and steep</li>
            <li>Waterproof jacket — the forest is humid</li>
            <li>Backpack with water and food</li>
            <li>Camera — Perućica is extraordinary to photograph</li>
          </ul>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organised Tours</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <Link href="/en/tours/prasuma-perucica-vodopad-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Perućica Rainforest and Skakavac Waterfall</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 90€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/hrcavka-perucica-kanjoning-prasuma-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Hrčavka Canyoning + Perućica Rainforest & Skakavac</h3>
              <p className="text-slate-400 text-sm mb-3">3 days / 2 nights • 255€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
