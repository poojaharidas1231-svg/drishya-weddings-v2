"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function GalleryHero() {
  return (
    <section className="pt-40 pb-24 md:pt-48 md:pb-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            GALLERY
          </p>

          <h1 className="font-serif text-5xl md:text-7xl">
            Moments That
            <br />
            Live Forever
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
            A curated collection of our favourite moments captured across
            weddings throughout India.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}