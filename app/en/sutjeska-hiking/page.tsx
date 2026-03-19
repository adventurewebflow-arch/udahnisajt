import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sutjeska Hiking Guide: Trails, Peaks, and Planning Tips | Udahni Avanturu",
  description:
    "Discover the best hiking in Sutjeska National Park, from high mountain routes to scenic lake trails, with practical safety and season advice.",
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
          alt="Mountain landscape in Sutjeska National Park"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Bosnia and Herzegovina</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Sutjeska Hiking: Where Wild Nature Meets Classic Balkan Mountain Trails
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Why Hike in Sutjeska National Park</h2>
          <p className="leading-8">
            Sutjeska National Park is one of the most important outdoor destinations in the western Balkans. It offers a rare
            combination of rugged high mountain terrain, old-growth forest zones, iconic viewpoints, glacial lakes, and routes
            that can suit both ambitious hikers and travelers looking for easier day adventures. Unlike heavily developed alpine
            regions, Sutjeska still feels authentic and spacious. You can spend hours on trails with very little noise and almost
            no urban distractions. That raw quality is the reason many visitors return year after year.
          </p>
          <p className="leading-8">
            For first-time guests, the park can look complex because areas such as Maglic, Trnovacko Lake, Zelengora, and
            Perucica each offer very different terrain and pacing. A good strategy is to define your goal first: summit challenge,
            scenic lakes, educational nature walk, or multi-day camping. Once your objective is clear, route planning becomes much
            easier. Guided programs are especially useful when you want efficient logistics, local knowledge, and a safer
            experience in changing mountain weather.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Main Hiking Areas and Trail Style</h2>
          <h3 className="text-xl font-semibold text-emerald-300">High Mountain Routes</h3>
          <p className="leading-8">
            If your focus is elevation and dramatic panoramas, routes around Maglic and connecting ridges are the core of the
            experience. These hikes are physically demanding and require proper footwear, hydration, and confidence on steep
            sections. In return, you get some of the strongest viewpoints in the country, with layered mountain silhouettes in
            every direction.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Lakes and Open Plateau Terrain</h3>
          <p className="leading-8">
            For lighter to moderate effort, the Zelengora area offers a different rhythm: broad meadows, rolling lines, and a
            network of lakes and viewpoints. This zone is ideal for photography, slower pacing, and mixed groups where not everyone
            wants a hard summit day. It is also excellent for families and active travelers who value nature immersion without
            technical terrain.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Primeval Forest Experience</h3>
          <p className="leading-8">
            Perucica is one of Europe&apos;s most famous remaining primeval forests and provides a very different feeling from open
            mountain routes. Trails toward Skakavac Waterfall combine dense vegetation, streams, and old forest structure. The
            atmosphere is quieter and more intimate, making it a strong choice for nature interpretation and educational outings.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">How to Prepare for a Safe and Enjoyable Day</h2>
          <p className="leading-8">
            Start by checking current weather and choosing a route that fits your actual condition, not your ideal condition.
            Bring layered clothing, rain protection, at least two liters of water for longer routes, and enough food to keep
            energy steady. In sunny months, strong sun can be as challenging as elevation gain, so cap, sunscreen, and regular
            hydration matter. In shoulder months, cold wind and wet ground become the primary factors. If you are unfamiliar with
            local terrain, a licensed guide reduces risk significantly and improves pacing and decision-making on the trail.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Tours Linked to Sutjeska Hiking</h2>
          <p className="leading-8">
            These guided options match the most requested Sutjeska hiking experiences:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Camping at Trnovacko Lake with Ascent to Maglic
            </Link>
            <Link href="/en/tours/prasuma-perucica-vodopad-skakavac" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Perucica Rainforest and Skakavac Waterfall
            </Link>
            <Link href="/en/tours/zelengora-uspon-bregoč" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Zelengora - Bregoc Summit
            </Link>
            <Link href="/en/tours/trnovacko-jezero" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Trnovacko Lake Day Tour
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Build Your Itinerary with the Right Tempo</h2>
          <p className="leading-8 pb-4">
            The best Sutjeska hiking plan is not the one with the most kilometers, but the one with the right balance between
            effort, scenery, and recovery. Choose one demanding objective and pair it with one lighter day to fully appreciate what
            this park offers. With proper preparation and good guidance, Sutjeska becomes an outdoor destination you can return to
            in every season.
          </p>
        </article>
      </section>
    </main>
  );
}
