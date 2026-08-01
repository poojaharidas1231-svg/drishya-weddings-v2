import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking 6–12 months in advance. However, if your date is available, we'd still love to hear from you.",
  },
  {
    question: "Do you travel for weddings?",
    answer:
      "Yes. Drishya Weddings photographs and films weddings anywhere across India.",
  },
  {
    question: "Do you offer photography and films together?",
    answer:
      "Yes. You can book wedding photography, cinematic films or a complete collection tailored to your celebration.",
  },
  {
    question: "How will we receive our photos and films?",
    answer:
      "Your memories are delivered through a beautifully organised online gallery and downloadable high-resolution files.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl">

          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
              FREQUENTLY ASKED QUESTIONS
            </p>

            <h2 className="font-serif text-5xl md:text-6xl">
              Everything You Need To Know
            </h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[28px] border border-neutral-200 bg-[#F8F5EF] p-8"
              >
                <h3 className="font-serif text-2xl">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-8 text-neutral-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}