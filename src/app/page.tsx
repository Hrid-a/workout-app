import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurMession from "@/components/OurMession";
import OurPricing from "@/components/OurPricing";
import WrapperComponent from "@/components/WrapperComponent";

export default function Home() {
  return (
    <WrapperComponent>
      <Header />
      <main>
        <HeroSection />
        <OurMession />
        <OurPricing />
      </main>
      <Footer />
    </WrapperComponent>
  );
}
