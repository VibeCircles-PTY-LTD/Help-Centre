import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { helpSections } from "@/data/helpContent";
import { ArrowRight, MessageCircle, Mail, Clock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-20 px-6 md:px-10 overflow-hidden bg-[#0A0A08]">
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #E8511A 0%, transparent 70%)",
            transform: "translate(30%, -30%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #F5A623 0%, transparent 70%)",
            transform: "translate(-30%, 30%)",
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#E8511A]/30 bg-[#E8511A]/10 text-[#E8511A] text-xs mb-8"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E8511A] animate-pulse" />
            Help Center
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold text-[#F7F4EE] mb-6 leading-none tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            How can we
            <br />
            <span className="text-[#E8511A]">help you?</span>
          </h1>

          <p
            className="text-[#F7F4EE]/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Find answers about partnerships, services, billing, and more. Everything VibeCircles — explained in plain language.
          </p>

          {/* Search CTA */}
          <Link
            href="/search"
            className="inline-flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 rounded-xl text-[#F7F4EE]/70 hover:text-[#F7F4EE] transition-all text-sm group"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <span>Search the help center...</span>
            <kbd className="ml-2 px-2 py-0.5 rounded text-xs bg-white/10 group-hover:bg-white/20 transition-colors">⌘K</kbd>
          </Link>
        </div>
      </section>

      {/* Wavy divider */}
      <div className="relative bg-[#0A0A08] h-6">
        <svg viewBox="0 0 1440 24" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0,24 L0,12 Q360,0 720,12 Q1080,24 1440,12 L1440,24 Z" fill="#F7F4EE" />
        </svg>
      </div>

      {/* Section Cards Grid */}
      <main id="main-content" className="max-w-7xl mx-auto px-6 md:px-10 py-20">
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-widest text-[#7A7570] mb-3"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Browse by topic
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#1C1C1A]"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            All Help Topics
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpSections.map((section, idx) => (
            <Link
              key={section.id}
              href={`/${section.slug}`}
              className="group relative bg-white border border-[#E8E4DC] rounded-2xl p-7 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={
                {
                  "--section-color": section.color,
                } as React.CSSProperties
              }
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${section.color}08, ${section.color}03)`,
                }}
              />

              {/* Number */}
              <div
                className="absolute top-5 right-6 text-5xl font-bold opacity-5 select-none"
                style={{
                  fontFamily: "'Syne', sans-serif",
                  color: section.color,
                }}
              >
                {String(idx + 1).padStart(2, "0")}
              </div>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: `${section.color}15`,
                  color: section.color,
                }}
              >
                {section.icon}
              </div>

              {/* Content */}
              <h3
                className="text-lg font-bold text-[#1C1C1A] mb-2 group-hover:text-[#0A0A08] transition-colors"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {section.title}
              </h3>
              <p
                className="text-sm text-[#7A7570] leading-relaxed mb-5"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                {section.tagline}
              </p>

              {/* Article count & arrow */}
              <div className="flex items-center justify-between">
                <span
                  className="text-xs text-[#7A7570]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {section.articles.length} articles
                </span>
                <span
                  className="flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all"
                  style={{ color: section.color, fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  Explore <ArrowRight size={12} />
                </span>
              </div>

              {/* Bottom color accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: section.color }}
              />
            </Link>
          ))}
        </div>

        {/* Popular Articles */}
        <div className="mt-20">
          <div className="mb-8">
            <p
              className="text-xs uppercase tracking-widest text-[#7A7570] mb-3"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Quick answers
            </p>
            <h2
              className="text-3xl font-bold text-[#1C1C1A]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Most Read Articles
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { section: "getting-started", article: "what-is-vibecircles", label: "What is VibeCircles?" },
              { section: "partnerships", article: "how-to-pitch", label: "How to Pitch to VibeCircles" },
              { section: "billing", article: "payment-methods", label: "Payment Methods Accepted" },
              { section: "services", article: "local-market-engagement", label: "Local Market Engagement" },
              { section: "trust", article: "brand-safety", label: "Brand Safety Standards" },
              { section: "technical-support", article: "campaign-reporting-access", label: "Campaign Reporting Access" },
            ].map((item) => {
              const section = helpSections.find((s) => s.slug === item.section)!;
              return (
                <Link
                  key={item.article}
                  href={`/${item.section}#${item.article}`}
                  className="flex items-center gap-4 px-5 py-4 bg-white border border-[#E8E4DC] rounded-xl hover:border-[#C8B89A] hover:bg-[#FAFAF8] transition-all group"
                >
                  <span className="text-base shrink-0">{section.icon}</span>
                  <span
                    className="text-sm text-[#1C1C1A] group-hover:text-[#E8511A] transition-colors flex-1"
                    style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 500 }}
                  >
                    {item.label}
                  </span>
                  <ArrowRight size={14} className="text-[#C8B89A] shrink-0 group-hover:text-[#E8511A] transition-colors" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Still need help CTA */}
        <div className="mt-20 bg-[#0A0A08] rounded-3xl p-10 md:p-14 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
            style={{
              background: "radial-gradient(circle, #E8511A 0%, transparent 70%)",
              transform: "translate(20%, -20%)",
            }}
          />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#F7F4EE] mb-3"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Still need help?
              </h2>
              <p
                className="text-[#F7F4EE]/50 max-w-md"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                Our team is made of real people who actually read emails. Reach out and we'll get back to you fast.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@vibecircles.com"
                className="flex items-center gap-2 px-5 py-3 bg-[#E8511A] hover:bg-[#D4461A] text-white rounded-xl font-medium text-sm transition-colors"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <Mail size={15} /> Email Us
              </a>
              <div
                className="flex items-center gap-2 px-5 py-3 bg-white/10 text-[#F7F4EE]/60 rounded-xl text-sm"
                style={{ fontFamily: "'Instrument Sans', sans-serif" }}
              >
                <Clock size={15} /> Mon–Fri, 8am–6pm SAST
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
