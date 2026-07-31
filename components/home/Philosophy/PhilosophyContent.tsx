"use client";

import { motion } from "framer-motion";
import { philosophy } from "./philosophy.constants";

export default function PhilosophyContent() {
  return (
    <div className="max-w-3xl">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-6 tracking-[0.35em] text-xs uppercase text-neutral-500"
      >
        {philosophy.eyebrow}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-5xl leading-tight md:text-7xl"
      >
        {philosophy.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mt-10 text-lg leading-9 text-neutral-600"
      >
        {philosophy.description}
      </motion.p>
    </div>
  );
}