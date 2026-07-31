"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import InstagramGrid from "./InstagramGrid";

export default function Instagram() {
  return (
    <section className="bg-white py-24 md:py-40">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            FOLLOW OUR JOURNEY
          </p>

          <Heading>
            Every celebration.
            Every emotion.
            Every frame.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Follow us for our latest weddings, films and behind-the-scenes
            moments.
          </p>

        </div>

        <InstagramGrid />

      </Container>
    </section>
  );
}