import {
  ShieldCheck,
  Clock3,
  Hammer,
  MessageCircleMore,
} from "lucide-react";

const items = [
  {
    icon: Hammer,
    title: "Vakmanschap",
    text: "Jarenlange ervaring in renovatie, schilderwerk en complete verbouwingen.",
  },
  {
    icon: Clock3,
    title: "Altijd op tijd",
    text: "Wij houden ons aan duidelijke afspraken en leveren projecten volgens planning op.",
  },
  {
    icon: MessageCircleMore,
    title: "Persoonlijke service",
    text: "Heldere communicatie en één aanspreekpunt tijdens het hele project.",
  },
  {
    icon: ShieldCheck,
    title: "Kwaliteit gegarandeerd",
    text: "Wij werken uitsluitend met hoogwaardige materialen voor een duurzaam resultaat.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WAAROM WIJ
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Waarom kiezen voor M.S. Kracht Klusbedrijf?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            Wij combineren vakmanschap, betrouwbaarheid en kwaliteit
            om iedere renovatie perfect af te leveren.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                  <Icon
                    size={34}
                    className="text-blue-700"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}