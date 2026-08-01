"use client";

import Image from "next/image";
import Link from "next/link";

interface Story {
  slug: string;
  couple: string;
  location: string;
  cover: string;
  images: string[];
}

interface StoryCardProps {
  story: Story;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group block overflow-hidden rounded-[32px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Cover Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={story.cover}
          alt={story.couple}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
      </div>

      {/* Card Content */}
      <div className="p-8">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-neutral-500">
          {story.location}
        </p>

        <h3 className="font-serif text-3xl text-neutral-900">
          {story.couple}
        </h3>

        <div className="mt-8 flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.25em] text-[#A87F27]">
            View Story
          </span>

          <span className="text-2xl text-[#A87F27] transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}