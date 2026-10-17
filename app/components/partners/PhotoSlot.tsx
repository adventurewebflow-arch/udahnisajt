import Image from "next/image";

type PhotoSlotProps = {
  /** Brief of the shot. Shown top-left only while the slot is still empty. */
  label: string;
  /** Public path under /images/b2b-partner/. Falls back to the placeholder when omitted. */
  src?: string;
  alt?: string;
  sizes?: string;
  /** Only for above-the-fold heroes. */
  priority?: boolean;
  /** Extra classes on the <Image>, e.g. object-position for portrait sources. */
  imageClassName?: string;
  /** "b" is the warmer green variant (.ph.v2 in the prototype). */
  variant?: "a" | "b";
  /** Hero and gallery cards draw their own border on the wrapper instead. */
  bordered?: boolean;
  /** CSS length; the prototype uses 200px by default, 240/340 in the gallery. */
  minHeight?: string;
  className?: string;
};

const GRADIENTS = {
  a: "radial-gradient(120% 120% at 30% 20%, #12303a, #020617 70%)",
  b: "radial-gradient(120% 120% at 70% 30%, #123a2b, #020617 70%)",
} as const;

/**
 * Photo slot for the B2B partner pages. Renders the real image when `src` is
 * given, otherwise the labelled dark placeholder. The image sits at the bottom
 * of the stack so the callers' scrims and captions stay on top of it.
 */
export default function PhotoSlot({
  label,
  src,
  alt = "",
  sizes,
  priority = false,
  imageClassName = "",
  variant = "a",
  bordered = true,
  minHeight = "200px",
  className = "",
}: PhotoSlotProps) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${
        bordered ? "border border-gray-700" : ""
      } ${className}`}
      style={{ background: GRADIENTS[variant], minHeight }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`object-cover ${imageClassName}`}
        />
      ) : (
        <span className="absolute left-[14px] top-3 text-[11px] text-slate-100/50">◮ {label}</span>
      )}
    </div>
  );
}
