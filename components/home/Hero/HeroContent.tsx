"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import HeroButtons from "./HeroButtons";
import { heroContent } from "./hero.constants";

export default function HeroContent() {
  return (
    <Container className="flex min-h-screen items-center">
      <div className="max-w-4xl text-white">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 uppercase tracking-[0.45em] text-xs md:text-sm"
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
            font-serif
            text-5xl
            leading-none
            md:text-7xl
            lg:text-8xl
          "
        >
          {heroContent.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="
            mt-8
            max-w-xl
            text-base
            leading-8
            text-white/85
            md:text-lg
          "
        >
          {heroContent.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.8,
          }}
        >
          <HeroButtons />
        </motion.div>
      </div>
    </Container>
  );
}