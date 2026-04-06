import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Zelengora – 9 planinskih jezera i panorame | Hiking i jeep safari iz Foče",
  description:
    "Devet jezera, vidikovci na sve strane i nijedno turističko razgledanje. Zelengora se može pješice, jeepom ili kombinirano — organizovane ture iz Foče sa licenciranim vodičem. Od 70€ po osobi.",
  alternates: {
    canonical: `${BASE}/zelengora`,
  },
};

export default function ZelengoraPage() {
  return (
    <main className="min-h-screen bg-slate-950 pt-20">
      <section className="relative h-[42vh] min-h-[320px] flex items-center">
        <Image
          src="/images/tours/blog/zelengora-jezera-vidikovci.webp"
          alt="Zelengora – jezera i vidikovci"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-slate-950" />
        <div className="relative z-10 mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">NP Sutjeska</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Zelengora — najljepša planina bivše Jugoslavije
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <p className="leading-8 text-lg">
            Ime sve kaže — Zelen Gora. Planina toliko zelena da su je proglasili najljepšom planinom bivše Jugoslavije. Smještena u srcu{" "}
            <Link href="/sutjeska" className="text-emerald-400 hover:underline">
              Nacionalnog parka Sutjeska
            </Link>
            , Zelengora nije jedna tačka na karti — to je cijeli svijet jezera, vidikovaca, livada i tišine.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Koliko jezera ima Zelengora?</h2>
          <p className="leading-8">
            Više nego što misliš. Orlovačko, Štirinsko, Kotlaničko, Bijelo, Crno, Kladopoljsko, Borlovačko, Donje bare, Gornje bare — svako jezero ima svoj karakter, svoju boju, svoje okruženje. Orlovačko je možda najpoznatije i mnogima najljepše. Ali pravi poznavatelji znaju da Zelengora ima još toga da pokaže.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Tri cjeline Zelengore</h2>
          <p className="leading-8">
            Zelengora nije jedna ruta — ona ima tri različite cjeline, svaka sa svojom pričom.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Prva cjelina: Borić, Donje i Gornje bare, Uglješin vrh</h3>
              <p className="leading-8">
                Vidikovac Borić je prelijepo mjesto sa kojeg se vidi kanjon Sutjeske i{" "}
                <Link href="/maglic-planina" className="text-emerald-400 hover:underline">
                  Maglić
                </Link>{" "}
                ti je ispred čela. Tu su odmah Donje i Gornje bare, a u blizini je i Uglješin vrh. Na Čemernu, koje gledamo sa vidikovca Borić, nalazi se granica između Bosne i Hercegovine — i evo detalja koji malo ko zna: sa jedne strane Čemerna voda teče prema Jadranskom moru, a sa druge prema Crnom moru. Dva sliva, jedan pogled.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Druga cjelina: Bregoč, Orlovačko, Kotlaničko, Štirinsko, Borlovačko jezero</h3>
              <p className="leading-8">
                Bregoč je najviši vrh Zelengore na 2.017 metara. Uspon traje oko 2 sata i namijenjen je ljudima umjerene kondicije. Ova cjelina obuhvata najpoznatija jezera Zelengore — Orlovačko, Kotlaničko, Štirinsko i Borlovačko.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2">Treća cjelina: Pašina poljana, Crno i Bijelo jezero</h3>
              <p className="leading-8">
                Mirniji, udaljeniji dio Zelengore — idealan za one koji žele tišinu i netaknutu prirodu dalje od glavnih ruta. Tu možete jahati konje i obići Crno i Bijelo jezero.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Jeep safari — zvučnik od kanistera i chill muzika</h2>
          <p className="leading-8">
            Zelengora se može doživjeti i drugačije — džipom bez cerade, sa udobnim sjedalima i zvučnikom ugrađenim u kabin od željeznog kanistera. Kad krene chill muzika kroz planinu, a pred tobom se otvori pogled na Kotlaničko jezero i počinje Hercegovačka ljepota — to je osjećaj koji se ne zaboravlja. Panoramska vožnja koja spaja uživanje i avanturu.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Divlje životinje</h2>
          <p className="leading-8">
            Na Zelengori nisi sam. Divokoze su česte — viđali smo ih redovno. Srndaće smo gledali kako trče po proplancima. Zelengora je dom divljini koja ne poznaje turiste.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kampovanje pored jezera</h2>
          <p className="leading-8">
            Na Zelengori možeš kampovati pored bilo kojeg jezera. Šator uz vodu, zvijezde iznad, tišina planine — to je Zelengora u svom punom sjaju.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Kada ići?</h2>
          <p className="leading-8">
            Zelengora je prelijepa u svako doba:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-200 leading-8 pl-2">
            <li><strong>Juni</strong> — tek zeleni, vegetacija kasni ali je sve svježe i bujno</li>
            <li><strong>Juli/Avgust</strong> — sve zeleno, jezera topla, livade u cvijetu</li>
            <li><strong>Jesen</strong> — zlatna, crvena, žuta — mijenja boje kao malo koja planina</li>
          </ul>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organizovane ture na Zelengori</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Link href="/ture/zelengora-jezera-vidikovci" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Zelengora – jezera i vidikovci</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 70€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/zelengora-uspon-bregoč" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Zelengora – uspon na Bregoč</h3>
              <p className="text-slate-400 text-sm mb-3">1 dan • 70€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
            <Link href="/ture/kampovanje-zelengora-bregoč-jeep-safari" className="block p-5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/40 transition">
              <h3 className="text-emerald-400 font-semibold mb-1">Kampovanje na Zelengori + Jeep safari</h3>
              <p className="text-slate-400 text-sm mb-3">3 dana / 2 noći • 160€ po osobi</p>
              <span className="text-emerald-400 text-sm">Pogledaj turu →</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
