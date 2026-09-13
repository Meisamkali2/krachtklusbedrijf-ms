const schema = {
  "@context": "https://schema.org",

  "@type": [
    "HomeAndConstructionBusiness",
    "Electrician",
  ],

  "@id": "https://www.krachtklusbedrijf-ms.nl/#business",

  name: "M.S. Kracht Klusbedrijf",

  alternateName: "M.S. Kracht",

  url: "https://www.krachtklusbedrijf-ms.nl/",

  description:
    "M.S. Kracht Klusbedrijf is een professioneel klus- en renovatiebedrijf uit Elst, Gelderland. Wij verzorgen renovatie, verbouwing, schilderwerk, badkamerrenovatie, vloeren, isolatie, zolderrenovatie en elektrotechnische werkzaamheden voor particulieren in Elst, Arnhem, Nijmegen, Huissen, Bemmel, Lent en Oosterbeek.",

  image: [
    "https://www.krachtklusbedrijf-ms.nl/images/ms-kracht-logo.png",
  ],

  logo: {
    "@type": "ImageObject",

    "@id":
      "https://www.krachtklusbedrijf-ms.nl/#logo",

    url:
      "https://www.krachtklusbedrijf-ms.nl/images/ms-kracht-logo.png",

    contentUrl:
      "https://www.krachtklusbedrijf-ms.nl/images/ms-kracht-logo.png",

    caption: "M.S. Kracht Klusbedrijf",
  },

  telephone: "+31643680281",

  email: "info@krachtklusbedrijf-ms.nl",

  address: {
    "@type": "PostalAddress",

    streetAddress:
      "Koningin Wilhelminastraat 73",

    postalCode: "6661 VW",

    addressLocality: "Elst",

    addressRegion: "Gelderland",

    addressCountry: "NL",
  },

  identifier: {
    "@type": "PropertyValue",

    propertyID: "KVK",

    value: "93792204",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Elst",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Arnhem",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Nijmegen",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Bemmel",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Huissen",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Lent",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },

    {
      "@type": "City",
      name: "Oosterbeek",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Gelderland",
      },
    },
  ],

  hasOfferCatalog: {
    "@type": "OfferCatalog",

    name: "Diensten van M.S. Kracht Klusbedrijf",

    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Renovatie en verbouwing",
          serviceType: "Renovatie en verbouwing",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Schilderwerk",
          serviceType: "Schilderwerk",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Badkamerrenovatie",
          serviceType: "Badkamerrenovatie",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vloeren",
          serviceType: "Vloeren leggen en vloerafwerking",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Isolatie",
          serviceType: "Isolatiewerkzaamheden",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zolderrenovatie",
          serviceType: "Zolderrenovatie",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },

      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Elektrotechniek",
          serviceType:
            "Elektrotechnische werkzaamheden",
          areaServed: [
            "Elst",
            "Arnhem",
            "Nijmegen",
            "Huissen",
            "Bemmel",
            "Lent",
            "Oosterbeek",
          ],
        },
      },
    ],
  },

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

  currenciesAccepted: "EUR",

  contactPoint: {
    "@type": "ContactPoint",

    telephone: "+31643680281",

    email: "info@krachtklusbedrijf-ms.nl",

    contactType: "customer service",

    availableLanguage: [
      "Dutch",
      "English",
    ],
  },

  sameAs: [
    "https://www.instagram.com/m.s.krachtklusbedrijf/",
    "https://www.facebook.com/share/19WfPRKxUZ/?mibextid=wwXIfr",
  ],
};

export default schema;