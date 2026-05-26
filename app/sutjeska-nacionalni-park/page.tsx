import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Nacionalni park Sutjeska — Kompletan vodič za posjetioce 2026",
  description:
    "Sve što trebaš znati o NP Sutjeska — Maglić, Perućica, Trnovačko jezero, Zelengora. Organizovane ture sa licenciranim vodičem. Od 65€.",
  alternates: {
    canonical: `${BASE}/sutjeska-nacionalni-park`,
  },
  openGraph: {
    title: "Nacionalni park Sutjeska — Kompletan vodič za posjetioce 2026",
    description:
      "Najviši vrh BiH. Najstarija prašuma u Evropi. Najdublji kanjon u Evropi. Licencirane ture od 65€.",
    url: `${BASE}/sutjeska-nacionalni-park`,
    type: "website",
  },
  keywords:
    "nacionalni park sutjeska, sutjeska planinarenje, maglić hiking, prašuma perućica, trnovačko jezero, zelengora, ture bosna, organizovane ture sutjeska",
};

const destinations = [
  {
    name: "Maglić — 2.386 m",
    slug: "maglic-planina",
    image: "/images/tours/gallery/ekipa-ide-na-maglic.webp",
    desc: "Najviši vrh Bosne i Hercegovine. U vedar dan vidi se Jadransko more. Ruta sa Prijevora jedan je od najljepših jednodnevnih uspona na Balkanu — zahtjevna, ali nezaboravna.",
    tag: "Zahtjevno",
  },
  {
    name: "Trnovačko jezero",
    slug: "trnovacko-jezero",
    image: "/images/tours/gallery/trnovacko-jezero-najljepsa-slika.webp",
    desc: "Ledeno jezero u obliku srca na 1.517 m, na granici BiH i Crne Gore. Tirkizna voda, potpuna tišina i Miloševa planinska kafana gdje se pivo hladi u bačvi od 100 litara izvorske vode.",
    tag: "Umjereno",
  },
  {
    name: "Prašuma Perućica",
    slug: "perucica",
    image: "/images/tours/gallery/vodopad-skakavac-perucica.webp",
    desc: "Jedna od samo dvije preostale prašume u Evropi. Drveće starije od 300 godina. Vodopad Skakavac pada 75 metara slobodnog pada. Mjesto koje ljude mijenja — tiho, trajno.",
    tag: "Umjereno",
  },
  {
    name: "Planina Zelengora",
    slug: "zelengora",
    image: "/images/tours/gallery/zelengora-jezero.webp",
    desc: "Sedam ledena jezera, otvorene livade i panoramski grebeni. Divlje borovnice u augustu. Titova vila na Donjim Barima. Najpotcenjenija planina u BiH — jer većina ljudi jednostavno ne zna šta je tamo.",
    tag: "Lako do umjereno",
  },
  {
    name: "Kanjon Sutjeske",
    slug: null,
    image: "/images/tours/gallery/kanjon-sutjeske-zelengora.webp",
    desc: "Najdublji kanjon u Evropi. Rijeka Sutjeska teče kristalno čisto — možeš je piti direktno. Bogata pastrmkom, istorijski značajna iz Drugog svjetskog rata. Nema označenih staza — ovo je prava divljina.",
    tag: "Divlje",
  },
];

const tours = [
  { name: "Trnovačko jezero", price: "75 €", duration: "1 dan", slug: "trnovacko-jezero", difficulty: "Umjereno" },
  { name: "Maglić + Trnovačko jezero", price: "95 €", duration: "1 dan", slug: "maglic-trnovacko-jezero", difficulty: "Zahtjevno" },
  { name: "Perućica + Skakavac", price: "90 €", duration: "1 dan", slug: "prasuma-perucica-vodopad-skakavac", difficulty: "Umjereno" },
  { name: "Kanjoning Hrčavka", price: "130 €", duration: "1 dan", slug: "kanjoning-hrcavka", difficulty: "Umjereno" },
  { name: "Zelengora jezera", price: "70 €", duration: "1 dan", slug: "zelengora-jezera-vidikovci", difficulty: "Lako" },
  { name: "Jeep safari Zelengora", price: "70 €", duration: "1 dan", slug: "jeep-safari-zelengora", difficulty: "Lako" },
  { name: "Kampovanje Trnovačko + Maglić", price: "170 €", duration: "3 dana", slug: "kampovanje-trnovacko-jezero-maglic", difficulty: "Umjereno" },
  { name: "Srce Sutjeske — 5 dana", price: "550 €", duration: "5 dana", slug: "srce-sutjeske-5-dana", difficulty: "Umjereno" },
];

const faqs = [
  {
    q: "Da li mi treba vodič u Nacionalnom parku Sutjeska?",
    a: "Toplo preporučujemo. Ljudi su izgubili život na Magliću bez vodiča. U većini parka nema mobilnog signala, staze nisu uvijek jasno označene, a teren se brzo mijenja. Naši vodiči znaju svaki metar parka. Sigurnost je uvijek na prvom mjestu.",
  },
  {
    q: "Koliko košta ulaz u park?",
    a: "Ulaz u Nacionalni park Sutjeska je 10 KM (približno 5 €) po osobi. Park prirode Piva (kroz koji prolaziš na putu ka Trnovačkom jezeru) je 1 € po osobi za jednodnevnu posjetu. Oboje je uključeno u cijenu naših tura.",
  },
  {
    q: "Ima li mobilnog signala u NP Sutjeska?",
    a: "Vrlo malo ili uopšte nema. Ovo je prava divljina. Neke mreže imaju slab signal na Tjentištu, ali čim kreneš u planine — offline si. To je dio iskustva.",
  },
  {
    q: "Mogu li rezervisati turu samo za jednu osobu?",
    a: "Da. Solo ture su moguće — cijena je nešto viša od grupnih jer organizujemo sve za jednu osobu. Piši nam na WhatsApp i dogovorimo.",
  },
  {
    q: "Koliko unaprijed treba da rezervišem?",
    a: "U većini slučajeva možemo organizovati turu i sa jednodnevnim najavom. Imamo vodiče, vozila i svu opremu spremnu. Ipak, za višednevne ture i u vršnoj sezoni (jul–august), nekoliko dana unaprijed je bolje.",
  },
  {
    q: "Kakva mi je potrebna kondicija za Maglić?",
    a: "Maglić zahtijeva dobru fizičku spremu. Nije tehnički uspon, ali je cjelodnevni napor — oko 7–8 sati hoda sa značajnim usponom. Ako nisi u redovnoj fizičkoj aktivnosti, iskreno preporučujemo Trnovačko jezero ili Zelengoru. Radije budemo iskreni nego da se mučiš.",
  },
  {
    q: "Koja je najlakša tura u parku?",
    a: "Zelengora — tura jezera i vidikovaca ili jeep safari — ne zahtijeva posebnu kondiciju. Jeep safari je u potpunosti vozilom, sa kratkim šetnjama do vidikovaca i jezera. Idealno za porodice ili sve koji žele vidjeti park bez zahtjevnog planinarenja.",
  },
  {
    q: "Mogu li slobodno kampovati u parku?",
    a: "Kampovanje je dozvoljeno samo na označenim mjestima. To je prvenstveno radi tvoje sigurnosti — u parku ima divlje faune. Organizujemo kampovanje na Tjentištu i na Trnovačkom jezeru sa kompletnom opremom.",
  },
  {
    q: "Gdje gosti spavaju na Tjentištu?",
    a: "Imamo kamp na Tjentištu sa bungalovima — od jednokrevetnih do grupa od 8 osoba. Kamp ima restoran, bar, bazen i sve što moderni kamp nudi. Nalazi se na ulazu u nacionalni park — budiš se u planinama.",
  },
  {
    q: "Koje je najbolje vrijeme godine za posjetu?",
    a: "Od juna do oktobra. Jun donosi divlje cvijeće i bujnu zelenu. Jul i august su najtopliji — divlje borovnice na Zelengori u augustu. Septembar je možda najljepši mjesec: stabilno vrijeme, zlatne boje, manje gužve. Oktobar donosi jesenje boje i dramatično nebo.",
  },
];

export default function SutjeskaNacionalniParkPage() {
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
            Bosna i Hercegovina · NP Sutjeska
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
            Nacionalni park Sutjeska
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl leading-relaxed mb-6">
            Najstariji nacionalni park u BiH. Najviši vrh. Posljednja prašuma. Najdublji kanjon. Sve u nekoliko sati vožnje jedno od drugog.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/ture"
              className="inline-flex items-center justify-center px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              Pogledaj sve ture →
            </Link>
            <a
              href="https://wa.me/38765797200?text=Zdravo%2C%20%C5%BEelim%20da%20posjetim%20Nacionalni%20park%20Sutjeska."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold rounded-xl transition-colors"
            >
              Pitaj na WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="border-y border-slate-800 bg-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { num: "1962", label: "Godina osnivanja" },
            { num: "43.000", label: "Hektara divljine" },
            { num: "2.386 m", label: "Najviši vrh — Maglić" },
            { num: "75 m", label: "Vodopad Skakavac" },
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
          <h2 className="text-3xl font-bold text-white mb-6">Šta je Nacionalni park Sutjeska?</h2>
          <p className="text-slate-300 leading-8 mb-4">
            Sutjeska je najstariji nacionalni park u Bosni i Hercegovini, osnovan 1962. godine. Pokriva 43.000 hektara planina, kanjona, rijeka i šuma u jugoistočnom dijelu zemlje, blizu Foče.
          </p>
          <p className="text-slate-300 leading-8 mb-4">
            Unutar granica parka: najviši vrh Bosne i Hercegovine (Maglić, 2.386 m), jedna od samo dvije preostale prašume u Evropi (Perućica), jedan od najdubljih kanjona u Evropi (kanjon Sutjeske) i sedam ledenskih jezera na planini Zelengori.
          </p>
          <p className="text-slate-300 leading-8">
            U većini parka nema mobilnog signala. Putevi su loši ili ne postoje u planinama. To nije problem — upravo zato je ovo jedno od posljednjih zaista divljih mjesta u Evropi.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-white mb-2">Kamo ići</h2>
        <p className="text-slate-400 mb-10">Pet destinacija, svaka potpuno drugačija. Većina posjetilaca vidi dvije ili tri na jednom putovanju.</p>
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
                  <Link href={`/${d.slug}`} className="text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
                    Pročitaj cijeli vodič →
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
          <h2 className="text-3xl font-bold text-white mb-10">Kada posjetiti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: "Maj – jun", title: "Divlje cvijeće i vodopadi", desc: "Snijeg se topi na Magliću, Skakavac pun snage, staze oživljavaju u bojama. Park na svom najzelenijem." },
              { month: "Jul – august", title: "Vrh sezone", desc: "Najtoplije temperature. Divlje borovnice na Zelengori. Najduži dani za viševršne izlete. Rezerviši ranije — tada dolazi većina ljudi." },
              { month: "Septembar", title: "Najljepši mjesec", desc: "Stabilno vrijeme, zlatne boje, manje gužve. Naša lična preporuka za prvu posjetu. Skoro savršeni uslovi." },
              { month: "Oktobar", title: "Jesenje boje", desc: "Dramatično nebo, kestenjaste šume, hladna jutra. Manje tura u ponudi, ali pejzaž je izuzetan za one koji dođu." },
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
        <h2 className="text-3xl font-bold text-white mb-2">Kako doći</h2>
        <p className="text-slate-400 mb-10">Tjentište je glavno selo u parku — sve naše ture polaze odavde.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { city: "Sarajevo", flag: "🇧🇦", dist: "130 km", time: "~2 sata", note: "Najbliži aerodrom. Ruta preko Trnova i Miljevine — kroz kanjon Bistrica." },
            { city: "Dubrovnik", flag: "🇭🇷", dist: "230 km", time: "~3 sata", note: "Preko Trebinja i Gacka. Jedna od najljepših vožnji u regiji." },
            { city: "Podgorica", flag: "🇲🇪", dist: "180 km", time: "~2,5 sata", note: "Preko Nikšića i Šćepan Polja. Uz Pivsko jezero na putu." },
            { city: "Beograd", flag: "🇷🇸", dist: "330 km", time: "~4 sata", note: "Preko Foče. Mogućnost zaustavljanja u Andrićgradu i Višegradu." },
            { city: "Mostar", flag: "🇧🇦", dist: "160 km", time: "~2,5 sata", note: "Preko Nevesinja i Gacka." },
            { city: "Zagreb", flag: "🇭🇷", dist: "550 km", time: "~6 sati", note: "Preko Sarajeva. Vrijedi zaustaviti se u Sarajevu na putu." },
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
          Organizujemo transfere iz svih gradova iznad. Piši nam na WhatsApp za cijenu.
        </p>
      </section>

      {/* Tours */}
      <section className="bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-2">Naše ture</h2>
          <p className="text-slate-400 mb-10">Jednodnevni izleti i višednevne avanture. Sve uključuje licenciranog vodiča, off-road prevoz i ulaznice za park.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tours.map((t) => (
              <Link
                key={t.slug}
                href={`/ture/${t.slug}`}
                className="flex items-center justify-between bg-slate-900 rounded-xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div>
                  <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">{t.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{t.duration} · {t.difficulty}</p>
                </div>
                <div className="text-right">
                  <p className="text-emerald-400 font-bold text-lg">{t.price}</p>
                  <p className="text-slate-500 text-xs">po osobi</p>
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
            <p className="text-emerald-400 text-xs uppercase tracking-widest mb-3">Tvoj vodič</p>
            <h2 className="text-3xl font-bold text-white mb-4">Petar Kostić</h2>
            <p className="text-slate-300 leading-8 mb-4">
              Licencirani planinski vodič i licencirani skiper sa više od 15 godina iskustva u Nacionalnom parku Sutjeska i okolnim Dinaridima. Rođen i sa baze u Foči.
            </p>
            <p className="text-slate-300 leading-8 mb-4">
              Petar je naučio plivati i roniti u rijeci Tari. Zna Maglić dovoljno dobro da zna kada se okrenuti. Zna tri zmije koje čuvaju izvor u Perućici. Zna Miloša na Trnovačkom jezeru.
            </p>
            <p className="text-slate-300 leading-8 mb-6">
              Uvijek smo u kontaktu sa Gorskom službom spašavanja. Sigurnost je jedina stvar koja se nikad ne kompromituje.
            </p>
            <a
              href="https://wa.me/38765797200"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Kontaktiraj Petra na WhatsApp
            </a>
          </div>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
            <Image
              src="/images/tours/blog-trnovacko-perucica-rafting/ekipa-prasuma.webp"
              alt="Petar Kostić — licencirani vodič u Nacionalnom parku Sutjeska"
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
          <h2 className="text-3xl font-bold text-white mb-2">Često postavljana pitanja</h2>
          <p className="text-slate-400 mb-10">Sve što trebaš znati prije posjete Nacionalnom parku Sutjeska.</p>
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
        <h2 className="text-3xl font-bold text-white mb-4">Spreman za Sutjesku?</h2>
        <p className="text-slate-400 mb-8 max-w-xl mx-auto">
          Piši nam na WhatsApp — odgovaramo u roku od jednog sata i možemo organizovati turu i sa jednodnevnim najavom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/38765797200?text=Zdravo%2C%20%C5%BEelim%20da%20posjetim%20Nacionalni%20park%20Sutjeska."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
          >
            WhatsApp — +387 65 797 200
          </a>
          <Link
            href="/ture"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-slate-300 hover:bg-slate-800 font-semibold rounded-xl transition-colors"
          >
            Pogledaj sve ture
          </Link>
        </div>
      </section>

    </main>
  );
}
