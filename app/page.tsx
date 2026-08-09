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
        <section className="relative h-screen">
          {/* تصویر پس‌زمینه */}
          <img
            src="/hero.jpg"
            alt="Hero"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* لایه آبی روی عکس */}
          <div className="absolute inset-0 bg-blue-900/60"></div>

          {/* متن */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold">
              M.S. Kracht Klusbedrijf
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-2xl">
              Professioneel renovatiebedrijf voor schilderwerk, renovatie,
              elektra en isolatie.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition">
                Vraag Offerte
              </button>

              <button className="rounded-xl border border-white px-8 py-4 font-semibold hover:bg-white hover:text-blue-900 transition">
                Bekijk Projecten
              </button>
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