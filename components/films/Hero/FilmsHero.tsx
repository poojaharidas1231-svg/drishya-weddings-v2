"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function FilmsHero() {
  return (
    <section className="bg-[#F8F5EF] pt-40 pb-24 md:pt-48 md:pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            CINEMATIC FILMS
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Stories in Motion.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
            Some memories deserve more than photographs. Our wedding films are
            crafted to preserve every laugh, every tear and every heartfelt
            moment just as it unfolded.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}