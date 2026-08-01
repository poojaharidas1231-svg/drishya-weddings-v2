"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import { aboutContent } from "@/content/about";

export default function Philosophy() {
  return (
    <section className="bg-[#F8F5EF] py-28 md:py-40">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            {aboutContent.philosophy.title}
          </p>

          <h2 className="font-serif text-5xl leading-tight md:text-7xl">
            {aboutContent.philosophy.quote}
          </h2>

          <p className="mx-auto mt-12 max-w-3xl text-lg leading-9 text-neutral-600">
            {aboutContent.philosophy.description}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}