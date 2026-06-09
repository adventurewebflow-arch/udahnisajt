"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function GridGallery({
  images,
  title = "Galerija",
}: {
  images: GalleryImage[];
  title?: string;
}) {
  const [lightbox, setLightbox] = useState(false);
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  const open = (i: number) => {
    setCurrent(i);
    setLightbox(true);
  };

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null || images.length < 2) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX == null) return;
    const dx = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) next();
    else prev();
  };

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next]);

  if (!images || images.length === 0) return null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-white md:text-3xl mb-6">{title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => open(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900 cursor-pointer"
            aria-label={`Otvori sliku: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setLightbox(false)}
          role="presentation"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition"
            aria-label="Prethodna slika"
          >
            ‹
          </button>
          <div
            className="relative w-full max-w-4xl mx-4"
            style={{ height: "85vh" }}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-contain pointer-events-none"
              sizes="100vw"
              priority
            />
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl transition"
            aria-label="Sljedeća slika"
          >
            ›
          </button>
          <button
            type="button"
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
            aria-label="Zatvori"
          >
            ✕
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm pointer-events-none">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
}
