import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Trnovacko Lake Guide: How to Visit, Hike, and Plan | Udahni Avanturu",
  description:
    "Explore Trnovacko Lake with route ideas, practical preparation tips, and guided tour options from Sutjeska National Park and Foča.",
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
          alt="Trnovacko Lake with mountain backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Iconic Mountain Lake</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Trnovacko Lake: Heart-Shaped Jewel of the Maglic Region
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Why Trnovacko Lake Is a Must-See in Bosnia and Herzegovina</h2>
          <p className="leading-8">
            Trnovacko Lake is one of the most recognizable natural landmarks in the region, famous for its shape, emerald water,
            and dramatic alpine setting beneath the Maglic massif. For many visitors, this is the single place that defines their
            memory of Sutjeska and the wider Dinaric mountains. What makes the lake special is not only its look in photos, but the
            full atmosphere around it: quiet mornings, broad rocky slopes, changing light through the day, and a feeling of being
            far away from crowded tourist circuits.
          </p>
          <p className="leading-8">
            Whether you come for a day hike or as part of a multi-day camping program, Trnovacko offers strong contrast. On one
            side, the route to reach it is active and rewarding. On the other, once you arrive, the pace naturally slows down. You
            can walk along the shore, rest, take photos from different angles, and, in warm periods, even swim. This balance of
            movement and calm makes the destination ideal for both experienced hikers and travelers who simply want a powerful
            mountain landscape without a highly technical route.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">How to Reach the Lake and What to Expect on Trail</h2>
          <h3 className="text-xl font-semibold text-emerald-300">Approach and Hiking Style</h3>
          <p className="leading-8">
            Most guided itineraries use off-road transfer to a higher starting point, then continue on foot to the lake. The walk
            is usually moderate in difficulty and can be managed by participants with basic hiking fitness. The exact timing depends
            on route variant, group pace, and weather, but the goal is typically a steady rhythm with regular short breaks. The
            terrain includes open mountain sections and uneven surfaces where stable footwear is important.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Best Conditions and Seasonal Considerations</h3>
          <p className="leading-8">
            Late spring to early autumn is the main season. In midsummer, warm temperatures can increase fatigue on exposed areas,
            so early starts and proper hydration are recommended. In early and late season, temperatures at elevation can be cool,
            especially in the morning and evening. Even when forecasts look good in lower valleys, mountain weather can shift
            quickly, so waterproof protection and a warm layer should always be in your backpack.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Packing Advice for a Comfortable Day</h2>
          <p className="leading-8">
            Practical gear for Trnovacko Lake includes hiking boots with good grip, layered clothing, a windproof outer layer, a
            small first-aid kit, and enough water and snacks for the entire outing. If you plan to swim, pack a towel and dry
            clothing for the return. Trekking poles can help on uneven terrain, especially during descent. A 30 to 40 liter
            backpack is usually enough for day use, while multi-day camping tours may require additional organization depending on
            what equipment is provided by the operator.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Best Tours for Visiting Trnovacko Lake</h2>
          <p className="leading-8">
            These options are the most relevant if Trnovacko Lake is your main destination:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/en/tours/trnovacko-jezero" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Trnovacko Lake (Day Trip)
            </Link>
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Camping at Trnovacko Lake with Ascent to Maglic
            </Link>
            <Link href="/en/tours/maglic-trnovacko-jezero" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200 sm:col-span-2">
              Maglic and Trnovacko Lake
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Photography and Experience Tips</h2>
          <p className="leading-8 pb-4">
            If your priority is photography, keep in mind that light changes the lake&apos;s appearance throughout the day. Morning
            conditions can feel softer and quieter, while later light can produce stronger contrast around the surrounding slopes.
            For the most complete experience, avoid rushing your visit. Build in enough time at the lake itself, not only on the
            approach trail. That is often what turns a good trip into a memorable one.
          </p>
        </article>
      </section>
    </main>
  );
}
