"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}

        <Link href="/" className="group">

          <div className="flex flex-col">

            <span className="text-3xl font-black tracking-tight text-white">

              M.S.

            </span>

            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">

              Kracht Klusbedrijf

            </span>

          </div>

        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-10 text-white lg:flex">

          <Link
            href="/"
            className="transition hover:text-blue-300"
          >
            Home
          </Link>

          <Link
            href="#over-ons"
            className="transition hover:text-blue-300"
          >
            Over Ons
          </Link>

          <Link
            href="#diensten"
            className="transition hover:text-blue-300"
          >
            Diensten
          </Link>

          <Link
            href="#projecten"
            className="transition hover:text-blue-300"
          >
            Projecten
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-300"
          >
            Contact
          </Link>

        </nav>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700 lg:block"
          >
            Gratis Offerte
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>
            {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl lg:hidden">

          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-6">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-white transition hover:bg-blue-600"
            >
              Home
            </Link>

            <Link
              href="#over-ons"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-white transition hover:bg-blue-600"
            >
              Over Ons
            </Link>

            <Link
              href="#diensten"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-white transition hover:bg-blue-600"
            >
              Diensten
            </Link>

            <Link
              href="#projecten"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-white transition hover:bg-blue-600"
            >
              Projecten
            </Link>

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-4 text-white transition hover:bg-blue-600"
            >
              Contact
            </Link>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-5 rounded-xl bg-blue-600 px-6 py-4 text-center font-bold text-white transition hover:bg-blue-700"
            >
              Vraag Gratis Offerte
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}