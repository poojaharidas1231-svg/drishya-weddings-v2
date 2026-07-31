"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PhilosophyImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 80,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
      className="relative h-[650px] overflow-hidden rounded-3xl"
    >
      <Image
        src="/images/philosophy/philosophy.jpg"
        alt="Drishya Weddings"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}