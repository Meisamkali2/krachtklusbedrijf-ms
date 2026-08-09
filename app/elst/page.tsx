import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klusbedrijf Elst | M.S. Kracht Klusbedrijf",
  description:
    "M.S. Kracht Klusbedrijf is uw klusbedrijf in Elst voor renovatie, schilderwerk, badkamers en verbouwingen.",
};

export default function ElstPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <p className="font-bold text-blue-700">ELST</p>

        <h1 className="mt-6 text-5xl font-black text-slate-900">
          Klusbedrijf Elst
        </h1>

        <p className="mt-8 text-xl leading-9 text-slate-700">
          M.S. Kracht Klusbedrijf helpt particulieren en bedrijven in Elst
          met renovaties, schilderwerk, badkamers, vloeren, isolatie en
          complete verbouwingen.
        </p>

        <h2 className="mt-16 text-3xl font-bold text-slate-900">
          Professioneel klusbedrijf in Elst
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Wij werken netjes, gebruiken hoogwaardige materialen en zorgen
          voor een professionele afwerking van ieder project.
        </p>
      </div>
    </main>
  );
}