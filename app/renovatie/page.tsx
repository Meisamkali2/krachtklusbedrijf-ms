import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Renovatie in Elst | Woningrenovatie & Verbouwing",
  description:
    "Renovatie en verbouwing in Elst en omgeving. M.S. Kracht Klusbedrijf helpt met woningrenovatie en verschillende werkzaamheden binnen één project.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/renovatie",
  },
};

const renovationServices = [
  {
    title: "Badkamerrenovatie",
    text: "Uw badkamer vernieuwen en de ruimte praktisch en verzorgd afwerken.",
    href: "/badkamer-renovatie",
  },
  {
    title: "Schilderwerk",
    text: "Binnen- en buitenschilderwerk voor een frisse en nette afwerking.",
    href: "/schilderwerk",
  },
  {
    title: "Vloeren",
    text: "Vloeren leggen en vernieuwen als onderdeel van een renovatie of verbouwing.",
    href: "/vloeren",
  },
  {
    title: "Isolatie",
    text: "Isolatiewerkzaamheden voor meer comfort en een energiezuiniger woning.",
    href: "/isolatie",
  },
  {
    title: "Zolderrenovatie",
    text: "Een zolder vernieuwen en de beschikbare ruimte beter benutten.",
    href: "/zolder-renovatie",
  },
];

const serviceAreas = [
  { name: "Elst", href: "/elst" },
  { name: "Arnhem", href: "/arnhem" },
  { name: "Nijmegen", href: "/nijmegen" },
  { name: "Huissen", href: "/huissen" },
  { name: "Bemmel", href: "/bemmel" },
  { name: "Lent", href: "/lent" },
  { name: "Oosterbeek", href: "/oosterbeek" },
];

const steps = [
  {
    number: "01",
    title: "Kennismaken",
    text: "We bespreken uw wensen en bekijken welke werkzaamheden nodig zijn voor uw woning.",
  },
  {
    number: "02",
    title: "Werkzaamheden afstemmen",
    text: "We bespreken de werkzaamheden en maken duidelijke afspraken over de uitvoering.",
  },
  {
    number: "03",
    title: "Uitvoering",
    text: "De afgesproken werkzaamheden worden zorgvuldig uitgevoerd met aandacht voor een nette afwerking.",
  },
];

export const revalidate = 3600;

export default function RenovatiePage() {
  return (
    <ServiceLayout
      badge="RENOVATIE"
      title="Renovatie en verbouwing in Elst en omgeving"
      description="M.S. Kracht Klusbedrijf helpt particulieren met woningrenovatie en verschillende verbouwingswerkzaamheden in Elst en omliggende plaatsen."
      serviceName="Renovatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/renovatie"
    >
      {/* Intro */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-4xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              Renovatie in Elst
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Uw woning renoveren of verbouwen
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Een renovatie kan bestaan uit het vernieuwen van één ruimte
                of uit meerdere werkzaamheden binnen dezelfde verbouwing.
                M.S. Kracht Klusbedrijf helpt particulieren bij verschillende
                renovatie- en verbouwingswerkzaamheden.
              </p>

              <p>
                Van schilderwerk en vloeren tot badkamers, isolatie en
                zolderrenovatie: we bespreken wat uw woning nodig heeft en
                welke werkzaamheden bij uw project passen.
              </p>

              <p>
                Een goede voorbereiding is belangrijk. Daarom bespreken we
                vooraf uw wensen en maken we duidelijke afspraken over de
                werkzaamheden en de verdere uitvoering.
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

      {/* Renovation services */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE RENOVATIEWERKZAAMHEDEN
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Verschillende werkzaamheden binnen één renovatie
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Iedere woning en ieder renovatieproject is anders. Bekijk
              hieronder enkele werkzaamheden die onderdeel kunnen zijn van
              uw renovatie.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {renovationServices.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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

                <span className="mt-6 inline-flex items-center gap-2 font-bold text-blue-700">
                  Bekijk dienst
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}

            <Link
              href="/projecten"
              className="group rounded-3xl bg-blue-900 p-8 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-xl"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                <ArrowRight size={23} />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Bekijk onze projecten
              </h3>

              <p className="mt-4 leading-7 text-blue-100">
                Bekijk voorbeelden van renovatie- en
                verbouwingsprojecten die door M.S. Kracht Klusbedrijf
                zijn uitgevoerd.
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-bold">
                Bekijk projecten
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONS WERKGEBIED
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Renovatie in Elst en omliggende plaatsen
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              M.S. Kracht Klusbedrijf is gevestigd in Elst en voert
              renovatie- en verbouwingswerkzaamheden uit in Elst en
              omliggende plaatsen.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100 hover:text-blue-800"
              >
                Klusbedrijf {area.name}
              </Link>
            ))}
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
              Zo pakken we een renovatie aan
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Van de eerste aanvraag tot de uitvoering: duidelijke
              communicatie helpt om uw renovatie goed voor te bereiden.
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
            RENOVATIE IN ELST
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Wilt u uw renovatie bespreken?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Vertel ons wat u wilt laten renoveren of verbouwen. We bespreken
            graag uw wensen en de mogelijkheden voor uw woning.
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