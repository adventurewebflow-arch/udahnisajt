/**
 * Shared Tailwind class strings for the B2B partner pages, mapped 1:1 from
 * design-reference/partneri-prototip.html (.wrap, .lead, .sub, .btn-*).
 * Kept in one place so the landing page and the experience sub-pages stay
 * visually identical.
 */

export const WRAP = "mx-auto w-full max-w-[1160px] px-[22px]";

export const LEAD = "mb-4 max-w-[19ch] text-[clamp(27px,4.6vw,46px)] font-bold";

export const SUB = "max-w-[58ch] text-[17px] text-gray-400";

const BTN_BASE =
  "inline-block rounded-[11px] px-[26px] py-[15px] text-[15px] font-semibold transition duration-200";

export const BTN_EM = `${BTN_BASE} bg-emerald-500 text-[#04120c] hover:-translate-y-0.5 hover:bg-emerald-400`;

export const BTN_LINE = `${BTN_BASE} border-[1.5px] border-gray-700 text-slate-100 hover:border-emerald-500 hover:text-emerald-400`;
