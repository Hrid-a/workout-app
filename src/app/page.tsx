import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  SignUpButton,
} from "@clerk/nextjs";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import OurMession from "@/components/OurMession";
import OurPricing from "@/components/OurPricing";
import WrapperComponent from "@/components/WrapperComponent";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <WrapperComponent>
      <Header>
        <SignedOut>
          <button className="bg-primary px-4 py-3 text-center text-xl text-white rounded-lg hover:bg-primary/80 transition-colors capitalize">
            <SignInButton />
          </button>
          <button className="hidden sm:block bg-primary px-4 py-3 text-center text-xl text-white ml-3 rounded-lg hover:bg-primary/80 transition-colors capitalize">
            <SignUpButton />
          </button>
        </SignedOut>
        <SignedIn>
          <Link href="/dashboard" className="text-primary text-xl block ">
            <span className="sr-only">
              click this icon to move to the dashboard
            </span>
            <Icon name="layout-dashboard" className="" />
          </Link>
          <UserButton />
        </SignedIn>
      </Header>
      <main>
        <HeroSection />
        <OurMession />
        <OurPricing />
      </main>
      <Footer />
    </WrapperComponent>
  );
}
