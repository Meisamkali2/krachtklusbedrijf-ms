import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Vloeren Leggen in Elst | M.S. Kracht Klusbedrijf",
  description:
    "Vloeren leggen en vernieuwen in Elst en omgeving. M.S. Kracht Klusbedrijf helpt met laminaat en andere vloerwerkzaamheden voor woningen en panden.",
};

const services = [
  {
    title: "Laminaat leggen",
    text: "Laminaat laten leggen als onderdeel van een nieuwe vloer, renovatie of verbouwing.",
  },
  {
    title: "Vloeren vernieuwen",
    text: "Een bestaande vloer vervangen of een ruimte voorzien van een nieuwe vloer die past bij uw project.",
  },
  {
    title: "Voorbereiding van de vloer",
    text: "Een goede voorbereiding is belangrijk voor een nette plaatsing en een verzorgde afwerking.",
  },
  {
    title: "Vloerafwerking",
    text: "Aandacht voor een nette aansluiting en verzorgde afwerking van de vloer.",
  },
];

export const revalidate = 3600;

export default function VloerenPage() {
  return (
    <ServiceLayout
      badge="VLOEREN"
      title="Vloeren leggen in Elst en omgeving"
      description="M.S. Kracht Klusbedrijf helpt met het leggen en vernieuwen van vloeren voor woningen en andere panden in Elst en omliggende plaatsen."
      serviceName="Vloeren"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/vloeren"
    >
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              Vloeren in Elst
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Een nieuwe vloer voor uw woning of pand
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Een vloer heeft veel invloed op de uitstraling van een ruimte.
                Bij een renovatie of verbouwing kan een nieuwe vloer daarom
                een belangrijk onderdeel van het eindresultaat zijn.
              </p>

              <p>
                M.S. Kracht Klusbedrijf helpt met het leggen en vernieuwen
                van vloeren. Ook voor het leggen van laminaat kunt u bij ons
                terecht.
              </p>

              <p>
                We bespreken vooraf wat er nodig is voor uw project en
                stemmen de werkzaamheden af op de ruimte en uw wensen.
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
              Onze vloerwerkzaamheden
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Waar kunnen wij u mee helpen?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Van het leggen van laminaat tot het vernieuwen van een
              bestaande vloer: we bespreken graag wat uw project nodig heeft.
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

      {/* Project relevance */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-2xl md:p-12">
            <p className="font-semibold uppercase tracking-[4px] text-blue-300">
              Vloeren en renovatie
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Een vloer als onderdeel van uw renovatie
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Gaat het om een grotere renovatie of verbouwing? Dan kunnen
              vloerwerkzaamheden onderdeel zijn van het totale project.
              Bespreek uw wensen met M.S. Kracht Klusbedrijf zodat de
              werkzaamheden goed op elkaar kunnen worden afgestemd.
            </p>

            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-950 transition hover:bg-blue-50"
            >
              Bespreek uw project
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-100 py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Vloeren in Elst en omgeving
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Wilt u uw vloerproject bespreken?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vertel ons welke vloerwerkzaamheden u wilt laten uitvoeren.
            We bespreken graag uw wensen en de mogelijkheden voor uw project.
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