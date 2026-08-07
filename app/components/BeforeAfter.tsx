import Image from "next/image";

const projects = [
  {
    title: "Trap Renovatie",
    before: "/projecten/trap/before1.jpeg",
    after: "/projecten/trap/after1.jpeg",
  },
  {
    title: "Uitbouw",
    before: "/projecten/uitbouw/before1.jpg",
    after: "/projecten/uitbouw/after1.jpg",
  },
];

export default function BeforeAfter() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-blue-600">
            Voor & Na
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Resultaten die spreken
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Bekijk het verschil vóór en na onze renovaties.
          </p>
        </div>

        <div className="space-y-24">

          {projects.map((project) => (
            <div key={project.title}>

              <h3 className="mb-10 text-center text-3xl font-bold text-slate-900">
                {project.title}
              </h3>

              <div className="grid gap-10 lg:grid-cols-2">

                {/* Before */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                  <div className="bg-red-600 py-3 text-center font-bold text-white">
                    VOOR
                  </div>

                  <div className="relative h-[420px] overflow-hidden">
                    <Image
                      src={project.before}
                      alt="Before"
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </div>
                </div>

                {/* After */}
                <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                  <div className="bg-green-600 py-3 text-center font-bold text-white">
                    NA
                  </div>

                  <div className="relative h-[420px] overflow-hidden">
                    <Image
                      src={project.after}
                      alt="After"
                      fill
                      className="object-cover transition duration-700 hover:scale-110"
                    />
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}