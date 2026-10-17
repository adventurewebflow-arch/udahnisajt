import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "../../components/Accordion";
import WhatsAppTrackedLink from "../../components/WhatsAppTrackedLink";
import { landingHreflang } from "@/lib/slugMap";

export const metadata: Metadata = {
  title: "How to Get to Sutjeska National Park and Tjentište | Udahni Avanturu",
  description: "Directions to Tjentište and Sutjeska National Park from Sarajevo, Belgrade, Dubrovnik, Podgorica, Mostar and Zagreb: roads, bus lines and nearest airports. We arrange transfers on request.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/en/kako-doci",
    languages: landingHreflang("/en/kako-doci"),
  },
  openGraph: {
    title: "How to Get to Sutjeska National Park and Tjentište | Udahni Avanturu",
    description:
      "Directions to Tjentište and Sutjeska National Park from Sarajevo, Belgrade, Dubrovnik, Podgorica, Mostar and Zagreb: roads, bus lines and nearest airports. We arrange transfers on request.",
    url: "https://www.udahniavanturu.com/en/kako-doci",
    type: "website",
  },
};

const routes = [
  {
    city: "Sarajevo",
    flag: "🇧🇦",
    distance: "~90 km",
    time: "~1h 45min",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>Sarajevo is the closest major city and has the closest airport — just 90 kilometres from Tjentište. The route follows the M-18 main road through Kijevo, Trnovo and Miljevina. It is well signposted and paved the whole way.</p>
        <p><strong className="text-white">By car:</strong> Sarajevo → Kijevo → Trnovo → Dobro Polje → Miljevina → Tjentište. Follow the signs for Foča and Sutjeska National Park.</p>
        <p><strong className="text-white">By bus:</strong> Several daily buses run from East Sarajevo (Istočno Sarajevo) to Foča — departures at 7:45, 8:00, 9:00, 11:00, 13:00, 14:00, 16:00, 18:00, 19:00 and 20:00. We arrange the transfer from Foča to Tjentište.</p>
        <p><strong className="text-white">Sarajevo Airport</strong> is only 85 km from Tjentište — the closest airport for your arrival.</p>
        <p className="text-emerald-400">💬 We arrange transfers from Sarajevo on request — get in touch and we will sort out the details.</p>
      </div>
    ),
  },
  {
    city: "Belgrade",
    flag: "🇷🇸",
    distance: "~330 km",
    time: "~4h",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>There are two good routes from Belgrade. Both are scenic, fully paved and pass through interesting country.</p>
        <p><strong className="text-white">Option 1 (recommended):</strong> Belgrade → Šabac → Zvornik → Vlasenica → Han Pijesak → Sokolac → Rogatica → Goražde → Foča → Tjentište. Border crossing at Šepak or Mali Zvornik.</p>
        <p><strong className="text-white">Option 2:</strong> Belgrade → Čačak → Užice → Mokra Gora → Višegrad → Goražde → Foča → Tjentište. Border crossing at Mokra Gora — a slightly more beautiful drive through Zlatibor.</p>
        <p><strong className="text-white">By bus:</strong> Daily buses run from Belgrade (BAS bus station) to Foča at 7:00 and 22:00. We arrange the transfer from Foča.</p>
        <p><strong className="text-white">Worth a stop on the way:</strong> Višegrad and the famous &quot;Bridge on the Drina&quot;, Andrićgrad, and Mećavnik ethno village (Kusturica). Well worth the break!</p>
        <p className="text-emerald-400">💬 We arrange transfers from Belgrade on request.</p>
      </div>
    ),
  },
  {
    city: "Dubrovnik",
    flag: "🇭🇷",
    distance: "~230 km",
    time: "~3h",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>The road from Dubrovnik to Tjentište is one of the most beautiful in the region — through Trebinje, Bileća and Gacko. You cross the real mountain Herzegovina, far from the tourist crowds on the coast.</p>
        <p><strong className="text-white">By car:</strong> Dubrovnik → Trebinje → Bileća → Gacko → Tjentište → Foča. In Gacko, turn towards Foča and the Čemerno pass. A tunnel has been built through Čemerno, cutting more than half an hour off the journey.</p>
        <p><strong className="text-white">By bus:</strong> From Dubrovnik to Trebinje (20 km), where several daily buses leave for Foča. We arrange the transfer from Foča.</p>
        <p><strong className="text-white">Dubrovnik Airport</strong> is 184 km from Tjentište — an excellent starting point for international guests.</p>
        <p><strong className="text-white">Worth a stop on the way:</strong> Trebinje is one of the most beautiful towns in the region — visit Hercegovačka Gračanica monastery and Tvrdoš monastery with its famous wines. A must!</p>
        <p className="text-emerald-400">💬 We arrange transfers from Dubrovnik on request.</p>
      </div>
    ),
  },
  {
    city: "Podgorica",
    flag: "🇲🇪",
    distance: "~180 km",
    time: "~2h 30min",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>From Podgorica the road runs through Nikšić and Plužine — on the way to us you already pass Piva Lake and the Piva canyon. These are the same places we explore on our tours.</p>
        <p><strong className="text-white">By car:</strong> Podgorica → Nikšić → Plužine → Šćepan Polje (BiH/Montenegro border) → Foča → Tjentište. After the border at Šćepan Polje it is only 35 km to Tjentište.</p>
        <p><strong className="text-white">By bus:</strong> Several daily buses run from Podgorica to Foča. We arrange the transfer from Foča to Tjentište.</p>
        <p><strong className="text-white">Podgorica Airport</strong> is 178 km from Tjentište.</p>
        <p><strong className="text-white">Worth a stop on the way:</strong> Ostrog Monastery — carved into a cliff face, one of the most important Orthodox shrines. It is close to Nikšić.</p>
        <p className="text-emerald-400">💬 We arrange transfers from Podgorica on request.</p>
      </div>
    ),
  },
  {
    city: "Mostar",
    flag: "🇧🇦",
    distance: "~160 km",
    time: "~2h 30min",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>From Mostar a mountain route leads to Tjentište through Nevesinje and Foča. It is less travelled, but unique — you cross the real mountain Herzegovina.</p>
        <p><strong className="text-white">By car:</strong> Mostar → Nevesinje → Gacko → Tjentište. Or Mostar → Konjic → Foča → Tjentište (longer, but just as beautiful).</p>
        <p><strong className="text-white">By bus:</strong> Buses run from Mostar to Foča (the Belgrade line passes through Foča). Departures at 19:30 and 23:45. We arrange the transfer from Foča.</p>
        <p className="text-emerald-400">💬 We arrange transfers from Mostar on request.</p>
      </div>
    ),
  },
  {
    city: "Zagreb",
    flag: "🇭🇷",
    distance: "~550 km",
    time: "~6h",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>The longest route, but worth every minute. From Zagreb you cross Bosnia and arrive in one of the most beautiful national parks in Europe.</p>
        <p><strong className="text-white">By car:</strong> Zagreb → Slavonski Brod → Banja Luka → Travnik → Sarajevo → Foča → Tjentište. Or Zagreb → Split → Dubrovnik → Trebinje → Tjentište (more scenic, but longer).</p>
        <p><strong className="text-white">By bus:</strong> Zagreb → Sarajevo (regular services), then a bus from Sarajevo (East Sarajevo) to Foča. We arrange the transfer from Foča.</p>
        <p><strong className="text-white">Zagreb Airport</strong> is 480 km from Tjentište.</p>
        <p><strong className="text-white">Worth a stop on the way:</strong> Sarajevo is a must — a city you have to see. Banja Luka is also a nice place for a short break.</p>
        <p className="text-emerald-400">💬 We arrange transfers from Zagreb on request.</p>
      </div>
    ),
  },
];

const airports = [
  { city: "Sarajevo", distance: "85 km", flag: "🇧🇦" },
  { city: "Podgorica", distance: "178 km", flag: "🇲🇪" },
  { city: "Dubrovnik", distance: "184 km", flag: "🇭🇷" },
  { city: "Tivat", distance: "210 km", flag: "🇲🇪" },
  { city: "Belgrade", distance: "350 km", flag: "🇷🇸" },
  { city: "Zagreb", distance: "480 km", flag: "🇭🇷" },
];

export default function HowToGetHere() {
  const accordionItems = routes.map((route) => ({
    title: `${route.flag} ${route.city} — ${route.distance} · ${route.time}`,
    content: route.content,
  }));

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-16 md:py-24 px-4 min-h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="/images/tours/gallery/kako-doci-do-Tjentista.webp"
            alt="How to get to Tjentište – Sutjeska National Park"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Get to Tjentište
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Tjentište is the heart of Sutjeska National Park. You just get to us — we take care of everything else.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-400 font-mono text-sm">📍 GPS: 43.3631° N, 18.6831° E — Tjentište, Sutjeska National Park, BiH</span>
          </div>
        </div>
      </section>

      {/* Transfer banner */}
      <section className="py-10 px-4 bg-emerald-500/5 border-y border-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">We arrange transfers from every city</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            From Sarajevo, Belgrade, Dubrovnik, Podgorica, Mostar, Zagreb and other cities — we arrange a minibus or coach straight to Tjentište. The price is agreed in advance and depends on group size and starting point.
          </p>
          <WhatsAppTrackedLink
            href="https://wa.me/38765797200?text=Hello%2C%20I%E2%80%99m%20interested%20in%20a%20transfer%20to%20Tjenti%C5%A1te."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            💬 Ask about a transfer on WhatsApp
          </WhatsAppTrackedLink>
        </div>
      </section>

      {/* Routes by city */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Directions</h2>
          <p className="text-gray-400 mb-10">Tap a city to see the details — the route, bus lines and what to see on the way.</p>
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Airports */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Nearest airports</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {airports.map((a) => (
              <div key={a.city} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl mb-2">{a.flag}</div>
                <div className="font-semibold text-white">{a.city}</div>
                <div className="text-sm text-emerald-400 mt-1">{a.distance} from Tjentište</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foča bus station */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">🚌 Foča bus station</h2>
            <p className="text-gray-400 mb-4">Foča is the main bus hub for reaching Sutjeska National Park. For guests on our tours, we provide a free transfer from Foča to Tjentište.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-2 font-medium">Arrivals in Foča:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>Belgrade → Foča: 7:00 / 22:00</li>
                  <li>Podgorica → Foča: 7:45 / 9:00 / 13:45 / 23:50</li>
                  <li>Dubrovnik → Foča: 18:40</li>
                  <li>Sarajevo → Foča: several times a day</li>
                  <li>Trebinje → Foča: 5:00 / 7:45 / 8:05 / 12:45</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 mb-2 font-medium">Bus station contact:</p>
                <p className="text-gray-300">Tel: +387 58 211 805</p>
                <p className="text-gray-300">Tel: +387 58 211 809</p>
                <p className="text-emerald-400 mt-3">From Foča it is another 30 km to Tjentište — we arrange the transfer!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Ready?</h2>
          <p className="text-gray-400 mb-8">Get to Tjentište — we&apos;ll handle the rest. Sutjeska is waiting for you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en/kreiraj-avanturu"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
            >
              Build Your Adventure
            </Link>
            <Link
              href="/en#tours"
              className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              View Tours
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
