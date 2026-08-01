"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import { aboutContent } from "@/content/about";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F5EF] pt-36 pb-24 md:pt-44 md:pb-36">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-neutral-500">
              {aboutContent.hero.eyebrow}
            </p>

            <h1 className="font-serif text-5xl leading-tight text-neutral-900 md:text-7xl whitespace-pre-line">
              {aboutContent.hero.title}
            </h1>

            <p className="mt-10 max-w-xl text-lg leading-9 text-neutral-600">
              {aboutContent.hero.subtitle}
            </p>

            <div className="mt-12 flex flex-wrap gap-6">
              <div>
                <p className="font-serif text-4xl text-[#A87F27]">2017</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Established
                </p>
              </div>

              <div className="h-16 w-px bg-neutral-300" />

              <div>
                <p className="font-serif text-4xl text-[#A87F27]">India</p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-500">
                  Available Nationwide
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-2xl">
              <Image
                src={aboutContent.hero.image}
                alt="Drishya Weddings"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-3xl bg-white p-8 shadow-xl lg:block">
              <p className="font-serif text-5xl text-[#A87F27]">8+</p>

              <p className="mt-2 text-sm uppercase tracking-[0.25em] text-neutral-500">
                Years of Storytelling
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}