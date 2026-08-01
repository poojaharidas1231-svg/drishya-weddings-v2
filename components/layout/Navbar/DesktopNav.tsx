import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import BookButton from "./BookButton";

export default function DesktopNav() {
  return (
    <div className="hidden h-24 items-center justify-between lg:flex">
      <NavLogo />

      <NavLinks />

      <BookButton />
    </div>
  );
}