import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const KAKO_DOCI_MAP_SRC = "/images/tours/gallery/kako-doci-do-Tjentista.webp";

export const metadata: Metadata = {
  title: "Kako doći do Tjentišta i NP Sutjeska | Udahni Avanturu",
  description:
    "Upute za dolazak do Tjentišta i Nacionalnog parka Sutjeska iz Sarajeva, Beograda, Dubrovnika, Podgorice, Mostara i Zagreba. Transfer organizujemo po dogovoru.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/kako-doci",
  },
};

const routes = [
  {
    city: "Sarajevo",
    flag: "🇧🇦",
    distance: "~90 km",
    time: "~1h 45min",
    description:
      "Najbrži put vodi preko Kalinovika i Foče. Magistralni put M-18, dobro obilježen.",
    bus: "Postoje direktne autobuske linije Sarajevo → Foča. Sa Foče do Tjentišta organizujemo transfer.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
  {
    city: "Beograd",
    flag: "🇷🇸",
    distance: "~330 km",
    time: "~4h",
    description: "Put vodi kroz Užice i Foču. Autoput E-763 do Požege, pa magistrala prema Foči.",
    bus: "Autobuske linije Beograd → Foča postoje. Organizujemo transfer sa Foče do Tjentišta.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
  {
    city: "Dubrovnik",
    flag: "🇭🇷",
    distance: "~230 km",
    time: "~3h",
    description:
      "Put vodi kroz Trebinje i Foču. Spektakularna vožnja uz Jadransku magistralu i kanjon Trebišnjice.",
    bus: "Moguće kombinovati autobus do Trebinja ili Foče, odakle organizujemo transfer.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
  {
    city: "Podgorica",
    flag: "🇲🇪",
    distance: "~180 km",
    time: "~2h 30min",
    description:
      "Put vodi kroz Nikšić i Plužine. Prolazite pored Pivskog jezera — već dio avanture.",
    bus: "Autobuske linije do Foče postoje. Transfer od Foče do Tjentišta organizujemo.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
  {
    city: "Mostar",
    flag: "🇧🇦",
    distance: "~160 km",
    time: "~2h 30min",
    description: "Put vodi kroz Nevesinje i Foču. Planinska ruta sa lijepim pejzažima.",
    bus: "Autobuske linije Mostar → Foča postoje. Transfer sa Foče organizujemo.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
  {
    city: "Zagreb",
    flag: "🇭🇷",
    distance: "~550 km",
    time: "~6h",
    description:
      "Put vodi kroz Slavonski Brod i Sarajevo, ili kroz Split i Dubrovnik. Najduži put ali vrijedan svake minute.",
    bus: "Autobuske linije Zagreb → Sarajevo postoje, odakle nastavljate prema Tjentištu.",
    coordinates: "GPS: 43.4071° N, 18.7631° E",
  },
];

export default function KakoDoci() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Kako doći do Tjentišta</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tjentište je srce Nacionalnog parka Sutjeska. Mi organizujemo sve od Tjentišta nadalje — ti samo trebaš stići do nas.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-400 text-lg">📍</span>
            <span className="text-emerald-400 font-medium">Tjentište, NP Sutjeska, Bosna i Hercegovina</span>
          </div>
        </div>

        <figure className="max-w-5xl mx-auto mt-10 md:mt-14">
          <div className="relative w-full min-h-[220px] aspect-[4/3] md:aspect-[16/10] md:min-h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/40 ring-1 ring-white/5 bg-slate-900/80">
            <Image
              src={KAKO_DOCI_MAP_SRC}
              alt="Pregled smjerova i udaljenosti do Tjentišta i Nacionalnog parka Sutjeska"
              fill
              className="object-contain object-center p-2 sm:p-3 md:p-4"
              sizes="(max-width: 768px) 100vw, 1024px"
              priority
            />
          </div>
          <figcaption className="mt-4 text-center text-sm text-slate-500 max-w-2xl mx-auto">
            Pregled ruta i udaljenosti do Tjentišta — detaljne upute po gradovima su ispod.
          </figcaption>
        </figure>
      </section>

      <section className="py-12 px-4 bg-emerald-500/5 border-y border-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Organizujemo transfer</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Iz Sarajeva, Beograda, Dubrovnika, Podgorice, Mostara i Zagreba organizujemo transfer do Tjentišta — po dogovoru, nije uključen u cijenu ture. Kontaktiraj nas za detalje.
          </p>
          <a
            href="https://wa.me/38765797200?text=Zdravo%2C%20zanima%20me%20transfer%20do%20Tjenti%C5%A1ta."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <span>💬</span> Pitaj za transfer
          </a>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Upute za dolazak</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {routes.map((route) => (
              <div
                key={route.city}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{route.flag}</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{route.city}</h3>
                    <div className="flex gap-4 text-sm text-gray-400 mt-1">
                      <span>🚗 {route.distance}</span>
                      <span>⏱️ {route.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-3">{route.description}</p>
                <p className="text-gray-400 text-sm mb-3">🚌 {route.bus}</p>
                <p className="text-emerald-400 text-xs font-mono">{route.coordinates}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11611.123456789!2d18.6831!3d43.3631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758dcb4b7c3b5e5%3A0x1234567890abcdef!2sTjenti%C5%A1te%2C%20Bosna%20i%20Hercegovina!5e0!3m2!1sen!2sba!4v1234567890"
              width="100%"
              height={400}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tjentište na karti"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Spreman si?</h2>
          <p className="text-gray-400 mb-8">Dođi do Tjentišta — ostatak je na nama.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kreiraj-avanturu"
              className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
            >
              Kreiraj svoju avanturu
            </Link>
            <Link
              href="/#ture"
              className="px-8 py-4 border border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              Pogledaj ture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
