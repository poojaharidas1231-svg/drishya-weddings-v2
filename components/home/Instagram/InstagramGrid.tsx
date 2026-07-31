"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { instagramImages } from "./instagram.constants";

export default function InstagramGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
      {instagramImages.map((image, index) => (
        <motion.div
          key={image}
          whileHover={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden rounded-3xl"
        >
          <Link
            href="https://instagram.com/drishyaweddings"
            target="_blank"
          >
            <div className="relative aspect-square lg:aspect-[4/5]">
              <Image
                src={image}
                alt="Drishya Weddings Instagram"
                fill
                className="object-cover transition duration-700 hover:scale-110"
              />
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}