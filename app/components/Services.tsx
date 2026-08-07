import {
  Paintbrush,
  Hammer,
  Zap,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Schilderwerk",
    icon: Paintbrush,
    text: "Professioneel binnen- en buitenschilderwerk met hoogwaardige materialen.",
  },
  {
    title: "Renovatie",
    icon: Hammer,
    text: "Complete renovaties van woningen, badkamers, keukens en bedrijfspanden.",
  },
  {
    title: "Elektra",
    icon: Zap,
    text: "Veilige elektrische installaties, uitbreidingen en onderhoud.",
  },
  {
    title: "Isolatie",
    icon: ShieldCheck,
    text: "Hoogwaardige isolatie voor meer comfort en lagere energiekosten.",
  },
];

export default function Services() {
  return (
    <section
      id="diensten"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-blue-600">
            Onze Diensten
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Vakmanschap waarop u kunt vertrouwen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Wij verzorgen complete renovaties voor woningen en bedrijven.
            Van schilderwerk tot volledige verbouwingen.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
              >

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 transition group-hover:bg-blue-600">

                  <Icon
                    size={42}
                    className="text-blue-600 transition group-hover:text-white"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.text}
                </p>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}