import Link from "next/link";
import {
  Paintbrush,
  Hammer,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Schilderwerk",
    icon: Paintbrush,
    text: "Binnen- en buitenschilderwerk voor een nette, duurzame afwerking van uw woning of bedrijfspand.",
    href: "/schilderwerk",
  },
  {
    title: "Renovatie",
    icon: Hammer,
    text: "Renovatie en verbouwing van woningen, badkamers, keukens en andere ruimtes.",
    href: "/renovatie",
  },
  {
    title: "Elektra",
    icon: Zap,
    text: "Elektrische installaties, uitbreidingen en werkzaamheden voor renovatie en verbouwing.",
    href: "/renovatie",
  },
  {
    title: "Isolatie",
    icon: ShieldCheck,
    text: "Isolatiewerkzaamheden voor meer wooncomfort en een energiezuiniger huis.",
    href: "/isolatie",
  },
];

export default function Services() {
  return (
    <section
      id="diensten"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Renovatie en vakwerk voor uw woning
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van schilderwerk en renovatie tot elektra en isolatie. M.S.
            Kracht Klusbedrijf helpt u met verschillende werkzaamheden in
            Elst en omliggende plaatsen.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
              >
                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={42}
                    className="text-blue-600 transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.text}
                </p>

                <div className="mt-6 flex items-center gap-2 font-semibold text-blue-600">
                  Bekijk dienst
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-blue-950 px-6 py-10 text-center text-white md:px-10">
          <h3 className="text-3xl font-bold">
            Heeft u een klus of renovatie in gedachten?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-100">
            Vertel ons wat u wilt laten uitvoeren. We bekijken uw project en
            bespreken graag de mogelijkheden.
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-900 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Vraag vrijblijvend een offerte aan
            <ArrowRight size={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}