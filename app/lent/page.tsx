import type { Metadata } from "next";
import CityLayout from "../components/cities/CityLayout";
export const metadata: Metadata = {
  title: "Klusbedrijf Lent | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel klusbedrijf in Lent voor renovaties, schilderwerk, badkamers, vloeren, isolatie en complete verbouwingen.",
};

export default function LentPage() {
  return (
    <CityLayout
      city="Lent"
      title="Klusbedrijf Lent"
      description="M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Lent met renovaties, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen."
    >
      <h2 className="text-4xl font-black text-slate-900">
        Professioneel klusbedrijf in Lent
      </h2>

      <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

        <p>
          Zoekt u een betrouwbaar klusbedrijf in Lent? Wij verzorgen
          complete renovaties voor woningen, appartementen en
          bedrijfspanden.
        </p>

        <p>
          Onze specialisten voeren schilderwerk, badkamer renovaties,
          vloeren, isolatie, zolderrenovaties en complete
          verbouwingen uit met oog voor detail.
        </p>

        <p>
          Wij combineren vakmanschap, hoogwaardige materialen en
          duidelijke communicatie zodat u verzekerd bent van een
          duurzaam eindresultaat.
        </p>

      </div>

    </CityLayout>
  );
}