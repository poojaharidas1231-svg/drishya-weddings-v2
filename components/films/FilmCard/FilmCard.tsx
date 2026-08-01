import type { Film } from "@/content/films";

interface Props {
  film: Film;
}

export default function FilmCard({ film }: Props) {
  const id = film.youtube.split("/").pop();

  return (
    <a
      href={film.youtube}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-[24px] bg-white shadow-lg transition hover:-translate-y-2"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt={film.couple}
        className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          {film.location}
        </p>

        <h3 className="mt-3 font-serif text-2xl">
          {film.couple}
        </h3>

        <p className="mt-5 text-sm uppercase tracking-[0.25em] text-[#A87F27]">
          Watch Film →
        </p>
      </div>
    </a>
  );
}