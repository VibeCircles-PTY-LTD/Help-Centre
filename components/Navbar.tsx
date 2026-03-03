"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { helpSections } from "@/data/helpContent";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchModalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((open) => !open);
      }
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus trap and focus input when modal opens
  useEffect(() => {
    if (searchOpen) {
      searchInputRef.current?.focus();
    }
  }, [searchOpen]);

  // Focus trap: keep focus inside modal
  useEffect(() => {
    if (!searchOpen || !searchModalRef.current) return;
    const modal = searchModalRef.current;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    modal.addEventListener("keydown", onKeyDown);
    return () => modal.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#E8E4DC]"
            : "bg-[#F7F4EE]"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-[#E8511A] flex items-center justify-center text-white font-bold text-sm font-display transition-transform group-hover:scale-110">
              V
            </div>
            <span
              className="text-2xl text-[#1C1C1A]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "3px" }}
            >
              VIBECIRCLE
            </span>
            <span
              className="text-[#7A7570] text-sm ml-0.5"
              style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
            >
              Help
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {helpSections.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                className="px-3 py-1.5 text-[#7A7570] hover:text-[#1C1C1A] text-sm transition-colors rounded-md hover:bg-[#E8E4DC]/50"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {s.title.split(" ")[0]}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 bg-[#E8E4DC]/60 hover:bg-[#E8E4DC] text-[#1C1C1A]/80 hover:text-[#1C1C1A] rounded-lg transition-all text-sm"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              aria-label="Open search (Command+K)"
            >
              <Search size={14} />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden sm:inline text-xs opacity-50 ml-1">⌘K</kbd>
            </button>
            <button
              className="md:hidden text-[#7A7570] hover:text-[#1C1C1A]"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#F0EDE8] border-t border-[#E8E4DC] px-6 py-4">
            {helpSections.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 py-3 text-[#7A7570] hover:text-[#1C1C1A] border-b border-[#E8E4DC] last:border-0 transition-colors"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <span style={{ color: s.color }}>{s.icon}</span>
                <span>{s.title}</span>
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Search Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
          onClick={() => setSearchOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Search help center"
        >
          <div
            ref={searchModalRef}
            className="w-full max-w-2xl bg-[#F7F4EE] rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <form onSubmit={handleSearch} className="flex items-center border-b border-[#E8E4DC]">
              <Search size={20} className="ml-5 text-[#7A7570] shrink-0" aria-hidden />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the help center..."
                className="flex-1 px-4 py-5 bg-transparent text-[#1C1C1A] placeholder-[#7A7570] text-lg outline-none"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                aria-label="Search query"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="mr-4 text-[#7A7570] hover:text-[#1C1C1A] p-1"
                aria-label="Close search"
              >
                <X size={18} />
              </button>
            </form>
            <div className="p-4">
              <p className="text-sm text-[#7A7570] px-2" style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
                Try searching for "invoice", "campaign", "creators", or "Africa"
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
