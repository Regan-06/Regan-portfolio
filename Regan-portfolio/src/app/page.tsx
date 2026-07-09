"use client";

import { useState } from "react";
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
  const [booted, setBooted] = useState(false);

  return (
    <main className="relative">
      <BootScreen onComplete={() => setBooted(true)} />
      <Navbar />
      <Hero booted={booted} />
      <About />
      <Services />
      <Projects />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  );
}
