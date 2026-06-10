import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { landingHreflang } from "@/lib/slugMap";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Sutjeska National Park — Complete Visitor Guide 2026 | Bosnia",
  description:
    "Everything you need to know about Sutjeska National Park — Maglić summit, Perućica rainforest, Trnovačko Lake, Zelengora mountain. Guided tours from Foča from €65. Licensed guide, small groups.",
  alternates: {
    canonical: `${BASE}/en/sutjeska-national-park`,
    languages: landingHreflang("/en/sutjeska-national-park"),
  },
  openGraph: {
    title: "Sutjeska National Park Bosnia — Complete Visitor Guide 2026",
    description:
      "Highest peak in BiH. Oldest rainforest in Europe. Deepest canyon in Europe. Licensed guided tours from €65.",
    url: `${BASE}/en/sutjeska-national-park`,
    type: "website",
  },
  keywords:
    "sutjeska national park, sutjeska hiking, maglic hike bosnia, perucica rainforest, trnovacko lake, zelengora mountain, bosnia adventure tours, sutjeska guided tours",
};

const destinations = [
  {
    name: "Maglić — 2,386m",
    slug: "maglic-hike",
    image: "/images/tours/gallery/ekipa-ide-na-maglic.webp",
    desc: "The highest peak in Bosnia and Herzegovina. On a clear day you can see the Adriatic Sea. The route from Prijevor is one of the finest day hikes in the Balkans — demanding but unforgettable.",
    tag: "Challenging",
  },
  {
    name: "Trnovačko Lake",
    slug: "trnovacko-lake",
    image: "/images/tours/gallery/trnovacko-jezero-najljepsa-slika.webp",
    desc: "A heart-shaped glacial lake at 1,517m on the border of Bosnia and Montenegro. Turquoise water, complete silence, and Miloš's mountain café where the beer chills in a 100-litre barrel of spring water.",
    tag: "Moderate",
  },
  {
    name: "Perućica Rainforest",
    slug: "perucica-rainforest",
    image: "/images/tours/gallery/vodopad-skakavac-perucica.webp",
    desc: "One of only two remaining primeval forests in Europe. Trees over 300 years old. Skakavac Waterfall drops 75 metres of free fall. A place that changes people — quietly, permanently.",
    tag: "Moderate",
  },
  {
    name: "Zelengora Mountain",
    slug: "zelengora-lakes",
    image: "/images/tours/gallery/zelengora-jezero.webp",
    desc: "Seven glacial lakes, open meadows and panoramic ridgelines. Wild blueberries in August. Tito's villa at Donje Bare. The most underrated mountain in Bosnia — because most people simply don't know what's there.",
    tag: "Easy to moderate",
  },
  {
    name: "Sutjeska Canyon",
    slug: null,
    image: "/images/tours/gallery/kanjon-sutjeske-zelengora.webp",
    desc: "The deepest canyon in Europe. The Sutjeska river runs crystal clear — you can drink directly from it. Rich in trout, historically significant from WWII. No marked trails — this is true wilderness.",
    tag: "Wild",
  },
];

const tours = [
  { name: "Trnovačko Lake", price: "€75", duration: "1 day", slug: "trnovacko-jezero", difficulty: "Moderate" },
  { name: "Maglić + Trnovačko Lake", price: "€95", duration: "1 day", slug: "maglic-trnovacko-jezero", difficulty: "Challenging" },
  { name: "Perućica + Skakavac", price: "€90", duration: "1 day", slug: "prasuma-perucica-vodopad-skakavac", difficulty: "Moderate" },
  { name: "Canyoning Hrčavka", price: "€130", duration: "1 day", slug: "kanjoning-hrcavka", difficulty: "Moderate" },
  { name: "Zelengora Lakes", price: "€70", duration: "1 day", slug: "zelengora-jezera-vidikovci", difficulty: "Easy" },
  { name: "Zelengora Jeep Safari", price: "€70", duration: "1 day", slug: "jeep-safari-zelengora", difficulty: "Easy" },
  { name: "Camping Trnovačko + Maglić", price: "€170", duration: "3 days", slug: "kampovanje-trnovacko-jezero-maglic", difficulty: "Moderate" },
  { name: "Sutjeska Heart — 5 days", price: "€550", duration: "5 days", slug: "srce-sutjeske-5-dana", difficulty: "Moderate" },
];

const faqs = [
  {
    q: "Do I need a guide in Sutjeska National Park?",
    a: "We strongly recommend it. People have lost their lives on Maglić without a guide. There is no mobile signal in most of the park, trails are not always clearly marked, and the terrain changes quickly. Our guides know every metre of the park. Safety is always first.",
  },
  {
    q: "How much does the park entrance cost?",
    a: "Sutjeska National Park entry is 10 KM (approximately €5) per person. Piva Nature Park (which you pass through on the way to Trnovačko Lake) is €1 per person for a day visit. Both are included in our tour prices.",
  },
  {
    q: "Is there mobile signal in Sutjeska National Park?",
    a: "Very little or none at all. This is genuine wilderness. Some networks have a faint signal at Tjentište, but once you head into the mountains — you are offline. That is part of the experience.",
  },
  {
    q: "Can I book a tour for just one person?",
    a: "Yes. Solo tours are available — they are priced slightly higher than group tours since we organise everything for one person. Contact us on WhatsApp and we will arrange it.",
  },
  {
    q: "How far in advance do I need to book?",
    a: "We can organise tours with one day's notice in most cases. We have guides, vehicles and all the equipment ready. That said, for multi-day tours and during peak season (July–August), a few days' notice is better.",
  },
  {
    q: "How fit do I need to be for Maglić?",
    a: "Maglić requires good physical fitness. It is not a technical climb but it is a full-day effort — around 7–8 hours walking with significant elevation gain. If you are not in regular physical activity, we honestly recommend Trnovačko Lake or Zelengora instead. We would rather be honest than have you struggle.",
  },
  {
    q: "What is the easiest tour in the park?",
    a: "Zelengora — the lakes and viewpoints tour or the jeep safari — requires no particular fitness. The jeep safari is entirely by vehicle with short walks to viewpoints and lakes. Ideal for families or anyone who wants to see the park without demanding hiking.",
  },
  {
    q: "Can I camp freely in the park?",
    a: "Camping is permitted in designated areas only. This is primarily for your own safety — the park has wildlife. We organise camping at Tjentište and at Trnovačko Lake with full equipment provided.",
  },
  {
    q: "Where do guests stay at Tjentište?",
    a: "We have a camp at Tjentište with bungalows from single occupancy to groups of 8. The camp has a restaurant, a bar, a pool and everything a modern camp offers. It sits at the entrance to the national park — you wake up in the mountains.",
  },
  {
    q: "What is the best time of year to visit?",
    a: "June to October. June brings wildflowers and lush green. July and August are warmest — wild blueberries on Zelengora in August. September is perhaps the finest month: stable weather, golden colours, fewer crowds. October brings autumn colours and dramatic skies.",
  },
];

export default function SutjeskaNationalParkPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] lg:h-[70vh] flex items-end">
        <Image
          src="/images/tours/gallery/zelengora-djevojka-u-planini.webp"
          alt="Sutjeska National Park Bosnia — wild mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-12 md:pb-16">
          <p className="text-emerald-400 text-xs uppercase tracking-widest mb-3 font-medium">
            Bosnia and Herzegovina · NP Sutjeska
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Sutjeska National Park
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-6">
            The oldest national park in Bosnia. The highest peak. The last primeval forest. The deepest canyon. All within a few hours of each other.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/en/tours"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              View all tours →
            </Link>
            <a
              href="https://wa.me/38765797200?text=Hello%2C%20I%20would%20like%20to%20visit%20Sutjeska%20National%20Park."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold rounded-xl transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "1962", label: "Year established" },
            { num: "43,000", label: "Hectares of wilderness" },
            { num: "2,386m", label: "Highest peak — Maglić" },
            { num: "75m", label: "Skakavac Waterfall" },
          ].map((f) => (
            <div key={f.label} className="text-center">
              <p className="text-emerald-400 font-bold text-2xl">{f.num}</p>
              <p className="text-slate-400 text-sm mt-1">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-white mb-6">What is Sutjeska National Park?</h2>
          <p className="text-slate-300 leading-8 mb-4">
            Sutjeska is Bosnia and Herzegovina's oldest national park, established in 1962. It covers 43,000 hectares of mountains, canyons, rivers and forests in the southeast of the country, near the town of Foča.
          </p>
          <p className="text-slate-300 leading-8 mb-4">
            Within its boundaries: the highest peak in Bosnia and Herzegovina (Maglić, 2,386m), one of only two remaining primeval forests in Europe (
            <Link href="/en/perucica-rainforest" className="text-emerald-400 hover:underline">
              Perućica
            </Link>
            ), one of the deepest canyons in Europe (Sutjeska canyon), and seven glacial lakes on Zelengora mountain.
          </p>
          <p className="text-slate-300 leading-8">
            The park has no mobile signal in most areas. Roads are poor or non-existent in the mountains. That is not a problem — that is precisely what makes it one of the last genuinely wild places in Europe.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Where to go</h2>
        <p className="text-slate-400 mb-10">Five destinations, each completely different. Most visitors see two or three in a single trip.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <div key={d.name} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <div className="relative aspect-[4/3]">
                <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">{d.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{d.name}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{d.desc}</p>
                {d.slug && (
                  <Link href={`/en/${d.slug}`} className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                    Read full guide →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to visit */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-10">When to visit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: "May – June", title: "Wildflowers and waterfalls", desc: "Snow melting on Maglić, Skakavac at full power, trails coming alive with colour. The park at its greenest." },
              { month: "July – August", title: "Peak season", desc: "Warmest temperatures. Wild blueberries on Zelengora. Longest days for multi-peak days. Book early — this is when everyone comes." },
              { month: "September", title: "The finest month", desc: "Stable weather, golden colours, fewer people. Our personal recommendation for first-time visitors. Almost perfect conditions." },
              { month: "October", title: "Autumn colours", desc: "Dramatic skies, auburn forests, cold mornings. Fewer tours operating but the landscape is extraordinary for those who come." },
            ].map((s) => (
              <div key={s.month} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
                <p className="text-emerald-400 text-sm font-medium mb-2">{s.month}</p>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to get here */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-2">How to get here</h2>
        <p className="text-slate-400 mb-10">Tjentište is the main village inside the park — all our tours depart from here.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { city: "Sarajevo", flag: "🇧🇦", dist: "130 km", time: "~2 hours", note: "Closest airport. Route via Trnovo and Miljevina — through Bistrica canyon." },
            { city: "Dubrovnik", flag: "🇭🇷", dist: "230 km", time: "~3 hours", note: "Through Trebinje and Gacko. One of the most beautiful drives in the region." },
            { city: "Podgorica", flag: "🇲🇪", dist: "180 km", time: "~2.5 hours", note: "Via Nikšić and Šćepan Polje. Past Piva Lake on the way." },
            { city: "Belgrade", flag: "🇷🇸", dist: "330 km", time: "~4 hours", note: "Via Foča. Option to stop at Andrićgrad and Višegrad." },
            { city: "Mostar", flag: "🇧🇦", dist: "160 km", time: "~2.5 hours", note: "Through Nevesinje and Gacko." },
            { city: "Zagreb", flag: "🇭🇷", dist: "550 km", time: "~6 hours", note: "Via Sarajevo. Worth stopping in Sarajevo on the way." },
          ].map((c) => (
            <div key={c.city} className="bg-slate-900 rounded-xl p-5 border border-slate-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{c.flag}</span>
                <span className="text-white font-semibold">{c.city}</span>
              </div>
              <p className="text-emerald-400 text-sm mb-1">{c.dist} · {c.time}</p>
              <p className="text-slate-400 text-sm">{c.note}</p>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-sm mt-6">
          We organise transfers from all cities above. Contact us on WhatsApp for pricing.
        </p>
      </section>

      {/* Tours */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-2">Our tours</h2>
          <p className="text-slate-400 mb-10">Day trips and multi-day adventures. All include a licensed guide, off-road vehicle transport and park entry fees.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tours.map((t) => (
              <Link
                key={t.slug}
                href={`/en/tours/${t.slug}`}
                className="flex items-center justify-between bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div>
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{t.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{t.duration} · {t.difficulty}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold text-lg">{t.price}</p>
                  <p className="text-slate-500 text-xs">per person</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About the guide */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-400 text-xs uppercase tracking-widest mb-3">Your guide</p>
            <h2 className="text-3xl font-bold text-white mb-4">Petar Kostić</h2>
            <p className="text-slate-300 leading-8 mb-4">
              Licensed mountain guide and licensed river skipper with over 15 years of experience in Sutjeska National Park and the surrounding Dinaric Alps. Born and based in Foča.
            </p>
            <p className="text-slate-300 leading-8 mb-4">
              Petar learned to swim and dive in the Tara river. He knows Maglić well enough to know when to turn back. He knows the three vipers that guard the spring in Perućica. He knows Miloš at Trnovačko Lake.
            </p>
            <p className="text-slate-300 leading-8 mb-6">
              We are always in contact with Mountain Rescue. Safety is the only thing that never gets compromised.
            </p>
            <a
              href="https://wa.me/38765797200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Contact Petar on WhatsApp
            </a>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/tours/blog-trnovacko-perucica-rafting/ekipa-prasuma.webp"
              alt="Petar Kostić — licensed guide in Sutjeska National Park"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-2">Frequently asked questions</h2>
          <p className="text-slate-400 mb-10">Everything you need to know before visiting Sutjeska National Park.</p>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="bg-slate-900 rounded-xl p-6 border border-slate-800">
                <h3 className="text-white font-semibold mb-2">{f.q}</h3>
                <p className="text-slate-400 leading-7">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to explore Sutjeska?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Contact us on WhatsApp — we respond within one hour and can organise your tour with one day's notice.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/38765797200?text=Hello%2C%20I%20would%20like%20to%20visit%20Sutjeska%20National%20Park."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
          >
            WhatsApp — +387 65 797 200
          </a>
          <Link
            href="/en/tours"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold rounded-xl transition-colors"
          >
            Browse all tours
          </Link>
        </div>
      </section>

    </main>
  );
}
