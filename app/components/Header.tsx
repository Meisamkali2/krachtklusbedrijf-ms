"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-xl">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Kracht<span className="text-blue-400">MS</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 text-white md:flex">
          <Link href="/" className="transition hover:text-blue-300">
            Home
          </Link>

          <Link href="#diensten" className="transition hover:text-blue-300">
            Diensten
          </Link>

          <Link href="#projecten" className="transition hover:text-blue-300">
            Projecten
          </Link>

          <Link href="#contact" className="transition hover:text-blue-300">
            Contact
          </Link>
        </nav>

        {/* Desktop Button */}
        <Link
          href="#contact"
          className="hidden rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700 md:block"
        >
          Offerte
        </Link>

        {/* Mobile Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-4 mt-3 rounded-2xl bg-blue-950 p-6 text-white md:hidden">
          <div className="flex flex-col gap-5">

            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>

            <Link href="#diensten" onClick={() => setOpen(false)}>
              Diensten
            </Link>

            <Link href="#projecten" onClick={() => setOpen(false)}>
              Projecten
            </Link>

            <Link href="#contact" onClick={() => setOpen(false)}>
              Contact
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}