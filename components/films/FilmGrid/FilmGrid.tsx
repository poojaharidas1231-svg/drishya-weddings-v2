import Container from "@/components/ui/Container";
import { films } from "@/content/films";
import FilmCard from "../FilmCard/FilmCard";

export default function FilmGrid() {
  return (
    <section className="pb-32">
      <Container>

        <div className="mb-12">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            MORE FILMS
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {films.slice(1).map((film) => (
            <FilmCard
              key={film.id}
              film={film}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}