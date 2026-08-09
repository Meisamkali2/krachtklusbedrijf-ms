import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";
export const metadata: Metadata = {
  title: "Schilderwerk | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel schilderwerk in Elst, Arnhem, Nijmegen en heel Gelderland. Binnen- en buitenschilderwerk door ervaren vakmensen.",
};

export default function SchilderwerkPage() {
  return (
    <ServiceLayout
      badge="SCHILDERWERK"
      title="Professioneel Schilderwerk in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf verzorgt professioneel binnen- en buitenschilderwerk voor woningen, appartementen en bedrijfspanden."
      serviceName="Schilderwerk"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/schilderwerk"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-5xl font-black text-slate-900">
            Professioneel schilderwerk
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Een goede verflaag beschermt uw woning tegen vocht,
              weersinvloeden en slijtage. Daarnaast zorgt professioneel
              schilderwerk voor een frisse uitstraling en behoud van de
              waarde van uw woning.
            </p>

            <p>
              Wij verzorgen binnenschilderwerk, buitenschilderwerk,
              kozijnen, deuren, plafonds, muren, gevels en complete
              schilderprojecten voor particulieren en bedrijven.
            </p>

            <p>
              Dankzij hoogwaardige materialen, nauwkeurige voorbereiding
              en een perfecte afwerking geniet u jarenlang van een
              duurzaam eindresultaat.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}