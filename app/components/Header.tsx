"use client";

import { Menu, X, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-[9999] w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/95 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="relative z-[9999] mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="/"
          className="group"
          aria-label="M.S. Kracht Klusbedrijf"
        >
          <div className="flex flex-col">
            <span className="text-3xl font-black tracking-tight text-white">
              M.S.
            </span>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Kracht Klusbedrijf
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav
          aria-label="Hoofdnavigatie"
          className="relative z-[9999] hidden items-center gap-8 text-white lg:flex"
        >
          <a
            href="/"
            className="cursor-pointer transition hover:text-blue-300"
          >
            Home
          </a>

          <a
            href="/#over-ons"
            className="cursor-pointer transition hover:text-blue-300"
          >
            Over Ons
          </a>

          <a
            href="/#diensten"
            className="cursor-pointer transition hover:text-blue-300"
          >
            Diensten
          </a>

          <a
            href="/#projecten"
            className="cursor-pointer transition hover:text-blue-300"
          >
            Projecten
          </a>

          <a
            href="/#contact"
            className="cursor-pointer transition hover:text-blue-300"
          >
            Contact
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="relative z-[9999] hidden items-center gap-3 lg:flex">
          <a
            href="tel:+31643680281"
            aria-label="Bel M.S. Kracht Klusbedrijf"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 px-4 py-3 font-semibold text-white transition duration-300 hover:bg-white/10"
          >
            <Phone size={18} />
            Bel direct
          </a>

          <a
            href="/#contact"
            className="cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
          >
            Vraag vrijblijvend een offerte aan
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          aria-expanded={open}
          className="relative z-[9999] cursor-pointer rounded-lg p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="relative z-[9999] border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">
          <nav
            aria-label="Mobiele navigatie"
            className="mx-auto flex max-w-7xl flex-col px-6 py-6"
          >
            <a
              href="/"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-4 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              Home
            </a>

            <a
              href="/#over-ons"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-4 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              Over Ons
            </a>

            <a
              href="/#diensten"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-4 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              Diensten
            </a>

            <a
              href="/#projecten"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-4 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              Projecten
            </a>

            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="cursor-pointer rounded-lg px-4 py-4 font-medium text-white transition hover:bg-blue-600"
            >
              Contact
            </a>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+31643680281"
                onClick={() => setOpen(false)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={20} />
                Bel direct
              </a>

              <a
                href="/#contact"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
              >
                Vraag vrijblijvend een offerte aan
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}