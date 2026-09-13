import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klusbedrijf Arnhem | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "M.S. Kracht Klusbedrijf voor renovatie en verbouwing in Arnhem. Schilderwerk, badkamers, vloeren, isolatie en zolderrenovatie voor woningen.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/arnhem",
  },
};

export default function ArnhemPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-400">
            M.S. Kracht Klusbedrijf
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Arnhem voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Bent u op zoek naar een klusbedrijf voor werkzaamheden aan uw
            woning in Arnhem? M.S. Kracht Klusbedrijf helpt bij renovatie,
            verbouwing, onderhoud en verschillende werkzaamheden in en rondom
            de woning.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+31643680281"
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold transition hover:bg-blue-700"
            >
              Bel direct: 06 43680281
            </a>

            <Link
              href="/projecten"
              className="rounded-xl border border-white px-7 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Bekijk onze projecten
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Renovatie en klussen in Arnhem
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Een woning renoveren of verbouwen vraagt om een goede voorbereiding
            en een nette uitvoering. M.S. Kracht Klusbedrijf ondersteunt
            klanten in Arnhem bij verschillende werkzaamheden en denkt mee
            over een praktische aanpak van het project.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Of het nu gaat om schilderwerk, een nieuwe vloer, het renoveren
            van een badkamer, isolatiewerkzaamheden of het aanpakken van een
            zolder: verschillende werkzaamheden kunnen onderdeel zijn van uw
            renovatie of verbouwing.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Onze werkzaamheden in Arnhem
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            M.S. Kracht Klusbedrijf voert verschillende werkzaamheden uit voor
            particuliere woningen en renovatieprojecten.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Renovatie & verbouwing
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Renovatie- en verbouwingswerkzaamheden waarbij verschillende
                onderdelen van een woning worden aangepakt.
              </p>
              <Link
                href="/renovatie"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk renovatie →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Schilderwerk
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Binnen- en buitenschilderwerk voor het vernieuwen en netjes
                afwerken van verschillende ruimtes en oppervlakken.
              </p>
              <Link
                href="/schilderwerk"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk schilderwerk →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Badkamerrenovatie
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Een bestaande badkamer vernieuwen en de ruimte praktisch en
                verzorgd laten afwerken.
              </p>
              <Link
                href="/badkamer-renovatie"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk badkamerrenovatie →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Vloeren leggen
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Het plaatsen van verschillende vloerafwerkingen, waaronder
                laminaat en andere vloeren.
              </p>
              <Link
                href="/vloeren"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk vloeren →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Zolderrenovatie
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Een zolder renoveren en de beschikbare ruimte praktischer en
                comfortabeler maken.
              </p>
              <Link
                href="/zolder-renovatie"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk zolderrenovatie →
              </Link>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Isolatie
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Isolatiewerkzaamheden die kunnen bijdragen aan een comfortabel
                en energiezuiniger huis.
              </p>
              <Link
                href="/isolatie"
                className="mt-5 inline-block font-semibold text-blue-700 hover:text-blue-900"
              >
                Bekijk isolatie →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Waarom M.S. Kracht Klusbedrijf?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Persoonlijke aanpak
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We bespreken vooraf welke werkzaamheden nodig zijn en houden
                rekening met uw wensen en de situatie van de woning.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Zorgvuldige uitvoering
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We werken netjes en besteden aandacht aan een verzorgde
                afwerking van het project.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Meerdere werkzaamheden
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Renovatie, schilderwerk, vloeren, badkamers, isolatie en
                zolderrenovatie kunnen onderdeel zijn van één project.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Actief in Arnhem
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vanuit Elst zijn wij actief in Arnhem en verschillende
                omliggende plaatsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bekijk onze projecten
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Bekijk voorbeelden van renovaties, verbouwingen en andere
            werkzaamheden die door M.S. Kracht Klusbedrijf zijn uitgevoerd.
          </p>

          <Link
            href="/projecten"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
          >
            Bekijk alle projecten
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Heeft u een klus in Arnhem?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Heeft u plannen voor een renovatie, verbouwing, schilderwerk,
            nieuwe vloer, badkamerrenovatie, zolderrenovatie of isolatie?
            Neem contact op met M.S. Kracht Klusbedrijf voor meer informatie
            of een vrijblijvende offerte.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="tel:+31643680281"
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              06 43680281
            </a>

            <a
              href="mailto:info@krachtklusbedrijf-ms.nl"
              className="rounded-xl border border-slate-300 bg-white px-7 py-4 text-center font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              info@krachtklusbedrijf-ms.nl
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}