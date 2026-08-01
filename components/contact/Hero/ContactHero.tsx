"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

export default function ContactHero() {
  return (
    <section className="bg-[#F8F5EF] pt-40 pb-28 md:pt-48 md:pb-40">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
            BEGIN YOUR JOURNEY
          </p>

          <h1 className="font-serif text-5xl leading-tight md:text-7xl lg:text-8xl">
            Let's Tell
            <br />
            Your Story.
          </h1>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
            Thank you for considering Drishya Weddings.
            Every celebration has a unique story, and we'd be honoured to
            preserve yours through timeless photography and cinematic films.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}