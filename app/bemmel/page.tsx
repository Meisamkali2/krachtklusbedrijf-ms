import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Klusbedrijf Bemmel | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "Klusbedrijf in Bemmel voor renovatie, verbouwing, schilderwerk, vloeren, badkamerrenovatie, zolderrenovatie en isolatie. Vraag vrijblijvend een offerte aan.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/bemmel",
  },
};

const services = [
  {
    title: "Renovatie & verbouwing",
    text: "Verschillende werkzaamheden voor het vernieuwen, aanpassen en verbeteren van uw woning.",
    href: "/renovatie",
  },
  {
    title: "Schilderwerk",
    text: "Binnen- en buitenschilderwerk voor een frisse uitstraling en een verzorgde afwerking.",
    href: "/schilderwerk",
  },
  {
    title: "Badkamerrenovatie",
    text: "Een bestaande badkamer vernieuwen en de ruimte praktisch en verzorgd laten afwerken.",
    href: "/badkamer-renovatie",
  },
  {
    title: "Vloeren leggen",
    text: "Vloeren leggen en vernieuwen, waaronder laminaat en andere vloerafwerkingen.",
    href: "/vloeren",
  },
  {
    title: "Zolderrenovatie",
    text: "Een zolder renoveren, isoleren en afwerken zodat de ruimte beter bij uw wensen past.",
    href: "/zolder-renovatie",
  },
  {
    title: "Isolatie",
    text: "Isolatiewerkzaamheden als onderdeel van renovatie en verbouwing.",
    href: "/isolatie",
  },
];

const benefits = [
  {
    title: "Persoonlijke aanpak",
    text: "We luisteren naar uw wensen en bespreken vooraf duidelijk wat er moet gebeuren.",
  },
  {
    title: "Nette afwerking",
    text: "We werken zorgvuldig en besteden aandacht aan de details van het project.",
  },
  {
    title: "Verschillende diensten",
    text: "Renovatie, schilderwerk, vloeren, badkamers, isolatie en zolderrenovatie kunnen onderdeel zijn van één project.",
  },
  {
    title: "Actief in Bemmel",
    text: "M.S. Kracht Klusbedrijf is gevestigd in Elst en werkt ook voor particuliere projecten in Bemmel.",
  },
];

const nearbyAreas = [
  { name: "Elst", href: "/elst" },
  { name: "Arnhem", href: "/arnhem" },
  { name: "Nijmegen", href: "/nijmegen" },
  { name: "Huissen", href: "/huissen" },
  { name: "Lent", href: "/lent" },
  { name: "Oosterbeek", href: "/oosterbeek" },
];

export default function BemmelPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[4px] text-blue-400">
            M.S. Kracht Klusbedrijf · Regio Bemmel
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Bemmel voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            M.S. Kracht Klusbedrijf helpt particulieren in Bemmel met
            renovatie, verbouwing, schilderwerk, vloeren, badkamers,
            zolderrenovatie en isolatie.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Vraag vrijblijvend een offerte aan
              <ArrowRight size={21} />
            </Link>

            <a
              href="tel:+31643680281"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/80 px-8 py-4 text-lg font-bold text-white transition duration-300 hover:bg-white hover:text-slate-950"
            >
              <Phone size={20} />
              Bel direct
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center sm:gap-6">
            <span className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-400" />
              Gevestigd in Elst
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle size={18} className="text-blue-400" />
              Actief in Bemmel en omgeving
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            KLUSBEDRIJF IN BEMMEL
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Renovatie en klussen in Bemmel
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Een woning renoveren of verbouwen vraagt om een duidelijke
              voorbereiding en een zorgvuldige uitvoering. M.S. Kracht
              Klusbedrijf helpt particuliere klanten in Bemmel met
              verschillende renovatie-, onderhouds- en
              verbouwingswerkzaamheden.
            </p>

            <p>
              Wilt u uw woning opnieuw laten schilderen, een nieuwe vloer
              laten plaatsen of een badkamer, zolder of isolatie aanpakken?
              We bespreken vooraf de werkzaamheden en kijken naar een
              praktische aanpak die past bij uw project.
            </p>

            <p>
              M.S. Kracht Klusbedrijf is gevestigd in Elst en is vanuit daar
              ook actief in Bemmel en omliggende plaatsen.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE DIENSTEN IN BEMMEL
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Werkzaamheden voor uw woning
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              M.S. Kracht Klusbedrijf voert verschillende werkzaamheden uit
              voor woningen en renovatieprojecten in Bemmel.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
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
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE WERKWIJZE
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Zo pakken we uw project aan
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Bij een renovatie of verbouwing bespreken we vooraf wat er
              nodig is en stemmen we de werkzaamheden af op uw woning en
              project.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">
                01
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Bespreken
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We bespreken uw wensen en bepalen welke werkzaamheden nodig
                zijn.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">
                02
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Voorbereiden
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We bekijken de gewenste werkzaamheden en afwerking van het
                project.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">
                03
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Uitvoeren
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                We voeren de werkzaamheden zorgvuldig uit met aandacht voor
                een nette eindafwerking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE AANPAK
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Waarom M.S. Kracht Klusbedrijf?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle
                    size={23}
                    className="mt-1 shrink-0 text-blue-700"
                  />

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {benefit.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-[4px] text-blue-400">
            UITGEVOERD WERK
          </p>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            Bekijk onze projecten
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Bekijk voorbeelden van gerealiseerde renovaties, verbouwingen
            en andere werkzaamheden van M.S. Kracht Klusbedrijf.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/projecten"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
            >
              Bekijk alle projecten
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/projecten/stucwerk-schilderwerk"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Stucwerk & schilderwerk
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/projecten/tegelwerk"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Tegelwerk
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            BEMMEL EN OMGEVING
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Ook actief in omliggende plaatsen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Vanuit Elst werkt M.S. Kracht Klusbedrijf ook in verschillende
            omliggende plaatsen.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
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

      {/* CTA */}
      <section className="bg-blue-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            KLUS IN BEMMEL?
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Renovatie of verbouwing gepland?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Heeft u plannen voor renovatie, verbouwing, schilderwerk,
            een nieuwe vloer, badkamer, zolder of isolatie? Bespreek uw
            project met M.S. Kracht Klusbedrijf.
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
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-800 transition duration-300 hover:border-blue-600 hover:text-blue-700"
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