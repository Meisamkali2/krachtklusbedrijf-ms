import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "./data/projects";

export default function Projecten() {
  return (
    <section
      id="projecten"
      className="bg-slate-100 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-blue-600">
            Projecten
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Onze Recente Projecten
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Bekijk enkele renovatieprojecten die wij recent hebben uitgevoerd.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => (

            <Link
              key={project.slug}
              href={`/projecten/${project.slug}`}
              className="group overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div className="relative h-80 overflow-hidden">

                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent"></div>

                <div className="absolute bottom-0 left-0 p-8">

                  <h3 className="text-3xl font-bold text-white">
                    {project.title}
                  </h3>

                </div>

              </div>

              <div className="flex items-center justify-between p-6">

                <span className="font-semibold text-blue-700">
                  Bekijk Project
                </span>

                <ArrowRight
                  className="transition group-hover:translate-x-2"
                />

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}