"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function StoriesHero() {
  return (
    <section className="pt-40 pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            REAL LOVE STORIES
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl">
            Every Wedding
            <br />
            Has A Story.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
            A collection of heartfelt celebrations captured across India,
            preserving every emotion, every smile, and every unforgettable moment.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}