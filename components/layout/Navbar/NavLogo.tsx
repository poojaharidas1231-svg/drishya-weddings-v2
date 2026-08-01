import Link from "next/link";
import BrandLogo from "@/components/shared/BrandLogo";

export default function NavLogo() {
  return (
    <Link
      href="/"
      aria-label="Drishya Weddings"
      className="flex items-center"
    >
      <BrandLogo
        variant="dark"
        size={46}
      />
    </Link>
  );
}