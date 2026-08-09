import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="bg-blue-950 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center text-white">

        <span className="rounded-full bg-blue-800 px-4 py-2 text-sm font-semibold">
          GRATIS OFFERTE
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight">
          Klaar om uw woning te renoveren?
        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-blue-100">
          Wilt u uw woning laten renoveren of een vrijblijvende offerte
          ontvangen? Neem vandaag nog contact met ons op.
          Wij denken graag met u mee en zorgen voor een professionele
          uitvoering van uw project.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-blue-900 transition hover:scale-105"
          >
            Vraag Gratis Offerte

            <ArrowRight size={22} />
          </Link>

          <Link
            href="#projecten"
            className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-blue-900"
          >
            Bekijk Projecten
          </Link>

        </div>

      </div>
    </section>
  );
}