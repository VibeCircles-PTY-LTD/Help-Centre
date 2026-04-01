import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const phases = [
  {
    phase: "Phase 1",
    label: "Make it real (must-have foundation)",
    status: "Highest priority",
    items: [
      "Auth + roles: add sign in/up and role selection (Creator/Brand) with protected routes.",
      "Backend + database: replace lib/data.ts with persisted models (users, creator_profiles, brand_profiles, requests).",
      "Real connect flow: submit deal requests to DB, show status (new, accepted, rejected, completed).",
      "Basic dashboards: /dashboard/creator and /dashboard/brand to manage incoming/outgoing requests.",
      "Global states: add app/loading.tsx, app/error.tsx, app/not-found.tsx.",
    ],
  },
  {
    phase: "Phase 2",
    label: "Conversion + trust (marketplace-ready)",
    status: "Next",
    items: [
      "Messaging lite: request thread/comments per deal (no full chat first).",
      "Notifications: in-app unread indicators for request updates.",
      "Trust layer: report user/content, verification request flow, and simple moderation admin page.",
      "Legal + support: privacy, terms, cookies, faq, contact.",
      "SEO baseline: route-level metadata, OG images, sitemap.ts, robots.ts.",
    ],
  },
  {
    phase: "Phase 3",
    label: "Growth + polish",
    status: "After MVP",
    items: [
      "Payments/escrow-style milestone flow (or at least deposits).",
      "Advanced discovery: saved filters, recommended matches, better ranking.",
      "Analytics funnel: homepage -> profile -> connect submit -> accepted deal.",
      "Mobile UX pass: nav, forms, card density, and touch targets.",
      "Accessibility pass: keyboard navigation, focus styles, ARIA labels, contrast checks.",
    ],
  },
] as const;

const buildOrder = [
  "Auth + DB schema",
  "Connect form -> persisted request",
  "Creator/Brand dashboards",
  "Request status updates + notifications",
  "Legal/SEO/system pages",
  "Messaging, moderation, payments",
] as const;

const weekOneDeliverables = [
  "Replace static profiles with DB reads.",
  "Add auth guards and role-based redirect after login.",
  "Persist connect submissions.",
  "Show requests in both dashboards.",
  "Add legal pages + sitemap/robots + global error/loading/not-found.",
] as const;

export const metadata: Metadata = {
  title: "Product Roadmap | VibeCircles Help Center",
  description: "MVP-first roadmap for VibeCircles with phased delivery, build order, and week 1 scope.",
};

export default function RoadmapPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE]">
      <Navbar />

      <header className="pt-28 pb-14 px-6 md:px-10 bg-[#0A0A08]">
        <div className="max-w-5xl mx-auto">
          <p
            className="text-xs uppercase tracking-widest text-[#E8511A] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Product
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-[#F7F4EE] leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            MVP-First Roadmap
          </h1>
          <p
            className="mt-6 max-w-3xl text-[#F7F4EE]/65 text-lg leading-relaxed"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
          >
            Launch target: 2028. A phased execution plan focused on shipping the fastest path to real marketplace
            value before adding growth and polish layers.
          </p>
        </div>
      </header>

      <main id="main-content" className="max-w-5xl mx-auto px-6 md:px-10 py-14">
        <section className="grid gap-6">
          {phases.map((item) => (
            <article
              key={item.phase}
              className="rounded-2xl border border-[#E8E4DC] bg-white p-6 md:p-7 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
                <p
                  className="text-xs uppercase tracking-widest text-[#7A7570]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {item.phase}
                </p>
                <span
                  className="inline-flex w-fit items-center rounded-full border border-[#E8E4DC] bg-[#F7F4EE] px-3 py-1 text-xs text-[#1C1C1A]"
                  style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 600 }}
                >
                  {item.status}
                </span>
              </div>

              <h2
                className="text-2xl text-[#1C1C1A] mb-2"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                {item.label}
              </h2>
              <ul className="grid gap-2">
                {item.items.map((point) => (
                  <li
                    key={point}
                    className="rounded-xl border border-[#EFEAE1] bg-[#FAF9F6] px-3 py-2 text-sm text-[#5A5550]"
                    style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm">
            <h2
              className="text-xl text-[#1C1C1A] mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              Suggested Build Order (fastest path to value)
            </h2>
            <ol className="grid gap-2 list-decimal pl-5">
              {buildOrder.map((step) => (
                <li
                  key={step}
                  className="text-sm text-[#5A5550]"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {step}
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl border border-[#E8E4DC] bg-white p-6 shadow-sm">
            <h2
              className="text-xl text-[#1C1C1A] mb-4"
              style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
            >
              Concrete Week 1 Deliverables
            </h2>
            <ul className="grid gap-2">
              {weekOneDeliverables.map((item) => (
                <li
                  key={item}
                  className="rounded-xl border border-[#EFEAE1] bg-[#FAF9F6] px-3 py-2 text-sm text-[#5A5550]"
                  style={{ fontFamily: "'Instrument Sans', sans-serif" }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
