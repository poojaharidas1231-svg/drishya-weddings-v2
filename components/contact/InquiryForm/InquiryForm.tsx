"use client";

import { useForm } from "react-hook-form";

type InquiryFormData = {
  coupleName: string;
  partnerName: string;
  email: string;
  phone: string;
  weddingDate: string;
  venue: string;
  city: string;
  service: string;
  guestCount: string;
  message: string;
};

export default function InquiryForm() {
  const { register, handleSubmit, reset } = useForm<InquiryFormData>();

  const onSubmit = (data: InquiryFormData) => {
    console.log(data);

    alert(
      "Thank you for reaching out! We'll get back to you within 24 hours."
    );

    reset();
  };

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-4xl rounded-[32px] bg-[#F8F5EF] p-8 shadow-xl md:p-14">

        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
            ENQUIRY FORM
          </p>

          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            We'd Love To Hear Your Story
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-neutral-600 leading-8">
            Share a few details about your celebration and we'll personally
            get in touch to discuss how we can preserve your memories.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-6 md:grid-cols-2"
        >
          <input {...register("coupleName")} placeholder="Couple's Name" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />
          <input {...register("partnerName")} placeholder="Partner's Name" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />

          <input {...register("email")} type="email" placeholder="Email Address" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />
          <input {...register("phone")} placeholder="Phone Number" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />

          <input {...register("weddingDate")} type="date" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />
          <input {...register("venue")} placeholder="Wedding Venue" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />

          <input {...register("city")} placeholder="City / State" className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black" />

          <select
            {...register("service")}
            className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black"
          >
            <option value="">Select a Service</option>
            <option>Wedding Photography</option>
            <option>Cinematic Wedding Films</option>
            <option>Photography + Films</option>
          </select>

          <input
            {...register("guestCount")}
            placeholder="Estimated Guest Count"
            className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black md:col-span-2"
          />

          <textarea
            {...register("message")}
            rows={7}
            placeholder="Tell us about your wedding, your story, and everything you'd love us to know..."
            className="rounded-xl border border-neutral-300 bg-white p-4 outline-none focus:border-black md:col-span-2"
          />

          <button
            type="submit"
            className="md:col-span-2 mt-4 rounded-full bg-black px-10 py-5 text-sm uppercase tracking-[0.25em] text-white transition duration-300 hover:bg-[#A87F27]"
          >
            Begin Your Journey
          </button>
        </form>
      </div>
    </section>
  );
}