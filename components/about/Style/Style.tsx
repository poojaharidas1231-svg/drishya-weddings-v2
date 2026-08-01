"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import { aboutContent } from "@/content/about";

export default function Style() {
  return (
    <section className="bg-white py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            {aboutContent.style.title}
          </p>

          <Heading>
            {aboutContent.style.heading}
          </Heading>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-neutral-600">
            {aboutContent.style.description}
          </p>
        </div>
      </Container>
    </section>
  );
}