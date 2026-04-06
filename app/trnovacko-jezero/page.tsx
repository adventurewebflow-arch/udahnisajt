import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Trnovačko jezero – kampovanje, uspon na Maglić i katuni | Udahni Avanturu",
  description:
    "Kampuj na obali Trnovačkog jezera, osvoji Maglić i doručkuj na katunu kod domaćina. Bez mreže, bez žurbe — organizovane ture iz Foče sa licenciranim vodičem. Male grupe, autentično iskustvo.",
  alternates: {
    canonical: `${BASE}/trnovacko-jezero`,
  },
};

export default function TrnovackoJezeroPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/trnovacko-jezero-maglic-sutjeska.webp"
          alt="Trnovačko jezero s planinskom pozadinom Maglića"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">NP Sutjeska, Bosna i Hercegovina</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Trnovačko jezero – kampovanje, Maglić i tri dana bez mreže
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">

          {/* UVOD — autentičan, ne generički */}
          <p className="leading-8 text-lg">
            Na Prijevoru, na 1.662 metra, sjedi Miloš. Cijeli život živi tu, u maloj kamenoj kući bez struje i interneta.
            Kada prođete pored njega ujutro, on već kuha kafu. Nudi je svima. I tu negdje, između te kafe i prvog pogleda
            prema jezeru kroz magle, počinje ono zbog čega se ide na Trnovačko.
          </p>
          <p className="leading-8">
            Trnovačko jezero leži na 1.517 metara, okruženo Maglićem, Vodujakom i Biočem. Oblik srca, tirkizna voda,
            tišina koja nije prazna nego puna — ptica, vjetra, vode. Do njega se ne može automobilom. Nema mobilne mreže.
            Nema wi-fi-a. Ima samo planina, jezero i vi — što je, ispostavlja se, više nego dovoljno.
          </p>

          {/* QUICK CTA */}
          <div className="rounded-xl bg-emerald-900/30 border border-emerald-500/20 p-6">
            <p className="text-emerald-300 font-semibold mb-1">Spreman za Trnovačko jezero?</p>
            <p className="text-slate-300 text-sm mb-4">Kampovanje 3 dana od 170€ · Jednodnevni izlet od 75€ · Male grupe · Licencirani vodič</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition">
                Kampovanje + Maglić – 170€
              </Link>
              <Link href="/ture/trnovacko-jezero" className="inline-block border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 px-5 py-2.5 rounded-lg text-sm transition">
                Jednodnevni izlet – 75€
              </Link>
            </div>
          </div>

          {/* GDJE SE NALAZI */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Gdje se nalazi Trnovačko jezero</h2>
          <p className="leading-8">
            Jezero se nalazi u Nacionalnom parku Sutjeska, u Bosni i Hercegovini, na granici sa Crnom Gorom. Od Foče je
            udaljeno oko 50 kilometara — oko sat vožnje do Prijevora, a zatim 5 kilometara pješačenja do jezera. Staza
            traje sat i po do dva, ovisno o tempu. Nije tehnički zahtjevna — može je proći svako u dobroj fizičkoj formi,
            od tinejdžera do šezdesetogodišnjaka.
          </p>
          <p className="leading-8">
            Polazišna tačka za sve naše ture je Foča. Terenskim vozilima idemo do Prijevora, gdje počinje pješačenje.
            Na Prijevoru su katuni — planinski stanovi gdje se i danas živi kao prije 300 godina. Ovce, konji, kamene
            kućice, dim iz dimnjaka. I Miloš sa kafom.
          </p>

          {/* USPON NA MAGLIĆ */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Uspon na Maglić — najviši vrh BiH</h2>
          <p className="leading-8">
            Maglić je na 2.386 metara — najviši vrh Bosne i Hercegovine. Diže se direktno iznad Trnovačkog jezera.
            Sa vrha se vidi sve: jezero ispod vas, Volujak i Bioč sa strane, Crna Gora u daljini. Ljetni dan, vjetar
            koji smiruje, i osjećaj da ste na krovu jedne cijele zemlje.
          </p>
          <p className="leading-8">
            Uspon iz kampa na vrh i nazad traje oko četiri do pet sati, ovisno o tempu. Tehnički nije via ferrata,
            ali zadnji dio prema vrhu zahtijeva pažnju na terenu. Vodimo male grupe — ne trka, ne gužva. Oni koji
            ne žele na vrh ostaju uz jezero, šetaju obalom, kupaju se ako je toplo.
          </p>

          {/* KAMPOVANJE */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Kampovanje na obali jezera</h2>
          <p className="leading-8">
            Kamp je direktno uz jezero. Šatori, vatra, zvijezde — i apsolutna tišina osim vode i vjetra. Bez mreže.
            Bez signala. Telefon postaje fotoaparat i ništa više. Večera se kuha na vatri, a jutro počinje kafom dok
            magla još stoji nad vodom.
          </p>
          <p className="leading-8">
            Uz kamp je mala planinska kafana. Može se popiti pivo, čaj ili rakija. Sjedi se vani, gleda u jezero,
            razgovara. Nema žurbe. Nema programa koji mora biti ispoštovan do minute. Ima samo planina i onoliko
            vremena koliko vam treba.
          </p>
          <p className="leading-8">
            Svu opremu za kampovanje obezbjeđujemo mi — šatori, vreće za spavanje, podloge, kuhinja. Vi nosite
            samo lični prtljag i dobro raspoloženje.
          </p>

          {/* KATUNI */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Doručak na katunu — kod Miloša na Prijevoru</h2>
          <p className="leading-8">
            Drugi dan ujutro, prije ili poslije uspona, svraćamo do Miloša na Prijevoru. Uštipci, domaći kajmak,
            toplo mlijeko direktno od ovce, pršut koji miriše na dim. Sve što ima — napravio je tu, na planini,
            bez supermarketa i dostavnih servisa.
          </p>
          <p className="leading-8">
            Miloš na Prijevoru cijeli život živi onako kako mi idemo na planinu da se odmorimo. Razgovor s njim
            vrijedi jednako koliko i pogled s vrha Maglića — samo na drugi način.
          </p>

          {/* TURE KARTICE */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Naše ture na Trnovačko jezero</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <p className="text-xs text-emerald-400 uppercase tracking-widest mb-2">Najpopularnija</p>
              <h3 className="text-emerald-400 font-semibold mb-1">Kampovanje + Maglić</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći · 170€ po osobi</p>
              <p className="text-slate-400 text-xs mb-3">Kamp na jezeru, uspon na vrh BiH, doručak na katunu kod Miloša.</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/maglic-trnovacko-jezero" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Maglić i Trnovačko jezero</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan · 95€ po osobi</p>
              <p className="text-slate-400 text-xs mb-3">Zahtjevnija jednodnevna tura — vrh i jezero u jednom danu.</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/trnovacko-jezero" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Jednodnevni izlet</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan · 75€ po osobi</p>
              <p className="text-slate-400 text-xs mb-3">Opuštenija verzija — samo jezero, bez uspona na vrh.</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
          </div>

          {/* SEZONA */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Kada ići na Trnovačko jezero</h2>
          <p className="leading-8">
            Sezona je od juna do septembra. Juni i septembar su tiši — manje ljudi, svježiji zrak, ali temperatura
            noću može pasti i blizu nule, pa treba spavaća vreća za hladnije uslove. Juli i august su topli,
            jezero ima najljepšu boju, idealno za kupanje. Gužve su relativne — Trnovačko nikad nije masovni
            turizam jer do njega nema ceste.
          </p>
          <p className="leading-8">
            Planina radi šta želi. Jutro može biti vedro, podne maglovito, popodne opet lijepo. Dajemo vam
            spisak opreme koji pokriva sve scenarije — ponesite ga ozbiljno.
          </p>

          {/* ŠTA PONIJETI */}
          <h2 className="text-2xl font-bold text-white md:text-3xl">Šta ponijeti na Trnovačko jezero</h2>
          <p className="leading-8">
            Planinarske cipele su obavezne — ne tenisice, ne sandale. Slojevita odjeća jer temperatura varira
            tokom dana. Vjetrootporna jakna čak i u augustu. Ruksak 25 do 35 litara. Dovoljna hidratacija —
            na stazi ima izvora ali ponesite rezervu. Kapa i rukavice za noć u kampu čak i ljeti. Kamera
            ili telefon s punom baterijom — pejzaži ne čekaju.
          </p>
          <p className="leading-8 pb-4">
            Svu opremu za kampovanje (šatori, vreće za spavanje, kuhinja) obezbjeđujemo mi. Vaš ruksak
            treba da bude lagan — ovo je planinarenje, ne vojni marš.
          </p>

          {/* ZAVRŠNI CTA */}
          <div className="rounded-xl bg-slate-900 border border-white/10 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Rezervišite mjesto na Trnovačkom jezeru</h2>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Male grupe. Licencirani vodič s 15+ godina iskustva. Sva oprema uključena.
              Polazak iz Foče.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold px-6 py-3 rounded-lg transition">
                Kampovanje + Maglić – 170€
              </Link>
              <Link href="/kreiraj-avanturu" className="inline-block border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-lg transition">
                Kreiraj svoju avanturu
              </Link>
            </div>
          </div>

        </article>
      </section>
    </main>
  );
}
