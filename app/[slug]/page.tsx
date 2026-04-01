import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleList from "@/components/ArticleList";
import { helpSections } from "@/data/helpContent";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

/** Only slugs from the content bundle exist at runtime (no on-demand [slug] that can mis-resolve). */
export const dynamicParams = false;

interface Props {
  params: Promise<{ slug: string }>;
}

function normalizeSlugParam(raw: string): string {
  let s = raw.trim();
  try {
    s = decodeURIComponent(s);
  } catch {
    /* invalid encoding — use raw */
  }
  return s.replace(/\/+$/, "").trim().toLowerCase();
}

async function resolveNormalizedSlug(
  params: Promise<{ slug: string }> | { slug: string }
): Promise<string> {
  const p = params instanceof Promise ? await params : params;
  return normalizeSlugParam(typeof p.slug === "string" ? p.slug : "");
}

function findSectionBySlug(normalized: string) {
  return (
    helpSections.find((s) => s.slug === normalized) ??
    helpSections.find((s) => s.slug.toLowerCase() === normalized)
  );
}

export async function generateStaticParams() {
  return helpSections.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const normalized = await resolveNormalizedSlug(params);
  const section = findSectionBySlug(normalized);
  if (!section) return { title: "Not Found" };
  return {
    title: `${section.title} — VibeCircles Help Center`,
    description: section.tagline,
  };
}

export default async function SectionPage({ params }: Props) {
  const normalized = await resolveNormalizedSlug(params);
  const section = findSectionBySlug(normalized);
  if (!section) notFound();

  const slug = section.slug;
  const currentIndex = helpSections.findIndex((s) => s.slug === slug);
  const prevSection = currentIndex > 0 ? helpSections[currentIndex - 1] : null;
  const nextSection =
    currentIndex < helpSections.length - 1
      ? helpSections[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />

      {/* Hero Banner */}
      <section
        className="pt-24 pb-16 px-6 md:px-10 relative overflow-hidden"
        style={{ backgroundColor: section.color }}
      >
        {/* Decorative circles */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20"
          style={{
            backgroundColor: "rgba(255,255,255,0.15)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-48 h-48 rounded-full pointer-events-none opacity-10"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            transform: "translateY(50%)",
          }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            <ArrowLeft size={14} /> Help Center
          </Link>

          {/* Icon and title */}
          <div className="flex items-center gap-5 mb-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center text-3xl">
              {section.icon}
            </div>
            <div>
              <p
                className="text-white/60 text-xs uppercase tracking-widest mb-1"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                {`${String(helpSections.findIndex((s) => s.slug === slug) + 1).padStart(2, "0")} / ${String(helpSections.length).padStart(2, "0")}`}
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {section.title}
              </h1>
            </div>
          </div>

          <p
            className="text-white/70 text-lg max-w-2xl leading-relaxed"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            {section.tagline}
          </p>

          {/* Article count pill */}
          <div
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-white/15 backdrop-blur rounded-full text-white/80 text-sm"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {section.articles.length} articles
          </div>
        </div>
      </section>

      {/* Curved transition */}
      <div className="relative h-8" style={{ backgroundColor: section.color }}>
        <svg viewBox="0 0 1440 32" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,32 L0,16 Q720,0 1440,16 L1440,32 Z" fill="#F7F4EE" />
        </svg>
      </div>

      {/* Main Content */}
      <main id="main-content" className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar - Article list */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24">
              <p
                className="text-xs uppercase tracking-widest text-[#7A7570] mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                In this section
              </p>
              <nav className="space-y-1">
                {section.articles.map((article) => (
                  <a
                    key={article.id}
                    href={`#${article.id}`}
                    className="block px-3 py-2.5 rounded-lg text-sm text-[#7A7570] hover:text-[#1C1C1A] hover:bg-[#E8E4DC]/50 transition-all"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    {article.title}
                  </a>
                ))}
              </nav>

              {/* Other sections */}
              <div className="mt-8 pt-8 border-t border-[#E8E4DC]">
                <p
                  className="text-xs uppercase tracking-widest text-[#7A7570] mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Other sections
                </p>
                <nav className="space-y-1">
                  {helpSections
                    .filter((s) => s.slug !== slug)
                    .map((s) => (
                      <Link
                        key={s.id}
                        href={`/${s.slug}`}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-[#7A7570] hover:text-[#1C1C1A] hover:bg-[#E8E4DC]/50 transition-all"
                        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                      >
                        <span style={{ color: s.color }}>{s.icon}</span>
                        {s.title}
                      </Link>
                    ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* Articles */}
          <div className="lg:col-span-3">
            <ArticleList section={section} />

            {/* Prev / Next navigation */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevSection ? (
                <Link
                  href={`/${prevSection.slug}`}
                  className="flex items-center gap-4 px-6 py-5 bg-white border border-[#E8E4DC] rounded-2xl hover:border-[#C8B89A] hover:shadow-md transition-all group"
                >
                  <ArrowLeft size={18} className="text-[#7A7570] group-hover:text-[#E8511A] transition-colors shrink-0" />
                  <div>
                    <p
                      className="text-xs text-[#7A7570] mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Previous
                    </p>
                    <p
                      className="text-sm font-semibold text-[#1C1C1A]"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {prevSection.title}
                    </p>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextSection ? (
                <Link
                  href={`/${nextSection.slug}`}
                  className="flex items-center justify-end gap-4 px-6 py-5 bg-white border border-[#E8E4DC] rounded-2xl hover:border-[#C8B89A] hover:shadow-md transition-all group text-right"
                >
                  <div>
                    <p
                      className="text-xs text-[#7A7570] mb-1"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Next
                    </p>
                    <p
                      className="text-sm font-semibold text-[#1C1C1A]"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {nextSection.title}
                    </p>
                  </div>
                  <ArrowRight size={18} className="text-[#7A7570] group-hover:text-[#E8511A] transition-colors shrink-0" />
                </Link>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
