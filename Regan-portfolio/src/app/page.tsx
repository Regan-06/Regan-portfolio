import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BootScreen from "@/components/BootScreen";

export default function Home() {
  return (
    <main className="relative">
      <BootScreen />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
