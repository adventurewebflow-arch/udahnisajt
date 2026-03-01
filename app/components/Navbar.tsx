"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function getAlternatePath(pathname: string): { isEn: boolean; srPath: string; enPath: string } {
  const isEn = pathname.startsWith("/en");

  if (isEn) {
    const rest = pathname.replace(/^\/en/, "") || "/";
    const srPath = rest.replace(/^\/tours/, "/ture") || "/";
    return { isEn, srPath, enPath: pathname };
  }

  const enPath = "/en" + (pathname === "/" ? "" : pathname.replace(/^\/ture/, "/tours"));
  return { isEn, srPath: pathname, enPath };
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Desktop Navigation */}
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

          {/* Desktop CTA + Lang Switch */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <Link
                href={srPath}
                className={`px-2 py-1 rounded transition-colors ${
                  !isEn ? "text-emerald-400 font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                SR
              </Link>
              <span className="text-slate-600">|</span>
              <Link
                href={enPath}
                className={`px-2 py-1 rounded transition-colors ${
                  isEn ? "text-emerald-400 font-semibold" : "text-slate-400 hover:text-white"
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

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-200 hover:text-emerald-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4 pt-4">
              <a
                href={isEn ? "/en#tours" : "/#ture"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.tours}
              </a>
              <a
                href={`${homeBase}#premium`}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.premium}
              </a>
              <a
                href={isEn ? "/en#day-trips" : "/#izleti"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.dayTrips}
              </a>
              <Link
                href="/galerija"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.gallery}
              </Link>
              <Link
                href="/o-nama"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.about}
              </Link>
              <Link
                href="/vodici"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.blog}
              </Link>
              <a
                href={isEn ? "/en#contact" : "/#kontakt"}
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.contact}
              </a>
              <div className="flex items-center gap-2 text-sm pt-2 border-t border-white/10">
                <Link
                  href={srPath}
                  className={`px-3 py-1 rounded transition-colors ${
                    !isEn ? "text-emerald-400 font-semibold" : "text-slate-400 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SR
                </Link>
                <span className="text-slate-600">|</span>
                <Link
                  href={enPath}
                  className={`px-3 py-1 rounded transition-colors ${
                    isEn ? "text-emerald-400 font-semibold" : "text-slate-400 hover:text-white"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  EN
                </Link>
              </div>
              <a
                href={isEn ? "/en#contact" : "/#kontakt"}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {labels.cta}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
