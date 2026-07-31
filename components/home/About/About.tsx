"use client";

import Container from "@/components/ui/Container";

import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";

export default function About() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-40">
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutContent />

          <AboutImage />
        </div>
      </Container>
    </section>
  );
}