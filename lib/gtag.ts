export const ADS_ID = "AW-18273450124";

export const CONVERSIONS = {
  forma: `${ADS_ID}/T8hRCOvU_MkcEIzxuolE`,
  whatsapp: `${ADS_ID}/6M1KCO7U_MkcEIzxuolE`,
} as const;

type ConversionKey = keyof typeof CONVERSIONS;

export function trackConversion(key: ConversionKey) {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "conversion", { send_to: CONVERSIONS[key] });
}
