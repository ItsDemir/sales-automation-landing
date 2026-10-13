import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
