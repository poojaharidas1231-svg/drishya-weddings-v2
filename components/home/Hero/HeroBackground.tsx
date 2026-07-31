"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <motion.div
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 12,
        ease: "easeOut",
      }}
      className="absolute inset-0"
    >
      <Image
        src="/images/hero/hero-desktop.jpg"
        alt="Drishya Weddings"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
    </motion.div>
  );
}