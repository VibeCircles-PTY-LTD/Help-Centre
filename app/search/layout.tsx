import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search — VibeCircles Help Center",
  description:
    "Search the VibeCircles help center for articles on VibeCircle, the marketplace, business services, and more.",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
