import Link from "next/link";

const links = [
  { label: "Stories", href: "/stories" },
  { label: "Films", href: "/films" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

export default function FooterLinks() {
  return (
    <nav className="flex flex-wrap justify-center gap-8">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm uppercase tracking-[0.25em] text-white/70 transition hover:text-white"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}