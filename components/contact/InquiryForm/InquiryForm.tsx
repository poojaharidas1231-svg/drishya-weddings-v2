"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@/components/ui/Container";

type FormData = {
  coupleName: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  service: string;
  message: string;
};

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);

    // Email integration will go here

    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <section className="py-24">
        <Container>
          <div className="mx-auto max-w-2xl rounded-[32px] bg-white p-12 text-center shadow-xl">
            <h2 className="font-serif text-5xl">
              Thank You 🤍
            </h2>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              We've received your enquiry and will get back to you within
              24 hours.
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-[32px] bg-white p-10 shadow-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <input
              {...register("coupleName", { required: true })}
              placeholder="Couple's Name"
              className="w-full rounded-xl border p-4"
            />

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl border p-4"
            />

            <input
              {...register("phone")}
              placeholder="Phone / WhatsApp"
              className="w-full rounded-xl border p-4"
            />

            <input
              {...register("weddingDate")}
              type="date"
              className="w-full rounded-xl border p-4"
            />

            <input
              {...register("location")}
              placeholder="Wedding Location"
              className="w-full rounded-xl border p-4"
            />

            <select
              {...register("service")}
              className="w-full rounded-xl border p-4"
            >
              <option value="">Select a Service</option>
              <option>Wedding Photography</option>
              <option>Cinematic Films</option>
              <option>Photography + Films</option>
            </select>

            <textarea
              {...register("message")}
              rows={6}
              placeholder="Tell us about your wedding..."
              className="w-full rounded-xl border p-4"
            />

            <button
              type="submit"
              className="w-full rounded-full bg-black py-4 text-white transition hover:bg-[#A87F27]"
            >
              Begin Your Journey
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}