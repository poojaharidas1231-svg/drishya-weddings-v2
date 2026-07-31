"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { cta } from "./cta.constants";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-32 md:py-44">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-black" />

      <Container className="relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-center"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-white/60">
            {cta.eyebrow}
          </p>

          <h2 className="font-serif text-5xl leading-none text-white md:text-7xl lg:text-8xl whitespace-pre-line">
            {cta.title}
          </h2>

          <p className="mx-auto mt-10 max-w-2xl text-lg leading-9 text-white/70">
            {cta.description}
          </p>

          <div className="mt-16">
            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                rounded-full
                bg-white
                px-10
                py-5
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-black
                transition-all
                duration-300
                hover:scale-105
                hover:bg-[#F8F5EF]
              "
            >
              {cta.button}
            </Link>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}