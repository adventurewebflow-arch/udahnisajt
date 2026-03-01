import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAdventureBySlug, adventures } from "../../../data/adventures";
import InquiryForm from "../../../components/InquiryForm";
import Accordion from "../../../components/Accordion";
import type { Metadata } from "next";

function translatePeople(value: string): string {
  if (!value) return value;
  return value.replace(/\bosoba\b/gi, "people").trim();
}

function translateGroupDiscounts(value: string): string {
  if (!value) return value;
  return value
    .replace(/\bpopusta\b/gi, "discount")
    .replace(/\bgrupe\b/gi, "groups")
    .replace(/\bgrupa\b/gi, "group")
    .replace(/\bod\s+(\d+\+)\s*/gi, "of $1 ")
    .replace(/\bosoba\b/gi, "people")
    .replace(/za\s+groups\s+of/gi, "for groups of")
    .replace(/\bza\b/gi, "for")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function translateDuration(value: string): string {
  if (!value) return value;
  return value
    .replace(/\bdana\b/g, "days")
    .replace(/\bdan\b/g, "day")
    .replace(/\bnoći\b/g, "nights")
    .replace(/\bnoć\b/g, "night");
}

function translateDifficulty(value: string): string {
  const map: Record<string, string> = {
    Laka: "Easy",
    Srednja: "Medium",
    Teška: "Hard",
  };
  return map[value] ?? value;
}

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
    return { title: "Tour not found" };
  }

  return {
    title: `${adventure.title} - Udahni Avanturu`,
    description: adventure.shortDescription,
  };
}

export default async function TourDetailPageEN({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const adventure = getAdventureBySlug(slug);

  if (!adventure) {
    notFound();
  }

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
      {/* Hero Banner */}
      <section className="ua-tour-hero relative w-full min-h-[85vh] md:min-h-screen flex items-center justify-center">
        <div className="ua-tour-heroMedia absolute inset-0">
          {adventure.image ? (
            <>
              <div className="absolute inset-0">
                <Image
                  src={adventure.image}
                  alt={adventure.imageAlt ?? adventure.title}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="100vw"
                  style={{ objectPosition: adventure.imagePosition ?? "center" }}
                />
              </div>
              <div className="absolute inset-0 bg-black/40" aria-hidden />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
          )}
        </div>

        <div className="ua-tour-heroText relative z-10 w-full max-w-4xl mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {adventure.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-[70ch] mx-auto">
            {adventure.shortDescription}
          </p>
          {adventure.location && (
            <p className="text-lg text-gray-300 mt-2">{adventure.location}</p>
          )}
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* About */}
            <section>
              <h2 className="text-3xl font-bold mb-6">About the Tour</h2>
              <p className="text-lg text-gray-300 leading-relaxed">{adventure.aboutTour ?? adventure.shortDescription}</p>
            </section>

            {/* Highlights */}
            {adventure.highlights && adventure.highlights.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Highlights</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {adventure.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 bg-gray-800 rounded-lg p-4"
                    >
                      <div className="text-emerald-400 mt-1 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                <h2 className="text-3xl font-bold mb-6">Itinerary</h2>
                <Accordion items={itineraryItems} defaultOpenIndex={0} />
              </section>
            )}

            {/* Included */}
            {adventure.includes && adventure.includes.length > 0 && (
              <section>
                <h2 className="text-3xl font-bold mb-6">What&apos;s Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {adventure.includes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-emerald-400 mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
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
                <h2 className="text-3xl font-bold mb-6">Not Included</h2>
                <div className="grid md:grid-cols-2 gap-3">
                  {adventure.excludes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="text-gray-500 mt-0.5 flex-shrink-0">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
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
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion items={faqItems} />
              </section>
            )}
          </div>

          {/* Right Column - Sticky Details Card */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <h2 className="text-2xl font-bold mb-6">Tour Details</h2>

                <div className="space-y-6">
                  {adventure.price && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Price</div>
                      <div className="text-2xl font-bold text-emerald-400">
                        {adventure.price.replace(/po osobi\.?/i, "").trim()} per person
                      </div>
                    </div>
                  )}

                  {adventure.duration && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Duration</div>
                      <div className="text-lg font-semibold text-white">{translateDuration(adventure.duration)}</div>
                    </div>
                  )}

                  {adventure.difficulty && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Difficulty</div>
                      <div className="text-lg font-semibold text-white">{translateDifficulty(adventure.difficulty)}</div>
                    </div>
                  )}

                  {adventure.groupSize && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Group Size</div>
                      <div className="text-lg font-semibold text-white">{translatePeople(adventure.groupSize)}</div>
                    </div>
                  )}

                  {adventure.discount && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Group Discounts</div>
                      <div className="text-lg font-semibold text-emerald-400">{translateGroupDiscounts(adventure.discount)}</div>
                    </div>
                  )}

                  {adventure.dates && adventure.dates.length > 0 && (
                    <div>
                      <div className="text-sm text-gray-400 mb-3">Available Dates</div>
                      <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                        {adventure.dates.map((date, index) => (
                          <div
                            key={index}
                            className="text-sm px-2 py-1 rounded-lg bg-gray-900 text-emerald-400 font-medium"
                          >
                            {date}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="border-t border-gray-700 pt-6">
                    <a
                      href="#contact-form"
                      className="w-full block text-center px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors"
                    >
                      Book This Tour
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiry Form */}
      <section id="contact-form" className="py-12 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <InquiryForm tourTitle={adventure.title} tourSlug={adventure.slug} />
        </div>
      </section>

      {/* Back Link */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Link
            href="/en/tours"
            className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Tours
          </Link>
        </div>
      </section>
    </main>
  );
}
