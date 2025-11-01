import { CTASection } from "./components/CTASection";
import { FAQ } from "./components/FAQ";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LogoCarousel } from "./components/LogoCarousel";
import { Navbar } from "./components/Navbar";
import { Stats } from "./components/Stats";
import { SupportedCountries } from "./components/SupportedCountries";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <LogoCarousel />
        <Features />
        <HowItWorks />
        <SupportedCountries />
        <Stats />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
