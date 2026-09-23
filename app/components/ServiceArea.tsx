import Link from "next/link";
import { MapPin, Building2 } from "lucide-react";

const cities = [
  { name: "Elst", href: "/elst" },
  { name: "Arnhem", href: "/arnhem" },
  { name: "Nijmegen", href: "/nijmegen" },
  { name: "Bemmel", href: "/bemmel" },
  { name: "Huissen", href: "/huissen" },
  { name: "Lent", href: "/lent" },
  { name: "Oosterbeek", href: "/oosterbeek" },
];

export default function ServiceArea() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            WERKGEBIED
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Ons werkgebied in Gelderland
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            M.S. Kracht Klusbedrijf is actief in Elst, Arnhem, Nijmegen
            en omliggende plaatsen. Bekijk onze lokale pagina's voor meer
            informatie over onze werkzaamheden per plaats.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <Link
              key={city.href}
              href={city.href}
              className="group flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-50 hover:shadow-md"
            >
              <MapPin
                className="text-blue-600 transition group-hover:scale-110"
                size={22}
              />

              <span className="font-semibold text-slate-800 group-hover:text-blue-700">
                Klusbedrijf in {city.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-blue-950 p-10 text-center text-white">
          <Building2 size={48} className="mx-auto mb-6" />

          <h3 className="text-3xl font-bold">
            Staat uw plaats er niet tussen?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-blue-100">
            Geen probleem. Neem vrijblijvend contact met ons op.
            We bespreken graag uw project en bekijken samen wat er
            mogelijk is.
          </p>

          <Link
            href="#contact"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-900 transition hover:scale-105 hover:bg-blue-50"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </section>
  );
}