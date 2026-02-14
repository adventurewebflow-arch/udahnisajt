"use client";

import Link from "next/link";
import Image from "next/image";
import { galleryImages } from "../data/gallery";

export default function GalleryPreview() {
  const items = galleryImages.slice(0, 6);

  return (
    <section id="galerija-preview" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"></div>
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">Galerija</h2>
            <div className="w-16 h-1 bg-emerald-400 mb-3"></div>
            <p className="text-slate-400">Pogledaj trenutke sa naših avantura.</p>
          </div>
          <Link
            href="/galerija"
            className="hidden md:inline-flex px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
          >
            Pogledaj galeriju
          </Link>
        </div>

        <Link href="/galerija" className="block">
          <div className="flex gap-4 overflow-x-auto md:grid md:grid-cols-3 md:gap-6 pb-2 md:pb-0">
            {items.map((img) => (
              <div
                key={img.src}
                className="relative min-w-[80%] md:min-w-0 aspect-[4/3] rounded-xl overflow-hidden bg-slate-800 border border-white/10 hover:border-emerald-500/30 transition-colors"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform"
                  sizes="(max-width: 768px) 80vw, 33vw"
                />
              </div>
            ))}
          </div>
        </Link>

        <div className="mt-8 md:hidden">
          <Link
            href="/galerija"
            className="inline-flex w-full justify-center px-5 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
          >
            Pogledaj galeriju
          </Link>
        </div>
      </div>
    </section>
  );
}
