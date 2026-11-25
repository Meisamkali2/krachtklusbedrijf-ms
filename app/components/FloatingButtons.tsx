"use client";

import { useState } from "react";
import { Phone, Mail, Plus, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [open, setOpen] = useState(false);

  const buttons = [
    {
      icon: <Phone size={22} />,
      label: "Bel ons",
      href: "tel:+31643680281",
      color: "bg-slate-800 hover:bg-slate-900",
    },
    {
      icon: <Mail size={22} />,
      label: "E-mail",
      href: "mailto:info@krachtklusbedrijf-ms.nl",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaWhatsapp size={24} />,
      label: "WhatsApp",
      href: "https://wa.me/31643680281",
      color: "bg-green-500 hover:bg-green-600",
      target: "_blank",
    },
  ];

  return (
    <>
      <nav aria-label="Snel contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-3 gap-1 border-t border-slate-700 bg-slate-950 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-white shadow-lg lg:hidden">
        <a href="tel:+31643680281" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg text-xs font-semibold"><Phone size={20} />Bel direct</a>
        <a href="https://wa.me/31643680281" target="_blank" rel="noopener noreferrer" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-lg bg-green-700 text-xs font-semibold"><FaWhatsapp size={20} />WhatsApp</a>
        <a href="/#contact" className="flex min-h-12 flex-col items-center justify-center rounded-lg bg-blue-600 px-1 text-center text-sm font-bold">Offerte aanvragen</a>
      </nav>
      <div aria-hidden="true" className="h-20 lg:hidden" />
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col items-end gap-3 lg:flex">

      {open &&
        buttons.map((button) => (
          <a
            key={button.label}
            href={button.href}
            target={button.target}
            rel="noreferrer"
            className="group flex items-center gap-3"
          >
            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-lg opacity-0 transition-all duration-300 group-hover:opacity-100">
              {button.label}
            </span>

            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 ${button.color}`}
            >
              {button.icon}
            </div>
          </a>
        ))}

      <button
        type="button"
        aria-label={open ? "Contactmenu sluiten" : "Contactmenu openen"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:rotate-90"
      >
        {open ? <X size={30} /> : <Plus size={30} />}
      </button>

    </div>
    </>
  );
}