import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klusbedrijf Oosterbeek | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "Klusbedrijf in Oosterbeek voor renovatie, verbouwing, schilderwerk, vloeren, badkamerrenovatie, zolderrenovatie en isolatie. Vraag vrijblijvend een offerte aan.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/oosterbeek",
  },
};

const services = [
  {
    title: "Renovatie & verbouwing",
    description:
      "Verschillende werkzaamheden voor het vernieuwen, aanpassen en verbeteren van uw woning.",
    href: "/renovatie",
    linkText: "Bekijk renovatie →",
  },
  {
    title: "Schilderwerk",
    description:
      "Binnen- en buitenschilderwerk voor een frisse uitstraling en een verzorgde afwerking.",
    href: "/schilderwerk",
    linkText: "Bekijk schilderwerk →",
  },
  {
    title: "Badkamerrenovatie",
    description:
      "Een bestaande badkamer vernieuwen en de ruimte praktisch en verzorgd laten afwerken.",
    href: "/badkamer-renovatie",
    linkText: "Bekijk badkamerrenovatie →",
  },
  {
    title: "Vloeren leggen",
    description:
      "Het plaatsen van vloerafwerkingen zoals laminaat en andere vloeren.",
    href: "/vloeren",
    linkText: "Bekijk vloeren →",
  },
  {
    title: "Zolderrenovatie",
    description:
      "Een zolder renoveren en de beschikbare ruimte praktischer en comfortabeler maken.",
    href: "/zolder-renovatie",
    linkText: "Bekijk zolderrenovatie →",
  },
  {
    title: "Isolatie",
    description:
      "Isolatiewerkzaamheden als onderdeel van renovatie en verbouwing.",
    href: "/isolatie",
    linkText: "Bekijk isolatie →",
  },
];

const nearbyAreas = [
  { name: "Elst", href: "/elst" },
  { name: "Arnhem", href: "/arnhem" },
  { name: "Nijmegen", href: "/nijmegen" },
  { name: "Bemmel", href: "/bemmel" },
  { name: "Huissen", href: "/huissen" },
  { name: "Lent", href: "/lent" },
];

export default function OosterbeekPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-[3px] text-blue-400">
            M.S. Kracht Klusbedrijf · Regio Oosterbeek
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Oosterbeek voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Heeft u een renovatie, verbouwing of klus in Oosterbeek gepland?
            M.S. Kracht Klusbedrijf helpt bij verschillende werkzaamheden in
            en rondom uw woning, van schilderwerk en vloeren tot badkamer- en
            zolderrenovatie.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold transition hover:bg-blue-700"
            >
              Vraag vrijblijvend een offerte aan
            </a>

            <a
              href="tel:+31643680281"
              className="rounded-xl border border-white px-7 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Bel direct
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-300">
            <span>✓ Gevestigd in Elst</span>
            <span>✓ Actief in Oosterbeek</span>
            <span>✓ Vrijblijvende offerte</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Renovatie en klussen in Oosterbeek
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Een woning renoveren of verbouwen vraagt om een duidelijke
            voorbereiding en een zorgvuldige uitvoering. M.S. Kracht
            Klusbedrijf werkt voor klanten in Oosterbeek aan verschillende
            renovatie-, onderhouds- en verbouwingswerkzaamheden.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Wilt u uw woning opnieuw laten schilderen, een nieuwe vloer laten
            plaatsen of een badkamer, zolder of isolatie aanpakken? We
            bespreken de werkzaamheden vooraf en kijken samen naar een
            praktische aanpak die past bij uw woning en project.
          </p>

          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Bespreek uw klus
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Onze werkzaamheden in Oosterbeek
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Van een enkele klus tot een grotere renovatie: M.S. Kracht
            Klusbedrijf biedt verschillende werkzaamheden voor woningen in
            Oosterbeek.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
                >
                  {service.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Zo pakken we uw project aan
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Bij een renovatie of verbouwing is een goede voorbereiding
            belangrijk. We bespreken uw wensen en de werkzaamheden en kijken
            samen naar een praktische aanpak voor het project.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Stap 1
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Bespreken
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We bespreken uw wensen en bepalen welke werkzaamheden nodig
                zijn.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Stap 2
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Voorbereiden
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We bekijken de gewenste werkzaamheden en afwerking van het
                project.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">
                Stap 3
              </p>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                Uitvoeren
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We voeren de werkzaamheden zorgvuldig uit met aandacht voor
                een nette eindafwerking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Waarom M.S. Kracht Klusbedrijf?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Persoonlijke aanpak
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We luisteren naar uw wensen en bespreken vooraf duidelijk wat
                er moet gebeuren.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Nette afwerking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We werken zorgvuldig en besteden aandacht aan de details van
                het project.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Verschillende diensten
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Renovatie, schilderwerk, vloeren, badkamers, isolatie en
                zolderrenovatie kunnen onderdeel zijn van één project.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Actief in Oosterbeek
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vanuit Elst zijn wij actief in Oosterbeek en verschillende
                omliggende plaatsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bekijk uitgevoerd werk
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Bekijk voorbeelden van gerealiseerde renovaties, verbouwingen en
            andere werkzaamheden van M.S. Kracht Klusbedrijf.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Stucwerk & schilderwerk
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Wand- en plafondafwerking
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Bekijk foto's van uitgevoerd stucwerk en binnenschilderwerk.
              </p>

              <Link
                href="/projecten/stucwerk-schilderwerk"
                className="mt-5 inline-block font-semibold text-white hover:text-blue-300"
              >
                Bekijk project →
              </Link>
            </div>

            <div className="rounded-2xl bg-white/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Tegelwerk
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Tegelwerk en afwerking
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Bekijk foto's van uitgevoerd tegelwerk met aandacht voor een
                strakke en nette afwerking.
              </p>

              <Link
                href="/projecten/tegelwerk"
                className="mt-5 inline-block font-semibold text-white hover:text-blue-300"
              >
                Bekijk project →
              </Link>
            </div>

            <div className="rounded-2xl bg-white/10 p-7">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
                Alle projecten
              </p>

              <h3 className="mt-3 text-xl font-bold">
                Meer uitgevoerd werk
              </h3>

              <p className="mt-3 leading-7 text-gray-300">
                Bekijk ook andere projecten van M.S. Kracht Klusbedrijf.
              </p>

              <Link
                href="/projecten"
                className="mt-5 inline-block font-semibold text-white hover:text-blue-300"
              >
                Bekijk alle projecten →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Ook actief in Elst en omgeving
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            M.S. Kracht Klusbedrijf is gevestigd in Elst en werkt ook in
            Oosterbeek en omliggende plaatsen.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="rounded-full border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 shadow-sm transition hover:border-blue-300 hover:text-blue-700"
              >
                Klusbedrijf {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Heeft u een klus in Oosterbeek?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Heeft u plannen voor een renovatie, verbouwing, schilderwerk,
            nieuwe vloer, badkamerrenovatie, zolderrenovatie of isolatie?
            Vraag vrijblijvend een offerte aan en bespreek uw werkzaamheden
            met M.S. Kracht Klusbedrijf.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/#contact"
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Vraag vrijblijvend een offerte aan
            </a>

            <a
              href="tel:+31643680281"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Bel direct
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
            <p>
              <strong>Telefoon:</strong>{" "}
              <a
                href="tel:+31643680281"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                06 43680281
              </a>
            </p>

            <p>
              <strong>E-mail:</strong>{" "}
              <a
                href="mailto:info@krachtklusbedrijf-ms.nl"
                className="font-semibold text-blue-700 hover:text-blue-900"
              >
                info@krachtklusbedrijf-ms.nl
              </a>
            </p>

            <p className="sm:col-span-2">
              <strong>Adres:</strong> Koningin Wilhelminastraat 73, 6661 VW
              Elst
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}