import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Oosterbeek | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Oosterbeek voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function OosterbeekPage() {
  return (
    <CityLayout
      city="Oosterbeek"
      title="Klusbedrijf Oosterbeek"
      description="M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Oosterbeek met renovaties, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Professioneel klusbedrijf in Oosterbeek
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

        <p>
          Bent u op zoek naar een ervaren klusbedrijf in Oosterbeek?
          Wij verzorgen complete renovaties voor woningen,
          appartementen en bedrijfspanden.
        </p>

        <p>
          Onze vakmensen zijn gespecialiseerd in schilderwerk,
          badkamer renovaties, vloeren, isolatie,
          zolderrenovaties en complete verbouwingen.
        </p>

        <p>
          Met hoogwaardige materialen, duidelijke communicatie
          en oog voor detail zorgen wij voor een duurzaam
          eindresultaat waar u jarenlang plezier van heeft.
        </p>

      </div>

    </CityLayout>
  );
}