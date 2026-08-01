import Image from "next/image";
import Container from "@/components/ui/Container";
import { galleryImages } from "@/content/gallery";

export default function GalleryGrid() {
  return (
    <section className="pb-32">
      <Container>
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-3xl"
            >
              <Image
                src={image.image}
                alt={`Gallery ${image.id}`}
                width={600}
                height={800}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}