import Image from "next/image";
import { notFound } from "next/navigation";

import { stories } from "@/content/stories";
import Container from "@/components/ui/Container";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="bg-[#F8F5EF]">

      {/* Hero */}

      <section className="relative h-[80vh] overflow-hidden">

        <Image
          src={story.cover}
          alt={story.couple}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="text-center text-white">

            <p className="mb-5 text-xs uppercase tracking-[0.35em]">
              Wedding Story
            </p>

            <h1 className="font-serif text-5xl md:text-7xl">
              {story.couple}
            </h1>

            <p className="mt-6 text-lg">
              {story.location}
            </p>

          </div>

        </div>

      </section>

      {/* Story */}

      <section className="py-24">

        <Container>

          <div className="mx-auto mb-20 max-w-3xl text-center">

            <h2 className="font-serif text-4xl md:text-5xl">
              A Celebration Filled With Real Moments
            </h2>

            <p className="mt-8 text-lg leading-9 text-neutral-600">
              Every wedding has its own rhythm, emotions and beautiful little
              moments. Our approach is to quietly document the day as it
              unfolds, preserving memories exactly as they happened.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {story.images.map((image) => (

              <div
                key={image}
                className="relative aspect-[4/5] overflow-hidden rounded-[32px]"
              >

                <Image
                  src={image}
                  alt={story.couple}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

            ))}

          </div>

        </Container>

      </section>

    </main>
  );
}