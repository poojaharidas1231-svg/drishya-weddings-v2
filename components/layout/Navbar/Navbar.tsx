"use client";

import { useEffect, useState } from "react";

import Container from "@/components/ui/Container";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
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
            ? "bg-[#F8F5EF]/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <Container>
        <DesktopNav />
        <MobileNav />
      </Container>
    </header>
  );
}