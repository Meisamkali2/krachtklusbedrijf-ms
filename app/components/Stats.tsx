"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section
      ref={ref}
      className="bg-blue-950 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 md:grid-cols-4">

          <div className="text-center">

            <h2 className="text-6xl font-bold text-blue-400">

              {inView && <CountUp end={900} duration={2} />}+

            </h2>

            <p className="mt-4 text-xl">
              Projecten
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-6xl font-bold text-blue-400">

              {inView && <CountUp end={10} duration={2} />}+

            </h2>

            <p className="mt-4 text-xl">
              Jaar Ervaring
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-6xl font-bold text-blue-400">

              {inView && <CountUp end={900} duration={2} />}+

            </h2>

            <p className="mt-4 text-xl">
              Tevreden Klanten
            </p>

          </div>

          <div className="text-center">

            <h2 className="text-6xl font-bold text-blue-400">

              {inView && <CountUp end={100} duration={2} />}%

            </h2>

            <p className="mt-4 text-xl">
              Kwaliteit
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}