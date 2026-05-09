"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

export default function TourGallery({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0);
  const [lightbox, setLightbox] = useState(false);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold text-white mb-4">Galerija</h2>

      <div
        className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 cursor-pointer"
        onClick={() => setLightbox(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setLightbox(true);
          }
        }}
        aria-label="Otvori galeriju preko cijelog ekrana"
      >
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition"
          aria-label="Prethodna slika"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg transition"
          aria-label="Sljedeća slika"
        >
          ›
        </button>
        <div className="absolute bottom-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
          {current + 1} / {images.length}
        </div>
      </div>

      <div className="flex gap-2 mt-3 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrent(i)}
            className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
              i === current ? "border-emerald-500" : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Slika ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
          >
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
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
            className="relative w-full max-w-4xl max-h-[85vh] aspect-[4/3] mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[current].src}
              alt={images[current].alt}
              fill
              className="object-contain"
              sizes="100vw"
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
