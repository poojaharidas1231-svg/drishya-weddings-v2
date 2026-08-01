import Link from "next/link";

export default function BookButton() {
  return (
    <Link
      href="/contact"
      className="
        hidden
        lg:inline-flex
        items-center
        rounded-full
        border
        border-[#A87F27]
        px-6
        py-3
        text-xs
        font-medium
        uppercase
        tracking-[0.22em]
        text-[#A87F27]
        transition-all
        duration-300
        hover:bg-[#A87F27]
        hover:text-white
      "
    >
      Book Your Story
    </Link>
  );
}