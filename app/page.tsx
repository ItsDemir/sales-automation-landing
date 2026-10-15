import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyHealthcare from "@/components/WhyHealthcare";
import CompanyMapping from "@/components/CompanyMapping";
import HiringGap from "@/components/HiringGap";
import HowItWorks from "@/components/HowItWorks";
import Pipeline from "@/components/Pipeline";
import Compliance from "@/components/Compliance";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

/* Backgrounds alternate canvas / surface. Compliance continues the
   Pipeline section's canvas, so keep those two adjacent. */
export default function Home() {
  return (
    <main className="min-h-screen bg-canvas">
      <Navbar />
      <Hero />
      <WhyHealthcare />
      <CompanyMapping />
      <HiringGap />
      <HowItWorks />
      <Pipeline />
      <Compliance />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
