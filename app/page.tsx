'use client';

import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate random particles
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 30; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 8,
          duration: Math.random() * 10 + 8,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-black flex items-center justify-center">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent"></div>

      {/* Gold Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-gold/40 blur-[1px] animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              '--tw-translate-x': `${Math.random() * 100 - 50}px`,
              '--tw-translate-y': `${Math.random() * 100 - 50}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--gold)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--gold)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          
          {/* Decorative Top Line */}
          <div className="flex items-center space-x-4 opacity-0 animate-[fade-in_1s_ease-out_0.2s_forwards]">
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-r from-transparent to-gold"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-gold"></div>
            <div className="w-12 md:w-20 h-[1px] bg-gradient-to-l from-transparent to-gold"></div>
          </div>

          {/* Main Logo/Brand */}
          <div className="space-y-6 opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            {/* DrB & Co - Large Display */}
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 blur-3xl bg-gold/20"></div>
              
              <h1 className="relative text-6xl md:text-8xl lg:text-9xl font-serif font-bold tracking-wider">
                <span className="bg-gradient-to-br from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
                  DrB & Co
                </span>
              </h1>
            </div>

            {/* Decorative Divider */}
            <div className="flex items-center justify-center space-x-6 py-4">
              <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
              <div className="w-2 h-2 rotate-45 border border-gold"></div>
              <div className="w-16 md:w-24 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent"></div>
            </div>
          </div>

          {/* Tagline */}
          <div className="max-w-4xl opacity-0 animate-[fade-in_1s_ease-out_0.6s_forwards]">
            <p className="text-xl md:text-3xl lg:text-4xl font-light tracking-[0.15em] text-white/90 leading-relaxed">
              Where Excellence Meets
              <span className="block mt-2 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent font-normal">
                Global Vision
              </span>
            </p>
          </div>

          {/* Subtext */}
          <div className="opacity-0 animate-[fade-in_1s_ease-out_0.8s_forwards]">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-gold/60">
              Established 2020
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
            <div className="flex flex-col items-center space-y-3 group cursor-pointer">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gold/40 group-hover:text-gold transition-colors duration-500">
                Scroll
              </span>
              
              {/* Animated Line */}
              <div className="w-[1px] h-16 bg-gradient-to-b from-gold/40 to-transparent relative overflow-hidden">
                <div className="absolute top-0 w-full h-8 bg-gradient-to-b from-gold to-transparent animate-[slide-down_2s_ease-in-out_infinite]"></div>
              </div>
              
              {/* Chevron */}
              <ChevronDown className="w-5 h-5 text-gold/40 group-hover:text-gold animate-float transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
