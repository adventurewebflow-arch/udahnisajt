"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const FORMSPREE_URL = "https://formspree.io/f/xqedwzll";
const HERO_IMAGE = "/images/partners/zelengora-djevojka-u-planini.webp";

type Lang = "sr" | "en";

const copy = {
  en: {
    eyebrow: "For tour operators & travel agencies",
    h1: "Your local ground partner in Sutjeska National Park",
    lede: "We run hiking, camping, canyoning and Tara rafting programmes from Foča and Tjentište, with our own licensed guides on every trip. Send us your guests; we handle everything from the meeting point to the last campfire.",
    ctaPrimary: "Request the 2027 Partner Pack",
    ctaSecondary: "See net rates",
    facts: [
      { n: "5.0", t: "Google rating from 30+ reviews" },
      { n: "~1,000", t: "guests per season" },
      { n: "80", t: "max group size we handle" },
      { n: "10+", t: "years on the Tara as a licensed skipper, 8 as a mountain guide" },
    ],
    whyEyebrow: "Why partner with us",
    whyH2: "One operator on the ground, not a chain of subcontractors",
    whyP1: "Most agencies selling Bosnia book a Sarajevo office that then hires local guides. We are the local guides. Petar lives 25 km from Tjentište and works with a team of three experienced local guides who know these mountains and rivers inside out.",
    whyP2: "That means faster answers, one team accountable for your group, and access to places a bus tour never reaches: shepherd huts on Prijevor where breakfast is still made the old way, a tent camp on Trnovačko Lake with no signal, and a full day on the Tara with a skipper who knows every rapid.",
    checklist: [
      ["Licensed guides on every programme.", "Mountain guide, whitewater skipper, canyoning and caving licences."],
      ["Net rates about 20% below our public prices,", "so your margin is protected."],
      ["Everything in one place:", "transfers, bungalows, camping gear, meals, park fees and equipment."],
      ["Flexible programmes", "from a single day trip to a 9-day route across Bosnia and Montenegro."],
      ["Season April to October,", "with replies on WhatsApp within hours."],
    ],
    pkgEyebrow: "Season 2027 · net prices per person",
    pkgH2: "Ready-made packages",
    net: "net pp",
    mostBooked: "Most booked",
    packages: [
      { len: "3 days · 2 nights", name: "Wild Camp", price: "€170", details: "/en/partners/trnovacko", items: ["Tent camp at Trnovačko Lake", "Optional Maglić summit", "Breakfast at a shepherd hut", "Perućica rainforest viewpoints", "4 meals, guide, transfer from Foča, camping gear"] },
      { len: "3 days · 2 nights", name: "Sutjeska Weekend", price: "€199", items: ["Bungalows at Tjentište", "Trnovačko Lake day hike", "Zelengora lakes and viewpoints", "Meals included"] },
      { len: "3 days · 2 nights", name: "Sutjeska Active", price: "€299", featured: true, items: ["Maglić and Trnovačko Lake", "Hrčavka canyoning", "Full day rafting on the Tara"] },
      { len: "7 days · 6 nights", name: "Wild Week", price: "€529", items: ["Maglić, shepherd huts and Zelengora", "Perućica rainforest and Skakavac", "Full day rafting on the Tara", "Kayaking on Piva Lake"] },
    ],
    tableHead: ["Building block", "Net rate"],
    table: [
      ["Bungalow accommodation, per person per night", "€12.50–25"],
      ["Guided day tour, per person", "€60–110"],
      ["Group of 8–15 people", "−10%"],
      ["Group of 16 or more", "−15%"],
      ["Transfers from Sarajevo, Dubrovnik, Podgorica, Belgrade", "On request"],
    ],
    tableNote: "Full inclusions, cancellation terms and sample itineraries are in the Partner Pack PDF.",
    stepsEyebrow: "How it works",
    stepsH2: "From first email to your group on the trail",
    stepLabel: "Step",
    steps: [
      ["Request the Partner Pack", "Fill in the form below. We send the 2027 PDF with net rates, inclusions and terms within one working day."],
      ["We tailor the programme", "Tell us your dates, group size and fitness level. We build the itinerary and quote it in writing."],
      ["Confirm and send guests", "Once dates are confirmed, your guests get a WhatsApp group with meeting point, kit list and weather before arrival."],
    ],
    formEyebrow: "Partner inquiry",
    formH2: "Let's work together",
    formIntro: "Agencies, tour operators, schools, hiking clubs and corporate planners are all welcome. Write in English, German, Serbian or Croatian.",
    contactBased: "Based in",
    contactBasedValue: "Foča, Bosnia and Herzegovina",
    fields: {
      company: "Company name *",
      country: "Country *",
      contact: "Contact person *",
      email: "Email *",
      type: "Business type",
      size: "Typical group size",
      message: "What are you planning?",
      messagePh: "Dates, group size, destinations you already sell...",
    },
    types: ["Tour operator", "Travel agency", "School or university", "Hiking or outdoor club", "Corporate / events"],
    submit: "Send inquiry",
    sending: "Sending...",
    error: "Please fill in company, country, contact person and a valid email.",
    networkError: "The inquiry was not sent. Please try again or write to us on WhatsApp.",
    thanks: "Thank you. Petar will reply within one working day with the 2027 Partner Pack.",
  },
  sr: {
    eyebrow: "Za turističke agencije i tour operatore",
    h1: "Vaš lokalni partner na terenu u NP Sutjeska",
    lede: "Radimo hiking, kampovanje, kanjoning i rafting Tarom iz Foče i Tjentišta, sa svojim licenciranim vodičima na svakoj turi. Vi nam pošaljete goste, a mi vodimo sve od mjesta okupljanja do zadnje vatre.",
    ctaPrimary: "Zatraži Partner Pack 2027",
    ctaSecondary: "Pogledaj neto cijene",
    facts: [
      { n: "5.0", t: "ocjena na Googleu, 30+ recenzija" },
      { n: "~1.000", t: "gostiju po sezoni" },
      { n: "80", t: "najveća grupa koju vodimo" },
      { n: "10+", t: "godina na Tari kao licencirani skiper, 8 kao planinarski vodič" },
    ],
    whyEyebrow: "Zašto sa nama",
    whyH2: "Jedan operater na terenu, a ne lanac podizvođača",
    whyP1: "Većina agencija koje prodaju Bosnu rezerviše kancelariju u Sarajevu, a ona onda angažuje lokalne vodiče. Mi smo ti lokalni vodiči. Petar živi 25 km od Tjentišta i radi sa još tri iskusna lokalna vodiča koji ove planine i rijeke znaju u dušu.",
    whyP2: "To znači brže odgovore, jedan tim koji odgovara za vašu grupu i mjesta do kojih autobus nikad ne stiže: katune na Prijevoru gdje se doručak i dalje pravi po starom, kamp na Trnovačkom jezeru bez signala i cijeli dan na Tari sa skiperom koji zna svaki brzak.",
    checklist: [
      ["Licencirani vodiči na svakoj turi.", "Planinarski vodič, skiper na divljim vodama, licence za kanjoning i speleologiju."],
      ["Neto cijene oko 20% ispod javnih,", "tako da je vaša marža zaštićena."],
      ["Sve na jednom mjestu:", "prevoz, bungalovi, oprema za kampovanje, hrana, takse parka i oprema."],
      ["Fleksibilni programi,", "od jednodnevnog izleta do devet dana kroz BiH i Crnu Goru."],
      ["Sezona od aprila do oktobra,", "a na WhatsAppu odgovaramo u roku od nekoliko sati."],
    ],
    pkgEyebrow: "Sezona 2027 · neto cijene po osobi",
    pkgH2: "Gotovi paketi",
    net: "neto po osobi",
    mostBooked: "Najtraženiji",
    packages: [
      { len: "3 dana · 2 noći", name: "Wild Camp", price: "170€", items: ["Kamp na Trnovačkom jezeru", "Uspon na Maglić kao opcija", "Doručak na katunu", "Vidikovci prašume Perućice", "4 obroka, vodič, prevoz iz Foče, oprema za kampovanje"] },
      { len: "3 dana · 2 noći", name: "Sutjeska Weekend", price: "199€", items: ["Bungalovi na Tjentištu", "Jednodnevna tura do Trnovačkog jezera", "Zelengora, jezera i vidikovci", "Hrana uključena"] },
      { len: "3 dana · 2 noći", name: "Sutjeska Active", price: "299€", featured: true, items: ["Maglić i Trnovačko jezero", "Kanjoning Hrčavka", "Cijeli dan raftinga na Tari"] },
      { len: "7 dana · 6 noći", name: "Wild Week", price: "529€", items: ["Maglić, katuni i Zelengora", "Prašuma Perućica i Skakavac", "Cijeli dan raftinga na Tari", "Kajak na Pivskom jezeru"] },
    ],
    tableHead: ["Stavka", "Neto cijena"],
    table: [
      ["Smještaj u bungalovu, po osobi po noći", "12,50–25€"],
      ["Jednodnevna tura sa vodičem, po osobi", "60–110€"],
      ["Grupa od 8 do 15 osoba", "−10%"],
      ["Grupa od 16 i više osoba", "−15%"],
      ["Transferi iz Sarajeva, Dubrovnika, Podgorice, Beograda", "Na upit"],
    ],
    tableNote: "Kompletan sadržaj paketa, uslovi otkazivanja i primjeri itinerara su u Partner Pack PDF-u.",
    stepsEyebrow: "Kako radimo",
    stepsH2: "Od prvog maila do vaše grupe na stazi",
    stepLabel: "Korak",
    steps: [
      ["Zatražite Partner Pack", "Popunite formu ispod. U roku od jednog radnog dana šaljemo PDF za 2027. sa neto cijenama, sadržajem paketa i uslovima."],
      ["Prilagođavamo program", "Javite nam datume, veličinu grupe i kondiciju. Mi pravimo itinerar i šaljemo pisanu ponudu."],
      ["Potvrda i dolazak gostiju", "Kad potvrdimo datume, vaši gosti prije dolaska dobijaju WhatsApp grupu sa mjestom okupljanja, spiskom opreme i prognozom."],
    ],
    formEyebrow: "Upit za saradnju",
    formH2: "Hajde da radimo zajedno",
    formIntro: "Dobrodošle su agencije, tour operatori, škole, planinarska društva i firme. Pišite na srpskom, hrvatskom, engleskom ili njemačkom.",
    contactBased: "Sjedište",
    contactBasedValue: "Foča, Bosna i Hercegovina",
    fields: {
      company: "Naziv firme *",
      country: "Država *",
      contact: "Kontakt osoba *",
      email: "Email *",
      type: "Vrsta firme",
      size: "Uobičajena veličina grupe",
      message: "Šta planirate?",
      messagePh: "Datumi, veličina grupe, destinacije koje već prodajete...",
    },
    types: ["Tour operator", "Turistička agencija", "Škola ili fakultet", "Planinarsko društvo", "Firma / događaji"],
    submit: "Pošalji upit",
    sending: "Šalje se...",
    error: "Popunite naziv firme, državu, kontakt osobu i ispravan email.",
    networkError: "Upit nije poslat. Pokušajte ponovo ili nam pišite na WhatsApp.",
    thanks: "Hvala. Petar će vam u roku od jednog radnog dana poslati Partner Pack za 2027.",
  },
};

export default function PartnerPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [form, setForm] = useState({
    company: "",
    country: "",
    contact: "",
    email: "",
    type: t.types[0],
    size: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "invalid" | "error">("idle");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const valid =
      form.company.trim() && form.country.trim() && form.contact.trim() && /\S+@\S+\.\S+/.test(form.email);
    if (!valid) {
      setStatus("invalid");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, source: `Partner page (${lang.toUpperCase()})` }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  const input =
    "w-full px-4 py-3 bg-slate-950 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors";
  const label = "block text-sm font-semibold text-gray-300 mb-2";
  const eyebrow = "text-xs font-bold tracking-[0.14em] uppercase text-emerald-400";
  const rule = <div className="w-14 h-1 bg-emerald-500 mt-3" />;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden md:min-h-[640px]">
        <div className="relative aspect-[4/3] md:absolute md:inset-0 md:aspect-auto md:h-full">
          <Image src={HERO_IMAGE} alt={t.h1} fill priority sizes="100vw" className="object-cover object-[75%_70%]" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/70 to-slate-950" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-8 md:pt-24 pb-16">
          <div className="max-w-3xl flex flex-col gap-5">
            <span className={eyebrow}>{t.eyebrow}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">{t.h1}</h1>
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed">{t.lede}</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <a href="#inquiry" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition">
                {t.ctaPrimary}
              </a>
              <a href="#packages" className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-800 border border-gray-800 rounded-2xl overflow-hidden">
            {t.facts.map((f) => (
              <div key={f.t} className="bg-gray-900/95 p-5 flex flex-col gap-1">
                <span className="text-3xl font-extrabold text-emerald-400 tabular-nums">{f.n}</span>
                <span className="text-sm text-gray-400 leading-snug">{f.t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <span className={eyebrow}>{t.whyEyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.whyH2}</h2>
          {rule}
          <div className="mt-10 grid md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-4">
              <p className="text-lg text-gray-300 leading-relaxed">{t.whyP1}</p>
              <p className="text-gray-400 leading-relaxed">{t.whyP2}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {t.checklist.map(([bold, rest]) => (
                <li key={bold} className="flex gap-3 text-gray-300">
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-emerald-500" />
                  <span>
                    <strong className="text-white">{bold}</strong> {rest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-20 bg-gray-900/60 border-y border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <span className={eyebrow}>{t.pkgEyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.pkgH2}</h2>
          {rule}
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.packages.map((p) => (
              <article
                key={p.name}
                className={`bg-gray-900 rounded-2xl p-6 flex flex-col gap-3 border ${p.featured ? "border-emerald-500/60" : "border-gray-800"}`}
              >
                {p.featured && (
                  <span className="self-start text-xs font-semibold text-emerald-300 bg-emerald-500/15 px-2.5 py-1 rounded-full">
                    {t.mostBooked}
                  </span>
                )}
                <span className="text-xs uppercase tracking-wider text-gray-400">{p.len}</span>
                <h3 className="text-xl font-bold text-white">{p.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white tabular-nums">{p.price}</span>
                  <span className="text-sm text-gray-400">{t.net}</span>
                </div>
                <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                {"details" in p && p.details && (
                  <Link href={p.details} className="mt-auto pt-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300">
                    Details →
                  </Link>
                )}
              </article>
            ))}
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-gray-800">
            <table className="w-full min-w-[520px] text-left tabular-nums">
              <thead className="bg-gray-900">
                <tr>
                  {t.tableHead.map((h) => (
                    <th key={h} className="px-5 py-3 text-xs uppercase tracking-wider text-gray-400 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {t.table.map(([a, b]) => (
                  <tr key={a} className="border-t border-gray-800">
                    <td className="px-5 py-3 text-gray-300">{a}</td>
                    <td className="px-5 py-3 text-emerald-400 font-semibold whitespace-nowrap">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-sm text-gray-400">{t.tableNote}</p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <span className={eyebrow}>{t.stepsEyebrow}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">{t.stepsH2}</h2>
          {rule}
          <div className="mt-10 grid md:grid-cols-3 gap-8">
            {t.steps.map(([title, text], i) => (
              <div key={title} className="border-t-2 border-emerald-500 pt-5 flex flex-col gap-2">
                <span className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-400">
                  {t.stepLabel} {i + 1}
                </span>
                <h3 className="text-lg font-bold text-white">{title}</h3>
                <p className="text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry */}
      <section id="inquiry" className="py-16 md:py-20 bg-gray-900/60 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1fr_1.25fr] gap-12">
          <div className="flex flex-col gap-4">
            <span className={eyebrow}>{t.formEyebrow}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">{t.formH2}</h2>
            {rule}
            <p className="text-gray-400">{t.formIntro}</p>
            <div className="mt-2 divide-y divide-gray-800">
              <div className="py-3">
                <div className="text-sm text-gray-400">WhatsApp</div>
                <a href="https://wa.me/38765797200" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-white hover:text-emerald-400">
                  +387 65 797 200
                </a>
              </div>
              <div className="py-3">
                <div className="text-sm text-gray-400">Email</div>
                <span className="text-lg font-semibold text-white select-all">udahniavanturu@gmail.com</span>
              </div>
              <div className="py-3">
                <div className="text-sm text-gray-400">{t.contactBased}</div>
                <span className="text-lg font-semibold text-white">{t.contactBasedValue}</span>
              </div>
            </div>
          </div>

          {status === "sent" ? (
            <div className="bg-emerald-500/10 border border-emerald-500/40 rounded-2xl p-8 self-start">
              <div className="text-emerald-400 text-4xl mb-3">✓</div>
              <p className="text-lg text-white">{t.thanks}</p>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="bg-gray-900 border border-gray-800 rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className={label}>{t.fields.company}</label>
                <input id="company" name="company" value={form.company} onChange={update} className={input} />
              </div>
              <div>
                <label htmlFor="country" className={label}>{t.fields.country}</label>
                <input id="country" name="country" value={form.country} onChange={update} className={input} />
              </div>
              <div>
                <label htmlFor="contact" className={label}>{t.fields.contact}</label>
                <input id="contact" name="contact" value={form.contact} onChange={update} className={input} />
              </div>
              <div>
                <label htmlFor="email" className={label}>{t.fields.email}</label>
                <input id="email" name="email" type="email" value={form.email} onChange={update} className={input} />
              </div>
              <div>
                <label htmlFor="type" className={label}>{t.fields.type}</label>
                <select id="type" name="type" value={form.type} onChange={update} className={input}>
                  {t.types.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="size" className={label}>{t.fields.size}</label>
                <input id="size" name="size" type="number" min="1" value={form.size} onChange={update} className={input} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className={label}>{t.fields.message}</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={update} placeholder={t.fields.messagePh} className={`${input} resize-y`} />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition disabled:opacity-60"
                >
                  {status === "sending" ? t.sending : t.submit}
                </button>
                {status === "invalid" && <p className="text-sm text-red-300">{t.error}</p>}
                {status === "error" && <p className="text-sm text-red-300">{t.networkError}</p>}
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
