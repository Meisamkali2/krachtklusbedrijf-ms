import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-black">
              M.S.
            </h2>

            <p className="text-lg font-semibold text-blue-400">
              Kracht Klusbedrijf
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              Specialist in renovaties, schilderwerk,
              badkamers, vloeren, zolderrenovaties
              en complete verbouwingen.
            </p>

          </div>

          {/* Menu */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Navigatie
            </h3>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link href="/">
                Home
              </Link>

              <Link href="#over-ons">
                Over Ons
              </Link>

              <Link href="#diensten">
                Diensten
              </Link>

              <Link href="#projecten">
                Projecten
              </Link>

              <Link href="#contact">
                Contact
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-3">

                <Phone size={18} />

                <span>+31 6 43680281</span>

              </div>

              <div className="flex items-center gap-3">

                <Mail size={18} />

                <span>info@krachtklusbedrijf-ms.nl</span>

              </div>

              <div className="flex items-center gap-3">

                <MapPin size={18} />

                <span>Nederland</span>

              </div>

            </div>

          </div>

          {/* CTA */}

          <div>

            <h3 className="mb-6 text-xl font-bold">
              Gratis Offerte
            </h3>

            <p className="leading-8 text-gray-400">
              Neem vandaag nog contact met ons op
              voor een vrijblijvende offerte.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Vraag Offerte
            </a>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-gray-500">

          © {new Date().getFullYear()} M.S. Kracht Klusbedrijf.
          Alle rechten voorbehouden.

        </div>

      </div>

    </footer>
  );
}