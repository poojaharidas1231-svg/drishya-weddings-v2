"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";

import FeaturedStory from "./FeaturedStory";
import { featuredStories } from "./story.constants";

export default function FeaturedStories() {
  return (
    <section className="bg-white py-24 md:py-40">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            FEATURED STORIES
          </p>

          <Heading>
            Every wedding has a story worth remembering.
          </Heading>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            A curated collection of celebrations captured with honesty,
            emotion and timeless elegance.
          </p>

        </div>

        <div>
          {featuredStories.map((story, index) => (
            <FeaturedStory
              key={story.id}
              story={story}
              index={index}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}