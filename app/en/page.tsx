import Image from "next/image";
import Link from "next/link";
import AdventureCard from "../components/AdventureCard";
import GalleryPreview from "../components/GalleryPreview";
import InquiryForm from "../components/InquiryForm";
import Accordion from "../components/Accordion";
import NewsletterSection from "../components/NewsletterSection";
import {
  popularAdventuresEN,
  premiumAdventuresEN,
  dayTripAdventuresEN,
  multiDayAdventuresEN,
} from "../data/adventures-en";
import type { Metadata } from "next";

const BASE = "https://www.udahniavanturu.com";

const faqsEn = [
  {
    q: "Can I join alone?",
    a: "Absolutely! You can come alone, as a couple, or with a group — it doesn't matter. Everyone becomes a team here. Our groups are small and the atmosphere means everyone gets to know each other on day one.",
  },
  {
    q: "Is camping equipment provided?",
    a: "Yes, all necessary equipment is provided — tents, sleeping bags, mats and kitchen. You only need to bring your personal belongings.",
  },
  {
    q: "Does everyone get their own tent?",
    a: "Yes, every participant has their own tent. No sharing — your space, your privacy.",
  },
  {
    q: "How do I book a spot?",
    a: "You can book via the contact form on our website, by email, Instagram DM or directly on WhatsApp +387 65 797 200. We respond within 1 hour.",
  },
  {
    q: "How many people do I need for a private tour?",
    a: "The minimum group size is 4 people. Private tours are available at a 20% higher price per person — contact us for a quote.",
  },
  {
    q: "What equipment do I need?",
    a: "No special mountain gear required. In snow-free season, sturdy shoes (not trainers), a backpack large enough for personal hygiene, a change of clothes and water, and trekking poles if you use them. We send you a detailed gear list before the tour.",
  },
  {
    q: "Is there an age limit?",
    a: "There is no age limit! Vesna joined us at 71 and climbed Maglić — the highest peak in Bosnia and Herzegovina. Tours are adapted to all ages and fitness levels. We'll honestly advise you when choosing a tour.",
  },
  {
    q: "What's included in the price?",
    a: "Every tour has a detailed list of what is and isn't included — no hidden costs. Generally included: transfer, guide, national park entry fees, equipment and meals as listed for each tour.",
  },
  {
    q: "What if the weather is bad?",
    a: "Safety is our priority. In case of rain, snow or any situation where we cannot guarantee safety — the tour is cancelled or rescheduled. We notify all participants in advance via the WhatsApp group.",
  },
  {
    q: "How does payment work?",
    a: "A deposit is required to confirm your booking. The remaining balance is due no later than 10 days before departure. Full payment details are provided at the time of booking.",
  },
];

const faqEnAccordionItems = faqsEn.map(({ q, a }) => ({ title: q, content: a }));

export const metadata: Metadata = {
  title: "Udahni Avanturu - Outdoor Adventure Tours",
  description: "Discover the beauty of Bosnia and Herzegovina through hiking, rafting, and camping. Unforgettable adventures in nature.",
  alternates: {
    canonical: `${BASE}/en`,
    languages: {
      sr: BASE,
      en: `${BASE}/en`,
    },
  },
};

export default function HomeEN() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="relative min-h-[78vh]">
          <Image
            src="/hero.webp"
            alt="Udahni Avanturu hero"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[90%_70%] md:object-center"
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/55" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08),transparent_55%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 bg-gradient-to-b from-transparent to-slate-950" />
          </div>
          <div className="relative mx-auto flex min-h-[78vh] max-w-6xl items-center justify-center px-4 py-20 text-center">
            <div className="max-w-3xl">
              <div className="mb-4 flex flex-col items-center gap-2">
                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-100/90">
                    Hiking • Rafting • Canyoning • Camping
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 text-xs sm:text-sm">
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Sutjeska</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">Piva Nature Park</span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-slate-200/90">NP Durmitor</span>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-[0_12px_40px_rgba(0,0,0,0.75)]">
                Sutjeska is waiting.{" "}
                <span className="text-emerald-400">Breathe adventure.</span>
              </h1>

              <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-100/90 leading-relaxed drop-shadow-[0_10px_30px_rgba(0,0,0,0.75)]">
                Highest peak in BiH. Oldest rainforest in Europe. Deepest canyon in Europe. Wild and untouched — this is Sutjeska.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/en/kreiraj-avanturu"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition shadow-[0_18px_45px_-20px_rgba(16,185,129,0.65)]"
                >
                  Build Your Adventure
                </a>
                <a
                  href="#tours"
                  className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  View Tours
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Tours */}
      <section id="tours" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Popular Tours</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularAdventuresEN.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      {/* Premium Tours */}
      <section id="premium" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Premium Tours</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Premium tours are private, handpicked adventures at the most attractive locations. Small groups, personalised approach, and an unforgettable experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumAdventuresEN.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      {/* Multi-day Tours Section */}
      <section id="multi-day" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Multi-day Adventures</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            For those who want more than a weekend. Multi-day tours that genuinely change you — mountain, canyon, lake, authentic people and an experience you carry with you forever.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {multiDayAdventuresEN.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      {/* Day Trips */}
      <section id="day-trips" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Day Trips</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
            Day trips by arrangement &ndash; ideal for those with limited time who still want to enjoy nature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dayTripAdventuresEN.map((adventure) => (
              <AdventureCard key={adventure.id} adventure={adventure} linkPrefix="/en/tours" />
            ))}
          </div>
        </div>
      </section>

      <GalleryPreview />

      {/* About */}
      <section id="about" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">About Us</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">&#128101;</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Small Groups</h3>
              <p className="text-slate-400">
                We organise tours with a small number of participants to ensure a personalised approach.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">&#127968;</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Homely Approach</h3>
              <p className="text-slate-400">
                Our warm approach makes you feel like part of the family.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">&#128205;</div>
              <h3 className="text-xl font-semibold mb-2 text-white">Top Locations</h3>
              <p className="text-slate-400">
                Carefully selected locations showcasing the most beautiful parts of Bosnia and Herzegovina.
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/o-nama"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <NewsletterSection lang="en" />

      <section id="faq" className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-2">Frequently asked questions</h2>
        <p className="text-slate-400 mb-10">Everything you need to know before your first adventure.</p>
        <Accordion items={faqEnAccordionItems} />
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-white mb-3">Contact Us</h2>
            <div className="w-16 h-1 bg-emerald-400"></div>
          </div>
          <InquiryForm />
        </div>
      </section>
    </main>
  );
}
