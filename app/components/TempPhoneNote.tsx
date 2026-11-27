import type { ReactNode } from "react";
import { SHOW_TEMP_PHONE, TEMP_PHONE, TEMP_PHONE_TEXT } from "@/lib/contact";

const LINK = "text-emerald-400 hover:text-emerald-300";

export default function TempPhoneNote({
  lang,
  className,
}: {
  lang: "sr" | "en";
  className?: string;
}) {
  if (!SHOW_TEMP_PHONE) return null;

  const text = TEMP_PHONE_TEXT[lang];
  const parts: ReactNode[] = [];
  let rest = text;
  let key = 0;

  while (rest.length > 0) {
    const phoneAt = rest.indexOf(TEMP_PHONE.display);
    const viberAt = rest.indexOf("Viber");
    const candidates = [phoneAt, viberAt].filter((i) => i >= 0);
    if (candidates.length === 0) {
      parts.push(rest);
      break;
    }
    const at = Math.min(...candidates);
    if (at > 0) parts.push(rest.slice(0, at));
    if (at === phoneAt) {
      parts.push(
        <a key={key++} href={TEMP_PHONE.wa} target="_blank" rel="noopener noreferrer" className={LINK}>
          {TEMP_PHONE.display}
        </a>
      );
      rest = rest.slice(at + TEMP_PHONE.display.length);
    } else {
      parts.push(
        <a key={key++} href={TEMP_PHONE.viber} className={LINK}>
          Viber
        </a>
      );
      rest = rest.slice(at + "Viber".length);
    }
  }

  return <p className={`text-sm text-slate-400 ${className ?? ""}`}>{parts}</p>;
}
