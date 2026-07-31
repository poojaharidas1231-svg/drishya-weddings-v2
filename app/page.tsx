import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedStories from "@/components/home/FeaturedStories";
import Films from "@/components/home/Films";
import Experiences from "@/components/home/Experiences";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedStories />
      <Films />
      <Experiences />
    </main>
  );
}