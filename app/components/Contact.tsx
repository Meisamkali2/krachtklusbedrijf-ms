"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setStatus("");
    setSuccess(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus(
          result.message ||
            "Er is iets misgegaan. Probeer het opnieuw."
        );
        return;
      }

      setSuccess(true);

      setStatus(
        result.message ||
          "Uw offerteaanvraag is succesvol verzonden."
      );

      form.reset();
    } catch {
      setStatus(
        "Er is iets misgegaan. Controleer uw internetverbinding en probeer opnieuw."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-20 text-center">
          <span className="rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300">
            GRATIS OFFERTE
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Vraag vrijblijvend een offerte aan
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Vertel ons kort wat u wilt laten uitvoeren. M.S. Kracht
            Klusbedrijf bekijkt uw aanvraag en neemt daarna contact met u op.
          </p>
        </div>

        <div className="grid gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div className="space-y-8">
            {/* PHONE */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <a
                href="tel:+31643680281"
                className="group flex items-start gap-5"
              >
                <Phone
                  size={34}
                  className="text-blue-400 transition group-hover:scale-110"
                />

                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-300">
                    Telefoon
                  </h3>

                  <p className="mt-2 text-slate-300 group-hover:text-white">
                    +31 6 43680281
                  </p>
                </div>
              </a>
            </div>

            {/* EMAIL */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <a
                href="mailto:info@krachtklusbedrijf-ms.nl"
                className="group flex items-start gap-5"
              >
                <Mail
                  size={34}
                  className="text-blue-400 transition group-hover:scale-110"
                />

                <div>
                  <h3 className="text-xl font-bold group-hover:text-blue-300">
                    E-mail
                  </h3>

                  <p className="mt-2 break-all text-slate-300 group-hover:text-white">
                    info@krachtklusbedrijf-ms.nl
                  </p>
                </div>
              </a>
            </div>

            {/* ADDRESS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-5">
                <MapPin size={34} className="text-blue-400" />

                <div>
                  <h3 className="text-xl font-bold">
                    Bedrijfsadres
                  </h3>

                  <p className="mt-3 leading-8 text-slate-300">
                    Koningin Wilhelminastraat 73
                    <br />
                    6661 VW Elst (GLD)
                    <br />
                    Nederland
                  </p>
                </div>
              </div>
            </div>

            {/* OPENING HOURS */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-5">
                <Clock size={34} className="text-blue-400" />

                <div>
                  <h3 className="text-xl font-bold">
                    Openingstijden
                  </h3>

                  <p className="mt-3 leading-8 text-slate-300">
                    Maandag - Vrijdag
                    <br />
                    05:00 - 17:00
                  </p>
                </div>
              </div>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=Koningin+Wilhelminastraat+73,+6661+VW+Elst,+Nederland&output=embed"
                width="100%"
                height="340"
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps - M.S. Kracht Klusbedrijf"
              />
            </div>

            {/* QUICK ACTIONS */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <a
                href="https://maps.google.com/?q=Koningin+Wilhelminastraat+73,+6661+VW+Elst"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:-translate-y-1 hover:bg-blue-700"
              >
                <Navigation size={22} />
                Route plannen
              </a>

              <a
                href="tel:+31643680281"
                className="flex items-center justify-center gap-3 rounded-xl border border-white px-6 py-4 font-bold transition hover:-translate-y-1 hover:bg-white hover:text-slate-900"
              >
                <Phone size={22} />
                Bel direct
              </a>
            </div>
          </div>

          {/* RIGHT - FORM */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur md:p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold">
                Vertel ons over uw project
              </h3>

              <p className="mt-3 leading-7 text-slate-300">
                U hoeft uw aanvraag niet uitgebreid te omschrijven. Vertel
                kort wat u wilt laten uitvoeren en waar het project zich
                bevindt.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NAME */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Naam
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Uw naam"
                  autoComplete="name"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  E-mailadres
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="Uw e-mailadres"
                  autoComplete="email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Telefoonnummer
                  <span className="ml-2 font-normal text-slate-400">
                    (optioneel)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="Uw telefoonnummer"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-semibold text-slate-200"
                >
                  Beschrijf uw klus of renovatie
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  placeholder="Bijvoorbeeld: Ik wil mijn badkamer renoveren in Elst..."
                  required
                  className="w-full resize-y rounded-xl border border-slate-700 bg-slate-800 p-4 text-white placeholder:text-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold transition duration-300 hover:-translate-y-1 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading
                  ? "Aanvraag verzenden..."
                  : "Vraag vrijblijvend een offerte aan"}
              </button>

              {/* STATUS */}
              {status && (
                <div
                  aria-live="polite"
                  className={`rounded-2xl border p-5 text-center ${
                    success
                      ? "border-green-500/30 bg-green-500/10 text-green-100"
                      : "border-red-500/30 bg-red-500/10 text-red-100"
                  }`}
                >
                  {success ? (
                    <>
                      <p className="text-lg font-bold">
                        ✓ Aanvraag succesvol verzonden
                      </p>

                      <p className="mt-3 leading-7">{status}</p>

                      <p className="mt-4 text-sm leading-6 text-green-200">
                        📩 Controleer ook uw map{" "}
                        <strong>Spam / Ongewenste e-mail</strong> als u
                        de bevestigingsmail niet direct in uw inbox ziet.
                      </p>
                    </>
                  ) : (
                    <p>{status}</p>
                  )}
                </div>
              )}
            </form>

            {/* WHATSAPP */}
            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="mb-4 text-center text-sm text-slate-400">
                Liever eerst even overleggen?
              </p>

              <a
                href="https://wa.me/31643680281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold transition duration-300 hover:-translate-y-1 hover:bg-green-700"
              >
                <MessageCircle size={22} />
                Chat via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}