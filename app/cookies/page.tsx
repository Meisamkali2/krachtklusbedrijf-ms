import type { Metadata } from "next";
import CookiePreferencesButton from "../components/CookiePreferencesButton";

export const metadata: Metadata = {
  title: "Privacy en cookies",
  description:
    "Lees hoe M.S. Kracht Klusbedrijf gegevens verwerkt via offerteaanvragen, Google Analytics en Google Maps.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-slate-900">
      <article className="mx-auto max-w-4xl">
        <p className="font-semibold uppercase tracking-[3px] text-blue-700">
          M.S. Kracht Klusbedrijf
        </p>
        <h1 className="mt-4 text-4xl font-black md:text-5xl">
          Privacy en cookies
        </h1>
        <p className="mt-5 text-sm text-slate-500">
          Laatst bijgewerkt: 14 november 2026
        </p>

        <section className="mt-10 space-y-4 leading-8 text-slate-700">
          <h2 className="text-2xl font-bold text-slate-900">
            Wie verwerkt uw gegevens?
          </h2>
          <p>
            M.S. Kracht Klusbedrijf, Koningin Wilhelminastraat 73, 6661 VW Elst,
            Nederland, is verantwoordelijk voor de gegevensverwerking die op
            deze website wordt beschreven. Vragen over privacy kunt u sturen
            naar{" "}
            <a
              className="font-semibold text-blue-800 underline"
              href="mailto:info@krachtklusbedrijf-ms.nl"
            >
              info@krachtklusbedrijf-ms.nl
            </a>{" "}
            of stellen via +31 6 43680281.
          </p>

          <h2 className="pt-5 text-2xl font-bold text-slate-900">
            Offerteaanvragen
          </h2>
          <p>
            Als u het offerteformulier verstuurt, gebruiken we uw naam,
            e-mailadres, bericht en eventueel uw telefoonnummer om uw aanvraag
            te beoordelen, contact met u op te nemen en een eventuele opdracht
            voor te bereiden. De aanvraag wordt per e-mail bezorgd bij M.S.
            Kracht Klusbedrijf. De e-mail wordt verzonden via Resend. U
            ontvangt ook een bevestiging per e-mail; uw aanvraagtekst staat
            daarin. Deze contactgegevens worden niet naar Google Analytics
            gestuurd.
          </p>
          <p>
            We bewaren aanvraaggegevens zolang dat nodig is om uw aanvraag af
            te handelen. Als daaruit een opdracht volgt, kunnen gegevens ook
            worden bewaard voor de administratie die bij die opdracht hoort.
          </p>

          <h2 className="pt-5 text-2xl font-bold text-slate-900">
            Google Analytics
          </h2>
          <p>
            Alleen als u op ‘Accepteren’ klikt, laden we Google Analytics 4 van
            Google. Dit helpt ons te begrijpen welke pagina’s worden bekeken
            en of bezoekers contact opnemen. We meten paginaweergaven,
            succesvolle offerteaanvragen en klikken op telefoon- en
            WhatsApp-links. De meting bevat de paginapad, het type gebeurtenis,
            browser- en apparaatgegevens en verwijzingsinformatie. Ingevoerde
            naam-, e-mail-, telefoon- en berichtvelden worden niet meegestuurd.
          </p>
          <p>
            De Google Analytics-cookies _ga en _ga_* worden ingesteld met een
            levensduur van maximaal zes maanden. De browser kan deze levensduur
            verder verkorten. De keuze voor analytics wordt zes maanden lokaal
            op uw apparaat onthouden. Google bewaart gebeurtenisgegevens
            volgens de bewaartermijn van de gekoppelde Analytics-property.
          </p>
          <p>
            Meer informatie over{" "}
            <a
              className="font-semibold text-blue-800 underline"
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              hoe Google gegevens verwerkt
            </a>{" "}
            en over{" "}
            <a
              className="font-semibold text-blue-800 underline"
              href="https://support.google.com/analytics/answer/7667196"
              target="_blank"
              rel="noopener noreferrer"
            >
              de bewaartermijn in Google Analytics
            </a>
            .
          </p>

          <h2 className="pt-5 text-2xl font-bold text-slate-900">
            Google Maps
          </h2>
          <p>
            De kaart wordt niet geladen totdat u op ‘Google Maps laden’ klikt.
            Als u de kaart opent, ontvangt Google technische gegevens die nodig
            zijn om de kaart te leveren. De kaart is optioneel; u kunt ook
            rechtstreeks een route plannen via de aparte Google Maps-link.
          </p>

          <h2 className="pt-5 text-2xl font-bold text-slate-900">
            Uw keuze wijzigen
          </h2>
          <p>
            U kunt analytics weigeren zonder dat dit invloed heeft op het
            gebruik van de website. U kunt uw keuze op elk moment wijzigen via
            de knop hieronder of via ‘Cookievoorkeuren’ onderaan iedere pagina.
            Als u analytics weigert, stoppen we toekomstige metingen en
            verwijderen we de Google Analytics-cookies die op dit apparaat
            staan.
          </p>
          <div className="pt-2">
            <CookiePreferencesButton className="rounded-xl border-2 border-blue-700 px-5 py-3 font-semibold text-blue-800 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2" />
          </div>
          <p>
            Om persoonsgegevens uit een offerteaanvraag in te zien of te laten
            corrigeren of verwijderen, neemt u contact met ons op via het
            bovenstaande e-mailadres.
          </p>
        </section>
      </article>
    </main>
  );
}
