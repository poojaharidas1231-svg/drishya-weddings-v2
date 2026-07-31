"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

import type { Film } from "./film.types";

interface FilmCardProps {
  film: Film;
}

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl bg-white"
    >
      <Link
        href={film.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={film.thumbnail}
            alt={film.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/25 transition group-hover:bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur">
              <Play
                size={24}
                className="ml-1 text-black"
                fill="currentColor"
              />
            </div>
          </div>
        </div>

        <div className="p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
            {film.location}
          </p>

          <h3 className="mt-3 font-serif text-3xl">
            {film.title}
          </h3>

          <span className="mt-6 inline-block border-b border-black pb-1 text-sm uppercase tracking-[0.2em]">
            Watch Film
          </span>
        </div>
      </Link>
    </motion.article>
  );
}