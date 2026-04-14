"use client";

import { useState } from "react";

const copy = {
  sr: {
    kicker: "Bez spama — obećanje",
    title: "Saznaj prvi kada otvorimo novi termin",
    subtitle:
      "Šaljemo samo kada ima nešto vrijedno — novi termin, vanredna tura, slobodno mjesto ili popust zadnji trenutak. Bez tjednih emailova. Odjaviš se jednim klikom.",
    bullet1: "Novi termini prije Instagrama",
    bullet2: "Vanredne ture",
    bullet3: "Popusti zadnji trenutak",
    success:
      "Prijavljeni ste! Javimo se čim otvorimo novi termin. \uD83C\uDFD4\uFE0F",
    placeholder: "tvoj@email.com",
    submit: "Prijavi se →",
    loading: "Šalje se...",
    error: "Greška pri prijavi. Pokušaj ponovo ili kontaktiraj nas na WhatsApp.",
  },
  en: {
    kicker: "No spam — we promise",
    title: "Be the first to know when we open new dates",
    subtitle:
      "We only send when there's something worth reading — new dates, a last-minute spot or a special tour. No weekly emails. Unsubscribe anytime.",
    bullet1: "New dates before Instagram",
    bullet2: "Special tours",
    bullet3: "Last-minute discounts",
    success:
      "You're in! We'll reach out as soon as we open new dates. \uD83C\uDFD4\uFE0F",
    placeholder: "your@email.com",
    submit: "Subscribe →",
    loading: "Sending...",
    error: "Something went wrong. Try again or contact us on WhatsApp.",
  },
} as const;

type NewsletterLang = keyof typeof copy;

export default function NewsletterSection({ lang = "sr" }: { lang?: NewsletterLang }) {
  const t = copy[lang];
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-emerald-900/20 border border-emerald-500/20 p-8 md:p-12">
        <div className="max-w-2xl">
          <p className="text-emerald-400 text-sm uppercase tracking-widest mb-3">{t.kicker}</p>
          <h2 className="text-3xl font-bold text-white mb-3">{t.title}</h2>
          <p className="text-slate-400 mb-6 leading-7">{t.subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              {t.bullet1}
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              {t.bullet2}
            </div>
            <div className="text-sm text-slate-500 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
              {t.bullet3}
            </div>
          </div>

          {status === "success" ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <p className="text-emerald-400 font-medium">{t.success}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.placeholder}
                className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-semibold rounded-xl transition-colors whitespace-nowrap"
              >
                {status === "loading" ? t.loading : t.submit}
              </button>
            </form>
          )}

          {status === "error" && <p className="text-red-400 text-sm mt-2">{t.error}</p>}
        </div>
      </div>
    </section>
  );
}
