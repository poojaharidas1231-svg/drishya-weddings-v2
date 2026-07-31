"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { about } from "./about.constants";

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
        {about.eyebrow}
      </p>

      <h2 className="font-serif text-5xl leading-tight text-neutral-900 md:text-6xl">
        {about.title}
      </h2>

      <h3 className="mt-6 font-serif text-2xl text-neutral-600 md:text-3xl">
        {about.subtitle}
      </h3>

      <div className="mt-10 space-y-6 text-lg leading-9 text-neutral-600">
        {about.description
          .split("\n\n")
          .map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>

      <Link
        href="/about"
        className="mt-12 inline-flex border-b border-black pb-1 text-sm uppercase tracking-[0.25em] transition hover:opacity-60"
      >
        {about.button}
      </Link>
    </motion.div>
  );
}