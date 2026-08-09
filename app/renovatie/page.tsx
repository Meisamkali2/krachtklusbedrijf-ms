import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Renovatie | M.S. Kracht Klusbedrijf",
  description:
    "Professionele renovatie in Elst, Arnhem, Nijmegen en Gelderland. Complete woningrenovaties en verbouwingen.",
};

export default function RenovatiePage() {
  return (
    <ServiceLayout
      badge="RENOVATIE"
      title="Professionele Renovatie in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf verzorgt complete renovaties en verbouwingen voor woningen, appartementen en bedrijfspanden."
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
              Een renovatie vraagt om een goede voorbereiding en vakkundige
              uitvoering. Wij helpen u bij het vernieuwen en verbeteren van
              uw woning.
            </p>

            <p>
              Van kleine renovatiewerkzaamheden tot complete verbouwingen:
              wij verzorgen verschillende werkzaamheden binnen één project.
            </p>

            <p>
              Met hoogwaardige materialen en aandacht voor detail zorgen wij
              voor een duurzaam en professioneel eindresultaat.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}