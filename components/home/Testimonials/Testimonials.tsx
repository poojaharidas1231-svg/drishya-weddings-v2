"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./testimonial.constants";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-40">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            KIND WORDS
          </p>

          <Heading>
            Memories our couples cherish forever.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every wedding is different, but the emotions remain timeless.
            These words from our couples mean more to us than any award.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}