"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import NavLogo from "./NavLogo";

export default function MobileNav() {
  return (
    <div className="flex h-20 items-center justify-between lg:hidden">
      <NavLogo />

      <Link
        href="#"
        aria-label="Open Menu"
        className="rounded-full p-2 transition hover:bg-black/5"
      >
        <Menu size={24} />
      </Link>
    </div>
  );
}