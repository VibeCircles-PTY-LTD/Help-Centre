"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ThumbsUp, ThumbsDown, Check } from "lucide-react";
import type { Article, Section } from "@/data/helpContent";

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-2" style="font-family:\'Syne\',sans-serif">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="text-xl font-bold mt-8 mb-3" style="font-family:\'Syne\',sans-serif">$1</h2>')
    .replace(/→ (.+)/g, '<span class="flex items-center gap-2 text-[#E8511A]">→ $1</span>')
    .replace(/\n\n/g, "</p><p class='mb-4 leading-relaxed'>")
    .replace(/\n/g, "<br/>");
}

function ArticleCard({
  article,
  section,
  open,
  onToggle,
}: {
  article: Article;
  section: Section;
  open: boolean;
  onToggle: () => void;
}) {
  const [voted, setVoted] = useState<"up" | "down" | null>(null);
  const contentId = `article-content-${article.id}`;

  return (
    <div
      id={article.id}
      className="border border-[#E8E4DC] rounded-xl overflow-hidden bg-white hover:border-[#C8B89A] transition-colors"
    >
      <button
        type="button"
        id={`article-heading-${article.id}`}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={contentId}
      >
        <span
          className="text-[#1C1C1A] font-semibold text-base group-hover:text-[#E8511A] transition-colors"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {article.title}
        </span>
        <ChevronDown
          size={18}
          className={`text-[#7A7570] shrink-0 ml-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      <div
        id={contentId}
        role="region"
        aria-labelledby={`article-heading-${article.id}`}
        className={`accordion-content ${open ? "open" : ""}`}
      >
        <div className="accordion-inner">
          <div className="px-6 pb-6 border-t border-[#E8E4DC]">
            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4 mb-5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full text-xs"
                    style={{
                      backgroundColor: `${section.color}15`,
                      color: section.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Content */}
            <div
              className="prose-custom text-[#1C1C1A]/80 text-sm leading-relaxed space-y-0"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              dangerouslySetInnerHTML={{
                __html: `<p class='mb-4 leading-relaxed'>${renderMarkdown(article.content)}</p>`,
              }}
            />

            {/* Feedback */}
            <div className="mt-8 pt-5 border-t border-[#E8E4DC] flex items-center gap-4">
              <span
                className="text-xs text-[#7A7570]"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                Was this helpful?
              </span>
              {voted ? (
                <span className="flex items-center gap-1.5 text-xs text-[#1B4332]">
                  <Check size={14} />
                  Thanks for the feedback!
                </span>
              ) : (
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setVoted("up")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E4DC] hover:border-[#1B4332] hover:text-[#1B4332] text-[#7A7570] transition-all text-xs"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    <ThumbsUp size={12} /> Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setVoted("down")}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#E8E4DC] hover:border-[#E8511A] hover:text-[#E8511A] text-[#7A7570] transition-all text-xs"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    <ThumbsDown size={12} /> No
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArticleList({ section }: { section: Section }) {
  const firstId = section.articles[0]?.id ?? "";
  const [expandedIds, setExpandedIds] = useState<Set<string>>(() => new Set([firstId]));
  const hasScrolledToHash = useRef(false);

  // Deep link: open accordion and scroll to #article-id (defer setState to avoid cascading renders)
  useEffect(() => {
    if (typeof window === "undefined" || hasScrolledToHash.current) return;
    const hash = window.location.hash.slice(1);
    if (!hash || !section.articles.some((a) => a.id === hash)) return;
    hasScrolledToHash.current = true;
    const raf = requestAnimationFrame(() => {
      setExpandedIds((prev) => new Set(prev).add(hash));
      const el = document.getElementById(hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 450);
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [section.articles]);

  const toggle = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-3">
      {section.articles.map((article) => (
        <ArticleCard
          key={article.id}
          article={article}
          section={section}
          open={expandedIds.has(article.id)}
          onToggle={() => toggle(article.id)}
        />
      ))}
    </div>
  );
}
