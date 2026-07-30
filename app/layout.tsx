import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Inter,
  Instrument_Serif,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument",
  display: "swap",
});


export const metadata: Metadata = {
  title: {
    default: "Drishya Weddings | Luxury Wedding Photography",
    template: "%s | Drishya Weddings",
  },

  description:
    "Drishya Weddings creates timeless luxury wedding photography and cinematic films across India.",

  keywords: [
    "Luxury Wedding Photography",
    "Indian Wedding Photographer",
    "Wedding Films",
    "Destination Weddings India",
  ],

  authors: [
    {
      name: "Drishya Weddings",
    },
  ],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Drishya Weddings | Luxury Wedding Photography",
    description:
      "Elegant wedding photography crafted as timeless visual stories.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${cormorant.variable}
          ${instrument.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
