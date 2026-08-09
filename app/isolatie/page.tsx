import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Isolatie | M.S. Kracht Klusbedrijf",
  description:
    "Professionele isolatiewerkzaamheden in Elst, Arnhem, Nijmegen en Gelderland voor woningen en bedrijfspanden.",
};

export default function IsolatiePage() {
  return (
    <ServiceLayout
      badge="ISOLATIE"
      title="Isolatie in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf helpt bij het verbeteren van de isolatie van woningen en bedrijfspanden."
      serviceName="Isolatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/isolatie"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Uw woning beter isoleren
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Goede isolatie draagt bij aan een comfortabeler binnenklimaat
              en kan helpen om warmte beter in uw woning vast te houden.
            </p>

            <p>
              Wij voeren verschillende isolatiewerkzaamheden uit tijdens
              renovaties en verbouwingen.
            </p>

            <p>
              Wij combineren een zorgvuldige uitvoering met hoogwaardige
              materialen voor een professioneel resultaat.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}