import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedStories from "@/components/home/FeaturedStories";
import Films from "@/components/home/Films";
import Experiences from "@/components/home/Experiences";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import Instagram from "@/components/home/Instagram";
import CTA from "@/components/home/CTA";
import About from "@/components/home/About";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedStories />
      <Films />
      <About />
      <Experiences />
      <Stats />
      <Testimonials />
      <Instagram />
      <CTA />
    </main>
  );
}