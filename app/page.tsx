import Header from "./components/Header";
import Services from "./components/Services";
import Projecten from "./components/Projecten";
import FloatingButtons from "./components/FloatingButtons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Stats from "./components/Stats";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import ServiceArea from "./components/ServiceArea";
import GoogleReviews from "./components/GoogleReviews";
import CallToAction from "./components/CallToAction";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section className="relative min-h-screen">
          {/* Achtergrond afbeelding */}
          <img
            src="/hero.jpg"
            alt="M.S. Kracht Klusbedrijf in Elst"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Blauwe overlay */}
          <div className="absolute inset-0 bg-blue-950/70" />

          {/* Hero content */}
          <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center text-white">
            <div className="max-w-5xl">
              <p className="mb-5 font-semibold uppercase tracking-[3px] text-blue-200">
                M.S. Kracht Klusbedrijf · Elst
              </p>

              <h1 className="text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                Klusbedrijf in Elst voor renovatie en verbouwing
              </h1>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-blue-50 md:text-2xl md:leading-10">
                M.S. Kracht Klusbedrijf helpt particulieren met renovatie,
                schilderwerk, vloeren, badkamers, isolatie en zolderrenovatie
                in Elst en omliggende plaatsen.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold transition hover:scale-105 hover:bg-blue-700"
                >
                  Vraag vrijblijvend een offerte aan
                </a>

                <a
                  href="tel:+31643680281"
                  className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-blue-950"
                >
                  Bel direct
                </a>
              </div>

              {/* Trust */}
              <div className="mx-auto mt-10 flex max-w-2xl flex-col items-center justify-center gap-3 rounded-2xl border border-white/20 bg-black/20 px-6 py-5 backdrop-blur-sm sm:flex-row sm:gap-6">
                <div
                  className="flex items-center gap-1 text-yellow-400"
                  aria-label="5 van 5 sterren"
                >
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                  <span className="text-xl">★</span>
                </div>

                <span className="font-bold text-white">
                  5.0 / 5 — 15+ Google Reviews
                </span>

                <span className="hidden text-white/40 sm:block">|</span>

                <span className="text-sm text-blue-100">
                  Gevestigd in Elst
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <Stats />

        {/* SERVICES */}
        <Services />

        {/* OFFERTE CTA */}
        <section className="bg-blue-50 px-6 py-14">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Heeft u een vergelijkbare klus?
              </h2>

              <p className="mt-2 text-slate-600">
                Bespreek uw renovatie, verbouwing of andere werkzaamheden
                vrijblijvend met M.S. Kracht Klusbedrijf.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-xl bg-blue-600 px-7 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Vraag vrijblijvend een offerte aan
            </a>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <WhyChooseUs />

        {/* ABOUT */}
        <About />

        {/* PROJECTS */}
        <Projecten />

        {/* BEFORE / AFTER */}
        <BeforeAfterSlider />

        {/* GOOGLE REVIEWS */}
        <GoogleReviews />

        {/* SERVICE AREA */}
        <ServiceArea />

        {/* FINAL CTA */}
        <CallToAction />

        {/* CONTACT */}
        <Contact />

        <FloatingButtons />

        <Footer />
      </main>
    </>
  );
}