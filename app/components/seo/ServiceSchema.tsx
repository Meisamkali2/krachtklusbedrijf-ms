import JsonLd from "./JsonLd";

type Props = {
  name: string;
  description: string;
  url: string;
};

export default function ServiceSchema({
  name,
  description,
  url,
}: Props) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: name,
        name,
        description,
        provider: {
          "@type": "LocalBusiness",
          name: "M.S. Kracht Klusbedrijf",
          url: "https://www.krachtklusbedrijf-ms.nl",
        },
        areaServed: [
          "Elst",
          "Arnhem",
          "Nijmegen",
          "Bemmel",
          "Huissen",
          "Lent",
          "Oosterbeek",
          "Gelderland",
        ],
        url,
      }}
    />
  );
}