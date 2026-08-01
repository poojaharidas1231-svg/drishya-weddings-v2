import {
  FilmsHero,
  FeaturedFilm,
  FilmGrid,
} from "@/components/films";

export default function FilmsPage() {
  return (
    <main className="bg-[#F8F5EF]">
      <FilmsHero />
      <FeaturedFilm />
      <FilmGrid />
    </main>
  );
}