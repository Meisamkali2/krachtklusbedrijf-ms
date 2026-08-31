import { MapPin, Building2 } from "lucide-react";

const cities = [
  "Elst",
  "Arnhem",
  "Nijmegen",
  "Bemmel",
  "Huissen",
  "Lent",
  "Oosterbeek",
  "Gelderland",
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

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            M.S. Kracht Klusbedrijf is actief in Elst, Arnhem, Nijmegen
            en omliggende plaatsen. Staat uw woonplaats er niet tussen?
            Neem gerust contact met ons op.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cities.map((city) => (
            <div
              key={city}
              className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5 transition hover:border-blue-500 hover:bg-blue-50"
            >
              <MapPin className="text-blue-600" size={22} />

              <span className="font-semibold">{city}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-blue-950 p-10 text-center text-white">
          <Building2 size={48} className="mx-auto mb-6" />

          <h3 className="text-3xl font-bold">
            Staat uw plaats er niet tussen?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-blue-100">
            Geen probleem. Neem vrijblijvend contact met ons op.
            We bespreken graag uw project en bekijken samen wat er
            mogelijk is.
          </p>
        </div>
      </div>
    </section>
  );
}