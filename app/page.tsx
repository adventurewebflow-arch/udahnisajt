import Image from "next/image";
import Link from "next/link";
import AdventureCard from "./components/AdventureCard";
import HomeSchema from "./components/HomeSchema";
import GalleryPreview from "./components/GalleryPreview";
import InquiryForm from "./components/InquiryForm";
import Accordion from "./components/Accordion";
import NewsletterSection from "./components/NewsletterSection";
import { popularAdventures, premiumAdventures, dayTripAdventures, multiDayAdventures } from "./data/adventures";
import type { Metadata } from "next";

const BASE = "https://www.udahniavanturu.com";

const faqs = [
  {
    q: "Da li mogu ići sam/sama?",
    a: "Naravno! Možeš doći sam, sama, u paru ili sa ekipom — svejedno. Ovdje svi postanu ekipa. Naše grupe su male i atmosfera je takva da se svi upoznaju prvog dana.",
  },
  {
    q: "Da li je oprema za kampovanje obezbijeđena?",
    a: "Da, sva potrebna oprema je obezbijeđena — šatori, vreće za spavanje, podloge i kuhinja. Ti nosiš samo lični prtljag.",
  },
  {
    q: "Da li svako ima svoj šator?",
    a: "Da, svaki učesnik ima svoj šator. Nema dijeljenja — tvoj prostor, tvoja privatnost.",
  },
  {
    q: "Kako da rezervišem mjesto?",
    a: "Možeš rezervisati putem kontakt forme na sajtu, emailom, Instagram DM-om ili direktno na WhatsApp +387 65 797 200. Odgovaramo u roku od 1 sat.",
  },
  {
    q: "Koliko ljudi je potrebno za privatnu turu?",
    a: "Minimalan broj učesnika za organizaciju ture je 4 osobe. Privatne ture su moguće uz 20% veću cijenu po osobi — kontaktiraj nas za ponudu.",
  },
  {
    q: "Kakva oprema mi je potrebna?",
    a: "Posebna planinska oprema nije obavezna. U sezoni bez snijega dovoljne su jake patike (ne tenisice), ruksak dovoljno velik za ličnu higijenu, presvlaku i vodu, te štapovi ako ih koristiš. Pošaljemo ti detaljan spisak opreme prije ture.",
  },
  {
    q: "Postoji li dobna granica?",
    a: "Ne postoji! Gospođa Vesna je sa 71 godinom popela Maglić — najviši vrh BiH. Ture su prilagođene svim uzrastima i kondicijama. Važno je da si u dobroj formi za odabranu turu — savjetujemo te iskreno pri odabiru.",
  },
  {
    q: "Šta je uključeno u cijenu?",
    a: "Svaka tura ima detaljno naveden spisak što je uključeno i što nije — nema skrivenih troškova. Generalno su uključeni: transfer, vodič, ulaznice za nacionalne parkove, oprema i obroci kako je navedeno za svaku turu.",
  },
  {
    q: "Šta ako je loše vrijeme?",
    a: "Sigurnost je prioritet. U slučaju kiše, snijega ili bilo kakve situacije gdje ne možemo garantovati bezbjednost — tura se otkazuje ili pomjera. Obavještavamo sve učesnike pravovremeno putem WhatsApp grupe.",
  },
  {
    q: "Kako funkcioniše plaćanje?",
    a: "Rezervacija se potvrđuje uplatom avansa. Preostali iznos se uplaćuje najkasnije 10 dana prije polaska ture. Sve detalje o uplati dajemo pri rezervaciji.",
  },
];

const faqAccordionItems = faqs.map(({ q, a }) => ({ title: q, content: a }));

export const metadata: Metadata = {
  alternates: {
    canonical: BASE,
    languages: {
      sr: BASE,
      en: `${BASE}/en`,
    },
  },
};

export default function Home() {
  return (
    <main>
      <HomeSchema />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="relative min-h-[78vh]">
          <Image
            src="/hero.webp"
            alt="Udahni Avanturu hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[90%_70%] md:object-center"
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 bg-gradient-to-b from-transparent to-slate-950" />
          </div>
          <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center justify-center px-4 py-20 text-center">
            <div className="max-w-3xl">
              <div className="mb-4 flex flex-col items-center gap-2 animate-fade-in-up">
                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100/90">
                    Hiking • Rafting • Kanjoning • Kampovanje
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Sutjeska</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">Park prirode Piva</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Durmitor</span>
                </div>
              </div>

              <h1 className="animate-fade-in-up-delay-1 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                Sutjeska te čeka.{" "}
                <span className="text-emerald-400">Udahni avanturu.</span>
              </h1>

              <p className="animate-fade-in-up-delay-2 mt-4 text-sm sm:text-base md:text-lg text-slate-100/90 leading-relaxed drop-shadow-[0_10px_30px_rgba(0,0,0,0.75)]">
                Najviši vrh BiH. Najstarija prašuma Evrope. Najdublji kanjon Evrope. Divlja i netaknuta — ovo je Sutjeska.
              </p>

              <div className="animate-fade-in-up-delay-3 mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="/kreiraj-avanturu"
                   className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-[0_18px_45px_-20px_rgba(16,185,129,0.65)]">
                  Kreiraj svoju avanturu
                </a>
                <a href="#ture"
                   className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                  Pogledaj ture
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section id="ture" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Popularne ture</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
            <p className="text-slate-400 mt-4 text-lg">
              Dolaziš sam, u paru ili sa ekipom — svejedno. Ovdje svi postanu ekipa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tours Section */}
      <section id="premium" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Premium ture</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-slate-400 mt-4 text-lg mb-12">
            Dolaziš sam, u paru ili sa ekipom — svejedno. Ovdje svi postanu ekipa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      {/* Multi-day Tours Section */}
      <section id="visednevne" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Višednevne avanture</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Za one koji žele više od vikenda. Višednevne ture koje te stvarno promijene — planina, kanjon, jezero, autentični ljudi i iskustvo koje nosiš sa sobom zauvijek.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiDayAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips Section */}
      <section id="izleti" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Jednodnevni izleti</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Jednodnevne ture po dogovoru - idealne za one koji imaju ograničeno vrijeme ali žele uživati u prirodi.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTripAdventures.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} />
            ))}
          </div>
        </div>
      </section>

      <GalleryPreview />

      {/* About Section */}
      <section id="o-nama" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">O nama</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Male grupe</h3>
              <p className="text-slate-400">
                Organizujemo ture sa malim brojem učesnika kako bismo osigurali personalizovani pristup.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Domaćinski pristup</h3>
              <p className="text-slate-400">
                Naš domaćinski pristup čini da se osjećate kao dio porodice.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Najatraktivnije lokacije</h3>
              <p className="text-slate-400">
                Pažljivo birane lokacije koje predstavljaju najljepše dijelove BiH.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/o-nama"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Saznaj više
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection />

      <section id="faq" className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-2">Često postavljana pitanja</h2>
        <p className="text-slate-400 mb-10">Sve što trebaš znati prije prve avanture.</p>
        <Accordion items={faqAccordionItems} />
      </section>

      {/* Contact Form */}
      <section id="kontakt" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Kontaktirajte nas</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
