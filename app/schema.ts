const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",

  "@id": "https://www.krachtklusbedrijf-ms.nl/#business",

  name: "M.S. Kracht Klusbedrijf",

  url: "https://www.krachtklusbedrijf-ms.nl",

  image: "https://www.krachtklusbedrijf-ms.nl/images/ms-kracht-logo.png",

  logo: "https://www.krachtklusbedrijf-ms.nl/images/ms-kracht-logo.png",

  telephone: "+31643680281",

  email: "info@krachtklusbedrijf-ms.nl",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Koningin Wilhelminastraat 73",
    postalCode: "6661 VW",
    addressLocality: "Elst",
    addressRegion: "Gelderland",
    addressCountry: "NL",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Elst",
    },
    {
      "@type": "City",
      name: "Arnhem",
    },
    {
      "@type": "City",
      name: "Nijmegen",
    },
    {
      "@type": "City",
      name: "Bemmel",
    },
    {
      "@type": "City",
      name: "Huissen",
    },
    {
      "@type": "City",
      name: "Lent",
    },
    {
      "@type": "City",
      name: "Oosterbeek",
    },
  ],

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],

  priceRange: "€€",
};

export default schema;