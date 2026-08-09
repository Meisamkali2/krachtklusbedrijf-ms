import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Navigation,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-slate-900 to-slate-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mb-20 text-center">

          <span className="rounded-full bg-blue-600/20 px-5 py-2 text-sm font-semibold text-blue-300">

            CONTACT

          </span>

          <h2 className="mt-6 text-5xl font-black">

            Vraag vrijblijvend een offerte aan

          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

            Neem vandaag nog contact op met
            M.S. Kracht Klusbedrijf.
            Wij reageren meestal binnen 24 uur
            en helpen u graag verder.

          </p>

        </div>

        <div className="grid gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="flex items-start gap-5">

                <Phone
                  size={34}
                  className="text-blue-400"
                />

                <div>

                  <h3 className="text-xl font-bold">

                    Telefoon

                  </h3>

                  <p className="mt-2 text-slate-300">

                    +31 6 43680281

                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="flex items-start gap-5">

                <Mail
                  size={34}
                  className="text-blue-400"
                />

                <div>

                  <h3 className="text-xl font-bold">

                    E-mail

                  </h3>

                  <p className="mt-2 text-slate-300">

                    info@krachtklusbedrijf-ms.nl

                  </p>

                </div>

              </div>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="flex items-start gap-5">

                <MapPin
                  size={34}
                  className="text-blue-400"
                />

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
                        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

              <div className="flex items-start gap-5">

                <Clock
                  size={34}
                  className="text-blue-400"
                />

                <div>

                  <h3 className="text-xl font-bold">

                    Openingstijden

                  </h3>

                  <p className="mt-3 leading-8 text-slate-300">

                    Maandag - Vrijdag
                    <br />

                    08:00 - 18:00

                  </p>

                </div>

              </div>

            </div>

            {/* Google Maps */}

            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">

              <iframe
                src="https://www.google.com/maps?q=Koningin+Wilhelminastraat+73,+6661+VW+Elst,+Nederland&output=embed"
                width="100%"
                height="340"
                loading="lazy"
                className="border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

              <a
                href="https://maps.google.com/?q=Koningin+Wilhelminastraat+73,+6661+VW+Elst"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-bold transition hover:bg-blue-700"
              >

                <Navigation size={22} />

                Route plannen

              </a>

              <a
                href="tel:+31643680281"
                className="flex items-center justify-center gap-3 rounded-xl border border-white px-6 py-4 font-bold transition hover:bg-white hover:text-slate-900"
              >

                <Phone size={22} />

                Bel direct

              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <form className="space-y-6">
                            <input
                type="text"
                placeholder="Uw naam"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="email"
                placeholder="E-mailadres"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-blue-500"
              />

              <input
                type="tel"
                placeholder="Telefoonnummer"
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-blue-500"
              />

              <textarea
                rows={6}
                placeholder="Vertel ons over uw project..."
                className="w-full rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none transition focus:border-blue-500"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-4 text-lg font-bold transition duration-300 hover:scale-[1.02] hover:bg-blue-700"
              >
                Verstuur Offerte
              </button>

            </form>

            <div className="mt-8 border-t border-white/10 pt-8">

              <a
                href="https://wa.me/31643680281"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-xl bg-green-600 px-6 py-4 font-bold transition duration-300 hover:bg-green-700"
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