"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function getAlternatePath(pathname: string): {
  isEn: boolean;
  srPath: string;
  enPath: string;
} {
  const isEn = pathname.startsWith("/en");

  if (isEn) {
    const rest = pathname.replace(/^\/en/, "") || "/";
    const srPath = rest.replace(/^\/tours/, "/ture") || "/";
    return { isEn, srPath, enPath: pathname };
  }

  const enPath =
    "/en" + (pathname === "/" ? "" : pathname.replace(/^\/ture/, "/tours"));

  return { isEn, srPath: pathname, enPath };
}

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { isEn, srPath, enPath } = getAlternatePath(pathname);

  const labels = isEn
    ? {
        tours: "Tours",
        premium: "Premium",
        dayTrips: "Day Trips",
        gallery: "Gallery",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        cta: "Book Now",
      }
    : {
        tours: "Ture",
        premium: "Premium",
        dayTrips: "Izleti",
        gallery: "Galerija",
        about: "O nama",
        blog: "Blog",
        contact: "Kontakt",
        cta: "Rezerviši",
      };

  const homeBase = isEn ? "/en" : "/";

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[9999] bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Udahni Avanturu"
                width={64}
                height={64}
                priority
                className="h-10 w-auto md:h-12"
              />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <a
                href={isEn ? "/en#tours" : "/#ture"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.tours}
              </a>
              <a
                href={`${homeBase}#premium`}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.premium}
              </a>
              <a
                href={isEn ? "/en#day-trips" : "/#izleti"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.dayTrips}
              </a>
              <Link
                href="/galerija"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.gallery}
              </Link>
              <Link
                href="/o-nama"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.about}
              </Link>
              <Link
                href="/vodici"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.blog}
              </Link>
              <a
                href={isEn ? "/en#contact" : "/#kontakt"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
              >
                {labels.contact}
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm">
                <Link
                  href={srPath}
                  className={`px-2 py-1 rounded transition-colors ${
                    !isEn
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  SR
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  href={enPath}
                  className={`px-2 py-1 rounded transition-colors ${
                    isEn
                      ? "text-emerald-400 font-semibold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  EN
                </Link>
              </div>
              <a
                href={isEn ? "/en#contact" : "/#kontakt"}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
              >
                {labels.cta}
              </a>
            </div>

            <button
              className="lg:hidden text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              type="button"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 bottom-0 z-[9998] bg-slate-950 lg:hidden">
          <div className="h-full overflow-y-auto px-6 py-6 space-y-6">
            <a
              href={isEn ? "/en#tours" : "/#ture"}
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.tours}
            </a>

            <a
              href={`${homeBase}#premium`}
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.premium}
            </a>

            <a
              href={isEn ? "/en#day-trips" : "/#izleti"}
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.dayTrips}
            </a>

            <Link
              href="/galerija"
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.gallery}
            </Link>

            <Link
              href="/o-nama"
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.about}
            </Link>

            <Link
              href="/vodici"
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.blog}
            </Link>

            <a
              href={isEn ? "/en#contact" : "/#kontakt"}
              className="block text-lg font-medium text-slate-200 hover:text-emerald-400 transition-colors"
              onClick={closeMenu}
            >
              {labels.contact}
            </a>

            <div className="flex items-center gap-2 text-sm pt-4 mt-4 border-t border-white/10">
              <Link
                href={srPath}
                className={`px-3 py-1 rounded transition-colors ${
                  !isEn
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
                onClick={closeMenu}
              >
                SR
              </Link>
              <span className="text-slate-600">|</span>
              <Link
                href={enPath}
                className={`px-3 py-1 rounded transition-colors ${
                  isEn
                    ? "text-emerald-400 font-semibold"
                    : "text-slate-400 hover:text-white"
                }`}
                onClick={closeMenu}
              >
                EN
              </Link>
            </div>

            <a
              href={isEn ? "/en#contact" : "/#kontakt"}
              className="block px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors text-center"
              onClick={closeMenu}
            >
              {labels.cta}
            </a>
          </div>
        </div>
      )}
    </>
  );
}