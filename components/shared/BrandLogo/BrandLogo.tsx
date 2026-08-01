import Image from "next/image";

interface BrandLogoProps {
  variant?: "light" | "dark";
  showTagline?: boolean;
  iconOnly?: boolean;
  size?: number;
}

export default function BrandLogo({
  variant = "dark",
  showTagline = false,
  iconOnly = false,
  size = 52,
}: BrandLogoProps) {
  const logo =
    variant === "light"
      ? "/branding/dw-mark-white.png"
      : "/branding/dw-mark-black.png";

  return (
    <div
      className="flex items-center gap-4"
      aria-label="Drishya Weddings"
    >
      <Image
        src={logo}
        alt="Drishya Weddings"
        width={size}
        height={size}
        priority
      />

      {!iconOnly && (
        <div>
          <h1 className="font-serif text-xl tracking-[0.18em] text-neutral-900">
            DRISHYA WEDDINGS
          </h1>

          {showTagline && (
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Wedding Photography & Films
            </p>
          )}
        </div>
      )}
    </div>
  );
}