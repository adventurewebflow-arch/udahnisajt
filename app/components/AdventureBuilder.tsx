"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";

const FORMSPREE_URL = "https://formspree.io/f/xqedwzll";
const TOTAL_STEPS = 5;

const t = {
  sr: {
    title: "Kreiraj svoju avanturu",
    subtitle: "Reci nam šta želiš — mi \u0107emo složiti turu po mjeri.",
    step1Title: "Koliko dana imaš?",
    step2Title: "Odakle dolaziš?",
    step2bTitle: "Koji je tvoj budget?",
    step3Title: "Šta želiš doživjeti?",
    step3Subtitle: "Označi sve što te zanima",
    step4Title: "Skoro smo gotovi!",
    next: "Dalje →",
    back: "← Nazad",
    send: "Pošalji upit",
    sending: "Šalje se...",
    name: "Ime i prezime *",
    namePh: "Vaše ime i prezime",
    email: "Email *",
    phone: "Telefon",
    phonePh: "+387 XX XXX XXX",
    people: "Broj osoba *",
    peoplePh: "Broj osoba",
    message: "Poruka (opciono)",
    messagePh: "Željeni termin, posebne napomene... (min. 4 osobe)",
    minPeople:
      "\u26A0\uFE0F Minimalan broj osoba za organizaciju ture je 4. Za manje grupe kontaktiraj nas direktno na WhatsApp.",
    thanks: "Petar prima vaš upit!",
    respond: "Odgovaramo u roku od 1 sat.",
    summaryBudget: "Budžet",
    durations: [
      { value: "vikend", label: "Vikend", desc: "2-3 dana" },
      { value: "srednje", label: "Kraći odmor", desc: "4-5 dana" },
      { value: "sedmica", label: "Sedmica", desc: "7 dana" },
      { value: "grand", label: "Grand Tour", desc: "9+ dana" },
      { value: "custom", label: "Po dogovoru", desc: "Fleksibilno" },
    ],
    budgets: [
      { value: "do100", label: "Do 100€", desc: "Jednodnevni izleti" },
      { value: "100-200", label: "100€ – 200€", desc: "Vikend avanture" },
      { value: "200-500", label: "200€ – 500€", desc: "Premium ture" },
      { value: "500plus", label: "500€+", desc: "Višednevne avanture" },
      { value: "fleksibilno", label: "Fleksibilno", desc: "Prilagodimo zajedno" },
    ],
    origins: [
      "Lokalni (BiH)",
      "Beograd", "Sarajevo", "Dubrovnik", "Podgorica",
      "Zagreb", "Tirana", "Ljubljana", "Drugo",
    ],
    activities: [
      { value: "maglic", label: "\uD83C\uDFD4\uFE0F Uspon na Maglić", desc: "Najviši vrh BiH" },
      { value: "trnovacko", label: "\u26FA Trnovačko jezero", desc: "Kampovanje na jezeru" },
      { value: "zelengora", label: "\uD83C\uDF3F Zelengora", desc: "Jezera i vidikovci" },
      { value: "rafting", label: "\uD83D\uDEF6 Rafting Tarom", desc: "Rijeka Tara" },
      { value: "kanjoning", label: "\uD83D\uDCA6 Kanjoning Hrčavka", desc: "Kanjon i voda" },
      { value: "perucica", label: "\uD83C\uDF32 Prašuma Perućica", desc: "Vodopad Skakavac" },
      { value: "durmitor", label: "\uD83C\uDFD4\uFE0F Durmitor", desc: "Žabljak i Crno jezero" },
      { value: "via-ferrata", label: "\uD83E\uDD7D Via ferrata Piva", desc: "Stijene iznad kanjona" },
      { value: "kajak", label: "\uD83D\uDEF6 Kajak Pivsko jezero", desc: "45km tišine" },
      { value: "jahanje", label: "\uD83D\uDC34 Jahanje konja", desc: "Kroz planinu" },
      { value: "katuni", label: "\uD83E\uDD5B Katuni i domaćini", desc: "Autentičan život planine" },
      { value: "teambuilding", label: "\uD83D\uDC65 Teambuilding", desc: "Za ekipe i firme" },
    ],
  },
  en: {
    title: "Build Your Adventure",
    subtitle: "Tell us what you want — we'll put together a tour made for you.",
    step1Title: "How many days do you have?",
    step2Title: "Where are you travelling from?",
    step2bTitle: "What's your budget?",
    step3Title: "What do you want to experience?",
    step3Subtitle: "Select everything that interests you",
    step4Title: "Almost there!",
    next: "Next →",
    back: "← Back",
    send: "Send Inquiry",
    sending: "Sending...",
    name: "Full Name *",
    namePh: "Your full name",
    email: "Email *",
    phone: "Phone",
    phonePh: "+387 XX XXX XXX",
    people: "Number of People *",
    peoplePh: "Number of people",
    message: "Message (optional)",
    messagePh: "Preferred dates, special notes... (min. 4 people)",
    minPeople:
      "\u26A0\uFE0F Minimum group size is 4 people. For smaller groups, contact us directly on WhatsApp.",
    thanks: "Petar is receiving your inquiry!",
    respond: "We respond within 1 hour.",
    summaryBudget: "Budget",
    durations: [
      { value: "weekend", label: "Weekend", desc: "2-3 days" },
      { value: "short", label: "Short break", desc: "4-5 days" },
      { value: "week", label: "A week", desc: "7 days" },
      { value: "grand", label: "Grand Tour", desc: "9+ days" },
      { value: "custom", label: "Flexible", desc: "By arrangement" },
    ],
    budgets: [
      { value: "under100", label: "Under €100", desc: "Day trips" },
      { value: "100-200", label: "€100 – €200", desc: "Weekend adventures" },
      { value: "200-500", label: "€200 – €500", desc: "Premium tours" },
      { value: "500plus", label: "€500+", desc: "Multi-day adventures" },
      { value: "flexible", label: "Flexible", desc: "We'll figure it out" },
    ],
    origins: [
      "Local (BiH)",
      "Belgrade", "Sarajevo", "Dubrovnik", "Podgorica",
      "Zagreb", "Tirana", "Ljubljana", "Other",
    ],
    activities: [
      { value: "maglic", label: "\uD83C\uDFD4\uFE0F Maglić Summit", desc: "Highest peak in BiH" },
      { value: "trnovacko", label: "\u26FA Trnovačko Lake", desc: "Lakeside camping" },
      { value: "zelengora", label: "\uD83C\uDF3F Zelengora", desc: "Lakes and viewpoints" },
      { value: "rafting", label: "\uD83D\uDEF6 Tara Rafting", desc: "Tara river canyon" },
      { value: "kanjoning", label: "\uD83D\uDCA6 Hrčavka Canyoning", desc: "Canyon and water" },
      { value: "perucica", label: "\uD83C\uDF32 Perućica Rainforest", desc: "Skakavac waterfall" },
      { value: "durmitor", label: "\uD83C\uDFD4\uFE0F Durmitor", desc: "Žabljak and Black Lake" },
      { value: "via-ferrata", label: "\uD83E\uDD7D Via Ferrata Piva", desc: "Cliffs above the canyon" },
      { value: "kajak", label: "\uD83D\uDEF6 Kayak on Piva Lake", desc: "45km of silence" },
      { value: "jahanje", label: "\uD83D\uDC34 Horse Riding", desc: "Through the mountains" },
      { value: "katuni", label: "\uD83E\uDD5B Mountain Homesteads", desc: "Authentic mountain life" },
      { value: "teambuilding", label: "\uD83D\uDC65 Team Building", desc: "For groups and companies" },
    ],
  },
};

export default function AdventureBuilder() {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const lang = isEn ? t.en : t.sr;

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const [duration, setDuration] = useState("");
  const [origin, setOrigin] = useState("");
  const [budget, setBudget] = useState("");
  const [activities, setActivities] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", people: "", message: "",
  });

  const toggleActivity = (value: string) => {
    setActivities(prev =>
      prev.includes(value) ? prev.filter(a => a !== value) : [...prev, value]
    );
  };

  const handleSubmit = async () => {
    setSending(true);
    const selectedActivities = lang.activities
      .filter(a => activities.includes(a.value))
      .map(a => a.label)
      .join(", ");

    const selectedDuration = lang.durations.find(d => d.value === duration);
    const selectedBudget = lang.budgets.find(b => b.value === budget);

    const payload = {
      ...formData,
      duration: selectedDuration ? `${selectedDuration.label} (${selectedDuration.desc})` : duration,
      origin,
      budget: selectedBudget ? `${selectedBudget.label} (${selectedBudget.desc})` : budget,
      activities: selectedActivities,
      source: "Adventure Builder",
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
          <span>{isEn ? `Step ${step} of ${TOTAL_STEPS}` : `Korak ${step} od ${TOTAL_STEPS}`}</span>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lang.durations.map(d => (
              <button
                key={d.value}
                type="button"
                onClick={() => setDuration(d.value)}
                className={`p-5 rounded-xl border-2 text-left transition-all ${
                  duration === d.value
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-gray-700 bg-gray-800 hover:border-gray-500"
                }`}
              >
                <div className="font-semibold text-white text-lg">{d.label}</div>
                <div className="text-gray-400 text-sm mt-1">{d.desc}</div>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            disabled={!duration}
            className="mt-8 w-full py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-lg"
          >
            {lang.next}
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">{lang.step2Title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {lang.origins.map(o => (
              <button
                key={o}
                type="button"
                onClick={() => setOrigin(o)}
                className={`p-4 rounded-xl border-2 text-center transition-all ${
                  origin === o
                    ? "border-emerald-500 bg-emerald-500/10 text-white"
                    : "border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500"
                }`}
              >
                {o}
              </button>
            ))}
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
              disabled={!origin}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {lang.next}
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">{lang.step2bTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {lang.budgets.map(b => (
              <button
                key={b.value}
                type="button"
                onClick={() => setBudget(b.value)}
                className={`p-5 rounded-xl border-2 text-left transition-all ${
                  budget === b.value
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-gray-700 bg-gray-800 hover:border-gray-500"
                }`}
              >
                <div className="font-semibold text-white text-lg">{b.label}</div>
                <div className="text-gray-400 text-sm mt-1">{b.desc}</div>
              </button>
            ))}
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
              disabled={!budget}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {lang.next}
            </button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{lang.step3Title}</h3>
          <p className="text-gray-400 mb-8">{lang.step3Subtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {lang.activities.map(a => (
              <button
                key={a.value}
                type="button"
                onClick={() => toggleActivity(a.value)}
                className={`p-4 rounded-xl border-2 text-left transition-all ${
                  activities.includes(a.value)
                    ? "border-emerald-500 bg-emerald-500/10"
                    : "border-gray-700 bg-gray-800 hover:border-gray-500"
                }`}
              >
                <div className="font-semibold text-white">{a.label}</div>
                <div className="text-gray-400 text-sm mt-0.5">{a.desc}</div>
              </button>
            ))}
          </div>
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 py-4 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              {lang.back}
            </button>
            <button
              type="button"
              onClick={() => setStep(5)}
              disabled={activities.length === 0}
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {lang.next}
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">{lang.step4Title}</h3>

          <div className="bg-gray-800 rounded-xl p-5 mb-8 border border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-400 block mb-1">{isEn ? "Duration" : "Trajanje"}</span>
                <span className="text-white font-medium">
                  {lang.durations.find(d => d.value === duration)?.label}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">{isEn ? "From" : "Odakle"}</span>
                <span className="text-white font-medium">{origin}</span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">{lang.summaryBudget}</span>
                <span className="text-white font-medium">
                  {lang.budgets.find(b => b.value === budget)?.label}
                </span>
              </div>
              <div>
                <span className="text-gray-400 block mb-1">{isEn ? "Activities" : "Aktivnosti"}</span>
                <span className="text-white font-medium">{activities.length} {isEn ? "selected" : "odabrano"}</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-6">
            <p className="text-amber-300 text-sm">{lang.minPeople}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.name}</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder="vas@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.phone}</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder={lang.phonePh}
              />
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">{lang.people}</label>
              <input
                type="number"
                required
                min={4}
                max={50}
                value={formData.people}
                onChange={e => setFormData({ ...formData, people: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
                placeholder={lang.peoplePh}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-gray-300 mb-2">{lang.message}</label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                placeholder={lang.messagePh}
              />
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              type="button"
              onClick={() => setStep(4)}
              className="flex-1 py-4 border border-gray-700 text-gray-300 hover:bg-gray-800 font-semibold rounded-xl transition-colors"
            >
              {lang.back}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={
                !formData.name ||
                !formData.email ||
                !formData.people ||
                Number(formData.people) < 4 ||
                Number(formData.people) > 50 ||
                sending
              }
              className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {sending ? lang.sending : lang.send}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
