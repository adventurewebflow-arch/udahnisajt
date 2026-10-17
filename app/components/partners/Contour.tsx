/**
 * Topographic contour texture, copied verbatim from
 * design-reference/partneri-prototip.html (.contour in the hero and the CTA).
 */

const HERO_PATHS = [
  "M-50,180 C250,90 500,240 780,150 1050,70 1300,190 1300,190",
  "M-50,260 C250,170 520,320 800,230 1080,150 1300,270 1300,270",
  "M-50,350 C260,270 540,410 820,320 1090,240 1300,350 1300,350",
  "M-50,450 C260,380 540,510 820,420 1100,340 1300,450 1300,450",
  "M-50,560 C260,490 540,610 820,520 1100,450 1300,560 1300,560",
];

const CTA_PATHS = [
  "M-50,120 C250,60 520,180 800,110 1080,50 1300,150 1300,150",
  "M-50,220 C260,150 540,270 820,190 1100,120 1300,230 1300,230",
  "M-50,330 C260,260 540,380 820,300 1100,230 1300,330 1300,330",
  "M-50,430 C260,370 540,480 820,400 1100,330 1300,430 1300,430",
];

export default function Contour({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const isHero = variant === "hero";

  return (
    <div className="pointer-events-none absolute inset-0 opacity-50" aria-hidden="true">
      <svg
        viewBox={isHero ? "0 0 1200 700" : "0 0 1200 500"}
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        {(isHero ? HERO_PATHS : CTA_PATHS).map((d) => (
          <path key={d} d={d} fill="none" stroke="#10b981" strokeWidth={1} opacity={0.14} />
        ))}
      </svg>
    </div>
  );
}
