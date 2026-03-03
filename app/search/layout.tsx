import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search — VibeCircles Help Center",
  description: "Search the VibeCircles help center for articles on partnerships, billing, services, and more.",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
