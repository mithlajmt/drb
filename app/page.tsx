'use client';

import AboutSection from "./components/AboutSection";
import DivisionsSection from "./components/Division";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/layout/Navbar";
import MissionVisionSection from "./components/MissionVisionSection";

export default function HomePage() {
  return(
    <section className="bg-black">
    <Navbar />
    <HeroSection/>
    <AboutSection/>
    <DivisionsSection/>
    <MissionVisionSection/>
  </section>
  )

}