import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Isolatie in Elst | M.S. Kracht Klusbedrijf",
  description:
    "Isolatiewerkzaamheden in Elst en omgeving. M.S. Kracht Klusbedrijf helpt bij isolatie van woningen als onderdeel van renovatie en verbouwing.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/isolatie",
  },
};

const insulationServices = [
  {
    title: "Isolatie bij renovatie",
    text: "Isolatiewerkzaamheden als onderdeel van een renovatie of verbouwing van uw woning.",
  },
  {
    title: "Woning isoleren",
    text: "Verbeteringen aan de isolatie van uw woning met aandacht voor de bestaande situatie.",
  },
  {
    title: "Isolatie en comfort",
    text: "Een goed geïsoleerde woning kan bijdragen aan een comfortabeler binnenklimaat.",
  },
  {
    title: "Isolatie combineren",
    text: "Isolatie kan worden gecombineerd met andere werkzaamheden binnen een renovatieproject.",
  },
];

const steps = [
  {
    number: "01",
    title: "Situatie bespreken",
    text: "We bespreken uw wensen en bekijken welke isolatiewerkzaamheden bij uw woning passen.",
  },
  {
    number: "02",
    title: "Werkzaamheden afstemmen",
    text: "We bespreken de werkzaamheden en maken duidelijke afspraken over de uitvoering.",
  },
  {
    number: "03",
    title: "Uitvoering",
    text: "De afgesproken werkzaamheden worden zorgvuldig en netjes uitgevoerd.",
  },
];

export const revalidate = 3600;

export default function IsolatiePage() {
  return (
    <ServiceLayout
      badge="ISOLATIE"
      title="Isolatie in Elst en omgeving"
      description="M.S. Kracht Klusbedrijf helpt particulieren met isolatiewerkzaamheden als onderdeel van renovatie en verbouwing in Elst en omliggende plaatsen."
      serviceName="Isolatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/isolatie"
    >
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ISOLATIE IN ELST
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Uw woning beter isoleren
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Goede isolatie kan bijdragen aan een comfortabeler
                binnenklimaat en helpen om warmte beter in uw woning vast te
                houden.
              </p>

              <p>
                M.S. Kracht Klusbedrijf voert isolatiewerkzaamheden uit als
                onderdeel van renovaties en verbouwingen. Welke werkzaamheden
                nodig zijn, hangt af van de woning en de bestaande situatie.
              </p>

              <p>
                We bespreken vooraf uw wensen en bekijken welke
                isolatiewerkzaamheden passen binnen uw renovatie of
                verbouwing.
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
              Isolatie als onderdeel van uw renovatie
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Iedere woning is anders. Daarom stemmen we de werkzaamheden af
              op de bestaande situatie en uw wensen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {insulationServices.map((service) => (
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

      {/* Related renovation */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="font-semibold uppercase tracking-[4px] text-blue-600">
                RENOVATIE
              </p>

              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
                Isolatie combineren met andere werkzaamheden?
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Isolatie kan onderdeel zijn van een grotere renovatie of
                verbouwing. Bekijk welke andere werkzaamheden M.S. Kracht
                Klusbedrijf aanbiedt.
              </p>

              <Link
                href="/renovatie"
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
              >
                Bekijk renovatie
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8">
              <div className="space-y-5">
                <div className="flex gap-4">
                  <CheckCircle
                    className="mt-1 shrink-0 text-blue-700"
                    size={22}
                  />
                  <p className="text-slate-700">
                    Isolatiewerkzaamheden binnen renovatie en verbouwing
                  </p>
                </div>

                <div className="flex gap-4">
                  <CheckCircle
                    className="mt-1 shrink-0 text-blue-700"
                    size={22}
                  />
                  <p className="text-slate-700">
                    Afstemming op de bestaande situatie
                  </p>
                </div>

                <div className="flex gap-4">
                  <CheckCircle
                    className="mt-1 shrink-0 text-blue-700"
                    size={22}
                  />
                  <p className="text-slate-700">
                    Duidelijke afspraken over de werkzaamheden
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE WERKWIJZE
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Zo pakken we isolatiewerkzaamheden aan
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We beginnen met uw wensen en bekijken vervolgens welke
              werkzaamheden passen bij uw woning en renovatie.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white p-8 shadow-lg"
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

      {/* Final CTA */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            ISOLATIE IN ELST
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Plannen voor isolatie?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vertel ons wat u wilt verbeteren aan uw woning. We bespreken
            graag uw wensen en de mogelijkheden voor uw renovatie.
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