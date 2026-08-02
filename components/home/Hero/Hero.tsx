"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        pt-20
        items-center
        justify-center
        overflow-hidden
      "
    >
      {/* Background */}
      <HeroBackground />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/35 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full">
        <HeroContent />
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
}