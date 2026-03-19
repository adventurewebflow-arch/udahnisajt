import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Breathe Adventure",
  description:
    "Breathe Adventure — Petar and Nevena. Over five years of adventures through Sutjeska, Zelengora, Trnovačko Lake and Perućica. Small groups, a family approach.",
};

export default function AboutPageEN() {
  return (
    <main className="min-h-screen pt-20 bg-slate-950">
      {/* Hero */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Us — Petar & Nevena
          </h1>
          <div className="w-16 h-1 bg-emerald-400 mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Breathe Adventure grew from a genuine love of nature, movement and life outdoors.
          </p>
        </div>
      </section>

      {/* Image grid */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10">
              <Image
                src="/images/tours/about/petar-nevena-1.webp"
                alt="Petar and Nevena – adventures in nature"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10">
              <Image
                src="/images/tours/about/petar-nevena-2.webp"
                alt="Petar and Nevena – tours in Sutjeska NP and surroundings"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Text section */}
      <section className="relative py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6 text-slate-300 leading-relaxed">
            <p>
              Breathe Adventure grew from a genuine love of nature, movement and life outdoors. We are Petar and Nevena, and for over five years we have been organising adventures and tours through the most beautiful corners of Bosnia and Herzegovina — from Sutjeska and Zelengora to Trnovačko Lake and Perućica, and to places that don&apos;t appear in standard tourist brochures.
            </p>
            <p>
              The idea behind Breathe Adventure was officially launched five years ago as a small, family-style project for people who want more than an ordinary trip. Today it is a community of adventurers who value good organisation, the right pace, safety and an atmosphere where everyone feels part of the team.
            </p>
            <p>
              Petar is a seasoned river skipper and licensed guide with extensive experience in challenging natural conditions. That&apos;s why safety always comes first — every tour is carefully planned, with no false promises and no rush. We only do what we know we can do well.
            </p>
            <p>
              Nevena is responsible for the creative and SEO direction of Breathe Adventure, runs our social media, carefully builds our visual identity and communication style, and is also actively involved on the tours themselves. Not everything happens behind a screen — one of us is always with the group, from the first step to the final goodbye.
            </p>
            <p>
              Alongside us, we work with licensed guides for hiking, canyoning and other specialised activities — people we trust and who share the same approach to their work. Our tours are not mass events; they are carefully chosen to be attractive, authentic and genuine.
            </p>
            <p>
              Breathe Adventure is not a tourist conveyor belt. It is an invitation to slow down, see nature as it really is and take away the feeling that you have been part of something real.
            </p>
          </div>
        </div>
      </section>

      {/* Value cards */}
      <section className="relative py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-10">
            What sets us apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Small groups
              </h3>
              <p className="text-slate-400">
                We run tours with a small number of participants to ensure a
                personalised approach and safety.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Family approach
              </h3>
              <p className="text-slate-400">
                Our family-style approach makes you feel part of the team, not
                like a tourist in a crowd.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-emerald-500/30 transition-colors">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                Top locations
              </h3>
              <p className="text-slate-400">
                Carefully chosen locations — Sutjeska NP, Zelengora, Trnovačko
                Lake, Perućica — the finest parts of Bosnia and Herzegovina.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/en#tours"
              className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-400 transition"
            >
              View Tours
            </Link>
            <Link
              href="/en#contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
