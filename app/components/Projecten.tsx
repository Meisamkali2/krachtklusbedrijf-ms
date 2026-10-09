import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./data/projects";

export default function Projecten() {
  return (
    <section id="projecten" className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Intro */}
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Onze projecten
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Bekijk ons uitgevoerde werk
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Bekijk een selectie van projecten die M.S. Kracht Klusbedrijf heeft
            uitgevoerd op het gebied van renovatie, schilderwerk, vloeren en
            andere werkzaamheden.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projecten/${project.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.cover}
                  alt={`${project.title} - M.S. Kracht Klusbedrijf`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-200">
                    {project.service}
                  </p>

                  <h3 className="text-2xl font-bold text-white md:text-3xl">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="line-clamp-3 leading-7 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="font-semibold text-blue-700">
                    Bekijk project
                  </span>

                  <ArrowRight
                    size={20}
                    className="text-blue-700 transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-blue-950 px-6 py-10 text-center text-white md:px-10">
          <h3 className="text-3xl font-bold">
            Heeft u een vergelijkbaar project?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-blue-100">
            Vertel ons wat u wilt laten uitvoeren. We bekijken uw wensen en
            bespreken graag de mogelijkheden voor uw woning of bedrijfspand.
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-900 transition hover:-translate-y-1 hover:bg-blue-50"
          >
            Vraag vrijblijvend een offerte aan
            <ArrowRight size={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}