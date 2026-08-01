import {
  AboutHero,
  Story,
  Philosophy,
  Style,
  WhyChooseUs,
  FinalCTA,
} from "@/components/about";

export default function AboutPage() {
  return (
    <main className="bg-[#F8F5EF]">
      <AboutHero />
      <Story />
      <Philosophy />
      <Style />
      <WhyChooseUs />
      <FinalCTA />
    </main>
  );
}