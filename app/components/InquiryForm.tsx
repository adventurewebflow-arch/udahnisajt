"use client";

import { useState } from "react";
import { adventures } from "../data/adventures";

interface InquiryFormProps {
  tourTitle?: string;
  tourSlug?: string;
}

export default function InquiryForm({ tourTitle, tourSlug }: InquiryFormProps) {
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

  const selectedAdventure = adventures.find((a) => a.slug === formData.selectedTour);
  const availableDates = selectedAdventure?.dates ?? [];

  const FORMSPREE_URL = "https://formspree.io/f/xqedwzll";

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
      alert("Nije poslato. Pogledaj Console (F12) za grešku.");
      return;
    }

    setSubmitted(true);

    // reset polja
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
    alert("Greška sa internetom. Pokušaj ponovo.");
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
        <h3 className="text-2xl font-bold text-white mb-2">Hvala Vam na upitu</h3>
        <p className="text-gray-300">Odgovaramo u roku 1h.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-xl p-8">
      {tourTitle && (
        <h3 className="text-2xl font-bold text-white mb-6">
          Rezerviši: {tourTitle}
        </h3>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Ime i prezime *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors"
            placeholder="Vaše ime i prezime"
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
            Telefon
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
            Broj osoba *
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
            placeholder="Broj osoba"
          />
        </div>

        <div className="md:col-span-2">
          <label htmlFor="selectedTour" className="block text-sm font-medium text-gray-300 mb-2">
            Izbor ture *
          </label>
          <select
            id="selectedTour"
            name="selectedTour"
            required
            value={formData.selectedTour}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition-colors"
          >
            <option value="">Odaberite turu</option>
            {adventures.map((adventure) => (
              <option key={adventure.id} value={adventure.slug}>
                {adventure.title}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="selectedDate" className="block text-sm font-medium text-gray-300 mb-2">
            Izaberi datum *
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
            <option value="">Odaberi datum</option>
            {availableDates.length === 0 ? (
              <option disabled>Nema dostupnih datuma</option>
            ) : (
              availableDates.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))
            )}
          </select>
        </div>

        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Poruka
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
            placeholder="Dodatne informacije ili pitanja..."
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
      >
        Pošalji upit
      </button>
    </form>
  );
}
