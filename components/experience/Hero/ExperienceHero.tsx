"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ExperienceHero() {
  return (
    <section className="bg-[#F8F5EF] pt-40 pb-28 md:pt-52 md:pb-36">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            THE EXPERIENCE
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Beautiful photographs
            <br />
            begin long before
            <br />
            we press the shutter.
          </h1>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-600">
            Since 2017, Drishya Weddings has been documenting celebrations
            across India with one simple belief — the most meaningful memories
            happen naturally. Our role is to quietly preserve them with honesty,
            emotion and timeless elegance.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}