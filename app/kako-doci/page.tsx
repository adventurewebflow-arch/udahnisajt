import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "../components/Accordion";

export const metadata: Metadata = {
  title: "Kako doći do Tjentišta i NP Sutjeska | Udahni Avanturu",
  description: "Upute za dolazak do Tjentišta i Nacionalnog parka Sutjeska iz Sarajeva, Beograda, Dubrovnika, Podgorice, Mostara i Zagreba. Transfer organizujemo po dogovoru.",
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
    content: (
      <div className="text-gray-300 space-y-4">
        <p>Sarajevo je najbliži veći grad i najbliži aerodrom — samo 90 kilometara od Tjentišta. Put vodi magistralnim putem M-18 kroz Kijevo, Trnovo i Miljevinu. Dobro obilježen, asfaltirani put cijele dionice.</p>
        <p><strong className="text-white">Automobilom:</strong> Sarajevo → Kijevo → Trnovo → Dobro Polje → Miljevina → Tjentište. Pratite znakove za Foču i NP Sutjeska.</p>
        <p><strong className="text-white">Autobusom:</strong> Iz Istočnog Sarajeva postoji nekoliko svakodnevnih linija prema Foči — polasci u 7:45, 8:00, 9:00, 11:00, 13:00, 14:00, 16:00, 18:00, 19:00, 20:00h. Sa Foče organizujemo transfer do Tjentišta.</p>
        <p><strong className="text-white">Aerodrom Sarajevo</strong> je udaljen samo 85 km od Tjentišta — najbliži aerodrom za dolazak.</p>
        <p className="text-emerald-400">💬 Transfer iz Sarajeva organizujemo po dogovoru — javi nam se i dogovaramo sve.</p>
      </div>
    ),
  },
  {
    city: "Beograd",
    flag: "🇷🇸",
    distance: "~330 km",
    time: "~4h",
    content: (
      <div className="text-gray-300 space-y-4">
        <p>Iz Beograda postoje dvije dobre opcije puta. Obje su lijepe, asfaltne i prolaze kroz interesantne krajeve.</p>
        <p><strong className="text-white">Opcija 1 (preporučena):</strong> Beograd → Šabac → Zvornik → Vlasenica → Han Pijesak → Sokolac → Rogatica → Goražde → Foča → Tjentište. Granica na prelazu Šepak ili Mali Zvornik.</p>
        <p><strong className="text-white">Opcija 2:</strong> Beograd → Čačak → Užice → Mokra Gora → Višegrad → Goražde → Foča → Tjentište. Granica u Mokroj Gori — nešto ljepši put kroz Zlatibor.</p>
        <p><strong className="text-white">Autobusom:</strong> Iz Beograda (BAS stanica) postoje svakodnevne linije za Foču u 7:00 i 22:00h. Sa Foče organizujemo transfer.</p>
        <p><strong className="text-white">Usput svrati:</strong> Višegrad i čuvena &quot;Ćuprija na Drini&quot;, Andrićgrad, etno selo Mećavnik (Kusturica). Vrijedi zaustaviti se!</p>
        <p className="text-emerald-400">💬 Transfer iz Beograda organizujemo po dogovoru.</p>
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
        <p>Iz Dubrovnika do Tjentišta vodi jedan od najljepših puteva u regionu — kroz Trebinje, Bileću i Gacko. Prolazite kroz pravu planinsku Hercegovinu, daleko od turističkih gužvi na obali.</p>
        <p><strong className="text-white">Automobilom:</strong> Dubrovnik → Trebinje → Bileća → Gacko → Tjentište → Foča. Kroz Gacko skrenite prema Foči i prevoju Čemerno. Izgrađen je tunel kroz Čemerno — put je skraćen za više od pola sata.</p>
        <p><strong className="text-white">Autobusom:</strong> Iz Dubrovnika do Trebinja (20 km), odakle ima nekoliko dnevnih linija za Foču. Sa Foče organizujemo transfer.</p>
        <p><strong className="text-white">Aerodrom Dubrovnik</strong> je 184 km od Tjentišta — odlična polazna tačka za strane goste.</p>
        <p><strong className="text-white">Usput svrati:</strong> Trebinje je jedan od najljepših gradova regiona — manastir Hercegovina-Gračanica i manastir Tvrdoš sa čuvenim vinima. Obavezno!</p>
        <p className="text-emerald-400">💬 Transfer iz Dubrovnika organizujemo po dogovoru.</p>
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
        <p>Iz Podgorice put vodi kroz Nikšić i Plužine — i već na putu prema nama prolazite pored Pivskog jezera i kanjona Pive. To su isti krajevi koje obilazimo u našim turama.</p>
        <p><strong className="text-white">Automobilom:</strong> Podgorica → Nikšić → Plužine → Šćepan Polje (granica BiH/CG) → Foča → Tjentište. Nakon granice na Šćepan Polju vozite još samo 35 km do Tjentišta.</p>
        <p><strong className="text-white">Autobusom:</strong> Iz Podgorice postoji nekoliko dnevnih linija prema Foči. Sa Foče organizujemo transfer do Tjentišta.</p>
        <p><strong className="text-white">Aerodrom Podgorica</strong> je 178 km od Tjentišta.</p>
        <p><strong className="text-white">Usput svrati:</strong> Manastir Ostrog — uklesan u stijenu, jedna od najvećih pravoslavnih svetinja. Nalazi se blizu Nikšića.</p>
        <p className="text-emerald-400">💬 Transfer iz Podgorice organizujemo po dogovoru.</p>
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
        <p>Iz Mostara do Tjentišta vodi planinska ruta kroz Nevesinje i Foču. Rjeđe korišten put, ali jedinstven — prolazite kroz pravu planinu Hercegovinu.</p>
        <p><strong className="text-white">Automobilom:</strong> Mostar → Nevesinje → Gacko → Tjentište. Ili Mostar → Konjic → Foča → Tjentište (duže ali jednako lijepo).</p>
        <p><strong className="text-white">Autobusom:</strong> Iz Mostara postoje linije prema Foči (linija za Beograd prolazi kroz Foču). Polasci u 19:30 i 23:45h. Sa Foče organizujemo transfer.</p>
        <p className="text-emerald-400">💬 Transfer iz Mostara organizujemo po dogovoru.</p>
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
        <p>Najduža ruta, ali vrijedna svake minute. Iz Zagreba prolazite kroz Bosnu i stigneš u jedan od najljepših nacionalnih parkova u Evropi.</p>
        <p><strong className="text-white">Automobilom:</strong> Zagreb → Slavonski Brod → Banja Luka → Travnik → Sarajevo → Foča → Tjentište. Ili Zagreb → Split → Dubrovnik → Trebinje → Tjentište (ljepša, ali duža varijanta).</p>
        <p><strong className="text-white">Autobusom:</strong> Zagreb → Sarajevo (redovne linije), pa iz Sarajeva (Istočno Sarajevo) autobus prema Foči. Sa Foče organizujemo transfer.</p>
        <p><strong className="text-white">Aerodrom Zagreb</strong> je 480 km od Tjentišta.</p>
        <p><strong className="text-white">Usput svrati:</strong> Sarajevo je obaveza — grad koji mora se vidjeti. Banja Luka je također lijepa za kratak odmor.</p>
        <p className="text-emerald-400">💬 Transfer iz Zagreba organizujemo po dogovoru.</p>
      </div>
    ),
  },
];

const airports = [
  { city: "Sarajevo", distance: "85 km", flag: "🇧🇦" },
  { city: "Podgorica", distance: "178 km", flag: "🇲🇪" },
  { city: "Dubrovnik", distance: "184 km", flag: "🇭🇷" },
  { city: "Tivat", distance: "210 km", flag: "🇲🇪" },
  { city: "Beograd", distance: "350 km", flag: "🇷🇸" },
  { city: "Zagreb", distance: "480 km", flag: "🇭🇷" },
];

export default function KakoDoci() {
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
            alt="Kako doći do Tjentišta – NP Sutjeska"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Kako doći do Tjentišta
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-6">
            Tjentište je srce Nacionalnog parka Sutjeska. Ti samo stigneš do nas — sve ostalo organizujemo mi.
          </p>
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-6 py-3">
            <span className="text-emerald-400 font-mono text-sm">📍 GPS: 43.3631° N, 18.6831° E — Tjentište, NP Sutjeska, BiH</span>
          </div>
        </div>
      </section>

      {/* Transfer baner */}
      <section className="py-10 px-4 bg-emerald-500/5 border-y border-emerald-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Organizujemo transfer iz svih gradova</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Iz Sarajeva, Beograda, Dubrovnika, Podgorice, Mostara, Zagreba i ostalih gradova — organizujemo kombi ili autobus direktno do Tjentišta. Cijena po dogovoru, zavisno od broja osoba i polazišta.
          </p>
          <a
            href="https://wa.me/38765797200?text=Zdravo%2C%20zanima%20me%20transfer%20do%20Tjenti%C5%A1ta."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            💬 Pitaj za transfer na WhatsApp
          </a>
        </div>
      </section>

      {/* Rute po gradovima */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Upute za dolazak</h2>
          <p className="text-gray-400 mb-10">Klikni na grad da vidiš detalje — rutu, autobuske linije i preporuke šta vidjeti usput.</p>
          <Accordion items={accordionItems} />
        </div>
      </section>

      {/* Aerodromi */}
      <section className="py-12 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Najbliži aerodromi</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {airports.map((a) => (
              <div key={a.city} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl mb-2">{a.flag}</div>
                <div className="font-semibold text-white">{a.city}</div>
                <div className="text-sm text-emerald-400 mt-1">{a.distance} od Tjentišta</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autobuska stanica Foča */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">🚌 Autobuska stanica Foča</h2>
            <p className="text-gray-400 mb-4">Foča je glavna autobuska čvorišna tačka za dolazak u NP Sutjeska. Sa Foče organizujemo besplatan transfer do Tjentišta za učesnike naših tura.</p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-500 mb-2 font-medium">Dolasci u Foču:</p>
                <ul className="space-y-1 text-gray-300">
                  <li>Beograd → Foča: 7:00 / 22:00h</li>
                  <li>Podgorica → Foča: 7:45 / 9:00 / 13:45 / 23:50h</li>
                  <li>Dubrovnik → Foča: 18:40h</li>
                  <li>Sarajevo → Foča: višekratno dnevno</li>
                  <li>Trebinje → Foča: 5:00 / 7:45 / 8:05 / 12:45h</li>
                </ul>
              </div>
              <div>
                <p className="text-gray-500 mb-2 font-medium">Kontakt autobuske stanice:</p>
                <p className="text-gray-300">Tel: +387 58 211 805</p>
                <p className="text-gray-300">Tel: +387 58 211 809</p>
                <p className="text-emerald-400 mt-3">Sa Foče do Tjentišta je još 30 km — organizujemo transfer!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">Spreman si?</h2>
          <p className="text-gray-400 mb-8">Dođi do Tjentišta — ostatak je na nama. Sutjeska te čeka.</p>
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
