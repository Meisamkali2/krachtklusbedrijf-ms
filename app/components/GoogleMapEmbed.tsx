"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";

export default function GoogleMapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl">
      {loaded ? (
        <iframe
          src="https://www.google.com/maps?q=Koningin+Wilhelminastraat+73,+6661+VW+Elst,+Nederland&output=embed"
          width="100%"
          height="340"
          loading="lazy"
          className="border-0"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps - M.S. Kracht Klusbedrijf"
        />
      ) : (
        <div className="flex min-h-[340px] flex-col items-center justify-center px-6 py-10 text-center">
          <MapPin size={36} className="text-blue-300" />
          <p className="mt-4 text-lg font-bold text-white">
            Bekijk onze locatie op Google Maps
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">
            De kaart wordt pas geladen als u klikt. Daarna kan Google technische
            gegevens van uw apparaat ontvangen.
          </p>
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="mt-5 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Google Maps laden
          </button>
        </div>
      )}
    </div>
  );
}
