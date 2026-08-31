import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import schema from "./schema";

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
    default: "M.S. Kracht Klusbedrijf | Klusbedrijf in Elst",
    template: "%s | M.S. Kracht Klusbedrijf",
  },

  description:
    "M.S. Kracht Klusbedrijf is gespecialiseerd in renovatie, schilderwerk, vloeren, badkamer renovatie, isolatie en complete verbouwingen in Elst, Arnhem, Nijmegen en omgeving.",

  keywords: [
    "klusbedrijf Elst",
    "klusbedrijf Arnhem",
    "klusbedrijf Nijmegen",
    "renovatie Elst",
    "schilderwerk Elst",
    "badkamer renovatie Elst",
    "vloeren Elst",
    "isolatie Elst",
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
      "Klusbedrijf voor renovatie, schilderwerk, vloeren, badkamers, isolatie en verbouwingen in Elst, Arnhem en Nijmegen.",
    url: "https://www.krachtklusbedrijf-ms.nl",
    siteName: "M.S. Kracht Klusbedrijf",
    locale: "nl_NL",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1536,
        height: 1024,
        alt: "M.S. Kracht Klusbedrijf - renovatie en verbouwing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "M.S. Kracht Klusbedrijf",
    description:
      "Klusbedrijf voor renovatie en verbouwing in Gelderland.",
    images: ["/images/og-image.jpg"],
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
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />

        {children}
      </body>
    </html>
  );
}