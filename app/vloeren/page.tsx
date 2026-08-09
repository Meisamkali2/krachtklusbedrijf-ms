import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Vloeren Leggen | M.S. Kracht Klusbedrijf",
  description:
    "Professioneel vloeren leggen in Elst, Arnhem, Nijmegen en Gelderland. Nette afwerking voor woningen en bedrijven.",
};

export default function VloerenPage() {
  return (
    <ServiceLayout
      badge="VLOEREN"
      title="Vloeren Leggen in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf helpt u met het leggen en vernieuwen van vloeren voor woningen, appartementen en bedrijfspanden."
      serviceName="Vloeren"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/vloeren"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Een professionele vloer voor uw woning
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Een goede vloer bepaalt voor een groot deel de uitstraling en
              het comfort van een ruimte.
            </p>

            <p>
              Wij helpen bij het leggen en vernieuwen van vloeren en zorgen
              voor een nette voorbereiding en professionele afwerking.
            </p>

            <p>
              Van woningen tot bedrijfspanden: wij streven naar een strak,
              duurzaam en professioneel resultaat.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}