"use client";

import Container from "@/components/ui/Container";

import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";

export default function Footer() {
  return (
    <footer className="bg-black py-20 text-white">
      <Container>
        <div className="space-y-12 text-center">

          <h2 className="font-serif text-5xl md:text-6xl">
            DRISHYA
          </h2>

          <p className="mx-auto max-w-xl text-lg leading-8 text-white/70">
            Honest storytelling.
            Timeless imagery.
            Beautifully remembered.
          </p>

          <FooterLinks />

          <FooterSocial />

          <div className="border-t border-white/10 pt-8 text-sm uppercase tracking-[0.2em] text-white/40">
            © {new Date().getFullYear()} Drishya Weddings.
            All Rights Reserved.
          </div>

        </div>
      </Container>
    </footer>
  );
}