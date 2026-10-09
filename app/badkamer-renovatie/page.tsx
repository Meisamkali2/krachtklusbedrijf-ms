import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Badkamerrenovatie in Elst | M.S. Kracht Klusbedrijf",
  description:
    "Badkamerrenovatie in Elst en omgeving. M.S. Kracht Klusbedrijf helpt met het vernieuwen en afwerken van badkamers.",
  alternates: {
    canonical:
      "https://www.krachtklusbedrijf-ms.nl/badkamer-renovatie",
  },
};

const bathroomServices = [
  {
    title: "Badkamer vernieuwen",
    text: "Uw bestaande badkamer vernieuwen en de ruimte weer laten aansluiten bij uw wensen.",
  },
  {
    title: "Wanden en vloeren",
    text: "Werkzaamheden aan wanden en vloeren als onderdeel van de renovatie.",
  },
  {
    title: "Afwerking",
    text: "Aandacht voor een nette en verzorgde afwerking van de vernieuwde badkamer.",
  },
  {
    title: "Renovatiewerkzaamheden",
    text: "Verschillende werkzaamheden combineren wanneer uw badkamer een grotere renovatie nodig heeft.",
  },
];

const steps = [
  {
    number: "01",
    title: "Uw wensen bespreken",
    text: "We bespreken wat u wilt veranderen en bekijken de bestaande situatie.",
  },
  {
    number: "02",
    title: "Werkzaamheden afstemmen",
    text: "We bespreken welke werkzaamheden nodig zijn en maken duidelijke afspraken.",
  },
  {
    number: "03",
    title: "Uitvoering",
    text: "De afgesproken werkzaamheden worden zorgvuldig en netjes uitgevoerd.",
  },
];

export const revalidate = 3600;

export default function BadkamerRenovatiePage() {
  return (
    <ServiceLayout
      badge="BADKAMER RENOVATIE"
      title="Badkamerrenovatie in Elst en omgeving"
      description="M.S. Kracht Klusbedrijf helpt particulieren met het vernieuwen en afwerken van badkamers in Elst en omliggende plaatsen."
      serviceName="Badkamerrenovatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/badkamer-renovatie"
    >
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              BADKAMER RENOVATIE IN ELST
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Uw badkamer vernieuwen en netjes afwerken
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Wilt u uw badkamer vernieuwen? M.S. Kracht Klusbedrijf helpt
                particulieren met verschillende werkzaamheden die onderdeel
                kunnen zijn van een badkamerrenovatie.
              </p>

              <p>
                Denk aan het vernieuwen van wanden en vloeren en het
                verzorgen van de verdere afwerking. Welke werkzaamheden nodig
                zijn, hangt af van de bestaande situatie en uw wensen.
              </p>

              <p>
                We bespreken vooraf wat u wilt veranderen en stemmen de
                werkzaamheden af op uw badkamer en het gewenste resultaat.
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
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE WERKZAAMHEDEN
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Werkzaamheden voor uw badkamerrenovatie
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Iedere badkamer is anders. Daarom stemmen we de werkzaamheden
              af op de bestaande situatie en wat u wilt vernieuwen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {bathroomServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100">
                  <CheckCircle
                    size={23}
                    className="text-blue-700"
                  />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>
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
              ONZE WERKWIJZE
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Zo pakken we uw badkamerrenovatie aan
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We beginnen met uw wensen en bespreken vervolgens welke
              werkzaamheden nodig zijn voor uw badkamer.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm"
              >
                <div className="text-3xl font-black text-blue-700">
                  {step.number}
                </div>

                <h3 className="mt-5 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related service */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-blue-950 p-8 text-white md:p-12">
            <p className="font-semibold uppercase tracking-[4px] text-blue-200">
              RENOVATIE
            </p>

            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Ook andere werkzaamheden nodig?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100">
              Een badkamerrenovatie kan onderdeel zijn van een grotere
              woningrenovatie. Bekijk ook onze renovatiewerkzaamheden.
            </p>

            <Link
              href="/renovatie"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-800 transition hover:bg-blue-50"
            >
              Bekijk renovatie
              <ArrowRight size={19} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            BADKAMER RENOVATIE
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Plannen voor een nieuwe badkamer?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vertel ons wat u wilt vernieuwen. We bespreken graag uw wensen
            en de mogelijkheden voor uw badkamer.
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