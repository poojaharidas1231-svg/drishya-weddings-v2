"use client";

import Link from "next/link";
import { heroButtons } from "./hero.constants";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      {heroButtons.map((button) => (
        <Link
          key={button.label}
          href={button.href}
          className={
            button.variant === "primary"
              ? "rounded-full bg-white px-8 py-4 text-sm font-medium text-black transition hover:scale-105"
              : "rounded-full border border-white px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black"
          }
        >
          {button.label}
        </Link>
      ))}
    </div>
  );
}