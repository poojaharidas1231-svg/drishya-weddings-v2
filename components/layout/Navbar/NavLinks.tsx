"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Stories", href: "/stories" },
  {  label: "Gallery",href: "/gallery" },
  { label: "Films", href: "/films" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
//   { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-10 lg:flex">
      {links.map((link) => {
        const active = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className="
              group
              relative
              text-sm
              uppercase
              tracking-[0.22em]
              text-neutral-700
              transition-colors
              duration-300
              hover:text-black
            "
          >
            {link.label}

            <span
              className={`
                absolute
                -bottom-2
                left-0
                h-px
                bg-black
                transition-all
                duration-300
                ${
                  active
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }
              `}
            />
          </Link>
        );
      })}
    </nav>
  );
}