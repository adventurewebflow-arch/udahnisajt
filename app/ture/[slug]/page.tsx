import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAdventureBySlug, adventures } from "../../data/adventures";
import InquiryForm from "../../components/InquiryForm";
import Accordion from "../../components/Accordion";
import type { Metadata } from "next";

console.log("DETAIL PAGE MODULE LOADED ✅");
console.log("ADVENTURES COUNT (module):", adventures?.length);
console.log("FIRST 5 SLUGS (module):", adventures?.slice(0,5).map(a => a.slug));

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
  };
}

export default async function TourDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  console.log("PARAMS.SLUG:", slug);
  console.log("DECODED:", decodeURIComponent(slug));
  console.log("FOUND:", !!getAdventureBySlug(slug));
  
  const adventure = getAdventureBySlug(slug);

  if (!adventure) {
    notFound();
  }

  const itineraryItems =
    adventure.itinerary?.map((day) => ({
      title: day.dayTitle,
      content: <p>{day.description}</p>,
    })) ?? [];

  const faqItems =
    adventure.faqs?.map((faq) => ({
      title: faq.q,
      content: <p>{faq.a}</p>,
    })) ?? [];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="ua-tour-hero relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="ua-tour-heroMedia absolute inset-0">
          {adventure.image ? (
            <>
              <Image
                src={adventure.image}
                alt={adventure.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
          )}
        </div>

        <div className="ua-tour-heroText relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {adventure.title}
          </h1>
          <p className="ua-tour-sub text-xl text-gray-200">{adventure.shortDescription}</p>
          {adventure.location && (
            <p className="ua-tour-loc text-lg text-gray-300 mt-2">📍 {adventure.location}</p>
          )}
          {(adventure.duration || adventure.difficulty || adventure.groupSize) && (
            <div className="ua-tour-chips mt-4 flex flex-wrap justify-center gap-2">
              {adventure.duration && (
                <span className="ua-tour-chip px-3 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm">
                  {adventure.duration}
                </span>
              )}
              {adventure.difficulty && (
                <span className="ua-tour-chip px-3 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm">
                  {adventure.difficulty}
                </span>
              )}
              {adventure.groupSize && (
                <span className="ua-tour-chip px-3 py-1.5 rounded-full bg-white/10 text-gray-200 text-sm">
                  {adventure.groupSize}
                </span>
              )}
            </div>
          )}
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
              <p className="text-lg text-gray-300 leading-relaxed">{adventure.shortDescription}</p>
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

            {/* Itinerary */}
            {itineraryItems.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Itinerar</h2>
                <Accordion items={itineraryItems} defaultOpenIndex={0} />
              </section>
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
                  {adventure.dates && adventure.dates.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-400 mb-3">Dostupni datumi</div>
                      <div className="ua-dates-grid">
                        {adventure.dates.map((date, index) => (
                          <div
                            key={index}
                            className="ua-dates-grid__item px-2 py-1.5 bg-gray-900 rounded-lg text-emerald-400 font-medium"
                          >
                            {date}
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
