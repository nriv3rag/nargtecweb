import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Methodologies from "@/components/Methodologies";
import WhyNargtec from "@/components/WhyNargtec";
import Trust from "@/components/Trust";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-void">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Showcase />
      <Methodologies />
      <WhyNargtec />
      <Trust />
      <CTABanner />
      <Footer />
    </main>
  );
}
