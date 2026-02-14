"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              href="/#ture"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Ture
            </a>
            <a
              href="/#premium"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Premium
            </a>
            <a
              href="/#izleti"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Izleti
            </a>
            <Link
              href="/galerija"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Galerija
            </Link>
            <Link
              href="/o-nama"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              O nama
            </Link>
            <Link
              href="/vodici"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Vodiči
            </Link>
            <a
              href="/#kontakt"
              className="text-slate-200 hover:text-emerald-400 transition-colors"
            >
              Kontakt
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a
              href="/#kontakt"
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors"
            >
              Rezerviši
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
                href="/#ture"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ture
              </a>
              <a
                href="/#premium"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Premium
              </a>
              <a
                href="/#izleti"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Izleti
              </a>
              <Link
                href="/galerija"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Galerija
              </Link>
              <Link
                href="/o-nama"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                O nama
              </Link>
              <Link
                href="/vodici"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vodiči
              </Link>
              <a
                href="/#kontakt"
                className="text-slate-200 hover:text-emerald-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="/#kontakt"
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rezerviši
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
