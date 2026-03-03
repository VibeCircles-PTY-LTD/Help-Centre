"use client";
import { useState, useEffect, useCallback, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { searchArticles, helpSections } from "@/data/helpContent";
import { Search, ArrowRight, X } from "lucide-react";

function highlight(text: string, query: string): string {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  return text.replace(regex, "<mark>$1</mark>");
}

function excerpt(content: string, query: string): string {
  const lower = content.toLowerCase();
  const qLower = query.toLowerCase();
  const idx = lower.indexOf(qLower);
  if (idx === -1) return content.slice(0, 180) + "...";
  const start = Math.max(0, idx - 80);
  const end = Math.min(content.length, idx + query.length + 100);
  return (start > 0 ? "..." : "") + content.slice(start, end) + (end < content.length ? "..." : "");
}

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState(() => searchArticles(initialQuery));

  const doSearch = useCallback((q: string) => {
    setResults(searchArticles(q));
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    router.replace(`/search${q ? `?q=${encodeURIComponent(q)}` : ""}`, { scroll: false });
  }, [router]);

  useEffect(() => {
    doSearch(query);
  }, [query, doSearch]);

  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />
      <main id="main-content" className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-24">
        {/* Search input */}
        <div className="mb-10">
          <div className="flex items-center gap-3 bg-white border-2 border-[#E8E4DC] focus-within:border-[#E8511A] rounded-2xl px-5 py-4 transition-colors shadow-sm">
            <Search size={20} className="text-[#7A7570] shrink-0" />
            <input
              autoFocus
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for anything..."
              className="flex-1 bg-transparent text-[#1C1C1A] placeholder-[#7A7570] text-lg outline-none"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-[#7A7570] hover:text-[#1C1C1A] transition-colors">
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {query ? (
          <>
            {/* Results header */}
            <div className="flex items-center justify-between mb-6">
              <p
                className="text-[#7A7570] text-sm"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {results.length === 0
                  ? "No results found"
                  : `${results.length} result${results.length !== 1 ? "s" : ""} for "${query}"`}
              </p>
            </div>

            {results.length === 0 ? (
              <div className="text-center py-20">
                <div
                  className="text-6xl mb-4"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  ◌
                </div>
                <h2
                  className="text-2xl font-bold text-[#1C1C1A] mb-3"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Nothing here yet
                </h2>
                <p
                  className="text-[#7A7570] mb-8"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  Try different keywords, or browse all topics below.
                </p>
                <a
                  href="mailto:hello@vibecircles.com"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#E8511A] text-white rounded-xl text-sm font-medium hover:bg-[#D4461A] transition-colors"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  Contact support
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                {results.map((result) => {
                  const section = helpSections.find((s) => s.slug === result.sectionSlug)!;
                  return (
                    <Link
                      key={result.id}
                      href={`/${result.sectionSlug}#${result.id}`}
                      className="block bg-white border border-[#E8E4DC] rounded-2xl p-6 hover:border-[#C8B89A] hover:shadow-md transition-all group"
                    >
                      {/* Section badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span style={{ color: section.color }}>{section.icon}</span>
                        <span
                          className="text-xs uppercase tracking-wider"
                          style={{
                            color: section.color,
                            fontFamily: "'JetBrains Mono', monospace",
                          }}
                        >
                          {result.sectionTitle}
                        </span>
                      </div>

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <h3
                            className="text-lg font-semibold text-[#1C1C1A] group-hover:text-[#E8511A] transition-colors mb-2"
                            style={{ fontFamily: "'Syne', sans-serif" }}
                            dangerouslySetInnerHTML={{
                              __html: highlight(result.title, query),
                            }}
                          />
                          <p
                            className="text-sm text-[#7A7570] leading-relaxed line-clamp-2"
                            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                            dangerouslySetInnerHTML={{
                              __html: highlight(excerpt(result.content, query), query),
                            }}
                          />
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-[#C8B89A] group-hover:text-[#E8511A] shrink-0 mt-1 transition-colors"
                        />
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          /* Browse all */
          <div>
            <p
              className="text-xs uppercase tracking-widest text-[#7A7570] mb-6"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Browse all topics
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {helpSections.map((section) => (
                <Link
                  key={section.id}
                  href={`/${section.slug}`}
                  className="flex items-center gap-4 px-5 py-4 bg-white border border-[#E8E4DC] rounded-xl hover:border-[#C8B89A] hover:shadow-sm transition-all group"
                >
                  <span
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                    style={{
                      backgroundColor: `${section.color}15`,
                      color: section.color,
                    }}
                  >
                    {section.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-semibold text-sm text-[#1C1C1A] group-hover:text-[#E8511A] transition-colors"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {section.title}
                    </p>
                    <p
                      className="text-xs text-[#7A7570]"
                      style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                    >
                      {section.articles.length} articles
                    </p>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-[#C8B89A] group-hover:text-[#E8511A] transition-colors shrink-0"
                  />
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

function SearchFallback() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />
      <main id="main-content" className="max-w-4xl mx-auto px-6 md:px-10 pt-28 pb-24">
        <div className="mb-10">
          <div className="flex items-center gap-3 bg-white border-2 border-[#E8E4DC] rounded-2xl px-5 py-4">
            <Search size={20} className="text-[#7A7570] shrink-0" />
            <div className="flex-1 h-6 bg-[#E8E4DC]/50 rounded animate-pulse" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-20 bg-white border border-[#E8E4DC] rounded-xl animate-pulse" />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchContent />
    </Suspense>
  );
}
