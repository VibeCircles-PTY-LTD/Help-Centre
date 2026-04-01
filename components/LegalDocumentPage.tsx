import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { LegalDocument, LegalPageId } from "@/data/legalPages";
import { legalDocuments } from "@/data/legalPages";

const legalNavLabel: Record<LegalPageId, string> = {
  privacy: "Privacy",
  terms: "Terms",
  cookies: "Cookies",
  popia: "POPIA",
};

export default function LegalDocumentPage({ pageId }: { pageId: LegalPageId }) {
  const doc: LegalDocument = legalDocuments[pageId];

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />

      <header className="pt-24 pb-12 px-6 md:px-10 bg-[#0A0A08] relative overflow-hidden">
        <div
          className="absolute top-0 right-0 w-80 h-80 opacity-[0.12] pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E8511A 0%, transparent 70%)",
            transform: "translate(25%, -35%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/55 hover:text-white text-sm mb-8 transition-colors"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            <ArrowLeft size={14} aria-hidden /> Help Center
          </Link>
          <p
            className="text-[#E8511A]/90 text-xs uppercase tracking-[0.14em] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Legal
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold text-[#F7F4EE] leading-tight mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {doc.title}
          </h1>
          <p
            className="text-[#F7F4EE]/55 text-base md:text-lg max-w-2xl leading-relaxed mb-6"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            {doc.description}
          </p>
          <p
            className="text-white/40 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Last updated {doc.lastUpdated}
          </p>
        </div>
      </header>

      <div className="relative h-6 bg-[#0A0A08]">
        <svg viewBox="0 0 1440 24" className="absolute bottom-0 w-full" preserveAspectRatio="none" aria-hidden>
          <path d="M0,24 L0,12 Q360,0 720,12 Q1080,24 1440,12 L1440,24 Z" fill="#F7F4EE" />
        </svg>
      </div>

      <main id="main-content" className="max-w-3xl mx-auto px-6 md:px-10 py-14">
        <nav
          className="mb-12 flex flex-wrap gap-2 text-sm"
          aria-label="Related legal pages"
        >
          {(Object.keys(legalDocuments) as LegalPageId[]).map((id) => (
            <Link
              key={id}
              href={`/${id}`}
              className={`rounded-full px-3 py-1.5 border transition-colors ${
                id === pageId
                  ? "border-[#E8511A] bg-[#E8511A]/10 text-[#1C1C1A]"
                  : "border-[#E8E4DC] bg-white text-[#7A7570] hover:border-[#C8B89A] hover:text-[#1C1C1A]"
              }`}
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              {legalNavLabel[id]}
            </Link>
          ))}
        </nav>

        <div className="space-y-10">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2
                className="text-xl md:text-2xl font-bold text-[#1C1C1A] mb-4"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {section.heading}
              </h2>
              <div className="space-y-4">
                {section.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[#1C1C1A]/85 text-base leading-relaxed"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p
          className="mt-14 pt-8 border-t border-[#E8E4DC] text-sm text-[#7A7570] leading-relaxed"
          style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >
          This information is provided for transparency and does not replace professional legal advice.
          For the full help knowledge base, visit{" "}
          <Link href="/" className="text-[#E8511A] hover:underline font-medium">
            the Help Center home
          </Link>
          .
        </p>
      </main>

      <Footer />
    </div>
  );
}
