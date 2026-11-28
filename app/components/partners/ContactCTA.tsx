import Image from "next/image";
import WhatsAppTrackedLink from "../WhatsAppTrackedLink";
import Contour from "./Contour";
import { BTN_EM, BTN_LINE, WRAP } from "./styles";
import { PARTNER_IMAGE_BASE } from "@/lib/partnerExperiences";

const EMAIL = "udahniavanturu@gmail.com";
const WHATSAPP = "https://wa.me/38765797200";

export default function ContactCTA({
  emailSubject = "Partnership — Sutjeska 2027",
}: {
  emailSubject?: string;
}) {
  return (
    <section id="contact" className="pb-[82px] pt-[6px]">
      <div className={WRAP}>
        <div className="relative overflow-hidden rounded-[22px] border border-gray-700 bg-[#060b18]">
          <Image
            src={`${PARTNER_IMAGE_BASE}/ekipa_trnovacko_jezero.webp`}
            alt="Group at Trnovačko Lake with Udahni Avanturu"
            fill
            sizes="100vw"
            className="object-cover"
          />
          {/* Same emerald radial as the prototype, now translucent so the photo
              reads through it. The linear layer on top only bites in the lower
              half and plateaus at 78% so the contact row sits fully inside the
              dark zone: the radial alone left that text at 1.8:1 in the worst
              pixels, this holds it above 5:1. */}
          <div
            className="absolute inset-0"
            style={{
              background: [
                "linear-gradient(180deg, rgba(2,6,23,0) 30%, rgba(2,6,23,.9) 78%, rgba(2,6,23,.9) 100%)",
                "radial-gradient(130% 130% at 15% 20%, rgba(16,185,129,.30), rgba(6,11,24,.88) 60%)",
              ].join(", "),
            }}
          />
          <Contour variant="cta" />

          <div className="relative z-[2] px-[34px] py-[52px]">
            <h2 className="max-w-[17ch] text-[clamp(27px,4.6vw,44px)] font-extrabold">
              Let&apos;s put a group on the mountain in 2027.
            </h2>
            <p className="mt-[15px] max-w-[52ch] text-[16.5px] text-gray-300">
              Tell us what your travellers want — nights, activities, group size — and
              we&apos;ll build a tailored net rate. Or send your product manager on a free FAM
              visit this season and see the ground for yourself.
            </p>

            <div className="mt-[26px] flex flex-wrap gap-3">
              <a
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(emailSubject)}`}
                className={BTN_EM}
              >
                Email us
              </a>
              <WhatsAppTrackedLink
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_LINE}
              >
                WhatsApp
              </WhatsAppTrackedLink>
            </div>

            <div className="mt-[26px] flex flex-wrap gap-x-6 gap-y-2.5 text-[14.5px] text-gray-400">
              <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-emerald-400">
                ✉ {EMAIL}
              </a>
              <WhatsAppTrackedLink
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-400"
              >
                📞 +387 65 797 200
              </WhatsAppTrackedLink>
              <a
                href="https://instagram.com/udahniavanturu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-400"
              >
                ◎ @udahniavanturu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
