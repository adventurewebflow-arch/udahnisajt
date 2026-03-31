import AdventureBuilder from "../../components/AdventureBuilder";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build Your Adventure – Udahni Avanturu",
  description: "Select what you want — Maglić, rafting, canyoning, Durmitor, camping — and send an inquiry. We'll build a tour made for you.",
  alternates: {
    canonical: "https://www.udahniavanturu.com/en/build-your-adventure",
  },
};

export default function BuildYourAdventure() {
  return (
    <main className="min-h-screen pt-20">
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Build Your Adventure
            </h1>
            <p className="text-xl text-gray-400">
              Tell us what you want — we'll put together a tour made for you.
            </p>
          </div>
          <AdventureBuilder />
        </div>
      </section>
    </main>
  );
}
