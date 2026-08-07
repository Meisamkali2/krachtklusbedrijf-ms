export default function Contact() {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-16 text-center">

          <p className="font-semibold uppercase tracking-[6px] text-blue-400">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Vraag vrijblijvend een offerte aan
          </h2>

          <p className="mt-6 text-gray-300">
            Neem vandaag nog contact met ons op.
            Wij reageren meestal binnen 24 uur.
          </p>

        </div>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Naam"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="E-mailadres"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <input
            type="tel"
            placeholder="Telefoonnummer"
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <textarea
            rows={6}
            placeholder="Vertel ons over uw project..."
            className="rounded-xl border border-slate-700 bg-slate-800 p-4 outline-none focus:border-blue-500"
          />

          <button
            className="rounded-xl bg-blue-600 py-4 text-lg font-bold transition hover:bg-blue-700"
          >
            Verstuur Offerte
          </button>

        </form>

      </div>
    </section>
  );
}