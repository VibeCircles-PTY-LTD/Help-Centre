import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeCircles Help Center",
  description:
    "Find answers to everything about VibeCircles — partnerships, services, billing, and more.",
  openGraph: {
    title: "VibeCircles Help Center",
    description:
      "Community-powered marketing. Find the answers you need.",
    siteName: "VibeCircles",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
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
