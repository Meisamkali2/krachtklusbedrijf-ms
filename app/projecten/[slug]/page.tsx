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
    alternates: {
      canonical: `https://www.krachtklusbedrijf-ms.nl/projecten/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isGalleryProject = "gallery" in project;

  const projectIntro =
    project.slug === "stucwerk-schilderwerk"
      ? "Bij dit project zijn stucwerk en binnenschilderwerk gecombineerd voor een strakke wand- en plafondafwerking. De foto's laten verschillende fases en resultaten van het uitgevoerde werk zien, waaronder het voorbereiden, glad afwerken en schilderen van de oppervlakken."
      : project.slug === "tegelwerk"
        ? "Dit project laat uitgevoerd tegelwerk zien met aandacht voor een nette plaatsing en een verzorgde afwerking. De foto's geven een beeld van het uitgevoerde werk en de verschillende onderdelen van het tegelproject."
        : "Voor dit project heeft M.S. Kracht Klusbedrijf de werkzaamheden zorgvuldig uitgevoerd met aandacht voor detail, kwaliteit en een nette afwerking.";

  return (
    <main className="bg-slate-50">
      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-semibold uppercase tracking-[5px] text-blue-200">
            PROJECT
          </p>

          <h1 className="mt-6 text-5xl font-black md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-blue-100">
            {project.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {!isGalleryProject && (
              <>
                <span className="rounded-full bg-white/15 px-5 py-3">
                  📍 {project.city}
                </span>

                <span className="rounded-full bg-white/15 px-5 py-3">
                  🛠 {project.service}
                </span>

                <span className="rounded-full bg-white/15 px-5 py-3">
                  ⏱ {project.duration}
                </span>
              </>
            )}

            {isGalleryProject && (
              <span className="rounded-full bg-white/15 px-5 py-3">
                🛠 {project.service}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* BREADCRUMB */}
      <section className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-5 text-sm">
          <Link
            href="/"
            className="text-slate-500 hover:text-blue-700"
          >
            Home
          </Link>

          <span>/</span>

          <Link
            href="/projecten"
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

      {/* GALLERY PROJECTS */}
      {isGalleryProject ? (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-4xl text-center">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                PROJECTFOTO&apos;S
              </span>

              <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
                {project.title}
              </h2>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                Bekijk de foto&apos;s van dit project en ontdek het vakmanschap
                van M.S. Kracht Klusbedrijf.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery?.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`${project.title} projectfoto ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <>
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
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* PROJECT INFO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div
            className={
              isGalleryProject
                ? "grid gap-8 md:grid-cols-2"
                : "grid gap-8 md:grid-cols-3"
            }
          >
            {!isGalleryProject && (
              <div className="rounded-3xl bg-slate-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-500">
                  Locatie
                </h3>

                <p className="mt-3 text-2xl font-bold text-blue-700">
                  {project.city}
                </p>
              </div>
            )}

            <div className="rounded-3xl bg-slate-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-slate-500">
                Dienst
              </h3>

              <p className="mt-3 text-2xl font-bold text-blue-700">
                {project.service}
              </p>
            </div>

            {!isGalleryProject && (
              <div className="rounded-3xl bg-slate-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-500">
                  Duur
                </h3>

                <p className="mt-3 text-2xl font-bold text-blue-700">
                  {project.duration}
                </p>
              </div>
            )}

            {isGalleryProject && (
              <div className="rounded-3xl bg-slate-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-slate-500">
                  Foto&apos;s
                </h3>

                <p className="mt-3 text-2xl font-bold text-blue-700">
                  {project.gallery?.length ?? 0} foto&apos;s
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ABOUT PROJECT */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            OVER DIT PROJECT
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            {project.slug === "stucwerk-schilderwerk"
              ? "Stucwerk en schilderwerk met een strakke afwerking"
              : project.slug === "tegelwerk"
                ? "Tegelwerk met aandacht voor een nette afwerking"
                : "Vakmanschap van begin tot eind"}
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-9 text-slate-700">
            <p>{projectIntro}</p>

            {project.slug === "stucwerk-schilderwerk" && (
              <>
                <p>
                  Het project omvat onder andere stucwerk, wandafwerking,
                  plafondafwerking en binnenschilderwerk. Voor het schilderwerk
                  is gewerkt met zowel verfspuit als roller, afhankelijk van de
                  betreffende afwerking.
                </p>

                <p>
                  Wilt u meer weten over onze werkzaamheden op het gebied van
                  schilderwerk? Bekijk dan ook onze pagina over{" "}
                  <Link
                    href="/schilderwerk"
                    className="font-semibold text-blue-700 underline underline-offset-4 hover:text-blue-900"
                  >
                    schilderwerk
                  </Link>
                  .
                </p>
              </>
            )}

            {project.slug === "tegelwerk" && (
              <p>
                Bij tegelwerk is een zorgvuldige voorbereiding en nette
                uitvoering belangrijk voor het uiteindelijke resultaat. De
                projectfoto&apos;s geven een beeld van het tegelwerk dat door
                M.S. Kracht Klusbedrijf is uitgevoerd.
              </p>
            )}

            {!isGalleryProject && (
              <>
                <p>
                  We werken met aandacht voor de bestaande situatie en stemmen
                  de werkzaamheden af op de wensen van de klant.
                </p>

                <p>
                  Van stucwerk en schilderwerk tot tegelwerk en andere
                  renovatiewerkzaamheden: ieder project wordt zorgvuldig
                  uitgevoerd met oog voor het eindresultaat.
                </p>
              </>
            )}
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
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              WAAROM KIEZEN VOOR ONS
            </span>

            <h2 className="mt-6 text-5xl font-black text-slate-900">
              Waarom M.S. Kracht Klusbedrijf?
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-xl font-bold">Ervaring</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Ervaren vakmensen met aandacht voor kwaliteit en detail.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-xl font-bold">Kwaliteit</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Wij werken met hoogwaardige materialen en zorgen voor een
                duurzame afwerking.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-xl font-bold">Duidelijke afspraken</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Heldere communicatie en duidelijke afspraken tijdens ieder
                project.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <h3 className="text-xl font-bold">Nette oplevering</h3>

              <p className="mt-4 leading-8 text-slate-600">
                Wij zorgen voor een professionele en nette oplevering.
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
            Bent u op zoek naar een betrouwbaar klusbedrijf voor renovatie,
            schilderwerk, stucwerk, tegelwerk of een complete verbouwing?
            Neem contact met ons op voor een vrijblijvende offerte.
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