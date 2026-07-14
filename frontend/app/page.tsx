import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030617]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </main>
  );
}