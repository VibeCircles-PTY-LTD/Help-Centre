import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />
      <main id="main-content" className="max-w-2xl mx-auto px-6 pt-40 pb-24 text-center">
        <p
          className="text-8xl font-black text-[#E8511A] mb-4 leading-none"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          404
        </p>
        <h1
          className="text-3xl font-bold text-[#1C1C1A] mb-4"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Page not found
        </h1>
        <p
          className="text-[#7A7570] mb-10"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          The page you&apos;re looking for doesn&apos;t exist. Head back to the help center.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A0A08] text-white rounded-xl font-medium hover:bg-[#1C1C1A] transition-colors"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          Back to Help Center
        </Link>
      </main>
    </div>
  );
}
