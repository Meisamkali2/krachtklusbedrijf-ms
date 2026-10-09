import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Schilderwerk in Elst | M.S. Kracht Klusbedrijf",
  description:
    "Schilderwerk in Elst en omgeving voor woningen en panden. Binnen- en buitenschilderwerk, muren, plafonds, deuren en kozijnen.",
};

const services = [
  {
    title: "Binnenschilderwerk",
    text: "Schilderwerk voor muren, plafonds, deuren en andere oppervlakken in uw woning of pand.",
  },
  {
    title: "Buitenschilderwerk",
    text: "Schilderwerk aan buitenoppervlakken waarbij een nette en verzorgde uitstraling centraal staat.",
  },
  {
    title: "Kozijnen en deuren",
    text: "Het schilderen van kozijnen en deuren als onderdeel van onderhoud, renovatie of een nieuwe afwerking.",
  },
  {
    title: "Muren en plafonds",
    text: "Een frisse en verzorgde afwerking van muren en plafonds in verschillende ruimtes.",
  },
];

export const revalidate = 3600;

export default function SchilderwerkPage() {
  return (
    <ServiceLayout
      badge="SCHILDERWERK"
      title="Schilderwerk in Elst en omgeving"
      description="M.S. Kracht Klusbedrijf verzorgt binnen- en buitenschilderwerk voor woningen en andere panden in Elst en omliggende plaatsen."
      serviceName="Schilderwerk"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/schilderwerk"
    >
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              Schilderwerk in Elst
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Schilderwerk voor een nette en verzorgde afwerking
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Goed schilderwerk kan een ruimte een frisse uitstraling geven
                en maakt onderdeel uit van het onderhoud en de afwerking van
                uw woning of pand. M.S. Kracht Klusbedrijf verzorgt
                schilderwerk voor verschillende ruimtes en oppervlakken.
              </p>

              <p>
                We voeren onder andere binnenschilderwerk en
                buitenschilderwerk uit. Ook kunt u bij ons terecht voor het
                schilderen van muren, plafonds, deuren en kozijnen.
              </p>

              <p>
                Heeft u een schilderklus als onderdeel van een renovatie of
                verbouwing? Dan kunnen we de werkzaamheden afstemmen op de
                rest van uw project.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                Vraag vrijblijvend een offerte aan
                <ArrowRight size={20} />
              </Link>

              <a
                href="tel:+31643680281"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-800 transition duration-300 hover:border-blue-600 hover:text-blue-700"
              >
                <Phone size={19} />
                Bel direct
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              Onze schilderwerkzaamheden
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Waar kunnen wij u mee helpen?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Van een enkele ruimte tot schilderwerk als onderdeel van een
              grotere renovatie: we bespreken graag wat er voor uw project
              nodig is.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100">
                    <CheckCircle size={23} className="text-blue-700" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {service.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              Zo werken we
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Schilderwerk bespreken en aanvragen
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-slate-50 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                1
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Vertel wat u wilt laten schilderen
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Beschrijf kort de werkzaamheden en de ruimte of oppervlakken
                die u wilt laten schilderen.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                2
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Bespreek uw project
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We bekijken uw aanvraag en bespreken de werkzaamheden en
                mogelijkheden voor uw project.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-black text-white">
                3
              </span>

              <h3 className="mt-6 text-xl font-bold text-slate-900">
                Start met duidelijke afspraken
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Na het bespreken van de werkzaamheden kunnen we de volgende
                stap voor uw schilderproject afstemmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final page CTA */}
      <section className="bg-slate-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Schilderwerk in Elst
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Wilt u uw schilderwerk bespreken?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vertel ons wat u wilt laten schilderen. M.S. Kracht Klusbedrijf
            bespreekt graag uw wensen en de mogelijkheden voor uw project.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Vraag vrijblijvend een offerte aan
              <ArrowRight size={21} />
            </Link>

            <a
              href="tel:+31643680281"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 px-8 py-4 text-lg font-bold text-slate-800 transition duration-300 hover:border-blue-600 hover:text-blue-700"
            >
              <Phone size={20} />
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}