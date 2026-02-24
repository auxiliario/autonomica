import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Autonomica — The Agent Web, live.",
    template: "%s | Autonomica",
  },
  description:
    "The directory and discovery layer for the Agent Web. Ecosystem signals, publisher tools, and the specification for structured AI agent content.",
  openGraph: {
    title: "Autonomica — The Agent Web, live.",
    description:
      "The directory and discovery layer for the Agent Web.",
    url: "https://autonomi.ca",
    siteName: "Autonomica",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomica — The Agent Web, live.",
    description:
      "The directory and discovery layer for the Agent Web.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* Theme restore before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('autonomica-theme') || 'light';
                document.documentElement.setAttribute('data-theme', t);
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
