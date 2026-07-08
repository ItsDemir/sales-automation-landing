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
  title: "Momentum — Autonomous B2B Sales Outreach",
  description:
    "Momentum finds your prospects, drafts personalized outreach, and runs the campaign end-to-end — so your team spends its time closing, not chasing.",
  metadataBase: new URL("https://sales-automation-landing.vercel.app"),
  openGraph: {
    title: "Momentum — Autonomous B2B Sales Outreach",
    description:
      "Find prospects, draft outreach, run the campaign. Your team focuses on closing.",
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
