import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-2xl text-center">

        <h1 className="text-8xl font-black text-blue-900">
          404
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-900">
          Pagina niet gevonden
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          De pagina die u zoekt bestaat niet of is verplaatst.
          Ga terug naar de homepage of neem contact met ons op.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            href="/"
            className="rounded-xl bg-blue-700 px-8 py-4 font-bold text-white hover:bg-blue-800"
          >
            Home
          </Link>

          <Link
            href="/#contact"
            className="rounded-xl border border-blue-700 px-8 py-4 font-bold text-blue-700 hover:bg-blue-700 hover:text-white"
          >
            Contact
          </Link>

        </div>

      </div>
    </main>
  );
}