import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">

        {/* Logo */}
        <div>
          <h2 className="text-3xl font-bold">
            Kracht<span className="text-blue-500">MS</span>
          </h2>

          <p className="mt-6 text-slate-300">
            Professioneel renovatiebedrijf gespecialiseerd in schilderwerk,
            renovatie, elektra en isolatie.
          </p>
        </div>

        {/* Menu */}
        <div>
          <h3 className="mb-5 text-xl font-bold">
            Menu
          </h3>

          <div className="flex flex-col gap-3">

            <Link href="/" className="hover:text-blue-400">
              Home
            </Link>

            <Link href="#diensten" className="hover:text-blue-400">
              Diensten
            </Link>

            <Link href="#projecten" className="hover:text-blue-400">
              Projecten
            </Link>

            <Link href="#contact" className="hover:text-blue-400">
              Contact
            </Link>

          </div>
        </div>

        {/* Contact */}
        <div>

          <h3 className="mb-5 text-xl font-bold">
            Contact
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Phone size={20} />
              <span>+31 6 12345678</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={20} />
              <span>info@krachtklusbedrijf.nl</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={20} />
              <span>Nederland</span>
            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-400">
        © 2026 Kracht Klusbedrijf MS. Alle rechten voorbehouden.
      </div>
    </footer>
  );
}