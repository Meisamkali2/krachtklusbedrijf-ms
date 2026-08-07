import Link from "next/link";
import Header from "./components/Header";
import Services from "./components/Services";
import Projecten from "./components/Projecten";
import BeforeAfter from "./components/BeforeAfter";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative flex h-screen items-center justify-center overflow-hidden">

          {/* Background */}
          <img
            src="/hero.jpg"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-800/50"></div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-white">

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Kracht Klusbedrijf MS
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-200 md:text-2xl">
              Professioneel renovatiebedrijf gespecialiseerd in schilderwerk,
              complete renovaties, elektra en isolatie.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <Link
                href="#contact"
                className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
              >
                Vraag Offerte
              </Link>

              <Link
                href="#projecten"
                className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-blue-900"
              >
                Bekijk Projecten
              </Link>

            </div>

            {/* Stats */}

            <div className="mx-auto mt-20 grid max-w-4xl grid-cols-3 gap-6 rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg">

              <div>
                <h2 className="text-4xl font-bold">150+</h2>
                <p className="mt-2 text-gray-200">
                  Projecten
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">10+</h2>
                <p className="mt-2 text-gray-200">
                  Jaar Ervaring
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold">100%</h2>
                <p className="mt-2 text-gray-200">
                  Tevreden Klanten
                </p>
              </div>

            </div>

          </div>
        </section>

        <Services />

        <Projecten />

        <BeforeAfter />

      </main>
    </>
  );
}