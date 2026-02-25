import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Autonomica — The Agent Web, live.",
    template: "%s | Autonomica",
  },
  description:
    "The directory and discovery layer for the Agent Web. AI agents find, evaluate, and pay for structured content. Ecosystem signals, publisher tools, and the specification for agent-facing content.",
  keywords: [
    "AI agents", "Agent Web", "llms.txt", "HTTP 402", "micropayments",
    "agent discovery", "structured content", "MCP", "x402", "agent commerce",
  ],
  metadataBase: new URL("https://autonomi.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Autonomica — The Agent Web, live.",
    description:
      "The directory and discovery layer for the Agent Web. AI agents find, evaluate, and pay for structured content.",
    url: "https://autonomi.ca",
    siteName: "Autonomica",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Autonomica — The Agent Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomica — The Agent Web, live.",
    description:
      "The directory and discovery layer for the Agent Web. AI agents find, evaluate, and pay for structured content.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icon-512.png",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('autonomica-theme')||'light';document.documentElement.setAttribute('data-theme',t);})();`,
          }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
