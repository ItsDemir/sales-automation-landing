import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ink-900">
      <Navbar />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
