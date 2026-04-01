import Link from "next/link";

/** Mirrors `Company-Website-develop/components/shared/layout.jsx` Footer + `vibeTheme.jsx` palette & SOCIALS. */
const C = {
  bg2: "#F0EDE8",
  orange: "#E8511A",
  text: "#1C1C1A",
  dim: "#7A7570",
  border: "#E8E4DC",
} as const;

const MAIN_SITE = "https://www.vibecircles.co.za";

const PAGE_HREF: Record<string, string> = {
  Marketplace: `${MAIN_SITE}/marketplace`,
  Blog: "https://blog.vibecircles.co.za",
  Contact: `${MAIN_SITE}/contact`,
  About: `${MAIN_SITE}/about`,
  Roadmap: "/roadmap",
  Jobs: `${MAIN_SITE}/jobs`,
  Team: `${MAIN_SITE}/team`,
  Privacy: "/privacy",
  Terms: "/terms",
  Cookies: "/cookies",
  POPIA: "/popia",
};

const cols = [
  { title: "Business", links: ["Marketplace", "Blog", "Roadmap", "Contact"] as const },
  { title: "Company", links: ["About", "Roadmap", "Jobs", "Team"] as const },
  { title: "Legal", links: ["Privacy", "Terms", "Cookies", "POPIA"] as const },
] as const;

/** Same icons and targets as `components/shared/vibeTheme.jsx` SOCIALS (main site URL normalized). */
const SOCIALS = [
  {
    href: `${MAIN_SITE}/`,
    label: "VibeCircles site",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M3 4 12 20 21 4 15 4 12 17 9 4z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/vibecircles",
    label: "Twitter/X",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L22.9 22h-6.1l-4.8-6.3L6.7 22H3.6l7.3-8.4L1.5 2h6.2l4.3 5.7L18.9 2zm-1.1 18h1.7L7.3 4H5.5l12.3 16z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com/vibecircles",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0z" />
        <path d="M16.8 3H7.2A4.2 4.2 0 0 0 3 7.2v9.6A4.2 4.2 0 0 0 7.2 21h9.6a4.2 4.2 0 0 0 4.2-4.2V7.2A4.2 4.2 0 0 0 16.8 3zm2.5 13.8a2.5 2.5 0 0 1-2.5 2.5H7.2a2.5 2.5 0 0 1-2.5-2.5V7.2a2.5 2.5 0 0 1 2.5-2.5h9.6a2.5 2.5 0 0 1 2.5 2.5v9.6z" />
      </svg>
    ),
  },
  {
    href: "https://tiktok.com/@vibecircles",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M21 8.2a5.3 5.3 0 0 0-3.7-3.7C15.9 4 12 4 12 4s-3.9 0-5.3.5A5.3 5.3 0 0 0 3 8.2C2.5 9.6 2.5 12 2.5 12s0 2.4.5 3.8a5.3 5.3 0 0 0 3.7 3.7c1.4.5 5.3.5 5.3.5s3.9 0 5.3-.5a5.3 5.3 0 0 0 3.7-3.7c.5-1.4.5-3.8.5-3.8s0-2.4-.5-3.8zM10 15.2V8.8L15.5 12 10 15.2z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/company/vibecircles",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M4 3.5C4 2.7 4.7 2 5.5 2S7 2.7 7 3.5 6.3 5 5.5 5 4 4.3 4 3.5zM4 7h3v13H4V7zm6 0h2.9v1.8h.1c.4-.8 1.5-2 3.3-2 3.5 0 4.1 2.3 4.1 5.2V20h-3v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.7-2.4 3.4V20h-3V7z" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/profile.php?id=61577760104699",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M13.7 10.6h-1.6V9.4c0-.5.3-.6.6-.6h1v-2h-1.4c-1.6 0-2.6 1.1-2.6 2.6v1.2H8v2.2h1.7V20h2.4v-7.2h1.6l.2-2.2z" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18.2A8.2 8.2 0 1 1 12 3.8a8.2 8.2 0 0 1 0 16.4z" />
      </svg>
    ),
  },
  {
    href: "https://youtube.com/@vibecircles",
    label: "YouTube",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden width={14} height={14} fill="currentColor">
        <path d="M21 7.6a3 3 0 0 0-2.1-2.1C17 5 12 5 12 5s-5 0-6.9.5A3 3 0 0 0 3 7.6C2.5 9.5 2.5 12 2.5 12s0 2.5.5 4.4a3 3 0 0 0 2.1 2.1C7 19 12 19 12 19s5 0 6.9-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-4.4.5-4.4s0-2.5-.5-4.4zM10 15.5V8.5L16 12l-6 3.5z" />
      </svg>
    ),
  },
];

function FooterLink({ label }: { label: string }) {
  const href = PAGE_HREF[label];
  if (!href) return null;
  const className =
    "block w-full text-left text-sm leading-snug text-[#7A7570] transition-colors hover:text-[#1C1C1A]";
  const style = { fontFamily: "'Instrument Sans', sans-serif" } as const;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} style={style}>
        {label}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className} style={style}>
      {label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[#E8E4DC]" style={{ background: C.bg2 }}>
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 lg:px-16 lg:py-20">
        <div
          className="mb-16 grid grid-cols-1 items-start gap-12 min-[600px]:grid-cols-2 min-[600px]:gap-14 min-[1060px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] min-[1060px]:gap-14"
        >
          <div className="min-w-0 min-[600px]:col-span-2 min-[1060px]:col-span-1">
            <a
              href={`${MAIN_SITE}/`}
              className="mb-5 block cursor-pointer border-0 bg-transparent p-0 uppercase"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "22px",
                letterSpacing: "2px",
                color: C.orange,
              }}
            >
              VIBECIRCLES
            </a>
            <p
              className="mb-6 max-w-[320px] text-sm leading-relaxed"
              style={{ fontFamily: "'Instrument Sans', sans-serif", color: C.dim }}
            >
              Connecting brands with communities that move culture across Southern Africa and the
              diaspora—clear strategy, real partnerships.
            </p>
            <div className="flex flex-wrap gap-3">
              {SOCIALS.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E8E4DC] bg-transparent text-[#7A7570] transition-all duration-200 hover:border-[#E8511A] hover:bg-[rgba(232,81,26,0.05)] hover:text-[#E8511A]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {cols.map((col, colIndex) => (
            <div
              key={col.title}
              className={
                colIndex === 2
                  ? "min-w-0 min-[600px]:max-[1059px]:col-span-2 min-[1060px]:col-span-1"
                  : "min-w-0"
              }
            >
              <div
                className="mb-5 text-[11px] font-medium uppercase tracking-[0.14em]"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: C.dim }}
              >
                {col.title}
              </div>
              <ul className="m-0 flex list-none flex-col items-start gap-3 p-0">
                {col.links.map((l) => (
                  <li key={`${col.title}-${l}`} className="w-full">
                    <FooterLink label={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mb-8 h-px opacity-50" style={{ background: C.border }} />

        <div className="flex flex-wrap items-center justify-between gap-6">
          <p className="text-xs" style={{ fontFamily: "'Instrument Sans', sans-serif", color: C.dim }}>
            © {new Date().getFullYear()} VibeCircles. Making energy visible. Pretoria, South Africa.
          </p>
          <span className="text-[11px] opacity-60" style={{ fontFamily: "'JetBrains Mono', monospace", color: C.dim }}>
            v1.0.4
          </span>
        </div>
      </div>
    </footer>
  );
}
