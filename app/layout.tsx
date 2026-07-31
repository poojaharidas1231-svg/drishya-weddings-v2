import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";

import {
  Cormorant_Garamond,
  Inter,
} from "next/font/google";


import "./globals.css";


import Navbar from "../components/layout/Navbar";



const inter = Inter({

  subsets: [
    "latin"
  ],

  variable:
    "--font-inter",

  display:
    "swap",

});



const cormorant = Cormorant_Garamond({

  subsets: [
    "latin"
  ],

  weight: [
    "300",
    "400",
    "500",
    "600",
    "700"
  ],

  variable:
    "--font-serif",

  display:
    "swap",

});




export const metadata: Metadata = {


  title:
    "Drishya Weddings | Luxury Wedding Photography India",


  description:
    "Drishya Weddings captures authentic emotions and cinematic wedding stories across India.",


  keywords: [

    "Wedding Photography India",

    "Luxury Wedding Photographer",

    "Kerala Wedding Photographer",

    "Bangalore Wedding Photographer",

    "Cinematic Wedding Films"

  ],


  openGraph: {

    title:
      "Drishya Weddings",


    description:
      "Timeless wedding stories captured with emotion and cinematic elegance.",


    type:
      "website",

  },


};




export default function RootLayout({

  children,

}: Readonly<{

  children:
    React.ReactNode;

}>) {


  return (

    <html

      lang="en"

    >


      <body

        className={`
          ${inter.variable}
          ${cormorant.variable}
          antialiased
        `}

      >


        <Navbar />


        {children}




        <Footer />


      </body>


    </html>

  );

}