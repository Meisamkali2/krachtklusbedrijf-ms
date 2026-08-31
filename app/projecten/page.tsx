import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../components/data/projects";

export const metadata: Metadata = {
  title: "Projecten | M.S. Kracht Klusbedrijf",
  description:
    "Bekijk uitgevoerde renovatie- en verbouwingsprojecten van M.S. Kracht Klusbedrijf in Elst, Arnhem, Nijmegen en omgeving.",
  alternates: {
    canonical: "/projecten",
  },
  openGraph: {
    title: "Projecten | M.S. Kracht Klusbedrijf",
    description:
      "Bekijk uitgevoerde renovatie- en verbouwingsprojecten van M.S. Kracht Klusbedrijf.",
    url: "https://www.krachtklusbedrijf-ms.nl/projecten",
    siteName: "M.S. Kracht Klusbedrijf",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1536,
        height: 1024,
        alt: "Projecten van M.S. Kracht Klusbedrijf",
      },
    ],
  },
};

export default function ProjectenPage() {
  return (
    <main className="bg-slate-50">
      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-28 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold tracking-wide text-blue-200">
            PROJECTEN
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight md:text-6xl">
            Onze uitgevoerde projecten
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Bekijk een selectie van renovaties, verbouwingen, schilderwerk,
            vloeren en andere werkzaamheden die M.S. Kracht Klusbedrijf heeft
            uitgevoerd.
          </p>
        </div>
      </section>

      {/* PROJECTS */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              VAKMANSCHAP
            </span>

            <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
              Bekijk onze projecten
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Van kleine renovaties tot complete verbouwingen: ieder project
              wordt zorgvuldig uitgevoerd met aandacht voor kwaliteit,
              duurzaamheid en een nette afwerking.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => {
              const image = project.after?.[0] || project.before?.[0];

              return (
                <Link
                  key={project.slug}
                  href={`/projecten/${project.slug}`}
                  className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    {image ? (
                      <Image
                        src={image}
                        alt={`${project.title} - M.S. Kracht Klusbedrijf`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center text-slate-400">
                        Geen afbeelding
                      </div>
                    )}

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-blue-700 shadow">
                      {project.city}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                      {project.service}
                    </div>

                    <h3 className="mt-3 text-2xl font-black text-slate-900">
                      {project.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 leading-8 text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-semibold text-slate-500">
                        {project.duration}
                      </span>

                      <span className="font-bold text-blue-700">
                        Bekijk project →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-black md:text-5xl">
            Ook uw project laten uitvoeren?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Neem contact op met M.S. Kracht Klusbedrijf voor een vrijblijvende
            offerte en bespreek uw renovatie, verbouwing of andere klus.
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