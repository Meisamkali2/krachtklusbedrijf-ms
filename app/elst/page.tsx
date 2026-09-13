import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Klusbedrijf Elst | Renovatie & Verbouwing | M.S. Kracht",
  description:
    "M.S. Kracht Klusbedrijf in Elst voor renovatie, verbouwing, schilderwerk, vloeren, badkamerrenovatie, zolderrenovatie en isolatie. Vraag vrijblijvend een offerte aan.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/elst",
  },
};

export default function ElstPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-400">
            M.S. Kracht Klusbedrijf
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Klusbedrijf in Elst voor renovatie en verbouwing
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-300 md:text-xl">
            Woont u in Elst en zoekt u een betrouwbaar klusbedrijf voor een
            renovatie, verbouwing of onderhoudsproject? M.S. Kracht Klusbedrijf
            helpt particulieren met verschillende werkzaamheden in en rondom
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
            Uw klusbedrijf in Elst
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            M.S. Kracht Klusbedrijf is gevestigd aan de Koningin
            Wilhelminastraat 73 in Elst. Wij voeren uiteenlopende
            renovatie-, onderhouds- en verbouwingswerkzaamheden uit voor
            woningen en andere particuliere projecten.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Van schilderwerk en het leggen van een nieuwe vloer tot een
            badkamerrenovatie, zolderrenovatie of grotere verbouwing: wij
            denken mee over de werkzaamheden en zorgen voor een nette en
            professionele uitvoering.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-slate-900 md:text-4xl">
            Onze werkzaamheden in Elst
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-8 text-slate-600">
            Voor verschillende werkzaamheden in en rondom uw woning kunt u
            terecht bij M.S. Kracht Klusbedrijf.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">
                Renovatie & verbouwing
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Renovatie en verbouwingen waarbij verschillende werkzaamheden
                samenkomen. Van voorbereiding tot de afwerking.
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
                Binnen- en buitenschilderwerk voor een verzorgde en duurzame
                afwerking van uw woning.
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
                Uw badkamer vernieuwen of renoveren met aandacht voor
                functionaliteit, afwerking en uitstraling.
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
                Professioneel plaatsen van vloeren, waaronder laminaat en
                andere vloerafwerkingen.
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
                Een zolder ombouwen of renoveren tot een praktische en
                comfortabele ruimte.
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
                Isolatiewerkzaamheden om uw woning comfortabeler en
                energiezuiniger te maken.
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
            Waarom kiezen voor M.S. Kracht Klusbedrijf?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Persoonlijk contact
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We bespreken uw wensen en werkzaamheden vooraf, zodat duidelijk
                is wat er moet gebeuren.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Nette afwerking
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                We werken zorgvuldig en besteden aandacht aan de afwerking van
                het project.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Verschillende werkzaamheden
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Verschillende werkzaamheden binnen renovatie, onderhoud en
                verbouwing kunnen worden gecombineerd.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <h3 className="text-xl font-bold text-slate-900">
                Gevestigd in Elst
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Vanuit onze locatie aan de Koningin Wilhelminastraat in Elst
                zijn wij actief in Elst en omliggende plaatsen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Bekijk onze gerealiseerde projecten
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-300">
            Benieuwd naar de kwaliteit en afwerking van ons werk? Bekijk
            verschillende projecten van M.S. Kracht Klusbedrijf.
          </p>

          <Link
            href="/projecten"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
          >
            Naar alle projecten
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-50 p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
            Renovatie of klus gepland in Elst?
          </h2>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
            Heeft u plannen voor een renovatie, verbouwing, schilderwerk,
            nieuwe vloer, badkamer, zolder of isolatie? Neem contact op met
            M.S. Kracht Klusbedrijf voor meer informatie of een vrijblijvende
            offerte.
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