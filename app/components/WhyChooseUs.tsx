import Link from "next/link";
import {
  ShieldCheck,
  Clock3,
  Hammer,
  MessageCircleMore,
  ArrowRight,
} from "lucide-react";

const items = [
  {
    icon: Hammer,
    title: "Vakkundige uitvoering",
    text: "Renovatie-, schilder- en kluswerk met aandacht voor een nette en zorgvuldige uitvoering.",
  },
  {
    icon: Clock3,
    title: "Duidelijke afspraken",
    text: "Vooraf duidelijkheid over de werkzaamheden en afspraken, zodat u weet waar u aan toe bent.",
  },
  {
    icon: MessageCircleMore,
    title: "Persoonlijke communicatie",
    text: "Direct en duidelijk contact over uw project, van de eerste aanvraag tot de afronding.",
  },
  {
    icon: ShieldCheck,
    title: "Nette afwerking",
    text: "We besteden aandacht aan details en een verzorgde oplevering van de uitgevoerde werkzaamheden.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
            WAAROM M.S. KRACHT KLUSBEDRIJF
          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">
            Een betrouwbare aanpak voor uw project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van een kleine klus tot renovatie en verbouwing: we werken met
            duidelijke afspraken, persoonlijke communicatie en aandacht voor
            een nette uitvoering.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition duration-300 group-hover:bg-blue-600">
                  <Icon
                    size={34}
                    className="text-blue-700 transition duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg text-slate-600">
            Heeft u een klus, renovatie of verbouwing in Elst of omgeving?
          </p>

          <Link
            href="#contact"
            className="mt-6 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Vraag vrijblijvend een offerte aan
            <ArrowRight size={21} />
          </Link>
        </div>
      </div>
    </section>
  );
}