const schema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",

  name: "M.S. Kracht Klusbedrijf",

  url: "https://www.krachtklusbedrijf-ms.nl",

  image: "https://www.krachtklusbedrijf-ms.nl/hero.jpg",

  logo: "https://www.krachtklusbedrijf-ms.nl/favicon.ico",

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
    "Elst",
    "Arnhem",
    "Nijmegen",
    "Gelderland",
  ],

  openingHours: [
    "Mo-Fr 08:00-18:00",
  ],

  priceRange: "€€",

  sameAs: [
    "https://www.google.com/search?q=M.S.+Kracht+Klusbedrijf",
  ],
};

export default schema;