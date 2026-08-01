import Container from "@/components/ui/Container";
import { films } from "@/content/films";

export default function FeaturedFilm() {
  const film = films[0];

  return (
    <section className="pb-20">
      <Container>
        <div className="overflow-hidden rounded-[32px] bg-black text-white">

          <div className="aspect-video">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${film.youtube.split("/").pop()}`}
              title={film.couple}
              allowFullScreen
            />
          </div>

          <div className="p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[#D4AF37]">
              Featured Film
            </p>

            <h2 className="mt-3 font-serif text-4xl">
              {film.couple}
            </h2>

            <p className="mt-3 text-white/70">
              {film.location}
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}