import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Zelengora Lakes Guide: Best Viewpoints and Day Routes | Udahni Avanturu",
  description:
    "Explore Zelengora lakes with tips for routes, viewpoints, family-friendly options, and guided hiking or jeep safari tours.",
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
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Zelengora Plateau</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Zelengora Lakes: Scenic Mountain Water and Open Dinaric Landscapes
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Why Zelengora Is Perfect for Scenic Outdoor Days</h2>
          <p className="leading-8">
            Zelengora is one of the most photogenic and accessible mountain areas in the wider Sutjeska region. It is known for
            its lakes, soft meadow lines, broad horizons, and viewpoints that create a true sense of open space. Unlike routes
            centered around steep summit objectives, Zelengora allows a more flexible rhythm. You can combine light walking, short
            climbs, scenic stops, and long landscape views without constant physical strain.
          </p>
          <p className="leading-8">
            This makes the destination attractive to a wide range of visitors: active families, beginner hikers, mixed groups, and
            photographers who want many visual angles in one day. It is also excellent as a recovery day between harder mountain
            objectives. If you already plan to visit Maglic or Trnovacko Lake, adding a Zelengora day creates strong contrast and
            gives your trip a more complete character.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Main Lake Highlights and Typical Route Flow</h2>
          <h3 className="text-xl font-semibold text-emerald-300">Donje Bare, Gornje Bare, and Viewpoint Stops</h3>
          <p className="leading-8">
            Many itineraries include lakes such as Donje Bare and nearby panoramic points, with optional short walks toward other
            locations depending on group energy and weather. The strength of the area is route adaptability: guides can design a
            program that remains visually rich without forcing a demanding hiking schedule. This is useful for travelers who value
            nature immersion and relaxed pacing.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Hiking and Jeep Safari Combination Options</h3>
          <p className="leading-8">
            Zelengora is also ideal for combining moderate hiking with off-road access. Jeep safari formats allow faster movement
            between key viewpoints and lakes, then short on-foot segments at the best spots. This approach is practical for groups
            with different fitness levels because it reduces total walking load while preserving access to major landscape
            highlights.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Preparation Tips for Comfort and Safety</h2>
          <p className="leading-8">
            Even though many Zelengora routes are easier than high-alpine ascents, mountain basics still apply. Wear stable
            footwear, bring layered clothing, and keep water and snacks ready throughout the day. Sun exposure can be strong on open
            terrain, so cap and sunscreen are useful in summer. In changing weather, a light waterproof layer helps maintain
            comfort. If your group includes children or less experienced hikers, communicate expectations in advance and choose a
            route format that prioritizes enjoyment over speed.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Best Tours Related to Zelengora Lakes</h2>
          <p className="leading-8">
            These tours connect directly to the main Zelengora experience:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/en/tours/zelengora-jezera-vidikovci" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Zelengora - Lakes and Viewpoints
            </Link>
            <Link href="/en/tours/jeep-safari-zelengora" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Jeep Safari Zelengora
            </Link>
            <Link href="/en/tours/kampovanje-zelengora-bregoč-jeep-safari" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200 sm:col-span-2">
              Camping on Zelengora with Bregoc Summit + Jeep Safari
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Who Should Choose Zelengora First</h2>
          <p className="leading-8 pb-4">
            If you are deciding between several destinations in Sutjeska and want a visually rich route without maximum physical
            stress, Zelengora is often the best first choice. It delivers strong mountain identity, beautiful lake scenery, and
            flexible pacing in one package. For many visitors, it becomes the highlight that inspires a return trip for more
            demanding peaks.
          </p>
        </article>
      </section>
    </main>
  );
}
