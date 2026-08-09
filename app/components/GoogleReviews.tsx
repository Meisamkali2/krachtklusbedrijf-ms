import { Star, ExternalLink } from "lucide-react";

const reviews = [
  {
    name: "Hans",
    text: "Zeer tevreden over de nieuwe laminaatvloer. Vriendelijke vakmensen, duidelijke communicatie, eerlijke prijzen en een nette oplevering. Absoluut een aanrader.",
  },
  {
    name: "Boris de Kok",
    text: "Uitstekend schilderwerk, vloeren en keukenrenovatie. Goede communicatie, afspraken worden nagekomen en het eindresultaat is van hoge kwaliteit.",
  },
  {
    name: "Edwin R",
    text: "Complete renovatie uitgevoerd, inclusief plafonds, laminaat, zolder en elektra. Alles professioneel afgewerkt en volgens afspraak opgeleverd.",
  },
];

export default function GoogleReviews() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-slate-50 to-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">

            ⭐ Google Reviews

          </span>

          <h2 className="mt-6 text-4xl font-black text-slate-900 md:text-5xl">

            Klanten vertrouwen op
            <span className="text-blue-600">
              {" "}M.S. Kracht Klusbedrijf
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">

            Wij zijn trots op de positieve ervaringen van onze klanten.
            Vakmanschap, duidelijke communicatie en kwaliteit staan
            altijd centraal.

          </p>

          <div className="mt-10 flex items-center justify-center gap-2">

            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                size={34}
                className="fill-yellow-400 text-yellow-400"
              />
            ))}

          </div>

          <h3 className="mt-4 text-4xl font-black text-slate-900">

            5.0 / 5

          </h3>

          <p className="mt-2 text-lg text-gray-500">

            Gebaseerd op 15+ Google Reviews

          </p>

        </div>

        {/* Review Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex gap-1">

                {[1, 2, 3, 4, 5].map((star) => (

                  <Star
                    key={star}
                    size={20}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-gray-600">

                "{review.text}"

              </p>

              <div className="mt-8">
                                <h3 className="text-lg font-bold text-slate-900">
                  {review.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Geverifieerde Google Review
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Card */}

        <div className="mt-20 rounded-3xl bg-blue-600 p-10 text-center text-white shadow-2xl">

          <h3 className="text-3xl font-black">

            Bedankt voor het vertrouwen!

          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">

            Iedere beoordeling motiveert ons om renovaties van de hoogste
            kwaliteit te blijven leveren. Wij bedanken al onze klanten
            voor hun vertrouwen en mooie woorden.

          </p>

          <a
            href="https://www.google.nl/search?sa=X&sca_esv=93dc2600446da91a&q=M.S.+Kracht+Klusbedrijf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-blue-700 transition duration-300 hover:scale-105 hover:bg-slate-100"
          >
            Bekijk alle Google Reviews
            <ExternalLink size={20} />
          </a>

        </div>

      </div>

    </section>
  );
}