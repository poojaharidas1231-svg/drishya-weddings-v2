"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import type { Story } from "./story.types";

interface FeaturedStoryProps {
  story: Story;
  index: number;
}

export default function FeaturedStory({
  story,
  index,
}: FeaturedStoryProps) {
  const isReversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      className="grid items-center gap-16 py-24 lg:grid-cols-2"
    >
      {/* Content */}

      <div className={isReversed ? "lg:order-2" : ""}>
        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
          {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="font-serif text-5xl leading-tight md:text-6xl">
          {story.couple}
        </h2>

        <p className="mt-4 text-sm uppercase tracking-[0.2em] text-neutral-500">
          {story.location}
        </p>

        <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
          {story.description}
        </p>

        <Link
          href={`/stories/${story.slug}`}
          className="mt-10 inline-flex border-b border-neutral-900 pb-1 text-sm uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
        >
          View Story
        </Link>
      </div>

      {/* Image */}

      <div
        className={`relative aspect-[4/5] overflow-hidden rounded-3xl ${
          isReversed ? "lg:order-1" : ""
        }`}
      >
        <Image
          src={story.coverImage}
          alt={story.couple}
          fill
          className="object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
    </motion.article>
  );
}