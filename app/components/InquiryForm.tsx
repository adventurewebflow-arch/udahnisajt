"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { adventures } from "../data/adventures";
import { adventuresEN } from "../data/adventures-en";

interface InquiryFormProps {
  tourTitle?: string;
  tourSlug?: string;
}

export default function InquiryForm({ tourTitle, tourSlug }: InquiryFormProps) {
  const pathname = usePathname();
  const isEn = pathname.startsWith("/en");
  const tourList = isEn ? adventuresEN : adventures;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    numberOfPeople: "",
    selectedTour: tourSlug || "",
    selectedDate: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedAdventure = tourList.find((a) => a.slug === formData.selectedTour);
  const availableDates = selectedAdventure?.dates ?? [];

  const FORMSPREE_URL = "https://formspree.io/f/xqedwzll";

  const t = isEn
    ? {
        bookPrefix: "Book:",
        fullName: "Full Name *",
        fullNamePh: "Your full name",
        phone: "Phone",
        numPeople: "Number of People *",
        numPeoplePh: "Number of people",
        selectTour: "Select Tour *",
        selectTourPh: "Select a tour",
        selectDate: "Select Date *",
        selectDatePh: "Select a date",
        noDates: "No available dates",
        message: "Message",
        messagePh: "Additional information or questions...",
        submit: "Send Inquiry",
        thanks: "Thank you for your inquiry",
        respond: "We will respond within 1 hour.",
        notSent: "Not sent. Check Console (F12) for error.",
        network: "Network error. Please try again.",
      }
    : {
        bookPrefix: "Rezerviši:",
        fullName: "Ime i prezime *",
        fullNamePh: "Vaše ime i prezime",
        phone: "Telefon",
        numPeople: "Broj osoba *",
        numPeoplePh: "Broj osoba",
        selectTour: "Izbor ture *",
        selectTourPh: "Odaberite turu",
        selectDate: "Izaberi datum *",
        selectDatePh: "Odaberi datum",
        noDates: "Nema dostupnih datuma",
        message: "Poruka",
        messagePh: "Dodatne informacije ili pitanja...",
        submit: "Pošalji upit",
        thanks: "Hvala Vam na upitu",
        respond: "Odgovaramo u roku 1h.",
        notSent: "Nije poslato. Pogledaj Console (F12) za grešku.",
        network: "Greška sa internetom. Pokušaj ponovo.",
      };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const payload = {
        ...formData,
        tourTitle: tourTitle ?? "",
        tourSlug: tourSlug ?? "",
        selectedTourTitle: selectedAdventure?.title ?? "",
      };

      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        console.error("Formspree error:", text);
        alert(t.notSent);
        return;
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        numberOfPeople: "",
        selectedTour: tourSlug || "",
        selectedDate: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert(t.network);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "selectedTour") {
      setFormData({
        ...formData,
        [name]: value,
        selectedDate: "",
      });
      return;
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (submitted) {
    return (
      <div className="bg-gray-800 rounded-xl p-8 text-center">
        <div className="text-emerald-400 text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-white mb-2">{t.thanks}</h3>
        <p className="text-gray-300">{t.respond}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8">
      {tourTitle && (
        <h3 className="text-2xl font-bold text-white mb-6">
          {t.bookPrefix} {tourTitle}
        </h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            {t.fullName}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder={t.fullNamePh}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="vas@email.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            {t.phone}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="+387 XX XXX XXX"
          />
        </div>

        <div>
          <label htmlFor="numberOfPeople" className="block text-sm font-medium text-gray-300 mb-2">
            {t.numPeople}
          </label>
          <input
            type="number"
            id="numberOfPeople"
            name="numberOfPeople"
            required
            min="1"
            value={formData.numberOfPeople}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder={t.numPeoplePh}
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="selectedTour" className="block text-sm font-medium text-gray-300 mb-2">
            {t.selectTour}
          </label>
          <select
            id="selectedTour"
            name="selectedTour"
            required
            value={formData.selectedTour}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="">{t.selectTourPh}</option>
            {tourList.map((adventure) => (
              <option key={adventure.id} value={adventure.slug}>
                {adventure.title}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-300 mb-2">
            {t.selectDate}
          </label>
          <select
            id="selectedDate"
            name="selectedDate"
            required
            value={formData.selectedDate}
            onChange={handleChange}
            disabled={!formData.selectedTour || availableDates.length === 0}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <option value="">{t.selectDatePh}</option>
            {availableDates.length === 0 ? (
              <option disabled>{t.noDates}</option>
            ) : (
              availableDates.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))
            )}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            {t.message}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            placeholder={t.messagePh}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
      >
        {t.submit}
      </button>
    </form>
  );
}
