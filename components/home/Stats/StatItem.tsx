"use client";

import { motion } from "framer-motion";

import type { Stat } from "./stats.types";

interface StatItemProps {
  stat: Stat;
}

export default function StatItem({ stat }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h3 className="font-serif text-5xl md:text-7xl text-neutral-900">
        {stat.value}
      </h3>

      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
        {stat.label}
      </p>
    </motion.div>
  );
}