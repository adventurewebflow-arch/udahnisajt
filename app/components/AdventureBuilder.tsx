"use client";

import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const FORMSPREE_URL = "https://formspree.io/f/xqedwzll";
const TOTAL_STEPS = 4;

const activities = [
  { value: "trnovacko", label: "Kampovanje na Trnovačkom jezeru", desc: "2 noći, oprema, prevoz, takse", price: 130 },
  { value: "maglic", label: "Uspon na Maglić", desc: "Vodič, lunch, takse", price: 80 },
  { value: "zelengora", label: "Zelengora – jezera i vidikovci", desc: "Vodič, transfer, lunch, takse", price: 70 },
  { value: "rafting", label: "Rafting Tarom", desc: "Oprema, skipper, 2 obroka, prevoz", price: 80 },
  { value: "kanjoning", label: "Kanjoning Hrčavka", desc: "Oprema, vodič, takse, lunch, prevoz", price: 130 },
  { value: "perucica", label: "Prašuma Perućica + Skakavac", desc: "Prevoz, takse, lunch paket", price: 80 },
  { value: "durmitor", label: "Durmitor vikend", desc: "Smještaj, vodič (prevoz nije uključen)", price: 150, noTransport: true },
  { value: "via-ferrata", label: "Via ferrata Piva", desc: "Oprema, vodič, takse, prevoz", price: 65 },
  { value: "kajak", label: "Kajak – Pivsko jezero", desc: "Oprema, vodič", price: 40 },
  { value: "jahanje", label: "Jahanje konja", desc: "Vodič, oprema", price: 50 },
  { value: "katuni", label: "Katuni + doručak kod domaćina", desc: "Autentičan doručak na planini", price: 30 },
];

const activities_en = [
  { value: "trnovacko", label: "Trnovačko Lake Camping", desc: "2 nights, equipment, transport, fees", price: 130 },
  { value: "maglic", label: "Maglić Summit", desc: "Guide, lunch, fees", price: 80 },
  { value: "zelengora", label: "Zelengora – Lakes & Viewpoints", desc: "Guide, transfer, lunch, fees", price: 70 },
  { value: "rafting", label: "Tara River Rafting", desc: "Equipment, skipper, 2 meals, transport", price: 80 },
  { value: "kanjoning", label: "Hrčavka Canyoning", desc: "Equipment, guide, fees, lunch, transport", price: 130 },
  { value: "perucica", label: "Perućica Rainforest + Skakavac", desc: "Transport, fees, lunch", price: 80 },
  { value: "durmitor", label: "Durmitor Weekend", desc: "Accommodation, guide (transport not included)", price: 150, noTransport: true },
  { value: "via-ferrata", label: "Via Ferrata Piva", desc: "Equipment, guide, fees, transport", price: 65 },
  { value: "kajak", label: "Kayak – Piva Lake", desc: "Equipment, guide", price: 40 },
  { value: "jahanje", label: "Horse Riding", desc: "Guide, equipment", price: 50 },
  { value: "katuni", label: "Mountain Homesteads + Breakfast", desc: "Authentic mountain breakfast", price: 30 },
];

const origins = [
  { value: "lokalno", label: "Lokalni (BiH)", transport: 0 },
  { value: "sarajevo", label: "Sarajevo", transport: 35 },
  { value: "beograd", label: "Beograd", transport: 70 },
  { value: "dubrovnik", label: "Dubrovnik", transport: 55 },
  { value: "podgorica", label: "Podgorica", transport: 45 },
  { value: "zagreb", label: "Zagreb", transport: 85 },
  { value: "drugo", label: "Drugo", transport: 0 },
];

const origins_en = [
  { value: "lokalno", label: "Local (BiH)", transport: 0 },
  { value: "sarajevo", label: "Sarajevo", transport: 35 },
  { value: "beograd", label: "Belgrade", transport: 70 },
  { value: "dubrovnik", label: "Dubrovnik", transport: 55 },
  { value: "podgorica", label: "Podgorica", transport: 45 },
  { value: "zagreb", label: "Zagreb", transport: 85 },
  { value: "drugo", label: "Other", transport: 0 },
];

export default function AdventureBuilder() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [origin, setOrigin] = useState("");
  const [needsTransport, setNeedsTransport] = useState(false);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [people, setPeople] = useState(4);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const activityCatalog = isEn ? activities_en : activities;
  const originCatalog = isEn ? origins_en : origins;

  const activitiesTotal = selectedActivities.reduce((sum, val) => {
    const act = activityCatalog.find((a) => a.value === val);
    return sum + (act?.price ?? 0);
  }, 0);

  const selectedOrigin = originCatalog.find((o) => o.value === origin);
  const transportPerPerson = needsTransport ? (selectedOrigin?.transport ?? 0) : 0;
  const totalPerPerson = activitiesTotal + transportPerPerson;
  const totalAll = totalPerPerson * people;

  const discountPct = people >= 8 ? 15 : people >= 6 ? 10 : 0;
  const discountAmount = Math.round((totalAll * discountPct) / 100);
  const totalAllDiscounted = totalAll - discountAmount;
  const totalPerPersonDiscounted =
    people > 0 ? Math.round(totalAllDiscounted / people) : 0;

  const lang = useMemo(() => {
    const activityLabelsJoined = selectedActivities
      .map((v) => activityCatalog.find((a) => a.value === v)?.label)
      .filter(Boolean)
      .join(", ");

    const originLabel = originCatalog.find((o) => o.value === origin)?.label ?? "";

    const discountLine =
      discountPct > 0
        ? isEn
          ? `\nGroup discount: ${discountPct}% (you save ${discountAmount}€)`
          : `\nGrupni popust: ${discountPct}% (uštedite ${discountAmount}€)`
        : "";

    const whatsappMsg = isEn
      ? `Hello! I'm interested in an adventure:\n\nActivities: ${activityLabelsJoined}\nPeople: ${people}\nFrom: ${originLabel}${needsTransport ? " (transport needed)" : ""}\nEstimated price: ${totalPerPersonDiscounted}€/person (${totalAllDiscounted}€ total)\n\nName: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nPhone: ${formData.phone}` : ""}${discountLine}`
      : `Zdravo! Zanima me avantura:\n\nAktivnosti: ${activityLabelsJoined}\nBroj osoba: ${people}\nOdakle: ${originLabel}${needsTransport ? " (treba prevoz)" : ""}\nOkvirna cijena: ${totalPerPersonDiscounted}€/osobi (${totalAllDiscounted}€ ukupno)\n\nIme: ${formData.name}\nEmail: ${formData.email}${formData.phone ? `\nTelefon: ${formData.phone}` : ""}${discountLine}`;

    return {
      step1Title: isEn ? "Where are you travelling from?" : "Odakle dolaziš?",
      step2Title: isEn ? "What do you want to experience?" : "Šta želiš doživjeti?",
      step2Sub: isEn
        ? "Select activities — price is calculated automatically"
        : "Odaberi aktivnosti — cijena se računa automatski",
      step3Title: isEn ? "How many of you are there?" : "Koliko vas ima?",
      step4Title: isEn ? "Almost there!" : "Skoro smo gotovi!",
      next: isEn ? "Next →" : "Dalje →",
      back: isEn ? "← Back" : "← Nazad",
      minPeople: isEn
        ? "\u26A0\uFE0F Minimum group size for tours is 4 people. For smaller groups contact us directly."
        : "\u26A0\uFE0F Minimalan broj za grupne ture je 4 osobe. Za manje grupe kontaktiraj nas direktno.",
      totalPerPersonLabel: isEn ? "Total per person:" : "Ukupno po osobi:",
      totalAllLabel: isEn ? "Total:" : "Ukupno:",
      totalAll: isEn ? "Total" : "Ukupno",
      pricePerPerson: isEn ? "per person" : "po osobi",
      activities: isEn ? "Activities" : "Aktivnosti",
      people: isEn ? "People" : "Osoba",
      from: isEn ? "From" : "Odakle",
      transport: isEn ? "Transport" : "Prevoz",
      dash: "—",
      sendWhatsapp: isEn ? "Send via WhatsApp" : "Pošalji na WhatsApp",
      sendEmail: isEn ? "or send email inquiry" : "ili pošalji email upit",
      name: isEn ? "Full Name *" : "Ime i prezime *",
      email: isEn ? "Email *" : "Email *",
      phone: isEn ? "Phone" : "Telefon",
      message: isEn ? "Message (optional)" : "Poruka (opciono)",
      messagePh: isEn ? "Preferred dates, special notes..." : "Željeni termin, posebne napomene...",
      namePh: isEn ? "Your full name" : "Vaše ime i prezime",
      sending: isEn ? "Sending..." : "Šalje se...",
      thanks: isEn ? "Petar received your inquiry!" : "Petar prima vaš upit!",
      respond: isEn ? "We respond within 1 hour." : "Odgovaramo u roku od 1 sat.",
      pricingNotice: isEn
        ? "\uD83D\uDCA1 This is an estimated price based on your selections. The final price may be lower or higher depending on availability, group size and the specific programme. After your inquiry, Petar will send you a detailed PDF with the exact offer."
        : "\uD83D\uDCA1 Ovo je okvirna cijena na osnovu tvojih odabira. Finalna cijena može biti niža ili viša u zavisnosti od dostupnosti termina, veličine grupe i konkretnog programa. Nakon upita, Petar \u0107e ti poslati detaljan PDF sa tačnom ponudom.",
      pricingShort: isEn
        ? `\uD83D\uDCA1 Estimated price: ${totalPerPersonDiscounted}€ per person / ${totalAllDiscounted}€ total. After your inquiry you'll receive a detailed PDF with the exact offer.`
        : `\uD83D\uDCA1 Okvirna cijena: ${totalPerPersonDiscounted}€ po osobi / ${totalAllDiscounted}€ ukupno. Nakon upita dobi\u0107e\u0161 detaljan PDF sa ta\u010Dnom ponudom.`,
      stepOf: isEn ? `Step ${step} of 4` : `Korak ${step} od 4`,
      durmitorWarning: isEn
        ? "Note: transport to Durmitor is not included in the package. Arrange your own arrival or contact us."
        : "Napomena: prevoz do Durmitora nije uključen u paket. Organizuj dolazak samostalno ili kontaktiraj nas.",
      whatsappMsg,
      noTransportNote: isEn ? "(transport not included)" : "(prevoz nije uključen)",
      selectedActivitiesTitle: isEn ? "Selected activities" : "Odabrane aktivnosti",
      pricePerPersonSummary: isEn ? "Price per person" : "Cijena po osobi",
      peopleCountLabel: isEn ? "Number of people" : "Broj osoba",
      grandTotal: isEn ? "TOTAL" : "UKUPNO",
      roughTotalIntro: isEn ? "Estimated total:" : "Ukupna okvirna cijena:",
      perPersonShort: isEn ? "Per person" : "Po osobi",
      transportCheckbox: (euros: number) =>
        isEn
          ? `I need transport (${euros}€ per person, return)`
          : `Treba mi prevoz (${euros}€ po osobi, povratna)`,
    };
  }, [
    isEn,
    step,
    totalPerPerson,
    totalAll,
    totalPerPersonDiscounted,
    totalAllDiscounted,
    discountPct,
    discountAmount,
    selectedActivities,
    activityCatalog,
    originCatalog,
    origin,
    needsTransport,
    people,
    formData.name,
    formData.email,
    formData.phone,
  ]);

  const toggleActivity = (value: string) => {
    setSelectedActivities((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const setOriginAndResetTransport = (value: string) => {
    setOrigin(value);
    if (value === "lokalno" || value === "drugo") setNeedsTransport(false);
  };

  const activityLabels = selectedActivities
    .map((v) => activityCatalog.find((a) => a.value === v)?.label)
    .filter(Boolean)
    .join(", ");

  const handleSubmit = async () => {
    setSending(true);
    const payload = {
      ...formData,
      activities: activityLabels,
      activityValues: selectedActivities.join(", "),
      people: String(people),
      origin: selectedOrigin?.label ?? origin,
      originValue: origin,
      needsTransport,
      transportPerPerson: String(transportPerPerson),
      totalPerPerson: String(totalPerPerson),
      totalAll: String(totalAll),
      discountPct: String(discountPct),
      discountAmount: String(discountAmount),
      totalPerPersonDiscounted: String(totalPerPersonDiscounted),
      totalAllDiscounted: String(totalAllDiscounted),
      source: "Adventure Builder",
      page: pathname,
    };

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const activityList = activityLabels;

  const whatsappUrl = `https://wa.me/38765797200?text=${encodeURIComponent(lang.whatsappMsg)}`;

  const showTransportToggle = Boolean(origin && origin !== "lokalno" && origin !== "drugo");
  const durmitorTransportWarning =
    selectedActivities.includes("durmitor") && needsTransport;

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-6xl mb-6" aria-hidden>
          {"\uD83C\uDFD4\uFE0F"}
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">{lang.thanks}</h3>
        <p className="text-gray-400 text-lg">{lang.respond}</p>
      </div>
    );
  }

  const progressWidth = `${(step / TOTAL_STEPS) * 100}%`;
  const progressPct = Math.round((step / TOTAL_STEPS) * 100);

  return (
    <div className="max-w-3xl mx-auto pt-0 mt-0">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>{lang.stepOf}</span>
          <span>{progressPct}%</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">{lang.step1Title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {originCatalog.map((o) => (
              <button
                key={o.value}
                type="button"
                onClick={() => setOriginAndResetTransport(o.value)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  origin === o.value
                    ? "border-emerald-500 bg-emerald-500/10 text-white"
                    : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500"
                }`}
              >
                {o.label}
              </button>
            ))}
          </div>

          {showTransportToggle && (
            <div className="mt-6 flex items-center gap-3 bg-gray-800 rounded-xl p-4 border border-gray-700">
              <input
                type="checkbox"
                id="transport"
                checked={needsTransport}
                onChange={(e) => setNeedsTransport(e.target.checked)}
                className="w-4 h-4 accent-emerald-500"
              />
              <label htmlFor="transport" className="text-white text-sm">
                {lang.transportCheckbox(selectedOrigin?.transport ?? 0)}
              </label>
            </div>
          )}

          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!origin}
            className="mt-8 w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-lg"
          >
            {lang.next}
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{lang.step2Title}</h3>
          <p className="text-gray-400 mb-6">{lang.step2Sub}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activityCatalog.map((act) => {
              const selected = selectedActivities.includes(act.value);
              return (
                <button
                  key={act.value}
                  type="button"
                  onClick={() => toggleActivity(act.value)}
                  className={`relative p-5 rounded-xl border-2 text-left transition-all ${
                    selected
                      ? "border-emerald-500 bg-emerald-500/10"
                      : "border-gray-700 bg-gray-800 hover:border-gray-500"
                  }`}
                >
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-xs font-semibold">
                    {act.price}€
                  </span>
                  <div className="font-semibold text-white pr-16">{act.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{act.desc}</div>
                  {"noTransport" in act && act.noTransport && (
                    <p className="text-xs text-amber-400 mt-2">{lang.noTransportNote}</p>
                  )}
                </button>
              );
            })}
          </div>

          {durmitorTransportWarning && (
            <div className="mt-4 rounded-xl border border-amber-500/40 bg-amber-500/10 p-4 text-sm text-amber-200">
              {lang.durmitorWarning}
            </div>
          )}

          <div className="sticky bottom-0 z-20 mt-6 -mx-0 border-t border-white/10 bg-slate-950/95 backdrop-blur-sm py-3 px-4 rounded-t-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 gap-y-1">
              <span className="text-gray-300 text-sm">{lang.totalPerPersonLabel}</span>
              <div className="flex flex-wrap items-center justify-end gap-x-1">
                <span
                  className={`text-xl font-bold ${selectedActivities.length === 0 ? "text-gray-500" : "text-emerald-400"}`}
                >
                  {selectedActivities.length === 0 ? "0€" : `${totalPerPerson}€`}
                </span>
                <span className="text-xs text-gray-500">
                  {isEn ? "(group discounts apply from 6 people)" : "(grupni popust od 6 osoba)"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 py-4 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              {lang.back}
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              disabled={selectedActivities.length === 0}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {lang.next}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{lang.step3Title}</h3>

          <div className="flex items-center justify-center gap-6 mb-6">
            <button
              type="button"
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
              className="w-14 h-14 rounded-xl border border-gray-600 bg-gray-800 text-white text-2xl font-bold hover:bg-gray-700 transition-colors"
            >
              −
            </button>
            <span className="text-6xl font-bold text-white tabular-nums w-24 text-center">{people}</span>
            <button
              type="button"
              onClick={() => setPeople((p) => Math.min(50, p + 1))}
              className="w-14 h-14 rounded-xl border border-gray-600 bg-gray-800 text-white text-2xl font-bold hover:bg-gray-700 transition-colors"
            >
              +
            </button>
          </div>

          {discountPct > 0 && (
            <div className="mt-4 bg-emerald-500/15 border border-emerald-500/30 rounded-xl p-3 text-center">
              <span className="text-emerald-400 font-bold text-lg">
                {discountPct}% {isEn ? "group discount applied!" : "grupnog popusta!"}
              </span>
              <p className="text-emerald-300/70 text-xs mt-1">
                {isEn ? `You save ${discountAmount}€ total` : `Uštediš ${discountAmount}€ ukupno`}
              </p>
            </div>
          )}

          {people < 4 && (
            <p className="text-center text-amber-300 text-sm mb-4 max-w-lg mx-auto">{lang.minPeople}</p>
          )}

          <p className="text-center text-emerald-400 text-2xl font-bold mb-6">
            {lang.roughTotalIntro} {totalAllDiscounted}€
          </p>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 space-y-3 text-sm">
            <div className="text-white font-medium border-b border-gray-700 pb-2">{lang.selectedActivitiesTitle}</div>
            <ul className="space-y-2 text-gray-300">
              {selectedActivities.map((v) => {
                const act = activityCatalog.find((a) => a.value === v);
                return act ? (
                  <li key={v} className="flex justify-between gap-2">
                    <span>{act.label}</span>
                    <span className="text-emerald-400 font-medium">{act.price}€</span>
                  </li>
                ) : null;
              })}
            </ul>
            <div className="flex justify-between text-gray-300 pt-2 border-t border-gray-700">
              <span>{lang.transport}</span>
              <span>
                {needsTransport ? `${transportPerPerson}€ ${lang.pricePerPerson}` : lang.dash}
              </span>
            </div>
            <div className="flex justify-between text-white font-medium">
              <span>{lang.pricePerPersonSummary}</span>
              <span>{totalPerPerson}€</span>
            </div>
            <div className="flex justify-between text-white font-medium">
              <span>{lang.peopleCountLabel}</span>
              <span>{people}</span>
            </div>
            {discountPct > 0 && (
              <div className="flex justify-between text-emerald-400 text-sm">
                <span>
                  {isEn ? `Group discount (${discountPct}%)` : `Grupni popust (${discountPct}%)`}
                </span>
                <span>− {discountAmount}€</span>
              </div>
            )}
            <div className="flex justify-between text-white font-bold text-lg border-t border-gray-700 pt-3 mt-3">
              <span>{lang.totalAll}</span>
              <div className="text-right">
                {discountPct > 0 && (
                  <span className="line-through text-gray-500 text-sm mr-2">{totalAll}€</span>
                )}
                <span className="text-emerald-400">{totalAllDiscounted}€</span>
              </div>
            </div>
            <div className="text-right text-gray-400 text-sm mt-1">
              ({totalPerPersonDiscounted}€ {lang.pricePerPerson})
            </div>
          </div>

          <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-blue-300 text-sm leading-relaxed">{lang.pricingNotice}</p>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 py-4 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              {lang.back}
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-colors"
            >
              {lang.next}
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">{lang.step4Title}</h3>

          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6 text-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <div className="text-gray-400 text-xs mb-1">{lang.activities}</div>
                <div className="text-white font-medium line-clamp-3">{activityList || lang.dash}</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">{lang.people}</div>
                <div className="text-white font-medium">{people}</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">{lang.perPersonShort}</div>
                <div className="text-white font-medium">{totalPerPersonDiscounted}€</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs mb-1">{lang.totalAllLabel}</div>
                <div className="text-emerald-400 font-bold">{totalAllDiscounted}€</div>
              </div>
            </div>
          </div>

          <div className="space-y-5 mb-6">
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.name}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder={lang.namePh}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.email}</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="vas@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="+387 XX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.message}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder={lang.messagePh}
              />
            </div>
          </div>

          <div className="mb-5 bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
            <p className="text-blue-300 text-sm leading-relaxed">{lang.pricingShort}</p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition mb-4"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {lang.sendWhatsapp}
          </a>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!formData.name || !formData.email || sending}
            className="w-full py-4 border-2 border-gray-600 text-gray-200 font-semibold rounded-xl hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            {sending ? lang.sending : lang.sendEmail}
          </button>

          <button
            type="button"
            onClick={() => setStep(3)}
            className="mt-6 w-full py-3 text-gray-400 hover:text-white text-sm transition-colors"
          >
            {lang.back}
          </button>
        </div>
      )}
    </div>
  );
}
