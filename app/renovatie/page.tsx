import type { Metadata } from "next";
import Link from "next/link";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Renovatie Elst | Woningrenovatie & Verbouwing",
  description:
    "Renovatiebedrijf in Elst voor woningrenovatie en verbouwing. M.S. Kracht Klusbedrijf werkt in Elst, Arnhem, Nijmegen en omgeving.",
  alternates: {
    canonical: "https://www.krachtklusbedrijf-ms.nl/renovatie",
  },
};

export default function RenovatiePage() {
  return (
    <ServiceLayout
      badge="RENOVATIE"
      title="Professionele Renovatie in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf verzorgt woningrenovatie en verbouwingen met aandacht voor kwaliteit, planning en een nette uitvoering."
      serviceName="Renovatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/renovatie"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Complete woningrenovatie
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Een woningrenovatie is een goede manier om uw huis te verbeteren,
              te moderniseren en beter aan te laten sluiten bij uw wensen.
              M.S. Kracht Klusbedrijf helpt particulieren met verschillende
              renovatie- en verbouwingswerkzaamheden in Elst, Arnhem, Nijmegen
              en omgeving.
            </p>

            <p>
              Of het nu gaat om het vernieuwen van een ruimte, het verbeteren
              van de afwerking of een grotere verbouwing: wij bekijken samen
              met u welke werkzaamheden nodig zijn. Door verschillende
              werkzaamheden goed op elkaar af te stemmen, werken we naar een
              verzorgd en duurzaam eindresultaat.
            </p>

            <p>
              Een goede voorbereiding is daarbij belangrijk. We bespreken uw
              wensen, bekijken de situatie en maken duidelijke afspraken over
              de werkzaamheden. Zo weet u vooraf beter wat u kunt verwachten.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              ONZE RENOVATIEWERKZAAMHEDEN
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Renovatie en verbouwing op maat
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-700">
              Iedere woning en ieder renovatieproject is anders. Daarom
              stemmen we de werkzaamheden af op de bestaande situatie en uw
              wensen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/badkamer-renovatie"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Badkamerrenovatie
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Uw badkamer vernieuwen en de ruimte praktisch en verzorgd
                afwerken.
              </p>
            </Link>

            <Link
              href="/schilderwerk"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Schilderwerk
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Binnen- en buitenschilderwerk voor een frisse en nette
                uitstraling van uw woning.
              </p>
            </Link>

            <Link
              href="/vloeren"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Vloeren
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Vloeren leggen en vloerafwerking als onderdeel van uw
                renovatie of verbouwing.
              </p>
            </Link>

            <Link
              href="/isolatie"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Isolatie
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Isolatiewerkzaamheden om uw woning comfortabeler en
                energiezuiniger te maken.
              </p>
            </Link>

            <Link
              href="/zolder-renovatie"
              className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold text-slate-900">
                Zolderrenovatie
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Uw zolder praktisch vernieuwen en beter benutten als onderdeel
                van de woningrenovatie.
              </p>
            </Link>

            <Link
              href="/projecten"
              className="rounded-3xl bg-blue-900 p-8 text-white shadow-sm transition hover:-translate-y-1 hover:bg-blue-800"
            >
              <h3 className="text-2xl font-bold">
                Bekijk onze projecten
              </h3>

              <p className="mt-4 leading-8 text-blue-100">
                Bekijk voorbeelden van renovatie- en verbouwingsprojecten die
                door M.S. Kracht Klusbedrijf zijn uitgevoerd.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Renovatie in Elst, Arnhem en Nijmegen
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              M.S. Kracht Klusbedrijf is gevestigd in Elst en voert
              renovatiewerkzaamheden uit voor woningen in Elst, Arnhem,
              Nijmegen en omliggende plaatsen.
            </p>

            <p>
              Door lokaal te werken kunnen we goed meedenken over de situatie
              van uw woning en duidelijke afspraken maken over de uitvoering
              van het project.
            </p>

            <p>
              Naast Elst, Arnhem en Nijmegen zijn wij actief in onder andere
              Bemmel, Huissen, Lent en Oosterbeek.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/elst"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Elst
            </Link>

            <Link
              href="/arnhem"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Arnhem
            </Link>

            <Link
              href="/nijmegen"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Nijmegen
            </Link>

            <Link
              href="/huissen"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Huissen
            </Link>

            <Link
              href="/bemmel"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Bemmel
            </Link>

            <Link
              href="/lent"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Lent
            </Link>

            <Link
              href="/oosterbeek"
              className="rounded-xl bg-slate-100 px-6 py-3 font-semibold text-slate-800 transition hover:bg-blue-100"
            >
              Klusbedrijf Oosterbeek
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Onze werkwijze
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">01</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Kennismaken
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We bespreken uw wensen en bekijken welke renovatiewerkzaamheden
                nodig zijn.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">02</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Duidelijke afspraken
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We maken duidelijke afspraken over de werkzaamheden en de
                verdere uitvoering van het project.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl font-black text-blue-700">03</div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                Vakkundige uitvoering
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                We voeren de afgesproken werkzaamheden zorgvuldig en netjes
                uit, met aandacht voor het eindresultaat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Waarom kiezen voor M.S. Kracht Klusbedrijf?
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Bij een renovatie wilt u kunnen vertrouwen op een nette
              uitvoering en duidelijke communicatie. Wij denken mee over de
              werkzaamheden en houden rekening met de wensen en bestaande
              situatie van uw woning.
            </p>

            <p>
              Van een specifieke renovatieklus tot meerdere werkzaamheden
              binnen één verbouwing: we streven naar een verzorgd resultaat en
              een prettige samenwerking.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Plannen voor een renovatie?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-blue-100">
            Wilt u uw woning renoveren of verbouwen? Neem contact op met
            M.S. Kracht Klusbedrijf voor meer informatie of een vrijblijvende
            offerte.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-5 text-lg font-bold text-blue-700 transition hover:scale-105"
          >
            Vraag Gratis Offerte
          </Link>
        </div>
      </section>
    </ServiceLayout>
  );
}