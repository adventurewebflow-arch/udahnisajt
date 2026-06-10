import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "O nama | Udahni Avanturu",
  description:
    "Udahni Avanturu — Petar i Nevena. Više od pet godina avantura kroz Sutjesku, Zelengoru, Trnovačko jezero i Perućicu. Male grupe, domaćinski pristup.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/o-nama",
  },
  openGraph: {
    title: "O nama | Udahni Avanturu",
    description:
      "Petar i Nevena — više od pet godina avantura kroz Sutjesku, Zelengoru, Trnovačko jezero i Perućicu. Male grupe, domaćinski pristup.",
    url: "https://www.udahniavanturu.com/o-nama",
    type: "website",
  },
};

export default function ONamaPage() {
  return (
    <main className="min-h-screen pt-20 bg-slate-950">
      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O nama — Petar i Nevena
          </h1>
          <div className="w-16 h-1 bg-emerald-400 mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Udahni Avanturu je nastao iz iskrene ljubavi prema prirodi, kretanju i životu napolju.
          </p>
        </div>
      </section>

      {/* Image grid */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10">
              <Image
                src="/images/tours/about/petar-nevena-1.webp"
                alt="Petar i Nevena – avanture u prirodi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10">
              <Image
                src="/images/tours/about/petar-nevena-2.webp"
                alt="Petar i Nevena – ture po NP Sutjesci i okolini"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-slate-300 leading-relaxed">
            <p>
              Udahni Avanturu je nastao iz iskrene ljubavi prema prirodi, kretanju i životu napolju. Mi smo Petar i Nevena, i već više od pet godina organizujemo avanture i ture kroz najljepše krajeve Bosne i Hercegovine — od Sutjeske i Zelengore, preko Trnovačkog jezera i Perućice, do mjesta koja se ne nalaze u klasičnim turističkim brošurama.
            </p>
            <p>
              Ideja Udahni Avanturu zvanično je pokrenuta prije 5 godina, kao mali, domaćinski projekat za ljude koji žele više od običnog izleta. Danas je to zajednica avanturista koji cijene dobru organizaciju, pravi ritam, sigurnost i atmosferu u kojoj se svako osjeća kao dio ekipe.
            </p>
            <p>
              Petar je višegodišnji skiper na divljim rijekama i licencirani vodič, sa bogatim iskustvom rada u zahtjevnim prirodnim uslovima. Zato je bezbjednost kod nas uvijek na prvom mjestu — svaka tura je pažljivo isplanirana, bez lažnih obećanja i bez žurbe. Radimo samo ono što znamo da možemo uraditi kako treba.
            </p>
            <p>
              Nevena je zadužena za kreativni i SEO smjer Udahni Avanturu, vodi naše društvene mreže, pažljivo gradi vizuelni identitet i stil komunikacije, ali je istovremeno i aktivno prisutna na turama. Kod nas nije sve iza ekrana — uvijek je neko od nas dvoje sa grupom, od prvog koraka do posljednjeg pozdrava.
            </p>
            <p>
              Pored nas, sarađujemo sa licenciranim vodičima za planinarstvo, kanjoning i druge specijalizovane aktivnosti, ljudima kojima vjerujemo i sa kojima dijelimo isti pristup radu. Naše ture nisu masovne, već pažljivo birane — da budu atraktivne, autentične i iskrene.
            </p>
            <p>
              Udahni Avanturu nije turistička traka. To je poziv da usporiš, vidiš prirodu onakvu kakva jeste i poneseš sa sobom osjećaj da si bio dio nečeg stvarnog.
            </p>
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10">
            Šta nas izdvaja
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Male grupe
              </h3>
              <p className="text-slate-400">
                Organizujemo ture sa malim brojem učesnika kako bismo osigurali
                personalizovani pristup i sigurnost.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Domaćinski pristup
              </h3>
              <p className="text-slate-400">
                Naš domaćinski pristup čini da se osjećate kao dio porodice, ne
                kao turista u grupi.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Najatraktivnije lokacije
              </h3>
              <p className="text-slate-400">
                Pažljivo birane lokacije – NP Sutjeska, Zelengora, Trnovačko,
                Perućica – najljepši dijelovi BiH.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#ture"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              Pogledaj ture
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
