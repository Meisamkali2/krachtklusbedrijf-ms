import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../components/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project niet gevonden",
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
  };
}

export default async function ProjectPage({
  params,
}: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-slate-50">

      {/* HERO */}

      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <p className="font-semibold uppercase tracking-[5px] text-blue-200">
            PROJECT
          </p>

          <h1 className="mt-6 text-5xl font-black">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <span className="rounded-full bg-white/15 px-5 py-3">
              📍 {project.city}
            </span>

            <span className="rounded-full bg-white/15 px-5 py-3">
              🛠 {project.service}
            </span>

            <span className="rounded-full bg-white/15 px-5 py-3">
              ⏱ {project.duration}
            </span>

          </div>

        </div>

      </section>

      {/* BREADCRUMB */}

      <section className="border-b bg-white">

        <div className="mx-auto flex max-w-7xl gap-2 px-6 py-5 text-sm">

          <Link href="/" className="text-slate-500 hover:text-blue-700">
            Home
          </Link>

          <span>/</span>

          <Link
            href="/#projecten"
            className="text-slate-500 hover:text-blue-700"
          >
            Projecten
          </Link>

          <span>/</span>

          <span className="font-semibold text-slate-900">
            {project.title}
          </span>

        </div>

      </section>
            {/* BEFORE */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            VOOR
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Situatie vóór de renovatie
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {project.before.map((image) => (

            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"
            >

              <Image
                src={image}
                alt={`${project.title} voor renovatie`}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />

            </div>

          ))}

        </div>

      </section>

      {/* AFTER */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="mb-12">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            NA
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900">
            Resultaat na de renovatie
          </h2>

        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {project.after.map((image) => (

            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg"
            >

              <Image
                src={image}
                alt={`${project.title} na renovatie`}
                fill
                className="object-cover transition duration-500 hover:scale-110"
              />

            </div>

          ))}

        </div>

      </section>

      {/* PROJECT INFO */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-4">

            <div className="rounded-3xl bg-slate-50 p-8 text-center">

              <h3 className="text-lg font-semibold text-slate-500">
                Locatie
              </h3>

              <p className="mt-3 text-2xl font-bold text-blue-700">
                {project.city}
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 text-center">

              <h3 className="text-lg font-semibold text-slate-500">
                Dienst
              </h3>

              <p className="mt-3 text-2xl font-bold text-blue-700">
                {project.service}
              </p>

            </div>

            <div className="rounded-3xl bg-slate-50 p-8 text-center">

              <h3 className="text-lg font-semibold text-slate-500">
                Duur
              </h3>
      {/* ABOUT PROJECT */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-5xl px-6">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OVER DIT PROJECT
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Vakmanschap van begin tot eind
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">

            <p>
              Voor dit project heeft M.S. Kracht Klusbedrijf alle
              werkzaamheden uitgevoerd met oog voor detail,
              duurzaamheid en kwaliteit. Vanaf de eerste inspectie
              tot de uiteindelijke oplevering is iedere stap
              zorgvuldig gepland en professioneel uitgevoerd.
            </p>

            <p>
              Wij werken uitsluitend met hoogwaardige materialen
              zodat het eindresultaat jarenlang mooi blijft.
              Door onze ervaring kunnen wij snel schakelen,
              netjes werken en een hoogwaardige afwerking leveren.
            </p>

            <p>
              Of het nu gaat om een complete renovatie,
              schilderwerk, vloeren, badkamers,
              isolatie of een uitbouw:
              iedere opdracht voeren wij uit alsof
              het onze eigen woning is.
            </p>

          </div>

        </div>

      </section>

      {/* SERVICES */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              WERKZAAMHEDEN
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Uitgevoerde werkzaamheden
            </h2>

          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-4">

            {project.services.map((service) => (

              <span
                key={service}
                className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white"
              >
                {service}
              </span>

            ))}

          </div>

        </div>

      </section>

      {/* WHY US */}

      <section className="bg-s
            {/* FAQ */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              FAQ
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Veelgestelde vragen
            </h2>

          </div>

          <div className="mt-16 space-y-6">

            <div className="rounded-3xl border border-slate-200 bg-white p-8">

              <h3 className="text-2xl font-bold">
                Werken jullie alleen in Elst?
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Nee. Wij werken in Elst, Arnhem, Nijmegen en de rest van
                Gelderland.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">

              <h3 className="text-2xl font-bold">
                Kan ik vrijblijvend een offerte aanvragen?
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Ja. Wij komen graag langs om uw wensen te bespreken en
                maken vervolgens een vrijblijvende offerte.
              </p>

            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-8">

              <h3 className="text-2xl font-bold">
                Hoe snel kunnen jullie beginnen?
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                Dit hangt af van de planning. Neem contact met ons op
                voor de actuele beschikbaarheid.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-5xl font-black">
            Ook een project laten uitvoeren?
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            Bent u op zoek naar een betrouwbaar klusbedrijf voor een
            renovatie, schilderwerk, vloeren, isolatie of een complete
            verbouwing? Neem vandaag nog contact met ons op voor een
            vrijblijvende offerte.
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