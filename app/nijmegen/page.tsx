import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klusbedrijf Nijmegen | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "M.S. Kracht Klusbedrijf voor renovatie en verbouwing in Nijmegen. Schilderwerk, badkamers, vloeren, isolatie en zolderrenovatie voor woningen.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/nijmegen",
  },
};

export default function NijmegenPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-400">
            M.S. Kracht Klusbedrijf
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Nijmegen voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Heeft u plannen om uw woning in Nijmegen te renoveren, te
            verbouwen of op te knappen? M.S. Kracht Klusbedrijf helpt bij
            verschillende werkzaamheden in en rondom de woning.
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
            Renovatie en klussen in Nijmegen
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            Een renovatie begint met een duidelijk plan. Of u nu één ruimte
            wilt aanpakken of meerdere werkzaamheden wilt combineren, een
            goede voorbereiding zorgt voor een overzichtelijk project.
            M.S. Kracht Klusbedrijf werkt voor klanten in Nijmegen aan
            verschillende renovatie-, onderhouds- en verbouwingswerkzaamheden.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Denk bijvoorbeeld aan het vernieuwen van schilderwerk, het leggen
            van een vloer, het renoveren van een badkamer, het verbeteren van
            de isolatie of het opnieuw indelen en afwerken van een zolder.
            Voor grotere projecten kunnen meerdere werkzaamheden worden
            gecombineerd.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Onze werkzaamheden in Nijmegen
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            Van een enkele klus tot een grotere renovatie: M.S. Kracht
            Klusbedrijf biedt verschillende werkzaamheden voor woningen in
            Nijmegen.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Renovatie & verbouwing
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Verschillende werkzaamheden voor het vernieuwen, aanpassen en
                verbeteren van uw woning.
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
                Binnen- en buitenschilderwerk voor een frisse uitstraling en
                een verzorgde afwerking.
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
                Het vernieuwen en renoveren van een badkamer met aandacht voor
                een praktische en nette afwerking.
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
                Het plaatsen van vloerafwerkingen zoals laminaat en andere
                vloeren.
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
                Isolatiewerkzaamheden voor een comfortabeler en
                energiezuiniger huis.
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

      {/* Approach */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Zo pakken we uw klus aan
          </h2>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-700">
            Bij een renovatie of verbouwing is het belangrijk dat vooraf
            duidelijk is welke werkzaamheden nodig zijn. We bespreken de
            wensen en bekijken samen welke aanpak past bij uw woning en
            project.
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
                We bespreken uw wensen, de werkzaamheden en de gewenste
                afwerking.
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
                We bepalen samen welke werkzaamheden nodig zijn voor een
                praktische uitvoering van het project.
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
                De werkzaamheden worden zorgvuldig uitgevoerd met aandacht
                voor een nette eindafwerking.
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
                We luisteren naar uw wensen en bespreken vooraf wat er moet
                gebeuren.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Nette afwerking
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                We besteden aandacht aan de details en een verzorgde
                eindafwerking van het project.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Meerdere diensten
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Renovatie, schilderwerk, vloeren, badkamers, isolatie en
                zolderrenovatie kunnen onderdeel zijn van uw project.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Actief in Nijmegen
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Vanuit Elst zijn wij actief in Nijmegen en verschillende
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
            Bekijk voorbeelden van gerealiseerde renovaties, verbouwingen en
            andere werkzaamheden van M.S. Kracht Klusbedrijf.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link
              href="/projecten"
              className="rounded-xl bg-blue-600 px-7 py-4 text-center font-semibold transition hover:bg-blue-700"
            >
              Bekijk alle projecten
            </Link>

            <Link
              href="/projecten/stucwerk-schilderwerk"
              className="rounded-xl border border-white px-7 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Stucwerk & schilderwerk →
            </Link>

            <Link
              href="/projecten/tegelwerk"
              className="rounded-xl border border-white px-7 py-4 text-center font-semibold transition hover:bg-white hover:text-slate-950"
            >
              Tegelwerk →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Heeft u een klus in Nijmegen?
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

          <p className="mt-8 text-sm leading-6 text-slate-600">
            Koningin Wilhelminastraat 73, 6661 VW Elst
          </p>
        </div>
      </section>
    </main>
  );
}