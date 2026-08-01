import Container from "@/components/ui/Container";

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#F8F5EF]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
              CONTACT
            </p>

            <h2 className="font-serif text-5xl">
              Let's Create
              <br />
              Something Beautiful.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-9 text-neutral-600">
              We'd love to hear about your wedding plans.
              Whether you're celebrating in Kerala, Bangalore,
              or anywhere across India, we'd be honoured to
              tell your story.
            </p>
          </div>

          <div className="space-y-8">

            <div>
              <h3 className="mb-2 font-serif text-2xl">
                Email
              </h3>

              <a
                href="mailto:drishyaweddings@gmail.com"
                className="text-neutral-700 hover:text-[#A87F27]"
              >
                drishyaweddings@gmail.com
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-serif text-2xl">
                Phone & WhatsApp
              </h3>

              <a
                href="tel:+919656560010"
                className="text-neutral-700 hover:text-[#A87F27]"
              >
                +91 96565 60010
              </a>
            </div>

            <div>
              <h3 className="mb-2 font-serif text-2xl">
                Weddings
              </h3>

              <p className="text-neutral-700">
                Available Anywhere in India
              </p>
            </div>

            <div className="flex gap-6 pt-4">
              <a
                href="https://www.instagram.com/drishyaweddings/"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/drishyaweddings/"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>

              <a
                href="https://www.youtube.com/@drishyaweddings"
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>
            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}