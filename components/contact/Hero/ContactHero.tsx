"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="pt-40 pb-24 md:pt-48">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            BEGIN YOUR JOURNEY
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            We'd Love To Hear
            <br />
            Your Story.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
            Whether you're planning an intimate celebration or a grand wedding,
            we'd be honoured to document your story with timeless photographs
            and cinematic films.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}