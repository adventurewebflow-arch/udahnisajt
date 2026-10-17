import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactCTA from "../../../components/partners/ContactCTA";
import Contour from "../../../components/partners/Contour";
import PhotoSlot from "../../../components/partners/PhotoSlot";
import { BTN_LINE, WRAP } from "../../../components/partners/styles";
import { getPartnerExperience, partnerExperiences } from "@/lib/partnerExperiences";
import { SITE_URL, enOnlyHreflang } from "@/lib/slugMap";

export async function generateStaticParams() {
  return partnerExperiences.map((experience) => ({ slug: experience.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const experience = getPartnerExperience(slug);

  if (!experience) {
    return { title: "Experience not found" };
  }

  const url = `${SITE_URL}/en/partners/${slug}`;
  const title = `${experience.title} — Sutjeska Ground Operator | Udahni Avanturu B2B`;
  const description = experience.intro;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: enOnlyHreflang(`/en/partners/${slug}`),
    },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      locale: "en_US",
      images: [{ url: experience.image, alt: experience.imageAlt }],
    },
  };
}

const HERO_HEIGHT = "clamp(320px, 52vh, 560px)";

export default async function PartnerExperiencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getPartnerExperience(slug);

  if (!experience) {
    notFound();
  }

  const { title, tagline, heroLabel, image, imageAlt, intro, sections, facts } = experience;

  return (
    <>
      {/* HERO */}
      <header
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: HERO_HEIGHT }}
      >
        <div className="absolute inset-0">
          <PhotoSlot
            label={heroLabel}
            src={image}
            alt={imageAlt}
            sizes="100vw"
            priority
            bordered={false}
            minHeight={HERO_HEIGHT}
          />
        </div>
        {/* Stronger in the middle than the landing hero: this hero is shorter, so
            the pill and H1 sit where that gradient is still near-transparent. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,6,23,.55), rgba(2,6,23,.45) 35%, rgba(2,6,23,.94))",
          }}
        />
        <Contour variant="cta" />

        <div className={`relative z-[3] pb-12 ${WRAP}`}>
          <span className="mb-[18px] inline-flex items-center gap-[9px] rounded-full border border-emerald-500/40 bg-emerald-500/10 px-[15px] py-2 text-[13.5px] font-semibold text-emerald-400">
            <span className="h-[7px] w-[7px] rounded-full bg-emerald-500" />
            Sutjeska National Park · Bosnia
          </span>
          <h1 className="max-w-[18ch] text-[clamp(32px,6vw,60px)] font-extrabold">{title}</h1>
          <p className="mt-4 max-w-[46ch] text-[clamp(16px,2vw,21px)] text-gray-300">{tagline}</p>
        </div>
      </header>

      {/* INTRO + READ MORE */}
      <section className="py-[64px]">
        <div className={WRAP}>
          <p className="max-w-[62ch] text-[18px] text-gray-300">{intro}</p>

          <div className="mt-10 grid max-w-[62ch] gap-8">
            {sections.map((section) => (
              <div key={section.h}>
                <h2 className="mb-2 text-[22px] font-bold">{section.h}</h2>
                <p className="text-[15.5px] text-gray-400">{section.body}</p>
              </div>
            ))}
          </div>

          {/* FACTS */}
          <dl className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-700 md:grid-cols-3">
            <div className="border-b border-gray-700 px-[26px] py-6 md:border-b-0 md:border-r">
              <dt className="mb-[9px] text-[13px] font-semibold text-emerald-400">Duration</dt>
              <dd className="ua-disp text-[19px] font-bold">{facts.duration}</dd>
            </div>
            <div className="border-b border-gray-700 px-[26px] py-6 md:border-b-0 md:border-r">
              <dt className="mb-[9px] text-[13px] font-semibold text-emerald-400">Difficulty</dt>
              <dd className="ua-disp text-[19px] font-bold">{facts.difficulty}</dd>
            </div>
            <div className="px-[26px] py-6">
              <dt className="mb-[9px] text-[13px] font-semibold text-emerald-400">Season</dt>
              <dd className="ua-disp text-[19px] font-bold">{facts.season}</dd>
            </div>
          </dl>

          <div className="mt-10">
            <Link href="/en/partners" className={BTN_LINE}>
              ← Back to partners
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA emailSubject={`Partnership — ${title}`} />
    </>
  );
}
