"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { aboutContent } from "@/content/about";

export default function Story() {
  return (
    <section className="bg-white py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500"
          >
            {aboutContent.story.title}
          </motion.p>

          <Heading className="mb-16">
            Every wedding deserves to be remembered honestly.
          </Heading>

          <div className="space-y-8 text-lg leading-9 text-neutral-600">
            {aboutContent.story.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}