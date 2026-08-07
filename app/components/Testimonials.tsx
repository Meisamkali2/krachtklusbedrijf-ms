import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jan de Vries",
    text: "Uitstekend werk geleverd. Alles netjes afgewerkt en precies volgens afspraak.",
  },
  {
    name: "Sophie Jansen",
    text: "Onze badkamer ziet er fantastisch uit. Zeer professioneel team!",
  },
  {
    name: "Ahmed El Moussaoui",
    text: "Betrouwbaar bedrijf met eerlijke prijzen. Zeker een aanrader.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[6px] text-blue-600">
            Reviews
          </p>

          <h2 className="mt-4 text-5xl font-bold text-slate-900">
            Wat onze klanten zeggen
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-6 flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={22}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600">
                "{review.text}"
              </p>

              <h3 className="mt-8 text-xl font-bold text-slate-900">
                {review.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}