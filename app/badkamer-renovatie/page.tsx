import type { Metadata } from "next";
import ServiceLayout from "../components/services/ServiceLayout";

export const metadata: Metadata = {
  title: "Badkamer Renovatie | M.S. Kracht Klusbedrijf",
  description:
    "Badkamer renovatie in Elst, Arnhem, Nijmegen en Gelderland. Complete renovatie en moderne afwerking.",
};

export default function BadkamerRenovatiePage() {
  return (
    <ServiceLayout
      badge="BADKAMER RENOVATIE"
      title="Badkamer Renovatie in Elst, Arnhem & Nijmegen"
      description="M.S. Kracht Klusbedrijf verzorgt complete badkamer renovaties met aandacht voor kwaliteit, functionaliteit en afwerking."
      serviceName="Badkamer Renovatie"
      serviceUrl="https://www.krachtklusbedrijf-ms.nl/badkamer-renovatie"
    >
      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-4xl font-black text-slate-900">
            Uw badkamer professioneel renoveren
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>
              Wilt u uw badkamer vernieuwen? Wij verzorgen complete
              badkamer renovaties voor woningen en appartementen.
            </p>

            <p>
              Denk aan het vernieuwen van wanden, vloeren, afwerking en
              andere werkzaamheden die nodig zijn voor een moderne badkamer.
            </p>

            <p>
              Wij werken nauwkeurig en zorgen voor een nette en duurzame
              afwerking van uw badkamer.
            </p>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}