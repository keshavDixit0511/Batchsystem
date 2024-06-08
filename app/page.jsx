import Advantages from "@/components/Advantages";
import Download from "@/components/Download";
import Faqs from "@/components/Faqs";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/ui/Navbar";


export default function Home() {
  return (
    <main className="bg-white text-black h-full w-full font-clash-display">
      <Navbar/>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Faqs/>
      <Download/>
      <Footer/>
    </main>
  );
}
