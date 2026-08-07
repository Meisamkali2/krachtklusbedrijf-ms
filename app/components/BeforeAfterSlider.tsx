"use client";

import ReactCompareImage from "react-compare-image";

export default function BeforeAfterSlider() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-blue-600">
            Voor & Na
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Zie het verschil
          </h2>

          <p className="mt-6 text-slate-600">
            Sleep de schuif naar links of rechts om het resultaat te vergelijken.
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">
          <ReactCompareImage
            leftImage="/projecten/trap/before1.jpeg"
            rightImage="/projecten/trap/after1.jpeg"
          />
        </div>

      </div>
    </section>
  );
}