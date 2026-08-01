"use client";

import { stories } from "@/content/stories";
import StoryCard from "../Card/StoryCard";

export default function StoriesGrid() {
  return (
    <section className="pb-24 md:pb-40">
      <div className="container-luxury">
        <div className="grid gap-10 lg:grid-cols-2">
          {stories.map((story) => (
            <StoryCard
              key={story.slug}
              story={story}
            />
          ))}
        </div>
      </div>
    </section>
  );
}