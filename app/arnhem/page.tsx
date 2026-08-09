import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Arnhem | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Arnhem voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function ArnhemPage() {
  return (
    <CityLayout
      city="Arnhem"
      title="Klusbedrijf Arnhem"
      description="M.S. Kracht Klusbedrijf is uw betrouwbare partner voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen in Arnhem."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Vakmanschap in Arnhem
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

        <p>
          Woont u in Arnhem en zoekt u een betrouwbaar klusbedrijf?
          M.S. Kracht Klusbedrijf voert complete renovaties uit voor
          woningen, appartementen en bedrijfspanden.
        </p>

        <p>
          Wij zijn gespecialiseerd in schilderwerk,
          badkamer renovaties, vloeren, isolatie,
          zolderrenovaties en complete verbouwingen.
        </p>

        <p>
          Dankzij hoogwaardige materialen,
          duidelijke communicatie en een perfecte afwerking
          leveren wij duurzame kwaliteit waar u jarenlang
          plezier van heeft.
        </p>

      </div>

    </CityLayout>
  );
}