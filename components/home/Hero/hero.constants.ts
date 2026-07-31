import { HeroButton, HeroContent } from "./hero.types";

export const heroContent: HeroContent = {
  eyebrow: "Luxury Wedding Photography",
  title: [
    "Every Love Story",
    "Deserves To Be",
    "Remembered",
  ],
  description:
    "Authentic emotions. Cinematic storytelling. Timeless wedding memories crafted across India.",
};

export const heroButtons: HeroButton[] = [
  {
    label: "View Stories",
    href: "/portfolio",
    variant: "primary",
  },
  {
    label: "Watch Films",
    href: "/films",
    variant: "secondary",
  },
];