"use client";

import Link from "next/link";

import Container from "@/components/ui/Container";

import { aboutContent } from "@/content/about";

export default function FinalCTA() {
  return (
    <section className="bg-black py-32 text-white">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="whitespace-pre-line font-serif text-5xl leading-tight md:text-7xl">
            {aboutContent.ending}
          </h2>

          <Link
            href="/contact"
            className="mt-16 inline-flex rounded-full bg-white px-10 py-5 text-sm uppercase tracking-[0.25em] text-black transition hover:scale-105"
          >
            Begin Your Journey
          </Link>
        </div>
      </Container>
    </section>
  );
}