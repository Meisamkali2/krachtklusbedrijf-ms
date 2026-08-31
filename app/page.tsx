import Link from "next/link";
import Header from "./components/Header";
import Services from "./components/Services";
import Projecten from "./components/Projecten";
import BeforeAfter from "./components/BeforeAfter";
import FloatingButtons from "./components/FloatingButtons";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
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

        <section className="relative h-screen">
          {/* Achtergrond afbeelding */}
          <img
            src="/hero.jpg"
            alt="M.S. Kracht Klusbedrijf"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Blauwe overlay */}
          <div className="absolute inset-0 bg-blue-900/60" />

          {/* Hero content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-5xl font-bold md:text-7xl">
              M.S. Kracht Klusbedrijf
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-2xl">
              Professioneel renovatiebedrijf voor schilderwerk, renovatie,
              elektra en isolatie.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contact"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
              >
                Vraag Offerte
              </a>

              <Link
                href="/projecten"
                className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-900"
              >
                Bekijk Projecten
              </Link>
            </div>
          </div>
        </section>

        <Stats />

        <About />

        <WhyChooseUs />

        <Services />

        <Projecten />

        <BeforeAfterSlider />

        <GoogleReviews />

        <Testimonials />

        <ServiceArea />

        <CallToAction />

        <Contact />

        <FloatingButtons />

        <Footer />
      </main>
    </>
  );
}