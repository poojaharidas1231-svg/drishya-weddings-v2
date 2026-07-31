"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import StatItem from "./StatItem";
import { stats } from "./stats.constants";

export default function Stats() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            BY THE NUMBERS
          </p>

          <Heading>
            Over a thousand stories preserved.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every wedding is unique. Every celebration deserves to be remembered
            with honesty, artistry and emotion.
          </p>
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatItem
              key={stat.id}
              stat={stat}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}