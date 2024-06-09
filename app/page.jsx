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
    <main className="bg-white relative text-black h-full w-full font-clash-display z-100">
      <Navbar/>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonials/>
      <Faqs/>
      <Download/>
      <Footer/>
      {/* <Colorful/> */}
    </main>
  );
}

export const Colorful = () => {
  return (
    <div className="z-0 fixed top-0 left-0 w-full h-full pointer-events-none">
      <div
        className="spot-1 absolute top-[20%] left-[10%] w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, red, yellow)',
        }}
      ></div>
      <div
        className="spot-2 absolute top-[40%] right-[10%] w-48 h-48 rounded-full"
        style={{
          background: 'radial-gradient(circle, red, yellow)',
        }}
      ></div>
      <div
        className="spot-3 absolute bottom-[20%] left-[40%] w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, red, yellow)',
        }}
      ></div>
    </div>
  );
};
