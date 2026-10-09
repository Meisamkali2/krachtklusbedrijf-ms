import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Klusbedrijf Elst | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "Klusbedrijf in Elst voor renovatie, verbouwing, schilderwerk, vloeren, badkamerrenovatie, zolderrenovatie en isolatie. Vraag vrijblijvend een offerte aan.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/elst",
  },
};

const services = [
  {
    title: "Renovatie & verbouwing",
    text: "Renovatie en verbouwingen waarbij verschillende werkzaamheden binnen één project samenkomen.",
    href: "/renovatie",
  },
  {
    title: "Schilderwerk",
    text: "Binnen- en buitenschilderwerk voor woningen en andere particuliere projecten.",
    href: "/schilderwerk",
  },
  {
    title: "Badkamerrenovatie",
    text: "Uw badkamer vernieuwen en verschillende onderdelen van de ruimte opnieuw afwerken.",
    href: "/badkamer-renovatie",
  },
  {
    title: "Vloeren leggen",
    text: "Vloeren leggen en vernieuwen als onderdeel van een renovatie of verbouwing.",
    href: "/vloeren",
  },
  {
    title: "Zolderrenovatie",
    text: "Uw zolder vernieuwen, isoleren en afwerken zodat de ruimte beter bij uw wensen past.",
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
    title: "Persoonlijk contact",
    text: "We bespreken uw wensen en de werkzaamheden vooraf.",
  },
  {
    title: "Duidelijke afspraken",
    text: "Vooraf bespreken we wat er moet gebeuren en hoe de werkzaamheden worden uitgevoerd.",
  },
  {
    title: "Nette afwerking",
    text: "We werken zorgvuldig en besteden aandacht aan de afwerking van het project.",
  },
  {
    title: "Gevestigd in Elst",
    text: "M.S. Kracht Klusbedrijf is gevestigd aan de Koningin Wilhelminastraat in Elst.",
  },
];

const nearbyAreas = [
  { name: "Arnhem", href: "/arnhem" },
  { name: "Nijmegen", href: "/nijmegen" },
  { name: "Bemmel", href: "/bemmel" },
  { name: "Huissen", href: "/huissen" },
  { name: "Lent", href: "/lent" },
  { name: "Oosterbeek", href: "/oosterbeek" },
];

export default function ElstPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[4px] text-blue-400">
            M.S. Kracht Klusbedrijf · Elst
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Elst voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            M.S. Kracht Klusbedrijf helpt particulieren in Elst met
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
              Werkzaam voor particulieren
            </span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            KLUSBEDRIJF IN ELST
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Uw klusbedrijf in Elst
          </h2>

          <div className="mt-8 max-w-4xl space-y-6 text-lg leading-8 text-slate-600">
            <p>
              M.S. Kracht Klusbedrijf is gevestigd aan de Koningin
              Wilhelminastraat 73 in Elst. We helpen particulieren met
              verschillende renovatie-, onderhouds- en
              verbouwingswerkzaamheden.
            </p>

            <p>
              Van schilderwerk en vloeren tot een badkamerrenovatie,
              zolderrenovatie of grotere verbouwing: we bespreken uw wensen
              en stemmen de werkzaamheden af op de bestaande situatie.
            </p>
          </div>

          <div className="mt-10 flex items-start gap-4 rounded-2xl bg-slate-50 p-6">
            <MapPin
              size={24}
              className="mt-1 shrink-0 text-blue-700"
            />

            <div>
              <p className="font-bold text-slate-900">
                M.S. Kracht Klusbedrijf
              </p>

              <p className="mt-1 text-slate-600">
                Koningin Wilhelminastraat 73, 6661 VW Elst
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE DIENSTEN IN ELST
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Werkzaamheden voor uw woning
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Bekijk de belangrijkste werkzaamheden waarvoor u bij
              M.S. Kracht Klusbedrijf terechtkunt.
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

      {/* Why choose us */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[4px] text-blue-600">
              ONZE AANPAK
            </p>

            <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
              Waarom kiezen voor M.S. Kracht Klusbedrijf?
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
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
            Bekijk voorbeelden van renovatie-, schilder-,
            vloer- en andere werkzaamheden die door M.S. Kracht
            Klusbedrijf zijn uitgevoerd.
          </p>

          <Link
            href="/projecten"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
          >
            Bekijk alle projecten
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            ELST EN OMGEVING
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Ook actief in omliggende plaatsen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Vanuit Elst zijn we ook actief in verschillende omliggende
            plaatsen. Bekijk de lokale pagina voor meer informatie.
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
            KLUS IN ELST?
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Renovatie of verbouwing gepland?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Heeft u plannen voor een renovatie, verbouwing, schilderwerk,
            vloer, badkamer, zolder of isolatie? Bespreek uw project met
            M.S. Kracht Klusbedrijf.
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