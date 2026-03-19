import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Maglic Hike Guide: Routes, Difficulty, and Best Season | Udahni Avanturu",
  description:
    "Plan your Maglic hike with practical advice on routes, terrain, weather, safety, and guided options in Sutjeska National Park.",
  alternates: {
    canonical: `${BASE}/en/maglic-hike`,
  },
};

export default function MaglicHikePage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/uspon-na-maglic-savjeti.webp"
          alt="Hiking on Maglic above Trnovacko Lake"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Sutjeska National Park</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Maglic Hike: Complete Guide to Bosnia and Herzegovina&apos;s Highest Peak
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Why Maglic Is One of the Best Mountain Experiences in the Balkans</h2>
          <p className="leading-8">
            A hike to Maglic is more than a summit objective. It is a complete high mountain day that combines broad panoramas,
            steep alpine sections, wild landscapes, and a deep sense of remoteness that many travelers miss in more commercial
            destinations. Rising above Sutjeska National Park, Maglic offers a dramatic profile and one of the most rewarding
            viewpoints in the Dinaric range. On clear days, hikers can trace ridges and valleys stretching toward Volujak,
            Zelengora, and beyond, while the distinctive shape of Trnovacko Lake below the massif adds a visual highlight that
            makes this route unforgettable.
          </p>
          <p className="leading-8">
            The mountain is well known among regional hikers, but international travelers are only beginning to discover how
            special this zone is. Terrain changes quickly from open meadows to rocky traverses, and weather can shift from calm
            sunshine to strong wind in a short time. Because of that, proper planning is essential. Good boots, layered clothing,
            adequate hydration, and realistic pacing are the difference between a hard but enjoyable challenge and an unsafe day.
            For visitors who want to focus on experience rather than logistics, joining a guided tour is often the smartest
            choice.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Route Overview, Difficulty, and Expected Time</h2>
          <h3 className="text-xl font-semibold text-emerald-300">Typical Approach from Prijevor</h3>
          <p className="leading-8">
            Most organized hikes begin from the Prijevor area. From there, the route gains elevation steadily and becomes more
            demanding in upper sections. The ascent is not technical mountaineering, but it does require sure footing, comfort on
            steeper ground, and enough endurance for several hours of continuous movement. In practical terms, fit beginners with
            prior hiking experience can complete the route under guidance, while experienced hikers will appreciate the variation
            in terrain and scenery.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Physical Demand and Safety Considerations</h3>
          <p className="leading-8">
            Maglic is commonly described as a demanding day hike. Total effort depends on weather, group pace, and route variant.
            Plan for a long day with regular breaks, snacks, and controlled movement on exposed sections. During summer weekends,
            early departure helps avoid heat and afternoon storms. In shoulder seasons, mornings can be cold and windy, so warm
            layers and waterproof protection remain necessary even when forecasts look stable.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Best Time to Hike and What to Pack</h2>
          <p className="leading-8">
            The prime season for Maglic generally runs from late spring into early autumn, with peak conditions often in June,
            July, and September. August can be very warm, which makes pacing and hydration especially important. Always check
            current conditions before departure, and do not rely only on lowland forecasts. Weather at altitude behaves
            differently and can change rapidly. Essential equipment includes ankle-supporting hiking boots, a 30 to 40 liter
            backpack, at least two liters of water, layered clothing, sun protection, and basic first aid.
          </p>
          <p className="leading-8">
            If you prefer a multi-day mountain experience, consider camping combinations that include Maglic and Trnovacko Lake.
            These itineraries create more time in nature and reduce time pressure on summit day. If your goal is a single,
            high-energy challenge, one-day options are also available and popular.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Recommended Guided Tours</h2>
          <p className="leading-8">
            For a safe and well-organized Maglic experience, these tours are the most relevant choices:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Camping at Trnovacko Lake with Ascent to Maglic
            </Link>
            <Link href="/en/tours/maglic-trnovacko-jezero" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Maglic and Trnovacko Lake (Day Trip)
            </Link>
            <Link href="/en/tours/tura-za-malo-jace-ljude-maglic-trnovacko-rafting" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200 sm:col-span-2">
              For the Stronger Ones - Maglic, Trnovacko Lake and Tara Rafting
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Final Planning Advice</h2>
          <p className="leading-8 pb-4">
            Treat Maglic with respect, prepare properly, and choose an itinerary that matches your current fitness. This mountain
            rewards patience and consistency more than speed. With the right plan, the hike is not only achievable, but one of the
            strongest outdoor memories you can have in Bosnia and Herzegovina.
          </p>
        </article>
      </section>
    </main>
  );
}
