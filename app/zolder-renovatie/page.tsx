import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Zolder Renovatie | M.S. Kracht Klusbedrijf",
  description:
    "Professionele zolder renovatie in Elst, Arnhem, Nijmegen en Gelderland. Maak van uw zolder een praktische ruimte.",
};

export default function ZolderRenovatiePage() {
  return (
    <ServiceLayout
      badge="ZOLDER RENOVATIE"
      title="Zolder Renovatie in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf helpt u om uw zolder te renoveren en om te bouwen tot een praktische en comfortabele ruimte."
      serviceName="Zolder Renovatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/zolder-renovatie"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Meer uit uw zolder halen
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Een zolder kan vaak veel meer bieden dan alleen
              opslagruimte. Met een goede renovatie kunt u extra
              leefruimte creëren.
            </p>

            <p>
              Wij helpen met verschillende werkzaamheden tijdens een
              zolderrenovatie, van afwerking tot isolatie en verbouwing.
            </p>

            <p>
              Het doel is een praktische, comfortabele en netjes afgewerkte
              ruimte die past bij uw woning.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}