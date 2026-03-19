import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Perucica Rainforest Guide: Skakavac, Trails, and Visits | Udahni Avanturu",
  description:
    "Learn how to visit Perucica Rainforest and Skakavac Waterfall with practical route tips, safety guidance, and guided tour recommendations.",
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
          alt="Skakavac waterfall in Perucica rainforest"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Primeval Nature</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Perucica Rainforest: One of Europe&apos;s Last Primeval Forest Experiences
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">What Makes Perucica So Important</h2>
          <p className="leading-8">
            Perucica Rainforest is widely recognized as one of the most significant remaining primeval forest zones in Europe.
            Unlike managed woodland or commercial forest landscapes, Perucica preserves natural ecological dynamics at a scale that
            is increasingly rare. Old trees, complex vegetation layers, moist microclimates, and long uninterrupted forest cycles
            create an environment that feels ancient and alive in a way many visitors have never experienced before.
          </p>
          <p className="leading-8">
            The area is part of the broader Sutjeska National Park system, and a visit here pairs naturally with mountain and lake
            routes nearby. Still, Perucica should be treated as a destination in its own right. The atmosphere is quieter and more
            introspective than open alpine terrain. Instead of expansive ridgeline panoramas, the value comes from close contact
            with untouched ecosystems, the sound of water, and the layered textures of the forest itself.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Skakavac Waterfall and Typical Visitor Experience</h2>
          <h3 className="text-xl font-semibold text-emerald-300">Trail Character and Duration</h3>
          <p className="leading-8">
            Many itineraries include a guided walk toward Skakavac Waterfall, one of the visual highlights of the region. The
            approach usually follows forest paths with varied footing, moderate elevation changes, and several opportunities for
            short rest breaks. Distances and timing depend on exact route and conditions, but the outing is generally designed as a
            substantial half-day to full-day nature experience rather than a rushed stop.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Physical Requirements and Preparation</h3>
          <p className="leading-8">
            The walk is considered moderate for most active participants. It does not require technical climbing skills, but good
            balance and stable footwear are important because forest terrain can be wet and uneven. Bring enough water, weather
            layers, and food for the day. Even in warm months, shaded forest sections may feel cooler than expected, and after
            rainfall trail surfaces can become slippery. Following guide instructions is essential for preserving safety and
            minimizing impact on this sensitive environment.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Responsible Travel in a Primeval Forest</h2>
          <p className="leading-8">
            Perucica is not just scenic terrain; it is a fragile ecological system. Responsible behavior is part of the
            experience. Stay on designated paths, avoid disturbing plant life, keep noise low, and never leave waste behind. Group
            discipline matters because repeated small impacts can become significant over time. Guided visits provide structure that
            helps protect the area while still offering a meaningful and educational day outdoors.
          </p>
          <p className="leading-8">
            If you want a richer understanding of the zone, ask about seasonal patterns, species diversity, and the relationship
            between Perucica and surrounding mountain ecosystems. Learning that context transforms the walk from a simple excursion
            into a deeper appreciation of why this forest is globally valuable.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Relevant Tours You Can Book</h2>
          <p className="leading-8">
            The following tours are most closely connected to Perucica and Skakavac:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Link href="/en/tours/prasuma-perucica-vodopad-skakavac" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Perucica Rainforest and Skakavac Waterfall (Day Trip)
            </Link>
            <Link href="/en/tours/hrcavka-perucica-kanjoning-prasuma-skakavac" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200">
              Hrcavka Canyoning + Perucica Rainforest and Skakavac
            </Link>
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-4 text-emerald-300 transition hover:border-emerald-400 hover:text-emerald-200 sm:col-span-2">
              Camping at Trnovacko Lake with Ascent to Maglic (includes nearby viewpoints)
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">When to Visit Perucica</h2>
          <p className="leading-8 pb-4">
            Perucica can be visited across much of the hiking season, but each period offers a different mood. Spring brings fresh
            water flow and vibrant greens, summer provides easier access and stable schedules, while early autumn offers cooler air
            and rich forest color transitions. Whichever season you choose, approach the area with patience and respect. Perucica
            rewards slower travel and attention to detail more than speed.
          </p>
        </article>
      </section>
    </main>
  );
}
