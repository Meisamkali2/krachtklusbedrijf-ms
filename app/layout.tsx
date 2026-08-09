import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.krachtklusbedrijf-ms.nl"),

  title: {
    default: "M.S. Kracht Klusbedrijf | Renovatie & Schilderwerk in Elst",
    template: "%s | M.S. Kracht Klusbedrijf",
  },

  description:
    "Professioneel klusbedrijf in Elst, Arnhem en Nijmegen. Specialist in renovatie, schilderwerk, vloeren, badkamers, isolatie en complete verbouwingen.",

  keywords: [
    "klusbedrijf Elst",
    "schilder Elst",
    "renovatie Elst",
    "klusbedrijf Arnhem",
    "klusbedrijf Nijmegen",
    "badkamer renovatie",
    "vloeren",
    "isolatie",
    "schilderwerk",
  ],

  authors: [{ name: "M.S. Kracht Klusbedrijf" }],

  creator: "M.S. Kracht Klusbedrijf",

  publisher: "M.S. Kracht Klusbedrijf",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "M.S. Kracht Klusbedrijf",

    description:
      "Professioneel renovatiebedrijf in Elst, Arnhem en Nijmegen.",

    url: "https://www.krachtklusbedrijf-ms.nl",

    siteName: "M.S. Kracht Klusbedrijf",

    locale: "nl_NL",

    type: "website",

    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "M.S. Kracht Klusbedrijf",

    description:
      "Professioneel renovatiebedrijf in Gelderland.",

    images: ["/hero.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "M.S. Kracht Klusbedrijf",

    image: "https://www.krachtklusbedrijf-ms.nl/hero.jpg",

    url: "https://www.krachtklusbedrijf-ms.nl",

    telephone: "",

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

    priceRange: "€€",

    openingHours: "Mo-Fr 08:00-18:00",
  };

  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}

      </body>
    </html>
  );
}