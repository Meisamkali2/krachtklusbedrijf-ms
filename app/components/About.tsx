import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

const points = [
  "Renovatie en verbouwing",
  "Schilderwerk en wandafwerking",
  "Vloeren en tegelwerk",
  "Badkamer- en zolderrenovatie",
];

export default function About() {
  return (
    <section id="over-ons" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            Over M.S. Kracht Klusbedrijf
          </p>

          <h2 className="mt-5 text-4xl font-black text-slate-900 md:text-5xl">
            Uw klusbedrijf voor renovatie en verbouwing in Elst
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-600">
            M.S. Kracht Klusbedrijf is gevestigd in Elst en voert
            verschillende werkzaamheden uit voor woningen en andere
            panden. Van renovatie en schilderwerk tot vloeren,
            badkamers, zolders en andere klussen: we bespreken vooraf
            wat er nodig is en kijken samen naar de beste aanpak voor
            uw project.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            We vinden duidelijke communicatie en een nette uitvoering
            belangrijk. Daarom houden we het contact tijdens de
            werkzaamheden zo duidelijk mogelijk en besteden we aandacht
            aan de afwerking van het werk.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 rounded-xl bg-slate-50 p-4"
              >
                <CheckCircle
                  size={22}
                  className="mt-0.5 shrink-0 text-blue-600"
                />

                <span className="font-medium text-slate-800">
                  {point}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="#contact"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Vraag vrijblijvend een offerte aan
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-blue-950 p-8 text-white shadow-2xl md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[3px] text-blue-300">
            Onze aanpak
          </p>

          <h3 className="mt-4 text-3xl font-black md:text-4xl">
            Van aanvraag tot oplevering
          </h3>

          <p className="mt-6 leading-8 text-blue-100">
            Ieder project begint met uw wensen. We bespreken wat u wilt
            laten uitvoeren, bekijken de werkzaamheden en maken duidelijke
            afspraken over het project.
          </p>

          <div className="mt-10 space-y-6">
            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold">
                  1
                </span>

                <h4 className="text-xl font-bold">
                  Uw wensen bespreken
                </h4>
              </div>

              <p className="mt-3 pl-12 leading-7 text-blue-100">
                Vertel ons wat u wilt laten renoveren, verbouwen of
                verbeteren.
              </p>
            </div>

            <div className="border-b border-white/10 pb-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold">
                  2
                </span>

                <h4 className="text-xl font-bold">
                  Werkzaamheden afstemmen
                </h4>
              </div>

              <p className="mt-3 pl-12 leading-7 text-blue-100">
                We bespreken de werkzaamheden en maken duidelijke afspraken
                over de uitvoering.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold">
                  3
                </span>

                <h4 className="text-xl font-bold">
                  Nette uitvoering
                </h4>
              </div>

              <p className="mt-3 pl-12 leading-7 text-blue-100">
                Na de werkzaamheden zorgen we voor een verzorgde afronding
                van het project.
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-blue-950 transition hover:bg-blue-50"
          >
            Bespreek uw project
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}