import type { ReactNode } from "react";
import Link from "next/link";
import BreadcrumbSchema from "../seo/BreadcrumbSchema";

type Props = {
  city: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function CityLayout({
  city,
  title,
  description,
  children,
}: Props) {
  const cityUrl = `https://www.krachtklusbedrijf-ms.nl/${city
    .toLowerCase()
    .replace(/\s+/g, "-")}`;

  return (
    <main className="bg-slate-50">
      <BreadcrumbSchema
        items={[
          {
            name: "Home",
            url: "https://www.krachtklusbedrijf-ms.nl",
          },
          {
            name: city,
            url: cityUrl,
          },
        ]}
      />

      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold">
            {city.toUpperCase()}
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            {title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            {description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700"
            >
              Gratis Offerte
            </Link>

            <Link
              href="/projecten"
              className="rounded-xl border border-white px-8 py-4 font-bold"
            >
              Bekijk Projecten
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          {children}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Vraag vandaag nog een vrijblijvende offerte aan
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            M.S. Kracht Klusbedrijf helpt klanten in {city} met
            renovaties, schilderwerk, badkamers, vloeren, isolatie
            en complete verbouwingen.
          </p>

          <Link
            href="/#contact"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-5 text-lg font-bold text-blue-700"
          >
            Gratis Offerte
          </Link>
        </div>
      </section>
    </main>
  );
}