import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-black">M.S.</h2>

              <p className="text-lg font-semibold text-blue-400">
                Kracht Klusbedrijf
              </p>
            </Link>

            <p className="mt-6 leading-8 text-gray-400">
              M.S. Kracht Klusbedrijf helpt particulieren met renovatie,
              schilderwerk, vloeren, badkamers, isolatie en
              zolderrenovatie in Elst en omliggende plaatsen.
            </p>

            {/* VCA */}
            <div className="mt-8">
              <p className="mb-3 text-sm font-semibold text-gray-300">
                VCA Gecertificeerd
              </p>

              <div className="inline-flex items-center rounded-xl bg-white px-4 py-3">
                <Image
                  src="/images/vca.png"
                  alt="VCA certificering"
                  width={120}
                  height={60}
                  className="h-auto w-[120px]"
                />
              </div>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                Veiligheid en verantwoord werken staan centraal tijdens
                onze werkzaamheden.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Navigatie</h3>

            <nav className="flex flex-col gap-4 text-gray-300">
              <Link
                href="/"
                className="transition hover:text-white"
              >
                Home
              </Link>

              <Link
                href="/#over-ons"
                className="transition hover:text-white"
              >
                Over Ons
              </Link>

              <Link
                href="/#diensten"
                className="transition hover:text-white"
              >
                Diensten
              </Link>

              <Link
                href="/#projecten"
                className="transition hover:text-white"
              >
                Projecten
              </Link>

              <Link
                href="/#contact"
                className="transition hover:text-white"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Contact</h3>

            <div className="space-y-5 text-gray-300">
              <a
                href="tel:+31643680281"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <Phone size={18} className="mt-1 shrink-0" />
                <span>+31 6 43680281</span>
              </a>

              <a
                href="mailto:info@krachtklusbedrijf-ms.nl"
                className="flex items-start gap-3 break-all transition hover:text-white"
              >
                <Mail size={18} className="mt-1 shrink-0" />
                <span>info@krachtklusbedrijf-ms.nl</span>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Koningin+Wilhelminastraat+73%2C+6661+VW+Elst"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MapPin size={18} className="mt-1 shrink-0" />

                <span>
                  Koningin Wilhelminastraat 73
                  <br />
                  6661 VW Elst
                </span>
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="mb-6 text-xl font-bold">
              Vrijblijvende offerte
            </h3>

            <p className="leading-8 text-gray-400">
              Heeft u een klus, renovatie of verbouwing in Elst of
              omgeving? Vertel ons wat u wilt laten uitvoeren.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Vraag offerte aan
              <ArrowRight size={18} />
            </Link>

            <a
              href="tel:+31643680281"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition hover:text-white"
            >
              <Phone size={16} />
              Bel direct
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} M.S. Kracht Klusbedrijf. Alle
          rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}