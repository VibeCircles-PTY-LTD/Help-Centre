import type { Metadata } from "next";
import "./globals.css";

const site = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://help-center.vibecircles.co.za").replace(/\/$/, "");

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: "VibeCircles Help Center",
  description:
    "Find answers about VibeCircle, the marketplace, business services, and more.",
  openGraph: {
    title: "VibeCircles Help Center",
    description:
      "Community-powered marketing. Find the answers you need.",
    siteName: "VibeCircles",
    url: site,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="skip-link"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
