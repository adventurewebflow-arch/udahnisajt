import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Prašuma Perućica – jedna od dvije preostale u Evropi | Vodopad Skakavac 75m",
  description:
    "Stabla stara 300 godina, tišina koju ne možete zamisliti i vodopad koji pada 75 metara ravno. Perućica se ne posjećuje bez vodiča — mi ulazimo svake sedmice. Ture iz Foče od 90€.",
  alternates: {
    canonical: `${BASE}/perucica`,
  },
};

export default function PerucicaPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/skakavac.webp"
          alt="Vodopad Skakavac u prašumi Perućica"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">NP Sutjeska</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Prašuma Perućica — najstarija prašuma u Evropi
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Perućica nije šuma. Perućica je drugi svijet. Jedna od dvije preostale prašume u Evropi, zaštićena i netaknuta, u{" "}
            <Link href="/sutjeska" className="text-emerald-400 hover:underline">
              Nacionalnom parku Sutjeska
            </Link>
            , gdje stabla rastu i padaju po vlastitim zakonima već hiljadama godina.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Šta ćeš vidjeti</h2>
          <p className="leading-8">
            Ogromna stabla koja i dan danas stoje uspravno, visoka i moćna. I pored njih — stabla koja su pala ko zna kada, obrasla mahovinom, vraćaju se polako u zemlju. Prirodni krug koji se odvija bez čovjekove intervencije. Ta tišina prašume koja te polako uvodi — a onda počinje šum. Postaje sve jači. I odjednom — Skakavac.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Vodopad Skakavac — 75 metara slobodnog pada</h2>
          <p className="leading-8">
            Skakavac pada sa 75 metara i to se osjeća. Zvuk, prskanje, moć vode. Ali postoji i ruta koja te dovede direktno iznad vodopada — pogled odozgo na taj slobodni pad je iskustvo koje malo koji vodopad na Balkanu može pružiti.
          </p>
          <p className="leading-8">
            Cijeli izlet traje oko 5 sati. Spust je strm i zahtijeva pažnju i poznavanje terena. Nemoj ući bez vodiča — nisu šale. Pričaju da su dva Slovenca ušla u Perućicu i nikad ih nisu pronašli. Ako želiš produžiti avanturu u istom parku, kombinuj s kampovanjem na{" "}
            <Link href="/trnovacko-jezero" className="text-emerald-400 hover:underline">
              Trnovačkom jezeru
            </Link>{" "}
            i usponom na Maglić — pogledaj ture u gridu ispod.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Čuvari prašume</h2>
          <p className="leading-8">
            Na jednom izvoru u prašumi žive tri poskoka već više od 10 godina. Uvijek su tu. Zovemo ih čuvari prašume Perućice. Veličanstveni su — ali treba im prići s oprezom kada se nalijeva voda. Nisu agresivni ako ih ne uznemiriš. Dio su prašume kao i svako stablo.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kada ići?</h2>
          <p className="leading-8">
            Od maja do oktobra. Ljeto je idealno — vegetacija je bujna, vodopad ima punu snagu. Nakon kiše Skakavac je posebno impresivan.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organizovane ture</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/ture/prasuma-perucica-vodopad-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Prašuma Perućica i vodopad Skakavac</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 90€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/hrcavka-perucica-kanjoning-prasuma-skakavac" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Hrčavka kanjoning + Prašuma Perućica i Skakavac</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 255€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/kampovanje-trnovacko-jezero-maglic" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Kampovanje na Trnovačkom jezeru s usponom na Maglić</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 170€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
