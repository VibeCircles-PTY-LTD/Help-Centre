import Link from "next/link";
import { helpSections } from "@/data/helpContent";

export default function Footer() {
  return (
    <footer className="bg-[#F0EDE8] text-[#1C1C1A] mt-24 border-t border-[#E8E4DC]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[#E8511A] flex items-center justify-center text-white font-bold">
                V
              </div>
              <span
                className="text-[#1C1C1A] text-[22px]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "3px" }}
              >
                VIBECIRCLE
              </span>
            </Link>
            <p
              className="text-[#7A7570] text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Instrument Sans', sans-serif" }}
            >
              Community-powered marketing platform connecting brands with the communities that matter across Africa and the diaspora.
            </p>
            <div className="flex gap-4 mt-6">
              {["hello@vibecircles.com"].map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="text-[#E8511A] text-sm hover:text-[#c94515] transition-colors"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {e}
                </a>
              ))}
            </div>
          </div>

          {/* Sections */}
          <div className="md:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {[
              {
                heading: "Help Topics",
                links: helpSections.map((s) => ({ label: s.title, href: `/${s.slug}` })),
              },
              {
                heading: "Contact",
                links: [
                  { label: "General Enquiries", href: "mailto:hello@vibecircles.com" },
                  { label: "Partnerships", href: "mailto:partnerships@vibecircles.com" },
                  { label: "Creators", href: "mailto:creators@vibecircles.com" },
                  { label: "Press", href: "mailto:press@vibecircles.com" },
                  { label: "Finance", href: "mailto:finance@vibecircles.com" },
                  { label: "Technical", href: "mailto:tech@vibecircles.com" },
                ],
              },
              {
                heading: "Company",
                links: [
                  { label: "Website", href: "https://vibecircles.com" },
                  { label: "Instagram", href: "https://instagram.com/vibecircles" },
                  { label: "LinkedIn", href: "https://linkedin.com/company/vibecircles" },
                  { label: "X / Twitter", href: "https://x.com/vibecircles" },
                  { label: "Privacy Policy", href: "https://vibecircles.com/privacy" },
                  { label: "Terms of Service", href: "https://vibecircles.com/terms" },
                ],
              },
            ].map((col) => (
              <div key={col.heading}>
                <p
                  className="text-xs uppercase tracking-widest text-[#7A7570] mb-4"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-sm text-[#7A7570] hover:text-[#1C1C1A] transition-colors"
                        style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E8E4DC] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#7A7570]"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            © {new Date().getFullYear()} VibeCircles. All rights reserved. Johannesburg, South Africa.
          </p>
          <p
            className="text-xs text-[#7A7570]/80"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Help Center v1.0
          </p>
        </div>
      </div>
    </footer>
  );
}
