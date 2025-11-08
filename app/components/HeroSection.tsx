'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Play } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* --- Premium Cinematic Background --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#050505] z-0" />

        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('/${encodeURIComponent(
              'Download it and prompt on my Freepik profile_ High….jpeg'
            )}')`,
            filter: 'contrast(1.05) brightness(0.8) saturate(0.9)',
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 z-10 backdrop-blur-[2px]" />
      </div>

      {/* --- Main Content --- */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-center min-h-screen text-center py-20">
          {/* Subtle Entry Animation */}
          <div
            className={`flex items-center justify-center space-x-4 mb-10 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-6'
            }`}
          >
            <div className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#C9A25E]" />
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#d4af37] font-extralight">
              Established 2020
            </span>
            <div className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#C9A25E]" />
          </div>

          {/* Hero Heading */}
          <div
            className={`transition-all duration-1000 delay-150 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <h1 className="font-serif font-bold leading-[1.1] text-6xl md:text-7xl lg:text-8xl tracking-tight">
              {/* Removed yellow glow, just clean gold gradient */}
              <span className="bg-gradient-to-br from-[#F6E7A2] via-[#D4AF37] to-[#8C6C1A] bg-clip-text text-transparent">
                DrB & Co
              </span>
            </h1>
          </div>

          {/* Subtitle / Tagline */}
          <div
            className={`max-w-2xl mx-auto mt-8 mb-14 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-[15px] text-white/60 font-light leading-relaxed tracking-wide">
              A multinational group redefining luxury travel and global logistics.  
              We connect markets and deliver excellence across continents — with an uncompromising standard of quality.
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {/* Primary CTA */}
            <button
              onClick={scrollToAbout}
              className="group relative flex items-center justify-center space-x-3 px-12 py-4 rounded-sm border border-[#d4af37]/70 bg-gradient-to-br from-black via-black to-[#1a1a1a] hover:from-[#d4af37] hover:to-[#f4e5a3] transition-all duration-700 min-w-[220px]"
            >
              <span className="text-[11px] uppercase tracking-[0.2em] text-[#d4af37] group-hover:text-white font-medium transition-colors duration-500">
                Explore Ventures
              </span>
              <ArrowRight className="w-4 h-4 text-[#d4af37] group-hover:text-white transform group-hover:translate-x-1 transition-all duration-500" />
            </button>

            {/* Secondary CTA */}
            <button className="group relative flex items-center justify-center space-x-3 px-12 py-4 rounded-sm border border-white/20 hover:border-[#d4af37] transition-all duration-700 min-w-[220px]">
              <div className="relative w-5 h-5 flex items-center justify-center">
                <Play className="w-4 h-4 text-[#d4af37]/70 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-[#d4af37]/10 scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <span className="text-[11px] tracking-[0.2em] uppercase font-light text-white/50 group-hover:text-[#d4af37]">
                Our Story
              </span>
            </button>
          </div>

          {/* Stats */}
          <div
            className={`flex items-center justify-center space-x-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
            }`}
          >
            {[
              { number: '4', label: 'Countries' },
              { number: '2', label: 'Divisions' },
              { number: '50+', label: 'Destinations' },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-serif font-bold text-[#d4af37] mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-white/40 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 group">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors duration-500 font-light">
            Discover More
          </div>
          <div className="relative flex flex-col items-center">
            <div className="w-[1px] h-14 bg-gradient-to-b from-[#d4af37] via-[#d4af37]/40 to-transparent group-hover:h-16 transition-all duration-700" />
            <ChevronDown className="w-4 h-4 text-[#d4af37] animate-bounce mt-1" />
          </div>
        </div>
      </div>
    </section>
  );
}
