import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Maglić – najviši vrh Bosne i Hercegovine | Uspon, rute i savjeti",
  description:
    "Maglić (2.386m) — najviši vrh BiH sa pogledom koji seže do Jadrana. Uspon koji se pamti cijelog života. Rute sa Prijevora i Trnovačkog jezera, oprema i organizovane ture iz Foče. Rezerviši mjesto danas.",
  alternates: {
    canonical: `${BASE}/maglic-planina`,
  },
};

export default function MaglicPlaninaPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/uspon-na-maglic-savjeti.webp"
          alt="Uspon na Maglić – najviši vrh Bosne i Hercegovine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">NP Sutjeska</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Maglić — najviši vrh Bosne i Hercegovine
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Maglić (2.386 m) je najviši vrh Bosne i Hercegovine i jedna od najatraktivnijih planinarskih destinacija na Balkanu. Smješten u Nacionalnom parku Sutjeska, na granici između Bosne i Hercegovine i Crne Gore, Maglić nije samo planina — to je iskustvo koje se nosi sa sobom dugo nakon povratka.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Zašto se zove Maglić?</h2>
          <p className="leading-8">
            Ime nije slučajno. Lokalno stanovništvo nazvalo ga je Maglić upravo zbog magle koja ga često okružuje. Čak i kada meteorolozi najave lijepo vrijeme, planina zna da iznenadi. Jednom smo bili na samom vrhu kada je počeo grad usred ljeta — led veličine šljunka, munje i grmljavina, a okolo samo nebo i stijene. Ko god to doživi, ne zaboravi nikad. To je Maglić.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Pogled sa vrha</h2>
          <p className="leading-8">
            Po lijepom vremenu sa Maglića se vidi gotovo cijela regija — Perućica i njena prašuma direktno ispod, Durmitor u daljini, Zelengora, Jahorina, Volujak, Bioč, Pivsko jezero, Mratinje, Piva, Plužine, Foča. Panorama koja oduzima dah i koja se ne može opisati riječima — treba je doživjeti.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Ruta i težina</h2>
          <p className="leading-8">
            Najčešća ruta vodi sa Prijevora, na visini od oko 1.500 metara. Uspon traje 3 do 4 sata i zahtijeva dobru fizičku kondiciju i planinarsko iskustvo. Ovo nije šetnja — Maglić je ozbiljna planina sa strmim dionicama i kamenitim terenom gdje su planinske cipele obavezne. Obične patike nisu opcija.
          </p>
          <p className="leading-8">
            Težina uspona varira ovisno o tome kako organizuješ posjet. Ako kampuješ na Trnovačkom jezeru i napadaš Maglić drugog dana — tura je srednje zahtjevna jer si već na visini i odmoran. Ako ideš na jedan dan iz Foče — tura postaje zahtjevnija jer je sve u jednom danu.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Ludnica na granici</h2>
          <p className="leading-8">
            Ovo je detalj koji većina turista ne zna unaprijed: kada kampuješ na Trnovačkom jezeru, spavaš u Crnoj Gori. Jezero je na crnogorskoj strani granice. Ujutro se penješ na Maglić — najviši vrh Bosne i Hercegovine — i vraćaš se nazad u Crnu Goru da spavaš. Sljedeće jutro ponovo prelaziš u Bosnu. Sve pješice, kroz planinu, bez graničnih prelaza. Malo koji putnik može reći da je jedne noći spavao u jednoj državi, a vrhom planine bio u drugoj.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Voda na ruti</h2>
          <p className="leading-8">
            Na ruti prema Magliću postoji izvor na Carevom Dolu, ali zna da presuši — posebno u ljetnim mjesecima. Zlatno pravilo: uvijek ponesi svoje zalihe vode, minimum 2-3 litre. Na planini se ne eksperimentiše.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kafana kod Miloša i Ilije na Trnovačkom jezeru</h2>
          <p className="leading-8">
            Ovo je možda najljepši detalj cijele ture. Na obali Trnovačkog jezera, na skoro 1.520 metara nadmorske visine, stoji mala planinska kafana kod Miloša i Ilije. Rakija, pivo, kafa, čaj — sve što ti treba nakon uspona. U buretu od 100 litara hladi se pivo u ledenoj izvorskoj vodi. Ko god sjedne tu nakon Maglića i uzme to pivo — nikad neće zaboraviti taj okus. Pivo pije i ko nije nikad u životu.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kada ići?</h2>
          <p className="leading-8">
            Maglić je lijep od juna do oktobra — svaki period na svoj način. Juni donosi snijeg koji se topi i bujnu zelenu prirodu. Juli i august su najtopliji ali i najpromjenljiviji — upravo tada može iznenaditi grad ili nevrijeme. Septembar je možda najljepši: stabilnije vrijeme, manje gužve, zlatne boje na padinama.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Ko dolazi na Maglić?</h2>
          <p className="leading-8">
            Apsolutno svi. Mladi, stariji, iskusni planinari, oni koji prvi put stavljaju ruksak na leđa. Niko nikoga ne zna na početku ture. Na kraju — svi postanu prijatelji. Ne metaforički, nego stvarno. Dan danas postoje grupe ljudi koji su zajedno bili na Magliću prije 2-3 godine i dan danas si čestitaju praznike i pišu jedni drugima. Planina spaja ljude na način koji se teško objašnjava ali lako prepoznaje.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Šta ponijeti?</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-200 leading-8 pl-2">
            <li>Planinske cipele — obavezno, bez kompromisa</li>
            <li>Ruksak minimum 40L</li>
            <li>Topla jakna — čak i ljeti, na vrhu može biti hladno</li>
            <li>Minimum 2-3L vode</li>
            <li>Energetska hrana za uspon</li>
            <li>Kišna pelerina ili vjetrovka — Maglić je Maglić</li>
          </ul>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organizovane ture na Maglić</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Kampovanje na Trnovačkom jezeru s usponom na Maglić</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 170€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/maglic-trnovacko-jezero" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Maglić i Trnovačko jezero</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 95€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/tura-za-malo-jace-ljude-maglic-trnovacko-rafting" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Tura za malo jače ljude – Maglić, Trnovačko i rafting Tarom</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 235€</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
