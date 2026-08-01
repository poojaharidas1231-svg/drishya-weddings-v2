"use client";

import Container from "@/components/ui/Container";

import { aboutContent } from "@/content/about";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-40">
      <Container>
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-16 text-center font-serif text-5xl md:text-6xl">
            Why Couples Choose Us
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {aboutContent.why.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-neutral-200 bg-white p-10"
              >
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}