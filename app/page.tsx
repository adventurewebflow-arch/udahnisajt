import Image from "next/image";
import Link from "next/link";
import AdventureCard from "./components/AdventureCard";
import GalleryPreview from "./components/GalleryPreview";
import InquiryForm from "./components/InquiryForm";
import { popularAdventures, premiumAdventures, dayTripAdventures } from "./data/adventures";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="relative min-h-[78vh]">
          <Image
            src="/hero.webp"
            alt="Udahni Avanturu hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 bg-gradient-to-b from-transparent to-slate-950" />
          </div>
          <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center justify-center px-4 py-20 text-center">
            <div className="max-w-3xl">
              <div className="mb-4 flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100/90">
                    Hiking • Kampovanje • Rafting
                  </span>
                </div>

                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Sutjeska</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">Park prirode Piva</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Durmitor</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                Otkrij prirodu <span className="text-emerald-400">Udahni avanturu</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-100/90 leading-relaxed drop-shadow-[0_10px_30px_rgba(0,0,0,0.75)]">
                Vaša vrata ka nezaboravnim avanturama u prirodi. Otkrijte ljepotu Bosne i Hercegovine sa nama.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="#kontakt"
                   className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-[0_18px_45px_-20px_rgba(16,185,129,0.65)]">
                  Pošalji upit
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
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Premium ture su privatne ture i strogo birane najatraktivnije lokacije. Mali broj učesnika, personalizovani pristup i nezaboravno iskustvo.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdventures.map((adventure) => (
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
