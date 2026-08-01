import {
  ContactHero,
  InquiryForm,
  ContactInfo,
  FAQ,
} from "@/components/contact";

export default function ContactPage() {
  return (
    <main className="bg-[#F8F5EF]">
      <ContactHero />
      <InquiryForm />
      <ContactInfo />
      <FAQ />
    </main>
  );
}