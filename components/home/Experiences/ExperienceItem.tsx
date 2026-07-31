"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import type { Experience } from "./experience.types";

interface ExperienceItemProps {
  experience: Experience;
}

export default function ExperienceItem({
  experience,
}: ExperienceItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="group border-b border-neutral-200 py-10"
    >
      <Link
        href={experience.href}
        className="flex items-center justify-between gap-8"
      >
        <div className="max-w-2xl">
          <h3 className="font-serif text-3xl transition-all duration-300 group-hover:translate-x-2 md:text-5xl">
            {experience.title}
          </h3>

          <p className="mt-4 text-base leading-8 text-neutral-600 md:text-lg">
            {experience.description}
          </p>
        </div>

        <ArrowUpRight
          size={32}
          className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-2"
        />
      </Link>
    </motion.div>
  );
}