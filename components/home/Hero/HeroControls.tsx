"use client";

import { heroImages } from "@/content/hero";

interface Props {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

export default function HeroControls({
  current,
  setCurrent,
}: Props) {
  return (
    <div className="absolute bottom-10 left-1/2 z-40 flex -translate-x-1/2 gap-4">
      {heroImages.map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => setCurrent(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`
            h-3
            w-3
            rounded-full
            border
            transition-all
            duration-300
            ${
              current === index
                ? "border-[#C6A15B] bg-[#C6A15B] scale-110"
                : "border-white bg-transparent hover:bg-white/40"
            }
          `}
        />
      ))}
    </div>
  );
}