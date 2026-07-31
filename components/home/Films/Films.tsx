"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import FilmCard from "./FilmCard";
import { films } from "./film.constants";

export default function Films() {
  return (
    <section className="bg-[#F8F5EF] py-24 md:py-40">
      <Container>
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            WEDDING FILMS
          </p>

          <Heading>
            Cinematic stories that let you relive every emotion.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Every film is thoughtfully crafted to preserve the emotions,
            laughter and unforgettable moments of your wedding day.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {films.map((film) => (
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