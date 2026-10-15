import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Momentum | Engineering Hiring Pipeline for Healthcare AI",
  description:
    "Fill your AI diagnostics team 3x faster than traditional recruiting. Momentum builds qualified engineering and product hiring pipeline from Series B-D AI diagnostics companies.",
  metadataBase: new URL("https://sales-automation-landing.vercel.app"),
  openGraph: {
    title: "Momentum | Engineering Hiring Pipeline for Healthcare AI",
    description:
      "Qualified engineering and product candidates from Series B-D AI diagnostics companies. $15 per qualified candidate.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F766E",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
