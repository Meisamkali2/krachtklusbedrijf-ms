import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section id="over-ons" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-blue-600">
            Over Ons
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            M.S. Kracht Klusbedrijf
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Bij <strong>M.S. Kracht Klusbedrijf</strong> staan kwaliteit,
            vakmanschap en betrouwbaarheid centraal. Wij zijn gespecialiseerd
            in renovaties, schilderwerk, vloeren, badkamers, zolders,
            elektra en complete verbouwingen.

            Wij denken met onze klanten mee en leveren ieder project af
            met oog voor detail en een hoogwaardige afwerking.
          </p>

          <div className="mt-10 space-y-4">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <span>Professioneel vakmanschap</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <span>Duidelijke afspraken</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <span>Hoogwaardige materialen</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <span>100% klanttevredenheid</span>
            </div>

          </div>

          <Link
            href="#contact"
            className="mt-10 inline-block rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Vraag een Offerte
          </Link>

        </div>

        {/* Right */}

        <div className="rounded-3xl bg-blue-950 p-10 text-white shadow-2xl">

          <h3 className="text-3xl font-bold">
            Waarom kiezen voor ons?
          </h3>

          <p className="mt-6 leading-8 text-blue-100">
            Wij combineren jarenlange ervaring met een persoonlijke aanpak.
            Van kleine renovaties tot complete verbouwingen:
            wij zorgen voor kwaliteit, duidelijke communicatie en een perfect eindresultaat.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h4 className="text-xl font-semibold">
                ✔ Betrouwbaar
              </h4>
              <p className="text-blue-100">
                Afspraak is afspraak.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                ✔ Ervaren
              </h4>
              <p className="text-blue-100">
                Jarenlange ervaring in renovatie en afbouw.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-semibold">
                ✔ Kwaliteit
              </h4>
              <p className="text-blue-100">
                Hoogwaardige afwerking tot in de kleinste details.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}