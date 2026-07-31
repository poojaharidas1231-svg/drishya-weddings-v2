import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedStories from "@/components/home/FeaturedStories";
import Films from "@/components/home/Films";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <FeaturedStories />
      <Films />
    </main>
  );
}