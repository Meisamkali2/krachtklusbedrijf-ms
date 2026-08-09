import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Bemmel | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Bemmel voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function BemmelPage() {
  return (
    <CityLayout
      city="Bemmel"
      title="Klusbedrijf Bemmel"
      description="M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Bemmel met renovaties, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Professioneel klusbedrijf in Bemmel
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

        <p>
          Woont u in Bemmel en zoekt u een ervaren klusbedrijf?
          M.S. Kracht Klusbedrijf voert renovaties uit voor woningen,
          appartementen en bedrijfspanden.
        </p>

        <p>
          Wij verzorgen schilderwerk, badkamer renovaties,
          vloeren, isolatie, zolderrenovaties en complete
          verbouwingen met hoogwaardige materialen.
        </p>

        <p>
          Wij staan bekend om duidelijke communicatie,
          vakmanschap en een nette afwerking waar u jarenlang
          plezier van heeft.
        </p>

      </div>

    </CityLayout>
  );
}