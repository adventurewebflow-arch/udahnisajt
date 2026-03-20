import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Maglić – The Highest Peak in Bosnia and Herzegovina | Hike Guide",
  description:
    "Maglić (2,386m) is the highest peak in Bosnia and Herzegovina. Complete hiking guide — routes from Prijevor and Trnovačko Lake, gear, difficulty and organised tours.",
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
          alt="Hiking on Maglić above Trnovačko Lake"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Sutjeska National Park</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Maglić — The Highest Peak in Bosnia and Herzegovina
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Maglić (2,386m) is the highest peak in Bosnia and Herzegovina and one of the most spectacular hiking destinations in the Balkans. Located in Sutjeska National Park, on the border between Bosnia and Herzegovina and Montenegro, Maglić is not just a mountain — it is an experience you carry with you long after you return home.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Why is it called Maglić?</h2>
          <p className="leading-8">
            The name is no accident. Local people named it Maglić — from the word for fog — because mist so often surrounds it. Even when the forecast promises clear skies, the mountain has a way of surprising you. We were once at the very summit when a hailstorm broke out in the middle of summer — hailstones the size of gravel, lightning, thunder, and nothing around us but sky and rock. Whoever experiences that never forgets it. That is Maglić.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The View from the Summit</h2>
          <p className="leading-8">
            On a clear day, the view from Maglić stretches across almost the entire region — the Perućica rainforest directly below, Durmitor in the distance, Zelengora, Jahorina, Volujak, Bioč, Piva Lake, Mratinje, Piva, Plužine, Foča. A panorama that takes your breath away and cannot be described — it has to be experienced.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Route and Difficulty</h2>
          <p className="leading-8">
            The most common route starts from Prijevor, at around 1,500 metres above sea level. The ascent takes 3 to 4 hours and requires good physical fitness and hiking experience. This is not a walk — Maglić is a serious mountain with steep sections and rocky terrain where hiking boots are non-negotiable. Regular trainers are not an option.
          </p>
          <p className="leading-8">
            The difficulty varies depending on how you organise your visit. If you camp at Trnovačko Lake and attack Maglić on the second day — the tour is moderately demanding because you are already at altitude and rested. If you go in a single day from Foča — it becomes more demanding because everything happens in one day.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Border Madness</h2>
          <p className="leading-8">
            Here is a detail most visitors do not know in advance: when you camp at Trnovačko Lake, you sleep in Montenegro. The lake sits on the Montenegrin side of the border. In the morning you climb Maglić — the highest peak in Bosnia and Herzegovina — and return to Montenegro to sleep. The next morning you cross back into Bosnia. All on foot, through the mountain, with no border crossings. Very few travellers can say they slept in one country, stood on the highest peak of another, and walked back — all in two days.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Water on the Route</h2>
          <p className="leading-8">
            There is a spring at Carevo Dolo on the route to Maglić, but it can dry up — especially in summer. Golden rule: always bring your own water, minimum 2–3 litres. You do not take chances on the mountain.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">The Café at Trnovačko Lake</h2>
          <p className="leading-8">
            This might be the finest detail of the entire tour. On the shore of Trnovačko Lake, at nearly 1,520 metres above sea level, there is a small mountain café run by Miloš and Ilija. Rakija, beer, coffee, tea — everything you need after the ascent. Beer chills in a 100-litre barrel of ice-cold spring water. Whoever sits there after Maglić and picks up that beer — they will never forget the taste. People who have never touched a beer in their lives drink one there.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">When to Go</h2>
          <p className="leading-8">
            Maglić is beautiful from June to October — each period in its own way. June brings melting snow and lush green nature. July and August are the warmest but also the most unpredictable — exactly when a hailstorm can catch you by surprise. September is perhaps the finest: more stable weather, fewer crowds, golden colours on the slopes.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Who Comes to Maglić?</h2>
          <p className="leading-8">
            Absolutely everyone. Young, older, experienced hikers, people putting on a backpack for the first time. Nobody knows anyone at the start of the tour. By the end — everyone is friends. Not metaphorically, but genuinely. There are groups of people who hiked Maglić together 2–3 years ago and still message each other today, still wish each other happy holidays. The mountain connects people in a way that is hard to explain but easy to recognise.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">What to Bring</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-200 leading-8 pl-2">
            <li>Hiking boots — non-negotiable</li>
            <li>Backpack minimum 40L</li>
            <li>Warm jacket — even in summer, the summit can be cold</li>
            <li>Minimum 2–3L of water</li>
            <li>Energy food for the ascent</li>
            <li>Waterproof jacket or windbreaker — Maglić is Maglić</li>
          </ul>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organised Tours to Maglić</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/en/tours/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Camping at Trnovačko Lake with Maglić Summit</h3>
              <p className="text-slate-400 text-sm mb-3">3 days / 2 nights • 170€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/maglic-trnovacko-jezero" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Maglić and Trnovačko Lake</h3>
              <p className="text-slate-400 text-sm mb-3">1 day • 95€ per person</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
            <Link href="/en/tours/tura-za-malo-jace-ljude-maglic-trnovacko-rafting" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">For the Stronger Ones – Maglić, Trnovačko & Tara Rafting</h3>
              <p className="text-slate-400 text-sm mb-3">3 days / 2 nights • 235€</p>
              <span className="text-emerald-400 text-sm">View tour →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
