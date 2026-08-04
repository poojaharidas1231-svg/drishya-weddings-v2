"use client";

import { useState } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroControls from "./HeroControls";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  const [current, setCurrent] = useState(0);

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
      <HeroBackground
        current={current}
        setCurrent={setCurrent}
      />

      <div className="absolute inset-0 z-10 bg-black/35 pointer-events-none" />

      <div className="relative z-20 w-full">
        <HeroContent />
      </div>

      <HeroControls
        current={current}
        setCurrent={setCurrent}
      />

      <ScrollIndicator />
    </section>
  );
}