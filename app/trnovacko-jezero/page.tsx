import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const BASE = "https://www.udahniavanturu.com";

export const metadata: Metadata = {
  title: "Trnovačko jezero – vodič, kampovanje i uspon na Maglić | Udahni Avanturu",
  description:
    "Saznajte sve o Trnovačkom jezeru: kako doći, gdje kampovati, kada posjetiti i kako izgleda uspon na Maglić. Praktični savjeti za jedan od najljepših planinskih jezera na Balkanu.",
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
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-emerald-300">Ikonsko planinsko jezero</p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Trnovačko jezero – vodič, kampovanje i uspon na Maglić
          </h1>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="space-y-8 text-slate-200">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Zašto je Trnovačko jezero posebno mjesto</h2>
          <p className="leading-8">
            Trnovačko jezero smatra se jednim od najprepoznatljivijih prirodnih simbola regije – poznato po obliku srca,
            tirkiznoj vodi i dramatičnom planinskom okruženju ispod masiva Maglića. Za mnoge posjetioce ovo je mjesto koje
            definiše njihovu uspomenu na Nacionalni park Sutjeska i šire Dinarsko gorje. Ono što jezero čini posebnim nije samo
            izgled na fotografijama, već cijela atmosfera: tiha jutra, široke kamenite padine, promjena svjetlosti tokom dana i
            osjećaj udaljenosti od pretrpanih turističkih ruta.
          </p>
          <p className="leading-8">
            Bilo da dolazite na jednodnevnu šetnju ili kao dio višednevnog kampovanja, Trnovačko nudi jak kontrast. S jedne
            strane, put do jezera je aktivan i nagrađujući. S druge, kada stignete, tempo se prirodno usporava. Možete hodati
            obalom, odmarati se, fotografirati iz različitih uglova, a u toplijim periodima čak i plivati. Ova ravnoteža pokreta
            i mira čini destinaciju idealnom i za iskusne planinare i za putnike koji žele impresivan planinski pejzaž bez tehnički
            zahtjevnih ruta.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Gdje se nalazi i kako doći do Trnovačkog jezera</h2>
          <h3 className="text-xl font-semibold text-emerald-300">Pristup i stil planinarenja</h3>
          <p className="leading-8">
            Većina organizovanih tura koristi terensko vozilo do višeg polaznog mjesta, nakon čega se nastavlja pješice do
            jezera. Šetnja je obično umjerene težine i može je završiti većina učesnika sa osnovnom planinarskom kondicijom.
            Tačno vrijeme zavisi od varijante rute, tempa grupe i vremena, ali cilj je obično ujednačen ritam s redovitim kratkim
            pauzama. Teren uključuje otvorene planinske dionice i neravne površine gdje je stabilna obuća važna.
          </p>
          <h3 className="text-xl font-semibold text-emerald-300">Najbolji uslovi i sezonska razmatranja</h3>
          <p className="leading-8">
            Kasno proljeće do rane jeseni predstavlja glavnu sezonu. Usred ljeta tople temperature mogu povećati zamor na
            izloženim dijelovima, pa se preporučuje rano polazak i dovoljna hidratacija. U ranoj i kasnoj sezoni temperature na
            visini mogu biti hladne, posebno ujutro i navečer. Čak i kada prognoza izgleda dobro u nižim dolinama, planinsko
            vrijeme može se brzo promijeniti, pa uvijek treba imati u ruksaku zaštitu od kiše i topli sloj.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Uspon na Maglić iznad Trnovačkog jezera</h2>
          <p className="leading-8">
            Maglić, najviši vrh Bosne i Hercegovine na 2.386 metara, uzdize se direktno iznad Trnovačkog jezera i predstavlja
            jedan od najatraktivnijih planinarskih ciljeva u regiji. Uspon nudi spektakularne poglede na jezero, vrhove Volujaka
            i Bioča te prostranstva Nacionalnog parka Sutjeska. Za mnoge planinare kombinacija Trnovačkog jezera i Maglića
            predstavlja jednu od najljepših avantura na Balkanu. Ruta prolazi kroz Nacionalni park Sutjeska i Park prirode Piva.
          </p>
          <p className="leading-8">
            Organizovana tura sa iskusnim vodičem olakšava logistiku, osigurava sigurnost i omogućava da se fokusirate na
            iskustvo umjesto na navigaciju. Grupe su male, tempo prilagođen učesnicima, a uključena je oprema za kampovanje,
            prevozi i sve potrebne dozvole za ulazak u zaštićena područja.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Savjeti za pakovanje i pripremu</h2>
          <p className="leading-8">
            Praktična oprema za Trnovačko jezero uključuje planinarske cipele s dobrom prianjanjem, slojevitu odjeću, vjetrootpornu
            jaknu, malu prvu pomoć i dovoljno vode i hrane za cijeli izlet. Ako planirate plivanje, ponesite ručnik i suhu odjeću
            za povratak. Planinarski štapovi mogu pomoći na neravnom terenu, posebno pri silasku. Ruksak od 30 do 40 litara obično
            je dovoljan za dnevnu upotrebu, dok višednevne kamp ture mogu zahtijevati dodatnu organizaciju ovisno o tome šta
            organizator pruža.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Organizovana tura – kampovanje i Maglić</h2>
          <p className="leading-8">
            Ako želite doživjeti Trnovačko jezero i Maglić u najboljem obliku, pridružite se organizovanoj turi sa vodičem. Naša
            tura kombinuje kampovanje na jezeru s usponom na najviši vrh zemlje – nezaboravna trodnevna avantura u srcu Sutjeske.
          </p>
          <div className="rounded-xl border border-emerald-500/30 bg-slate-900/70 p-6">
            <Link
              href="/ture/kampovanje-trnovacko-jezero-maglic"
              className="block text-emerald-300 transition hover:text-emerald-200"
            >
              <h3 className="text-xl font-semibold mb-2">Kampovanje na Trnovačkom jezeru s usponom na Maglić</h3>
              <p className="text-slate-300 text-sm">
                3 dana / 2 noći • Uključeno: vodič, transfer, kamp oprema, obroci, ulaznice za NP Sutjeska i Park prirode Piva
              </p>
              <span className="inline-block mt-3 text-emerald-400 font-medium">Pogledaj turu →</span>
            </Link>
          </div>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Najbolje vrijeme za posjetu</h2>
          <p className="leading-8">
            Idealno razdoblje za posjetu Trnovačkom jezeru je od juna do septembra, kada su planinske staze prohodne i vremenski
            uslovi stabilniji. Priroda je u punom sjaju, a jezero ima najljepšu boju. Juli i august su savršeni za kupanje u
            hladnoj vodi i duže boravke u kampu. U ranom ljetu (jun) i ranoj jeseni (septembar) možete izbjeći gužve i uživati u
            tišini – ali imajte na umu da vrijeme može biti manje predvidivo.
          </p>

          <h2 className="text-2xl font-bold text-white md:text-3xl">Fotografija i savjeti za iskustvo</h2>
          <p className="leading-8 pb-4">
            Ako vam je fotografija prioritet, imajte na umu da svjetlost mijenja izgled jezera tokom dana. Jutarnji uslovi mogu
            biti mekši i tiši, dok kasnija svjetlost može stvoriti jači kontrast oko okolnih padina. Za najpotpunije iskustvo,
            izbjegavajte žurbu. Uključite dovoljno vremena na samom jezeru, ne samo na prilaznoj stazi. To često pretvara dobro
            putovanje u nezaboravno.
          </p>
        </article>
      </section>
    </main>
  );
}
