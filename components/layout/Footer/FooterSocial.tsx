import Link from "next/link";

export default function FooterSocial() {
  return (
    <div className="flex justify-center gap-8">
      <Link
        href="https://instagram.com/drishyaweddings"
        target="_blank"
        className="text-white/60 transition hover:text-white"
      >
        Instagram
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        className="text-white/60 transition hover:text-white"
      >
        YouTube
      </Link>

      <Link
        href="https://wa.me/919656560010"
        target="_blank"
        className="text-white/60 transition hover:text-white"
      >
        WhatsApp
      </Link>
    </div>
  );
}