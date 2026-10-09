import Link from "next/link";
import { ArrowRight, MapPin, Star, FileText } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "5.0 / 5",
    label: "Google beoordeling",
  },
  {
    icon: Star,
    value: "15+",
    label: "Google Reviews",
  },
  {
    icon: MapPin,
    value: "Elst",
    label: "Gevestigd in",
  },
  {
    icon: FileText,
    value: "Offerte",
    label: "Vrijblijvend aanvragen",
  },
];

export default function Stats() {
  return (
    <section className="bg-blue-950 py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600/20">
                  <Icon size={24} className="text-blue-300" />
                </div>

                <p className="mt-5 text-3xl font-black text-white">
                  {stat.value}
                </p>

                <p className="mt-2 text-sm font-medium text-blue-100">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <p className="text-blue-100">
            Een klus, renovatie of verbouwing in Elst of omgeving?
          </p>

          <Link
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-blue-950 transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Vraag vrijblijvend een offerte aan
            <ArrowRight size={19} />
          </Link>
        </div>
      </div>
    </section>
  );
}