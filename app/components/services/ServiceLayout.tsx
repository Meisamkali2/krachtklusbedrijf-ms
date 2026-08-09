import type { ReactNode } from "react";
import Link from "next/link";
import ServiceSchema from "../seo/ServiceSchema";
import BreadcrumbSchema from "../seo/BreadcrumbSchema";

type Props = {
  badge: string;
  title: string;
  description: string;
  serviceName: string;
  serviceUrl: string;
  children: ReactNode;
};

export default function ServiceLayout({
  badge,
  title,
  description,
  serviceName,
  serviceUrl,
  children,
}: Props) {
  return (
    <main className="bg-slate-50">
      <ServiceSchema
        name={serviceName}
        description={description}
        url={serviceUrl}
      />

      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.krachtklusbedrijf-ms.nl",
          },
          {
            name: serviceName,
            url: serviceUrl,
          },
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-200">
            {badge}
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            {description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:scale-105"
            >
              Vraag Gratis Offerte
            </Link>

            <Link
              href="/projecten"
              className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white hover:text-blue-900"
            >
              Bekijk Projecten
            </Link>
          </div>
        </div>
      </section>

      {children}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              WAAROM KIEZEN VOOR ONS
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Waarom kiezen voor M.S. Kracht Klusbedrijf
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-slate-50 p-8 shadow">
              <h3 className="text-xl font-bold">Ervaren Vakmensen</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Jarenlange ervaring in renovatie, schilderwerk en complete
                verbouwingen.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow">
              <h3 className="text-xl font-bold">
                Hoogwaardige Materialen
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Wij werken met duurzame kwaliteitsmaterialen voor een
                professioneel en langdurig resultaat.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow">
              <h3 className="text-xl font-bold">Gratis Offerte</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Wij denken met u mee en maken een duidelijke, vrijblijvende
                offerte zonder verrassingen.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-50 p-8 shadow">
              <h3 className="text-xl font-bold">Persoonlijke Service</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Duidelijke communicatie, nette uitvoering en aandacht voor
                ieder project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Klaar om uw project te starten?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Neem vandaag nog contact op met M.S. Kracht Klusbedrijf voor een
            vrijblijvende offerte. Wij helpen u graag met renovaties,
            schilderwerk, vloeren, badkamers, isolatie en complete
            verbouwingen.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-5 text-lg font-bold text-blue-700 transition hover:scale-105"
          >
            Vraag Gratis Offerte
          </Link>
        </div>
      </section>
    </main>
  );
}