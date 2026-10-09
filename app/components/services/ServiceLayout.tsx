import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import ServiceSchema from "../seo/ServiceSchema";
import BreadcrumbSchema from "../seo/BreadcrumbSchema";

type Props = {
  badge: string;
  title: string;
  description: string;
  serviceName: string;
  serviceUrl: string;
  children: ReactNode;
};

const reasons = [
  {
    title: "Duidelijke afspraken",
    text: "We bespreken vooraf wat er moet gebeuren en houden de communicatie tijdens het project duidelijk.",
  },
  {
    title: "Nette uitvoering",
    text: "We besteden aandacht aan de uitvoering en een verzorgde afwerking van de werkzaamheden.",
  },
  {
    title: "Persoonlijke communicatie",
    text: "U heeft direct contact over uw project en kunt uw wensen en vragen duidelijk bespreken.",
  },
  {
    title: "Vrijblijvende offerte",
    text: "Vertel ons wat u wilt laten uitvoeren. We bekijken uw aanvraag en bespreken de mogelijkheden.",
  },
];

export default function ServiceLayout({
  badge,
  title,
  description,
  serviceName,
  serviceUrl,
  children,
}: Props) {
  return (
    <main className="bg-slate-50">
      <ServiceSchema
        name={serviceName}
        description={description}
        url={serviceUrl}
      />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.krachtklusbedrijf-ms.nl",
          },
          {
            name: serviceName,
            url: serviceUrl,
          },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-200">
            {badge}
          </span>

          <h1 className="mt-8 max-w-4xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl md:leading-9">
            {description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              Vraag vrijblijvend een offerte aan
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+31643680281"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition duration-300 hover:bg-white hover:text-blue-900"
            >
              <Phone size={19} />
              Bel direct
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE CONTENT */}
      {children}

      {/* WHY CHOOSE US */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
              ONZE AANPAK
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Waarom kiezen voor M.S. Kracht Klusbedrijf?
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              We vinden duidelijke afspraken, persoonlijke communicatie en
              een nette uitvoering belangrijk bij ieder project.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                  <CheckCircle size={25} className="text-blue-700" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-blue-100">
            VRIJBLIJVENDE OFFERTE
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Wilt u uw project bespreken?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-blue-100 md:text-xl">
            Vertel ons wat u wilt laten uitvoeren. We bekijken uw aanvraag
            en bespreken graag de mogelijkheden voor uw woning of pand.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl"
            >
              Vraag vrijblijvend een offerte aan
              <ArrowRight size={21} />
            </Link>

            <a
              href="tel:+31643680281"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-blue-900"
            >
              <Phone size={20} />
              Bel direct
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}