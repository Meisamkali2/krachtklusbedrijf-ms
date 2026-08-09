import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Nijmegen | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Nijmegen voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function NijmegenPage() {
  return (
    <CityLayout
      city="Nijmegen"
      title="Klusbedrijf Nijmegen"
      description="M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Nijmegen met renovaties, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Professioneel klusbedrijf in Nijmegen
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

        <p>
          Zoekt u een betrouwbaar klusbedrijf in Nijmegen? M.S. Kracht
          Klusbedrijf voert complete renovaties uit voor woningen,
          appartementen en bedrijfspanden.
        </p>

        <p>
          Onze vakmensen zijn gespecialiseerd in schilderwerk,
          badkamer renovaties, vloeren, isolatie,
          zolderrenovaties en complete verbouwingen.
        </p>

        <p>
          Wij werken uitsluitend met hoogwaardige materialen en zorgen
          voor een duurzame afwerking waar u jarenlang plezier van heeft.
        </p>

      </div>

    </CityLayout>
  );
}