"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import ExperienceItem from "./ExperienceItem";
import { experiences } from "./experience.constants";

export default function Experiences() {
  return (
    <section className="bg-white py-24 md:py-40">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            EXPERIENCES
          </p>

          <Heading>
            Crafted around every chapter of your celebration.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            From intimate engagements to destination weddings, every experience
            is thoughtfully documented with authenticity, artistry and emotion.
          </p>
        </div>

        <div className="mt-20">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              experience={experience}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}