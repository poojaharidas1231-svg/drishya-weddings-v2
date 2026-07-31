"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { about } from "./about.constants";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto aspect-[4/5] w-full max-w-lg overflow-hidden rounded-3xl"
    >
      <Image
        src={about.image}
        alt="Drishya Weddings"
        fill
        className="object-cover transition duration-700 hover:scale-105"
        priority={false}
      />
    </motion.div>
  );
}