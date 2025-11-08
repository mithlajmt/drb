'use client';

import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/layout/Navbar";

export default function HomePage() {
  return(
    <section className="bg-black">
    <Navbar />
    <HeroSection/>
    <AboutSection/>
  </section>
  )

}