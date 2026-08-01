import {
  GalleryHero,
  GalleryGrid,
} from "@/components/gallery";

export default function GalleryPage() {
  return (
    <main className="bg-[#F8F5EF]">
      <GalleryHero />
      <GalleryGrid />
    </main>
  );
}