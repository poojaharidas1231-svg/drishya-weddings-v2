"use client";


import { useState } from "react";
import Link from "next/link";

import {
  Menu,
  X,
} from "lucide-react";

import {
  navigation
} from "../../constants/navigation";


import MobileMenu from "./MobileMenu";



export default function Navbar() {


  const [
    open,
    setOpen
  ] = useState(false);



  return (

    <header

      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      "

    >


      <nav

        className="
        container-luxury
        flex
        items-center
        justify-between
        py-6
        "

      >


        {/* Logo */}

        <Link

          href="/"

          className="
          font-serif
          text-3xl
          tracking-wide
          "

        >

          Drishya

        </Link>



        {/* Desktop Navigation */}

        <div

          className="
          hidden
          md:flex
          items-center
          gap-10
          "

        >

          {
            navigation.map(
              (item)=>(

                <Link

                  key={
                    item.href
                  }

                  href={
                    item.href
                  }

                  className="
                  text-sm
                  uppercase
                  tracking-[0.25em]
                  hover:opacity-60
                  transition
                  "

                >

                  {item.label}

                </Link>

              )
            )
          }


        </div>



        {/* Mobile Button */}

        <button

          className="
          md:hidden
          "

          onClick={
            ()=>setOpen(!open)
          }

          aria-label="Menu"

        >

          {
            open

            ?

            <X size={28}/>

            :

            <Menu size={28}/>

          }


        </button>


      </nav>



      {
        open &&

        <MobileMenu

          close={
            ()=>setOpen(false)
          }

        />

      }


    </header>

  );

}