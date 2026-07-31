"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import useScroll from "@/hooks/useScroll";

const navLinks = [
  {
    name: "Stories",
    href: "/stories",
  },
  {
    name: "Films",
    href: "/films",
  },
  {
    name: "Experiences",
    href: "/experiences",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <motion.header
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-[#F8F5EF] shadow-sm"
            : "bg-[#F8F5EF]/80 backdrop-blur-md"
        }
      `}
    >
      <nav
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-6
          lg:px-10
        "
      >

        {/* Logo */}

        <Link
          href="/"
          className="
            font-serif
            text-xl
            tracking-[0.35em]
            text-neutral-900
          "
        >
          DRISHYA
        </Link>


        {/* Desktop Navigation */}

        <div
          className="
            hidden
            items-center
            gap-10
            md:flex
          "
        >

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm
                uppercase
                tracking-[0.2em]
                text-neutral-700
                transition-colors
                hover:text-black
              "
            >
              {link.name}
            </Link>
          ))}

        </div>


        {/* Mobile Menu */}

        <button
          className="
            flex
            items-center
            justify-center
            md:hidden
          "
          aria-label="Open menu"
        >
          <Menu
            size={26}
            className="text-neutral-900"
          />
        </button>


      </nav>
    </motion.header>
  );
}