export interface Story {
  slug: string;
  couple: string;
  location: string;
  cover: string;
  images: string[];
}

export const stories: Story[] = [
  {
    slug: "amrutha-abirami",
    couple: "Amrutha & Abirami",
    location: "Kannur",
    cover: "/images/stories/amrutha-abirami/cover.jpg",
    images: [
      "/images/stories/amrutha-abirami/01.jpg",
      "/images/stories/amrutha-abirami/02.jpg",
      "/images/stories/amrutha-abirami/03.jpg",
      "/images/stories/amrutha-abirami/04.jpg",
    ],
  },
  {
    slug: "ayushi-sidharth",
    couple: "Ayushi & Sidharth",
    location: "Bangalore",
    cover: "/images/stories/ayushi-sidharth/cover.jpg",
    images: [
      "/images/stories/ayushi-sidharth/01.jpg",
      "/images/stories/ayushi-sidharth/02.jpg",
      "/images/stories/ayushi-sidharth/03.jpg",
      "/images/stories/ayushi-sidharth/04.jpg",
      "/images/stories/ayushi-sidharth/05.jpg",
    ],
  },
];