"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroImages } from "@/content/hero";

export default function HeroBackground() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-20 overflow-hidden">

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[current]}
            alt="Drishya Weddings"
            fill
            priority={current === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Carousel Dots */}
      <div className="absolute bottom-10 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 ${
              current === index ? "scale-125" : "hover:scale-110"
            }`}
          >
            <span
              className={`block h-3 w-3 rounded-full border transition-all duration-300 ${
                current === index
                  ? "border-[#C6A15B] bg-[#C6A15B]"
                  : "border-white bg-transparent hover:bg-white/40"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Preload Images */}
      <div className="hidden">
        {heroImages.map((image) => (
          <Image
            key={image}
            src={image}
            alt=""
            width={10}
            height={10}
          />
        ))}
      </div>

    </div>
  );
}