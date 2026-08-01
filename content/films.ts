export interface Film {
  id: number;
  couple: string;
  location: string;
  youtube: string;
}

export const films: Film[] = [
  {
    id: 1,
    couple: "tets & test",
    location: "Kannur",
    youtube: "https://youtu.be/x1NXr-6IN5A",
  },
  {
    id: 2,
    couple: "test & test",
    location: "Bangalore",
    youtube: "https://youtu.be/q0NnYBWOexY",
  },
  {
    id: 3,
    couple: "Featured Celebration",
    location: "India",
    youtube: "https://youtu.be/SeLsBdaWGQM",
  },
];