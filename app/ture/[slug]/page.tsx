import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAdventureBySlug, adventures } from "../../data/adventures";
import { formatTourDate, getUpcomingTourDates } from "../../data/tour-dates";
import TourSchema from "../../components/TourSchema";
import InquiryForm from "../../components/InquiryForm";
import Accordion from "../../components/Accordion";
import TourGallery from "@/app/components/TourGallery";
import { tourHreflang } from "@/lib/slugMap";
import type { Metadata } from "next";

const BASE = "https://www.udahniavanturu.com";

// Re-render once a day so departures that have passed drop off without a deploy.
export const revalidate = 86400;

export async function generateStaticParams() {
  return adventures.map((adventure) => ({
    slug: adventure.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const adventure = getAdventureBySlug(slug);

  if (!adventure) {
    return {
      title: "Tura nije pronađena",
    };
  }

  return {
    title: `${adventure.title} - Udahni Avanturu`,
    description: adventure.shortDescription,
    alternates: {
      canonical: `${BASE}/ture/${slug}`,
      languages: tourHreflang(slug),
    },
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adventure = getAdventureBySlug(slug);

  if (!adventure) {
    notFound();
  }

  const upcomingDates = getUpcomingTourDates(adventure.slug);

  const itineraryItems =
    adventure.itinerary?.map((d) => ({
      title: d.dayTitle,
      content: (
        <div className="text-gray-300 leading-relaxed space-y-4">
          {(d.description ?? "")
            .split(/\n\s*\n/)
            .map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
        </div>
      ),
    })) ?? [];
  const faqItems =
    adventure.faqs?.map((f) => ({
      title: f.q,
      content: <p className="text-gray-300 leading-relaxed whitespace-pre-line">{f.a}</p>,
    })) ?? [];

  return (
    <main className="min-h-screen pt-20">
      <TourSchema adventure={adventure} slug={slug} lang="sr" />
      <section className="relative h-[55vh] min-h-[360px] lg:h-[65vh] lg:min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          {adventure.image ? (
            <Image
              src={adventure.image}
              alt={adventure.imageAlt ?? adventure.title}
              fill
              className="object-cover"
              style={{ objectPosition: adventure.imagePosition ?? "center" }}
              priority
              sizes="100vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 pb-10 md:pb-14">
          <div className="flex items-center gap-2 text-emerald-400 text-xs uppercase tracking-widest mb-3 font-medium">
            <span>
              {adventure.category === "popular"
                ? "Popularne ture"
                : adventure.category === "premium"
                  ? "Premium"
                  : adventure.category === "multi-day"
                    ? "Višednevne avanture"
                    : "Izleti"}
            </span>
            <span>·</span>
            <span>{adventure.duration}</span>
            <span>·</span>
            <span>{adventure.difficulty}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            {adventure.title}
          </h1>
          <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed">
            {adventure.shortDescription}
          </p>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* O turi */}
            <section>
              <h2 className="text-3xl font-bold mb-6">O turi</h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">
                {(adventure.aboutTour ?? adventure.shortDescription)
                  .split(/\n\s*\n/)
                  .map((para, i) => (
                    <p key={i}>{para.trim()}</p>
                  ))}
                {slug === "prasuma-perucica-vodopad-skakavac" && (
                  <p>
                    Više o samoj destinaciji pročitaj na stranici{" "}
                    <Link href="/perucica" className="text-emerald-400 hover:underline">
                      prašuma Perućica i vodopad Skakavac
                    </Link>
                    .
                  </p>
                )}
              </div>
            </section>

            {/* Highlights */}
            {adventure.highlights && adventure.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Najvažnije</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {adventure.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gray-800 rounded-lg p-4"
                    >
                      <div className="text-emerald-400 mt-1 flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {adventure.slug === "vikend-u-divljini" && (
              <a
                href="/vikend_divljina1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl px-5 py-3 text-emerald-400 hover:bg-emerald-500/20 transition text-sm font-medium mt-4"
              >
                📄 Preuzmi program ture (PDF)
              </a>
            )}

            {/* Itinerary */}
            {itineraryItems.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Itinerar</h2>
                <Accordion items={itineraryItems} defaultOpenIndex={0} />
              </section>
            )}

            {adventure.images && adventure.images.length > 0 && (
              <TourGallery images={adventure.images} />
            )}

            {/* Included */}
            {adventure.includes && adventure.includes.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Šta je uključeno</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {adventure.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-emerald-400 mt-0.5 flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Excluded */}
            {adventure.excludes && adventure.excludes.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Šta nije uključeno</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {adventure.excludes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-gray-500 mt-0.5 flex-shrink-0">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* FAQs */}
            {faqItems.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Često postavljana pitanja</h2>
                <Accordion items={faqItems} />
              </section>
            )}

            {slug === "kampovanje-trnovacko-jezero-maglic" && (
              <section>
                <Link
                  href="/trnovacko-jezero"
                  className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  Saznaj više o Trnovačkom jezeru →
                </Link>
              </section>
            )}
          </div>

          {/* Right Column - Sticky Details Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Detalji ture</h2>
                
                <div className="space-y-6">
                  {/* Cijena */}
                  {adventure.price && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Cijena</div>
                      <div className="text-2xl font-bold text-emerald-400">
                        {adventure.price}
                      </div>
                    </div>
                  )}

                  {/* Trajanje */}
                  {adventure.duration && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Trajanje</div>
                      <div className="text-lg font-semibold text-white">
                        {adventure.duration}
                      </div>
                    </div>
                  )}

                  {/* Težina */}
                  {adventure.difficulty && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Težina</div>
                      <div className="text-lg font-semibold text-white">
                        {adventure.difficulty}
                      </div>
                    </div>
                  )}

                  {/* Veličina grupe */}
                  {adventure.groupSize && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Veličina grupe</div>
                      <div className="text-lg font-semibold text-white">
                        {adventure.groupSize}
                      </div>
                    </div>
                  )}

                  {/* Prevoz */}
                  {adventure.transport && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Prevoz</div>
                      <div className="text-sm font-medium text-white leading-relaxed">
                        {adventure.transport}
                      </div>
                    </div>
                  )}

                  {/* Popusti na grupe */}
                  {adventure.discount && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Popusti na grupe</div>
                      <div className="text-lg font-semibold text-emerald-400">
                        {adventure.discount}
                      </div>
                    </div>
                  )}

                  {/* Dostupni datumi */}
                  {upcomingDates.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-400 mb-3">Dostupni datumi</div>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                        {upcomingDates.map((date) => (
                          <div
                            key={date.start}
                            className={`text-sm px-2 py-1 rounded-lg bg-gray-900 ${
                              date.soldOut ? "text-gray-500" : "text-emerald-400 font-medium"
                            }`}
                          >
                            <span className={date.soldOut ? "line-through" : ""}>
                              {formatTourDate(date)}
                            </span>
                            {date.soldOut && (
                              <span className="block text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                                Popunjeno
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Divider */}
                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="#kontakt-form"
                      className="w-full block text-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Rezerviši turu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <section id="kontakt-form" className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <InquiryForm tourTitle={adventure.title} tourSlug={adventure.slug} />
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/#popularne"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Nazad na ture
          </Link>
        </div>
      </section>
    </main>
  );
}
