"use client";

import { motion } from "framer-motion";

import type { Testimonial } from "./testimonial.types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-neutral-200 bg-white p-10"
    >
      <span className="font-serif text-7xl leading-none text-neutral-300">
        "
      </span>

      <p className="mt-6 text-lg leading-9 text-neutral-700">
        {testimonial.review}
      </p>

      <div className="mt-10">
        <h3 className="font-serif text-2xl">
          {testimonial.name}
        </h3>

        <p className="mt-2 text-sm uppercase tracking-[0.2em] text-neutral-500">
          {testimonial.wedding}
        </p>
      </div>
    </motion.article>
  );
}