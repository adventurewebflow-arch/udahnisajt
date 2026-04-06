import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "NP Sutjeska – Maglić, Perućica i Zelengora | Ture iz Foče",
  description:
    "Tri evropska rekorda na jednom mjestu — najviši vrh BiH, najstarija prašuma i najdublji kanjon. Hiking, rafting, kanjoning i kampovanje. Organizovano od A do Ž, male grupe, polazak iz Foče.",
  alternates: {
    canonical: `${BASE}/sutjeska`,
  },
};

export default function SutjeskaPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/kampovanje-trnovacko/trnovacko-jezero-card.webp"
          alt="Nacionalni park Sutjeska – Maglić i Trnovačko jezero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Bosna i Hercegovina</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Nacionalni park Sutjeska — najstariji nacionalni park u Bosni i Hercegovini
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Sutjeska je kao arterija u čovjekovom tijelu. Najstariji nacionalni park u Bosni i Hercegovini, osnovan 1962. godine, dom je prašume Perućice, najvišeg vrha BiH — Maglića, Zelengore i rijeke Sutjeske. Tuda prolazi i Via Dinarica, jedna od najpoznatijih planinarskih ruta u Evropi.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Rijeka Sutjeska i kanjon</h2>
          <p className="leading-8">
            Sutjeska je providna planinska rijeka boje neba i kamena. Može se piti direktno — nema ničega što bi je zagadilo. Pili smo je stotinu puta. Kanjon kroz koji teče je veličanstven na način koji se riječima ne može opisati — to se mora doživjeti.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Najveći otvoreni bazen na Balkanu</h2>
          <p className="leading-8">
            Na Tjentištu se nalazi i najveći otvoreni bazen na Balkanu. Puni se direktno vodom iz rijeke Sutjeske. Hladna, providna, osvježavajuća — idealna za odmor nakon planinarenja ili kao cilj sam po sebi.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Divlje životinje</h2>
          <p className="leading-8">
            Medvjedi, vukovi, orlovi, divokoze, divlje svinje, srne — Sutjeska je dom svima njima. Jednom smo vidjeli i risa, koji se rijetko pojavljuje. Priroda ovdje nije ukras — ona je stvarna i živa.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Istorijski značaj — Bitka na Sutjesci</h2>
          <p className="leading-8">
            Tjentište i Dolina heroja nose u sebi jedno od najvažnijih poglavlja Drugog svjetskog rata — Bitku na Sutjesci iz 1943. godine. Monumentalni Spomenik stoji kao podsjetnik na tu historiju. Zanimljivo — stranci se bolje educiraju o mjestima koja posjećuju nego naši ljudi. Dolaze na Tjentište znajući historiju, pitaju, istražuju. A koliko ima ljudi iz Foče koji nikad nisu bili na Magliću — a pred nosom im je.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Via Dinarica</h2>
          <p className="leading-8">
            Kroz Sutjesku prolazi Via Dinarica — planinska ruta koja spaja Alpe sa Dinaridima kroz sedam država. Planinari iz cijelog svijeta dolaze upravo zbog ovog dijela rute.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Prirodne ljepote</h2>
          <p className="leading-8">
            Sutjeska nije jedna destinacija — ona je cijela regija.{" "}
            <Link href="/maglic-planina" className="text-emerald-400 hover:underline">
              Maglić
            </Link>{" "}
            — najviši vrh BiH.{" "}
            <Link href="/trnovacko-jezero" className="text-emerald-400 hover:underline">
              Trnovačko jezero
            </Link>{" "}
            — oduševljenje, iako pripada Parku prirode Piva, svi prolaze kroz Sutjesku.{" "}
            <Link href="/zelengora" className="text-emerald-400 hover:underline">
              Zelengora
            </Link>{" "}
            — proglašena najljepšom planinom bivše Jugoslavije.{" "}
            <Link href="/perucica" className="text-emerald-400 hover:underline">
              Perućica
            </Link>{" "}
            — najstarija prašuma u Evropi.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kako doći</h2>
          <p className="leading-8">
            Posjet najčešće kreće iz Foče ili Tjentišta. Foča je ulazna tačka regije — odavde organizujemo sve transfere i polazišta.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organizovane ture u NP Sutjeska</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6">
            <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Kampovanje na Trnovačkom jezeru s usponom na Maglić</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 170€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/prasuma-perucica-vodopad-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Prašuma Perućica i vodopad Skakavac</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 90€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/kanjoning-hrcavka" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Kanjoning Hrčavka</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 130€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/srce-sutjeske-5-dana" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Srce Sutjeske – 5 dana</h3>
              <p className="text-slate-400 text-sm mb-3">5 dana / 4 noći • 550€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
