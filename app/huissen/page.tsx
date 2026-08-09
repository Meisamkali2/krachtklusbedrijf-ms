import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Huissen | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Huissen voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function HuissenPage() {
  return (
    <CityLayout
      city="Huissen"
      title="Klusbedrijf Huissen"
      description="M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Huissen met renovaties, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Professioneel klusbedrijf in Huissen
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
        <p>
          Zoekt u een ervaren klusbedrijf in Huissen? Wij realiseren
          complete renovaties voor woningen, appartementen en
          bedrijfspanden.
        </p>

        <p>
          Onze diensten bestaan uit schilderwerk, badkamer renovaties,
          vloeren, isolatie, zolderrenovaties en complete
          verbouwingen.
        </p>

        <p>
          Wij leveren vakwerk, werken netjes en gebruiken uitsluitend
          hoogwaardige materialen voor een duurzaam resultaat.
        </p>
      </div>
    </CityLayout>
  );
}